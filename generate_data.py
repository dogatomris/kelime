import json

with open('final_wordList.json', 'r', encoding='utf-8') as f:
    words = json.load(f)

# Normalize field names: word→english, translation→turkish, example→sentence
normalized = []
for w in words:
    normalized.append({
        'id':       w.get('id'),
        'english':  w.get('word', ''),
        'turkish':  w.get('translation', ''),
        'sentence': w.get('example', ''),
    })

js_content = 'const vocabularyData = ' + json.dumps(normalized, ensure_ascii=False, indent=2) + ';\n'

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Done! Wrote {len(normalized)} words to data.js")
