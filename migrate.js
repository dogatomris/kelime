require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');

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

async function run() {
    try {
        console.log("MongoDB'ye bağlanılıyor...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Bağlandı.");

        const raw = fs.readFileSync('final_wordList.json', 'utf8');
        const wordList = JSON.parse(raw);

        // Filter the ones that actually have progress
        const statesToSave = wordList.filter(w => 
            (w.ease && w.ease !== 2.5 && w.ease !== "2.5") || 
            (w.repetitions && w.repetitions !== 0 && w.repetitions !== "0") || 
            w.views > 0
        );

        console.log(`Bulk operasyon hazırlanıyor... Mevcut Json'da ${statesToSave.length} kaydedilmiş ilerleme var.`);
        
        const bulkOperations = statesToSave.map(u => ({
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
            console.log("Veriler başarıyla Atlas Veritabanına göçürüldü.");
        } else {
            console.log("Aktarılacak ilerleme bulunamadı.");
        }
        
        process.exit(0);

    } catch (err) {
        console.error("Migration başarısız", err);
        process.exit(1);
    }
}

run();
