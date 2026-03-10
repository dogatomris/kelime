'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8181;

// ─── Middleware ───────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// ─── MongoDB BAĞLANTISI ───────────────────────
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error('HATA: .env dosyasında MONGODB_URI tanımlanmamış!');
    process.exit(1);
}

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ MongoDB Atlas Başarıyla Bağlandı!'))
    .catch(err => {
        console.error('❌ MongoDB Bağlantı Hatası:', err);
        process.exit(1);
    });

// ─── Mongoose Şeması ──────────────────────────
const wordSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    ease: { type: Number, default: 2.5 },
    interval: { type: Number, default: 1 },
    repetitions: { type: Number, default: 0 },
    nextReview: { type: String, default: null },
    lastReviewed: { type: String, default: null },
    lastRating: { type: Number, default: null },
    views: { type: Number, default: 0 }
});

const Word = mongoose.model('Word', wordSchema);

// ─── API Endpoints ────────────────────────────

// 1. GET /api/words -> İstemci (Frontend) ilk açıldığında buluttaki veriyi çekmesi için
app.get('/api/words', async (req, res) => {
    try {
        const words = await Word.find({});
        res.json(words);
    } catch (err) {
        console.error('[/api/words] Hata:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// 2. POST /api/save -> Kartlar değerlendirildiğinde sonuçları toplu kaydetmek için
app.post('/api/save', async (req, res) => {
    try {
        const updates = req.body;

        if (!Array.isArray(updates)) {
            return res.status(400).json({ error: 'Veri bir dizi olmalıdır.' });
        }

        // Toplu güncelleme modeli (Bulk Update via upsert)
        const bulkOperations = updates.map(u => ({
            updateOne: {
                filter: { id: parseInt(u.id) },
                update: { $set: {
                    ease: parseFloat(u.ease) || 2.5,
                    interval: parseInt(u.interval) || 1,
                    repetitions: parseInt(u.repetitions) || 0,
                    nextReview: u.nextReview || null,
                    lastReviewed: u.lastReviewed ?? null,
                    lastRating: u.lastRating !== undefined ? parseInt(u.lastRating) : null,
                    views: parseInt(u.views) || 0
                }},
                upsert: true
            }
        }));

        if (bulkOperations.length > 0) {
            await Word.bulkWrite(bulkOperations);
        }

        res.json({ ok: true, saved: updates.length });
    } catch (err) {
        console.error('[/api/save] Hata:', err.message);
        res.status(500).json({ error: err.message });
    }
});

// ─── Start ───────────────────────────────────
app.listen(PORT, () => {
    console.log(`🚀 FlashCard Uygulaması MongoDB Altyapısıyla Başladı: http://localhost:${PORT}`);
    console.log('--------------------------------------------');
});
