import fitz  # PyMuPDF
import re
import json
import time
import google.generativeai as genai


# 1. API Ayarları (Google AI Studio'dan alacağın ücretsiz API key'i buraya gir)
genai.configure(api_key="AIzaSyCwipAT2E_vBghaYQqbBDQ_s1SR5WFyXOk")
model = genai.GenerativeModel('gemini-3-flash-preview')

def extract_words_from_pdf(pdf_path):
    print("PDF okunuyor...")
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    
    # Oxford PDF'indeki kelime formatını yakalamak için Regex
    words = re.findall(r'^([a-zA-Z-]+)\s+(?:n\.|v\.|adj\.|adv\.|prep\.|pron\.|conj\.)', text, re.MULTILINE)
    
    # Tekrarları temizle ve alfabetik olarak sırala
    unique_words = sorted(list(set(words)))
    print(f"Toplam {len(unique_words)} benzersiz kelime bulundu.")
    return unique_words

def generate_flashcard_data(words_batch, start_id):
    prompt = f"""
    Aşağıdaki İngilizce kelimeler için bir JSON dizisi oluştur.
    Her kelime için:
    1. 'id': {start_id} değerinden başlayarak artan bir sayı.
    2. 'word': Kelimenin kendisi.
    3. 'translation': Kelimenin en yaygın Türkçe karşılığı.
    4. 'example': Bu kelimeyi içeren, A2 seviyesi veya üstü (B1/B2) yetişkinlere uygun, anlamlı bir İngilizce örnek cümle.

    Kelimeler: {', '.join(words_batch)}
    
    Sadece geçerli bir JSON çıktısı ver, başına veya sonuna başka hiçbir metin (markdown vb.) ekleme.
    Format: [{{"id": 1, "word": "...", "translation": "...", "example": "..."}}]
    """
    
    try:
        response = model.generate_content(prompt)
        json_text = response.text.replace('```json', '').replace('```', '').strip()
        return json.loads(json_text)
    except Exception as e:
        print(f"Hata detayı: {e}")
        return []

def main():
    pdf_path = "American_Oxford_3000.pdf" 
    
    try:
        words = extract_words_from_pdf(pdf_path)
    except FileNotFoundError:
        print(f"Hata: '{pdf_path}' dosyası bulunamadı. PDF ile Python dosyası aynı klasörde olmalı.")
        return

    all_flashcards = []
    batch_size = 50 
    current_id = 1
    
    # DİKKAT: [:60] sınırı kaldırıldı. Artık tüm kelimeler işlenecek.
    words_to_process = words 

    print(f"\nToplam {len(words_to_process)} kelime için A2+ örnek cümleler oluşturuluyor...")
    print("Bu işlem API limitlerinden dolayı uzun sürebilir. İlerleme her adımda otomatik kaydedilecektir.")
    
    for i in range(2550, len(words_to_process), batch_size):
        batch = words_to_process[i:i + batch_size]
        print(f"İşleniyor: {i+1} - {min(i+batch_size, len(words_to_process))} / {len(words_to_process)}")
        
        # API sınırlarına takılma ihtimaline karşı tekrar deneme (retry) mekanizması
        max_retries = 3
        for attempt in range(max_retries):
            batch_data = generate_flashcard_data(batch, current_id)
            if batch_data:
                all_flashcards.extend(batch_data)
                current_id += len(batch_data)
                break # Başarılı olursa döngüden çık
            else:
                print(f"Uyarı: İstek başarısız oldu. {attempt + 1}. tekrar deneniyor. 10 saniye bekleniyor...")
                time.sleep(10)
        
        # OTO-KAYIT: Her 30 kelimede bir dosyayı günceller. 
        # Elektrik gitse veya program çökse bile o ana kadar çekilen kelimeler güvendedir.
        with open('wordList.json', 'w', encoding='utf-8') as f:
            json.dump(all_flashcards, f, ensure_ascii=False, indent=4)
            
        # Google API hız limitine takılmamak için her istek arası güvenli bekleme süresi
        time.sleep(4) 
        
    print("\nİşlem başarıyla tamamlandı! Tüm kelimeler 'wordList.json' adlı dosyaya kaydedildi.")

if __name__ == "__main__":
    main()
