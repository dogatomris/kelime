/* ════════════════════════════════════════════
   Vocabulary Builder — App Logic v3
   SM-2 Spaced Repetition System

   Word state per word:
     ease        – difficulty factor (start: 2.5)
     interval    – days until next review
     repetitions – consecutive correct answers
     nextReview  – Date string (yyyy-mm-dd) or null
     lastRating  – 0 | 1 | 2 | null
     views       – total times seen
════════════════════════════════════════════ */

'use strict';

// ─── Constants ───────────────────────────────
const STATE_KEY = 'vb_state_v3';
const DAILY_GOAL = 5;

const RATING = { DONT_KNOW: 0, HARD: 1, EASY: 2 };

// ─── Date helpers (no time, just YYYY-MM-DD) ─
function today() { return dateStr(new Date()); }
function dateStr(d) {
    return d.toISOString().slice(0, 10);
}
function addDays(base, n) {
    const d = new Date(base);
    d.setDate(d.getDate() + n);
    return dateStr(d);
}
function daysBetween(a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
}

// ─── SM-2 Core ───────────────────────────────
/**
 * Apply a SM-2-style rating to a word record.
 * @param {object} w   - word state
 * @param {number} rating - 0 | 1 | 2
 * @returns {object}   - updated word state (mutates in place, also returns)
 */
function applyRating(w, rating) {
    const todayStr = today();

    if (rating === RATING.DONT_KNOW) {
        // Full reset
        w.repetitions = 0;
        w.interval = 1;
        w.ease = Math.max(1.3, w.ease - 0.2);

    } else if (rating === RATING.HARD) {
        // Slight progress
        w.repetitions += 1;
        w.interval = Math.max(1, Math.round(w.interval * 1.2));
        w.ease = Math.max(1.3, w.ease - 0.05);

    } else {
        // EASY – real "learned" signal
        if (w.repetitions === 0) {
            // First correct – short interval before true spacing begins
            w.interval = 1;
        } else {
            w.interval = Math.max(1, Math.round(w.interval * w.ease));
        }
        w.repetitions += 1;
        w.ease = Math.min(4.0, w.ease + 0.1);
    }

    w.nextReview = addDays(todayStr, w.interval);
    w.lastRating = rating;
    w.views++;
    w.lastReviewed = todayStr;
    return w;
}

// ─── Derived "status" for UI ─────────────────
// known    → repetitions > 0 (has been marked as Easy or Hard successfully)
// learning → seen but repetitions == 0 (still learning)
// unseen   → never reviewed
function wordStatus(w) {
    if (w.nextReview === null) return 'unseen';
    if (w.repetitions > 0 || w.interval >= 2) return 'known';
    return 'learning';
}

// ─── State Bootstrap ─────────────────────────
let state = loadState();

function makeWordEntry(raw) {
    return {
        ...raw,
        ease: 2.5,
        interval: 1,
        repetitions: 0,
        nextReview: null,
        lastRating: null,
        views: 0,
        lastReviewed: null,
    };
}

function defaultState() {
    const words = {};
    vocabularyData.forEach(w => { words[w.id] = makeWordEntry(w); });
    return {
        words,
        dailyGoal: DAILY_GOAL,
        dailyProgress: 0,
        streak: 0,
        lastGoalDate: null,
        lastActiveDate: today(),
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STATE_KEY);
        if (!raw) return defaultState();
        const s = JSON.parse(raw);

        // Merge newly added words from data.js
        vocabularyData.forEach(w => {
            if (!s.words[w.id]) s.words[w.id] = makeWordEntry(w);
        });

        // New day → reset daily progress
        if (s.lastActiveDate !== today()) {
            s.dailyProgress = 0;
            s.lastActiveDate = today();
        }

        return s;
    } catch (e) {
        return defaultState();
    }
}

function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
    syncToDatabase(); // ← MongoDB'ye kaydet
}

function saveStateLocalOnly() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

// ─── Veritabanına Kaydet ────────────────────
// Her değerlendirmede MongoDB güncellenir
function syncToDatabase() {
    // Sadece üzerinde işlem yapılmış (görüntülenmiş/çalışılmış) kelimeleri gönder
    const modifiedWords = Object.values(state.words).filter(w => w.views > 0 || w.lastReviewed !== null);
    if (modifiedWords.length === 0) return;

    const payload = modifiedWords.map(w => ({
        id: w.id,
        ease: w.ease,
        interval: w.interval,
        repetitions: w.repetitions,
        nextReview: w.nextReview,
        lastReviewed: w.lastReviewed,
        lastRating: w.lastRating,
        views: w.views,
    }));
    fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }).catch(() => {
        // Sunucu çalışmıyorsa sessizce geç — localStorage yine de geçerli
    });
}

// ─── Haptic helper ───────────────────────────
function haptic(pattern = [10]) {
    if (navigator.vibrate) navigator.vibrate(pattern);
}

// ─── Mark word + daily progress + streak ─────
function markWord(id, rating) {
    const w = state.words[id];
    const old = wordStatus(w);

    applyRating(w, rating);
    const nw = wordStatus(w);

    // Daily goal: count each EASY rating (new "known" transitions)
    if (rating === RATING.EASY && old !== 'known') {
        state.dailyProgress++;
        checkDailyGoal();
    }
    // If word falls back from known → undo (edge case)
    if (old === 'known' && nw !== 'known') {
        state.dailyProgress = Math.max(0, state.dailyProgress - 1);
    }

    saveState();
}

function checkDailyGoal() {
    if (state.dailyProgress >= state.dailyGoal) {
        if (state.lastGoalDate !== today()) {
            const yesterday = addDays(today(), -1);
            state.streak = (state.lastGoalDate === yesterday) ? state.streak + 1 : 1;
            state.lastGoalDate = today();
            saveState();
            setTimeout(launchConfetti, 400);
        }
    }
}

// ─── SM-2 Flashcard Pool ─────────────────────
function getFlashcardPool() {
    const all = Object.values(state.words);
    const todayStr = today();

    // Priority 1: due today (nextReview <= today)
    const due = all.filter(w => w.nextReview !== null && w.nextReview <= todayStr);
    // Priority 2: unseen
    const unseen = all.filter(w => w.nextReview === null);
    // Priority 3: known but we sprinkle 1–2 in for reinforcement
    const known = all.filter(w => wordStatus(w) === 'known' && !(w.nextReview <= todayStr));

    let pool = shuffle(due);
    pool = pool.concat(shuffle(unseen));
    // Add at most 2 known cards at end for passive reinforcement
    pool = pool.concat(shuffle(known).slice(0, 2));

    // Never return empty
    if (pool.length === 0) pool = shuffle(all).slice(0, 10);
    return pool;
}

// ─── SM-2 Test Pool ──────────────────────────
function getTestPool() {
    const all = Object.values(state.words);
    const todayStr = today();

    const poor = all.filter(w =>
        w.ease < 2.3 ||  // struggling words
        w.lastRating === RATING.DONT_KNOW ||  // last attempt wrong
        (w.nextReview !== null && w.nextReview <= todayStr)          // due today
    );

    let pool = shuffle(poor);
    if (pool.length < 5) {
        const others = shuffle(all.filter(w => !poor.includes(w)));
        pool = pool.concat(others.slice(0, 10 - pool.length));
    }

    return pool.slice(0, 10);
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ════════════════════════════════════════════
// ROUTING
// ════════════════════════════════════════════
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
let activeView = 'flashcard-view';

function switchView(targetId) {
    views.forEach(v => v.classList.remove('active'));
    document.getElementById(targetId)?.classList.add('active');
    navItems.forEach(n => n.classList.toggle('active', n.dataset.target === targetId));
    activeView = targetId;
    if (targetId === 'flashcard-view') initFlashcards();
    if (targetId === 'test-view') initTest();
    if (targetId === 'learned-view') renderLearned();
    if (targetId === 'progress-view') renderProgress();
}

navItems.forEach(n => n.addEventListener('click', () => switchView(n.dataset.target)));
document.querySelectorAll('.back-btn[data-target]').forEach(b => {
    b.addEventListener('click', () => switchView(b.dataset.target));
});
document.getElementById('btn-fc-stats')?.addEventListener('click', () => switchView('progress-view'));

// ════════════════════════════════════════════
// FLASHCARD FEATURE
// ════════════════════════════════════════════
let fcPool = [];
let fcIndex = 0;
let fcFlipped = false;

const fcCard = document.getElementById('active-flashcard');
const fcActions = document.getElementById('fc-actions');
const fcComplete = document.getElementById('session-complete');
const fcDotRow = document.getElementById('fc-dot-row');

function initFlashcards() {
    fcPool = getFlashcardPool();
    fcIndex = 0;
    fcFlipped = false;
    renderFcDots();
    renderFcCard();
    renderProgress();
}

function renderFcDots() {
    fcDotRow.innerHTML = '';
    const total = Math.min(fcPool.length, 12);
    for (let i = 0; i < total; i++) {
        const d = document.createElement('span');
        d.className = 'fc-dot' + (i < fcIndex ? ' done' : i === fcIndex ? ' current' : '');
        fcDotRow.appendChild(d);
    }
}

// Handler for the "Review Learned Words" button
document.getElementById('btn-review-learned')?.addEventListener('click', () => {
    const known = Object.values(state.words).filter(w => wordStatus(w) === 'known');
    if (known.length === 0) {
        alert("Tekrar edilecek öğrenilmiş kelime yok.");
        return;
    }
    // Override flashcard pool with up to 15 random known words
    fcPool = shuffle(known).slice(0, 15);
    fcIndex = 0;
    fcFlipped = false;
    
    // Switch to flashcard view without clearing this temporary pool
    views.forEach(v => v.classList.remove('active'));
    document.getElementById('flashcard-view').classList.add('active');
    navItems.forEach(n => n.classList.toggle('active', n.dataset.target === 'flashcard-view'));
    activeView = 'flashcard-view';
    
    renderFcDots();
    renderFcCard();
});

function renderFcCard() {
    fcComplete.classList.add('hidden');
    fcCard.closest('.card-stage').style.display = '';

    if (fcIndex >= fcPool.length) {
        showSessionComplete();
        return;
    }

    const w = fcPool[fcIndex];
    document.getElementById('fc-english').textContent = w.english;
    document.getElementById('fc-english-back').textContent = w.english;
    document.getElementById('fc-turkish').textContent = w.turkish;
    document.getElementById('fc-sentence').textContent = w.sentence;
    document.getElementById('fc-pos').textContent = getIntervalBadge(w);

    // Reset flip
    fcCard.classList.remove('flipped');
    fcFlipped = false;
    fcActions.classList.add('hidden');
    renderFcDots();
}

function getIntervalBadge(w) {
    if (w.nextReview === null) return 'Yeni';
    if (w.interval >= 7) return `📅 ${w.interval} gün`;
    if (w.interval >= 2) return `📅 ${w.interval} gün`;
    return '📅 Bugün';
}

function showSessionComplete() {
    fcCard.closest('.card-stage').style.display = 'none';
    fcActions.classList.add('hidden');
    fcComplete.classList.remove('hidden');
}

fcCard.addEventListener('click', flipCard);
fcCard.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') flipCard(); });

function flipCard() {
    if (fcFlipped) return;
    fcFlipped = true;
    fcCard.classList.add('flipped');
    haptic([8]);
    // Show the rating buttons
    fcActions.classList.remove('hidden');
}

// Action buttons — now apply SM-2 ratings
document.getElementById('btn-dont-know').addEventListener('click', () => handleFcAction(RATING.DONT_KNOW));
document.getElementById('btn-hard').addEventListener('click', () => handleFcAction(RATING.HARD));
document.getElementById('btn-easy').addEventListener('click', () => handleFcAction(RATING.EASY));

// ─── Text-to-Speech ──────────────────────────
const speakFront = document.getElementById('btn-speak-front');
const speakBack = document.getElementById('btn-speak-back');

function speakWord(word) {
    if (!window.speechSynthesis) return;
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utt = new SpeechSynthesisUtterance(word);
    utt.lang = 'en-US';
    utt.rate = 0.88;   // slightly slower → clearer pronunciation
    utt.pitch = 1.0;

    // Pick the best English voice available
    const voices = speechSynthesis.getVoices();
    const engVoice = voices.find(v => v.lang.startsWith('en') && v.localService) ||
        voices.find(v => v.lang.startsWith('en')) || null;
    if (engVoice) utt.voice = engVoice;

    // Visual pulse while speaking
    [speakFront, speakBack].forEach(btn => btn.classList.add('speaking'));
    utt.onend = utt.onerror = () =>
        [speakFront, speakBack].forEach(btn => btn.classList.remove('speaking'));

    haptic([8]);
    speechSynthesis.speak(utt);
}

// Speak buttons — stop propagation so they don't flip the card
speakFront.addEventListener('click', e => {
    e.stopPropagation();
    const word = document.getElementById('fc-english').textContent;
    if (word) speakWord(word);
});

speakBack.addEventListener('click', e => {
    e.stopPropagation();
    const word = document.getElementById('fc-english-back').textContent;
    if (word) speakWord(word);
});



function handleFcAction(rating) {
    if (!fcFlipped) return; // must flip first
    const w = fcPool[fcIndex];
    markWord(w.id, rating);
    haptic(rating === RATING.EASY ? [10, 30, 10] : [8]);
    fcIndex++;
    renderFcCard();
    renderProgress();
}

document.getElementById('btn-review-again').addEventListener('click', initFlashcards);

// ════════════════════════════════════════════
// TEST FEATURE — final_wordList.json kaynağından
// Cümledeki kelime boşluk olarak sorulur
// ════════════════════════════════════════════
let testPool = [];
let testIndex = 0;
let testScore = 0;
let testChecked = false;
let testPendingRating = null;
let jsonWordList = null; // final_wordList.json cache

const testSentenceEl = document.getElementById('test-sentence');
const testInputEl = document.getElementById('test-input');
const testFeedbackEl = document.getElementById('test-feedback');
const testNextBtn = document.getElementById('btn-test-next');
const testForm = document.getElementById('test-form');

// JSON kelime listesini yükle (bir kez)
async function loadJsonWordList() {
    if (jsonWordList) return jsonWordList;
    try {
        const res = await fetch('/final_wordList.json');
        jsonWordList = await res.json();
        return jsonWordList;
    } catch (e) {
        console.error('final_wordList.json yüklenemedi:', e);
        return [];
    }
}

// Test havuzunu final_wordList.json'dan oluştur
async function getTestPoolFromJson() {
    const allJson = await loadJsonWordList();
    if (allJson.length === 0) return [];

    const todayStr = today();

    // SM-2 durumlarına göre öncelikli seçim (state'ten)
    const stateWords = Object.values(state.words);
    const poorIds = new Set();
    stateWords.forEach(w => {
        if (w.ease < 2.3 ||
            w.lastRating === RATING.DONT_KNOW ||
            (w.nextReview !== null && w.nextReview <= todayStr)) {
            poorIds.add(w.id);
        }
    });

    // JSON'dan eşleşen kelimeleri al
    const poorPool = allJson.filter(j => poorIds.has(j.id));
    const otherPool = allJson.filter(j => !poorIds.has(j.id));

    let pool = shuffle(poorPool);
    if (pool.length < 5) {
        pool = pool.concat(shuffle(otherPool).slice(0, 10 - pool.length));
    }

    return pool.slice(0, 10);
}

async function initTest() {
    testPool = await getTestPoolFromJson();
    testIndex = 0;
    testScore = 0;
    testChecked = false;
    document.getElementById('test-q-total').textContent = testPool.length;
    document.getElementById('test-result-overlay').classList.add('hidden');
    renderTestQuestion();
}

function renderTestQuestion() {
    if (testPool.length === 0) { showTestResult(); return; }
    testChecked = false;
    testPendingRating = null;

    const w = testPool[testIndex];
    const progress = testIndex / testPool.length;
    document.getElementById('test-q-current').textContent = testIndex + 1;
    document.getElementById('test-progress-fill').style.width = (progress * 100) + '%';

    // Cümledeki kelimeyi boşluk yap (final_wordList.json: word, example)
    const wordToBlank = w.word;
    const sentence = w.example || '';
    const safe = wordToBlank.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const blanked = sentence.replace(new RegExp(safe, 'gi'), '_____');
    testSentenceEl.innerHTML = blanked + '<br><span style="font-size:14px;color:var(--text-muted);margin-top:8px;display:inline-block;">💡 İpucu: <strong>' + escHtml(w.translation) + '</strong></span>';

    testInputEl.value = '';
    testInputEl.disabled = false;
    testInputEl.className = '';
    testInputEl.focus();
    testFeedbackEl.className = 'test-feedback hidden';
    document.getElementById('btn-test-check').classList.remove('hidden');
    testNextBtn.classList.add('hidden');
}

testForm.addEventListener('submit', e => { e.preventDefault(); if (!testChecked) checkTestAnswer(); });

function checkTestAnswer() {
    if (testChecked || testIndex >= testPool.length) return;
    testChecked = true;

    const w = testPool[testIndex];
    const answer = testInputEl.value.trim().toLowerCase();
    const correct = w.word.toLowerCase();
    const isRight = answer === correct;

    testInputEl.disabled = true;
    document.getElementById('btn-test-check').classList.add('hidden');
    testNextBtn.classList.remove('hidden');

    if (isRight) {
        testScore++;
        testInputEl.classList.add('correct');
        haptic([10, 30, 10]);
        testPendingRating = RATING.EASY;
        showFeedback(true, '✅ Harika! Doğru!', null);
    } else {
        testInputEl.classList.add('wrong');
        testInputEl.classList.add('shake');
        haptic([30, 20, 30]);
        testPendingRating = RATING.DONT_KNOW;
        showFeedback(false, `❌ Doğru cevap: "${w.word}"`, w.example);
    }
}

function showFeedback(correct, text, sentence) {
    const icon = document.getElementById('feedback-icon');
    const textEl = document.getElementById('feedback-text');
    const sentEl = document.getElementById('feedback-sentence');
    icon.textContent = correct ? '🌟' : '💡';
    textEl.textContent = text;
    if (sentence) { sentEl.textContent = sentence; sentEl.classList.remove('hidden'); }
    else { sentEl.classList.add('hidden'); }
    testFeedbackEl.className = 'test-feedback ' + (correct ? 'correct-fb' : 'wrong-fb');
}

testNextBtn.addEventListener('click', () => {
    // Apply SM-2 rating for this question
    if (testPendingRating !== null) {
        const w = testPool[testIndex];
        // w.id ile state'teki kelimeyi güncelle
        if (state.words[w.id]) {
            markWord(w.id, testPendingRating);
        }
    }
    testIndex++;
    if (testIndex >= testPool.length) showTestResult();
    else renderTestQuestion();
});

function showTestResult() {
    const total = testPool.length;
    const pct = total ? Math.round((testScore / total) * 100) : 0;
    const ov = document.getElementById('test-result-overlay');
    document.getElementById('result-emoji').textContent = pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📖';
    document.getElementById('result-title').textContent = pct >= 80 ? 'Mükemmel!' : pct >= 50 ? 'İyi gidiyorsun!' : 'Biraz daha çalış!';
    document.getElementById('result-subtitle').textContent = `${testScore} doğru, ${total - testScore} yanlış`;
    document.getElementById('result-score').textContent = `${pct}%`;
    document.getElementById('test-progress-fill').style.width = '100%';
    ov.classList.remove('hidden');
    renderProgress();
}

document.getElementById('btn-result-home').addEventListener('click', () => {
    document.getElementById('test-result-overlay').classList.add('hidden');
    switchView('flashcard-view');
});

// ════════════════════════════════════════════
// LEARNED WORDS VIEW
// ════════════════════════════════════════════
function renderLearned() {
    const list = document.getElementById('learned-list');
    const empty = document.getElementById('learned-empty');
    const badge = document.getElementById('learned-count-badge');
    const known = Object.values(state.words)
        .filter(w => wordStatus(w) === 'known')
        .sort((a, b) => (b.lastReviewed || '') > (a.lastReviewed || '') ? 1 : -1);

    badge.textContent = known.length;
    list.innerHTML = '';

    if (known.length === 0) { 
        empty.classList.remove('hidden'); 
        document.getElementById('learned-actions-area').classList.add('hidden');
        return; 
    }
    empty.classList.add('hidden');
    document.getElementById('learned-actions-area').classList.remove('hidden');

    known.forEach(w => list.appendChild(createLearnedItem(w)));
}

// Handler for the "Review Learned Words" buttons
document.getElementById('btn-learned-test-cards')?.addEventListener('click', () => {
    const known = Object.values(state.words).filter(w => wordStatus(w) === 'known');
    if (known.length === 0) return;
    
    // Override flashcard pool with up to 15 random known words
    fcPool = shuffle(known).slice(0, 15);
    fcIndex = 0;
    fcFlipped = false;
    
    views.forEach(v => v.classList.remove('active'));
    document.getElementById('flashcard-view').classList.add('active');
    navItems.forEach(n => n.classList.toggle('active', n.dataset.target === 'flashcard-view'));
    activeView = 'flashcard-view';
    
    renderFcDots();
    renderFcCard();
});

document.getElementById('btn-learned-test-write')?.addEventListener('click', async () => {
    const knownStates = Object.values(state.words).filter(w => wordStatus(w) === 'known');
    if (knownStates.length === 0) return;

    // We need the full json objects for the test (for words and examples)
    const allJson = await loadJsonWordList();
    if (allJson.length === 0) return;

    const knownIds = new Set(knownStates.map(w => w.id));
    const knownJsonWords = allJson.filter(j => knownIds.has(j.id));
    
    // Pick up to 10 random known words to test
    const customPool = shuffle(knownJsonWords).slice(0, 10);
    if (customPool.length === 0) return;
    
    // Initialize test with this custom pool
    testPool = customPool;
    testIndex = 0;
    testScore = 0;
    testChecked = false;
    document.getElementById('test-q-total').textContent = testPool.length;
    document.getElementById('test-result-overlay').classList.add('hidden');
    renderTestQuestion();
    
    // Navigate to test view
    views.forEach(v => v.classList.remove('active'));
    document.getElementById('test-view').classList.add('active');
    navItems.forEach(n => n.classList.toggle('active', n.dataset.target === 'test-view'));
    activeView = 'test-view';
});

function createLearnedItem(w) {
    const li = document.createElement('li');
    li.className = 'learned-item';
    li.dataset.id = w.id;

    const dateDisplay = w.lastReviewed
        ? new Date(w.lastReviewed + 'T12:00:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
        : '—';
    const nextStr = w.nextReview
        ? new Date(w.nextReview + 'T12:00:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })
        : '—';

    li.innerHTML = `
        <div class="learned-item-header">
            <span class="learned-word-en">${escHtml(w.english)}</span>
            <div style="display:flex;align-items:center;gap:4px">
                <span class="learned-status-icon">✅</span>
                <span class="expand-chevron">▼</span>
            </div>
        </div>
        <div class="learned-item-detail">
            <p class="detail-meaning">Türkçe: <strong>${escHtml(w.turkish)}</strong></p>
            <p class="detail-sentence">"${escHtml(w.sentence)}"</p>
            <p class="detail-meta">Son tekrar: ${dateDisplay} · Sonraki: ${nextStr} · Aralık: ${w.interval} gün</p>
            <button class="btn-re-add" data-id="${w.id}">🔁 Tekrar Listesine Ekle</button>
        </div>
    `;

    li.querySelector('.learned-item-header').addEventListener('click', () => li.classList.toggle('expanded'));

    li.querySelector('.btn-re-add').addEventListener('click', e => {
        e.stopPropagation();
        // Reset interval so the word comes back soon
        const word = state.words[w.id];
        word.ease = Math.max(1.3, word.ease - 0.15);
        word.interval = 1;
        word.repetitions = 0;
        word.nextReview = addDays(today(), 1);
        word.lastRating = RATING.DONT_KNOW;
        state.dailyProgress = Math.max(0, state.dailyProgress - 1);
        saveState();
        li.remove();
        const remaining = document.querySelectorAll('.learned-item').length;
        document.getElementById('learned-count-badge').textContent = remaining;
        if (remaining === 0) document.getElementById('learned-empty').classList.remove('hidden');
        haptic([10]);
    });

    return li;
}

// ════════════════════════════════════════════
// PROGRESS VIEW
// ════════════════════════════════════════════
function renderProgress() {
    const all = Object.values(state.words);
    const total = all.length;
    const known = all.filter(w => wordStatus(w) === 'known').length;
    const learning = all.filter(w => wordStatus(w) === 'learning').length;
    const unseen = total - known - learning;

    document.getElementById('stat-streak').textContent = state.streak;
    document.getElementById('stat-goal-done').textContent = state.dailyProgress;
    document.getElementById('stat-goal-total').textContent = state.dailyGoal;
    document.getElementById('legend-known').textContent = known;
    document.getElementById('legend-learning').textContent = learning;
    document.getElementById('legend-unseen').textContent = unseen;
    document.getElementById('donut-total').textContent = total;

    const pct = Math.min(100, (state.dailyProgress / state.dailyGoal) * 100);
    document.getElementById('daily-fill').style.width = pct + '%';
    document.getElementById('daily-label').textContent = `${state.dailyProgress} / ${state.dailyGoal}`;

    // SVG Donut (r=44, circ ≈ 276.46)
    const circ = 2 * Math.PI * 44;
    const knownFrac = total ? known / total : 0;
    const learnFrac = total ? learning / total : 0;
    const knownDash = circ * knownFrac;
    const learnDash = circ * learnFrac;

    // quarter-turn offset so chart starts at top
    const QT = circ * 0.25;

    const segKnown = document.getElementById('seg-known');
    const segLearn = document.getElementById('seg-learning');

    segKnown.setAttribute('stroke-dasharray', `${knownDash} ${circ - knownDash}`);
    segKnown.setAttribute('stroke-dashoffset', QT);

    segLearn.setAttribute('stroke-dasharray', `${learnDash} ${circ - learnDash}`);
    // Offset = start after known segment
    segLearn.setAttribute('stroke-dashoffset', QT - knownDash);
}

// ════════════════════════════════════════════
// CONFETTI (lightweight canvas)
// ════════════════════════════════════════════
(function initConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    let pieces = [];
    let animId = null;
    const COLORS = ['#58CC02', '#1CB0F6', '#FF9600', '#FF4B4B', '#CE82FF', '#FFD700'];

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    function rndPiece() {
        return {
            x: Math.random() * canvas.width,
            y: -Math.random() * 60,
            w: 6 + Math.random() * 8,
            h: 8 + Math.random() * 6,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            rot: Math.random() * 360,
            rotS: (Math.random() - .5) * 6,
            vx: (Math.random() - .5) * 3,
            vy: 3 + Math.random() * 3,
            alpha: 1,
        };
    }

    function tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces = pieces.filter(p => p.alpha > 0.01);
        pieces.forEach(p => {
            p.x += p.vx; p.y += p.vy; p.rot += p.rotS;
            if (p.y > canvas.height * .7) p.alpha -= .022;
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        if (pieces.length > 0) animId = requestAnimationFrame(tick);
        else { cancelAnimationFrame(animId); animId = null; }
    }

    window.launchConfetti = function () {
        resize();
        for (let i = 0; i < 130; i++) setTimeout(() => pieces.push(rndPiece()), i * 13);
        if (!animId) tick();
    };
})();

// ─── Utility ─────────────────────────────────
function escHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── State Sync from Backend ────────────────
async function syncFromDatabase() {
    try {
        const res = await fetch('/api/words');
        if (!res.ok) return;
        const dbWords = await res.json();
        
        let changed = false;
        
        // Update local state with DB truth
        dbWords.forEach(dbw => {
            const lw = state.words[dbw.id];
            if (!lw) return;
            
            // Eğer veritabanındaki görünüm sayısı veya tarih localkinden yeniyse DB'yi esas al
            // ÖNEMLİ DÜZELTME: Aynı gün (>= yerine >) veritabanı boşuna eskisini ezmemeli! 
            // views sayısına güvenmek daha garanti.
            const isDbNewerDate = dbw.lastReviewed && lw.lastReviewed && dbw.lastReviewed > lw.lastReviewed;
            const isDbSameDateMoreViews = dbw.lastReviewed === lw.lastReviewed && dbw.views > lw.views;
            const isLocalEmpty = !lw.lastReviewed && dbw.lastReviewed;
            const isDbMoreViewsOverall = dbw.views > lw.views;

            if (isDbNewerDate || isDbSameDateMoreViews || isLocalEmpty || isDbMoreViewsOverall) {
                lw.ease = dbw.ease;
                lw.interval = dbw.interval;
                lw.repetitions = dbw.repetitions;
                lw.nextReview = dbw.nextReview;
                lw.lastReviewed = dbw.lastReviewed;
                lw.lastRating = dbw.lastRating;
                lw.views = dbw.views;
                changed = true;
            }
        });

        if (changed) {
            saveStateLocalOnly();
            if (activeView === 'flashcard-view') initFlashcards();
            if (activeView === 'progress-view') renderProgress();
            if (activeView === 'learned-view') renderLearned();
        }
    } catch (e) {
        console.error('DB Sync Error:', e);
    }
}

// ─── Boot ─────────────────────────────────────
initFlashcards();
renderProgress();
syncFromDatabase();
