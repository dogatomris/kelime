const vocabularyData = [
  {
    "id": 1,
    "english": "April",
    "turkish": "Nisan",
    "sentence": "My birthday is in April, so I often celebrate it with spring flowers."
  },
  {
    "id": 2,
    "english": "August",
    "turkish": "Ağustos",
    "sentence": "Many people go on vacation in August because the weather is usually very warm."
  },
  {
    "id": 3,
    "english": "CD",
    "turkish": "CD",
    "sentence": "Although streaming is popular, I still enjoy listening to music on a physical CD."
  },
  {
    "id": 4,
    "english": "DVD",
    "turkish": "DVD",
    "sentence": "We watched our favorite movie on DVD last night, as the internet was down."
  },
  {
    "id": 5,
    "english": "December",
    "turkish": "Aralık",
    "sentence": "The whole family gathers together in December to celebrate Christmas."
  },
  {
    "id": 6,
    "english": "February",
    "turkish": "Şubat",
    "sentence": "February is often the coldest month of the year in many parts of the world."
  },
  {
    "id": 7,
    "english": "Friday",
    "turkish": "Cuma",
    "sentence": "Most people look forward to Friday because it's the start of the weekend."
  },
  {
    "id": 8,
    "english": "I",
    "turkish": "Ben",
    "sentence": "I believe it's important to always try your best in everything you do."
  },
  {
    "id": 9,
    "english": "IT",
    "turkish": "BT (Bilgi Teknolojisi)",
    "sentence": "Working in IT requires a strong understanding of computer systems and networks."
  },
  {
    "id": 10,
    "english": "January",
    "turkish": "Ocak",
    "sentence": "New Year's resolutions are usually made in January, hoping for a fresh start."
  },
  {
    "id": 11,
    "english": "July",
    "turkish": "Temmuz",
    "sentence": "Many schools close for summer holidays in July, offering a long break for students."
  },
  {
    "id": 12,
    "english": "June",
    "turkish": "Haziran",
    "sentence": "The weather in June is usually very pleasant, perfect for outdoor activities."
  },
  {
    "id": 13,
    "english": "March",
    "turkish": "Mart",
    "sentence": "In March, the first signs of spring begin to appear, with flowers blooming."
  },
  {
    "id": 14,
    "english": "May",
    "turkish": "Mayıs",
    "sentence": "Workers' Day is celebrated on the first day of May in many countries."
  },
  {
    "id": 15,
    "english": "Monday",
    "turkish": "Pazartesi",
    "sentence": "Everyone seems a bit tired on Monday mornings after the weekend."
  },
  {
    "id": 16,
    "english": "November",
    "turkish": "Kasım",
    "sentence": "Thanksgiving is celebrated in November in the United States."
  },
  {
    "id": 17,
    "english": "October",
    "turkish": "Ekim",
    "sentence": "Halloween is a popular holiday celebrated on the last day of October."
  },
  {
    "id": 18,
    "english": "Saturday",
    "turkish": "Cumartesi",
    "sentence": "We usually spend Saturday relaxing or doing some fun activities with friends."
  },
  {
    "id": 19,
    "english": "September",
    "turkish": "Eylül",
    "sentence": "Students typically return to school or university in September."
  },
  {
    "id": 20,
    "english": "Sunday",
    "turkish": "Pazar",
    "sentence": "Sunday is a day of rest for many, often spent with family or personal hobbies."
  },
  {
    "id": 21,
    "english": "T-shirt",
    "turkish": "Tişört",
    "sentence": "I prefer wearing a comfortable T-shirt and jeans for casual outings."
  },
  {
    "id": 22,
    "english": "TV",
    "turkish": "TV (Televizyon)",
    "sentence": "Watching too much TV can sometimes lead to a lack of physical activity."
  },
  {
    "id": 23,
    "english": "Thursday",
    "turkish": "Perşembe",
    "sentence": "Our weekly team meeting is always scheduled for Thursday mornings."
  },
  {
    "id": 24,
    "english": "Tuesday",
    "turkish": "Salı",
    "sentence": "I have my English class on Tuesday evenings, which I really enjoy."
  },
  {
    "id": 25,
    "english": "Wednesday",
    "turkish": "Çarşamba",
    "sentence": "Wednesday is often considered the middle of the work week."
  },
  {
    "id": 26,
    "english": "abandon",
    "turkish": "terk etmek",
    "sentence": "The old house was completely abandoned years ago and is now in ruins."
  },
  {
    "id": 27,
    "english": "ability",
    "turkish": "yetenek",
    "sentence": "Her ability to speak three languages fluently is very impressive."
  },
  {
    "id": 28,
    "english": "able",
    "turkish": "yapabilen",
    "sentence": "After a long recovery, he was finally able to walk without crutches."
  },
  {
    "id": 29,
    "english": "about",
    "turkish": "hakkında",
    "sentence": "We talked for hours about our plans for the upcoming summer vacation."
  },
  {
    "id": 30,
    "english": "above",
    "turkish": "üstünde",
    "sentence": "The plane was flying high above the clouds, making the land look tiny."
  },
  {
    "id": 31,
    "english": "abroad",
    "turkish": "yurt dışı",
    "sentence": "Many students choose to study abroad to experience different cultures."
  },
  {
    "id": 32,
    "english": "absolute",
    "turkish": "mutlak",
    "sentence": "It's an absolute necessity to wear a helmet when riding a motorcycle."
  },
  {
    "id": 33,
    "english": "absolutely",
    "turkish": "kesinlikle",
    "sentence": "Are you sure you want to go? Yes, absolutely, I wouldn't miss it for anything!"
  },
  {
    "id": 34,
    "english": "academic",
    "turkish": "akademik",
    "sentence": "He has a brilliant academic record, always achieving top grades."
  },
  {
    "id": 35,
    "english": "accept",
    "turkish": "kabul etmek",
    "sentence": "She decided to accept the job offer because it was a great opportunity."
  },
  {
    "id": 36,
    "english": "acceptable",
    "turkish": "kabul edilebilir",
    "sentence": "The quality of the product was acceptable, but not outstanding."
  },
  {
    "id": 37,
    "english": "access",
    "turkish": "erişim",
    "sentence": "Only authorized personnel have access to the sensitive documents."
  },
  {
    "id": 38,
    "english": "accident",
    "turkish": "kaza",
    "sentence": "Fortunately, no one was seriously hurt in the car accident yesterday."
  },
  {
    "id": 39,
    "english": "accompany",
    "turkish": "eşlik etmek",
    "sentence": "Children must be accompanied by an adult when visiting the museum."
  },
  {
    "id": 40,
    "english": "account",
    "turkish": "hesap",
    "sentence": "Please make sure to check your bank account statement regularly."
  },
  {
    "id": 41,
    "english": "accurate",
    "turkish": "doğru, kesin",
    "sentence": "The weather forecast was surprisingly accurate this morning."
  },
  {
    "id": 42,
    "english": "accuse",
    "turkish": "suçlamak",
    "sentence": "It's unfair to accuse someone without any solid evidence."
  },
  {
    "id": 43,
    "english": "achieve",
    "turkish": "başarmak",
    "sentence": "She worked incredibly hard to achieve her goal of running a marathon."
  },
  {
    "id": 44,
    "english": "achievement",
    "turkish": "başarı",
    "sentence": "Winning the championship was a remarkable achievement for the young team."
  },
  {
    "id": 45,
    "english": "acknowledge",
    "turkish": "kabul etmek, onaylamak",
    "sentence": "He refused to acknowledge his mistake, which made the situation worse."
  },
  {
    "id": 46,
    "english": "acquire",
    "turkish": "edinmek",
    "sentence": "The company hopes to acquire new customers through its aggressive marketing campaign."
  },
  {
    "id": 47,
    "english": "across",
    "turkish": "karşıdan karşıya",
    "sentence": "They built a new bridge to help people get across the river more easily."
  },
  {
    "id": 48,
    "english": "act",
    "turkish": "davranmak, hareket etmek",
    "sentence": "It's important to act responsibly, especially when you are in charge."
  },
  {
    "id": 49,
    "english": "action",
    "turkish": "eylem",
    "sentence": "The government needs to take immediate action to address the rising unemployment."
  },
  {
    "id": 50,
    "english": "active",
    "turkish": "aktif",
    "sentence": "Staying active is crucial for maintaining good physical and mental health."
  },
  {
    "id": 51,
    "english": "activity",
    "turkish": "aktivite, etkinlik",
    "sentence": "Reading is a popular **activity** for many people on weekends."
  },
  {
    "id": 52,
    "english": "actor",
    "turkish": "aktör, oyuncu",
    "sentence": "The **actor** delivered a powerful performance in the new movie."
  },
  {
    "id": 53,
    "english": "actress",
    "turkish": "aktris, kadın oyuncu",
    "sentence": "She dreams of becoming a famous **actress** one day."
  },
  {
    "id": 54,
    "english": "actual",
    "turkish": "gerçek, fiili",
    "sentence": "The **actual** cost of the trip was higher than we expected."
  },
  {
    "id": 55,
    "english": "actually",
    "turkish": "aslında, gerçekten",
    "sentence": "I thought it would be difficult, but it was **actually** quite easy."
  },
  {
    "id": 56,
    "english": "ad",
    "turkish": "reklam",
    "sentence": "I saw an interesting **ad** for a new car on TV."
  },
  {
    "id": 57,
    "english": "adapt",
    "turkish": "adapte olmak, uyum sağlamak",
    "sentence": "It can take time to **adapt** to a new culture."
  },
  {
    "id": 58,
    "english": "add",
    "turkish": "eklemek",
    "sentence": "Please **add** my name to the list."
  },
  {
    "id": 59,
    "english": "addition",
    "turkish": "ek, ilave",
    "sentence": "In **addition** to the main course, we ordered a salad."
  },
  {
    "id": 60,
    "english": "additional",
    "turkish": "ek, ilave",
    "sentence": "We need **additional** information before making a decision."
  },
  {
    "id": 61,
    "english": "address",
    "turkish": "adres",
    "sentence": "Could you please tell me your home **address**?"
  },
  {
    "id": 62,
    "english": "administration",
    "turkish": "yönetim, idare",
    "sentence": "The new **administration** plans to improve public services."
  },
  {
    "id": 63,
    "english": "admire",
    "turkish": "hayran olmak, takdir etmek",
    "sentence": "I really **admire** her dedication to her work."
  },
  {
    "id": 64,
    "english": "admit",
    "turkish": "kabul etmek, itiraf etmek",
    "sentence": "He had to **admit** that he was wrong."
  },
  {
    "id": 65,
    "english": "adopt",
    "turkish": "evlat edinmek, benimsemek",
    "sentence": "They decided to **adopt** a child from the orphanage."
  },
  {
    "id": 66,
    "english": "adult",
    "turkish": "yetişkin",
    "sentence": "Children under 12 must be accompanied by an **adult**."
  },
  {
    "id": 67,
    "english": "advance",
    "turkish": "ilerlemek",
    "sentence": "We need to **advance** quickly if we want to reach our goal."
  },
  {
    "id": 68,
    "english": "advanced",
    "turkish": "gelişmiş, ileri seviye",
    "sentence": "She is taking an **advanced** English course this semester."
  },
  {
    "id": 69,
    "english": "advantage",
    "turkish": "avantaj, fayda",
    "sentence": "Learning a second language gives you an **advantage** in the job market."
  },
  {
    "id": 70,
    "english": "adventure",
    "turkish": "macera",
    "sentence": "Traveling to new countries is always an **adventure**."
  },
  {
    "id": 71,
    "english": "advertise",
    "turkish": "reklam yapmak",
    "sentence": "They will **advertise** their new product on television."
  },
  {
    "id": 72,
    "english": "advertisement",
    "turkish": "reklam",
    "sentence": "This **advertisement** is very catchy and memorable."
  },
  {
    "id": 73,
    "english": "advertising",
    "turkish": "reklamcılık",
    "sentence": "The company spent a lot of money on **advertising** its new brand."
  },
  {
    "id": 74,
    "english": "advice",
    "turkish": "tavsiye",
    "sentence": "Can you give me some **advice** about learning English?"
  },
  {
    "id": 75,
    "english": "advise",
    "turkish": "tavsiye etmek",
    "sentence": "I would **advise** you to study hard for the exam."
  },
  {
    "id": 76,
    "english": "affair",
    "turkish": "mesele, ilişki, iş",
    "sentence": "It's a private **affair** and none of our business."
  },
  {
    "id": 77,
    "english": "affect",
    "turkish": "etkilemek",
    "sentence": "The weather can seriously **affect** your mood."
  },
  {
    "id": 78,
    "english": "afford",
    "turkish": "parası yetmek, karşılayabilmek",
    "sentence": "I can't **afford** to buy a new car right now."
  },
  {
    "id": 79,
    "english": "afraid",
    "turkish": "korkmuş, korkan",
    "sentence": "Don't be **afraid** to ask for help if you need it."
  },
  {
    "id": 80,
    "english": "after",
    "turkish": "sonra, -den sonra",
    "sentence": "Let's meet **after** work today."
  },
  {
    "id": 81,
    "english": "afternoon",
    "turkish": "öğleden sonra",
    "sentence": "We usually have a coffee break in the **afternoon**."
  },
  {
    "id": 82,
    "english": "afterward",
    "turkish": "sonradan, daha sonra",
    "sentence": "We watched the movie, and **afterward**, we went for dinner."
  },
  {
    "id": 83,
    "english": "again",
    "turkish": "tekrar, yine",
    "sentence": "Please say that **again**, I didn't hear you."
  },
  {
    "id": 84,
    "english": "against",
    "turkish": "karşı, -e karşı",
    "sentence": "It's difficult to swim **against** the current."
  },
  {
    "id": 85,
    "english": "age",
    "turkish": "yaş",
    "sentence": "What is the minimum **age** to get a driver's license?"
  },
  {
    "id": 86,
    "english": "agency",
    "turkish": "ajans, kurum",
    "sentence": "He works for a travel **agency** in the city center."
  },
  {
    "id": 87,
    "english": "agenda",
    "turkish": "gündem",
    "sentence": "We have a long **agenda** to discuss in today's meeting."
  },
  {
    "id": 88,
    "english": "agent",
    "turkish": "ajan, temsilci",
    "sentence": "You should contact a real estate **agent** to sell your house."
  },
  {
    "id": 89,
    "english": "aggressive",
    "turkish": "agresif, saldırgan",
    "sentence": "The dog became **aggressive** when a stranger approached."
  },
  {
    "id": 90,
    "english": "ago",
    "turkish": "önce",
    "sentence": "I started learning English five years **ago**."
  },
  {
    "id": 91,
    "english": "agree",
    "turkish": "katılmak, aynı fikirde olmak",
    "sentence": "I completely **agree** with your point of view."
  },
  {
    "id": 92,
    "english": "agreement",
    "turkish": "anlaşma, uzlaşma",
    "sentence": "They reached an **agreement** after a long discussion."
  },
  {
    "id": 93,
    "english": "ahead",
    "turkish": "önde, ileride",
    "sentence": "Go straight **ahead** and turn left at the traffic lights."
  },
  {
    "id": 94,
    "english": "aid",
    "turkish": "yardım, destek",
    "sentence": "The country sent humanitarian **aid** to the earthquake victims."
  },
  {
    "id": 95,
    "english": "aim",
    "turkish": "amaç, hedef",
    "sentence": "Our main **aim** is to provide the best service possible."
  },
  {
    "id": 96,
    "english": "air",
    "turkish": "hava",
    "sentence": "The **air** quality in the city has improved recently."
  },
  {
    "id": 97,
    "english": "aircraft",
    "turkish": "uçak, hava aracı",
    "sentence": "Modern **aircraft** can fly long distances without refueling."
  },
  {
    "id": 98,
    "english": "airline",
    "turkish": "havayolu şirketi",
    "sentence": "Which **airline** are you flying with to Paris?"
  },
  {
    "id": 99,
    "english": "airport",
    "turkish": "havalimanı, havaalanı",
    "sentence": "I need to be at the **airport** two hours before my flight."
  },
  {
    "id": 100,
    "english": "alarm",
    "turkish": "alarm",
    "sentence": "The fire **alarm** went off in the middle of the night."
  },
  {
    "id": 101,
    "english": "album",
    "turkish": "albüm",
    "sentence": "She showed me her old photo album from her university days."
  },
  {
    "id": 102,
    "english": "alcohol",
    "turkish": "alkol",
    "sentence": "Driving under the influence of alcohol is extremely dangerous."
  },
  {
    "id": 103,
    "english": "alcoholic",
    "turkish": "alkolik",
    "sentence": "He attends meetings to help him recover from being an alcoholic."
  },
  {
    "id": 104,
    "english": "alive",
    "turkish": "canlı",
    "sentence": "After the accident, everyone was relieved to find them still alive."
  },
  {
    "id": 105,
    "english": "allow",
    "turkish": "izin vermek",
    "sentence": "The company doesn't allow employees to smoke inside the building."
  },
  {
    "id": 106,
    "english": "almost",
    "turkish": "neredeyse",
    "sentence": "We almost missed our flight because of the heavy traffic."
  },
  {
    "id": 107,
    "english": "alone",
    "turkish": "yalnız",
    "sentence": "She prefers to work alone on important projects to avoid distractions."
  },
  {
    "id": 108,
    "english": "along",
    "turkish": "boyunca",
    "sentence": "Let's walk along the river bank and enjoy the scenery."
  },
  {
    "id": 109,
    "english": "already",
    "turkish": "zaten",
    "sentence": "Don't worry about dinner; I've already cooked a delicious meal."
  },
  {
    "id": 110,
    "english": "also",
    "turkish": "ayrıca",
    "sentence": "He is a talented musician and also an excellent painter."
  },
  {
    "id": 111,
    "english": "alter",
    "turkish": "değiştirmek",
    "sentence": "You might need to alter the dress to make it fit perfectly."
  },
  {
    "id": 112,
    "english": "alternative",
    "turkish": "alternatif",
    "sentence": "If this plan doesn't work, we'll need to find an alternative solution."
  },
  {
    "id": 113,
    "english": "although",
    "turkish": "rağmen",
    "sentence": "Although it was raining, they decided to go for a walk in the park."
  },
  {
    "id": 114,
    "english": "always",
    "turkish": "her zaman",
    "sentence": "She always arrives on time for her appointments."
  },
  {
    "id": 115,
    "english": "amazed",
    "turkish": "hayran kalmış",
    "sentence": "I was amazed by her ability to speak five different languages fluently."
  },
  {
    "id": 116,
    "english": "amazing",
    "turkish": "harika",
    "sentence": "The view from the top of the mountain was absolutely amazing."
  },
  {
    "id": 117,
    "english": "ambition",
    "turkish": "hırs",
    "sentence": "His ambition is to become a successful entrepreneur and create his own company."
  },
  {
    "id": 118,
    "english": "among",
    "turkish": "arasında",
    "sentence": "The secret was shared among a few close friends only."
  },
  {
    "id": 119,
    "english": "amount",
    "turkish": "miktar",
    "sentence": "A large amount of money was donated to the charity last year."
  },
  {
    "id": 120,
    "english": "analysis",
    "turkish": "analiz",
    "sentence": "The data analysis revealed some unexpected trends in consumer behavior."
  },
  {
    "id": 121,
    "english": "analyze",
    "turkish": "analiz etmek",
    "sentence": "We need to analyze the current market situation before making a decision."
  },
  {
    "id": 122,
    "english": "ancient",
    "turkish": "antik",
    "sentence": "They discovered an ancient city buried deep under the desert sands."
  },
  {
    "id": 123,
    "english": "and",
    "turkish": "ve",
    "sentence": "She bought some bread and milk from the grocery store."
  },
  {
    "id": 124,
    "english": "anger",
    "turkish": "öfke",
    "sentence": "He found it difficult to control his anger when he felt unfairly treated."
  },
  {
    "id": 125,
    "english": "angle",
    "turkish": "açı",
    "sentence": "The photographer tried to find the best angle for the perfect shot."
  },
  {
    "id": 126,
    "english": "angry",
    "turkish": "kızgın",
    "sentence": "The customer became very angry when her order was delayed for the third time."
  },
  {
    "id": 127,
    "english": "animal",
    "turkish": "hayvan",
    "sentence": "The zoo is home to many different species of exotic animals."
  },
  {
    "id": 128,
    "english": "ankle",
    "turkish": "ayak bileği",
    "sentence": "She twisted her ankle while playing football and had to go to the doctor."
  },
  {
    "id": 129,
    "english": "anniversary",
    "turkish": "yıldönümü",
    "sentence": "They celebrated their tenth wedding anniversary with a romantic dinner."
  },
  {
    "id": 130,
    "english": "announce",
    "turkish": "duyurmak",
    "sentence": "The company president will announce the new policy at the meeting next week."
  },
  {
    "id": 131,
    "english": "announcement",
    "turkish": "duyuru",
    "sentence": "The school made an important announcement about the upcoming exams."
  },
  {
    "id": 132,
    "english": "annoy",
    "turkish": "rahatsız etmek",
    "sentence": "His constant whistling tends to annoy his colleagues during work hours."
  },
  {
    "id": 133,
    "english": "annoyed",
    "turkish": "rahatsız olmuş",
    "sentence": "She was annoyed by the noise from the construction site next door."
  },
  {
    "id": 134,
    "english": "annoying",
    "turkish": "rahatsız edici",
    "sentence": "That continuous dripping sound is really annoying me; I can't concentrate."
  },
  {
    "id": 135,
    "english": "annual",
    "turkish": "yıllık",
    "sentence": "The company holds its annual conference in a different city each year."
  },
  {
    "id": 136,
    "english": "answer",
    "turkish": "cevap",
    "sentence": "Please write your answer clearly and concisely on the exam paper."
  },
  {
    "id": 137,
    "english": "anxious",
    "turkish": "endişeli",
    "sentence": "He was anxious about the job interview, hoping to make a good impression."
  },
  {
    "id": 138,
    "english": "anybody",
    "turkish": "herhangi biri",
    "sentence": "Did anybody see where I left my keys this morning?"
  },
  {
    "id": 139,
    "english": "anymore",
    "turkish": "artık",
    "sentence": "I don't live in that city anymore; I moved to a different country last year."
  },
  {
    "id": 140,
    "english": "anyone",
    "turkish": "herhangi biri",
    "sentence": "Can anyone help me carry these heavy boxes upstairs?"
  },
  {
    "id": 141,
    "english": "anything",
    "turkish": "herhangi bir şey",
    "sentence": "Is there anything I can do to assist you with this project?"
  },
  {
    "id": 142,
    "english": "anyway",
    "turkish": "neyse",
    "sentence": "It started raining, but we went for a walk anyway."
  },
  {
    "id": 143,
    "english": "anywhere",
    "turkish": "herhangi bir yer",
    "sentence": "I couldn't find my wallet anywhere in the house."
  },
  {
    "id": 144,
    "english": "apart",
    "turkish": "ayrı",
    "sentence": "The two brothers look very similar, but their personalities are miles apart."
  },
  {
    "id": 145,
    "english": "apartment",
    "turkish": "apartman dairesi",
    "sentence": "They decided to rent a small apartment in the city center."
  },
  {
    "id": 146,
    "english": "apologize",
    "turkish": "özür dilemek",
    "sentence": "He needed to apologize for his rude behavior during the meeting."
  },
  {
    "id": 147,
    "english": "app",
    "turkish": "uygulama",
    "sentence": "You can download this new fitness app to track your daily steps."
  },
  {
    "id": 148,
    "english": "apparent",
    "turkish": "belli",
    "sentence": "It was apparent from his expression that he was not happy with the decision."
  },
  {
    "id": 149,
    "english": "apparently",
    "turkish": "görünüşe göre",
    "sentence": "Apparently, the concert has been cancelled due to bad weather conditions."
  },
  {
    "id": 150,
    "english": "appeal",
    "turkish": "cazip gelmek",
    "sentence": "The new marketing campaign aims to appeal to a younger audience."
  },
  {
    "id": 151,
    "english": "appear",
    "turkish": "görünmek, ortaya çıkmak",
    "sentence": "The sun will appear from behind the clouds soon."
  },
  {
    "id": 152,
    "english": "appearance",
    "turkish": "görünüş, dış görünüş",
    "sentence": "Her sudden appearance surprised everyone at the party."
  },
  {
    "id": 153,
    "english": "apple",
    "turkish": "elma",
    "sentence": "An apple a day keeps the doctor away."
  },
  {
    "id": 154,
    "english": "application",
    "turkish": "başvuru, uygulama",
    "sentence": "He submitted his application for the university scholarship last week."
  },
  {
    "id": 155,
    "english": "apply",
    "turkish": "başvurmak, uygulamak",
    "sentence": "You should apply for the job before the deadline."
  },
  {
    "id": 156,
    "english": "appointment",
    "turkish": "randevu",
    "sentence": "I have an appointment with the doctor at 3 PM tomorrow."
  },
  {
    "id": 157,
    "english": "appreciate",
    "turkish": "takdir etmek, minnettar olmak",
    "sentence": "I really appreciate your help with my project."
  },
  {
    "id": 158,
    "english": "approach",
    "turkish": "yaklaşmak, yaklaşım",
    "sentence": "The car began to approach the intersection slowly."
  },
  {
    "id": 159,
    "english": "appropriate",
    "turkish": "uygun, yerinde",
    "sentence": "Please wear appropriate clothing for the formal event."
  },
  {
    "id": 160,
    "english": "approval",
    "turkish": "onay, tasdik",
    "sentence": "The project requires the manager's final approval before it can start."
  },
  {
    "id": 161,
    "english": "approve",
    "turkish": "onaylamak, tasdik etmek",
    "sentence": "The board voted to approve the new budget."
  },
  {
    "id": 162,
    "english": "approximately",
    "turkish": "yaklaşık olarak",
    "sentence": "The journey will take approximately two hours."
  },
  {
    "id": 163,
    "english": "architect",
    "turkish": "mimar",
    "sentence": "My uncle is an architect and designs large buildings."
  },
  {
    "id": 164,
    "english": "architecture",
    "turkish": "mimari",
    "sentence": "The city is famous for its beautiful old architecture."
  },
  {
    "id": 165,
    "english": "area",
    "turkish": "alan, bölge",
    "sentence": "This is a residential area, so please drive carefully."
  },
  {
    "id": 166,
    "english": "argue",
    "turkish": "tartışmak, iddia etmek",
    "sentence": "They often argue about politics, but they are still good friends."
  },
  {
    "id": 167,
    "english": "argument",
    "turkish": "tartışma, sav",
    "sentence": "We had a long argument about who should pay the bill."
  },
  {
    "id": 168,
    "english": "arise",
    "turkish": "ortaya çıkmak, yükselmek",
    "sentence": "New problems may arise if we don't plan carefully."
  },
  {
    "id": 169,
    "english": "arm",
    "turkish": "kol",
    "sentence": "He broke his arm playing football last season."
  },
  {
    "id": 170,
    "english": "armed",
    "turkish": "silahlı",
    "sentence": "The police responded to a report of an armed robbery."
  },
  {
    "id": 171,
    "english": "arms",
    "turkish": "silahlar",
    "sentence": "The country decided to reduce its investment in arms."
  },
  {
    "id": 172,
    "english": "army",
    "turkish": "ordu",
    "sentence": "His brother joined the army after finishing college."
  },
  {
    "id": 173,
    "english": "around",
    "turkish": "etrafında, civarında",
    "sentence": "We walked around the park for an hour."
  },
  {
    "id": 174,
    "english": "arrange",
    "turkish": "düzenlemek, ayarlamak",
    "sentence": "Can you arrange a meeting for us next week?"
  },
  {
    "id": 175,
    "english": "arrangement",
    "turkish": "düzenleme, ayarlama",
    "sentence": "We made all the arrangements for the trip ourselves."
  },
  {
    "id": 176,
    "english": "arrest",
    "turkish": "tutuklamak, tutuklama",
    "sentence": "The police plan to arrest the suspect this evening."
  },
  {
    "id": 177,
    "english": "arrival",
    "turkish": "varış",
    "sentence": "We waited eagerly for her arrival at the airport."
  },
  {
    "id": 178,
    "english": "arrive",
    "turkish": "varmak",
    "sentence": "What time did you arrive at the party?"
  },
  {
    "id": 179,
    "english": "art",
    "turkish": "sanat",
    "sentence": "Modern art is not always easy to understand."
  },
  {
    "id": 180,
    "english": "article",
    "turkish": "makale, madde",
    "sentence": "I read an interesting article about climate change today."
  },
  {
    "id": 181,
    "english": "artificial",
    "turkish": "yapay, suni",
    "sentence": "This plant looks real, but it's actually artificial."
  },
  {
    "id": 182,
    "english": "artist",
    "turkish": "sanatçı",
    "sentence": "Pablo Picasso was a very famous artist."
  },
  {
    "id": 183,
    "english": "artistic",
    "turkish": "sanatsal",
    "sentence": "She has a very artistic talent for painting."
  },
  {
    "id": 184,
    "english": "as",
    "turkish": "olarak, gibi, -iken",
    "sentence": "As a student, he always worked very hard."
  },
  {
    "id": 185,
    "english": "ashamed",
    "turkish": "utanmış, utanç duyan",
    "sentence": "He felt ashamed of his mistakes and apologized."
  },
  {
    "id": 186,
    "english": "aside",
    "turkish": "bir yana, kenara",
    "sentence": "He put his books aside and started to cook dinner."
  },
  {
    "id": 187,
    "english": "ask",
    "turkish": "sormak, istemek",
    "sentence": "If you don't understand, please ask your teacher."
  },
  {
    "id": 188,
    "english": "asleep",
    "turkish": "uykuda, uyumuş",
    "sentence": "The baby was asleep in her crib."
  },
  {
    "id": 189,
    "english": "aspect",
    "turkish": "yön, bakış açısı",
    "sentence": "We need to consider every aspect of the plan carefully."
  },
  {
    "id": 190,
    "english": "assess",
    "turkish": "değerlendirmek, paha biçmek",
    "sentence": "The teacher will assess the students' progress at the end of the term."
  },
  {
    "id": 191,
    "english": "assessment",
    "turkish": "değerlendirme, paha biçme",
    "sentence": "The final assessment will determine if you pass the course."
  },
  {
    "id": 192,
    "english": "assignment",
    "turkish": "ödev, görev",
    "sentence": "I have a big assignment due next Friday."
  },
  {
    "id": 193,
    "english": "assist",
    "turkish": "yardım etmek",
    "sentence": "Can I assist you with anything?"
  },
  {
    "id": 194,
    "english": "assistant",
    "turkish": "asistan, yardımcı",
    "sentence": "My new assistant is very efficient and helpful."
  },
  {
    "id": 195,
    "english": "associate",
    "turkish": "ilişkilendirmek, birleştirmek",
    "sentence": "Most people associate the color green with nature."
  },
  {
    "id": 196,
    "english": "associated",
    "turkish": "ilişkili, bağlantılı",
    "sentence": "There are many risks associated with extreme sports."
  },
  {
    "id": 197,
    "english": "association",
    "turkish": "dernek, birlik, ilişkilendirme",
    "sentence": "He is a member of the local historical association."
  },
  {
    "id": 198,
    "english": "assume",
    "turkish": "varsaymak, farz etmek",
    "sentence": "Don't assume anything; always check the facts."
  },
  {
    "id": 199,
    "english": "at",
    "turkish": "-de, -da (konum, zaman)",
    "sentence": "She is waiting for me at the bus stop."
  },
  {
    "id": 200,
    "english": "athlete",
    "turkish": "atlet, sporcu",
    "sentence": "Professional athletes train for many hours every day."
  },
  {
    "id": 201,
    "english": "atmosphere",
    "turkish": "atmosfer / ortam",
    "sentence": "The restaurant had a cozy atmosphere with soft lighting and quiet music."
  },
  {
    "id": 202,
    "english": "attach",
    "turkish": "eklemek / iliştirmek",
    "sentence": "Please attach your resume to the email before sending it."
  },
  {
    "id": 203,
    "english": "attack",
    "turkish": "saldırmak / saldırı",
    "sentence": "The country condemned the recent attack on civilians."
  },
  {
    "id": 204,
    "english": "attempt",
    "turkish": "denemek / girişim",
    "sentence": "He made an attempt to fix the broken machine, but failed."
  },
  {
    "id": 205,
    "english": "attend",
    "turkish": "katılmak",
    "sentence": "She decided to attend the conference next month to learn new skills."
  },
  {
    "id": 206,
    "english": "attention",
    "turkish": "dikkat",
    "sentence": "The teacher asked the students to pay close attention to the lesson."
  },
  {
    "id": 207,
    "english": "attitude",
    "turkish": "tutum / tavır",
    "sentence": "His positive attitude helped him overcome the difficult challenge."
  },
  {
    "id": 208,
    "english": "attorney",
    "turkish": "avukat",
    "sentence": "You should consult an attorney before signing any legal documents."
  },
  {
    "id": 209,
    "english": "attract",
    "turkish": "çekmek",
    "sentence": "The beautiful flowers attract many bees to the garden."
  },
  {
    "id": 210,
    "english": "attraction",
    "turkish": "çekim / cazibe / çekim merkezi",
    "sentence": "The Eiffel Tower is a major tourist attraction in Paris."
  },
  {
    "id": 211,
    "english": "attractive",
    "turkish": "çekici",
    "sentence": "She found the job offer very attractive due to the good salary and benefits."
  },
  {
    "id": 212,
    "english": "audience",
    "turkish": "seyirci / dinleyici kitlesi",
    "sentence": "The speaker captivated the entire audience with her powerful presentation."
  },
  {
    "id": 213,
    "english": "aunt",
    "turkish": "teyze / hala",
    "sentence": "My aunt is coming to visit us next weekend from another city."
  },
  {
    "id": 214,
    "english": "author",
    "turkish": "yazar",
    "sentence": "The author will sign copies of her new book at the event."
  },
  {
    "id": 215,
    "english": "authority",
    "turkish": "yetki / otorite",
    "sentence": "The local authority is responsible for maintaining public roads."
  },
  {
    "id": 216,
    "english": "automatic",
    "turkish": "otomatik",
    "sentence": "This door has an automatic closing mechanism for safety."
  },
  {
    "id": 217,
    "english": "automatically",
    "turkish": "otomatik olarak",
    "sentence": "The lights turn off automatically when no one is in the room."
  },
  {
    "id": 218,
    "english": "available",
    "turkish": "mevcut / hazır",
    "sentence": "Are there any tickets available for tonight's concert?"
  },
  {
    "id": 219,
    "english": "average",
    "turkish": "ortalama",
    "sentence": "The average temperature for July is around 25 degrees Celsius."
  },
  {
    "id": 220,
    "english": "avoid",
    "turkish": "kaçınmak",
    "sentence": "Try to avoid eating too much junk food for a healthier lifestyle."
  },
  {
    "id": 221,
    "english": "award",
    "turkish": "ödül / ödüllendirmek",
    "sentence": "She received an award for her outstanding contribution to science."
  },
  {
    "id": 222,
    "english": "aware",
    "turkish": "farkında",
    "sentence": "Are you aware of the potential risks involved in this investment?"
  },
  {
    "id": 223,
    "english": "away",
    "turkish": "uzakta / dışarıda",
    "sentence": "He went away for the weekend to visit his family."
  },
  {
    "id": 224,
    "english": "awesome",
    "turkish": "harika / müthiş",
    "sentence": "The view from the top of the mountain was absolutely awesome."
  },
  {
    "id": 225,
    "english": "awful",
    "turkish": "korkunç / berbat",
    "sentence": "The weather was awful yesterday, so we stayed indoors all day."
  },
  {
    "id": 226,
    "english": "baby",
    "turkish": "bebek",
    "sentence": "My sister just had a baby girl last month, and she's adorable."
  },
  {
    "id": 227,
    "english": "back",
    "turkish": "geri / arka / sırt",
    "sentence": "Please put the books back on the shelf when you're finished."
  },
  {
    "id": 228,
    "english": "background",
    "turkish": "arka plan / geçmiş",
    "sentence": "She has a strong background in marketing and sales."
  },
  {
    "id": 229,
    "english": "backward",
    "turkish": "geri / geriye doğru",
    "sentence": "He accidentally walked backward into the door and bumped his head."
  },
  {
    "id": 230,
    "english": "bacteria",
    "turkish": "bakteri",
    "sentence": "Washing your hands helps remove harmful bacteria and prevent illness."
  },
  {
    "id": 231,
    "english": "bad",
    "turkish": "kötü",
    "sentence": "It was a really bad decision to go out in the rain without an umbrella."
  },
  {
    "id": 232,
    "english": "badly",
    "turkish": "kötü bir şekilde / fena halde",
    "sentence": "He played very badly in the match today and lost easily."
  },
  {
    "id": 233,
    "english": "bag",
    "turkish": "çanta",
    "sentence": "Don't forget to pack your swimming suit in your bag for the beach."
  },
  {
    "id": 234,
    "english": "bake",
    "turkish": "fırında pişirmek",
    "sentence": "My grandmother loves to bake cookies and cakes for special occasions."
  },
  {
    "id": 235,
    "english": "balance",
    "turkish": "denge / dengelemek",
    "sentence": "It's important to maintain a healthy balance between work and rest."
  },
  {
    "id": 236,
    "english": "ball",
    "turkish": "top",
    "sentence": "The children were playing with a ball in the park all afternoon."
  },
  {
    "id": 237,
    "english": "ban",
    "turkish": "yasaklamak / yasak",
    "sentence": "The city council decided to ban smoking in all public parks."
  },
  {
    "id": 238,
    "english": "banana",
    "turkish": "muz",
    "sentence": "I usually eat a banana for breakfast because it's healthy and filling."
  },
  {
    "id": 239,
    "english": "band",
    "turkish": "bant / grup (müzik)",
    "sentence": "The band played their greatest hits at the concert last night."
  },
  {
    "id": 240,
    "english": "bar",
    "turkish": "bar / çubuk / engel",
    "sentence": "Let's meet at the new bar downtown tonight for a drink."
  },
  {
    "id": 241,
    "english": "barrier",
    "turkish": "engel / bariyer",
    "sentence": "The language barrier made communication difficult for them during their trip."
  },
  {
    "id": 242,
    "english": "base",
    "turkish": "taban / üs / dayandırmak",
    "sentence": "The military has a large base in the desert for training exercises."
  },
  {
    "id": 243,
    "english": "baseball",
    "turkish": "beyzbol",
    "sentence": "Many American children love to play baseball in the summer."
  },
  {
    "id": 244,
    "english": "based",
    "turkish": "-e dayalı / -merkezli",
    "sentence": "The film is based on a true story that happened in the 1970s."
  },
  {
    "id": 245,
    "english": "basic",
    "turkish": "temel / basit",
    "sentence": "You need to learn the basic rules of the game first before you can play."
  },
  {
    "id": 246,
    "english": "basically",
    "turkish": "aslında / temel olarak",
    "sentence": "Basically, the problem is that we don't have enough time to finish the project."
  },
  {
    "id": 247,
    "english": "basis",
    "turkish": "temel / dayanak",
    "sentence": "We make decisions on a daily basis to keep up with market changes."
  },
  {
    "id": 248,
    "english": "basketball",
    "turkish": "basketbol",
    "sentence": "He's very tall, so he's good at basketball and often scores many points."
  },
  {
    "id": 249,
    "english": "bath",
    "turkish": "banyo (küvet) / banyo yapmak",
    "sentence": "I like to take a warm bath before bed to relax."
  },
  {
    "id": 250,
    "english": "bathroom",
    "turkish": "banyo (oda)",
    "sentence": "Excuse me, where is the bathroom, please? I need to wash my hands."
  },
  {
    "id": 251,
    "english": "battery",
    "turkish": "pil",
    "sentence": "My phone's battery is low; I need to charge it soon."
  },
  {
    "id": 252,
    "english": "battle",
    "turkish": "savaş",
    "sentence": "Soldiers prepared for the decisive battle at dawn."
  },
  {
    "id": 253,
    "english": "be",
    "turkish": "olmak",
    "sentence": "It's important to be kind to others."
  },
  {
    "id": 254,
    "english": "beach",
    "turkish": "plaj",
    "sentence": "We spent the day relaxing on the sandy beach."
  },
  {
    "id": 255,
    "english": "bean",
    "turkish": "fasulye",
    "sentence": "She added some green beans to the salad."
  },
  {
    "id": 256,
    "english": "beat",
    "turkish": "yenmek",
    "sentence": "He managed to beat his opponent in the chess game."
  },
  {
    "id": 257,
    "english": "beautiful",
    "turkish": "güzel",
    "sentence": "The sunset over the mountains was truly beautiful."
  },
  {
    "id": 258,
    "english": "beauty",
    "turkish": "güzellik",
    "sentence": "The beauty of the landscape left us speechless."
  },
  {
    "id": 259,
    "english": "because",
    "turkish": "çünkü",
    "sentence": "I stayed home because I was feeling ill."
  },
  {
    "id": 260,
    "english": "become",
    "turkish": "olmak",
    "sentence": "She wants to become a doctor when she grows up."
  },
  {
    "id": 261,
    "english": "bed",
    "turkish": "yatak",
    "sentence": "I was so tired I fell asleep as soon as I got into bed."
  },
  {
    "id": 262,
    "english": "bedroom",
    "turkish": "yatak odası",
    "sentence": "My bedroom is on the second floor of the house."
  },
  {
    "id": 263,
    "english": "bee",
    "turkish": "arı",
    "sentence": "A bee flew into the window and couldn't get out."
  },
  {
    "id": 264,
    "english": "beef",
    "turkish": "dana eti",
    "sentence": "Would you prefer chicken or beef for dinner?"
  },
  {
    "id": 265,
    "english": "beer",
    "turkish": "bira",
    "sentence": "He ordered a cold beer to relax after work."
  },
  {
    "id": 266,
    "english": "before",
    "turkish": "önce",
    "sentence": "Please finish your homework before you watch TV."
  },
  {
    "id": 267,
    "english": "beg",
    "turkish": "yalvarmak",
    "sentence": "The stray dog seemed to beg for food with its eyes."
  },
  {
    "id": 268,
    "english": "begin",
    "turkish": "başlamak",
    "sentence": "The concert will begin at 8 o'clock sharp."
  },
  {
    "id": 269,
    "english": "beginning",
    "turkish": "başlangıç",
    "sentence": "The beginning of the movie was a bit slow, but it got better."
  },
  {
    "id": 270,
    "english": "behave",
    "turkish": "davranmak",
    "sentence": "Children should learn to behave respectfully in public."
  },
  {
    "id": 271,
    "english": "behavior",
    "turkish": "davranış",
    "sentence": "His disruptive behavior led to him being sent out of the classroom."
  },
  {
    "id": 272,
    "english": "behind",
    "turkish": "arkasında",
    "sentence": "The car parked right behind us."
  },
  {
    "id": 273,
    "english": "being",
    "turkish": "varlık",
    "sentence": "I don't like being late for appointments."
  },
  {
    "id": 274,
    "english": "belief",
    "turkish": "inanç",
    "sentence": "Her strong belief in justice motivated her actions."
  },
  {
    "id": 275,
    "english": "believe",
    "turkish": "inanmak",
    "sentence": "I believe that honesty is the best policy."
  },
  {
    "id": 276,
    "english": "bell",
    "turkish": "zil",
    "sentence": "The school bell rang, signaling the end of classes."
  },
  {
    "id": 277,
    "english": "belong",
    "turkish": "ait olmak",
    "sentence": "These books belong to the library."
  },
  {
    "id": 278,
    "english": "below",
    "turkish": "altında",
    "sentence": "The temperature dropped below zero last night."
  },
  {
    "id": 279,
    "english": "belt",
    "turkish": "kemer",
    "sentence": "He always wears a leather belt with his jeans."
  },
  {
    "id": 280,
    "english": "bend",
    "turkish": "bükmek",
    "sentence": "You need to bend your knees when lifting heavy objects."
  },
  {
    "id": 281,
    "english": "benefit",
    "turkish": "fayda",
    "sentence": "Regular exercise has many health benefits."
  },
  {
    "id": 282,
    "english": "bent",
    "turkish": "bükülmüş",
    "sentence": "The old man walked with a bent back."
  },
  {
    "id": 283,
    "english": "best",
    "turkish": "en iyi",
    "sentence": "She always tries her best to achieve her goals."
  },
  {
    "id": 284,
    "english": "bet",
    "turkish": "iddiaya girmek",
    "sentence": "I'll bet you five dollars that our team wins tonight."
  },
  {
    "id": 285,
    "english": "better",
    "turkish": "daha iyi",
    "sentence": "I feel much better after a good night's sleep."
  },
  {
    "id": 286,
    "english": "between",
    "turkish": "arasında",
    "sentence": "The small village is located between two large mountains."
  },
  {
    "id": 287,
    "english": "beyond",
    "turkish": "ötesinde",
    "sentence": "The beauty of the landscape was beyond description."
  },
  {
    "id": 288,
    "english": "bicycle",
    "turkish": "bisiklet",
    "sentence": "He rides his bicycle to work every day to stay fit."
  },
  {
    "id": 289,
    "english": "big",
    "turkish": "büyük",
    "sentence": "They live in a very big house with a large garden."
  },
  {
    "id": 290,
    "english": "bike",
    "turkish": "bisiklet",
    "sentence": "My new mountain bike is perfect for off-road trails."
  },
  {
    "id": 291,
    "english": "bill",
    "turkish": "fatura",
    "sentence": "Can I have the bill, please?"
  },
  {
    "id": 292,
    "english": "biology",
    "turkish": "biyoloji",
    "sentence": "She is studying biology at university because she loves nature."
  },
  {
    "id": 293,
    "english": "bird",
    "turkish": "kuş",
    "sentence": "A little bird was singing sweetly in the tree."
  },
  {
    "id": 294,
    "english": "birth",
    "turkish": "doğum",
    "sentence": "The birth of her first child was a joyful event."
  },
  {
    "id": 295,
    "english": "birthday",
    "turkish": "doğum günü",
    "sentence": "We're planning a big party for my brother's birthday."
  },
  {
    "id": 296,
    "english": "bit",
    "turkish": "parça",
    "sentence": "Could you give me a little bit of help with this?"
  },
  {
    "id": 297,
    "english": "bite",
    "turkish": "ısırmak",
    "sentence": "Be careful not to bite your tongue while eating."
  },
  {
    "id": 298,
    "english": "bitter",
    "turkish": "acı",
    "sentence": "The coffee tasted surprisingly bitter without any sugar."
  },
  {
    "id": 299,
    "english": "black",
    "turkish": "siyah",
    "sentence": "She wore a classic black dress to the formal event."
  },
  {
    "id": 300,
    "english": "blame",
    "turkish": "suçlamak",
    "sentence": "Don't blame others for your own mistakes."
  },
  {
    "id": 301,
    "english": "blank",
    "turkish": "boşluk, boş",
    "sentence": "Please fill in the blank spaces on the form with your personal details."
  },
  {
    "id": 302,
    "english": "blind",
    "turkish": "kör",
    "sentence": "The new guide dog helps the blind woman navigate the busy city streets."
  },
  {
    "id": 303,
    "english": "block",
    "turkish": "blok, engellemek",
    "sentence": "A fallen tree can block the road for hours after a storm."
  },
  {
    "id": 304,
    "english": "blog",
    "turkish": "blog",
    "sentence": "She writes a popular travel blog where she shares her adventures and photos."
  },
  {
    "id": 305,
    "english": "blond",
    "turkish": "sarışın",
    "sentence": "My sister has naturally blond hair, just like our grandmother."
  },
  {
    "id": 306,
    "english": "blood",
    "turkish": "kan",
    "sentence": "Donating blood is a simple way to help save lives in emergencies."
  },
  {
    "id": 307,
    "english": "blow",
    "turkish": "üflemek, darbe",
    "sentence": "The strong wind will blow the leaves off the trees."
  },
  {
    "id": 308,
    "english": "blue",
    "turkish": "mavi",
    "sentence": "The sky was a clear blue this morning, perfect for a walk."
  },
  {
    "id": 309,
    "english": "board",
    "turkish": "tahta, pano, binmek",
    "sentence": "We need to board the train quickly before it leaves the station."
  },
  {
    "id": 310,
    "english": "boat",
    "turkish": "tekne, bot",
    "sentence": "They rented a small boat to go fishing on the lake."
  },
  {
    "id": 311,
    "english": "body",
    "turkish": "vücut, beden",
    "sentence": "Regular exercise is good for your mind and body."
  },
  {
    "id": 312,
    "english": "boil",
    "turkish": "kaynatmak, kaynamak",
    "sentence": "You need to boil the water for about ten minutes to make it safe to drink."
  },
  {
    "id": 313,
    "english": "bomb",
    "turkish": "bomba",
    "sentence": "The police safely defused the old bomb found during construction."
  },
  {
    "id": 314,
    "english": "bond",
    "turkish": "bağ, yapıştırmak",
    "sentence": "The shared experience helped to create a strong bond between the team members."
  },
  {
    "id": 315,
    "english": "bone",
    "turkish": "kemik",
    "sentence": "Dogs love to chew on a good bone to keep their teeth clean."
  },
  {
    "id": 316,
    "english": "book",
    "turkish": "kitap, rezervasyon yapmak",
    "sentence": "I need to book a hotel room for my trip next month."
  },
  {
    "id": 317,
    "english": "boot",
    "turkish": "bot, çizme",
    "sentence": "She wore her new leather boots to protect her feet from the rain."
  },
  {
    "id": 318,
    "english": "border",
    "turkish": "sınır",
    "sentence": "The river forms a natural border between the two countries."
  },
  {
    "id": 319,
    "english": "bored",
    "turkish": "sıkılmış",
    "sentence": "He felt very bored during the long meeting and wished it would end."
  },
  {
    "id": 320,
    "english": "boring",
    "turkish": "sıkıcı",
    "sentence": "This movie is so boring; I think I'm going to fall asleep."
  },
  {
    "id": 321,
    "english": "born",
    "turkish": "doğmuş",
    "sentence": "My brother was born in the same hospital as me."
  },
  {
    "id": 322,
    "english": "borrow",
    "turkish": "ödünç almak",
    "sentence": "Can I borrow your pen for a moment?"
  },
  {
    "id": 323,
    "english": "boss",
    "turkish": "patron",
    "sentence": "My boss asked me to stay late to finish the report."
  },
  {
    "id": 324,
    "english": "bother",
    "turkish": "rahatsız etmek, zahmet etmek",
    "sentence": "Please don't bother him while he's studying for his exam."
  },
  {
    "id": 325,
    "english": "bottle",
    "turkish": "şişe",
    "sentence": "Could you please pass me that bottle of water?"
  },
  {
    "id": 326,
    "english": "bottom",
    "turkish": "alt, dip",
    "sentence": "The keys are usually kept at the bottom of the drawer."
  },
  {
    "id": 327,
    "english": "bowl",
    "turkish": "kase, kap",
    "sentence": "She poured the soup into a large bowl and served it."
  },
  {
    "id": 328,
    "english": "box",
    "turkish": "kutu",
    "sentence": "He carefully packed his old books into a cardboard box."
  },
  {
    "id": 329,
    "english": "boy",
    "turkish": "erkek çocuk",
    "sentence": "The little boy was playing happily with his toy car."
  },
  {
    "id": 330,
    "english": "boyfriend",
    "turkish": "erkek arkadaş",
    "sentence": "My sister is going to the cinema with her boyfriend tonight."
  },
  {
    "id": 331,
    "english": "brain",
    "turkish": "beyin",
    "sentence": "Reading and learning new things helps keep your brain active and healthy."
  },
  {
    "id": 332,
    "english": "branch",
    "turkish": "dal, şube",
    "sentence": "A strong wind broke a branch off the old oak tree."
  },
  {
    "id": 333,
    "english": "brand",
    "turkish": "marka",
    "sentence": "What's your favorite brand of coffee?"
  },
  {
    "id": 334,
    "english": "brave",
    "turkish": "cesur",
    "sentence": "The firefighter was very brave when he rescued the cat from the burning building."
  },
  {
    "id": 335,
    "english": "bread",
    "turkish": "ekmek",
    "sentence": "I usually have a slice of bread with butter for breakfast."
  },
  {
    "id": 336,
    "english": "break",
    "turkish": "kırmak, ara vermek",
    "sentence": "Be careful not to break the glass when you wash it."
  },
  {
    "id": 337,
    "english": "breakfast",
    "turkish": "kahvaltı",
    "sentence": "What would you like to have for breakfast this morning?"
  },
  {
    "id": 338,
    "english": "breast",
    "turkish": "göğüs",
    "sentence": "Doctors recommend regular checks for breast health."
  },
  {
    "id": 339,
    "english": "breath",
    "turkish": "nefes",
    "sentence": "Take a deep breath and try to relax before your presentation."
  },
  {
    "id": 340,
    "english": "breathe",
    "turkish": "nefes almak",
    "sentence": "It's important to breathe deeply when you're feeling stressed."
  },
  {
    "id": 341,
    "english": "breathing",
    "turkish": "nefes alma",
    "sentence": "Her breathing became calmer after she rested for a while."
  },
  {
    "id": 342,
    "english": "bride",
    "turkish": "gelin",
    "sentence": "The bride looked beautiful in her white wedding dress."
  },
  {
    "id": 343,
    "english": "bridge",
    "turkish": "köprü",
    "sentence": "We drove over a long bridge that crossed the wide river."
  },
  {
    "id": 344,
    "english": "brief",
    "turkish": "kısa, özet",
    "sentence": "I'll give you a brief overview of the project before we start."
  },
  {
    "id": 345,
    "english": "bright",
    "turkish": "parlak, zeki",
    "sentence": "The sun is so bright today, I need my sunglasses."
  },
  {
    "id": 346,
    "english": "brilliant",
    "turkish": "parlak, zekice, harika",
    "sentence": "That's a brilliant idea! It might actually solve our problem."
  },
  {
    "id": 347,
    "english": "bring",
    "turkish": "getirmek",
    "sentence": "Could you please bring me a glass of water from the kitchen?"
  },
  {
    "id": 348,
    "english": "broad",
    "turkish": "geniş",
    "sentence": "The river was very broad at that point, making it difficult to cross."
  },
  {
    "id": 349,
    "english": "broadcast",
    "turkish": "yayınlamak, yayın",
    "sentence": "The news channel will broadcast the live event this evening."
  },
  {
    "id": 350,
    "english": "broken",
    "turkish": "kırık",
    "sentence": "My phone screen is broken after I dropped it on the floor."
  },
  {
    "id": 351,
    "english": "brother",
    "turkish": "erkek kardeş",
    "sentence": "My brother and I often play football together on weekends."
  },
  {
    "id": 352,
    "english": "brown",
    "turkish": "kahverengi",
    "sentence": "She has beautiful brown eyes and long dark hair."
  },
  {
    "id": 353,
    "english": "brush",
    "turkish": "fırça, fırçalamak",
    "sentence": "Don't forget to brush your teeth before you go to bed."
  },
  {
    "id": 354,
    "english": "bubble",
    "turkish": "baloncuk",
    "sentence": "Children love to play with soap bubbles in the garden."
  },
  {
    "id": 355,
    "english": "budget",
    "turkish": "bütçe",
    "sentence": "We need to stick to our budget if we want to save money for a new car."
  },
  {
    "id": 356,
    "english": "build",
    "turkish": "inşa etmek",
    "sentence": "They plan to build a new hospital in the city center next year."
  },
  {
    "id": 357,
    "english": "building",
    "turkish": "bina",
    "sentence": "The old building near the park is going to be renovated soon."
  },
  {
    "id": 358,
    "english": "bullet",
    "turkish": "kurşun",
    "sentence": "The police found a bullet casing at the crime scene."
  },
  {
    "id": 359,
    "english": "bunch",
    "turkish": "demet, salkım",
    "sentence": "He gave her a beautiful bunch of red roses for her birthday."
  },
  {
    "id": 360,
    "english": "burn",
    "turkish": "yanmak, yakmak",
    "sentence": "Be careful not to burn yourself when you are cooking."
  },
  {
    "id": 361,
    "english": "bury",
    "turkish": "gömmek",
    "sentence": "The dog likes to bury its bones in the garden."
  },
  {
    "id": 362,
    "english": "bus",
    "turkish": "otobüs",
    "sentence": "I usually take the bus to work because it's cheaper than driving."
  },
  {
    "id": 363,
    "english": "bush",
    "turkish": "çalı",
    "sentence": "There was a small bird hiding in the bush near the window."
  },
  {
    "id": 364,
    "english": "business",
    "turkish": "iş, ticari işletme",
    "sentence": "Starting a new business requires a lot of hard work and dedication."
  },
  {
    "id": 365,
    "english": "businessman",
    "turkish": "iş adamı",
    "sentence": "My uncle is a successful businessman who owns several companies."
  },
  {
    "id": 366,
    "english": "busy",
    "turkish": "meşgul",
    "sentence": "I can't talk right now, I'm very busy with my report."
  },
  {
    "id": 367,
    "english": "but",
    "turkish": "ama, fakat",
    "sentence": "The weather was bad, but we still enjoyed our trip."
  },
  {
    "id": 368,
    "english": "butter",
    "turkish": "tereyağı",
    "sentence": "Please pass me the butter so I can put it on my toast."
  },
  {
    "id": 369,
    "english": "button",
    "turkish": "düğme",
    "sentence": "This shirt has a missing button, I need to sew one on."
  },
  {
    "id": 370,
    "english": "buy",
    "turkish": "satın almak",
    "sentence": "We need to buy some groceries for dinner tonight."
  },
  {
    "id": 371,
    "english": "by",
    "turkish": "tarafından, yanında",
    "sentence": "The book was written by a famous author."
  },
  {
    "id": 372,
    "english": "cable",
    "turkish": "kablo",
    "sentence": "I need a longer USB cable to charge my phone comfortably."
  },
  {
    "id": 373,
    "english": "cafe",
    "turkish": "kafe",
    "sentence": "Let's meet at the cafe on the corner for coffee tomorrow morning."
  },
  {
    "id": 374,
    "english": "cake",
    "turkish": "kek, pasta",
    "sentence": "My sister baked a delicious chocolate cake for my birthday."
  },
  {
    "id": 375,
    "english": "calculate",
    "turkish": "hesaplamak",
    "sentence": "Can you help me calculate the total cost of these items?"
  },
  {
    "id": 376,
    "english": "call",
    "turkish": "aramak, çağırmak",
    "sentence": "I will call you later to discuss our plans for the weekend."
  },
  {
    "id": 377,
    "english": "calm",
    "turkish": "sakin",
    "sentence": "After the storm, the sea became very calm and peaceful."
  },
  {
    "id": 378,
    "english": "camera",
    "turkish": "kamera, fotoğraf makinesi",
    "sentence": "Don't forget to bring your camera to take pictures of the scenery."
  },
  {
    "id": 379,
    "english": "camp",
    "turkish": "kamp yapmak, kamp",
    "sentence": "We decided to camp by the lake for a few days during our vacation."
  },
  {
    "id": 380,
    "english": "campaign",
    "turkish": "kampanya",
    "sentence": "The company launched a new advertising campaign for their latest product."
  },
  {
    "id": 381,
    "english": "camping",
    "turkish": "kampçılık",
    "sentence": "Camping in the mountains can be a great way to experience nature."
  },
  {
    "id": 382,
    "english": "campus",
    "turkish": "kampüs",
    "sentence": "The university campus is very large with many different buildings."
  },
  {
    "id": 383,
    "english": "cancel",
    "turkish": "iptal etmek",
    "sentence": "We had to cancel our flight because of the heavy snow."
  },
  {
    "id": 384,
    "english": "cancer",
    "turkish": "kanser",
    "sentence": "Early detection is crucial in the fight against cancer."
  },
  {
    "id": 385,
    "english": "candidate",
    "turkish": "aday",
    "sentence": "Each candidate for the job was interviewed by the hiring manager."
  },
  {
    "id": 386,
    "english": "candy",
    "turkish": "şeker",
    "sentence": "Children often get excited when they see a store full of candy."
  },
  {
    "id": 387,
    "english": "cannot",
    "turkish": "yapamaz, edemez",
    "sentence": "I cannot come to the party tonight because I have to work."
  },
  {
    "id": 388,
    "english": "cap",
    "turkish": "şapka (siperli), kapak",
    "sentence": "He always wears a baseball cap when he plays sports."
  },
  {
    "id": 389,
    "english": "capable",
    "turkish": "yapabilen, yetenekli",
    "sentence": "She is a very capable student and always gets good grades."
  },
  {
    "id": 390,
    "english": "capacity",
    "turkish": "kapasite",
    "sentence": "The new concert hall has a seating capacity of 5,000 people."
  },
  {
    "id": 391,
    "english": "capital",
    "turkish": "başkent, sermaye",
    "sentence": "Paris is the capital city of France."
  },
  {
    "id": 392,
    "english": "captain",
    "turkish": "kaptan",
    "sentence": "The captain steered the ship safely through the storm."
  },
  {
    "id": 393,
    "english": "capture",
    "turkish": "yakalamak, ele geçirmek",
    "sentence": "The photographer managed to capture the perfect moment of the sunset."
  },
  {
    "id": 394,
    "english": "car",
    "turkish": "araba",
    "sentence": "We decided to rent a car for our road trip across the country."
  },
  {
    "id": 395,
    "english": "card",
    "turkish": "kart",
    "sentence": "Don't forget to send a birthday card to your grandmother."
  },
  {
    "id": 396,
    "english": "care",
    "turkish": "önemsemek, bakım",
    "sentence": "She takes great care of her garden, and it always looks beautiful."
  },
  {
    "id": 397,
    "english": "career",
    "turkish": "kariyer",
    "sentence": "He decided to pursue a career in medicine because he wanted to help people."
  },
  {
    "id": 398,
    "english": "careful",
    "turkish": "dikkatli",
    "sentence": "Be careful when you cross the street, there's a lot of traffic."
  },
  {
    "id": 399,
    "english": "carefully",
    "turkish": "dikkatlice",
    "sentence": "She carefully packed the fragile items in the box."
  },
  {
    "id": 400,
    "english": "careless",
    "turkish": "dikkatsiz",
    "sentence": "His careless mistake caused a big problem for the whole team."
  },
  {
    "id": 401,
    "english": "carpet",
    "turkish": "halı",
    "sentence": "The new carpet made the living room feel much warmer."
  },
  {
    "id": 402,
    "english": "carrot",
    "turkish": "havuç",
    "sentence": "Carrots are good for your eyes because they contain vitamin A."
  },
  {
    "id": 403,
    "english": "carry",
    "turkish": "taşımak",
    "sentence": "Can you help me carry these heavy bags to the car?"
  },
  {
    "id": 404,
    "english": "cartoon",
    "turkish": "çizgi film",
    "sentence": "My little brother loves watching cartoons on Saturday mornings."
  },
  {
    "id": 405,
    "english": "case",
    "turkish": "durum",
    "sentence": "In some cases, you might need to consult a doctor."
  },
  {
    "id": 406,
    "english": "cash",
    "turkish": "nakit",
    "sentence": "I prefer to pay with cash instead of using my credit card."
  },
  {
    "id": 407,
    "english": "cast",
    "turkish": "oyuncu kadrosu",
    "sentence": "The cast of the play received a standing ovation."
  },
  {
    "id": 408,
    "english": "cat",
    "turkish": "kedi",
    "sentence": "My neighbor's cat loves to sit on the window sill and watch the birds."
  },
  {
    "id": 409,
    "english": "catch",
    "turkish": "yakalamak",
    "sentence": "He tried to catch the ball, but it was too fast."
  },
  {
    "id": 410,
    "english": "category",
    "turkish": "kategori",
    "sentence": "This book belongs to the science fiction category."
  },
  {
    "id": 411,
    "english": "cause",
    "turkish": "sebep olmak",
    "sentence": "Smoking is a major cause of lung cancer."
  },
  {
    "id": 412,
    "english": "ceiling",
    "turkish": "tavan",
    "sentence": "The painters are going to paint the living room ceiling next week."
  },
  {
    "id": 413,
    "english": "celebrate",
    "turkish": "kutlamak",
    "sentence": "We are going to celebrate my sister's birthday this weekend."
  },
  {
    "id": 414,
    "english": "celebration",
    "turkish": "kutlama",
    "sentence": "The town held a big celebration after the team won the championship."
  },
  {
    "id": 415,
    "english": "celebrity",
    "turkish": "ünlü",
    "sentence": "Many celebrities attended the charity event last night."
  },
  {
    "id": 416,
    "english": "cell",
    "turkish": "hücre",
    "sentence": "Scientists are studying how these cells react to the new drug."
  },
  {
    "id": 417,
    "english": "cent",
    "turkish": "sent",
    "sentence": "A dollar is equal to one hundred cents."
  },
  {
    "id": 418,
    "english": "center",
    "turkish": "merkez",
    "sentence": "The new shopping mall is located in the center of the city."
  },
  {
    "id": 419,
    "english": "central",
    "turkish": "merkezi",
    "sentence": "The central library has a wide collection of books."
  },
  {
    "id": 420,
    "english": "century",
    "turkish": "yüzyıl",
    "sentence": "The 21st century began in the year 2001."
  },
  {
    "id": 421,
    "english": "ceremony",
    "turkish": "tören",
    "sentence": "The wedding ceremony took place in a beautiful garden."
  },
  {
    "id": 422,
    "english": "certain",
    "turkish": "kesin",
    "sentence": "I am certain that I locked the door before I left."
  },
  {
    "id": 423,
    "english": "certainly",
    "turkish": "kesinlikle",
    "sentence": "\"Will you be there?\" \"Certainly!\""
  },
  {
    "id": 424,
    "english": "chain",
    "turkish": "zincir",
    "sentence": "The dog was tied to a tree with a long chain."
  },
  {
    "id": 425,
    "english": "chair",
    "turkish": "sandalye",
    "sentence": "Please take a seat, there's an empty chair over there."
  },
  {
    "id": 426,
    "english": "chairman",
    "turkish": "başkan (yönetim kurulu)",
    "sentence": "The chairman opened the meeting with a brief speech."
  },
  {
    "id": 427,
    "english": "challenge",
    "turkish": "meydan okuma",
    "sentence": "Learning a new language can be a real challenge."
  },
  {
    "id": 428,
    "english": "champion",
    "turkish": "şampiyon",
    "sentence": "He became the world champion in swimming at a very young age."
  },
  {
    "id": 429,
    "english": "chance",
    "turkish": "şans",
    "sentence": "Don't miss this chance to visit Paris; it's a great opportunity."
  },
  {
    "id": 430,
    "english": "change",
    "turkish": "değiştirmek",
    "sentence": "I need to change my clothes before going to the party."
  },
  {
    "id": 431,
    "english": "channel",
    "turkish": "kanal",
    "sentence": "Can you change the TV channel? I don't like this show."
  },
  {
    "id": 432,
    "english": "chapter",
    "turkish": "bölüm (kitap)",
    "sentence": "I finished reading the first chapter of the novel last night."
  },
  {
    "id": 433,
    "english": "character",
    "turkish": "karakter",
    "sentence": "The main character in the story is a brave knight."
  },
  {
    "id": 434,
    "english": "characteristic",
    "turkish": "özellik",
    "sentence": "One of her main characteristics is her kindness."
  },
  {
    "id": 435,
    "english": "charge",
    "turkish": "şarj etmek",
    "sentence": "Don't forget to charge your phone before you go out."
  },
  {
    "id": 436,
    "english": "charity",
    "turkish": "hayır kurumu",
    "sentence": "They donated a lot of money to charity last year."
  },
  {
    "id": 437,
    "english": "chart",
    "turkish": "çizelge",
    "sentence": "The sales chart shows a steady increase in profits."
  },
  {
    "id": 438,
    "english": "chat",
    "turkish": "sohbet etmek",
    "sentence": "We had a nice chat about our holiday plans."
  },
  {
    "id": 439,
    "english": "cheap",
    "turkish": "ucuz",
    "sentence": "This restaurant offers delicious food at very cheap prices."
  },
  {
    "id": 440,
    "english": "cheat",
    "turkish": "hile yapmak",
    "sentence": "It's important not to cheat during an exam."
  },
  {
    "id": 441,
    "english": "check",
    "turkish": "kontrol etmek",
    "sentence": "Please check your answers carefully before submitting the test."
  },
  {
    "id": 442,
    "english": "cheerful",
    "turkish": "neşeli",
    "sentence": "She always has a cheerful attitude, even on difficult days."
  },
  {
    "id": 443,
    "english": "cheese",
    "turkish": "peynir",
    "sentence": "Would you like some cheese with your sandwich?"
  },
  {
    "id": 444,
    "english": "chef",
    "turkish": "şef (aşçı)",
    "sentence": "The chef at this restaurant is famous for his Italian dishes."
  },
  {
    "id": 445,
    "english": "chemical",
    "turkish": "kimyasal",
    "sentence": "Be careful with those chemicals; they can be dangerous."
  },
  {
    "id": 446,
    "english": "chemistry",
    "turkish": "kimya",
    "sentence": "My favorite subject in high school was chemistry."
  },
  {
    "id": 447,
    "english": "chest",
    "turkish": "göğüs",
    "sentence": "He felt a sharp pain in his chest after running."
  },
  {
    "id": 448,
    "english": "chicken",
    "turkish": "tavuk",
    "sentence": "We are having roasted chicken for dinner tonight."
  },
  {
    "id": 449,
    "english": "chief",
    "turkish": "şef",
    "sentence": "He is the chief of police in our city."
  },
  {
    "id": 450,
    "english": "childhood",
    "turkish": "çocukluk",
    "sentence": "My childhood memories are mostly happy ones."
  },
  {
    "id": 451,
    "english": "chip",
    "turkish": "cips",
    "sentence": "I like to eat potato chips while watching movies."
  },
  {
    "id": 452,
    "english": "chocolate",
    "turkish": "çikolata",
    "sentence": "Do you prefer milk chocolate or dark chocolate?"
  },
  {
    "id": 453,
    "english": "choice",
    "turkish": "seçim",
    "sentence": "You always have a choice about how you react."
  },
  {
    "id": 454,
    "english": "choose",
    "turkish": "seçmek",
    "sentence": "Please choose a book from the shelf."
  },
  {
    "id": 455,
    "english": "church",
    "turkish": "kilise",
    "sentence": "They decided to get married in a small country church."
  },
  {
    "id": 456,
    "english": "cigarette",
    "turkish": "sigara",
    "sentence": "Smoking cigarettes is harmful to your health."
  },
  {
    "id": 457,
    "english": "circle",
    "turkish": "daire",
    "sentence": "Draw a perfect circle with your compass."
  },
  {
    "id": 458,
    "english": "circumstance",
    "turkish": "durum",
    "sentence": "Due to unforeseen circumstances, the meeting was canceled."
  },
  {
    "id": 459,
    "english": "cite",
    "turkish": "alıntı yapmak",
    "sentence": "You should always cite your sources in academic writing."
  },
  {
    "id": 460,
    "english": "citizen",
    "turkish": "vatandaş",
    "sentence": "Every citizen has the right to vote."
  },
  {
    "id": 461,
    "english": "city",
    "turkish": "şehir",
    "sentence": "We live in a big city with many tall buildings."
  },
  {
    "id": 462,
    "english": "civil",
    "turkish": "sivil",
    "sentence": "He works as a civil engineer for the local government."
  },
  {
    "id": 463,
    "english": "claim",
    "turkish": "iddia etmek",
    "sentence": "She claimed that she had never seen him before."
  },
  {
    "id": 464,
    "english": "class",
    "turkish": "sınıf",
    "sentence": "I have an English class every Monday morning."
  },
  {
    "id": 465,
    "english": "classic",
    "turkish": "klasik",
    "sentence": "\"Pride and Prejudice\" is a classic novel."
  },
  {
    "id": 466,
    "english": "classical",
    "turkish": "klasik (müzik vb.)",
    "sentence": "Do you enjoy listening to classical music?"
  },
  {
    "id": 467,
    "english": "classroom",
    "turkish": "sınıf (oda)",
    "sentence": "The students are waiting for the teacher in the classroom."
  },
  {
    "id": 468,
    "english": "clause",
    "turkish": "yan cümle",
    "sentence": "Every sentence must have at least one main clause."
  },
  {
    "id": 469,
    "english": "clean",
    "turkish": "temiz",
    "sentence": "Please clean your room before your friends arrive."
  },
  {
    "id": 470,
    "english": "clear",
    "turkish": "açık",
    "sentence": "The sky is clear today, perfect for a walk."
  },
  {
    "id": 471,
    "english": "clearly",
    "turkish": "açıkça",
    "sentence": "She spoke clearly so everyone could understand her."
  },
  {
    "id": 472,
    "english": "clerk",
    "turkish": "memur",
    "sentence": "The clerk at the hotel reception was very helpful."
  },
  {
    "id": 473,
    "english": "clever",
    "turkish": "zekalı",
    "sentence": "He is a clever student who always gets good grades."
  },
  {
    "id": 474,
    "english": "click",
    "turkish": "tıklamak",
    "sentence": "Please click on the link to open the document."
  },
  {
    "id": 475,
    "english": "client",
    "turkish": "müşteri",
    "sentence": "The lawyer met with his client to discuss the case."
  },
  {
    "id": 476,
    "english": "climate",
    "turkish": "iklim",
    "sentence": "The climate in this region is usually mild and sunny."
  },
  {
    "id": 477,
    "english": "climb",
    "turkish": "tırmanmak",
    "sentence": "We want to climb to the top of the mountain."
  },
  {
    "id": 478,
    "english": "clock",
    "turkish": "saat (duvar/masa)",
    "sentence": "The clock on the wall shows it's already noon."
  },
  {
    "id": 479,
    "english": "closed",
    "turkish": "kapalı",
    "sentence": "The shop is closed on Sundays."
  },
  {
    "id": 480,
    "english": "closely",
    "turkish": "yakından",
    "sentence": "He watched the children closely as they played."
  },
  {
    "id": 481,
    "english": "closet",
    "turkish": "gardırop",
    "sentence": "My clothes are all in the closet."
  },
  {
    "id": 482,
    "english": "cloth",
    "turkish": "kumaş",
    "sentence": "Use a clean cloth to wipe the table."
  },
  {
    "id": 483,
    "english": "clothes",
    "turkish": "giysiler",
    "sentence": "I need to buy some new clothes for the winter."
  },
  {
    "id": 484,
    "english": "clothing",
    "turkish": "giyim",
    "sentence": "They sell children's clothing at that store."
  },
  {
    "id": 485,
    "english": "cloud",
    "turkish": "bulut",
    "sentence": "There are dark clouds in the sky; it might rain."
  },
  {
    "id": 486,
    "english": "club",
    "turkish": "kulüp",
    "sentence": "I joined a book club to meet new people."
  },
  {
    "id": 487,
    "english": "clue",
    "turkish": "ipucu",
    "sentence": "The police are looking for clues to solve the mystery."
  },
  {
    "id": 488,
    "english": "coach",
    "turkish": "antrenör",
    "sentence": "The football coach trained his team every day."
  },
  {
    "id": 489,
    "english": "coal",
    "turkish": "kömür",
    "sentence": "Many power stations used to burn coal to generate electricity."
  },
  {
    "id": 490,
    "english": "coast",
    "turkish": "sahil",
    "sentence": "We spent our holiday on the beautiful Italian coast."
  },
  {
    "id": 491,
    "english": "coat",
    "turkish": "palto",
    "sentence": "It's cold outside, so wear your warm coat."
  },
  {
    "id": 492,
    "english": "code",
    "turkish": "kod",
    "sentence": "You need a secret code to unlock the safe."
  },
  {
    "id": 493,
    "english": "coffee",
    "turkish": "kahve",
    "sentence": "Would you like a cup of coffee or tea?"
  },
  {
    "id": 494,
    "english": "coin",
    "turkish": "madeni para",
    "sentence": "I found an old coin on the street."
  },
  {
    "id": 495,
    "english": "cold",
    "turkish": "soğuk",
    "sentence": "It's very cold outside today, so dress warmly."
  },
  {
    "id": 496,
    "english": "collapse",
    "turkish": "çökmek",
    "sentence": "The old building might collapse if there's another earthquake."
  },
  {
    "id": 497,
    "english": "colleague",
    "turkish": "iş arkadaşı",
    "sentence": "I had lunch with my colleagues from work yesterday."
  },
  {
    "id": 498,
    "english": "collect",
    "turkish": "toplamak",
    "sentence": "She loves to collect stamps from different countries."
  },
  {
    "id": 499,
    "english": "collection",
    "turkish": "koleksiyon",
    "sentence": "He has an impressive collection of antique books."
  },
  {
    "id": 500,
    "english": "college",
    "turkish": "kolej, üniversite",
    "sentence": "She decided to go to college after high school to study engineering."
  },
  {
    "id": 501,
    "english": "color",
    "turkish": "renk",
    "sentence": "What is your favorite color? Mine is blue."
  },
  {
    "id": 502,
    "english": "colored",
    "turkish": "renkli, boyalı",
    "sentence": "The children used colored pencils to draw a beautiful picture."
  },
  {
    "id": 503,
    "english": "column",
    "turkish": "sütun, kolon",
    "sentence": "Please read the first column of the newspaper for today's headlines."
  },
  {
    "id": 504,
    "english": "combination",
    "turkish": "kombinasyon, birleşim",
    "sentence": "The chef created a delicious dish with a unique combination of spices."
  },
  {
    "id": 505,
    "english": "combine",
    "turkish": "birleştirmek, bir araya getirmek",
    "sentence": "We need to combine our efforts to finish this project on time."
  },
  {
    "id": 506,
    "english": "come",
    "turkish": "gelmek",
    "sentence": "Could you please come here for a moment? I need your help."
  },
  {
    "id": 507,
    "english": "comedy",
    "turkish": "komedi",
    "sentence": "We watched a funny comedy movie last night and laughed a lot."
  },
  {
    "id": 508,
    "english": "comfort",
    "turkish": "rahatlık, konfor; teselli etmek",
    "sentence": "She found great comfort in reading books during difficult times."
  },
  {
    "id": 509,
    "english": "comfortable",
    "turkish": "rahat, konforlu",
    "sentence": "This new sofa is very comfortable; I could sleep on it."
  },
  {
    "id": 510,
    "english": "command",
    "turkish": "komuta etmek, emretmek; komut",
    "sentence": "The general gave a clear command to his soldiers to advance."
  },
  {
    "id": 511,
    "english": "comment",
    "turkish": "yorum yapmak; yorum",
    "sentence": "Please feel free to comment on my presentation after I finish."
  },
  {
    "id": 512,
    "english": "commercial",
    "turkish": "ticari; reklam",
    "sentence": "There was a short commercial break during the TV show."
  },
  {
    "id": 513,
    "english": "commission",
    "turkish": "komisyon, görevlendirme",
    "sentence": "He earns a commission on every sale he makes."
  },
  {
    "id": 514,
    "english": "commit",
    "turkish": "işlemek (suç); taahhüt etmek",
    "sentence": "It's important to commit to your goals if you want to achieve them."
  },
  {
    "id": 515,
    "english": "commitment",
    "turkish": "taahhüt, bağlılık",
    "sentence": "Marriage requires a strong commitment from both partners."
  },
  {
    "id": 516,
    "english": "committee",
    "turkish": "komite, kurul",
    "sentence": "The committee meets every month to discuss new policies."
  },
  {
    "id": 517,
    "english": "common",
    "turkish": "yaygın, ortak",
    "sentence": "It's common for people to feel nervous before a big presentation."
  },
  {
    "id": 518,
    "english": "commonly",
    "turkish": "yaygın olarak, genellikle",
    "sentence": "This type of bird is commonly found in forests."
  },
  {
    "id": 519,
    "english": "communicate",
    "turkish": "iletişim kurmak",
    "sentence": "It's essential to communicate clearly with your team members."
  },
  {
    "id": 520,
    "english": "communication",
    "turkish": "iletişim",
    "sentence": "Good communication is key to a successful relationship."
  },
  {
    "id": 521,
    "english": "community",
    "turkish": "topluluk, cemaat",
    "sentence": "The local community organized a clean-up day for the park."
  },
  {
    "id": 522,
    "english": "company",
    "turkish": "şirket; arkadaşlık",
    "sentence": "She started her own software company last year."
  },
  {
    "id": 523,
    "english": "compare",
    "turkish": "karşılaştırmak",
    "sentence": "You shouldn't compare yourself to others; everyone is unique."
  },
  {
    "id": 524,
    "english": "comparison",
    "turkish": "karşılaştırma",
    "sentence": "There's no comparison between the old model and the new one; the new one is much better."
  },
  {
    "id": 525,
    "english": "compete",
    "turkish": "rekabet etmek, yarışmak",
    "sentence": "Athletes from all over the world compete in the Olympic Games."
  },
  {
    "id": 526,
    "english": "competition",
    "turkish": "rekabet, yarışma",
    "sentence": "There is strong competition among smartphone manufacturers."
  },
  {
    "id": 527,
    "english": "competitive",
    "turkish": "rekabetçi",
    "sentence": "He has a very competitive personality and always wants to win."
  },
  {
    "id": 528,
    "english": "competitor",
    "turkish": "rakip",
    "sentence": "Our main competitor just launched a similar product."
  },
  {
    "id": 529,
    "english": "complain",
    "turkish": "şikayet etmek",
    "sentence": "If you are not satisfied, you should complain to the manager."
  },
  {
    "id": 530,
    "english": "complaint",
    "turkish": "şikayet",
    "sentence": "We received a complaint from a customer about the slow service."
  },
  {
    "id": 531,
    "english": "complete",
    "turkish": "tamamlamak; tam, eksiksiz",
    "sentence": "Please complete the form and return it by Friday."
  },
  {
    "id": 532,
    "english": "completely",
    "turkish": "tamamen, bütünüyle",
    "sentence": "I completely forgot about our appointment today."
  },
  {
    "id": 533,
    "english": "complex",
    "turkish": "karmaşık, kompleks",
    "sentence": "The human brain is an incredibly complex organ."
  },
  {
    "id": 534,
    "english": "complicated",
    "turkish": "karmaşık, komplike",
    "sentence": "The instructions were so complicated that I couldn't understand them."
  },
  {
    "id": 535,
    "english": "component",
    "turkish": "bileşen, parça",
    "sentence": "Each component of the machine needs to be checked carefully."
  },
  {
    "id": 536,
    "english": "computer",
    "turkish": "bilgisayar",
    "sentence": "I use my computer every day for work and studies."
  },
  {
    "id": 537,
    "english": "concentrate",
    "turkish": "konsantre olmak, odaklanmak",
    "sentence": "It's hard to concentrate when there is so much noise."
  },
  {
    "id": 538,
    "english": "concentration",
    "turkish": "konsantrasyon, odaklanma",
    "sentence": "Good concentration is important for studying effectively."
  },
  {
    "id": 539,
    "english": "concept",
    "turkish": "konsept, kavram",
    "sentence": "It's a difficult concept to grasp, but I'll try to explain it simply."
  },
  {
    "id": 540,
    "english": "concern",
    "turkish": "endişe, kaygı; ilgilendirmek",
    "sentence": "Environmental issues are a major concern for many people."
  },
  {
    "id": 541,
    "english": "concerned",
    "turkish": "endişeli, ilgili",
    "sentence": "I'm very concerned about the rising cost of living."
  },
  {
    "id": 542,
    "english": "concert",
    "turkish": "konser",
    "sentence": "We bought tickets to see our favorite band play live in concert."
  },
  {
    "id": 543,
    "english": "conclude",
    "turkish": "sonuçlandırmak, varmak (sonuca)",
    "sentence": "Based on the evidence, we can conclude that the theory is correct."
  },
  {
    "id": 544,
    "english": "conclusion",
    "turkish": "sonuç, nihai karar",
    "sentence": "In conclusion, I would like to thank everyone for their hard work."
  },
  {
    "id": 545,
    "english": "condition",
    "turkish": "koşul, durum",
    "sentence": "The car is in excellent condition despite its age."
  },
  {
    "id": 546,
    "english": "conduct",
    "turkish": "yürütmek, yapmak (araştırma vb.); davranış",
    "sentence": "They decided to conduct a survey to understand customer satisfaction."
  },
  {
    "id": 547,
    "english": "conference",
    "turkish": "konferans",
    "sentence": "Scientists from around the world attended the annual conference."
  },
  {
    "id": 548,
    "english": "confidence",
    "turkish": "özgüven, güven",
    "sentence": "She gained a lot of confidence after successfully completing the project."
  },
  {
    "id": 549,
    "english": "confident",
    "turkish": "kendinden emin, güvenli",
    "sentence": "I feel confident that we will win the game tonight."
  },
  {
    "id": 550,
    "english": "confirm",
    "turkish": "onaylamak",
    "sentence": "Please confirm your flight details at least 24 hours before departure."
  },
  {
    "id": 551,
    "english": "conflict",
    "turkish": "çatışma",
    "sentence": "There was a conflict of interest between the two managers."
  },
  {
    "id": 552,
    "english": "confuse",
    "turkish": "kafası karıştırmak",
    "sentence": "The complicated instructions tend to confuse new users."
  },
  {
    "id": 553,
    "english": "confused",
    "turkish": "kafası karışmış",
    "sentence": "I felt quite confused after hearing all the different opinions."
  },
  {
    "id": 554,
    "english": "confusing",
    "turkish": "kafa karıştırıcı",
    "sentence": "The new public transport map is very confusing."
  },
  {
    "id": 555,
    "english": "congress",
    "turkish": "kongre",
    "sentence": "The new bill will be debated in Congress next week."
  },
  {
    "id": 556,
    "english": "connect",
    "turkish": "bağlamak",
    "sentence": "Can you help me connect this new speaker to the television?"
  },
  {
    "id": 557,
    "english": "connected",
    "turkish": "bağlı",
    "sentence": "All the devices in our smart home are connected to the Wi-Fi network."
  },
  {
    "id": 558,
    "english": "connection",
    "turkish": "bağlantı",
    "sentence": "There is a strong connection between regular exercise and good health."
  },
  {
    "id": 559,
    "english": "conscious",
    "turkish": "bilinçli",
    "sentence": "He became conscious again a few minutes after the accident."
  },
  {
    "id": 560,
    "english": "consequence",
    "turkish": "sonuç",
    "sentence": "The economic consequences of the pandemic were felt globally."
  },
  {
    "id": 561,
    "english": "conservative",
    "turkish": "muhafazakar",
    "sentence": "She has quite conservative views on social issues."
  },
  {
    "id": 562,
    "english": "consider",
    "turkish": "düşünmek",
    "sentence": "We need to consider all the options before making a final decision."
  },
  {
    "id": 563,
    "english": "consideration",
    "turkish": "dikkate alma",
    "sentence": "Thank you for your consideration of my job application."
  },
  {
    "id": 564,
    "english": "consist",
    "turkish": "oluşmak",
    "sentence": "The committee consists of ten members from different departments."
  },
  {
    "id": 565,
    "english": "consistent",
    "turkish": "tutarlı",
    "sentence": "Her performance has been consistent throughout the entire season."
  },
  {
    "id": 566,
    "english": "constant",
    "turkish": "sürekli",
    "sentence": "The machine requires constant maintenance to function properly."
  },
  {
    "id": 567,
    "english": "constantly",
    "turkish": "sürekli olarak",
    "sentence": "He is constantly checking his phone for new messages."
  },
  {
    "id": 568,
    "english": "construct",
    "turkish": "inşa etmek",
    "sentence": "They plan to construct a new sports stadium in the city center."
  },
  {
    "id": 569,
    "english": "construction",
    "turkish": "inşaat",
    "sentence": "The new office building is still under construction."
  },
  {
    "id": 570,
    "english": "consume",
    "turkish": "tüketmek",
    "sentence": "People in developed countries consume a large amount of energy."
  },
  {
    "id": 571,
    "english": "consumer",
    "turkish": "tüketici",
    "sentence": "Consumer confidence is an important indicator of economic health."
  },
  {
    "id": 572,
    "english": "contact",
    "turkish": "iletişim kurmak",
    "sentence": "Please contact me if you have any further questions."
  },
  {
    "id": 573,
    "english": "contain",
    "turkish": "içermek",
    "sentence": "This document contains all the necessary information for your project."
  },
  {
    "id": 574,
    "english": "container",
    "turkish": "kap",
    "sentence": "Please put all your recyclable waste into the correct container."
  },
  {
    "id": 575,
    "english": "contemporary",
    "turkish": "çağdaş",
    "sentence": "She is a well-known artist in the field of contemporary sculpture."
  },
  {
    "id": 576,
    "english": "contest",
    "turkish": "yarışma",
    "sentence": "She entered a cooking contest and won first prize."
  },
  {
    "id": 577,
    "english": "context",
    "turkish": "bağlam",
    "sentence": "It's important to understand the historical context of the text."
  },
  {
    "id": 578,
    "english": "continent",
    "turkish": "kıta",
    "sentence": "Australia is both a country and a continent."
  },
  {
    "id": 579,
    "english": "continue",
    "turkish": "devam etmek",
    "sentence": "We will continue our meeting after a short coffee break."
  },
  {
    "id": 580,
    "english": "continuous",
    "turkish": "kesintisiz",
    "sentence": "The continuous rain caused significant flooding in the area."
  },
  {
    "id": 581,
    "english": "contract",
    "turkish": "sözleşme",
    "sentence": "He signed a new contract with the company for two years."
  },
  {
    "id": 582,
    "english": "contrast",
    "turkish": "zıtlık",
    "sentence": "The report highlights the stark contrast between urban and rural living."
  },
  {
    "id": 583,
    "english": "contribute",
    "turkish": "katkıda bulunmak",
    "sentence": "Everyone is encouraged to contribute ideas during the brainstorming session."
  },
  {
    "id": 584,
    "english": "contribution",
    "turkish": "katkı",
    "sentence": "Her contribution to the research project was invaluable."
  },
  {
    "id": 585,
    "english": "control",
    "turkish": "kontrol etmek",
    "sentence": "The government is trying to control inflation in the economy."
  },
  {
    "id": 586,
    "english": "convenient",
    "turkish": "uygun",
    "sentence": "It's very convenient to have a grocery store within walking distance."
  },
  {
    "id": 587,
    "english": "conversation",
    "turkish": "sohbet",
    "sentence": "I had an interesting conversation with a stranger on the bus."
  },
  {
    "id": 588,
    "english": "convert",
    "turkish": "dönüştürmek",
    "sentence": "They plan to convert the old warehouse into luxury apartments."
  },
  {
    "id": 589,
    "english": "convince",
    "turkish": "ikna etmek",
    "sentence": "I tried to convince her to come with us, but she politely refused."
  },
  {
    "id": 590,
    "english": "convinced",
    "turkish": "ikna olmuş",
    "sentence": "I am convinced that we made the right decision for the company."
  },
  {
    "id": 591,
    "english": "cook",
    "turkish": "yemek pişirmek",
    "sentence": "He loves to cook various international dishes for his family."
  },
  {
    "id": 592,
    "english": "cookie",
    "turkish": "kurabiye",
    "sentence": "Would you like a chocolate chip cookie with your coffee?"
  },
  {
    "id": 593,
    "english": "cooking",
    "turkish": "yemek pişirme",
    "sentence": "My grandmother's cooking is always the best."
  },
  {
    "id": 594,
    "english": "cool",
    "turkish": "serin",
    "sentence": "The evening air was cool and refreshing after the hot day."
  },
  {
    "id": 595,
    "english": "copy",
    "turkish": "kopya",
    "sentence": "Can you please make a copy of this report for everyone?"
  },
  {
    "id": 596,
    "english": "core",
    "turkish": "çekirdek",
    "sentence": "The core of the problem lies in the lack of effective communication."
  },
  {
    "id": 597,
    "english": "corn",
    "turkish": "mısır",
    "sentence": "We enjoyed fresh corn on the cob at the summer barbecue."
  },
  {
    "id": 598,
    "english": "corner",
    "turkish": "köşe",
    "sentence": "There's a small bookstore located just around the corner from my office."
  },
  {
    "id": 599,
    "english": "corporate",
    "turkish": "kurumsal",
    "sentence": "He decided to leave his corporate job to start his own business."
  },
  {
    "id": 600,
    "english": "correct",
    "turkish": "doğru, düzeltmek",
    "sentence": "Make sure to correct any mistakes before submitting your essay."
  },
  {
    "id": 601,
    "english": "correctly",
    "turkish": "doğru bir şekilde",
    "sentence": "Please try to pronounce these words correctly to avoid misunderstandings."
  },
  {
    "id": 602,
    "english": "cost",
    "turkish": "maliyet, mal olmak",
    "sentence": "How much does it cost to fly from London to New York?"
  },
  {
    "id": 603,
    "english": "costume",
    "turkish": "kostüm",
    "sentence": "She wore a beautiful butterfly costume to the fancy dress party."
  },
  {
    "id": 604,
    "english": "cotton",
    "turkish": "pamuk",
    "sentence": "This shirt is made from soft organic cotton, which feels very comfortable."
  },
  {
    "id": 605,
    "english": "council",
    "turkish": "konsey, belediye",
    "sentence": "The local council is discussing new plans for the city park."
  },
  {
    "id": 606,
    "english": "count",
    "turkish": "saymak, sayı",
    "sentence": "Can you count how many people are waiting in line?"
  },
  {
    "id": 607,
    "english": "country",
    "turkish": "ülke, kır",
    "sentence": "France is a beautiful country with a rich history and culture."
  },
  {
    "id": 608,
    "english": "countryside",
    "turkish": "kırsal kesim, taşra",
    "sentence": "We spent the weekend hiking in the beautiful English countryside."
  },
  {
    "id": 609,
    "english": "county",
    "turkish": "ilçe, kontluk",
    "sentence": "My grandparents live in a small village in the next county over."
  },
  {
    "id": 610,
    "english": "couple",
    "turkish": "çift, birkaç",
    "sentence": "A young couple bought the house next door last month."
  },
  {
    "id": 611,
    "english": "courage",
    "turkish": "cesaret",
    "sentence": "It takes a lot of courage to speak in front of a large audience."
  },
  {
    "id": 612,
    "english": "course",
    "turkish": "kurs, yol, elbette",
    "sentence": "I'm taking an advanced English course to improve my grammar."
  },
  {
    "id": 613,
    "english": "court",
    "turkish": "mahkeme, kort",
    "sentence": "The lawyer presented the evidence in court yesterday."
  },
  {
    "id": 614,
    "english": "cousin",
    "turkish": "kuzen",
    "sentence": "My favorite cousin lives in Canada, and we visit her every summer."
  },
  {
    "id": 615,
    "english": "cover",
    "turkish": "örtmek, kapak",
    "sentence": "Please cover the food to keep it warm."
  },
  {
    "id": 616,
    "english": "covered",
    "turkish": "kapalı, örtülü",
    "sentence": "The table was covered with a beautiful lace tablecloth."
  },
  {
    "id": 617,
    "english": "cow",
    "turkish": "inek",
    "sentence": "We saw several cows grazing peacefully in the field."
  },
  {
    "id": 618,
    "english": "crash",
    "turkish": "kaza, çarpmak",
    "sentence": "Fortunately, no one was seriously injured in the car crash."
  },
  {
    "id": 619,
    "english": "crazy",
    "turkish": "çılgın, deli",
    "sentence": "It's crazy how quickly time flies when you're having fun."
  },
  {
    "id": 620,
    "english": "cream",
    "turkish": "krem, kaymak",
    "sentence": "Would you like some cream in your coffee?"
  },
  {
    "id": 621,
    "english": "create",
    "turkish": "yaratmak, oluşturmak",
    "sentence": "Artists use their imagination to create beautiful works of art."
  },
  {
    "id": 622,
    "english": "creation",
    "turkish": "yaratılış, eser",
    "sentence": "The sculpture was a magnificent creation by a famous artist."
  },
  {
    "id": 623,
    "english": "creative",
    "turkish": "yaratıcı",
    "sentence": "She's a very creative person and always comes up with new ideas."
  },
  {
    "id": 624,
    "english": "creature",
    "turkish": "yaratık, canlı",
    "sentence": "The documentary showed many fascinating creatures living in the deep sea."
  },
  {
    "id": 625,
    "english": "credit",
    "turkish": "kredi, itibar",
    "sentence": "It's important to have good credit if you want to borrow money."
  },
  {
    "id": 626,
    "english": "crew",
    "turkish": "mürettebat, ekip",
    "sentence": "The airline crew was very helpful during the long flight."
  },
  {
    "id": 627,
    "english": "crime",
    "turkish": "suç",
    "sentence": "The police are investigating a serious crime that happened last night."
  },
  {
    "id": 628,
    "english": "criminal",
    "turkish": "suçlu, cezai",
    "sentence": "The police caught the criminal responsible for the robbery."
  },
  {
    "id": 629,
    "english": "crisis",
    "turkish": "kriz",
    "sentence": "The company is facing a financial crisis due to declining sales."
  },
  {
    "id": 630,
    "english": "criterion",
    "turkish": "kriter",
    "sentence": "What are the main criteria for evaluating a good research paper?"
  },
  {
    "id": 631,
    "english": "critic",
    "turkish": "eleştirmen",
    "sentence": "A famous film critic praised the director's latest movie."
  },
  {
    "id": 632,
    "english": "critical",
    "turkish": "kritik, eleştirel",
    "sentence": "It's critical to act quickly in an emergency situation."
  },
  {
    "id": 633,
    "english": "criticism",
    "turkish": "eleştiri",
    "sentence": "He received a lot of criticism for his controversial statements."
  },
  {
    "id": 634,
    "english": "criticize",
    "turkish": "eleştirmek",
    "sentence": "It's easy to criticize others, but harder to offer constructive solutions."
  },
  {
    "id": 635,
    "english": "crop",
    "turkish": "mahsul, kırpmak",
    "sentence": "Farmers are hoping for a good crop of wheat this year."
  },
  {
    "id": 636,
    "english": "cross",
    "turkish": "geçmek, haç",
    "sentence": "Be careful when you cross the busy street."
  },
  {
    "id": 637,
    "english": "crowd",
    "turkish": "kalabalık, doldurmak",
    "sentence": "A large crowd gathered to watch the street performance."
  },
  {
    "id": 638,
    "english": "crowded",
    "turkish": "kalabalık",
    "sentence": "The train was very crowded during rush hour."
  },
  {
    "id": 639,
    "english": "crucial",
    "turkish": "çok önemli, hayati",
    "sentence": "Good communication is crucial for a successful team project."
  },
  {
    "id": 640,
    "english": "cruel",
    "turkish": "zalim, acımasız",
    "sentence": "It was cruel of them to leave the kitten alone in the rain."
  },
  {
    "id": 641,
    "english": "cry",
    "turkish": "ağlamak, bağırmak",
    "sentence": "She started to cry when she heard the sad news."
  },
  {
    "id": 642,
    "english": "cultural",
    "turkish": "kültürel",
    "sentence": "The city offers a wide range of cultural activities, including museums and concerts."
  },
  {
    "id": 643,
    "english": "culture",
    "turkish": "kültür",
    "sentence": "Learning about different cultures helps us understand the world better."
  },
  {
    "id": 644,
    "english": "cup",
    "turkish": "fincan, kupa",
    "sentence": "I'd like a cup of tea, please."
  },
  {
    "id": 645,
    "english": "cupboard",
    "turkish": "dolap (mutfak dolabı, büfe)",
    "sentence": "You'll find the plates in the kitchen cupboard above the sink."
  },
  {
    "id": 646,
    "english": "cure",
    "turkish": "tedavi etmek, çare",
    "sentence": "Scientists are working hard to find a cure for cancer."
  },
  {
    "id": 647,
    "english": "curly",
    "turkish": "kıvırcık",
    "sentence": "She has beautiful long curly hair."
  },
  {
    "id": 648,
    "english": "currency",
    "turkish": "para birimi",
    "sentence": "The local currency in Japan is the Japanese Yen."
  },
  {
    "id": 649,
    "english": "current",
    "turkish": "mevcut, güncel, akım",
    "sentence": "What's your current address and phone number?"
  },
  {
    "id": 650,
    "english": "currently",
    "turkish": "şu anda",
    "sentence": "Currently, the company is focusing on expanding its digital marketing reach."
  },
  {
    "id": 651,
    "english": "curtain",
    "turkish": "perde",
    "sentence": "She drew the curtain to prevent the sunlight from hitting her computer screen."
  },
  {
    "id": 652,
    "english": "curve",
    "turkish": "eğri, kavis",
    "sentence": "The driver had to slow down significantly before the sharp curve in the road."
  },
  {
    "id": 653,
    "english": "curved",
    "turkish": "kavisli",
    "sentence": "The modern building features a curved glass facade that reflects the city skyline."
  },
  {
    "id": 654,
    "english": "custom",
    "turkish": "gelenek, adet",
    "sentence": "It is a local custom to bring a small gift when visiting someone's home for dinner."
  },
  {
    "id": 655,
    "english": "customer",
    "turkish": "müşteri",
    "sentence": "The shop assistant was very helpful when the customer asked for a different size."
  },
  {
    "id": 656,
    "english": "cut",
    "turkish": "kesmek",
    "sentence": "The company decided to cut production costs by implementing more efficient technology."
  },
  {
    "id": 657,
    "english": "cycle",
    "turkish": "döngü, bisiklet sürmek",
    "sentence": "The water cycle describes how water evaporates and falls back to the earth as rain."
  },
  {
    "id": 658,
    "english": "dad",
    "turkish": "baba",
    "sentence": "My dad taught me how to change a tire when I started learning to drive."
  },
  {
    "id": 659,
    "english": "daily",
    "turkish": "günlük",
    "sentence": "Reading the news has become a daily habit for many people around the world."
  },
  {
    "id": 660,
    "english": "damage",
    "turkish": "hasar, zarar",
    "sentence": "The heavy storm caused severe damage to several houses along the coast."
  },
  {
    "id": 661,
    "english": "dance",
    "turkish": "dans etmek",
    "sentence": "They practiced for weeks so they could dance perfectly at their wedding reception."
  },
  {
    "id": 662,
    "english": "dancer",
    "turkish": "dansçı",
    "sentence": "He has been a professional ballet dancer for over ten years now."
  },
  {
    "id": 663,
    "english": "dancing",
    "turkish": "dans",
    "sentence": "Dancing is not only fun but also a great way to stay physically fit."
  },
  {
    "id": 664,
    "english": "danger",
    "turkish": "tehlike",
    "sentence": "The signs near the cliff edge warn visitors about the danger of falling."
  },
  {
    "id": 665,
    "english": "dangerous",
    "turkish": "tehlikeli",
    "sentence": "It is dangerous to walk alone in this part of the city late at night."
  },
  {
    "id": 666,
    "english": "dark",
    "turkish": "karanlık",
    "sentence": "The room was so dark that I had to feel my way toward the light switch."
  },
  {
    "id": 667,
    "english": "data",
    "turkish": "veri",
    "sentence": "The researchers spent months analyzing the data before publishing their results."
  },
  {
    "id": 668,
    "english": "date",
    "turkish": "tarih, randevu",
    "sentence": "We need to set a date for the next board meeting as soon as possible."
  },
  {
    "id": 669,
    "english": "daughter",
    "turkish": "kız evlat",
    "sentence": "Their daughter recently graduated from university with a degree in architecture."
  },
  {
    "id": 670,
    "english": "day",
    "turkish": "gün",
    "sentence": "It was a very productive day, and we managed to finish the entire project."
  },
  {
    "id": 671,
    "english": "dead",
    "turkish": "ölü",
    "sentence": "I forgot to charge my phone last night, so now the battery is completely dead."
  },
  {
    "id": 672,
    "english": "deal",
    "turkish": "anlaşma, uğraşmak",
    "sentence": "The two managers managed to reach a deal that benefited both departments."
  },
  {
    "id": 673,
    "english": "dear",
    "turkish": "sevgili, değerli",
    "sentence": "She wrote a long letter to her dear friend who moved to another country."
  },
  {
    "id": 674,
    "english": "death",
    "turkish": "ölüm",
    "sentence": "The sudden death of the famous actor shocked fans all over the world."
  },
  {
    "id": 675,
    "english": "debate",
    "turkish": "tartışma",
    "sentence": "There is a lot of public debate about the impact of social media on teenagers."
  },
  {
    "id": 676,
    "english": "debt",
    "turkish": "borç",
    "sentence": "He had to work two jobs for several years to finally pay off his student debt."
  },
  {
    "id": 677,
    "english": "decade",
    "turkish": "on yıl",
    "sentence": "The city has seen incredible growth and development over the last decade."
  },
  {
    "id": 678,
    "english": "decent",
    "turkish": "düzgün, uygun",
    "sentence": "It is difficult to find a decent apartment in this neighborhood for a reasonable price."
  },
  {
    "id": 679,
    "english": "decide",
    "turkish": "karar vermek",
    "sentence": "You need to decide which course of action is best for your professional future."
  },
  {
    "id": 680,
    "english": "decision",
    "turkish": "karar",
    "sentence": "The management team's decision to hire more staff was welcomed by everyone."
  },
  {
    "id": 681,
    "english": "declare",
    "turkish": "ilan etmek, beyan etmek",
    "sentence": "The government declared a state of emergency after the earthquake hit the region."
  },
  {
    "id": 682,
    "english": "decline",
    "turkish": "reddetmek, azalmak",
    "sentence": "Unfortunately, the local economy began to decline after the main factory closed down."
  },
  {
    "id": 683,
    "english": "decorate",
    "turkish": "dekore etmek",
    "sentence": "They plan to decorate the living room with some new paintings and plants."
  },
  {
    "id": 684,
    "english": "decoration",
    "turkish": "dekorasyon",
    "sentence": "The colorful decorations made the office look much more inviting for the holiday party."
  },
  {
    "id": 685,
    "english": "decrease",
    "turkish": "azalmak, azaltmak",
    "sentence": "The goal of the new law is to decrease the amount of plastic waste in the ocean."
  },
  {
    "id": 686,
    "english": "deep",
    "turkish": "derin",
    "sentence": "The divers were exploring the deep waters of the ocean to find new species."
  },
  {
    "id": 687,
    "english": "deeply",
    "turkish": "derinden",
    "sentence": "The loss of his grandfather affected him deeply for a very long time."
  },
  {
    "id": 688,
    "english": "defeat",
    "turkish": "yenilgi, yenmek",
    "sentence": "The team accepted their defeat gracefully and promised to work harder next season."
  },
  {
    "id": 689,
    "english": "defend",
    "turkish": "savunmak",
    "sentence": "A lawyer was appointed to defend the man during the trial."
  },
  {
    "id": 690,
    "english": "defense",
    "turkish": "savunma",
    "sentence": "The city's defense systems were upgraded to protect against cyber attacks."
  },
  {
    "id": 691,
    "english": "define",
    "turkish": "tanımlamak",
    "sentence": "It is often hard to define what makes a piece of art truly great."
  },
  {
    "id": 692,
    "english": "definite",
    "turkish": "kesin",
    "sentence": "We haven't made a definite plan yet, but we are thinking of going to Italy."
  },
  {
    "id": 693,
    "english": "definitely",
    "turkish": "kesinlikle",
    "sentence": "If you are in London, you should definitely visit the British Museum."
  },
  {
    "id": 694,
    "english": "definition",
    "turkish": "tanım",
    "sentence": "The dictionary provides a clear definition for each technical term used in the book."
  },
  {
    "id": 695,
    "english": "degree",
    "turkish": "derece, diploma",
    "sentence": "She is working hard to finish her master's degree in psychology."
  },
  {
    "id": 696,
    "english": "delay",
    "turkish": "gecikme, geciktirmek",
    "sentence": "The flight was delayed for three hours due to heavy fog at the airport."
  },
  {
    "id": 697,
    "english": "deliberate",
    "turkish": "kasti, bilinçli",
    "sentence": "The lawyer argued that the damage was a deliberate act and not an accident."
  },
  {
    "id": 698,
    "english": "deliberately",
    "turkish": "kasten",
    "sentence": "He deliberately arrived late to the meeting to avoid speaking with the director."
  },
  {
    "id": 699,
    "english": "delicious",
    "turkish": "lezzetli",
    "sentence": "The chef prepared a delicious three-course meal for all the guests."
  },
  {
    "id": 700,
    "english": "deliver",
    "turkish": "teslim etmek",
    "sentence": "The courier will deliver the package to your office by noon tomorrow."
  },
  {
    "id": 701,
    "english": "delivery",
    "turkish": "teslimat",
    "sentence": "The store offers free delivery on all online orders over fifty dollars."
  },
  {
    "id": 702,
    "english": "demand",
    "turkish": "talep etmek",
    "sentence": "There is a growing demand for renewable energy sources in the global market."
  },
  {
    "id": 703,
    "english": "demonstrate",
    "turkish": "kanıtlamak / göstermek",
    "sentence": "The trainer will demonstrate how to use the new fitness equipment safely."
  },
  {
    "id": 704,
    "english": "dentist",
    "turkish": "diş hekimi",
    "sentence": "I have an appointment with my dentist for a routine check-up next week."
  },
  {
    "id": 705,
    "english": "deny",
    "turkish": "inkar etmek / reddetmek",
    "sentence": "The politician continued to deny the accusations despite the evidence."
  },
  {
    "id": 706,
    "english": "department",
    "turkish": "departman / bölüm",
    "sentence": "She was recently promoted to head of the human resources department."
  },
  {
    "id": 707,
    "english": "departure",
    "turkish": "kalkış / ayrılış",
    "sentence": "Passengers should arrive at the airport two hours before their scheduled departure."
  },
  {
    "id": 708,
    "english": "depend",
    "turkish": "bağlı olmak",
    "sentence": "The success of the outdoor event will depend on the weather conditions."
  },
  {
    "id": 709,
    "english": "depressed",
    "turkish": "depresif / morali bozuk",
    "sentence": "He felt quite depressed after his business failed unexpectedly last year."
  },
  {
    "id": 710,
    "english": "depressing",
    "turkish": "iç karartıcı",
    "sentence": "Watching the news can sometimes be a very depressing experience."
  },
  {
    "id": 711,
    "english": "depth",
    "turkish": "derinlik",
    "sentence": "Divers explored the depth of the ocean to find new marine species."
  },
  {
    "id": 712,
    "english": "describe",
    "turkish": "tanımlamak / betimlemek",
    "sentence": "Can you describe the suspect you saw near the bank yesterday?"
  },
  {
    "id": 713,
    "english": "description",
    "turkish": "tanım / betimleme",
    "sentence": "The witness provided a detailed description of the vehicle involved in the accident."
  },
  {
    "id": 714,
    "english": "desert",
    "turkish": "çöl",
    "sentence": "It is very dangerous to travel across the desert without enough water supplies."
  },
  {
    "id": 715,
    "english": "deserve",
    "turkish": "hak etmek",
    "sentence": "You have worked very hard this year and you truly deserve a promotion."
  },
  {
    "id": 716,
    "english": "design",
    "turkish": "tasarlamak / tasarım",
    "sentence": "The company is planning to design a more user-friendly mobile application."
  },
  {
    "id": 717,
    "english": "designer",
    "turkish": "tasarımcı",
    "sentence": "He is a famous graphic designer who works for top advertising agencies."
  },
  {
    "id": 718,
    "english": "desire",
    "turkish": "arzu etmek / istek",
    "sentence": "Her strongest desire was to travel the world and learn about different cultures."
  },
  {
    "id": 719,
    "english": "desk",
    "turkish": "çalışma masası / sıra",
    "sentence": "I left my car keys on my desk before I went to the meeting room."
  },
  {
    "id": 720,
    "english": "desperate",
    "turkish": "çaresiz / umutsuz",
    "sentence": "The family was in a desperate situation after losing their home in the flood."
  },
  {
    "id": 721,
    "english": "despite",
    "turkish": "-e rağmen",
    "sentence": "Despite the heavy rain, the football match was not canceled."
  },
  {
    "id": 722,
    "english": "dessert",
    "turkish": "tatlı",
    "sentence": "We were so full after the main course that we decided to skip the dessert."
  },
  {
    "id": 723,
    "english": "destination",
    "turkish": "varış noktası",
    "sentence": "Paris is a very popular destination for travelers looking for a romantic holiday."
  },
  {
    "id": 724,
    "english": "destroy",
    "turkish": "yok etmek / tahrip etmek",
    "sentence": "The earthquake managed to destroy several historical buildings in the city center."
  },
  {
    "id": 725,
    "english": "detail",
    "turkish": "detay / ayrıntı",
    "sentence": "The manager went into great detail about the new company policy."
  },
  {
    "id": 726,
    "english": "detailed",
    "turkish": "detaylı",
    "sentence": "The architect presented a detailed plan for the construction of the new office."
  },
  {
    "id": 727,
    "english": "detect",
    "turkish": "tespit etmek / algılamak",
    "sentence": "These sensors are designed to detect even small amounts of smoke in the building."
  },
  {
    "id": 728,
    "english": "detective",
    "turkish": "dedektif",
    "sentence": "The detective spent months trying to solve the mysterious disappearance case."
  },
  {
    "id": 729,
    "english": "determine",
    "turkish": "belirlemek / saptamak",
    "sentence": "Scientists are trying to determine the exact cause of the climate change."
  },
  {
    "id": 730,
    "english": "determined",
    "turkish": "kararlı",
    "sentence": "She is determined to pass her final exams and graduate with honors."
  },
  {
    "id": 731,
    "english": "develop",
    "turkish": "geliştirmek",
    "sentence": "It takes a lot of time and effort to develop a successful business strategy."
  },
  {
    "id": 732,
    "english": "development",
    "turkish": "gelişim / gelişme",
    "sentence": "The rapid development of technology has changed our daily lives significantly."
  },
  {
    "id": 733,
    "english": "device",
    "turkish": "cihaz",
    "sentence": "This electronic device helps you track your daily physical activity and heart rate."
  },
  {
    "id": 734,
    "english": "diagram",
    "turkish": "diyagram / şema",
    "sentence": "The manual includes a diagram showing how to assemble the furniture."
  },
  {
    "id": 735,
    "english": "dialogue",
    "turkish": "diyalog",
    "sentence": "It is important to maintain an open dialogue between management and employees."
  },
  {
    "id": 736,
    "english": "diamond",
    "turkish": "elmas",
    "sentence": "He bought a beautiful diamond ring for their tenth wedding anniversary."
  },
  {
    "id": 737,
    "english": "diary",
    "turkish": "günlük",
    "sentence": "She writes her thoughts and feelings in her diary every night before bed."
  },
  {
    "id": 738,
    "english": "dictionary",
    "turkish": "sözlük",
    "sentence": "You should use a dictionary to look up any words you don't understand."
  },
  {
    "id": 739,
    "english": "die",
    "turkish": "ölmek",
    "sentence": "Many plants will die if they are not watered regularly during the summer."
  },
  {
    "id": 740,
    "english": "diet",
    "turkish": "diyet",
    "sentence": "A healthy diet should include plenty of fresh fruits and vegetables."
  },
  {
    "id": 741,
    "english": "difference",
    "turkish": "fark",
    "sentence": "There is a big difference between talking about a goal and actually achieving it."
  },
  {
    "id": 742,
    "english": "different",
    "turkish": "farklı",
    "sentence": "We decided to take a different route to work to avoid the heavy traffic."
  },
  {
    "id": 743,
    "english": "differently",
    "turkish": "farklı bir şekilde",
    "sentence": "You might see things differently once you hear her side of the story."
  },
  {
    "id": 744,
    "english": "difficult",
    "turkish": "zor",
    "sentence": "It can be difficult to balance a full-time job with university studies."
  },
  {
    "id": 745,
    "english": "difficulty",
    "turkish": "zorluk",
    "sentence": "Many students have difficulty understanding complex mathematical concepts."
  },
  {
    "id": 746,
    "english": "dig",
    "turkish": "kazmak",
    "sentence": "The workers had to dig a deep hole to repair the broken water pipe."
  },
  {
    "id": 747,
    "english": "digital",
    "turkish": "dijital",
    "sentence": "Digital marketing has become much more effective than traditional advertising."
  },
  {
    "id": 748,
    "english": "dinner",
    "turkish": "akşam yemeği",
    "sentence": "We are going to have a formal dinner to celebrate our team's success."
  },
  {
    "id": 749,
    "english": "direct",
    "turkish": "doğrudan / yöneltmek",
    "sentence": "The manager will direct the new employees toward the correct resources."
  },
  {
    "id": 750,
    "english": "direction",
    "turkish": "yön",
    "sentence": "The driver asked for the correct direction to the nearest hospital."
  },
  {
    "id": 751,
    "english": "directly",
    "turkish": "doğrudan",
    "sentence": "If you have any questions, please contact the manager directly."
  },
  {
    "id": 752,
    "english": "director",
    "turkish": "yönetmen",
    "sentence": "The creative director decided to change the entire marketing strategy."
  },
  {
    "id": 753,
    "english": "dirt",
    "turkish": "kir",
    "sentence": "After the long hike, his boots were completely covered in dirt."
  },
  {
    "id": 754,
    "english": "dirty",
    "turkish": "kirli",
    "sentence": "It is important to wash your hands after handling dirty objects."
  },
  {
    "id": 755,
    "english": "disadvantage",
    "turkish": "dezavantaj",
    "sentence": "One major disadvantage of living in a big city is the high cost of rent."
  },
  {
    "id": 756,
    "english": "disagree",
    "turkish": "aynı fikirde olmamak",
    "sentence": "We often disagree on political issues, but we remain good friends."
  },
  {
    "id": 757,
    "english": "disappear",
    "turkish": "gözden kaybolmak",
    "sentence": "The sun started to disappear behind the mountains as evening approached."
  },
  {
    "id": 758,
    "english": "disappointed",
    "turkish": "hayal kırıklığına uğramış",
    "sentence": "She was disappointed with the test results despite her hard work."
  },
  {
    "id": 759,
    "english": "disappointing",
    "turkish": "hayal kırıklığı yaratan",
    "sentence": "The final episode of the series was quite disappointing for the fans."
  },
  {
    "id": 760,
    "english": "disaster",
    "turkish": "felaket",
    "sentence": "The heavy earthquake was a major disaster for the local community."
  },
  {
    "id": 761,
    "english": "discipline",
    "turkish": "disiplin",
    "sentence": "Success in professional sports requires a high level of self-discipline."
  },
  {
    "id": 762,
    "english": "discount",
    "turkish": "indirim",
    "sentence": "Students are eligible for a ten percent discount on all textbooks."
  },
  {
    "id": 763,
    "english": "discover",
    "turkish": "keşfetmek",
    "sentence": "Scientists hope to discover new evidence of life on other planets."
  },
  {
    "id": 764,
    "english": "discovery",
    "turkish": "keşif",
    "sentence": "The discovery of penicillin changed the course of medical history."
  },
  {
    "id": 765,
    "english": "discuss",
    "turkish": "tartışmak",
    "sentence": "We need to meet tomorrow to discuss the details of the new project."
  },
  {
    "id": 766,
    "english": "discussion",
    "turkish": "tartışma",
    "sentence": "There was a long discussion about the environmental impact of the factory."
  },
  {
    "id": 767,
    "english": "disease",
    "turkish": "hastalık",
    "sentence": "Regular exercise can help reduce the risk of developing heart disease."
  },
  {
    "id": 768,
    "english": "dish",
    "turkish": "yemek",
    "sentence": "This traditional pasta dish is very popular in the southern part of Italy."
  },
  {
    "id": 769,
    "english": "dishonest",
    "turkish": "dürüst olmayan",
    "sentence": "It is dishonest to take credit for work that someone else has done."
  },
  {
    "id": 770,
    "english": "disk",
    "turkish": "disk",
    "sentence": "Please make sure you have enough space on your hard disk before installing the software."
  },
  {
    "id": 771,
    "english": "dislike",
    "turkish": "hoşlanmamak",
    "sentence": "Many people dislike commuting to work during the rush hour."
  },
  {
    "id": 772,
    "english": "dismiss",
    "turkish": "kovmak",
    "sentence": "The manager decided to dismiss the employee for repeated tardiness."
  },
  {
    "id": 773,
    "english": "display",
    "turkish": "sergilemek",
    "sentence": "The museum will display a collection of ancient artifacts next month."
  },
  {
    "id": 774,
    "english": "distance",
    "turkish": "mesafe",
    "sentence": "Modern technology allows us to communicate over long distances instantly."
  },
  {
    "id": 775,
    "english": "distribute",
    "turkish": "dağıtmak",
    "sentence": "The charity plans to distribute food and water to the refugees."
  },
  {
    "id": 776,
    "english": "distribution",
    "turkish": "dağıtım",
    "sentence": "The unequal distribution of wealth remains a global challenge."
  },
  {
    "id": 777,
    "english": "district",
    "turkish": "bölge",
    "sentence": "The financial district of the city is always busy during weekdays."
  },
  {
    "id": 778,
    "english": "divide",
    "turkish": "bölmek",
    "sentence": "The teacher asked the students to divide themselves into small groups."
  },
  {
    "id": 779,
    "english": "division",
    "turkish": "bölüm",
    "sentence": "He works in the sales division of a large multinational corporation."
  },
  {
    "id": 780,
    "english": "divorced",
    "turkish": "boşanmış",
    "sentence": "After being married for ten years, they decided to get divorced."
  },
  {
    "id": 781,
    "english": "doctor",
    "turkish": "doktor",
    "sentence": "You should consult a doctor if your symptoms do not improve within two days."
  },
  {
    "id": 782,
    "english": "document",
    "turkish": "belge",
    "sentence": "Please sign the document and return it to the human resources office."
  },
  {
    "id": 783,
    "english": "documentary",
    "turkish": "belgesel",
    "sentence": "I watched a fascinating documentary about the effects of climate change."
  },
  {
    "id": 784,
    "english": "dog",
    "turkish": "köpek",
    "sentence": "Having a dog can provide companionship and improve your mental health."
  },
  {
    "id": 785,
    "english": "dollar",
    "turkish": "dolar",
    "sentence": "The exchange rate for the US dollar has fluctuated significantly this week."
  },
  {
    "id": 786,
    "english": "domestic",
    "turkish": "yurt içi",
    "sentence": "The government is focusing on domestic issues such as education and healthcare."
  },
  {
    "id": 787,
    "english": "dominate",
    "turkish": "hükmetmek",
    "sentence": "Larger companies often dominate the market and limit competition."
  },
  {
    "id": 788,
    "english": "donate",
    "turkish": "bağışlamak",
    "sentence": "Many wealthy individuals choose to donate a portion of their income to charity."
  },
  {
    "id": 789,
    "english": "door",
    "turkish": "kapı",
    "sentence": "Please remember to lock the front door before you leave the house."
  },
  {
    "id": 790,
    "english": "double",
    "turkish": "çift",
    "sentence": "The company aims to double its profits by the end of the next fiscal year."
  },
  {
    "id": 791,
    "english": "doubt",
    "turkish": "şüphe",
    "sentence": "There is no doubt that technology has changed the way we interact."
  },
  {
    "id": 792,
    "english": "down",
    "turkish": "aşağı",
    "sentence": "Prices have gone down significantly since the end of the holiday season."
  },
  {
    "id": 793,
    "english": "download",
    "turkish": "indirmek",
    "sentence": "You can download the mobile application for free from the app store."
  },
  {
    "id": 794,
    "english": "downstairs",
    "turkish": "alt kat",
    "sentence": "My office is located downstairs, right next to the cafeteria."
  },
  {
    "id": 795,
    "english": "downtown",
    "turkish": "şehir merkezi",
    "sentence": "We decided to go downtown to visit the new art gallery."
  },
  {
    "id": 796,
    "english": "downward",
    "turkish": "aşağıya doğru",
    "sentence": "There has been a downward trend in the stock market over the past month."
  },
  {
    "id": 797,
    "english": "dozen",
    "turkish": "düzine",
    "sentence": "He bought a dozen eggs and some milk from the local grocery store."
  },
  {
    "id": 798,
    "english": "draft",
    "turkish": "taslak",
    "sentence": "I need to write a first draft of my essay before the weekend."
  },
  {
    "id": 799,
    "english": "drag",
    "turkish": "sürüklemek",
    "sentence": "You can simply drag and drop the files into the new folder."
  },
  {
    "id": 800,
    "english": "drama",
    "turkish": "drama, tiyatro",
    "sentence": "The television series is a historical drama based on the life of a famous queen."
  },
  {
    "id": 801,
    "english": "dramatic",
    "turkish": "çarpıcı, dramatik",
    "sentence": "There has been a dramatic increase in sales since the new marketing campaign started."
  },
  {
    "id": 802,
    "english": "draw",
    "turkish": "çizmek",
    "sentence": "The architect began to draw the initial sketches for the new office building."
  },
  {
    "id": 803,
    "english": "drawing",
    "turkish": "çizim, resim",
    "sentence": "She keeps all her pencil drawings in a professional portfolio to show clients."
  },
  {
    "id": 804,
    "english": "dream",
    "turkish": "rüya, hayal",
    "sentence": "His lifelong dream was to travel around the world after retiring from his job."
  },
  {
    "id": 805,
    "english": "dress",
    "turkish": "elbise, giyinmek",
    "sentence": "Most employees choose to dress professionally when they have meetings with the board."
  },
  {
    "id": 806,
    "english": "dressed",
    "turkish": "giyinmiş",
    "sentence": "He was well dressed for the interview, wearing a charcoal suit and a silk tie."
  },
  {
    "id": 807,
    "english": "drink",
    "turkish": "içmek, içecek",
    "sentence": "It is important to drink plenty of water throughout the day to stay hydrated."
  },
  {
    "id": 808,
    "english": "drive",
    "turkish": "sürmek",
    "sentence": "It takes about forty minutes to drive from the city center to the airport."
  },
  {
    "id": 809,
    "english": "driver",
    "turkish": "şoför, sürücü",
    "sentence": "The delivery driver arrived at the warehouse early this morning to pick up the packages."
  },
  {
    "id": 810,
    "english": "driving",
    "turkish": "sürüş, araba kullanma",
    "sentence": "Driving in heavy snow can be very dangerous if you don't have the right tires."
  },
  {
    "id": 811,
    "english": "drop",
    "turkish": "düşürmek, bırakmak",
    "sentence": "Please be careful not to drop the fragile glass ornaments while moving them."
  },
  {
    "id": 812,
    "english": "drug",
    "turkish": "ilaç, uyuşturucu",
    "sentence": "Scientists are working hard to develop a new drug that can treat this rare disease."
  },
  {
    "id": 813,
    "english": "drum",
    "turkish": "davul, bateri",
    "sentence": "He has been practicing the drum every evening to prepare for the upcoming concert."
  },
  {
    "id": 814,
    "english": "drunk",
    "turkish": "sarhoş",
    "sentence": "It is illegal and extremely dangerous to operate a vehicle while drunk."
  },
  {
    "id": 815,
    "english": "dry",
    "turkish": "kuru, kurutmak",
    "sentence": "The climate in this region is very dry, so farmers often have to use irrigation systems."
  },
  {
    "id": 816,
    "english": "due",
    "turkish": "beklenen, vadesi gelen",
    "sentence": "The final project report is due on Friday by five o'clock in the afternoon."
  },
  {
    "id": 817,
    "english": "during",
    "turkish": "boyunca, sırasında",
    "sentence": "Many people prefer to go for a walk in the park during their lunch break."
  },
  {
    "id": 818,
    "english": "dust",
    "turkish": "toz",
    "sentence": "There was a thin layer of dust on the old bookshelves in the library."
  },
  {
    "id": 819,
    "english": "duty",
    "turkish": "görev, sorumluluk",
    "sentence": "It is the manager's duty to ensure that all safety protocols are followed strictly."
  },
  {
    "id": 820,
    "english": "ear",
    "turkish": "kulak",
    "sentence": "The musician has a very good ear for melodies and can play songs after hearing them once."
  },
  {
    "id": 821,
    "english": "early",
    "turkish": "erken",
    "sentence": "Waking up early allows her to exercise and meditate before starting her work day."
  },
  {
    "id": 822,
    "english": "earn",
    "turkish": "kazanmak",
    "sentence": "She works two jobs so that she can earn enough money to buy her own apartment."
  },
  {
    "id": 823,
    "english": "earth",
    "turkish": "dünya, yeryüzü",
    "sentence": "Satellite images show how human activity is changing the surface of the earth."
  },
  {
    "id": 824,
    "english": "earthquake",
    "turkish": "deprem",
    "sentence": "The local government is building new shelters in case of a major earthquake."
  },
  {
    "id": 825,
    "english": "easily",
    "turkish": "kolayca",
    "sentence": "With the new software update, users can now navigate the menu more easily."
  },
  {
    "id": 826,
    "english": "east",
    "turkish": "doğu",
    "sentence": "The sunrise over the mountains in the east was truly spectacular this morning."
  },
  {
    "id": 827,
    "english": "eastern",
    "turkish": "doğuya özgü",
    "sentence": "They spent their summer vacation exploring the beautiful coastline of eastern Europe."
  },
  {
    "id": 828,
    "english": "easy",
    "turkish": "kolay",
    "sentence": "It is not easy to learn a new language fluently without regular practice."
  },
  {
    "id": 829,
    "english": "eat",
    "turkish": "yemek yemek",
    "sentence": "Experts recommend that you should eat a balanced diet to maintain your health."
  },
  {
    "id": 830,
    "english": "economic",
    "turkish": "ekonomik",
    "sentence": "The country is facing several economic challenges due to the recent global crisis."
  },
  {
    "id": 831,
    "english": "economy",
    "turkish": "ekonomi",
    "sentence": "Tourism plays a vital role in the national economy, providing jobs for many citizens."
  },
  {
    "id": 832,
    "english": "edge",
    "turkish": "kenar, uç",
    "sentence": "He sat on the edge of the bed and thought deeply about his future career."
  },
  {
    "id": 833,
    "english": "edit",
    "turkish": "düzenlemek",
    "sentence": "You need to carefully edit your essay to remove any grammatical errors before submitting it."
  },
  {
    "id": 834,
    "english": "edition",
    "turkish": "baskı, yayın",
    "sentence": "The revised edition of the textbook includes three new chapters on modern technology."
  },
  {
    "id": 835,
    "english": "editor",
    "turkish": "editör",
    "sentence": "The newspaper editor decided to put the story about the local charity on the front page."
  },
  {
    "id": 836,
    "english": "educate",
    "turkish": "eğitmek",
    "sentence": "Schools aim to educate children not only in academics but also in social responsibility."
  },
  {
    "id": 837,
    "english": "educated",
    "turkish": "eğitimli",
    "sentence": "He is a highly educated person with degrees from several prestigious universities."
  },
  {
    "id": 838,
    "english": "education",
    "turkish": "eğitim",
    "sentence": "Investing in quality education is essential for the long-term development of any society."
  },
  {
    "id": 839,
    "english": "educational",
    "turkish": "eğitici, eğitimsel",
    "sentence": "The museum offers many educational programs for students of all ages."
  },
  {
    "id": 840,
    "english": "effect",
    "turkish": "etki",
    "sentence": "The new law had an immediate effect on the reduction of air pollution in the city."
  },
  {
    "id": 841,
    "english": "effective",
    "turkish": "etkili",
    "sentence": "Time management is an effective way to increase productivity and reduce stress at work."
  },
  {
    "id": 842,
    "english": "effectively",
    "turkish": "etkili bir şekilde",
    "sentence": "The manager communicated the goals effectively, so every team member knew their role."
  },
  {
    "id": 843,
    "english": "efficient",
    "turkish": "verimli",
    "sentence": "Solar panels provide an efficient way to generate clean energy for modern homes."
  },
  {
    "id": 844,
    "english": "effort",
    "turkish": "çaba, gayret",
    "sentence": "Achieving success requires a great deal of effort, patience, and determination."
  },
  {
    "id": 845,
    "english": "egg",
    "turkish": "yumurta",
    "sentence": "For breakfast, she usually has a boiled egg and some fresh fruit."
  },
  {
    "id": 846,
    "english": "elderly",
    "turkish": "yaşlı",
    "sentence": "It is important to show respect and provide support to the elderly members of our community."
  },
  {
    "id": 847,
    "english": "elect",
    "turkish": "seçmek",
    "sentence": "The citizens will go to the polls next month to elect their new mayor."
  },
  {
    "id": 848,
    "english": "election",
    "turkish": "seçim",
    "sentence": "The results of the general election were announced live on all major news channels."
  },
  {
    "id": 849,
    "english": "electric",
    "turkish": "elektrikli",
    "sentence": "More people are switching to electric cars to reduce their carbon footprint."
  },
  {
    "id": 850,
    "english": "electrical",
    "turkish": "elektrikli",
    "sentence": "The technician arrived to repair the electrical wiring in the office building."
  },
  {
    "id": 851,
    "english": "electricity",
    "turkish": "elektrik",
    "sentence": "Most European countries are trying to produce more electricity from renewable sources."
  },
  {
    "id": 852,
    "english": "electronic",
    "turkish": "elektronik",
    "sentence": "Many people prefer electronic books because they are easier to carry while traveling."
  },
  {
    "id": 853,
    "english": "element",
    "turkish": "unsur, öğe",
    "sentence": "Trust is a crucial element in building a successful long-term business partnership."
  },
  {
    "id": 854,
    "english": "elephant",
    "turkish": "fil",
    "sentence": "Elephants are known for their high level of intelligence and complex social structures."
  },
  {
    "id": 855,
    "english": "elevator",
    "turkish": "asansör",
    "sentence": "The office is on the twentieth floor, so we should definitely take the elevator."
  },
  {
    "id": 856,
    "english": "else",
    "turkish": "başka",
    "sentence": "If this strategy does not work, we will have to think of something else."
  },
  {
    "id": 857,
    "english": "elsewhere",
    "turkish": "başka yerde",
    "sentence": "If the product is not available here, we might find it elsewhere for a better price."
  },
  {
    "id": 858,
    "english": "email",
    "turkish": "e-posta",
    "sentence": "Please send me an email with the attached report by the end of the day."
  },
  {
    "id": 859,
    "english": "embarrassed",
    "turkish": "mahcup, utanmış",
    "sentence": "She felt embarrassed when she realized she had forgotten her colleague's name."
  },
  {
    "id": 860,
    "english": "embarrassing",
    "turkish": "utanç verici",
    "sentence": "It was an embarrassing moment when his phone started ringing during the quiet ceremony."
  },
  {
    "id": 861,
    "english": "emerge",
    "turkish": "ortaya çıkmak",
    "sentence": "New evidence began to emerge during the investigation of the financial scandal."
  },
  {
    "id": 862,
    "english": "emergency",
    "turkish": "acil durum",
    "sentence": "In case of an emergency, please use the stairs instead of the elevator to exit."
  },
  {
    "id": 863,
    "english": "emotion",
    "turkish": "duygu",
    "sentence": "The movie was so powerful that it stirred deep emotions in the entire audience."
  },
  {
    "id": 864,
    "english": "emotional",
    "turkish": "duygusal",
    "sentence": "The manager gave an emotional speech during the retirement party of the CEO."
  },
  {
    "id": 865,
    "english": "emphasis",
    "turkish": "vurgu",
    "sentence": "The course puts a strong emphasis on practical skills rather than just theory."
  },
  {
    "id": 866,
    "english": "emphasize",
    "turkish": "vurgulamak",
    "sentence": "The doctor emphasized the importance of regular exercise for a healthy heart."
  },
  {
    "id": 867,
    "english": "employ",
    "turkish": "işe almak, çalıştırmak",
    "sentence": "The company plans to employ more staff to handle the increasing workload."
  },
  {
    "id": 868,
    "english": "employee",
    "turkish": "çalışan",
    "sentence": "Every employee is required to attend the safety training session next week."
  },
  {
    "id": 869,
    "english": "employer",
    "turkish": "işveren",
    "sentence": "A good employer should provide a safe and supportive working environment for all."
  },
  {
    "id": 870,
    "english": "employment",
    "turkish": "istihdam, iş",
    "sentence": "The government is introducing new policies to increase youth employment in the city."
  },
  {
    "id": 871,
    "english": "empty",
    "turkish": "boş",
    "sentence": "The streets were completely empty on Sunday morning during the national holiday."
  },
  {
    "id": 872,
    "english": "enable",
    "turkish": "olanak sağlamak",
    "sentence": "This new software will enable us to complete our tasks much faster than before."
  },
  {
    "id": 873,
    "english": "encounter",
    "turkish": "karşılaşmak",
    "sentence": "We did not expect to encounter so many difficulties during the first phase of the project."
  },
  {
    "id": 874,
    "english": "encourage",
    "turkish": "teşvik etmek",
    "sentence": "Teachers should encourage their students to ask questions and think critically."
  },
  {
    "id": 875,
    "english": "end",
    "turkish": "son, bitirmek",
    "sentence": "The meeting is scheduled to end at five o'clock in the afternoon."
  },
  {
    "id": 876,
    "english": "ending",
    "turkish": "son",
    "sentence": "The novel had a very unexpected and dramatic ending that surprised the readers."
  },
  {
    "id": 877,
    "english": "enemy",
    "turkish": "düşman",
    "sentence": "In modern diplomacy, it is often better to have allies rather than enemies."
  },
  {
    "id": 878,
    "english": "energy",
    "turkish": "enerji",
    "sentence": "Investing in solar energy is essential for a sustainable future for the planet."
  },
  {
    "id": 879,
    "english": "engage",
    "turkish": "dahil olmak, meşgul olmak",
    "sentence": "It is important to engage in regular physical activity to stay healthy and fit."
  },
  {
    "id": 880,
    "english": "engaged",
    "turkish": "nişanlı, meşgul",
    "sentence": "They have been engaged for six months and plan to get married next summer."
  },
  {
    "id": 881,
    "english": "engine",
    "turkish": "motor",
    "sentence": "The pilot reported a problem with the aircraft's left engine shortly after takeoff."
  },
  {
    "id": 882,
    "english": "engineer",
    "turkish": "mühendis",
    "sentence": "She is a civil engineer who specializes in building sustainable bridges and tunnels."
  },
  {
    "id": 883,
    "english": "engineering",
    "turkish": "mühendislik",
    "sentence": "Advanced engineering techniques were used to design this modern skyscraper."
  },
  {
    "id": 884,
    "english": "enhance",
    "turkish": "geliştirmek, artırmak",
    "sentence": "The new features will significantly enhance the performance of the mobile application."
  },
  {
    "id": 885,
    "english": "enjoy",
    "turkish": "zevk almak, keyif almak",
    "sentence": "Many people enjoy spending their weekends hiking in the mountains away from the city."
  },
  {
    "id": 886,
    "english": "enormous",
    "turkish": "devasa, kocaman",
    "sentence": "The project required an enormous amount of time and financial resources to complete."
  },
  {
    "id": 887,
    "english": "ensure",
    "turkish": "sağlamak, garantiye almak",
    "sentence": "Please ensure that all the windows are closed before you leave the office."
  },
  {
    "id": 888,
    "english": "enter",
    "turkish": "girmek",
    "sentence": "You need a special pass to enter the restricted area of the laboratory."
  },
  {
    "id": 889,
    "english": "entertain",
    "turkish": "eğlendirmek",
    "sentence": "The host did his best to entertain the guests with music and stories from his travels."
  },
  {
    "id": 890,
    "english": "entertainment",
    "turkish": "eğlence",
    "sentence": "The city offers a wide variety of entertainment options, from theaters to concerts."
  },
  {
    "id": 891,
    "english": "enthusiasm",
    "turkish": "coşku, heves",
    "sentence": "The team showed great enthusiasm for the new marketing campaign they developed."
  },
  {
    "id": 892,
    "english": "enthusiastic",
    "turkish": "hevesli",
    "sentence": "He is very enthusiastic about his new job and works very hard every day."
  },
  {
    "id": 893,
    "english": "entire",
    "turkish": "tüm, bütün",
    "sentence": "The entire department was congratulated for their outstanding performance this year."
  },
  {
    "id": 894,
    "english": "entirely",
    "turkish": "tamamen",
    "sentence": "I am not entirely sure if we have enough budget to complete the renovation."
  },
  {
    "id": 895,
    "english": "entrance",
    "turkish": "giriş",
    "sentence": "The main entrance of the museum is located on the north side of the square."
  },
  {
    "id": 896,
    "english": "entry",
    "turkish": "giriş, girdi",
    "sentence": "The security guard checked every entry point to ensure the building was secure."
  },
  {
    "id": 897,
    "english": "environment",
    "turkish": "çevre",
    "sentence": "Protecting the natural environment is one of the biggest challenges of our century."
  },
  {
    "id": 898,
    "english": "environmental",
    "turkish": "çevresel",
    "sentence": "Climate change is a global environmental issue that requires immediate international action."
  },
  {
    "id": 899,
    "english": "episode",
    "turkish": "bölüm",
    "sentence": "The last episode of the television series was watched by millions of viewers worldwide."
  },
  {
    "id": 900,
    "english": "equal",
    "turkish": "eşit",
    "sentence": "All citizens should have equal rights and opportunities under the law."
  },
  {
    "id": 901,
    "english": "equally",
    "turkish": "eşit olarak",
    "sentence": ""
  },
  {
    "id": 902,
    "english": "equipment",
    "turkish": "ekipman",
    "sentence": "The laboratory is equipped with the latest scientific equipment for research."
  },
  {
    "id": 903,
    "english": "error",
    "turkish": "hata",
    "sentence": "The system crash was caused by a small programming error in the code."
  },
  {
    "id": 904,
    "english": "escape",
    "turkish": "kaçmak",
    "sentence": "Many people go to the mountains to escape the noise and stress of city life."
  },
  {
    "id": 905,
    "english": "especially",
    "turkish": "özellikle",
    "sentence": "I enjoy traveling to coastal cities, especially during the summer months."
  },
  {
    "id": 906,
    "english": "essay",
    "turkish": "deneme/makale",
    "sentence": "The students were asked to write a persuasive essay about renewable energy."
  },
  {
    "id": 907,
    "english": "essential",
    "turkish": "temel/gerekli",
    "sentence": "Good communication is essential for maintaining a healthy relationship."
  },
  {
    "id": 908,
    "english": "establish",
    "turkish": "kurmak",
    "sentence": "The company was established in 1990 and has grown significantly since then."
  },
  {
    "id": 909,
    "english": "estate",
    "turkish": "mülk/emlak",
    "sentence": "He decided to invest his savings in real estate by buying a small apartment."
  },
  {
    "id": 910,
    "english": "estimate",
    "turkish": "tahmin etmek",
    "sentence": "Experts estimate that the global economy will recover by the end of next year."
  },
  {
    "id": 911,
    "english": "ethical",
    "turkish": "etik/ahlaki",
    "sentence": "It is important for companies to consider the ethical implications of their decisions."
  },
  {
    "id": 912,
    "english": "euro",
    "turkish": "avro",
    "sentence": "Most countries in the European Union use the euro as their official currency."
  },
  {
    "id": 913,
    "english": "evaluate",
    "turkish": "değerlendirmek",
    "sentence": "The manager will evaluate your performance at the end of the trial period."
  },
  {
    "id": 914,
    "english": "even",
    "turkish": "hatta/bile",
    "sentence": "She didn't even say goodbye before she walked out of the meeting."
  },
  {
    "id": 915,
    "english": "evening",
    "turkish": "akşam",
    "sentence": "We should go for a walk in the evening when the weather is much cooler."
  },
  {
    "id": 916,
    "english": "event",
    "turkish": "etkinlik/olay",
    "sentence": "The annual technology conference is the most important event in our industry."
  },
  {
    "id": 917,
    "english": "eventually",
    "turkish": "sonunda/nihayet",
    "sentence": "It took several months of negotiation, but they eventually signed the contract."
  },
  {
    "id": 918,
    "english": "ever",
    "turkish": "hiç/asla",
    "sentence": "Have you ever considered moving to another country for your career?"
  },
  {
    "id": 919,
    "english": "everybody",
    "turkish": "herkes",
    "sentence": "Everybody is expected to attend the safety briefing tomorrow morning."
  },
  {
    "id": 920,
    "english": "everyday",
    "turkish": "günlük",
    "sentence": "The internet has become an essential part of our everyday life."
  },
  {
    "id": 921,
    "english": "everyone",
    "turkish": "herkes",
    "sentence": "Everyone has the right to express their opinion in a democratic society."
  },
  {
    "id": 922,
    "english": "everything",
    "turkish": "her şey",
    "sentence": "I have packed everything I need for my business trip to London."
  },
  {
    "id": 923,
    "english": "everywhere",
    "turkish": "her yer",
    "sentence": "During the festival, there were colorful decorations everywhere in the city."
  },
  {
    "id": 924,
    "english": "evidence",
    "turkish": "kanıt",
    "sentence": "The police are gathering evidence to identify the suspect in the robbery."
  },
  {
    "id": 925,
    "english": "evil",
    "turkish": "kötü/kötülük",
    "sentence": "In many stories, the main conflict is between the forces of good and evil."
  },
  {
    "id": 926,
    "english": "exact",
    "turkish": "tam/kesin",
    "sentence": "I need to know the exact time of your arrival so I can pick you up."
  },
  {
    "id": 927,
    "english": "exactly",
    "turkish": "tam olarak",
    "sentence": "This is exactly what I was talking about during our last meeting."
  },
  {
    "id": 928,
    "english": "exam",
    "turkish": "sınav",
    "sentence": "The final exam will cover all the topics we have discussed this semester."
  },
  {
    "id": 929,
    "english": "examination",
    "turkish": "inceleme/muayene",
    "sentence": "A thorough physical examination is required before you can join the sports team."
  },
  {
    "id": 930,
    "english": "examine",
    "turkish": "incelemek",
    "sentence": "The doctor needs to examine your throat to see if you have an infection."
  },
  {
    "id": 931,
    "english": "example",
    "turkish": "örnek",
    "sentence": "Can you give me an example of how this software can be used in marketing?"
  },
  {
    "id": 932,
    "english": "excellent",
    "turkish": "mükemmel",
    "sentence": "The restaurant is known for its excellent service and delicious food."
  },
  {
    "id": 933,
    "english": "except",
    "turkish": "hariç",
    "sentence": "The museum is open every day of the week except for Mondays."
  },
  {
    "id": 934,
    "english": "exchange",
    "turkish": "takas/döviz",
    "sentence": "We can exchange contact information after the presentation is over."
  },
  {
    "id": 935,
    "english": "excited",
    "turkish": "heyecanlı",
    "sentence": "She is very excited about the opportunity to study abroad next year."
  },
  {
    "id": 936,
    "english": "excitement",
    "turkish": "heyecan",
    "sentence": "There was a lot of excitement in the crowd when the band finally appeared."
  },
  {
    "id": 937,
    "english": "exciting",
    "turkish": "heyecan verici",
    "sentence": "Working on a new project can be very exciting for creative professionals."
  },
  {
    "id": 938,
    "english": "excuse",
    "turkish": "mazeret",
    "sentence": "He had a valid excuse for missing the meeting, so he wasn't penalized."
  },
  {
    "id": 939,
    "english": "executive",
    "turkish": "yönetici",
    "sentence": "The chief executive officer is responsible for the overall strategy of the company."
  },
  {
    "id": 940,
    "english": "exercise",
    "turkish": "egzersiz",
    "sentence": "Regular exercise is important for maintaining both physical and mental health."
  },
  {
    "id": 941,
    "english": "exhibit",
    "turkish": "sergilemek",
    "sentence": "The local art gallery will exhibit works by young artists next month."
  },
  {
    "id": 942,
    "english": "exhibition",
    "turkish": "sergi",
    "sentence": "We spent the afternoon at a photography exhibition in the city center."
  },
  {
    "id": 943,
    "english": "exist",
    "turkish": "var olmak",
    "sentence": "Many species of plants and animals only exist in this specific rainforest."
  },
  {
    "id": 944,
    "english": "existence",
    "turkish": "varlık",
    "sentence": "Scientists are trying to find proof of the existence of water on Mars."
  },
  {
    "id": 945,
    "english": "exit",
    "turkish": "çıkış",
    "sentence": "Please take a moment to locate the nearest emergency exit."
  },
  {
    "id": 946,
    "english": "expand",
    "turkish": "genişlemek/büyümek",
    "sentence": "The business plans to expand its operations into the European market."
  },
  {
    "id": 947,
    "english": "expect",
    "turkish": "beklemek/ummak",
    "sentence": "We expect a large number of people to attend the opening ceremony."
  },
  {
    "id": 948,
    "english": "expectation",
    "turkish": "beklenti",
    "sentence": "The final results of the project exceeded all of our expectations."
  },
  {
    "id": 949,
    "english": "expected",
    "turkish": "beklenen",
    "sentence": "The expected delivery date for your order is next Wednesday."
  },
  {
    "id": 950,
    "english": "expense",
    "turkish": "masraf",
    "sentence": "Traveling for work can be a significant business expense."
  },
  {
    "id": 951,
    "english": "expensive",
    "turkish": "pahalı",
    "sentence": "Owning a luxury car is very expensive due to high maintenance costs."
  },
  {
    "id": 952,
    "english": "experience",
    "turkish": "tecrübe",
    "sentence": "She has ten years of experience in the field of digital marketing."
  },
  {
    "id": 953,
    "english": "experienced",
    "turkish": "tecrübeli",
    "sentence": "The company is looking for an experienced manager to lead the new team."
  },
  {
    "id": 954,
    "english": "experiment",
    "turkish": "deney",
    "sentence": "Scientists are conducting an experiment to find a more effective cure."
  },
  {
    "id": 955,
    "english": "expert",
    "turkish": "uzman",
    "sentence": "He is an expert in international law and has written several books on it."
  },
  {
    "id": 956,
    "english": "explain",
    "turkish": "açıklamak",
    "sentence": "Can you explain how this new software works in simple terms?"
  },
  {
    "id": 957,
    "english": "explanation",
    "turkish": "açıklama",
    "sentence": "The professor provided a clear explanation of the complex chemical reaction."
  },
  {
    "id": 958,
    "english": "explode",
    "turkish": "patlamak",
    "sentence": "The old boiler might explode if the internal pressure gets too high."
  },
  {
    "id": 959,
    "english": "exploration",
    "turkish": "keşif",
    "sentence": "Space exploration has led to many technological advancements on Earth."
  },
  {
    "id": 960,
    "english": "explore",
    "turkish": "keşfetmek",
    "sentence": "We decided to explore the ancient ruins during our vacation in Greece."
  },
  {
    "id": 961,
    "english": "explosion",
    "turkish": "patlama",
    "sentence": "The sudden explosion in the factory caused significant structural damage."
  },
  {
    "id": 962,
    "english": "export",
    "turkish": "ihraç etmek",
    "sentence": "The country exports a wide variety of agricultural products to Europe."
  },
  {
    "id": 963,
    "english": "expose",
    "turkish": "maruz bırakmak",
    "sentence": "You shouldn't expose your skin to direct sunlight for too long without protection."
  },
  {
    "id": 964,
    "english": "express",
    "turkish": "ifade etmek",
    "sentence": "It is important to express your feelings clearly in a professional relationship."
  },
  {
    "id": 965,
    "english": "expression",
    "turkish": "ifade",
    "sentence": "Her facial expression suggested that she was not happy with the results."
  },
  {
    "id": 966,
    "english": "extend",
    "turkish": "uzatmak",
    "sentence": "The deadline for the project has been extended by another two weeks."
  },
  {
    "id": 967,
    "english": "extent",
    "turkish": "derece",
    "sentence": "We do not yet know the full extent of the damage caused by the storm."
  },
  {
    "id": 968,
    "english": "external",
    "turkish": "harici",
    "sentence": "The company hired an external consultant to audit their annual finances."
  },
  {
    "id": 969,
    "english": "extra",
    "turkish": "fazladan",
    "sentence": "Do you have an extra umbrella that I could borrow for the afternoon?"
  },
  {
    "id": 970,
    "english": "extraordinary",
    "turkish": "olağanüstü",
    "sentence": "She has an extraordinary talent for playing the piano at such a young age."
  },
  {
    "id": 971,
    "english": "extreme",
    "turkish": "aşırı",
    "sentence": "The climbers faced extreme weather conditions at the top of the mountain."
  },
  {
    "id": 972,
    "english": "extremely",
    "turkish": "son derece",
    "sentence": "The final exam was extremely difficult, even for the most prepared students."
  },
  {
    "id": 973,
    "english": "eye",
    "turkish": "göz",
    "sentence": "She has a sharp eye for detail, which makes her an excellent editor."
  },
  {
    "id": 974,
    "english": "face",
    "turkish": "yüzleşmek",
    "sentence": "We must face the reality that our budget is limited this fiscal year."
  },
  {
    "id": 975,
    "english": "facility",
    "turkish": "tesis",
    "sentence": "The new sports facility includes a swimming pool and a modern gym."
  },
  {
    "id": 976,
    "english": "fact",
    "turkish": "gerçek",
    "sentence": "It is a well-known fact that regular exercise improves mental health."
  },
  {
    "id": 977,
    "english": "factor",
    "turkish": "faktör",
    "sentence": "Education is a key factor in the economic development of any country."
  },
  {
    "id": 978,
    "english": "factory",
    "turkish": "fabrika",
    "sentence": "The car factory employs thousands of workers from the local community."
  },
  {
    "id": 979,
    "english": "fail",
    "turkish": "başarısız olmak",
    "sentence": "If you fail to plan properly, you are essentially planning to fail."
  },
  {
    "id": 980,
    "english": "failure",
    "turkish": "başarısızlık",
    "sentence": "Every failure is an opportunity to learn and grow stronger in business."
  },
  {
    "id": 981,
    "english": "fair",
    "turkish": "adil",
    "sentence": "The manager tried to be fair to everyone when assigning the weekend shifts."
  },
  {
    "id": 982,
    "english": "fairly",
    "turkish": "oldukça",
    "sentence": "The new apartment is fairly large and has a great view of the city."
  },
  {
    "id": 983,
    "english": "faith",
    "turkish": "inanç",
    "sentence": "Having faith in yourself is the first step toward achieving your goals."
  },
  {
    "id": 984,
    "english": "fall",
    "turkish": "düşmek",
    "sentence": "Sales tend to fall during the winter months for this specific product."
  },
  {
    "id": 985,
    "english": "false",
    "turkish": "yanlış",
    "sentence": "Please indicate whether the following statements are true or false."
  },
  {
    "id": 986,
    "english": "familiar",
    "turkish": "tanıdık",
    "sentence": "Her face looks familiar, but I cannot remember where we met before."
  },
  {
    "id": 987,
    "english": "family",
    "turkish": "aile",
    "sentence": "Spending quality time with family is essential for maintaining balance."
  },
  {
    "id": 988,
    "english": "famous",
    "turkish": "ünlü",
    "sentence": "Paris is famous for its beautiful architecture and world-class museums."
  },
  {
    "id": 989,
    "english": "fan",
    "turkish": "hayran",
    "sentence": "He is a big fan of classical music and attends concerts regularly."
  },
  {
    "id": 990,
    "english": "fancy",
    "turkish": "lüks",
    "sentence": "Would you like to go to a fancy restaurant to celebrate your promotion?"
  },
  {
    "id": 991,
    "english": "fantastic",
    "turkish": "harika",
    "sentence": "The view from the top of the mountain was absolutely fantastic."
  },
  {
    "id": 992,
    "english": "far",
    "turkish": "uzak",
    "sentence": "How far is the nearest train station from your current office?"
  },
  {
    "id": 993,
    "english": "farm",
    "turkish": "çiftlik",
    "sentence": "My grandparents own a small farm where they grow organic vegetables."
  },
  {
    "id": 994,
    "english": "farmer",
    "turkish": "çiftçi",
    "sentence": "The local farmer sells fresh eggs and organic milk at the market."
  },
  {
    "id": 995,
    "english": "farming",
    "turkish": "çiftçilik",
    "sentence": "Sustainable farming practices are essential for protecting the environment."
  },
  {
    "id": 996,
    "english": "fascinating",
    "turkish": "büyüleyici",
    "sentence": "I found the documentary about deep-sea creatures truly fascinating."
  },
  {
    "id": 997,
    "english": "fashion",
    "turkish": "moda",
    "sentence": "Trends in the fashion industry change very quickly every single season."
  },
  {
    "id": 998,
    "english": "fashionable",
    "turkish": "modaya uygun",
    "sentence": "She always wears fashionable clothes that reflect her unique personality."
  },
  {
    "id": 999,
    "english": "fast",
    "turkish": "hızlı",
    "sentence": "The internet connection in this modern building is surprisingly fast."
  },
  {
    "id": 1000,
    "english": "fasten",
    "turkish": "bağlamak",
    "sentence": "Please fasten your seatbelt before the flight takes off."
  },
  {
    "id": 1001,
    "english": "fat",
    "turkish": "yağ",
    "sentence": "You should reduce the amount of saturated fat in your diet."
  },
  {
    "id": 1002,
    "english": "father",
    "turkish": "baba",
    "sentence": "His father worked as an engineer for over thirty years."
  },
  {
    "id": 1003,
    "english": "fault",
    "turkish": "hata",
    "sentence": "It wasn't my fault that the meeting was delayed."
  },
  {
    "id": 1004,
    "english": "favor",
    "turkish": "iyilik",
    "sentence": "Could you do me a favor and deliver this package?"
  },
  {
    "id": 1005,
    "english": "favorite",
    "turkish": "en sevilen",
    "sentence": "Reading historical novels is my favorite hobby."
  },
  {
    "id": 1006,
    "english": "fear",
    "turkish": "korku",
    "sentence": "Many people have a fear of speaking in public."
  },
  {
    "id": 1007,
    "english": "feather",
    "turkish": "tüy",
    "sentence": "The bird's feathers were bright blue and green."
  },
  {
    "id": 1008,
    "english": "feature",
    "turkish": "özellik",
    "sentence": "The most impressive feature of this phone is its camera."
  },
  {
    "id": 1009,
    "english": "federal",
    "turkish": "federal",
    "sentence": "The federal government announced new tax regulations today."
  },
  {
    "id": 1010,
    "english": "fee",
    "turkish": "ücret",
    "sentence": "The registration fee for the conference is quite expensive."
  },
  {
    "id": 1011,
    "english": "feed",
    "turkish": "beslemek",
    "sentence": "Don't forget to feed the cat before you leave the house."
  },
  {
    "id": 1012,
    "english": "feedback",
    "turkish": "geri bildirim",
    "sentence": "We value your feedback as it helps us improve our services."
  },
  {
    "id": 1013,
    "english": "feel",
    "turkish": "hissetmek",
    "sentence": "I feel much better after taking a short nap."
  },
  {
    "id": 1014,
    "english": "feeling",
    "turkish": "duygu",
    "sentence": "He had a strange feeling that someone was watching him."
  },
  {
    "id": 1015,
    "english": "fellow",
    "turkish": "arkadaş",
    "sentence": "My fellow colleagues and I are working on a new project."
  },
  {
    "id": 1016,
    "english": "female",
    "turkish": "dişi",
    "sentence": "The female lion is usually the one who hunts for the pride."
  },
  {
    "id": 1017,
    "english": "fence",
    "turkish": "çit",
    "sentence": "They decided to build a wooden fence around their garden."
  },
  {
    "id": 1018,
    "english": "festival",
    "turkish": "festival",
    "sentence": "The international film festival attracts thousands of tourists."
  },
  {
    "id": 1019,
    "english": "fever",
    "turkish": "ateş",
    "sentence": "You should stay in bed until your fever goes down."
  },
  {
    "id": 1020,
    "english": "fiction",
    "turkish": "kurgu",
    "sentence": "She prefers reading science fiction over romantic novels."
  },
  {
    "id": 1021,
    "english": "field",
    "turkish": "alan",
    "sentence": "He is a leading expert in the field of renewable energy."
  },
  {
    "id": 1022,
    "english": "fight",
    "turkish": "kavga etmek",
    "sentence": "They had a fight about who should pay the electricity bill."
  },
  {
    "id": 1023,
    "english": "fighting",
    "turkish": "çatışma",
    "sentence": "International organizations are fighting against global poverty."
  },
  {
    "id": 1024,
    "english": "figure",
    "turkish": "rakam",
    "sentence": "The latest figures show a significant increase in sales."
  },
  {
    "id": 1025,
    "english": "file",
    "turkish": "dosya",
    "sentence": "Please save the document and upload the file to the portal."
  },
  {
    "id": 1026,
    "english": "fill",
    "turkish": "doldurmak",
    "sentence": "You need to fill out this application form to apply for the job."
  },
  {
    "id": 1027,
    "english": "film",
    "turkish": "film",
    "sentence": "The director spent two years making his latest documentary film."
  },
  {
    "id": 1028,
    "english": "final",
    "turkish": "son",
    "sentence": "The final decision will be made by the board of directors."
  },
  {
    "id": 1029,
    "english": "finally",
    "turkish": "sonunda",
    "sentence": "After hours of waiting, the train finally arrived."
  },
  {
    "id": 1030,
    "english": "finance",
    "turkish": "finans",
    "sentence": "She decided to study finance to better manage her investments."
  },
  {
    "id": 1031,
    "english": "financial",
    "turkish": "finansal",
    "sentence": "The company is facing serious financial difficulties this year."
  },
  {
    "id": 1032,
    "english": "find",
    "turkish": "bulmak",
    "sentence": "Scientists are trying to find a cure for the rare disease."
  },
  {
    "id": 1033,
    "english": "finding",
    "turkish": "bulgu",
    "sentence": "The research findings suggest that sleep is crucial for memory."
  },
  {
    "id": 1034,
    "english": "fine",
    "turkish": "iyi",
    "sentence": "The weather was fine, so we decided to walk to the park."
  },
  {
    "id": 1035,
    "english": "finger",
    "turkish": "parmak",
    "sentence": "She accidentally cut her finger while she was chopping vegetables."
  },
  {
    "id": 1036,
    "english": "finish",
    "turkish": "bitirmek",
    "sentence": "I hope to finish writing my report by the end of the day."
  },
  {
    "id": 1037,
    "english": "fire",
    "turkish": "yangın",
    "sentence": "The fire department arrived quickly to put out the blaze."
  },
  {
    "id": 1038,
    "english": "firm",
    "turkish": "firma",
    "sentence": "He works for a prestigious law firm in the city center."
  },
  {
    "id": 1039,
    "english": "fish",
    "turkish": "balık",
    "sentence": "Many people enjoy eating fresh fish by the seaside."
  },
  {
    "id": 1040,
    "english": "fishing",
    "turkish": "balık tutma",
    "sentence": "My grandfather spends his weekends fishing at the lake."
  },
  {
    "id": 1041,
    "english": "fit",
    "turkish": "uygun",
    "sentence": "These shoes don't fit me; I need a larger size."
  },
  {
    "id": 1042,
    "english": "fitness",
    "turkish": "zindelik",
    "sentence": "Regular exercise is essential for maintaining physical fitness."
  },
  {
    "id": 1043,
    "english": "fix",
    "turkish": "tamir etmek",
    "sentence": "The technician is coming tomorrow to fix the air conditioner."
  },
  {
    "id": 1044,
    "english": "fixed",
    "turkish": "sabit",
    "sentence": "The interest rate on this loan is fixed for five years."
  },
  {
    "id": 1045,
    "english": "flag",
    "turkish": "bayrak",
    "sentence": "The national flag was raised during the opening ceremony."
  },
  {
    "id": 1046,
    "english": "flame",
    "turkish": "alev",
    "sentence": "The candle flame flickered in the gentle breeze."
  },
  {
    "id": 1047,
    "english": "flash",
    "turkish": "ani ışık",
    "sentence": "There was a bright flash of lightning followed by thunder."
  },
  {
    "id": 1048,
    "english": "flat",
    "turkish": "daire",
    "sentence": "They are looking for a small flat near the university."
  },
  {
    "id": 1049,
    "english": "flexible",
    "turkish": "esnek",
    "sentence": "We need a flexible schedule to accommodate everyone's needs."
  },
  {
    "id": 1050,
    "english": "flight",
    "turkish": "uçuş",
    "sentence": "The flight to Paris was delayed by two hours due to bad weather."
  },
  {
    "id": 1051,
    "english": "float",
    "turkish": "batmadan yüzmek",
    "sentence": "Ice cubes float on water because they are less dense than liquid water."
  },
  {
    "id": 1052,
    "english": "flood",
    "turkish": "sel",
    "sentence": "Heavy rains caused a major flood that damaged several houses in the valley."
  },
  {
    "id": 1053,
    "english": "floor",
    "turkish": "yer/kat",
    "sentence": "The modern art gallery is located on the third floor of this building."
  },
  {
    "id": 1054,
    "english": "flour",
    "turkish": "un",
    "sentence": "You need to sift the flour before adding it to the cake batter."
  },
  {
    "id": 1055,
    "english": "flow",
    "turkish": "akış",
    "sentence": "The flow of information within the company has improved significantly."
  },
  {
    "id": 1056,
    "english": "flower",
    "turkish": "çiçek",
    "sentence": "She planted a variety of flowers in her garden to attract butterflies."
  },
  {
    "id": 1057,
    "english": "flu",
    "turkish": "grip",
    "sentence": "He had to cancel his presentation because he caught a severe case of the flu."
  },
  {
    "id": 1058,
    "english": "fly",
    "turkish": "uçmak",
    "sentence": "Migratory birds fly thousands of miles to find warmer climates during winter."
  },
  {
    "id": 1059,
    "english": "flying",
    "turkish": "uçuş/uçan",
    "sentence": "The fear of flying is a common phobia among frequent travelers."
  },
  {
    "id": 1060,
    "english": "focus",
    "turkish": "odaklanmak",
    "sentence": "We need to focus our attention on solving the most urgent problems first."
  },
  {
    "id": 1061,
    "english": "fold",
    "turkish": "katlamak",
    "sentence": "Please fold your clothes neatly before putting them into the suitcase."
  },
  {
    "id": 1062,
    "english": "folding",
    "turkish": "katlanabilir",
    "sentence": "The apartment is small, so we decided to buy a folding table to save space."
  },
  {
    "id": 1063,
    "english": "folk",
    "turkish": "halk/insanlar",
    "sentence": "They enjoy listening to traditional folk music during the local summer festival."
  },
  {
    "id": 1064,
    "english": "follow",
    "turkish": "takip etmek",
    "sentence": "You should follow the instructions carefully to assemble the furniture correctly."
  },
  {
    "id": 1065,
    "english": "following",
    "turkish": "takip eden/sonraki",
    "sentence": "The following day, the manager announced a new policy regarding remote work."
  },
  {
    "id": 1066,
    "english": "food",
    "turkish": "yiyecek",
    "sentence": "Mediterranean food is known for being both delicious and healthy."
  },
  {
    "id": 1067,
    "english": "foot",
    "turkish": "ayak",
    "sentence": "The village is situated at the foot of the mountain range."
  },
  {
    "id": 1068,
    "english": "football",
    "turkish": "futbol",
    "sentence": "Professional football matches attract millions of viewers from around the world."
  },
  {
    "id": 1069,
    "english": "for",
    "turkish": "için",
    "sentence": "I am looking for a professional mentor who can guide my career development."
  },
  {
    "id": 1070,
    "english": "force",
    "turkish": "zorlamak/güç",
    "sentence": "The government was forced to take immediate action to stabilize the economy."
  },
  {
    "id": 1071,
    "english": "foreign",
    "turkish": "yabancı",
    "sentence": "Learning a foreign language can broaden your perspective and career opportunities."
  },
  {
    "id": 1072,
    "english": "forest",
    "turkish": "orman",
    "sentence": "The tropical rainforest is home to a diverse range of plant and animal species."
  },
  {
    "id": 1073,
    "english": "forever",
    "turkish": "sonsuza dek",
    "sentence": "Technological advancements are changing the way we live our lives forever."
  },
  {
    "id": 1074,
    "english": "forget",
    "turkish": "unutmak",
    "sentence": "Don't forget to attach the document before you send the final email."
  },
  {
    "id": 1075,
    "english": "forgive",
    "turkish": "affetmek",
    "sentence": "It can be difficult to forgive someone who has betrayed your trust."
  },
  {
    "id": 1076,
    "english": "fork",
    "turkish": "çatal",
    "sentence": "A fork and a knife are usually placed on the left and right side of the plate."
  },
  {
    "id": 1077,
    "english": "form",
    "turkish": "form/şekil",
    "sentence": "Please fill out the application form with your personal and professional details."
  },
  {
    "id": 1078,
    "english": "formal",
    "turkish": "resmi",
    "sentence": "The invitation states that the dress code for the gala is strictly formal."
  },
  {
    "id": 1079,
    "english": "former",
    "turkish": "eski/önceki",
    "sentence": "The former president of the company now works as a private consultant."
  },
  {
    "id": 1080,
    "english": "fortunately",
    "turkish": "neyse ki",
    "sentence": "Fortunately, no one was injured during the earthquake last night."
  },
  {
    "id": 1081,
    "english": "fortune",
    "turkish": "servet/talih",
    "sentence": "He spent a small fortune on renovating his historic home in the city center."
  },
  {
    "id": 1082,
    "english": "forward",
    "turkish": "ileri",
    "sentence": "I am looking forward to meeting you at the conference next week."
  },
  {
    "id": 1083,
    "english": "found",
    "turkish": "kurmak",
    "sentence": "The charitable organization was founded in 1995 to help children in need."
  },
  {
    "id": 1084,
    "english": "frame",
    "turkish": "çerçeve",
    "sentence": "The artist chose a simple wooden frame to complement the colorful painting."
  },
  {
    "id": 1085,
    "english": "free",
    "turkish": "özgür/bedava",
    "sentence": "All citizens have the right to free access to public information."
  },
  {
    "id": 1086,
    "english": "freedom",
    "turkish": "özgürlük",
    "sentence": "Freedom of speech is a fundamental human right in democratic societies."
  },
  {
    "id": 1087,
    "english": "freeze",
    "turkish": "donmak",
    "sentence": "The temperature dropped so low that the lake began to freeze over."
  },
  {
    "id": 1088,
    "english": "frequency",
    "turkish": "frekans/sıklık",
    "sentence": "The frequency of natural disasters has increased due to climate change."
  },
  {
    "id": 1089,
    "english": "frequently",
    "turkish": "sık sık",
    "sentence": "She travels for business frequently and knows all the best airport lounges."
  },
  {
    "id": 1090,
    "english": "fresh",
    "turkish": "taze",
    "sentence": "We should buy some fresh vegetables from the local market this afternoon."
  },
  {
    "id": 1091,
    "english": "friend",
    "turkish": "arkadaş",
    "sentence": "A true friend is someone who supports you during both good and bad times."
  },
  {
    "id": 1092,
    "english": "friendly",
    "turkish": "arkadaş canlısı",
    "sentence": "The staff at the hotel were very friendly and helpful throughout our stay."
  },
  {
    "id": 1093,
    "english": "friendship",
    "turkish": "arkadaşlık",
    "sentence": "Their long-lasting friendship started when they were both in university."
  },
  {
    "id": 1094,
    "english": "frighten",
    "turkish": "korkutmak",
    "sentence": "Sudden loud noises can frighten domestic animals like dogs and cats."
  },
  {
    "id": 1095,
    "english": "frightened",
    "turkish": "korkmuş",
    "sentence": "The child was frightened by the storm and hid under the blanket."
  },
  {
    "id": 1096,
    "english": "frightening",
    "turkish": "korkutucu",
    "sentence": "The movie was so frightening that I had trouble sleeping afterwards."
  },
  {
    "id": 1097,
    "english": "frog",
    "turkish": "kurbağa",
    "sentence": "The biologist studied the behavior of a rare frog species in the Amazon."
  },
  {
    "id": 1098,
    "english": "from",
    "turkish": "-den/-dan",
    "sentence": "Many English words are derived from Latin or Greek origins."
  },
  {
    "id": 1099,
    "english": "front",
    "turkish": "ön",
    "sentence": "The main entrance is located at the front of the building, facing the park."
  },
  {
    "id": 1100,
    "english": "frozen",
    "turkish": "dondurulmuş",
    "sentence": "The lake is completely frozen, so you can safely walk across the ice."
  },
  {
    "id": 1101,
    "english": "fruit",
    "turkish": "meyve",
    "sentence": "Eating fresh fruit every day is an essential part of a healthy diet."
  },
  {
    "id": 1102,
    "english": "fry",
    "turkish": "kızartmak",
    "sentence": "It is much healthier to grill the fish rather than to fry it in oil."
  },
  {
    "id": 1103,
    "english": "fuel",
    "turkish": "yakıt",
    "sentence": "Rising fuel prices have significantly increased the cost of international shipping."
  },
  {
    "id": 1104,
    "english": "full",
    "turkish": "dolu",
    "sentence": "The restaurant was completely full, so we had to find another place for dinner."
  },
  {
    "id": 1105,
    "english": "fully",
    "turkish": "tamamen",
    "sentence": "I don't fully understand the new policy regarding remote work arrangements."
  },
  {
    "id": 1106,
    "english": "fun",
    "turkish": "eğlence",
    "sentence": "We had a lot of fun during our team-building trip to the mountains last month."
  },
  {
    "id": 1107,
    "english": "function",
    "turkish": "işlev",
    "sentence": "The main function of this software is to organize and protect your digital files."
  },
  {
    "id": 1108,
    "english": "fund",
    "turkish": "fon",
    "sentence": "The government has established a special fund to support small businesses."
  },
  {
    "id": 1109,
    "english": "fundamental",
    "turkish": "temel",
    "sentence": "Effective communication is a fundamental requirement for any leadership position."
  },
  {
    "id": 1110,
    "english": "funding",
    "turkish": "finansman",
    "sentence": "The research project failed because they couldn't secure enough long-term funding."
  },
  {
    "id": 1111,
    "english": "funny",
    "turkish": "komik",
    "sentence": "He told a very funny story that made everyone in the office laugh out loud."
  },
  {
    "id": 1112,
    "english": "fur",
    "turkish": "kürk",
    "sentence": "In many modern societies, it is considered unethical to wear real animal fur."
  },
  {
    "id": 1113,
    "english": "furniture",
    "turkish": "mobilya",
    "sentence": "They decided to buy some modern furniture for their new apartment downtown."
  },
  {
    "id": 1114,
    "english": "further",
    "turkish": "daha fazla",
    "sentence": "For further information about the project, please visit our official website."
  },
  {
    "id": 1115,
    "english": "furthermore",
    "turkish": "dahası",
    "sentence": "The apartment is very expensive; furthermore, it is located far from the city center."
  },
  {
    "id": 1116,
    "english": "future",
    "turkish": "gelecek",
    "sentence": "Investing in renewable energy is crucial for a sustainable and green future."
  },
  {
    "id": 1117,
    "english": "gain",
    "turkish": "kazanmak",
    "sentence": "You can gain valuable professional experience by working as an intern."
  },
  {
    "id": 1118,
    "english": "gallery",
    "turkish": "galeri",
    "sentence": "The art gallery is hosting a new exhibition featuring local painters this weekend."
  },
  {
    "id": 1119,
    "english": "game",
    "turkish": "oyun",
    "sentence": "The basketball game was so intense that it eventually went into overtime."
  },
  {
    "id": 1120,
    "english": "gang",
    "turkish": "çete",
    "sentence": "The police are working hard to reduce the influence of criminal gangs in the city."
  },
  {
    "id": 1121,
    "english": "gap",
    "turkish": "boşluk",
    "sentence": "There is a significant gap between the skills taught in schools and the needs of employers."
  },
  {
    "id": 1122,
    "english": "garage",
    "turkish": "garaj",
    "sentence": "He spends most of his weekends working on his vintage car in the garage."
  },
  {
    "id": 1123,
    "english": "garbage",
    "turkish": "çöp",
    "sentence": "Please remember to take the garbage out before the truck arrives in the morning."
  },
  {
    "id": 1124,
    "english": "garden",
    "turkish": "bahçe",
    "sentence": "They spent the whole afternoon planting beautiful flowers in the front garden."
  },
  {
    "id": 1125,
    "english": "gas",
    "turkish": "gaz",
    "sentence": "The car ran out of gas in the middle of the highway, which was very stressful."
  },
  {
    "id": 1126,
    "english": "gate",
    "turkish": "kapı",
    "sentence": "The security guard opened the main gate after checking my identification badge."
  },
  {
    "id": 1127,
    "english": "gather",
    "turkish": "toplanmak",
    "sentence": "The manager asked the team to gather in the conference room for an urgent meeting."
  },
  {
    "id": 1128,
    "english": "general",
    "turkish": "genel",
    "sentence": "The general consensus among the staff is that the new working hours are better."
  },
  {
    "id": 1129,
    "english": "generally",
    "turkish": "genellikle",
    "sentence": "The weather in this region is generally mild during the winter months."
  },
  {
    "id": 1130,
    "english": "generate",
    "turkish": "üretmek",
    "sentence": "The new wind farm is expected to generate enough electricity for the entire town."
  },
  {
    "id": 1131,
    "english": "generation",
    "turkish": "nesil",
    "sentence": "My grandfather's generation witnessed many significant changes in technology."
  },
  {
    "id": 1132,
    "english": "generous",
    "turkish": "cömert",
    "sentence": "She is a very generous person who often donates money to local charities."
  },
  {
    "id": 1133,
    "english": "genre",
    "turkish": "tür",
    "sentence": "Science fiction is my favorite genre of literature because it explores future possibilities."
  },
  {
    "id": 1134,
    "english": "gentle",
    "turkish": "nazik",
    "sentence": "You should use a gentle soap if you have sensitive skin to avoid irritation."
  },
  {
    "id": 1135,
    "english": "gentleman",
    "turkish": "beyefendi",
    "sentence": "He was a true gentleman and offered his seat to the elderly woman on the bus."
  },
  {
    "id": 1136,
    "english": "geography",
    "turkish": "coğrafya",
    "sentence": "Understanding geography is important for analyzing global trade and politics."
  },
  {
    "id": 1137,
    "english": "get",
    "turkish": "almak",
    "sentence": "I need to get some professional advice before I sign this legal contract."
  },
  {
    "id": 1138,
    "english": "ghost",
    "turkish": "hayalet",
    "sentence": "Some local people believe that the old mansion is haunted by a ghost."
  },
  {
    "id": 1139,
    "english": "giant",
    "turkish": "dev",
    "sentence": "The company has grown into a global giant in the technology and electronics industry."
  },
  {
    "id": 1140,
    "english": "gift",
    "turkish": "hediye",
    "sentence": "She received a beautiful necklace as a graduation gift from her parents."
  },
  {
    "id": 1141,
    "english": "girl",
    "turkish": "kız",
    "sentence": "The young girl showed a remarkable talent for mathematics at an early age."
  },
  {
    "id": 1142,
    "english": "girlfriend",
    "turkish": "kız arkadaş",
    "sentence": "He is planning a surprise dinner for his girlfriend's birthday next Friday."
  },
  {
    "id": 1143,
    "english": "give",
    "turkish": "vermek",
    "sentence": "Could you give me some feedback on the presentation I am preparing?"
  },
  {
    "id": 1144,
    "english": "glad",
    "turkish": "memnun",
    "sentence": "I am very glad to hear that you have finally found a job that you enjoy."
  },
  {
    "id": 1145,
    "english": "glass",
    "turkish": "cam",
    "sentence": "The modern skyscraper is made almost entirely of reflective glass and steel."
  },
  {
    "id": 1146,
    "english": "global",
    "turkish": "küresel",
    "sentence": "Climate change is a global issue that requires cooperation between all nations."
  },
  {
    "id": 1147,
    "english": "glove",
    "turkish": "eldiven",
    "sentence": "Don't forget to wear a thick glove if you are going to touch that hot surface."
  },
  {
    "id": 1148,
    "english": "go",
    "turkish": "gitmek",
    "sentence": "They decided to go on a hiking trip through the mountains during the weekend."
  },
  {
    "id": 1149,
    "english": "goal",
    "turkish": "hedef",
    "sentence": "His primary goal for this year is to complete his master's degree in economics."
  },
  {
    "id": 1150,
    "english": "god",
    "turkish": "tanrı",
    "sentence": "Ancient civilizations often worshipped more than one god to represent different elements of nature."
  },
  {
    "id": 1151,
    "english": "gold",
    "turkish": "altın",
    "sentence": "The price of gold has reached a record high in the international market this year."
  },
  {
    "id": 1152,
    "english": "golf",
    "turkish": "golf",
    "sentence": "Many business professionals prefer playing golf as a way to network with their clients."
  },
  {
    "id": 1153,
    "english": "good",
    "turkish": "iyi",
    "sentence": "Having a good reputation is essential for any successful business owner in this industry."
  },
  {
    "id": 1154,
    "english": "goods",
    "turkish": "mallar/eşyalar",
    "sentence": "The company specializes in the transport of fragile goods across Europe and Asia."
  },
  {
    "id": 1155,
    "english": "govern",
    "turkish": "yönetmek",
    "sentence": "It is difficult for a single leader to govern a country with such diverse cultural opinions."
  },
  {
    "id": 1156,
    "english": "government",
    "turkish": "hükümet",
    "sentence": "The government is implementing new policies to reduce carbon emissions by the end of the decade."
  },
  {
    "id": 1157,
    "english": "governor",
    "turkish": "vali",
    "sentence": "The governor held a press conference to discuss the new education budget for the state."
  },
  {
    "id": 1158,
    "english": "grab",
    "turkish": "kapmak/yakalamak",
    "sentence": "I need to grab my laptop from the office before we head to the meeting room."
  },
  {
    "id": 1159,
    "english": "grade",
    "turkish": "derece/not",
    "sentence": "Students must achieve a high grade in this exam to qualify for the advanced scholarship."
  },
  {
    "id": 1160,
    "english": "gradually",
    "turkish": "yavaş yavaş/kademeli olarak",
    "sentence": "The economy is expected to recover gradually over the next few months after the crisis."
  },
  {
    "id": 1161,
    "english": "graduate",
    "turkish": "mezun olmak",
    "sentence": "She plans to graduate from university with a degree in international relations next summer."
  },
  {
    "id": 1162,
    "english": "grain",
    "turkish": "tahıl/tane",
    "sentence": "Ukraine is one of the world's largest exporters of wheat and other essential grains."
  },
  {
    "id": 1163,
    "english": "grand",
    "turkish": "büyük/görkemli",
    "sentence": "The hotel lobby was decorated in a grand style that impressed all the international guests."
  },
  {
    "id": 1164,
    "english": "grandfather",
    "turkish": "büyükbaba",
    "sentence": "My grandfather shared many interesting stories about his life during the post-war era."
  },
  {
    "id": 1165,
    "english": "grandmother",
    "turkish": "büyükanne",
    "sentence": "Her grandmother taught her the traditional way of making homemade bread without a machine."
  },
  {
    "id": 1166,
    "english": "grandparent",
    "turkish": "büyükanne/büyükbaba",
    "sentence": "Spending quality time with a grandparent can be a rewarding experience for children and adults alike."
  },
  {
    "id": 1167,
    "english": "grant",
    "turkish": "hibe/burs",
    "sentence": "The research team applied for a government grant to fund their latest scientific project."
  },
  {
    "id": 1168,
    "english": "grass",
    "turkish": "çim",
    "sentence": "The city park provides a peaceful environment where people can sit on the grass and relax."
  },
  {
    "id": 1169,
    "english": "grateful",
    "turkish": "minnettar",
    "sentence": "I am extremely grateful for all the support you provided during my transition to the new role."
  },
  {
    "id": 1170,
    "english": "gray",
    "turkish": "gri",
    "sentence": "The sky looked gray and cloudy, suggesting that it might rain heavily later this afternoon."
  },
  {
    "id": 1171,
    "english": "great",
    "turkish": "harika/büyük",
    "sentence": "Technology has had a great impact on how we communicate and work in our daily lives."
  },
  {
    "id": 1172,
    "english": "green",
    "turkish": "yeşil",
    "sentence": "Many modern buildings are designed with green roofs to improve energy efficiency and air quality."
  },
  {
    "id": 1173,
    "english": "greet",
    "turkish": "selamlamak",
    "sentence": "The receptionist will greet you when you arrive at the main entrance of the headquarters."
  },
  {
    "id": 1174,
    "english": "grocery",
    "turkish": "bakkal/mutfak alışverişi",
    "sentence": "I usually go to the grocery store on Sunday mornings to buy fresh vegetables for the week."
  },
  {
    "id": 1175,
    "english": "ground",
    "turkish": "yer/zemin",
    "sentence": "The ground was still wet after the heavy thunderstorm that occurred last night."
  },
  {
    "id": 1176,
    "english": "group",
    "turkish": "grup",
    "sentence": "A small group of experts was gathered to solve the technical issue within the software."
  },
  {
    "id": 1177,
    "english": "grow",
    "turkish": "büyümek/yetişmek",
    "sentence": "Local farmers are finding new ways to grow organic produce throughout the entire year."
  },
  {
    "id": 1178,
    "english": "growth",
    "turkish": "büyüme/gelişme",
    "sentence": "The company's rapid growth is primarily due to its innovative approach to digital marketing."
  },
  {
    "id": 1179,
    "english": "guarantee",
    "turkish": "garanti",
    "sentence": "Most electronics come with a one-year guarantee against any manufacturing defects."
  },
  {
    "id": 1180,
    "english": "guard",
    "turkish": "koruma/muhafız",
    "sentence": "Security guards are stationed at the entrance to ensure the safety of the research facility."
  },
  {
    "id": 1181,
    "english": "guess",
    "turkish": "tahmin etmek",
    "sentence": "Can you guess which candidate will be selected for the regional management position?"
  },
  {
    "id": 1182,
    "english": "guest",
    "turkish": "misafir",
    "sentence": "We should prepare the spare room because our guest will arrive tomorrow evening from London."
  },
  {
    "id": 1183,
    "english": "guide",
    "turkish": "rehber",
    "sentence": "Our tour guide provided us with detailed information about the historical significance of the site."
  },
  {
    "id": 1184,
    "english": "guilty",
    "turkish": "suçlu",
    "sentence": "The jury spent several hours deliberating before finding the defendant guilty of the crime."
  },
  {
    "id": 1185,
    "english": "guitar",
    "turkish": "gitar",
    "sentence": "Learning to play the guitar requires a lot of patience, dedication, and regular practice."
  },
  {
    "id": 1186,
    "english": "gun",
    "turkish": "silah",
    "sentence": "Strict regulations have been introduced regarding the legal possession of a personal gun."
  },
  {
    "id": 1187,
    "english": "guy",
    "turkish": "adam/tip",
    "sentence": "I met a guy at the conference who works for a major software company in Silicon Valley."
  },
  {
    "id": 1188,
    "english": "gym",
    "turkish": "spor salonu",
    "sentence": "Many employees use the office gym to stay active and reduce stress during their lunch breaks."
  },
  {
    "id": 1189,
    "english": "habit",
    "turkish": "alışkanlık",
    "sentence": "Developing a healthy habit, such as morning exercise, can significantly improve your productivity."
  },
  {
    "id": 1190,
    "english": "hair",
    "turkish": "saç",
    "sentence": "She decided to change her hair color to something more professional before the job interview."
  },
  {
    "id": 1191,
    "english": "half",
    "turkish": "yarım",
    "sentence": "Nearly half of the participants agreed that the new system was more efficient than the old one."
  },
  {
    "id": 1192,
    "english": "hall",
    "turkish": "salon/koridor",
    "sentence": "The graduation ceremony will take place in the main hall of the city convention center."
  },
  {
    "id": 1193,
    "english": "hand",
    "turkish": "el",
    "sentence": "Please make sure to wash your hands thoroughly before handling any fresh food products."
  },
  {
    "id": 1194,
    "english": "handle",
    "turkish": "idare etmek/ele almak",
    "sentence": "A manager must know how to handle difficult situations under high pressure without losing focus."
  },
  {
    "id": 1195,
    "english": "hang",
    "turkish": "asmak",
    "sentence": "You can hang your coat on the rack located behind the office door in the hallway."
  },
  {
    "id": 1196,
    "english": "happen",
    "turkish": "olmak/meydana gelmek",
    "sentence": "Scientists are trying to understand why these natural disasters happen so frequently in this region."
  },
  {
    "id": 1197,
    "english": "happily",
    "turkish": "mutlu bir şekilde",
    "sentence": "They lived happily in the countryside for many years after they retired from their careers."
  },
  {
    "id": 1198,
    "english": "happiness",
    "turkish": "mutluluk",
    "sentence": "True happiness often comes from achieving a healthy balance between work and personal life."
  },
  {
    "id": 1199,
    "english": "happy",
    "turkish": "mutlu",
    "sentence": "The clients were very happy with the final results of the marketing campaign we designed."
  },
  {
    "id": 1200,
    "english": "hard",
    "turkish": "zor",
    "sentence": "It is hard to find a good job without relevant professional experience."
  },
  {
    "id": 1201,
    "english": "hardly",
    "turkish": "neredeyse hiç",
    "sentence": "I could hardly hear what the speaker was saying because of the loud background noise."
  },
  {
    "id": 1202,
    "english": "harm",
    "turkish": "zarar",
    "sentence": "Smoking can cause serious harm to your lungs and overall health over time."
  },
  {
    "id": 1203,
    "english": "harmful",
    "turkish": "zararlı",
    "sentence": "Many chemicals used in industrial production are harmful to the environment."
  },
  {
    "id": 1204,
    "english": "hat",
    "turkish": "şapka",
    "sentence": "He wore a stylish hat to protect himself from the burning sun during the hike."
  },
  {
    "id": 1205,
    "english": "hate",
    "turkish": "nefret etmek",
    "sentence": "Many employees hate commuting to work during the busy rush hour."
  },
  {
    "id": 1206,
    "english": "have",
    "turkish": "sahip olmak",
    "sentence": "Successful leaders usually have excellent communication and negotiation skills."
  },
  {
    "id": 1207,
    "english": "he",
    "turkish": "o (erkek)",
    "sentence": "He decided to resign from his position to start his own consulting business."
  },
  {
    "id": 1208,
    "english": "head",
    "turkish": "baş, başkan",
    "sentence": "She was appointed as the new head of the international marketing department."
  },
  {
    "id": 1209,
    "english": "headache",
    "turkish": "baş ağrısı",
    "sentence": "Working long hours in front of a computer screen often causes a severe headache."
  },
  {
    "id": 1210,
    "english": "headline",
    "turkish": "manşet",
    "sentence": "The morning news headline announced a major breakthrough in cancer research."
  },
  {
    "id": 1211,
    "english": "health",
    "turkish": "sağlık",
    "sentence": "Regular exercise and a balanced diet are essential for maintaining good health."
  },
  {
    "id": 1212,
    "english": "healthy",
    "turkish": "sağlıklı",
    "sentence": "Maintaining a healthy lifestyle can significantly reduce the risk of chronic diseases."
  },
  {
    "id": 1213,
    "english": "hear",
    "turkish": "duymak",
    "sentence": "Did you hear about the new government policy regarding retirement taxes?"
  },
  {
    "id": 1214,
    "english": "hearing",
    "turkish": "işitme, duruşma",
    "sentence": "The court scheduled a hearing to discuss the new evidence found in the case."
  },
  {
    "id": 1215,
    "english": "heart",
    "turkish": "kalp",
    "sentence": "Regular cardiovascular exercises are highly beneficial for long-term heart health."
  },
  {
    "id": 1216,
    "english": "heat",
    "turkish": "ısı, sıcaklık",
    "sentence": "You should avoid direct exposure to the intense heat of the midday sun."
  },
  {
    "id": 1217,
    "english": "heating",
    "turkish": "ısıtma",
    "sentence": "The office building has a modern central heating system controlled by sensors."
  },
  {
    "id": 1218,
    "english": "heaven",
    "turkish": "cennet",
    "sentence": "Many travelers describe the tropical island as a piece of heaven on earth."
  },
  {
    "id": 1219,
    "english": "heavily",
    "turkish": "yoğun bir şekilde",
    "sentence": "It rained so heavily that the local football match had to be cancelled."
  },
  {
    "id": 1220,
    "english": "heavy",
    "turkish": "ağır",
    "sentence": "The heavy traffic in the city center delayed our arrival at the board meeting."
  },
  {
    "id": 1221,
    "english": "heel",
    "turkish": "topuk",
    "sentence": "She replaced the worn-out heel of her shoe at the local repair shop."
  },
  {
    "id": 1222,
    "english": "height",
    "turkish": "boy, yükseklik",
    "sentence": "The height of the skyscraper offers a breathtaking view of the entire city."
  },
  {
    "id": 1223,
    "english": "helicopter",
    "turkish": "helikopter",
    "sentence": "The rescue team used a helicopter to reach the injured hikers on the mountain."
  },
  {
    "id": 1224,
    "english": "hell",
    "turkish": "cehennem",
    "sentence": "Working for that demanding boss was a living hell for most of the employees."
  },
  {
    "id": 1225,
    "english": "help",
    "turkish": "yardım etmek",
    "sentence": "Learning a new language can help you advance significantly in your career."
  },
  {
    "id": 1226,
    "english": "helpful",
    "turkish": "yardımcı, faydalı",
    "sentence": "The customer service representative was very helpful and solved my issue quickly."
  },
  {
    "id": 1227,
    "english": "her",
    "turkish": "ona, onu, onun (kadın)",
    "sentence": "The manager praised her for her outstanding performance during the project."
  },
  {
    "id": 1228,
    "english": "here",
    "turkish": "burada",
    "sentence": "Please sign the document here to finalize the legal agreement between us."
  },
  {
    "id": 1229,
    "english": "hero",
    "turkish": "kahraman",
    "sentence": "The firefighter was hailed as a hero after saving the family from the blaze."
  },
  {
    "id": 1230,
    "english": "hers",
    "turkish": "onunki (kadın)",
    "sentence": "I forgot my umbrella, so my colleague kindly offered to lend me hers."
  },
  {
    "id": 1231,
    "english": "herself",
    "turkish": "kendisi (kadın)",
    "sentence": "She taught herself how to code by watching advanced online tutorials."
  },
  {
    "id": 1232,
    "english": "hesitate",
    "turkish": "tereddüt etmek",
    "sentence": "Please do not hesitate to contact us if you have any further questions."
  },
  {
    "id": 1233,
    "english": "hide",
    "turkish": "gizlemek, saklanmak",
    "sentence": "Investors often try to hide their concerns about market instability from the public."
  },
  {
    "id": 1234,
    "english": "high",
    "turkish": "yüksek",
    "sentence": "The company reported high profits despite the recent economic downturn."
  },
  {
    "id": 1235,
    "english": "",
    "turkish": "vurgulamak",
    "sentence": "The report seeks to highlight the importance of investing in renewable energy."
  },
  {
    "id": 1236,
    "english": "highly",
    "turkish": "oldukça, yüksek oranda",
    "sentence": "This new software is highly recommended for professional graphic designers."
  },
  {
    "id": 1237,
    "english": "highway",
    "turkish": "otoyol",
    "sentence": "The new highway has significantly reduced the travel time between the two cities."
  },
  {
    "id": 1238,
    "english": "hill",
    "turkish": "tepe",
    "sentence": "They built their summer house on a hill overlooking the Mediterranean sea."
  },
  {
    "id": 1239,
    "english": "him",
    "turkish": "ona, onu (erkek)",
    "sentence": "I met him at the conference and we discussed potential future collaborations."
  },
  {
    "id": 1240,
    "english": "himself",
    "turkish": "kendisi (erkek)",
    "sentence": "He prepared himself for the interview by researching the company's history."
  },
  {
    "id": 1241,
    "english": "hire",
    "turkish": "işe almak, kiralamak",
    "sentence": "The agency plans to hire five more developers by the end of the year."
  },
  {
    "id": 1242,
    "english": "historic",
    "turkish": "tarihi (önemli)",
    "sentence": "The signing of the peace treaty was a historic moment for the entire nation."
  },
  {
    "id": 1243,
    "english": "historical",
    "turkish": "tarihsel, tarihle ilgili",
    "sentence": "The museum displays a wide range of historical artifacts from the Roman Empire."
  },
  {
    "id": 1244,
    "english": "history",
    "turkish": "tarih",
    "sentence": "Understanding the history of the region is crucial for solving current conflicts."
  },
  {
    "id": 1245,
    "english": "hit",
    "turkish": "vurmak, çarpmak",
    "sentence": "The sudden increase in oil prices hit the global economy quite hard this year."
  },
  {
    "id": 1246,
    "english": "hobby",
    "turkish": "hobi",
    "sentence": "Photography is a great hobby that allows you to capture special moments in life."
  },
  {
    "id": 1247,
    "english": "hockey",
    "turkish": "hokey",
    "sentence": "Ice hockey is an extremely popular and fast-paced sport in northern countries."
  },
  {
    "id": 1248,
    "english": "hold",
    "turkish": "tutmak, düzenlemek",
    "sentence": "The board of directors will hold a meeting to discuss the annual budget."
  },
  {
    "id": 1249,
    "english": "hole",
    "turkish": "delik",
    "sentence": "The scientists are monitoring a small hole in the ozone layer over the poles."
  },
  {
    "id": 1250,
    "english": "holiday",
    "turkish": "tatil",
    "sentence": "We are planning to spend our summer holiday in a small village by the coast."
  },
  {
    "id": 1251,
    "english": "hollow",
    "turkish": "içi boş",
    "sentence": "The sound echoed through the hollow tree trunk in the middle of the forest."
  },
  {
    "id": 1252,
    "english": "holy",
    "turkish": "kutsal",
    "sentence": "Jerusalem is considered a holy city by several different religions."
  },
  {
    "id": 1253,
    "english": "home",
    "turkish": "ev",
    "sentence": "After living abroad for five years, he finally felt like he was back home."
  },
  {
    "id": 1254,
    "english": "homework",
    "turkish": "ödev",
    "sentence": "The professor assigned a lot of homework to prepare us for the final exam."
  },
  {
    "id": 1255,
    "english": "honest",
    "turkish": "dürüst",
    "sentence": "It is important to be honest with your colleagues to build a trusting relationship."
  },
  {
    "id": 1256,
    "english": "honor",
    "turkish": "onur",
    "sentence": "It was a great honor to be invited to speak at the international conference."
  },
  {
    "id": 1257,
    "english": "hope",
    "turkish": "umut etmek",
    "sentence": "Scientists hope that they will find a permanent solution to climate change soon."
  },
  {
    "id": 1258,
    "english": "horrible",
    "turkish": "korkunç",
    "sentence": "The weather was absolutely horrible, with heavy rain and strong winds all day."
  },
  {
    "id": 1259,
    "english": "horror",
    "turkish": "korku",
    "sentence": "Many people enjoy watching horror movies because they like the feeling of being scared."
  },
  {
    "id": 1260,
    "english": "horse",
    "turkish": "at",
    "sentence": "Riding a horse through the countryside is a very relaxing experience."
  },
  {
    "id": 1261,
    "english": "hospital",
    "turkish": "hastane",
    "sentence": "The city is building a new hospital to provide better healthcare for its citizens."
  },
  {
    "id": 1262,
    "english": "host",
    "turkish": "ev sahibi",
    "sentence": "Our host was very welcoming and made sure we had everything we needed during our stay."
  },
  {
    "id": 1263,
    "english": "hot",
    "turkish": "sıcak",
    "sentence": "You should be careful because the coffee is still very hot."
  },
  {
    "id": 1264,
    "english": "hotel",
    "turkish": "otel",
    "sentence": "We booked a room in a five-star hotel for our wedding anniversary."
  },
  {
    "id": 1265,
    "english": "hour",
    "turkish": "saat",
    "sentence": "The flight from London to Paris takes approximately one hour."
  },
  {
    "id": 1266,
    "english": "house",
    "turkish": "ev",
    "sentence": "They are planning to renovate their old house before the winter starts."
  },
  {
    "id": 1267,
    "english": "household",
    "turkish": "ev halkı",
    "sentence": "Most households today have at least two mobile phones and a high-speed internet connection."
  },
  {
    "id": 1268,
    "english": "housing",
    "turkish": "konut",
    "sentence": "The government is trying to solve the housing crisis by building affordable apartments."
  },
  {
    "id": 1269,
    "english": "how",
    "turkish": "nasıl",
    "sentence": "Can you explain how this new software can improve our productivity?"
  },
  {
    "id": 1270,
    "english": "however",
    "turkish": "ancak",
    "sentence": "The project was difficult; however, we managed to complete it on time."
  },
  {
    "id": 1271,
    "english": "huge",
    "turkish": "kocaman",
    "sentence": "The company suffered a huge financial loss due to the global economic crisis."
  },
  {
    "id": 1272,
    "english": "human",
    "turkish": "insan",
    "sentence": "Protecting human rights is essential for a peaceful and just society."
  },
  {
    "id": 1273,
    "english": "humor",
    "turkish": "mizah",
    "sentence": "He has a great sense of humor and always makes everyone laugh in meetings."
  },
  {
    "id": 1274,
    "english": "humorous",
    "turkish": "gülünç",
    "sentence": "The speaker shared a few humorous anecdotes to keep the audience engaged."
  },
  {
    "id": 1275,
    "english": "hungry",
    "turkish": "aç",
    "sentence": "After hiking for several hours, we were all extremely hungry and tired."
  },
  {
    "id": 1276,
    "english": "hunt",
    "turkish": "avlanmak",
    "sentence": "Some animals hunt at night because they have excellent vision in the dark."
  },
  {
    "id": 1277,
    "english": "hunting",
    "turkish": "avcılık",
    "sentence": "Hunting for rare books in old shops is one of his favorite hobbies."
  },
  {
    "id": 1278,
    "english": "hurricane",
    "turkish": "kasırga",
    "sentence": "The hurricane caused significant damage to the coastal towns last night."
  },
  {
    "id": 1279,
    "english": "hurry",
    "turkish": "acele etmek",
    "sentence": "We need to hurry if we want to catch the last train tonight."
  },
  {
    "id": 1280,
    "english": "hurt",
    "turkish": "incitmek",
    "sentence": "She didn't mean to hurt your feelings with her critical remarks."
  },
  {
    "id": 1281,
    "english": "husband",
    "turkish": "koca",
    "sentence": "Her husband works as an architect in a well-known international firm."
  },
  {
    "id": 1282,
    "english": "ice",
    "turkish": "buz",
    "sentence": "The lake was covered in a thick layer of ice during the winter months."
  },
  {
    "id": 1283,
    "english": "idea",
    "turkish": "fikir",
    "sentence": "Do you have any idea how much it will cost to repair the car?"
  },
  {
    "id": 1284,
    "english": "ideal",
    "turkish": "ideal",
    "sentence": "This quiet park is an ideal place for reading a book or relaxing."
  },
  {
    "id": 1285,
    "english": "identify",
    "turkish": "belirlemek",
    "sentence": "The witness was able to identify the suspect from a series of photographs."
  },
  {
    "id": 1286,
    "english": "identity",
    "turkish": "kimlik",
    "sentence": "The thief stole his identity and used his credit cards to make online purchases."
  },
  {
    "id": 1287,
    "english": "if",
    "turkish": "eğer",
    "sentence": "If we don't leave now, we will certainly miss the beginning of the movie."
  },
  {
    "id": 1288,
    "english": "ignore",
    "turkish": "görmezden gelmek",
    "sentence": "You shouldn't ignore the warning signs of stress if you want to stay healthy."
  },
  {
    "id": 1289,
    "english": "ill",
    "turkish": "hasta",
    "sentence": "He had to stay at home because he felt quite ill this morning."
  },
  {
    "id": 1290,
    "english": "illegal",
    "turkish": "yasa dışı",
    "sentence": "It is illegal to drive a vehicle without a valid driver's license."
  },
  {
    "id": 1291,
    "english": "illness",
    "turkish": "hastalık",
    "sentence": "Modern medicine has found cures for many serious illnesses that were once fatal."
  },
  {
    "id": 1292,
    "english": "illustrate",
    "turkish": "resmetmek",
    "sentence": "The teacher used several examples to illustrate the complex scientific theory."
  },
  {
    "id": 1293,
    "english": "illustration",
    "turkish": "örnekleme",
    "sentence": "This book contains many beautiful illustrations that help tell the story."
  },
  {
    "id": 1294,
    "english": "image",
    "turkish": "görüntü",
    "sentence": "The marketing team is working hard to improve the brand's public image."
  },
  {
    "id": 1295,
    "english": "imaginary",
    "turkish": "hayali",
    "sentence": "As a child, she had an imaginary friend who she talked to every day."
  },
  {
    "id": 1296,
    "english": "imagination",
    "turkish": "hayal gücü",
    "sentence": "Writing a novel requires a lot of hard work and a vivid imagination."
  },
  {
    "id": 1297,
    "english": "imagine",
    "turkish": "hayal etmek",
    "sentence": "I can't imagine living in a world without any internet or smartphones."
  },
  {
    "id": 1298,
    "english": "immediate",
    "turkish": "acil",
    "sentence": "The government took immediate action to help the victims of the earthquake."
  },
  {
    "id": 1299,
    "english": "immediately",
    "turkish": "hemen",
    "sentence": "Please call me immediately if there are any changes to the schedule."
  },
  {
    "id": 1300,
    "english": "immigrant",
    "turkish": "göçmen",
    "sentence": "The government is developing new policies to support the integration of every immigrant into the workforce."
  },
  {
    "id": 1301,
    "english": "impact",
    "turkish": "etki",
    "sentence": "Technological advancements have a significant impact on how we communicate globally."
  },
  {
    "id": 1302,
    "english": "impatient",
    "turkish": "sabırsız",
    "sentence": "She grew impatient as she waited for the results of her medical examination."
  },
  {
    "id": 1303,
    "english": "imply",
    "turkish": "ima etmek",
    "sentence": "The report does not explicitly state the cause, but it seems to imply that human error was involved."
  },
  {
    "id": 1304,
    "english": "import",
    "turkish": "ithal etmek",
    "sentence": "Many European countries import natural gas to meet their energy demands during winter."
  },
  {
    "id": 1305,
    "english": "importance",
    "turkish": "önem",
    "sentence": "The manager emphasized the importance of teamwork during the project meeting."
  },
  {
    "id": 1306,
    "english": "important",
    "turkish": "önemli",
    "sentence": "It is important to maintain a healthy balance between work and personal life."
  },
  {
    "id": 1307,
    "english": "impose",
    "turkish": "dayatmak",
    "sentence": "The local authorities decided to impose new taxes on luxury goods."
  },
  {
    "id": 1308,
    "english": "impossible",
    "turkish": "imkansız",
    "sentence": "Completing the entire project in just two days is practically impossible."
  },
  {
    "id": 1309,
    "english": "impress",
    "turkish": "etkilemek",
    "sentence": "He tried to impress the committee with his extensive knowledge of international law."
  },
  {
    "id": 1310,
    "english": "impressed",
    "turkish": "etkilenmiş",
    "sentence": "I was very impressed by the candidate's professional background and communication skills."
  },
  {
    "id": 1311,
    "english": "impression",
    "turkish": "izlenim",
    "sentence": "First impressions are often lasting, so it is crucial to dress professionally for an interview."
  },
  {
    "id": 1312,
    "english": "impressive",
    "turkish": "etkileyici",
    "sentence": "The company’s growth over the last three years has been truly impressive."
  },
  {
    "id": 1313,
    "english": "improve",
    "turkish": "geliştirmek",
    "sentence": "You can improve your language skills by reading books and watching documentaries in English."
  },
  {
    "id": 1314,
    "english": "improvement",
    "turkish": "gelişim",
    "sentence": "There has been a significant improvement in the quality of education over the past decade."
  },
  {
    "id": 1315,
    "english": "in",
    "turkish": "içinde",
    "sentence": "The new office is located in the heart of the city's financial district."
  },
  {
    "id": 1316,
    "english": "inch",
    "turkish": "inç",
    "sentence": "The screen size of the new laptop is 15 inches, which is perfect for graphic design."
  },
  {
    "id": 1317,
    "english": "incident",
    "turkish": "olay",
    "sentence": "The police are currently investigating the incident that occurred near the station last night."
  },
  {
    "id": 1318,
    "english": "include",
    "turkish": "içermek",
    "sentence": "The holiday package does not include the cost of international flights."
  },
  {
    "id": 1319,
    "english": "included",
    "turkish": "dahil",
    "sentence": "Breakfast is included in the price of the hotel room."
  },
  {
    "id": 1320,
    "english": "including",
    "turkish": "dahil olmak üzere",
    "sentence": "The exhibition features works by several famous artists, including Picasso."
  },
  {
    "id": 1321,
    "english": "income",
    "turkish": "gelir",
    "sentence": "Households with a low income may be eligible for financial assistance from the state."
  },
  {
    "id": 1322,
    "english": "increase",
    "turkish": "artırmak",
    "sentence": "The company expects an increase in sales during the holiday season."
  },
  {
    "id": 1323,
    "english": "increasingly",
    "turkish": "giderek artan bir şekilde",
    "sentence": "In today's world, people are becoming increasingly concerned about environmental issues."
  },
  {
    "id": 1324,
    "english": "incredible",
    "turkish": "inanılmaz",
    "sentence": "The view from the top of the mountain was absolutely incredible."
  },
  {
    "id": 1325,
    "english": "incredibly",
    "turkish": "inanılmaz derecede",
    "sentence": "The new software is incredibly fast and easy to use for beginners."
  },
  {
    "id": 1326,
    "english": "indeed",
    "turkish": "gerçekten",
    "sentence": "The results of the experiment were indeed very surprising to the researchers."
  },
  {
    "id": 1327,
    "english": "independent",
    "turkish": "bağımsız",
    "sentence": "After working for several large firms, she decided to become an independent consultant."
  },
  {
    "id": 1328,
    "english": "indicate",
    "turkish": "belirtmek",
    "sentence": "Recent studies indicate that regular exercise can significantly reduce stress levels."
  },
  {
    "id": 1329,
    "english": "indirect",
    "turkish": "dolaylı",
    "sentence": "The rise in fuel prices had an indirect effect on the cost of food."
  },
  {
    "id": 1330,
    "english": "individual",
    "turkish": "birey",
    "sentence": "Each individual has the right to express their own opinion freely."
  },
  {
    "id": 1331,
    "english": "indoor",
    "turkish": "iç mekan",
    "sentence": "Many people prefer indoor activities during the cold winter months."
  },
  {
    "id": 1332,
    "english": "indoors",
    "turkish": "içeride",
    "sentence": "It started to rain heavily, so the children had to play indoors."
  },
  {
    "id": 1333,
    "english": "industrial",
    "turkish": "endüstriyel",
    "sentence": "The city's industrial zone has expanded rapidly over the last twenty years."
  },
  {
    "id": 1334,
    "english": "industry",
    "turkish": "endüstri",
    "sentence": "The tourism industry has been deeply affected by the global economic crisis."
  },
  {
    "id": 1335,
    "english": "infection",
    "turkish": "enfeksiyon",
    "sentence": "Doctors recommend washing your hands frequently to prevent the spread of infection."
  },
  {
    "id": 1336,
    "english": "influence",
    "turkish": "etki",
    "sentence": "Social media can have a powerful influence on the opinions of young people."
  },
  {
    "id": 1337,
    "english": "inform",
    "turkish": "bilgilendirmek",
    "sentence": "Please inform the staff if there are any changes to your travel schedule."
  },
  {
    "id": 1338,
    "english": "informal",
    "turkish": "resmi olmayan",
    "sentence": "The meeting was quite informal, so we didn't have to wear suits."
  },
  {
    "id": 1339,
    "english": "information",
    "turkish": "bilgi",
    "sentence": "You can find more information about the course on the university's official website."
  },
  {
    "id": 1340,
    "english": "ingredient",
    "turkish": "malzeme",
    "sentence": "Fresh vegetables are the most important ingredient in this traditional soup."
  },
  {
    "id": 1341,
    "english": "initial",
    "turkish": "ilk",
    "sentence": "Our initial reaction to the proposal was positive, but we need to see the details."
  },
  {
    "id": 1342,
    "english": "initially",
    "turkish": "başlangıçta",
    "sentence": "Initially, I found the new software difficult to use, but I soon got used to it."
  },
  {
    "id": 1343,
    "english": "initiative",
    "turkish": "girişim",
    "sentence": "The government has launched a new initiative to promote renewable energy."
  },
  {
    "id": 1344,
    "english": "injure",
    "turkish": "yaralamak",
    "sentence": "He managed to injure his knee while playing football over the weekend."
  },
  {
    "id": 1345,
    "english": "injured",
    "turkish": "yaralı",
    "sentence": "The injured passengers were immediately taken to the nearest hospital for treatment."
  },
  {
    "id": 1346,
    "english": "injury",
    "turkish": "yaralanma",
    "sentence": "She suffered a serious back injury during the car accident."
  },
  {
    "id": 1347,
    "english": "inner",
    "turkish": "iç",
    "sentence": "Yoga can help you find inner peace and reduce daily anxiety."
  },
  {
    "id": 1348,
    "english": "innocent",
    "turkish": "masum",
    "sentence": "The suspect claimed that he was innocent and had nothing to do with the crime."
  },
  {
    "id": 1349,
    "english": "inquiry",
    "turkish": "soruşturma",
    "sentence": "The police have opened an inquiry into the cause of the mysterious fire."
  },
  {
    "id": 1350,
    "english": "insect",
    "turkish": "böcek",
    "sentence": "The scientist spent years studying a rare species of insect in the rainforest."
  },
  {
    "id": 1351,
    "english": "inside",
    "turkish": "içerisinde",
    "sentence": "Please wait inside the building until the rain stops and the taxi arrives."
  },
  {
    "id": 1352,
    "english": "insight",
    "turkish": "anlayış, kavrayış",
    "sentence": "Her research provides a valuable insight into the complex patterns of human behavior."
  },
  {
    "id": 1353,
    "english": "insist",
    "turkish": "ısrar etmek",
    "sentence": "I must insist that you follow the safety regulations while working in the laboratory."
  },
  {
    "id": 1354,
    "english": "inspire",
    "turkish": "ilham vermek",
    "sentence": "The manager's speech was designed to inspire the new employees to reach their goals."
  },
  {
    "id": 1355,
    "english": "install",
    "turkish": "kurmak, yüklemek",
    "sentence": "We need to install the latest software updates on all office computers this afternoon."
  },
  {
    "id": 1356,
    "english": "instance",
    "turkish": "örnek, durum",
    "sentence": "For instance, many people prefer working from home to save time on commuting."
  },
  {
    "id": 1357,
    "english": "instead",
    "turkish": "yerine",
    "sentence": "Since the direct flight was canceled, they decided to take the train instead."
  },
  {
    "id": 1358,
    "english": "institute",
    "turkish": "enstitü",
    "sentence": "He works as a senior researcher at the national institute of biological sciences."
  },
  {
    "id": 1359,
    "english": "institution",
    "turkish": "kurum",
    "sentence": "This financial institution provides low-interest loans to small business owners."
  },
  {
    "id": 1360,
    "english": "instruction",
    "turkish": "talimat, yönerge",
    "sentence": "Read the assembly instruction carefully before you start building the new desk."
  },
  {
    "id": 1361,
    "english": "instructor",
    "turkish": "eğitmen",
    "sentence": "The yoga instructor showed us several exercises to improve our physical flexibility."
  },
  {
    "id": 1362,
    "english": "instrument",
    "turkish": "enstrüman, alet",
    "sentence": "The piano is a beautiful but difficult instrument to master without constant practice."
  },
  {
    "id": 1363,
    "english": "insurance",
    "turkish": "sigorta",
    "sentence": "It is very important to have comprehensive health insurance when you are traveling abroad."
  },
  {
    "id": 1364,
    "english": "intelligence",
    "turkish": "zeka",
    "sentence": "Artificial intelligence is rapidly changing the way we interact with daily technology."
  },
  {
    "id": 1365,
    "english": "intelligent",
    "turkish": "zeki",
    "sentence": "She is an intelligent student who can solve complex mathematical problems easily."
  },
  {
    "id": 1366,
    "english": "intend",
    "turkish": "niyet etmek",
    "sentence": "I intend to finish the final report by the end of the week despite the delays."
  },
  {
    "id": 1367,
    "english": "intended",
    "turkish": "planlanan, amaçlanan",
    "sentence": "The email was intended for the marketing department, but it was sent to everyone."
  },
  {
    "id": 1368,
    "english": "intense",
    "turkish": "yoğun",
    "sentence": "The athletes underwent intense training for several months before the world championship."
  },
  {
    "id": 1369,
    "english": "intention",
    "turkish": "niyet",
    "sentence": "It was never my intention to cause any misunderstanding during our meeting."
  },
  {
    "id": 1370,
    "english": "interest",
    "turkish": "ilgi, faiz",
    "sentence": "She has a deep interest in classical literature and spends her weekends reading."
  },
  {
    "id": 1371,
    "english": "interested",
    "turkish": "ilgili",
    "sentence": "If you are interested in joining the company's tennis club, please sign your name here."
  },
  {
    "id": 1372,
    "english": "interesting",
    "turkish": "ilginç",
    "sentence": "The documentary offered an interesting perspective on how climate change affects islands."
  },
  {
    "id": 1373,
    "english": "internal",
    "turkish": "iç, dahili",
    "sentence": "The company is conducting an internal audit of its financial records for the past year."
  },
  {
    "id": 1374,
    "english": "international",
    "turkish": "uluslararası",
    "sentence": "They are planning to expand their business to international markets next summer."
  },
  {
    "id": 1375,
    "english": "internet",
    "turkish": "internet",
    "sentence": "You can find all the necessary information for your project on the internet."
  },
  {
    "id": 1376,
    "english": "interpret",
    "turkish": "yorumlamak",
    "sentence": "It can be quite difficult to interpret the results of this experiment without more data."
  },
  {
    "id": 1377,
    "english": "interrupt",
    "turkish": "sözünü kesmek, ara vermek",
    "sentence": "Please do not interrupt me while I am giving the presentation to the board members."
  },
  {
    "id": 1378,
    "english": "interview",
    "turkish": "mülakat, röportaj",
    "sentence": "He was nervous during his job interview, but he answered all the questions confidently."
  },
  {
    "id": 1379,
    "english": "into",
    "turkish": "içine",
    "sentence": "She walked into the conference room and sat down at the head of the table."
  },
  {
    "id": 1380,
    "english": "introduce",
    "turkish": "tanıştırmak, tanıtmak",
    "sentence": "Let me introduce you to our new project manager, who will be joining us today."
  },
  {
    "id": 1381,
    "english": "introduction",
    "turkish": "giriş, tanıtım",
    "sentence": "The author wrote a brief introduction to explain the historical context of the novel."
  },
  {
    "id": 1382,
    "english": "invent",
    "turkish": "icat etmek",
    "sentence": "Thomas Edison did not invent the light bulb alone, but he significantly improved it."
  },
  {
    "id": 1383,
    "english": "invention",
    "turkish": "icat",
    "sentence": "The invention of the printing press was a major turning point in human history."
  },
  {
    "id": 1384,
    "english": "invest",
    "turkish": "yatırım yapmak",
    "sentence": "They decided to invest their savings in a renewable energy company for long-term profit."
  },
  {
    "id": 1385,
    "english": "investigate",
    "turkish": "araştırmak, soruşturmak",
    "sentence": "The police are trying to investigate the cause of the accident that happened last night."
  },
  {
    "id": 1386,
    "english": "investigation",
    "turkish": "araştırma, soruşturma",
    "sentence": "The investigation revealed some serious flaws in the security system of the bank."
  },
  {
    "id": 1387,
    "english": "investment",
    "turkish": "yatırım",
    "sentence": "Buying a house is usually considered a safe and stable long-term investment."
  },
  {
    "id": 1388,
    "english": "invitation",
    "turkish": "davet",
    "sentence": "Thank you very much for the invitation to your wedding ceremony next month."
  },
  {
    "id": 1389,
    "english": "invite",
    "turkish": "davet etmek",
    "sentence": "We should invite our new neighbors to the garden party on Saturday afternoon."
  },
  {
    "id": 1390,
    "english": "involve",
    "turkish": "içermek, dahil etmek",
    "sentence": "The renovation project will involve several different contractors and designers."
  },
  {
    "id": 1391,
    "english": "involved",
    "turkish": "dahil olmuş, ilişkili",
    "sentence": "Many local citizens were involved in the community project to clean up the park."
  },
  {
    "id": 1392,
    "english": "iron",
    "turkish": "demir, ütü",
    "sentence": "You should use a steam iron to remove the wrinkles from your cotton shirt."
  },
  {
    "id": 1393,
    "english": "island",
    "turkish": "ada",
    "sentence": "They spent their summer vacation on a small, peaceful island in the Mediterranean."
  },
  {
    "id": 1394,
    "english": "issue",
    "turkish": "konu, mesele, sorun",
    "sentence": "Global warming is a critical issue that affects every living creature on Earth."
  },
  {
    "id": 1395,
    "english": "it",
    "turkish": "o",
    "sentence": "The stray cat looked very hungry, so I gave it some milk and some food."
  },
  {
    "id": 1396,
    "english": "item",
    "turkish": "madde, eşya",
    "sentence": "Please check every item on the shopping list before leaving the supermarket."
  },
  {
    "id": 1397,
    "english": "itself",
    "turkish": "kendisi",
    "sentence": "The machine will turn itself off after ten minutes of inactivity to save power."
  },
  {
    "id": 1398,
    "english": "jacket",
    "turkish": "ceket",
    "sentence": "It is quite cold and windy today, so you should wear a warm leather jacket."
  },
  {
    "id": 1399,
    "english": "jam",
    "turkish": "reçel, sıkışıklık",
    "sentence": "I missed my morning flight because I was stuck in a massive traffic jam for two hours."
  },
  {
    "id": 1400,
    "english": "jazz",
    "turkish": "caz",
    "sentence": "Many people enjoy listening to live jazz in small clubs on the weekends."
  },
  {
    "id": 1401,
    "english": "jeans",
    "turkish": "kot pantolon",
    "sentence": "He decided to wear a pair of dark jeans and a casual shirt for the party."
  },
  {
    "id": 1402,
    "english": "jewelry",
    "turkish": "mücevher",
    "sentence": "She inherited some beautiful vintage jewelry from her grandmother last year."
  },
  {
    "id": 1403,
    "english": "job",
    "turkish": "iş",
    "sentence": "Finding a well-paying job in the current market requires both skills and networking."
  },
  {
    "id": 1404,
    "english": "join",
    "turkish": "katılmak",
    "sentence": "You are welcome to join our weekly book club discussions if you are interested."
  },
  {
    "id": 1405,
    "english": "joke",
    "turkish": "şaka",
    "sentence": "The comedian told a clever joke that made the entire audience laugh out loud."
  },
  {
    "id": 1406,
    "english": "journal",
    "turkish": "günlük / dergi",
    "sentence": "She writes her thoughts and daily experiences in a leather-bound journal."
  },
  {
    "id": 1407,
    "english": "journalist",
    "turkish": "gazeteci",
    "sentence": "The journalist interviewed the mayor to get more information about the new project."
  },
  {
    "id": 1408,
    "english": "journey",
    "turkish": "yolculuk",
    "sentence": "Their journey across the country was full of unexpected adventures and beautiful views."
  },
  {
    "id": 1409,
    "english": "joy",
    "turkish": "neşe / sevinç",
    "sentence": "Seeing her children succeed in their careers brought her a great sense of joy."
  },
  {
    "id": 1410,
    "english": "judge",
    "turkish": "hakim / yargıç",
    "sentence": "The judge carefully listened to both sides before making a final decision in court."
  },
  {
    "id": 1411,
    "english": "judgment",
    "turkish": "yargı / karar",
    "sentence": "You should rely on your own judgment when choosing which path to take in your career."
  },
  {
    "id": 1412,
    "english": "juice",
    "turkish": "meyve suyu",
    "sentence": "Would you like a glass of fresh orange juice with your breakfast this morning?"
  },
  {
    "id": 1413,
    "english": "jump",
    "turkish": "zıplamak / atlamak",
    "sentence": "The athlete managed to jump over the hurdle with incredible speed and precision."
  },
  {
    "id": 1414,
    "english": "junior",
    "turkish": "kıdemsiz / genç",
    "sentence": "As a junior developer, he is eager to learn from the more experienced engineers."
  },
  {
    "id": 1415,
    "english": "just",
    "turkish": "sadece / az önce",
    "sentence": "I have just finished reading the report you sent me earlier this afternoon."
  },
  {
    "id": 1416,
    "english": "justice",
    "turkish": "adalet",
    "sentence": "The protesters gathered in the city square to demand justice for the victims."
  },
  {
    "id": 1417,
    "english": "justify",
    "turkish": "haklı çıkarmak",
    "sentence": "It is difficult to justify the high cost of the project given its limited benefits."
  },
  {
    "id": 1418,
    "english": "keep",
    "turkish": "tutmak / saklamak",
    "sentence": "You should keep all your important documents in a safe and organized place."
  },
  {
    "id": 1419,
    "english": "key",
    "turkish": "anahtar",
    "sentence": "Communication is the key to maintaining a healthy and long-lasting relationship."
  },
  {
    "id": 1420,
    "english": "keyboard",
    "turkish": "klavye",
    "sentence": "He bought a new mechanical keyboard because he types for several hours every day."
  },
  {
    "id": 1421,
    "english": "kick",
    "turkish": "tekmelemek",
    "sentence": "The player tried to kick the ball into the net, but the goalkeeper saved it."
  },
  {
    "id": 1422,
    "english": "kid",
    "turkish": "çocuk",
    "sentence": "When I was a kid, I used to spend my summers at my grandparents' farm."
  },
  {
    "id": 1423,
    "english": "kill",
    "turkish": "öldürmek",
    "sentence": "Excessive stress can eventually kill your productivity and affect your mental health."
  },
  {
    "id": 1424,
    "english": "killing",
    "turkish": "öldürme / cinayet",
    "sentence": "The police are still investigating the mysterious killing that occurred last night."
  },
  {
    "id": 1425,
    "english": "kilometer",
    "turkish": "kilometre",
    "sentence": "The nearest gas station is about five kilometers away from the highway exit."
  },
  {
    "id": 1426,
    "english": "king",
    "turkish": "kral",
    "sentence": "The ancient king ruled his people with a mixture of wisdom and strict discipline."
  },
  {
    "id": 1427,
    "english": "kiss",
    "turkish": "öpmek",
    "sentence": "They shared a romantic kiss under the moonlight at the end of their first date."
  },
  {
    "id": 1428,
    "english": "kitchen",
    "turkish": "mutfak",
    "sentence": "We spent the entire evening in the kitchen preparing a delicious meal for our guests."
  },
  {
    "id": 1429,
    "english": "knee",
    "turkish": "diz",
    "sentence": "He injured his knee while playing football and had to undergo surgery last month."
  },
  {
    "id": 1430,
    "english": "knife",
    "turkish": "bıçak",
    "sentence": "Please be careful when using that sharp knife to chop the vegetables for the salad."
  },
  {
    "id": 1431,
    "english": "knock",
    "turkish": "kapı çalmak / vurmak",
    "sentence": "I heard a loud knock at the door just as I was about to go to sleep."
  },
  {
    "id": 1432,
    "english": "know",
    "turkish": "bilmek",
    "sentence": "Do you know if there is a pharmacy nearby that stays open late at night?"
  },
  {
    "id": 1433,
    "english": "knowledge",
    "turkish": "bilgi",
    "sentence": "Having a deep knowledge of foreign languages can open many doors in international business."
  },
  {
    "id": 1434,
    "english": "lab",
    "turkish": "laboratuvar",
    "sentence": "The scientists are conducting a series of important experiments in the chemistry lab."
  },
  {
    "id": 1435,
    "english": "label",
    "turkish": "etiket",
    "sentence": "Always read the label on the back of the bottle to check for any potential allergens."
  },
  {
    "id": 1436,
    "english": "labor",
    "turkish": "emek / iş gücü",
    "sentence": "The construction project required a significant amount of manual labor and time."
  },
  {
    "id": 1437,
    "english": "laboratory",
    "turkish": "laboratuvar",
    "sentence": "The new laboratory is equipped with the latest technology for medical research."
  },
  {
    "id": 1438,
    "english": "lack",
    "turkish": "eksiklik",
    "sentence": "The project failed primarily due to a lack of proper communication among team members."
  },
  {
    "id": 1439,
    "english": "lady",
    "turkish": "hanımefendi",
    "sentence": "The elderly lady was very kind and offered us some tea while we waited."
  },
  {
    "id": 1440,
    "english": "lake",
    "turkish": "göl",
    "sentence": "We decided to rent a small boat and spend the afternoon on the peaceful lake."
  },
  {
    "id": 1441,
    "english": "lamp",
    "turkish": "lamba",
    "sentence": "She turned on the desk lamp so she could continue reading her book in the dark."
  },
  {
    "id": 1442,
    "english": "land",
    "turkish": "kara / toprak",
    "sentence": "The farmers are working hard to prepare the land for the upcoming planting season."
  },
  {
    "id": 1443,
    "english": "landscape",
    "turkish": "manzara",
    "sentence": "The hotel balcony offers a breathtaking landscape of the mountains and the valley."
  },
  {
    "id": 1444,
    "english": "language",
    "turkish": "dil",
    "sentence": "Learning a new language is a great way to understand and appreciate different cultures."
  },
  {
    "id": 1445,
    "english": "laptop",
    "turkish": "dizüstü bilgisayar",
    "sentence": "I need to bring my laptop to the meeting so I can take notes and show the presentation."
  },
  {
    "id": 1446,
    "english": "large",
    "turkish": "büyük",
    "sentence": "A large number of tourists visit the historic city center every year during the summer."
  },
  {
    "id": 1447,
    "english": "largely",
    "turkish": "büyük oranda",
    "sentence": "The success of the event was largely due to the hard work of the volunteers."
  },
  {
    "id": 1448,
    "english": "late",
    "turkish": "geç",
    "sentence": "I apologize for being late, but I got stuck in a very heavy traffic jam."
  },
  {
    "id": 1449,
    "english": "later",
    "turkish": "daha sonra",
    "sentence": "If you are busy right now, we can discuss the details of the plan later today."
  },
  {
    "id": 1450,
    "english": "latest",
    "turkish": "en son",
    "sentence": "Have you heard the latest news regarding the company's merger?"
  },
  {
    "id": 1451,
    "english": "laugh",
    "turkish": "gülmek",
    "sentence": "It is always refreshing to laugh with friends after a stressful day."
  },
  {
    "id": 1452,
    "english": "laughter",
    "turkish": "kahkaha",
    "sentence": "The sound of children's laughter filled the park on Sunday afternoon."
  },
  {
    "id": 1453,
    "english": "launch",
    "turkish": "başlatmak",
    "sentence": "The tech firm plans to launch its new smartphone early next year."
  },
  {
    "id": 1454,
    "english": "law",
    "turkish": "hukuk / yasa",
    "sentence": "He decided to study international law to understand global trade regulations."
  },
  {
    "id": 1455,
    "english": "lawyer",
    "turkish": "avukat",
    "sentence": "You should consult a lawyer before signing any legal documents."
  },
  {
    "id": 1456,
    "english": "lay",
    "turkish": "sermek / koymak",
    "sentence": "Please lay the architectural plans on the table so we can all see them."
  },
  {
    "id": 1457,
    "english": "layer",
    "turkish": "tabaka / katman",
    "sentence": "The cake was decorated with a thick layer of chocolate frosting."
  },
  {
    "id": 1458,
    "english": "lazy",
    "turkish": "tembel",
    "sentence": "He is very talented, but he can be a bit lazy when it comes to deadlines."
  },
  {
    "id": 1459,
    "english": "leader",
    "turkish": "lider",
    "sentence": "A successful leader inspires their team to achieve common goals."
  },
  {
    "id": 1460,
    "english": "leadership",
    "turkish": "liderlik",
    "sentence": "The manager's strong leadership helped the department through the crisis."
  },
  {
    "id": 1461,
    "english": "leading",
    "turkish": "önde gelen",
    "sentence": "She is a leading researcher in the field of renewable energy."
  },
  {
    "id": 1462,
    "english": "leaf",
    "turkish": "yaprak",
    "sentence": "I found a beautiful orange leaf on the ground during my morning walk."
  },
  {
    "id": 1463,
    "english": "league",
    "turkish": "lig",
    "sentence": "The local football team is currently at the top of the minor league."
  },
  {
    "id": 1464,
    "english": "lean",
    "turkish": "yaslanmak",
    "sentence": "Do not lean against the wall because the paint is still wet."
  },
  {
    "id": 1465,
    "english": "learn",
    "turkish": "öğrenmek",
    "sentence": "It is important to learn from your mistakes to improve your performance."
  },
  {
    "id": 1466,
    "english": "learning",
    "turkish": "öğrenme",
    "sentence": "Digital tools have transformed the way we approach language learning."
  },
  {
    "id": 1467,
    "english": "leather",
    "turkish": "deri",
    "sentence": "He bought a high-quality leather briefcase for his new job."
  },
  {
    "id": 1468,
    "english": "leave",
    "turkish": "ayrılmak",
    "sentence": "What time do you usually leave the office in the evening?"
  },
  {
    "id": 1469,
    "english": "lecture",
    "turkish": "ders / konferans",
    "sentence": "The professor gave an insightful lecture on modern economic theories."
  },
  {
    "id": 1470,
    "english": "left",
    "turkish": "sol",
    "sentence": "The museum is located on the left side of the main street."
  },
  {
    "id": 1471,
    "english": "leg",
    "turkish": "bacak",
    "sentence": "He hurt his leg while playing tennis, so he needs to rest for a week."
  },
  {
    "id": 1472,
    "english": "legal",
    "turkish": "yasal",
    "sentence": "The company is seeking legal advice regarding the copyright issue."
  },
  {
    "id": 1473,
    "english": "leisure",
    "turkish": "boş vakit",
    "sentence": "She enjoys painting and hiking in her leisure time."
  },
  {
    "id": 1474,
    "english": "lemon",
    "turkish": "limon",
    "sentence": "Adding a squeeze of lemon can enhance the flavor of grilled fish."
  },
  {
    "id": 1475,
    "english": "lend",
    "turkish": "ödünç vermek",
    "sentence": "Can you lend me your laptop for the presentation this afternoon?"
  },
  {
    "id": 1476,
    "english": "length",
    "turkish": "uzunluk",
    "sentence": "The total length of the marathon is approximately 42 kilometers."
  },
  {
    "id": 1477,
    "english": "lesson",
    "turkish": "ders",
    "sentence": "Each guitar lesson lasts for an hour and focuses on different techniques."
  },
  {
    "id": 1478,
    "english": "let",
    "turkish": "izin vermek",
    "sentence": "The security guard wouldn't let anyone enter the building without an ID."
  },
  {
    "id": 1479,
    "english": "letter",
    "turkish": "mektup",
    "sentence": "She received a formal letter of acceptance from the university."
  },
  {
    "id": 1480,
    "english": "level",
    "turkish": "seviye",
    "sentence": "Students are placed in different classes based on their English level."
  },
  {
    "id": 1481,
    "english": "library",
    "turkish": "kütüphane",
    "sentence": "The city library offers a quiet environment for students to study."
  },
  {
    "id": 1482,
    "english": "license",
    "turkish": "lisans / ehliyet",
    "sentence": "You need a valid driver's license to rent a car in this country."
  },
  {
    "id": 1483,
    "english": "life",
    "turkish": "hayat",
    "sentence": "Balanced nutrition and regular exercise are essential for a healthy life."
  },
  {
    "id": 1484,
    "english": "lifestyle",
    "turkish": "yaşam tarzı",
    "sentence": "Many people are adopting a minimalist lifestyle to reduce stress."
  },
  {
    "id": 1485,
    "english": "lift",
    "turkish": "asansör / kaldırmak",
    "sentence": "The box was quite heavy, so I had to ask someone to help me lift it."
  },
  {
    "id": 1486,
    "english": "likely",
    "turkish": "muhtemel",
    "sentence": "It is likely to rain this evening, so don't forget your umbrella."
  },
  {
    "id": 1487,
    "english": "limit",
    "turkish": "sınır",
    "sentence": "There is a strict speed limit when driving through residential areas."
  },
  {
    "id": 1488,
    "english": "limited",
    "turkish": "sınırlı",
    "sentence": "We have a limited amount of time to finalize the project report."
  },
  {
    "id": 1489,
    "english": "line",
    "turkish": "hat / çizgi",
    "sentence": "Please wait behind the yellow line for your safety."
  },
  {
    "id": 1490,
    "english": "link",
    "turkish": "bağlantı",
    "sentence": "The researcher found a direct link between sleep and cognitive function."
  },
  {
    "id": 1491,
    "english": "lion",
    "turkish": "aslan",
    "sentence": "We were lucky enough to see a lion during our safari trip in Africa."
  },
  {
    "id": 1492,
    "english": "lip",
    "turkish": "dudak",
    "sentence": "He bit his lip nervously while waiting for the interview results."
  },
  {
    "id": 1493,
    "english": "liquid",
    "turkish": "sıvı",
    "sentence": "Be careful not to spill any liquid on the computer keyboard."
  },
  {
    "id": 1494,
    "english": "list",
    "turkish": "liste",
    "sentence": "I made a list of all the groceries we need to buy for the party."
  },
  {
    "id": 1495,
    "english": "listen",
    "turkish": "dinlemek",
    "sentence": "You should listen carefully to the instructions before starting the exam."
  },
  {
    "id": 1496,
    "english": "listener",
    "turkish": "dinleyici",
    "sentence": "To be a good manager, you must first be a patient listener."
  },
  {
    "id": 1497,
    "english": "literature",
    "turkish": "edebiyat",
    "sentence": "She enjoys reading classical literature during her commute to work."
  },
  {
    "id": 1498,
    "english": "little",
    "turkish": "küçük / az",
    "sentence": "We have very little time left to make a final decision."
  },
  {
    "id": 1499,
    "english": "lively",
    "turkish": "canlı / neşeli",
    "sentence": "The atmosphere at the wedding was very lively and full of energy."
  },
  {
    "id": 1500,
    "english": "living",
    "turkish": "yaşam",
    "sentence": "Many people prefer a sustainable way of living to protect the environment."
  },
  {
    "id": 1501,
    "english": "load",
    "turkish": "yük",
    "sentence": "The truck driver had to secure the heavy load before starting the long journey."
  },
  {
    "id": 1502,
    "english": "loan",
    "turkish": "kredi",
    "sentence": "She applied for a bank loan to start her own small business last year."
  },
  {
    "id": 1503,
    "english": "local",
    "turkish": "yerel",
    "sentence": "We decided to try the local cuisine at a small restaurant near the hotel."
  },
  {
    "id": 1504,
    "english": "locate",
    "turkish": "yerini belirlemek",
    "sentence": "Scientists are trying to locate the source of the mysterious signal from space."
  },
  {
    "id": 1505,
    "english": "located",
    "turkish": "yerleşik",
    "sentence": "The corporate headquarters is located in the heart of the financial district."
  },
  {
    "id": 1506,
    "english": "location",
    "turkish": "konum",
    "sentence": "The real estate agent showed us several properties in a prime location."
  },
  {
    "id": 1507,
    "english": "lock",
    "turkish": "kilitlemek",
    "sentence": "Please remember to lock all the doors and windows before you leave the house."
  },
  {
    "id": 1508,
    "english": "logical",
    "turkish": "mantıklı",
    "sentence": "It is logical to assume that the project will be delayed due to budget cuts."
  },
  {
    "id": 1509,
    "english": "lonely",
    "turkish": "yalnız",
    "sentence": "Moving to a new city can be a lonely experience until you make new friends."
  },
  {
    "id": 1510,
    "english": "long-term",
    "turkish": "uzun vadeli",
    "sentence": "Investing in the stock market requires a long-term strategy to be successful."
  },
  {
    "id": 1511,
    "english": "look",
    "turkish": "bakmak",
    "sentence": "You look exhausted after working such long hours at the office this week."
  },
  {
    "id": 1512,
    "english": "loose",
    "turkish": "gevşek",
    "sentence": "This shirt is a bit loose on me, so I think I need a smaller size."
  },
  {
    "id": 1513,
    "english": "lord",
    "turkish": "bey",
    "sentence": "In historical novels, the lord of the manor often had many responsibilities."
  },
  {
    "id": 1514,
    "english": "lose",
    "turkish": "kaybetmek",
    "sentence": "If we don't improve our marketing strategy, we might lose our market share."
  },
  {
    "id": 1515,
    "english": "loss",
    "turkish": "kayıp",
    "sentence": "The company reported a significant financial loss during the last quarter."
  },
  {
    "id": 1516,
    "english": "lost",
    "turkish": "kayıp",
    "sentence": "I felt completely lost when I tried to navigate the city without a map."
  },
  {
    "id": 1517,
    "english": "lot",
    "turkish": "çok",
    "sentence": "There were a lot of people at the conference discussing the new technology."
  },
  {
    "id": 1518,
    "english": "loud",
    "turkish": "yüksek sesli",
    "sentence": "The music was so loud that I couldn't hear what my friend was saying."
  },
  {
    "id": 1519,
    "english": "loudly",
    "turkish": "yüksek sesle",
    "sentence": "The protesters were shouting loudly to make their demands heard by the public."
  },
  {
    "id": 1520,
    "english": "love",
    "turkish": "sevgi",
    "sentence": "Developing a love for reading at a young age can be very beneficial for students."
  },
  {
    "id": 1521,
    "english": "low",
    "turkish": "düşük",
    "sentence": "The company's profits were low this year because of the global economic crisis."
  },
  {
    "id": 1522,
    "english": "lower",
    "turkish": "düşürmek",
    "sentence": "The government is trying to lower the unemployment rate through new job programs."
  },
  {
    "id": 1523,
    "english": "luck",
    "turkish": "şans",
    "sentence": "It takes a combination of hard work and a little bit of luck to succeed in business."
  },
  {
    "id": 1524,
    "english": "lucky",
    "turkish": "şanslı",
    "sentence": "I feel very lucky to have such supportive colleagues in my professional life."
  },
  {
    "id": 1525,
    "english": "lunch",
    "turkish": "öğle yemeği",
    "sentence": "We usually have a quick lunch at the office cafeteria during our break."
  },
  {
    "id": 1526,
    "english": "lung",
    "turkish": "akciğer",
    "sentence": "Regular exercise and avoiding smoking are essential for maintaining healthy lung function."
  },
  {
    "id": 1527,
    "english": "luxury",
    "turkish": "lüks",
    "sentence": "Staying in a five-star hotel by the ocean was a pure luxury for the couple."
  },
  {
    "id": 1528,
    "english": "machine",
    "turkish": "makine",
    "sentence": "This new coffee machine can prepare several different types of drinks automatically."
  },
  {
    "id": 1529,
    "english": "mad",
    "turkish": "kızgın",
    "sentence": "My boss was quite mad when he realized that the deadline had been missed."
  },
  {
    "id": 1530,
    "english": "magazine",
    "turkish": "dergi",
    "sentence": "She enjoys reading a fashion magazine while waiting for her appointment at the salon."
  },
  {
    "id": 1531,
    "english": "magic",
    "turkish": "sihir",
    "sentence": "The magician's performance was so impressive that it felt like real magic."
  },
  {
    "id": 1532,
    "english": "mail",
    "turkish": "posta",
    "sentence": "I received an important piece of mail from the insurance company this morning."
  },
  {
    "id": 1533,
    "english": "main",
    "turkish": "ana",
    "sentence": "The main objective of this meeting is to discuss the budget for next year."
  },
  {
    "id": 1534,
    "english": "mainly",
    "turkish": "esasen",
    "sentence": "The residents of this coastal town are mainly involved in the fishing industry."
  },
  {
    "id": 1535,
    "english": "maintain",
    "turkish": "sürdürmek",
    "sentence": "It is important to maintain a healthy work-life balance to avoid burnout."
  },
  {
    "id": 1536,
    "english": "major",
    "turkish": "büyük",
    "sentence": "The city is undergoing a major transformation with several new construction projects."
  },
  {
    "id": 1537,
    "english": "majority",
    "turkish": "çoğunluk",
    "sentence": "The majority of the board members voted in favor of the new proposal."
  },
  {
    "id": 1538,
    "english": "make",
    "turkish": "yapmak",
    "sentence": "We need to make a final decision about the project by the end of the day."
  },
  {
    "id": 1539,
    "english": "male",
    "turkish": "erkek",
    "sentence": "Research shows that male and female birds often have different singing patterns."
  },
  {
    "id": 1540,
    "english": "mall",
    "turkish": "alışveriş merkezi",
    "sentence": "The new shopping mall features a wide variety of international and local brands."
  },
  {
    "id": 1541,
    "english": "man",
    "turkish": "adam",
    "sentence": "The man who spoke at the conference is a world-renowned expert in physics."
  },
  {
    "id": 1542,
    "english": "manage",
    "turkish": "yönetmek",
    "sentence": "She was able to manage the entire project team effectively despite the challenges."
  },
  {
    "id": 1543,
    "english": "management",
    "turkish": "yönetim",
    "sentence": "Effective management is crucial for the long-term success of any organization."
  },
  {
    "id": 1544,
    "english": "manager",
    "turkish": "müdür",
    "sentence": "Our department manager is known for being very supportive and approachable."
  },
  {
    "id": 1545,
    "english": "manner",
    "turkish": "tavır",
    "sentence": "He explained the complex technical issues in a clear and professional manner."
  },
  {
    "id": 1546,
    "english": "map",
    "turkish": "harita",
    "sentence": "We used a digital map to find the fastest route to the remote village."
  },
  {
    "id": 1547,
    "english": "mark",
    "turkish": "işaret",
    "sentence": "The teacher put a red mark next to the mistakes in my essay."
  },
  {
    "id": 1548,
    "english": "market",
    "turkish": "pazar",
    "sentence": "The global market for renewable energy is growing rapidly every year."
  },
  {
    "id": 1549,
    "english": "marketing",
    "turkish": "pazarlama",
    "sentence": "A strong marketing campaign can significantly increase brand awareness and sales."
  },
  {
    "id": 1550,
    "english": "marriage",
    "turkish": "evlilik",
    "sentence": "They celebrated their tenth year of marriage with a romantic trip to Paris."
  },
  {
    "id": 1551,
    "english": "married",
    "turkish": "evli",
    "sentence": "She has been happily married to her husband for over twenty years."
  },
  {
    "id": 1552,
    "english": "marry",
    "turkish": "evlenmek",
    "sentence": "The couple decided to marry in a small ceremony by the ocean."
  },
  {
    "id": 1553,
    "english": "mass",
    "turkish": "kitle, yığın",
    "sentence": "The media plays a significant role in shaping mass opinion on social issues."
  },
  {
    "id": 1554,
    "english": "massive",
    "turkish": "devasa, çok büyük",
    "sentence": "The company suffered a massive financial loss after the global market crash."
  },
  {
    "id": 1555,
    "english": "master",
    "turkish": "usta, yüksek lisans",
    "sentence": "He decided to pursue a master's degree in business administration to advance his career."
  },
  {
    "id": 1556,
    "english": "matching",
    "turkish": "uyumlu, eşleşen",
    "sentence": "She wore a professional navy suit with matching shoes for the interview."
  },
  {
    "id": 1557,
    "english": "material",
    "turkish": "malzeme, materyal",
    "sentence": "Engineers are testing a new material that is both lighter and stronger than steel."
  },
  {
    "id": 1558,
    "english": "math",
    "turkish": "matematik",
    "sentence": "Solving complex math problems requires a high level of concentration and logic."
  },
  {
    "id": 1559,
    "english": "mathematics",
    "turkish": "matematik",
    "sentence": "Mathematics is considered the fundamental language of all modern sciences."
  },
  {
    "id": 1560,
    "english": "matter",
    "turkish": "mesele, madde",
    "sentence": "It doesn't matter which path you choose as long as you remain committed to your goals."
  },
  {
    "id": 1561,
    "english": "maximum",
    "turkish": "maksimum, azami",
    "sentence": "The maximum weight allowed for carry-on luggage is eight kilograms."
  },
  {
    "id": 1562,
    "english": "maybe",
    "turkish": "belki",
    "sentence": "Maybe we should reschedule the meeting for a time when everyone is available."
  },
  {
    "id": 1563,
    "english": "mayor",
    "turkish": "belediye başkanı",
    "sentence": "The mayor announced a new initiative to improve public transportation in the city center."
  },
  {
    "id": 1564,
    "english": "me",
    "turkish": "beni, bana",
    "sentence": "Please contact me if you require any further assistance with your application."
  },
  {
    "id": 1565,
    "english": "meal",
    "turkish": "öğün, yemek",
    "sentence": "Breakfast is often described as the most important meal of the day for energy."
  },
  {
    "id": 1566,
    "english": "mean",
    "turkish": "anlamına gelmek, kaba",
    "sentence": "I did not mean to offend you; I was simply stating my professional opinion."
  },
  {
    "id": 1567,
    "english": "meaning",
    "turkish": "anlam",
    "sentence": "The true meaning of success varies greatly from one individual to another."
  },
  {
    "id": 1568,
    "english": "means",
    "turkish": "araç, yöntem",
    "sentence": "The internet has become a vital means of communication for people all over the world."
  },
  {
    "id": 1569,
    "english": "meanwhile",
    "turkish": "bu sırada, o esnada",
    "sentence": "The manager is in a meeting; meanwhile, his assistant will show you to your room."
  },
  {
    "id": 1570,
    "english": "measure",
    "turkish": "ölçmek, önlem",
    "sentence": "The government is taking strict measures to reduce carbon emissions nationwide."
  },
  {
    "id": 1571,
    "english": "measurement",
    "turkish": "ölçüm",
    "sentence": "Precise measurement is essential for the accuracy of any scientific experiment."
  },
  {
    "id": 1572,
    "english": "meat",
    "turkish": "et",
    "sentence": "More people are choosing to reduce their meat consumption for environmental reasons."
  },
  {
    "id": 1573,
    "english": "media",
    "turkish": "medya",
    "sentence": "Social media has fundamentally changed the way we consume news and interact with others."
  },
  {
    "id": 1574,
    "english": "medical",
    "turkish": "tıbbi",
    "sentence": "She decided to seek professional medical advice after feeling exhausted for a week."
  },
  {
    "id": 1575,
    "english": "medicine",
    "turkish": "ilaç, tıp",
    "sentence": "Advancements in modern medicine have significantly increased life expectancy."
  },
  {
    "id": 1576,
    "english": "medium",
    "turkish": "orta, araç",
    "sentence": "She prefers working in a medium-sized office where everyone knows each other."
  },
  {
    "id": 1577,
    "english": "meet",
    "turkish": "buluşmak, tanışmak",
    "sentence": "Let's meet at the conference hall at 10 AM to discuss the final presentation."
  },
  {
    "id": 1578,
    "english": "meeting",
    "turkish": "toplantı",
    "sentence": "The weekly staff meeting has been moved to the large boardroom on the second floor."
  },
  {
    "id": 1579,
    "english": "melt",
    "turkish": "erimek",
    "sentence": "Polar ice caps continue to melt at an alarming rate due to rising global temperatures."
  },
  {
    "id": 1580,
    "english": "member",
    "turkish": "üye",
    "sentence": "Every member of the organization is expected to follow the code of conduct."
  },
  {
    "id": 1581,
    "english": "memory",
    "turkish": "hafıza, anı",
    "sentence": "He has a remarkable memory for historical dates and complex statistics."
  },
  {
    "id": 1582,
    "english": "mental",
    "turkish": "zihinsel",
    "sentence": "Taking regular breaks is crucial for maintaining your mental health at work."
  },
  {
    "id": 1583,
    "english": "mention",
    "turkish": "bahsetmek",
    "sentence": "Did the supervisor mention anything about the changes to the project deadline?"
  },
  {
    "id": 1584,
    "english": "menu",
    "turkish": "menü",
    "sentence": "The restaurant's menu offers a wide variety of options for both vegans and meat-eaters."
  },
  {
    "id": 1585,
    "english": "mess",
    "turkish": "dağınıklık, karışıklık",
    "sentence": "The project was a complete mess until they hired an experienced coordinator."
  },
  {
    "id": 1586,
    "english": "message",
    "turkish": "mesaj",
    "sentence": "If I am not at my desk, please leave a message and I will return your call."
  },
  {
    "id": 1587,
    "english": "metal",
    "turkish": "metal",
    "sentence": "Most of the industrial equipment in this factory is made of recycled metal."
  },
  {
    "id": 1588,
    "english": "meter",
    "turkish": "metre",
    "sentence": "The new office building is located just a few hundred meters from the subway station."
  },
  {
    "id": 1589,
    "english": "method",
    "turkish": "yöntem",
    "sentence": "The research team is developing a more efficient method for processing data."
  },
  {
    "id": 1590,
    "english": "middle",
    "turkish": "orta",
    "sentence": "The hotel is conveniently situated in the middle of the city's historic district."
  },
  {
    "id": 1591,
    "english": "midnight",
    "turkish": "gece yarısı",
    "sentence": "The deadline for submitting the online application is midnight tonight."
  },
  {
    "id": 1592,
    "english": "mild",
    "turkish": "hafif, ılıman",
    "sentence": "The region is known for its mild climate, which attracts many tourists in the winter."
  },
  {
    "id": 1593,
    "english": "mile",
    "turkish": "mil",
    "sentence": "The nearest gas station is approximately ten miles away from the highway exit."
  },
  {
    "id": 1594,
    "english": "military",
    "turkish": "askeri",
    "sentence": "After university, he served two years in the military before starting his career."
  },
  {
    "id": 1595,
    "english": "milk",
    "turkish": "süt",
    "sentence": "Plant-based alternatives like almond and oat milk have become very popular lately."
  },
  {
    "id": 1596,
    "english": "mind",
    "turkish": "zihin, akıl",
    "sentence": "Please keep in mind that the office will be closed during the public holiday."
  },
  {
    "id": 1597,
    "english": "mineral",
    "turkish": "mineral",
    "sentence": "Vegetables are a great source of essential vitamins and minerals for the body."
  },
  {
    "id": 1598,
    "english": "minimum",
    "turkish": "minimum, asgari",
    "sentence": "Candidates for this position must have a minimum of three years of work experience."
  },
  {
    "id": 1599,
    "english": "minister",
    "turkish": "bakan",
    "sentence": "The foreign minister met with international leaders to discuss the new trade agreement."
  },
  {
    "id": 1600,
    "english": "minor",
    "turkish": "önemsiz, küçük, ufak",
    "sentence": "She has a minor role in the play, but it's important for the story."
  },
  {
    "id": 1601,
    "english": "minority",
    "turkish": "azınlık",
    "sentence": "The company aims to increase the number of women in the minority in leadership positions."
  },
  {
    "id": 1602,
    "english": "mirror",
    "turkish": "ayna",
    "sentence": "He looked at himself in the mirror before going out."
  },
  {
    "id": 1603,
    "english": "miss",
    "turkish": "kaçırmak, özlemek",
    "sentence": "Don't miss the train, it leaves in five minutes!"
  },
  {
    "id": 1604,
    "english": "missing",
    "turkish": "kayıp",
    "sentence": "The police are looking for a missing child."
  },
  {
    "id": 1605,
    "english": "mission",
    "turkish": "görev, misyon",
    "sentence": "The astronauts have a difficult mission to complete on the Moon."
  },
  {
    "id": 1606,
    "english": "mistake",
    "turkish": "hata, yanlış",
    "sentence": "It was a mistake to forget my keys at home."
  },
  {
    "id": 1607,
    "english": "mix",
    "turkish": "karıştırmak, karışım",
    "sentence": "Can you help me mix the ingredients for the cake?"
  },
  {
    "id": 1608,
    "english": "mixed",
    "turkish": "karışık",
    "sentence": "The audience had mixed reactions to the new film."
  },
  {
    "id": 1609,
    "english": "mixture",
    "turkish": "karışım",
    "sentence": "This is a unique mixture of spices that gives the dish its flavor."
  },
  {
    "id": 1610,
    "english": "model",
    "turkish": "model, örnek, manken",
    "sentence": "She wants to become a fashion model and travel the world."
  },
  {
    "id": 1611,
    "english": "modern",
    "turkish": "modern, çağdaş",
    "sentence": "The city has a lot of modern buildings and technology."
  },
  {
    "id": 1612,
    "english": "modify",
    "turkish": "değiştirmek, uyarlamak",
    "sentence": "We need to modify the plan to fit our budget."
  },
  {
    "id": 1613,
    "english": "mom",
    "turkish": "anne",
    "sentence": "My mom always makes the best cookies."
  },
  {
    "id": 1614,
    "english": "moment",
    "turkish": "an, anlık",
    "sentence": "This is a special moment for our family."
  },
  {
    "id": 1615,
    "english": "money",
    "turkish": "para",
    "sentence": "I need to save money for my vacation."
  },
  {
    "id": 1616,
    "english": "monitor",
    "turkish": "izlemek, monitör",
    "sentence": "The teacher will monitor the students' progress."
  },
  {
    "id": 1617,
    "english": "monkey",
    "turkish": "maymun",
    "sentence": "The monkey swung from tree to tree in the jungle."
  },
  {
    "id": 1618,
    "english": "month",
    "turkish": "ay",
    "sentence": "My birthday is next month."
  },
  {
    "id": 1619,
    "english": "mood",
    "turkish": "ruh hali",
    "sentence": "He is in a good mood today because he passed his exam."
  },
  {
    "id": 1620,
    "english": "moon",
    "turkish": "Ay",
    "sentence": "The full moon was bright in the night sky."
  },
  {
    "id": 1621,
    "english": "moral",
    "turkish": "ahlaki, ahlak",
    "sentence": "The story has a moral lesson about honesty."
  },
  {
    "id": 1622,
    "english": "morning",
    "turkish": "sabah",
    "sentence": "I usually wake up early in the morning."
  },
  {
    "id": 1623,
    "english": "mostly",
    "turkish": "çoğunlukla, genellikle",
    "sentence": "The audience was mostly young people."
  },
  {
    "id": 1624,
    "english": "mother",
    "turkish": "anne",
    "sentence": "She is a wonderful mother to her children."
  },
  {
    "id": 1625,
    "english": "motor",
    "turkish": "motor",
    "sentence": "The motor of the boat needs to be repaired."
  },
  {
    "id": 1626,
    "english": "motorcycle",
    "turkish": "motosiklet",
    "sentence": "He rode his motorcycle down the scenic highway."
  },
  {
    "id": 1627,
    "english": "mount",
    "turkish": "binmek, tırmanmak, dağ",
    "sentence": "They decided to mount their horses and ride into the forest."
  },
  {
    "id": 1628,
    "english": "mountain",
    "turkish": "dağ",
    "sentence": "We hiked up the mountain to see the view."
  },
  {
    "id": 1629,
    "english": "mouse",
    "turkish": "fare",
    "sentence": "The computer mouse is an essential tool for navigation."
  },
  {
    "id": 1630,
    "english": "mouth",
    "turkish": "ağız",
    "sentence": "He smiled with his mouth open."
  },
  {
    "id": 1631,
    "english": "move",
    "turkish": "hareket etmek, taşınmak",
    "sentence": "The dancer made a graceful move across the stage."
  },
  {
    "id": 1632,
    "english": "movement",
    "turkish": "hareket",
    "sentence": "The subtle movement of his eyes showed he was lying."
  },
  {
    "id": 1633,
    "english": "movie",
    "turkish": "film",
    "sentence": "Let's go to the cinema and watch a new movie."
  },
  {
    "id": 1634,
    "english": "mud",
    "turkish": "çamur",
    "sentence": "The children played in the mud after the rain."
  },
  {
    "id": 1635,
    "english": "multiple",
    "turkish": "birden fazla, çoklu",
    "sentence": "There are multiple reasons why this project failed."
  },
  {
    "id": 1636,
    "english": "multiply",
    "turkish": "çarpmak, çoğalmak",
    "sentence": "If you multiply 5 by 10, you get 50."
  },
  {
    "id": 1637,
    "english": "murder",
    "turkish": "cinayet",
    "sentence": "The police are investigating a murder case."
  },
  {
    "id": 1638,
    "english": "muscle",
    "turkish": "kas",
    "sentence": "He went to the gym to build muscle."
  },
  {
    "id": 1639,
    "english": "museum",
    "turkish": "müze",
    "sentence": "We visited an art museum during our trip to the city."
  },
  {
    "id": 1640,
    "english": "music",
    "turkish": "müzik",
    "sentence": "I love listening to music while I study."
  },
  {
    "id": 1641,
    "english": "musical",
    "turkish": "müzikal, müzikle ilgili",
    "sentence": "She is very talented and enjoys singing and playing musical instruments."
  },
  {
    "id": 1642,
    "english": "musician",
    "turkish": "müzisyen",
    "sentence": "The musician played a beautiful melody on the piano."
  },
  {
    "id": 1643,
    "english": "myself",
    "turkish": "kendim",
    "sentence": "I taught myself how to play the guitar."
  },
  {
    "id": 1644,
    "english": "mysterious",
    "turkish": "gizemli",
    "sentence": "The old house had a mysterious aura about it."
  },
  {
    "id": 1645,
    "english": "mystery",
    "turkish": "gizem, muamma",
    "sentence": "The detective solved the mystery of the stolen jewels."
  },
  {
    "id": 1646,
    "english": "nail",
    "turkish": "çivi, tırnak",
    "sentence": "He hammered a nail into the wall to hang the picture."
  },
  {
    "id": 1647,
    "english": "name",
    "turkish": "isim",
    "sentence": "What is your name, please?"
  },
  {
    "id": 1648,
    "english": "narrative",
    "turkish": "anlatı, hikaye",
    "sentence": "The book tells the narrative of a young adventurer."
  },
  {
    "id": 1649,
    "english": "narrow",
    "turkish": "dar",
    "sentence": "The path through the forest was very narrow."
  },
  {
    "id": 1650,
    "english": "nation",
    "turkish": "ulus",
    "sentence": "The United Nations brings many nations together to discuss world issues."
  },
  {
    "id": 1651,
    "english": "national",
    "turkish": "ulusal",
    "sentence": "The national flag of the country is red and white."
  },
  {
    "id": 1652,
    "english": "native",
    "turkish": "yerli, ana",
    "sentence": "She is a native speaker of Spanish."
  },
  {
    "id": 1653,
    "english": "natural",
    "turkish": "doğal",
    "sentence": "The park has many beautiful natural landscapes."
  },
  {
    "id": 1654,
    "english": "naturally",
    "turkish": "doğal olarak",
    "sentence": "He speaks English very well, naturally, as he lived there for years."
  },
  {
    "id": 1655,
    "english": "nature",
    "turkish": "doğa",
    "sentence": "Spending time in nature can be very relaxing."
  },
  {
    "id": 1656,
    "english": "near",
    "turkish": "yakın",
    "sentence": "The shop is near my house, so I can walk there."
  },
  {
    "id": 1657,
    "english": "nearly",
    "turkish": "neredeyse",
    "sentence": "I have nearly finished my homework, just one more question."
  },
  {
    "id": 1658,
    "english": "neat",
    "turkish": "düzenli, temiz, intizamlı",
    "sentence": "Her handwriting is very neat and easy to read."
  },
  {
    "id": 1659,
    "english": "necessarily",
    "turkish": "zorunlu olarak, mutlaka",
    "sentence": "We don't necessarily need to go now, we can wait a bit."
  },
  {
    "id": 1660,
    "english": "necessary",
    "turkish": "gerekli",
    "sentence": "It is necessary to study hard to pass the exam."
  },
  {
    "id": 1661,
    "english": "neck",
    "turkish": "boyun",
    "sentence": "He put on a scarf around his neck to stay warm."
  },
  {
    "id": 1662,
    "english": "need",
    "turkish": "ihtiyaç duymak, gerekmek",
    "sentence": "I need some help with this difficult task."
  },
  {
    "id": 1663,
    "english": "needle",
    "turkish": "iğne",
    "sentence": "She used a needle and thread to sew the button back on."
  },
  {
    "id": 1664,
    "english": "negative",
    "turkish": "olumsuz, negatif",
    "sentence": "His attitude towards the project was very negative."
  },
  {
    "id": 1665,
    "english": "neighbor",
    "turkish": "komşu",
    "sentence": "My neighbor is always very friendly and helpful."
  },
  {
    "id": 1666,
    "english": "neighborhood",
    "turkish": "mahalle, semt",
    "sentence": "We are looking for a quiet neighborhood to live in."
  },
  {
    "id": 1667,
    "english": "nerve",
    "turkish": "sinir",
    "sentence": "It takes a lot of nerve to speak in front of a large audience."
  },
  {
    "id": 1668,
    "english": "nervous",
    "turkish": "gergin, endişeli",
    "sentence": "I felt nervous before my job interview."
  },
  {
    "id": 1669,
    "english": "net",
    "turkish": "ağ, net",
    "sentence": "He caught the fish in a large net."
  },
  {
    "id": 1670,
    "english": "network",
    "turkish": "ağ, şebeke",
    "sentence": "The company has a strong business network across the country."
  },
  {
    "id": 1671,
    "english": "never",
    "turkish": "asla, hiç",
    "sentence": "I have never seen such a beautiful sunset before."
  },
  {
    "id": 1672,
    "english": "nevertheless",
    "turkish": "yine de, buna rağmen",
    "sentence": "It was raining heavily, nevertheless, they decided to go for a walk."
  },
  {
    "id": 1673,
    "english": "new",
    "turkish": "yeni",
    "sentence": "I bought a new car last week."
  },
  {
    "id": 1674,
    "english": "news",
    "turkish": "haberler",
    "sentence": "Did you hear the news about the election results?"
  },
  {
    "id": 1675,
    "english": "newspaper",
    "turkish": "gazete",
    "sentence": "He reads the newspaper every morning with his coffee."
  },
  {
    "id": 1676,
    "english": "next",
    "turkish": "sonraki",
    "sentence": "What are you doing next weekend?"
  },
  {
    "id": 1677,
    "english": "nice",
    "turkish": "hoş, güzel, nazik",
    "sentence": "It was a nice day to spend time outdoors."
  },
  {
    "id": 1678,
    "english": "night",
    "turkish": "gece",
    "sentence": "The stars are very bright at night."
  },
  {
    "id": 1679,
    "english": "nightmare",
    "turkish": "kabus",
    "sentence": "I had a terrible nightmare last night and woke up scared."
  },
  {
    "id": 1680,
    "english": "nobody",
    "turkish": "kimse",
    "sentence": "Nobody was at home when I arrived."
  },
  {
    "id": 1681,
    "english": "noise",
    "turkish": "gürültü",
    "sentence": "The noise from the construction site was very loud."
  },
  {
    "id": 1682,
    "english": "noisy",
    "turkish": "gürültülü",
    "sentence": "The restaurant was too noisy to have a conversation."
  },
  {
    "id": 1683,
    "english": "none",
    "turkish": "hiçbiri",
    "sentence": "I asked for help, but none of them were able to assist me."
  },
  {
    "id": 1684,
    "english": "nor",
    "turkish": "ne de",
    "sentence": "She likes neither coffee nor tea."
  },
  {
    "id": 1685,
    "english": "normal",
    "turkish": "normal",
    "sentence": "The weather is colder than normal for this time of year."
  },
  {
    "id": 1686,
    "english": "normally",
    "turkish": "normalde, alışılmış şekilde",
    "sentence": "Normally, I wake up early, but today I slept in."
  },
  {
    "id": 1687,
    "english": "north",
    "turkish": "kuzey",
    "sentence": "The wind is blowing from the north."
  },
  {
    "id": 1688,
    "english": "northern",
    "turkish": "kuzey, kuzeyli",
    "sentence": "They are planning a trip to the northern part of the country."
  },
  {
    "id": 1689,
    "english": "nose",
    "turkish": "burun",
    "sentence": "He has a runny nose because of his cold."
  },
  {
    "id": 1690,
    "english": "not",
    "turkish": "değil, yok",
    "sentence": "I am not sure if I can come to the party."
  },
  {
    "id": 1691,
    "english": "note",
    "turkish": "not, not almak",
    "sentence": "Please take a note of the important details."
  },
  {
    "id": 1692,
    "english": "nothing",
    "turkish": "hiçbir şey",
    "sentence": "There is nothing in the fridge."
  },
  {
    "id": 1693,
    "english": "notice",
    "turkish": "fark etmek, dikkat etmek, bildirim",
    "sentence": "I didn't notice him enter the room."
  },
  {
    "id": 1694,
    "english": "notion",
    "turkish": "fikir, düşünce, kavram",
    "sentence": "He has a vague notion of what he wants to do."
  },
  {
    "id": 1695,
    "english": "novel",
    "turkish": "roman",
    "sentence": "She is reading an interesting novel by a famous author."
  },
  {
    "id": 1696,
    "english": "now",
    "turkish": "şimdi",
    "sentence": "What are you doing now?"
  },
  {
    "id": 1697,
    "english": "nowhere",
    "turkish": "hiçbir yerde",
    "sentence": "He looked everywhere, but found nowhere to park."
  },
  {
    "id": 1698,
    "english": "nuclear",
    "turkish": "nükleer",
    "sentence": "The country is developing new nuclear technology."
  },
  {
    "id": 1699,
    "english": "number",
    "turkish": "sayı",
    "sentence": "Please write your phone number on the form."
  },
  {
    "id": 1700,
    "english": "numerous",
    "turkish": "sayısız",
    "sentence": "There are numerous ways to solve this problem, but we need to choose the most efficient one."
  },
  {
    "id": 1701,
    "english": "nurse",
    "turkish": "hemşire",
    "sentence": "The nurse helped the patient feel more comfortable after the surgery."
  },
  {
    "id": 1702,
    "english": "nut",
    "turkish": "fındık, somun",
    "sentence": "I cracked a nut with my teeth, but it wasn't a good idea."
  },
  {
    "id": 1703,
    "english": "obey",
    "turkish": "itaat etmek",
    "sentence": "Children should obey their parents and listen to their advice."
  },
  {
    "id": 1704,
    "english": "object",
    "turkish": "nesne, itiraz etmek",
    "sentence": "He picked up a strange object from the ground and examined it."
  },
  {
    "id": 1705,
    "english": "objective",
    "turkish": "amaç, hedef, nesnel",
    "sentence": "Our main objective is to increase sales by 15% this year."
  },
  {
    "id": 1706,
    "english": "obligation",
    "turkish": "yükümlülük, zorunluluk",
    "sentence": "It is your obligation to report any suspicious activity."
  },
  {
    "id": 1707,
    "english": "observation",
    "turkish": "gözlem",
    "sentence": "Through careful observation, the scientist discovered a new species."
  },
  {
    "id": 1708,
    "english": "observe",
    "turkish": "gözlemlemek",
    "sentence": "We sat quietly and observed the birds in their natural habitat."
  },
  {
    "id": 1709,
    "english": "obtain",
    "turkish": "elde etmek, edinmek",
    "sentence": "She managed to obtain the information she needed from the library."
  },
  {
    "id": 1710,
    "english": "obvious",
    "turkish": "açık, bariz",
    "sentence": "It's obvious that he's not telling the truth."
  },
  {
    "id": 1711,
    "english": "obviously",
    "turkish": "açıkça, bariz bir şekilde",
    "sentence": "Obviously, we need more time to finish this project."
  },
  {
    "id": 1712,
    "english": "occasion",
    "turkish": "vesile, fırsat",
    "sentence": "Her birthday was a special occasion, so we had a big party."
  },
  {
    "id": 1713,
    "english": "occasionally",
    "turkish": "ara sıra, thicden",
    "sentence": "We occasionally go out for dinner on Fridays."
  },
  {
    "id": 1714,
    "english": "occur",
    "turkish": "meydana gelmek, olmak",
    "sentence": "A strange sound began to occur late at night."
  },
  {
    "id": 1715,
    "english": "ocean",
    "turkish": "okyanus",
    "sentence": "The vast ocean stretches out before us, full of mystery."
  },
  {
    "id": 1716,
    "english": "odd",
    "turkish": "garip, tek, tekil",
    "sentence": "That's an odd number, it's not divisible by two."
  },
  {
    "id": 1717,
    "english": "of",
    "turkish": "ile ilgili, -in/-ın/-un/-ün, ait",
    "sentence": "He is a member of the club."
  },
  {
    "id": 1718,
    "english": "off",
    "turkish": "kapalı, uzak, açıkta",
    "sentence": "Please turn the lights off when you leave the room."
  },
  {
    "id": 1719,
    "english": "offend",
    "turkish": "kırmak, gücendirmek",
    "sentence": "I didn't mean to offend you with my comment."
  },
  {
    "id": 1720,
    "english": "offense",
    "turkish": "hakaret, saldırı, suç",
    "sentence": "His rude behavior was a serious offense to everyone present."
  },
  {
    "id": 1721,
    "english": "offensive",
    "turkish": "saldırgan, kırıcı",
    "sentence": "The comedian's jokes were considered offensive by some audience members."
  },
  {
    "id": 1722,
    "english": "offer",
    "turkish": "teklif etmek, teklif",
    "sentence": "They made a generous offer for the house."
  },
  {
    "id": 1723,
    "english": "office",
    "turkish": "ofis, büro",
    "sentence": "I'll be in the office until 5 PM today."
  },
  {
    "id": 1724,
    "english": "officer",
    "turkish": "memur, subay",
    "sentence": "A police officer directed the traffic around the accident."
  },
  {
    "id": 1725,
    "english": "official",
    "turkish": "resmi, yetkili",
    "sentence": "We need an official confirmation of the booking."
  },
  {
    "id": 1726,
    "english": "often",
    "turkish": "sık sık, çoğunlukla",
    "sentence": "I often visit my grandparents on weekends."
  },
  {
    "id": 1727,
    "english": "oil",
    "turkish": "yağ",
    "sentence": "We use olive oil for cooking most of our meals."
  },
  {
    "id": 1728,
    "english": "old",
    "turkish": "eski, yaşlı",
    "sentence": "This is an old book with many interesting stories."
  },
  {
    "id": 1729,
    "english": "old-fashioned",
    "turkish": "eski moda, demode",
    "sentence": "Her grandmother still prefers old-fashioned methods of communication."
  },
  {
    "id": 1730,
    "english": "on",
    "turkish": "üstünde, açık, devam eden",
    "sentence": "The book is on the table."
  },
  {
    "id": 1731,
    "english": "once",
    "turkish": "bir kere, bir zamanlar",
    "sentence": "Once you start, you can't stop."
  },
  {
    "id": 1732,
    "english": "onion",
    "turkish": "soğan",
    "sentence": "I need to chop an onion for the soup."
  },
  {
    "id": 1733,
    "english": "online",
    "turkish": "çevrimiçi, çevrimiçi",
    "sentence": "You can find many useful resources online."
  },
  {
    "id": 1734,
    "english": "only",
    "turkish": "sadece, tek",
    "sentence": "I have only one sister."
  },
  {
    "id": 1735,
    "english": "onto",
    "turkish": "üstüne, üzerine",
    "sentence": "The cat jumped onto the roof."
  },
  {
    "id": 1736,
    "english": "open",
    "turkish": "açık, açmak",
    "sentence": "Please keep the door open for me."
  },
  {
    "id": 1737,
    "english": "opening",
    "turkish": "açılış, boşluk, fırsat",
    "sentence": "There is an opening for a new position in our company."
  },
  {
    "id": 1738,
    "english": "operate",
    "turkish": "işletmek, çalıştırmak, ameliyat yapmak",
    "sentence": "The doctor will operate on the patient tomorrow morning."
  },
  {
    "id": 1739,
    "english": "operation",
    "turkish": "operasyon, ameliyat, işlem",
    "sentence": "The successful operation lasted for several hours."
  },
  {
    "id": 1740,
    "english": "opinion",
    "turkish": "görüş, fikir",
    "sentence": "What is your opinion on this matter?"
  },
  {
    "id": 1741,
    "english": "opponent",
    "turkish": "rakip, karşı taraf",
    "sentence": "He played against a strong opponent in the final match."
  },
  {
    "id": 1742,
    "english": "opportunity",
    "turkish": "fırsat, imkan",
    "sentence": "This is a great opportunity to learn and grow."
  },
  {
    "id": 1743,
    "english": "oppose",
    "turkish": "karşı çıkmak, muhalefet etmek",
    "sentence": "Many people oppose the new law."
  },
  {
    "id": 1744,
    "english": "opposed",
    "turkish": "karşı, muhalif",
    "sentence": "He was opposed to the idea from the beginning."
  },
  {
    "id": 1745,
    "english": "opposite",
    "turkish": "karşısında, zıt",
    "sentence": "The shop is opposite the post office."
  },
  {
    "id": 1746,
    "english": "opposition",
    "turkish": "muhalefet, karşıtlık",
    "sentence": "There was strong opposition to the government's policy."
  },
  {
    "id": 1747,
    "english": "option",
    "turkish": "seçenek, tercih",
    "sentence": "We have several options to consider."
  },
  {
    "id": 1748,
    "english": "or",
    "turkish": "veya, ya da",
    "sentence": "Would you like tea or coffee?"
  },
  {
    "id": 1749,
    "english": "orange",
    "turkish": "turuncu, portakal",
    "sentence": "She wore a bright orange dress to the party."
  },
  {
    "id": 1750,
    "english": "order",
    "turkish": "sipariş, düzen",
    "sentence": "Could you please put these books in order on the shelf?"
  },
  {
    "id": 1751,
    "english": "ordinary",
    "turkish": "sıradan, normal",
    "sentence": "It was just an ordinary day at the office, nothing special happened."
  },
  {
    "id": 1752,
    "english": "organ",
    "turkish": "organ",
    "sentence": "The heart is a vital organ in the human body."
  },
  {
    "id": 1753,
    "english": "organization",
    "turkish": "organizasyon, kuruluş",
    "sentence": "She works for an international aid organization."
  },
  {
    "id": 1754,
    "english": "organize",
    "turkish": "düzenlemek, organize etmek",
    "sentence": "We need to organize the files alphabetically."
  },
  {
    "id": 1755,
    "english": "organized",
    "turkish": "düzenli, organize edilmiş",
    "sentence": "Her desk is always very organized, unlike mine."
  },
  {
    "id": 1756,
    "english": "organizer",
    "turkish": "düzenleyici",
    "sentence": "He's a great organizer and always plans the best parties."
  },
  {
    "id": 1757,
    "english": "origin",
    "turkish": "köken, menşe",
    "sentence": "The origin of this ancient artifact is unknown."
  },
  {
    "id": 1758,
    "english": "original",
    "turkish": "orijinal, asıl",
    "sentence": "This is the original painting; the other one is a copy."
  },
  {
    "id": 1759,
    "english": "originally",
    "turkish": "başlangıçta, orijinal olarak",
    "sentence": "Originally, the building was used as a library."
  },
  {
    "id": 1760,
    "english": "other",
    "turkish": "diğer",
    "sentence": "Do you have any other questions?"
  },
  {
    "id": 1761,
    "english": "otherwise",
    "turkish": "aksi takdirde, yoksa",
    "sentence": "You should study hard, otherwise you might fail the exam."
  },
  {
    "id": 1762,
    "english": "ours",
    "turkish": "bizimki",
    "sentence": "This car is not theirs; it's ours."
  },
  {
    "id": 1763,
    "english": "ourselves",
    "turkish": "kendimiz",
    "sentence": "We can do this task ourselves."
  },
  {
    "id": 1764,
    "english": "out",
    "turkish": "dışarı",
    "sentence": "Let's go out for dinner tonight."
  },
  {
    "id": 1765,
    "english": "outcome",
    "turkish": "sonuç",
    "sentence": "The outcome of the negotiations was positive."
  },
  {
    "id": 1766,
    "english": "outdoor",
    "turkish": "açık hava, dış mekan",
    "sentence": "We enjoyed an outdoor picnic in the park."
  },
  {
    "id": 1767,
    "english": "outdoors",
    "turkish": "dışarıda, açık havada",
    "sentence": "She loves spending time outdoors, especially in nature."
  },
  {
    "id": 1768,
    "english": "outer",
    "turkish": "dış, harici",
    "sentence": "The outer layer of the planet is made of rock."
  },
  {
    "id": 1769,
    "english": "outline",
    "turkish": "ana hat, özet",
    "sentence": "He gave a brief outline of the project plan."
  },
  {
    "id": 1770,
    "english": "outside",
    "turkish": "dış, dışarısı",
    "sentence": "There's a lot of noise from the street outside."
  },
  {
    "id": 1771,
    "english": "oven",
    "turkish": "fırın",
    "sentence": "Please put the cake in the oven to bake."
  },
  {
    "id": 1772,
    "english": "over",
    "turkish": "üstünde, üzerinde, bitmiş",
    "sentence": "The plane flew over the mountains."
  },
  {
    "id": 1773,
    "english": "overall",
    "turkish": "genel, toplam",
    "sentence": "The overall cost of the trip was higher than expected."
  },
  {
    "id": 1774,
    "english": "overseas",
    "turkish": "denizaşırı",
    "sentence": "She has lived overseas for the past five years."
  },
  {
    "id": 1775,
    "english": "owe",
    "turkish": "borçlu olmak",
    "sentence": "I owe you an apology for being late."
  },
  {
    "id": 1776,
    "english": "own",
    "turkish": "sahip olmak",
    "sentence": "He wants to own his own business one day."
  },
  {
    "id": 1777,
    "english": "owner",
    "turkish": "sahip",
    "sentence": "The owner of the shop was very friendly."
  },
  {
    "id": 1778,
    "english": "pace",
    "turkish": "adım, hız",
    "sentence": "She walks at a steady pace."
  },
  {
    "id": 1779,
    "english": "pack",
    "turkish": "paketlemek, takım",
    "sentence": "We need to pack our bags for the holiday."
  },
  {
    "id": 1780,
    "english": "package",
    "turkish": "paket",
    "sentence": "The package arrived yesterday with all the items inside."
  },
  {
    "id": 1781,
    "english": "page",
    "turkish": "sayfa",
    "sentence": "Please turn to page 50 in your textbook."
  },
  {
    "id": 1782,
    "english": "pain",
    "turkish": "ağrı, acı",
    "sentence": "He felt a sharp pain in his leg."
  },
  {
    "id": 1783,
    "english": "painful",
    "turkish": "acı verici, sancılı",
    "sentence": "It was a painful experience for everyone involved."
  },
  {
    "id": 1784,
    "english": "paint",
    "turkish": "boya",
    "sentence": "We need to buy some paint to redecorate the room."
  },
  {
    "id": 1785,
    "english": "painter",
    "turkish": "ressam, boyacı",
    "sentence": "He is a famous painter known for his landscapes."
  },
  {
    "id": 1786,
    "english": "painting",
    "turkish": "tablo, boyama",
    "sentence": "She admired the beautiful painting on the wall."
  },
  {
    "id": 1787,
    "english": "pair",
    "turkish": "çift",
    "sentence": "I bought a new pair of shoes."
  },
  {
    "id": 1788,
    "english": "palace",
    "turkish": "saray",
    "sentence": "The queen lives in a grand palace."
  },
  {
    "id": 1789,
    "english": "pale",
    "turkish": "solgun, açık renk",
    "sentence": "Her face turned pale when she heard the news."
  },
  {
    "id": 1790,
    "english": "pan",
    "turkish": "tava",
    "sentence": "Put the onions in the pan and fry them."
  },
  {
    "id": 1791,
    "english": "panel",
    "turkish": "panel",
    "sentence": "The control panel is located on the left side."
  },
  {
    "id": 1792,
    "english": "pants",
    "turkish": "pantolon",
    "sentence": "He was wearing blue pants and a white shirt."
  },
  {
    "id": 1793,
    "english": "paper",
    "turkish": "kağıt",
    "sentence": "Please write your name on this paper."
  },
  {
    "id": 1794,
    "english": "paragraph",
    "turkish": "paragraf",
    "sentence": "Write a short paragraph about your favorite hobby."
  },
  {
    "id": 1795,
    "english": "parent",
    "turkish": "ebeveyn",
    "sentence": "Parents are responsible for their children's well-being."
  },
  {
    "id": 1796,
    "english": "park",
    "turkish": "park",
    "sentence": "We went for a walk in the park."
  },
  {
    "id": 1797,
    "english": "parking",
    "turkish": "park etme, otopark",
    "sentence": "There is no parking available on this street."
  },
  {
    "id": 1798,
    "english": "part",
    "turkish": "parça, bölüm",
    "sentence": "This is an important part of the process."
  },
  {
    "id": 1799,
    "english": "participant",
    "turkish": "katılımcı",
    "sentence": "All participants in the race received a medal."
  },
  {
    "id": 1800,
    "english": "participate",
    "turkish": "katılmak",
    "sentence": "I would like to participate in the discussion about the new project."
  },
  {
    "id": 1801,
    "english": "particular",
    "turkish": "belirli, özel",
    "sentence": "She has a particular interest in ancient history."
  },
  {
    "id": 1802,
    "english": "particularly",
    "turkish": "özellikle",
    "sentence": "The weather was particularly cold this morning."
  },
  {
    "id": 1803,
    "english": "partly",
    "turkish": "kısmen",
    "sentence": "The success of the event was partly due to good planning."
  },
  {
    "id": 1804,
    "english": "partner",
    "turkish": "ortak",
    "sentence": "He is looking for a business partner to start a new company."
  },
  {
    "id": 1805,
    "english": "party",
    "turkish": "parti, topluluk",
    "sentence": "We are invited to a birthday party on Saturday."
  },
  {
    "id": 1806,
    "english": "pass",
    "turkish": "geçmek, başarmak",
    "sentence": "He managed to pass the exam on his first try."
  },
  {
    "id": 1807,
    "english": "passage",
    "turkish": "geçit, bölüm",
    "sentence": "I enjoyed reading the historical passage in the book."
  },
  {
    "id": 1808,
    "english": "passenger",
    "turkish": "yolcu",
    "sentence": "All passengers must fasten their seatbelts before takeoff."
  },
  {
    "id": 1809,
    "english": "passion",
    "turkish": "tutku",
    "sentence": "Her passion for music is evident in her performances."
  },
  {
    "id": 1810,
    "english": "passport",
    "turkish": "pasaport",
    "sentence": "You will need your passport to travel internationally."
  },
  {
    "id": 1811,
    "english": "past",
    "turkish": "geçmiş, ötesinde",
    "sentence": "We should learn from the past but not dwell on it."
  },
  {
    "id": 1812,
    "english": "path",
    "turkish": "yol, patika",
    "sentence": "We walked along a narrow path through the forest."
  },
  {
    "id": 1813,
    "english": "patient",
    "turkish": "hasta, sabırlı",
    "sentence": "The doctor asked the patient to wait in the room."
  },
  {
    "id": 1814,
    "english": "pattern",
    "turkish": "örüntü, desen",
    "sentence": "The fabric had a beautiful floral pattern."
  },
  {
    "id": 1815,
    "english": "pay",
    "turkish": "ödemek",
    "sentence": "You need to pay for your groceries at the checkout."
  },
  {
    "id": 1816,
    "english": "payment",
    "turkish": "ödeme",
    "sentence": "The payment for the service is due by the end of the month."
  },
  {
    "id": 1817,
    "english": "peace",
    "turkish": "barış",
    "sentence": "The country is striving for peace and stability."
  },
  {
    "id": 1818,
    "english": "peaceful",
    "turkish": "huzurlu, barışçıl",
    "sentence": "The small village was a peaceful place to live."
  },
  {
    "id": 1819,
    "english": "pen",
    "turkish": "kalem",
    "sentence": "Please use a blue pen to fill out this form."
  },
  {
    "id": 1820,
    "english": "pencil",
    "turkish": "kurşun kalem",
    "sentence": "I need a pencil to draw the sketch."
  },
  {
    "id": 1821,
    "english": "penny",
    "turkish": "kuruş (değersiz para)",
    "sentence": "He found a penny on the street and decided to keep it."
  },
  {
    "id": 1822,
    "english": "people",
    "turkish": "insanlar",
    "sentence": "Many people gathered to watch the parade."
  },
  {
    "id": 1823,
    "english": "pepper",
    "turkish": "biber",
    "sentence": "Add some black pepper to season the soup."
  },
  {
    "id": 1824,
    "english": "per",
    "turkish": "her bir, başına",
    "sentence": "The speed limit is 60 kilometers per hour."
  },
  {
    "id": 1825,
    "english": "percentage",
    "turkish": "yüzde",
    "sentence": "What percentage of the population owns a smartphone?"
  },
  {
    "id": 1826,
    "english": "perfect",
    "turkish": "mükemmel",
    "sentence": "This is the perfect opportunity to start your new career."
  },
  {
    "id": 1827,
    "english": "perfectly",
    "turkish": "mükemmel bir şekilde",
    "sentence": "She explained the complex concept perfectly."
  },
  {
    "id": 1828,
    "english": "perform",
    "turkish": "performans sergilemek, yapmak",
    "sentence": "The actors will perform a new play next week."
  },
  {
    "id": 1829,
    "english": "performance",
    "turkish": "performans, gösteri",
    "sentence": "The audience applauded the singer's stunning performance."
  },
  {
    "id": 1830,
    "english": "perhaps",
    "turkish": "belki",
    "sentence": "Perhaps we should go to the park later today."
  },
  {
    "id": 1831,
    "english": "period",
    "turkish": "dönem, periyot",
    "sentence": "The Renaissance was a significant period in art history."
  },
  {
    "id": 1832,
    "english": "permanent",
    "turkish": "kalıcı",
    "sentence": "The company is looking for a permanent solution to the problem."
  },
  {
    "id": 1833,
    "english": "permission",
    "turkish": "izin",
    "sentence": "You need permission from your parents to go on the trip."
  },
  {
    "id": 1834,
    "english": "permit",
    "turkish": "izin vermek",
    "sentence": "The manager will permit us to leave early today."
  },
  {
    "id": 1835,
    "english": "person",
    "turkish": "kişi",
    "sentence": "Each person in the group has a different skill."
  },
  {
    "id": 1836,
    "english": "personal",
    "turkish": "kişisel",
    "sentence": "Please keep your personal belongings safe."
  },
  {
    "id": 1837,
    "english": "personality",
    "turkish": "kişilik",
    "sentence": "He has a friendly and outgoing personality."
  },
  {
    "id": 1838,
    "english": "personally",
    "turkish": "kişisel olarak",
    "sentence": "Personally, I think that's a great idea."
  },
  {
    "id": 1839,
    "english": "perspective",
    "turkish": "bakış açısı",
    "sentence": "Try to see the situation from her perspective."
  },
  {
    "id": 1840,
    "english": "persuade",
    "turkish": "ikna etmek",
    "sentence": "It was difficult to persuade him to change his mind."
  },
  {
    "id": 1841,
    "english": "pet",
    "turkish": "evcil hayvan",
    "sentence": "Many families have a pet, like a dog or a cat."
  },
  {
    "id": 1842,
    "english": "phase",
    "turkish": "aşama, evre",
    "sentence": "The project is currently in its initial phase."
  },
  {
    "id": 1843,
    "english": "phenomenon",
    "turkish": "olgu, fenomen",
    "sentence": "The Northern Lights are a beautiful natural phenomenon."
  },
  {
    "id": 1844,
    "english": "philosophy",
    "turkish": "felsefe",
    "sentence": "He is studying philosophy at university."
  },
  {
    "id": 1845,
    "english": "phone",
    "turkish": "telefon",
    "sentence": "Can you please answer the phone?"
  },
  {
    "id": 1846,
    "english": "photo",
    "turkish": "fotoğraf",
    "sentence": "I took a photo of the beautiful sunset."
  },
  {
    "id": 1847,
    "english": "photograph",
    "turkish": "fotoğraf",
    "sentence": "The old photograph brought back many memories."
  },
  {
    "id": 1848,
    "english": "photographer",
    "turkish": "fotoğrafçı",
    "sentence": "The photographer captured the perfect moment."
  },
  {
    "id": 1849,
    "english": "photography",
    "turkish": "fotoğrafçılık",
    "sentence": "She has a great talent for photography."
  },
  {
    "id": 1850,
    "english": "phrase",
    "turkish": "ibare, deyim",
    "sentence": "The teacher explained the meaning of the difficult phrase in the sentence."
  },
  {
    "id": 1851,
    "english": "physical",
    "turkish": "fiziksel, bedensel",
    "sentence": "Regular physical exercise is important for a healthy body."
  },
  {
    "id": 1852,
    "english": "physics",
    "turkish": "fizik",
    "sentence": "She is studying physics at university because she loves understanding how things work."
  },
  {
    "id": 1853,
    "english": "piano",
    "turkish": "piyano",
    "sentence": "He learned to play the piano when he was very young."
  },
  {
    "id": 1854,
    "english": "pick",
    "turkish": "seçmek, toplamak",
    "sentence": "Can you pick out the red apples from the basket?"
  },
  {
    "id": 1855,
    "english": "picture",
    "turkish": "resim, fotoğraf",
    "sentence": "I took a beautiful picture of the sunset."
  },
  {
    "id": 1856,
    "english": "piece",
    "turkish": "parça",
    "sentence": "Would you like another piece of cake?"
  },
  {
    "id": 1857,
    "english": "pig",
    "turkish": "domuz",
    "sentence": "The farmer kept several pigs on his land."
  },
  {
    "id": 1858,
    "english": "pile",
    "turkish": "yığın, küme",
    "sentence": "He made a large pile of books on his desk."
  },
  {
    "id": 1859,
    "english": "pilot",
    "turkish": "pilot",
    "sentence": "The pilot safely landed the airplane despite the bad weather."
  },
  {
    "id": 1860,
    "english": "pin",
    "turkish": "iğne, raptiye",
    "sentence": "Please pin this notice to the board."
  },
  {
    "id": 1861,
    "english": "pink",
    "turkish": "pembe",
    "sentence": "Her favorite color is pink, especially for dresses."
  },
  {
    "id": 1862,
    "english": "pipe",
    "turkish": "boru",
    "sentence": "The plumber fixed the leaking water pipe."
  },
  {
    "id": 1863,
    "english": "pitch",
    "turkish": "saha (spor), ton (ses)",
    "sentence": "The football players ran onto the green pitch."
  },
  {
    "id": 1864,
    "english": "place",
    "turkish": "yer, mekan",
    "sentence": "This is a lovely place to visit during the summer."
  },
  {
    "id": 1865,
    "english": "plain",
    "turkish": "düz, sade, açık",
    "sentence": "She prefers plain clothes without too many decorations."
  },
  {
    "id": 1866,
    "english": "plan",
    "turkish": "plan, tasarı",
    "sentence": "We need to make a plan for our holiday trip."
  },
  {
    "id": 1867,
    "english": "plane",
    "turkish": "uçak, düzlem",
    "sentence": "We will travel to London by plane next week."
  },
  {
    "id": 1868,
    "english": "planet",
    "turkish": "gezegen",
    "sentence": "Earth is the third planet from the Sun."
  },
  {
    "id": 1869,
    "english": "planning",
    "turkish": "planlama",
    "sentence": "Good planning is essential for a successful project."
  },
  {
    "id": 1870,
    "english": "plant",
    "turkish": "bitki, fabrika",
    "sentence": "I bought a small plant for my office desk."
  },
  {
    "id": 1871,
    "english": "plastic",
    "turkish": "plastik",
    "sentence": "Many water bottles are made of plastic."
  },
  {
    "id": 1872,
    "english": "plate",
    "turkish": "tabak",
    "sentence": "Please set the table with a plate for each person."
  },
  {
    "id": 1873,
    "english": "platform",
    "turkish": "platform, peron",
    "sentence": "We waited on the train platform for our departure."
  },
  {
    "id": 1874,
    "english": "play",
    "turkish": "oynamak, çalmak",
    "sentence": "Children love to play outside in the park."
  },
  {
    "id": 1875,
    "english": "player",
    "turkish": "oyuncu, sporcu",
    "sentence": "He is a talented football player."
  },
  {
    "id": 1876,
    "english": "pleasant",
    "turkish": "hoş, güzel",
    "sentence": "We had a pleasant evening with friends."
  },
  {
    "id": 1877,
    "english": "pleased",
    "turkish": "memnun",
    "sentence": "She was very pleased with her exam results."
  },
  {
    "id": 1878,
    "english": "pleasure",
    "turkish": "zevk, mutluluk",
    "sentence": "It was a pleasure meeting you."
  },
  {
    "id": 1879,
    "english": "plenty",
    "turkish": "bolluk, çok",
    "sentence": "There is plenty of food for everyone."
  },
  {
    "id": 1880,
    "english": "plot",
    "turkish": "konu (hikaye), parsel",
    "sentence": "The plot of the book was very exciting and unpredictable."
  },
  {
    "id": 1881,
    "english": "pocket",
    "turkish": "cep",
    "sentence": "He found some coins in his coat pocket."
  },
  {
    "id": 1882,
    "english": "poem",
    "turkish": "şiir",
    "sentence": "He wrote a beautiful poem about nature."
  },
  {
    "id": 1883,
    "english": "poet",
    "turkish": "şair",
    "sentence": "Shakespeare is one of the most famous poets in English literature."
  },
  {
    "id": 1884,
    "english": "poetry",
    "turkish": "şiir sanatı, şiirler",
    "sentence": "She enjoys reading poetry in her free time."
  },
  {
    "id": 1885,
    "english": "point",
    "turkish": "nokta, amaç, fikir",
    "sentence": "The main point of his speech was about environmental protection."
  },
  {
    "id": 1886,
    "english": "pointed",
    "turkish": "sivri, belirgin",
    "sentence": "The story had a pointed moral lesson for the readers."
  },
  {
    "id": 1887,
    "english": "poison",
    "turkish": "zehir",
    "sentence": "This chemical is a dangerous poison and should be handled with care."
  },
  {
    "id": 1888,
    "english": "poisonous",
    "turkish": "zehirli",
    "sentence": "Some mushrooms are poisonous and should not be eaten."
  },
  {
    "id": 1889,
    "english": "police",
    "turkish": "polis",
    "sentence": "The police are investigating the crime."
  },
  {
    "id": 1890,
    "english": "policeman",
    "turkish": "polis memuru",
    "sentence": "A policeman directed traffic at the busy intersection."
  },
  {
    "id": 1891,
    "english": "policy",
    "turkish": "politika, ilke",
    "sentence": "The company has a clear policy on employee conduct."
  },
  {
    "id": 1892,
    "english": "polite",
    "turkish": "kibar, nazik",
    "sentence": "It is important to be polite to everyone you meet."
  },
  {
    "id": 1893,
    "english": "political",
    "turkish": "politik, siyasi",
    "sentence": "The two countries have a long history of political cooperation."
  },
  {
    "id": 1894,
    "english": "politician",
    "turkish": "siyasetçi",
    "sentence": "The politician gave a speech about his plans for the future."
  },
  {
    "id": 1895,
    "english": "politics",
    "turkish": "siyaset",
    "sentence": "Many people are interested in current politics and world events."
  },
  {
    "id": 1896,
    "english": "pollution",
    "turkish": "kirlilik",
    "sentence": "Air pollution is a serious problem in many large cities."
  },
  {
    "id": 1897,
    "english": "pool",
    "turkish": "havuz, gölet",
    "sentence": "We spent the afternoon swimming in the outdoor pool."
  },
  {
    "id": 1898,
    "english": "poor",
    "turkish": "fakir, yoksul, yetersiz",
    "sentence": "The government is trying to help poor families with financial aid."
  },
  {
    "id": 1899,
    "english": "pop",
    "turkish": "patlama sesi, popüler (müzik)",
    "sentence": "The balloon went pop with a loud noise."
  },
  {
    "id": 1900,
    "english": "popular",
    "turkish": "popüler",
    "sentence": "That song is very popular with young people."
  },
  {
    "id": 1901,
    "english": "popularity",
    "turkish": "popülerlik",
    "sentence": "Her popularity grew after she won the award."
  },
  {
    "id": 1902,
    "english": "population",
    "turkish": "nüfus",
    "sentence": "The population of this city has increased significantly."
  },
  {
    "id": 1903,
    "english": "port",
    "turkish": "liman",
    "sentence": "The ship arrived at the port in the morning."
  },
  {
    "id": 1904,
    "english": "portrait",
    "turkish": "portre",
    "sentence": "He painted a beautiful portrait of his wife."
  },
  {
    "id": 1905,
    "english": "pose",
    "turkish": "poz vermek",
    "sentence": "The model posed for the photographer."
  },
  {
    "id": 1906,
    "english": "position",
    "turkish": "pozisyon",
    "sentence": "She got a new job in a good position."
  },
  {
    "id": 1907,
    "english": "positive",
    "turkish": "olumlu",
    "sentence": "We received a positive response to our proposal."
  },
  {
    "id": 1908,
    "english": "possess",
    "turkish": "sahip olmak",
    "sentence": "She possesses great talent as a musician."
  },
  {
    "id": 1909,
    "english": "possession",
    "turkish": "mülkiyet",
    "sentence": "He lost all his possessions in the fire."
  },
  {
    "id": 1910,
    "english": "possibility",
    "turkish": "olasılık",
    "sentence": "There is a possibility of rain tomorrow."
  },
  {
    "id": 1911,
    "english": "possible",
    "turkish": "mümkün",
    "sentence": "Is it possible to finish the work by Friday?"
  },
  {
    "id": 1912,
    "english": "possibly",
    "turkish": "muhtemelen",
    "sentence": "He might possibly be late for the meeting."
  },
  {
    "id": 1913,
    "english": "post",
    "turkish": "posta",
    "sentence": "I received a letter by post this morning."
  },
  {
    "id": 1914,
    "english": "poster",
    "turkish": "poster",
    "sentence": "They hung a large poster of the band on their wall."
  },
  {
    "id": 1915,
    "english": "pot",
    "turkish": "tencere",
    "sentence": "She cooked soup in a large pot."
  },
  {
    "id": 1916,
    "english": "potato",
    "turkish": "patates",
    "sentence": "We ate baked potato with dinner."
  },
  {
    "id": 1917,
    "english": "potential",
    "turkish": "potansiyel",
    "sentence": "He has a lot of potential to become a great leader."
  },
  {
    "id": 1918,
    "english": "pound",
    "turkish": "kilo (İngiliz para birimi veya ağırlık ölçüsü)",
    "sentence": "The bag of flour costs five pounds."
  },
  {
    "id": 1919,
    "english": "pour",
    "turkish": "dökmek",
    "sentence": "Please pour me a cup of tea."
  },
  {
    "id": 1920,
    "english": "poverty",
    "turkish": "yoksulluk",
    "sentence": "The government is trying to reduce poverty."
  },
  {
    "id": 1921,
    "english": "powder",
    "turkish": "toz",
    "sentence": "She used face powder to finish her makeup."
  },
  {
    "id": 1922,
    "english": "power",
    "turkish": "güç",
    "sentence": "The company has a lot of political power."
  },
  {
    "id": 1923,
    "english": "powerful",
    "turkish": "güçlü",
    "sentence": "He is a very powerful speaker."
  },
  {
    "id": 1924,
    "english": "practical",
    "turkish": "pratik",
    "sentence": "This is a very practical solution to the problem."
  },
  {
    "id": 1925,
    "english": "practice",
    "turkish": "pratik yapmak",
    "sentence": "She needs more practice to improve her English."
  },
  {
    "id": 1926,
    "english": "praise",
    "turkish": "övgü",
    "sentence": "The teacher gave her students a lot of praise."
  },
  {
    "id": 1927,
    "english": "pray",
    "turkish": "dua etmek",
    "sentence": "Many people pray every day."
  },
  {
    "id": 1928,
    "english": "prayer",
    "turkish": "dua",
    "sentence": "He offered a silent prayer for his family."
  },
  {
    "id": 1929,
    "english": "predict",
    "turkish": "tahmin etmek",
    "sentence": "It is difficult to predict the weather accurately."
  },
  {
    "id": 1930,
    "english": "prediction",
    "turkish": "tahmin",
    "sentence": "The economic prediction for next year is not very good."
  },
  {
    "id": 1931,
    "english": "prefer",
    "turkish": "tercih etmek",
    "sentence": "I prefer coffee to tea."
  },
  {
    "id": 1932,
    "english": "pregnant",
    "turkish": "hamile",
    "sentence": "She is six months pregnant."
  },
  {
    "id": 1933,
    "english": "preparation",
    "turkish": "hazırlık",
    "sentence": "The preparations for the party are almost complete."
  },
  {
    "id": 1934,
    "english": "prepare",
    "turkish": "hazırlamak",
    "sentence": "We need to prepare for the exam."
  },
  {
    "id": 1935,
    "english": "prepared",
    "turkish": "hazırlanmış",
    "sentence": "He was well prepared for the interview."
  },
  {
    "id": 1936,
    "english": "presence",
    "turkish": "varlık",
    "sentence": "His presence in the room made everyone feel comfortable."
  },
  {
    "id": 1937,
    "english": "present",
    "turkish": "hediye / mevcut",
    "sentence": "She received a beautiful present for her birthday. / He is present at the meeting."
  },
  {
    "id": 1938,
    "english": "presentation",
    "turkish": "sunum",
    "sentence": "The presentation was very informative."
  },
  {
    "id": 1939,
    "english": "preserve",
    "turkish": "korumak",
    "sentence": "We must preserve our natural environment."
  },
  {
    "id": 1940,
    "english": "president",
    "turkish": "başkan",
    "sentence": "The president will give a speech tonight."
  },
  {
    "id": 1941,
    "english": "press",
    "turkish": "baskı",
    "sentence": "The newspaper press is an important part of democracy."
  },
  {
    "id": 1942,
    "english": "pressure",
    "turkish": "baskı",
    "sentence": "He felt a lot of pressure to succeed."
  },
  {
    "id": 1943,
    "english": "pretend",
    "turkish": "rol yapmak",
    "sentence": "Children like to pretend they are superheroes."
  },
  {
    "id": 1944,
    "english": "pretty",
    "turkish": "güzel",
    "sentence": "She is a pretty girl with long hair."
  },
  {
    "id": 1945,
    "english": "prevent",
    "turkish": "önlemek",
    "sentence": "We should take steps to prevent pollution."
  },
  {
    "id": 1946,
    "english": "previous",
    "turkish": "önceki",
    "sentence": "This is my previous address."
  },
  {
    "id": 1947,
    "english": "previously",
    "turkish": "önceden",
    "sentence": "I have lived in this city previously."
  },
  {
    "id": 1948,
    "english": "price",
    "turkish": "fiyat",
    "sentence": "The price of this book is too high."
  },
  {
    "id": 1949,
    "english": "priest",
    "turkish": "rahip",
    "sentence": "The priest gave a sermon at the church."
  },
  {
    "id": 1950,
    "english": "primary",
    "turkish": "birincil",
    "sentence": "The primary goal of this meeting is to discuss the budget."
  },
  {
    "id": 1951,
    "english": "prime",
    "turkish": "başlıca, ana",
    "sentence": "This is a prime example of excellent craftsmanship."
  },
  {
    "id": 1952,
    "english": "prince",
    "turkish": "prens",
    "sentence": "The prince was known for his bravery and kindness."
  },
  {
    "id": 1953,
    "english": "princess",
    "turkish": "prenses",
    "sentence": "The princess lived in a beautiful castle by the sea."
  },
  {
    "id": 1954,
    "english": "principal",
    "turkish": "ana, müdür",
    "sentence": "The principal reason for the delay was bad weather."
  },
  {
    "id": 1955,
    "english": "principle",
    "turkish": "ilke",
    "sentence": "Honesty is a guiding principle in his life."
  },
  {
    "id": 1956,
    "english": "print",
    "turkish": "basmak",
    "sentence": "Can you print this document for me?"
  },
  {
    "id": 1957,
    "english": "printer",
    "turkish": "yazıcı",
    "sentence": "The printer is out of ink, so we need to buy more."
  },
  {
    "id": 1958,
    "english": "printing",
    "turkish": "baskı",
    "sentence": "The new edition of the book is ready for printing."
  },
  {
    "id": 1959,
    "english": "priority",
    "turkish": "öncelik",
    "sentence": "My priority is to finish this project on time."
  },
  {
    "id": 1960,
    "english": "prison",
    "turkish": "hapishane",
    "sentence": "He was sent to prison for his crimes."
  },
  {
    "id": 1961,
    "english": "prisoner",
    "turkish": "mahkum",
    "sentence": "The prisoner tried to escape from jail."
  },
  {
    "id": 1962,
    "english": "privacy",
    "turkish": "mahremiyet",
    "sentence": "People value their privacy and don't like to be disturbed."
  },
  {
    "id": 1963,
    "english": "private",
    "turkish": "özel",
    "sentence": "She has a private collection of antique coins."
  },
  {
    "id": 1964,
    "english": "prize",
    "turkish": "ödül",
    "sentence": "She won first prize in the science competition."
  },
  {
    "id": 1965,
    "english": "probably",
    "turkish": "muhtemelen",
    "sentence": "It will probably rain tomorrow, so take an umbrella."
  },
  {
    "id": 1966,
    "english": "problem",
    "turkish": "sorun",
    "sentence": "We need to find a solution to this problem."
  },
  {
    "id": 1967,
    "english": "procedure",
    "turkish": "prosedür",
    "sentence": "Follow the procedure carefully to avoid mistakes."
  },
  {
    "id": 1968,
    "english": "process",
    "turkish": "süreç",
    "sentence": "The manufacturing process takes several days."
  },
  {
    "id": 1969,
    "english": "produce",
    "turkish": "üretmek",
    "sentence": "This factory produces high-quality furniture."
  },
  {
    "id": 1970,
    "english": "producer",
    "turkish": "yapımcı, üretici",
    "sentence": "He is a well-known film producer."
  },
  {
    "id": 1971,
    "english": "product",
    "turkish": "ürün",
    "sentence": "This is a new product from our company."
  },
  {
    "id": 1972,
    "english": "production",
    "turkish": "üretim",
    "sentence": "The production of cars has increased this year."
  },
  {
    "id": 1973,
    "english": "profession",
    "turkish": "meslek",
    "sentence": "Teaching is a rewarding profession."
  },
  {
    "id": 1974,
    "english": "professional",
    "turkish": "profesyonel",
    "sentence": "He is a professional athlete who competes internationally."
  },
  {
    "id": 1975,
    "english": "professor",
    "turkish": "profesör",
    "sentence": "My professor gave us a very interesting lecture."
  },
  {
    "id": 1976,
    "english": "profile",
    "turkish": "profil",
    "sentence": "She created a professional profile on the social media site."
  },
  {
    "id": 1977,
    "english": "profit",
    "turkish": "kar",
    "sentence": "The company made a significant profit last quarter."
  },
  {
    "id": 1978,
    "english": "program",
    "turkish": "program",
    "sentence": "The TV program starts at 8 PM."
  },
  {
    "id": 1979,
    "english": "progress",
    "turkish": "ilerleme",
    "sentence": "We have made good progress on the project."
  },
  {
    "id": 1980,
    "english": "project",
    "turkish": "proje",
    "sentence": "The students worked hard on their school project."
  },
  {
    "id": 1981,
    "english": "promise",
    "turkish": "söz vermek",
    "sentence": "He promised to call me as soon as he arrived."
  },
  {
    "id": 1982,
    "english": "promote",
    "turkish": "tanıtmak, terfi ettirmek",
    "sentence": "The company is launching a new campaign to promote its products."
  },
  {
    "id": 1983,
    "english": "pronounce",
    "turkish": "telaffuz etmek",
    "sentence": "How do you pronounce this word?"
  },
  {
    "id": 1984,
    "english": "proof",
    "turkish": "kanıt",
    "sentence": "They need more proof to convince the jury."
  },
  {
    "id": 1985,
    "english": "proper",
    "turkish": "uygun, doğru",
    "sentence": "Make sure you wear proper attire for the interview."
  },
  {
    "id": 1986,
    "english": "properly",
    "turkish": "düzgün bir şekilde",
    "sentence": "Please complete the form properly."
  },
  {
    "id": 1987,
    "english": "property",
    "turkish": "mülk",
    "sentence": "He owns a large piece of property outside the city."
  },
  {
    "id": 1988,
    "english": "proposal",
    "turkish": "teklif",
    "sentence": "He made a marriage proposal to his girlfriend."
  },
  {
    "id": 1989,
    "english": "propose",
    "turkish": "teklif etmek",
    "sentence": "I propose we start the meeting now."
  },
  {
    "id": 1990,
    "english": "prospect",
    "turkish": "beklenti, olasılık",
    "sentence": "The prospect of a new job is exciting."
  },
  {
    "id": 1991,
    "english": "protect",
    "turkish": "korumak",
    "sentence": "We must protect the environment for future generations."
  },
  {
    "id": 1992,
    "english": "protection",
    "turkish": "koruma",
    "sentence": "The helmet provides protection for your head."
  },
  {
    "id": 1993,
    "english": "protest",
    "turkish": "protesto etmek",
    "sentence": "The workers decided to protest against the unfair wages."
  },
  {
    "id": 1994,
    "english": "proud",
    "turkish": "gururlu",
    "sentence": "She was very proud of her achievements."
  },
  {
    "id": 1995,
    "english": "prove",
    "turkish": "kanıtlamak",
    "sentence": "Can you prove that you were not there?"
  },
  {
    "id": 1996,
    "english": "provide",
    "turkish": "sağlamak",
    "sentence": "The organization will provide food and shelter for the homeless."
  },
  {
    "id": 1997,
    "english": "psychologist",
    "turkish": "psikolog",
    "sentence": "He decided to see a psychologist to discuss his feelings."
  },
  {
    "id": 1998,
    "english": "psychology",
    "turkish": "psikoloji",
    "sentence": "She is studying psychology at university."
  },
  {
    "id": 1999,
    "english": "public",
    "turkish": "halk, kamu",
    "sentence": "The park is open to the public every day."
  },
  {
    "id": 2000,
    "english": "publication",
    "turkish": "yayın",
    "sentence": "The company announced the publication of its annual report."
  },
  {
    "id": 2001,
    "english": "publish",
    "turkish": "yayınlamak",
    "sentence": "They decided to publish their research findings online."
  },
  {
    "id": 2002,
    "english": "pull",
    "turkish": "çekmek",
    "sentence": "Please pull the door open, don't push it."
  },
  {
    "id": 2003,
    "english": "punish",
    "turkish": "cezalandırmak",
    "sentence": "The teacher had to punish the student for misbehaving."
  },
  {
    "id": 2004,
    "english": "punishment",
    "turkish": "ceza",
    "sentence": "The judge decided that the punishment should fit the crime."
  },
  {
    "id": 2005,
    "english": "purchase",
    "turkish": "satın almak",
    "sentence": "I need to purchase some groceries before the store closes."
  },
  {
    "id": 2006,
    "english": "pure",
    "turkish": "saf",
    "sentence": "This water is so pure, it tastes fresh from the spring."
  },
  {
    "id": 2007,
    "english": "purple",
    "turkish": "mor",
    "sentence": "She wore a beautiful purple dress to the party."
  },
  {
    "id": 2008,
    "english": "purpose",
    "turkish": "amaç",
    "sentence": "What is the main purpose of this meeting?"
  },
  {
    "id": 2009,
    "english": "pursue",
    "turkish": "kovalamak, peşinden gitmek",
    "sentence": "He decided to pursue a career in medicine."
  },
  {
    "id": 2010,
    "english": "push",
    "turkish": "itmek",
    "sentence": "You need to push the button to start the machine."
  },
  {
    "id": 2011,
    "english": "put",
    "turkish": "koymak",
    "sentence": "Please put your book back on the shelf."
  },
  {
    "id": 2012,
    "english": "qualification",
    "turkish": "nitelik, yeterlilik",
    "sentence": "A university degree is a common qualification for this job."
  },
  {
    "id": 2013,
    "english": "qualified",
    "turkish": "nitelikli",
    "sentence": "She is a highly qualified doctor with many years of experience."
  },
  {
    "id": 2014,
    "english": "qualify",
    "turkish": "nitelendirmek, hak kazanmak",
    "sentence": "To qualify for the scholarship, you need good grades."
  },
  {
    "id": 2015,
    "english": "quality",
    "turkish": "kalite",
    "sentence": "The quality of this fabric is excellent."
  },
  {
    "id": 2016,
    "english": "quantity",
    "turkish": "miktar",
    "sentence": "We need a large quantity of supplies for the event."
  },
  {
    "id": 2017,
    "english": "quarter",
    "turkish": "çeyrek, üç ay",
    "sentence": "The meeting will start in a quarter of an hour."
  },
  {
    "id": 2018,
    "english": "queen",
    "turkish": "kraliçe",
    "sentence": "The queen addressed the nation on television."
  },
  {
    "id": 2019,
    "english": "question",
    "turkish": "soru",
    "sentence": "Do you have any questions about the presentation?"
  },
  {
    "id": 2020,
    "english": "quick",
    "turkish": "hızlı",
    "sentence": "She made a quick decision and left."
  },
  {
    "id": 2021,
    "english": "quickly",
    "turkish": "hızlıca",
    "sentence": "The ambulance arrived very quickly."
  },
  {
    "id": 2022,
    "english": "quiet",
    "turkish": "sessiz",
    "sentence": "The library is a very quiet place to study."
  },
  {
    "id": 2023,
    "english": "quietly",
    "turkish": "sessizce",
    "sentence": "He spoke quietly so as not to wake the baby."
  },
  {
    "id": 2024,
    "english": "quit",
    "turkish": "bırakmak, istifa etmek",
    "sentence": "He decided to quit his job to travel the world."
  },
  {
    "id": 2025,
    "english": "quite",
    "turkish": "oldukça",
    "sentence": "That's quite an interesting idea."
  },
  {
    "id": 2026,
    "english": "quotation",
    "turkish": "alıntı",
    "sentence": "The essay included several quotations from famous authors."
  },
  {
    "id": 2027,
    "english": "quote",
    "turkish": "alıntılamak",
    "sentence": "Can you quote the exact words from the book?"
  },
  {
    "id": 2028,
    "english": "racing",
    "turkish": "yarış",
    "sentence": "He enjoys watching car racing on the weekends."
  },
  {
    "id": 2029,
    "english": "radio",
    "turkish": "radyo",
    "sentence": "I listen to the radio while I'm driving to work."
  },
  {
    "id": 2030,
    "english": "railroad",
    "turkish": "demiryolu",
    "sentence": "The train travels on the railroad tracks."
  },
  {
    "id": 2031,
    "english": "rain",
    "turkish": "yağmur",
    "sentence": "It looks like it's going to rain today."
  },
  {
    "id": 2032,
    "english": "raise",
    "turkish": "yükseltmek, artırmak",
    "sentence": "They decided to raise the price of the product."
  },
  {
    "id": 2033,
    "english": "range",
    "turkish": "menzil, aralık",
    "sentence": "The store has a wide range of products."
  },
  {
    "id": 2034,
    "english": "rank",
    "turkish": "sıralama",
    "sentence": "The company's rank in the industry improved this year."
  },
  {
    "id": 2035,
    "english": "rapid",
    "turkish": "hızlı",
    "sentence": "There has been a rapid increase in online shopping."
  },
  {
    "id": 2036,
    "english": "rapidly",
    "turkish": "hızla",
    "sentence": "The population of the city grew rapidly."
  },
  {
    "id": 2037,
    "english": "rare",
    "turkish": "nadide, nadir",
    "sentence": "This type of bird is very rare in this region."
  },
  {
    "id": 2038,
    "english": "rarely",
    "turkish": "nadiren",
    "sentence": "He rarely eats fast food."
  },
  {
    "id": 2039,
    "english": "rate",
    "turkish": "oran",
    "sentence": "The unemployment rate has decreased."
  },
  {
    "id": 2040,
    "english": "rather",
    "turkish": "oldukça, daha ziyade",
    "sentence": "It's rather cold outside today."
  },
  {
    "id": 2041,
    "english": "raw",
    "turkish": "çiğ",
    "sentence": "We ate raw vegetables with hummus."
  },
  {
    "id": 2042,
    "english": "reach",
    "turkish": "ulaşmak",
    "sentence": "I can't reach the top shelf."
  },
  {
    "id": 2043,
    "english": "react",
    "turkish": "tepki vermek",
    "sentence": "How did he react to the news?"
  },
  {
    "id": 2044,
    "english": "reaction",
    "turkish": "tepki",
    "sentence": "Her reaction was one of surprise."
  },
  {
    "id": 2045,
    "english": "read",
    "turkish": "okumak",
    "sentence": "I like to read books before I go to sleep."
  },
  {
    "id": 2046,
    "english": "reader",
    "turkish": "okuyucu",
    "sentence": "He is a regular reader of this newspaper."
  },
  {
    "id": 2047,
    "english": "reading",
    "turkish": "okuma",
    "sentence": "Reading is a great way to improve your vocabulary."
  },
  {
    "id": 2048,
    "english": "ready",
    "turkish": "hazır",
    "sentence": "Are you ready to go?"
  },
  {
    "id": 2049,
    "english": "real",
    "turkish": "gerçek",
    "sentence": "This is a real diamond, not a fake one."
  },
  {
    "id": 2050,
    "english": "realistic",
    "turkish": "gerçekçi",
    "sentence": "It's important to have realistic expectations about your career goals."
  },
  {
    "id": 2051,
    "english": "reality",
    "turkish": "gerçek",
    "sentence": "Sometimes the reality of a situation is different from how you imagine it."
  },
  {
    "id": 2052,
    "english": "realize",
    "turkish": "farkına varmak, anlamak",
    "sentence": "I didn't realize how late it was until I looked at my watch."
  },
  {
    "id": 2053,
    "english": "really",
    "turkish": "gerçekten",
    "sentence": "That was a really interesting movie. I enjoyed it a lot."
  },
  {
    "id": 2054,
    "english": "reason",
    "turkish": "sebep, neden",
    "sentence": "Can you tell me the reason why you were late?"
  },
  {
    "id": 2055,
    "english": "reasonable",
    "turkish": "makul, mantıklı",
    "sentence": "The price of the hotel room was very reasonable for the city."
  },
  {
    "id": 2056,
    "english": "recall",
    "turkish": "hatırlamak",
    "sentence": "I can't recall where I put my keys this morning."
  },
  {
    "id": 2057,
    "english": "receipt",
    "turkish": "fiş, makbuz",
    "sentence": "Keep your receipt in case you need to return the item."
  },
  {
    "id": 2058,
    "english": "receive",
    "turkish": "almak",
    "sentence": "I was happy to receive a letter from my old friend."
  },
  {
    "id": 2059,
    "english": "recent",
    "turkish": "yakın zamanda olmuş, yeni",
    "sentence": "Have you seen any recent news about the project?"
  },
  {
    "id": 2060,
    "english": "recently",
    "turkish": "yakın zamanda, geçenlerde",
    "sentence": "She has been very busy recently with her new job."
  },
  {
    "id": 2061,
    "english": "reception",
    "turkish": "resepsiyon, karşılama",
    "sentence": "The hotel reception was very helpful and friendly."
  },
  {
    "id": 2062,
    "english": "recipe",
    "turkish": "tarif",
    "sentence": "I found a delicious recipe for chocolate cake online."
  },
  {
    "id": 2063,
    "english": "recognize",
    "turkish": "tanımak, fark etmek",
    "sentence": "I didn't recognize him at first because he had a beard."
  },
  {
    "id": 2064,
    "english": "recommend",
    "turkish": "tavsiye etmek",
    "sentence": "I highly recommend this book; it's one of the best I've read."
  },
  {
    "id": 2065,
    "english": "recommendation",
    "turkish": "tavsiye",
    "sentence": "Do you have any recommendations for good restaurants in this area?"
  },
  {
    "id": 2066,
    "english": "record",
    "turkish": "kayıt, rekor",
    "sentence": "The company keeps a detailed record of all its sales."
  },
  {
    "id": 2067,
    "english": "recording",
    "turkish": "kayıt (ses/görüntü)",
    "sentence": "We listened to a recording of the lecture."
  },
  {
    "id": 2068,
    "english": "recover",
    "turkish": "iyileşmek, geri kazanmak",
    "sentence": "It took him a few weeks to recover from his illness."
  },
  {
    "id": 2069,
    "english": "recycle",
    "turkish": "geri dönüştürmek",
    "sentence": "It's important to recycle paper, plastic, and glass."
  },
  {
    "id": 2070,
    "english": "red",
    "turkish": "kırmızı",
    "sentence": "She was wearing a beautiful red dress to the party."
  },
  {
    "id": 2071,
    "english": "reduce",
    "turkish": "azaltmak",
    "sentence": "We need to find ways to reduce our energy consumption."
  },
  {
    "id": 2072,
    "english": "reduction",
    "turkish": "azalma, indirim",
    "sentence": "There has been a significant reduction in crime rates lately."
  },
  {
    "id": 2073,
    "english": "refer",
    "turkish": "bahsetmek, başvurmak",
    "sentence": "Please refer to the document for more information."
  },
  {
    "id": 2074,
    "english": "reference",
    "turkish": "atıf, referans",
    "sentence": "The article provided several references to previous studies."
  },
  {
    "id": 2075,
    "english": "reflect",
    "turkish": "yansıtmak, düşünmek",
    "sentence": "Take some time to reflect on your goals for the future."
  },
  {
    "id": 2076,
    "english": "refrigerator",
    "turkish": "buzdolabı",
    "sentence": "Please put the milk back in the refrigerator."
  },
  {
    "id": 2077,
    "english": "regard",
    "turkish": "bakmak, saygı duymak",
    "sentence": "I regard him as a good friend."
  },
  {
    "id": 2078,
    "english": "region",
    "turkish": "bölge",
    "sentence": "This region is known for its beautiful mountains."
  },
  {
    "id": 2079,
    "english": "regional",
    "turkish": "bölgesel",
    "sentence": "The festival celebrates regional music and traditions."
  },
  {
    "id": 2080,
    "english": "register",
    "turkish": "kayıt olmak, kaydetmek",
    "sentence": "You need to register online before the deadline."
  },
  {
    "id": 2081,
    "english": "regret",
    "turkish": "pişman olmak",
    "sentence": "I regret not studying harder for the exam."
  },
  {
    "id": 2082,
    "english": "regular",
    "turkish": "düzenli, normal",
    "sentence": "She goes for a regular walk in the park every morning."
  },
  {
    "id": 2083,
    "english": "regularly",
    "turkish": "düzenli olarak",
    "sentence": "We meet regularly to discuss the project's progress."
  },
  {
    "id": 2084,
    "english": "regulation",
    "turkish": "düzenleme, yönetmelik",
    "sentence": "The company must comply with all safety regulations."
  },
  {
    "id": 2085,
    "english": "reject",
    "turkish": "reddetmek",
    "sentence": "The committee decided to reject his proposal."
  },
  {
    "id": 2086,
    "english": "relate",
    "turkish": "ilgili olmak, ilişki kurmak",
    "sentence": "These events are closely related to the economic situation."
  },
  {
    "id": 2087,
    "english": "related",
    "turkish": "ilgili, ilişkili",
    "sentence": "I'm not sure if these two issues are related."
  },
  {
    "id": 2088,
    "english": "relation",
    "turkish": "ilişki",
    "sentence": "The relation between price and quality can be complex."
  },
  {
    "id": 2089,
    "english": "relationship",
    "turkish": "ilişki (insanlar arası)",
    "sentence": "They have a very strong and supportive relationship."
  },
  {
    "id": 2090,
    "english": "relative",
    "turkish": "akraba",
    "sentence": "She's coming to visit with some relatives from abroad."
  },
  {
    "id": 2091,
    "english": "relatively",
    "turkish": "nispeten, göreceli olarak",
    "sentence": "The task was relatively easy, but time-consuming."
  },
  {
    "id": 2092,
    "english": "relax",
    "turkish": "rahatlamak",
    "sentence": "I need to find some time to relax after a long week."
  },
  {
    "id": 2093,
    "english": "relaxed",
    "turkish": "rahatlamış, gevşek",
    "sentence": "He seemed very relaxed and happy during the vacation."
  },
  {
    "id": 2094,
    "english": "relaxing",
    "turkish": "dinlendirici, rahatlatıcı",
    "sentence": "Listening to music is a very relaxing activity for me."
  },
  {
    "id": 2095,
    "english": "release",
    "turkish": "yayınlamak, serbest bırakmak",
    "sentence": "The band will release their new album next month."
  },
  {
    "id": 2096,
    "english": "relevant",
    "turkish": "ilgili, alakalı",
    "sentence": "Please make sure your comments are relevant to the topic."
  },
  {
    "id": 2097,
    "english": "reliable",
    "turkish": "güvenilir",
    "sentence": "He is a reliable employee who always finishes his work on time."
  },
  {
    "id": 2098,
    "english": "relief",
    "turkish": "rahatlama, yardım",
    "sentence": "She felt a great sense of relief when she heard the good news."
  },
  {
    "id": 2099,
    "english": "religion",
    "turkish": "din",
    "sentence": "Many people find comfort and guidance in their religion."
  },
  {
    "id": 2100,
    "english": "religious",
    "turkish": "dini",
    "sentence": "She is a very religious person and goes to church every Sunday."
  },
  {
    "id": 2101,
    "english": "rely",
    "turkish": "güvenmek",
    "sentence": "You can always rely on your friends when you need help."
  },
  {
    "id": 2102,
    "english": "remain",
    "turkish": "kalmak",
    "sentence": "After the party, a few guests decided to remain for a little longer."
  },
  {
    "id": 2103,
    "english": "remark",
    "turkish": "belirtmek, söz",
    "sentence": "He made a funny remark about the weather."
  },
  {
    "id": 2104,
    "english": "remember",
    "turkish": "hatırlamak",
    "sentence": "Please remember to buy milk on your way home."
  },
  {
    "id": 2105,
    "english": "remind",
    "turkish": "hatırlatmak",
    "sentence": "Can you remind me to call my mother later?"
  },
  {
    "id": 2106,
    "english": "remote",
    "turkish": "uzak",
    "sentence": "They lived in a remote village far from any city."
  },
  {
    "id": 2107,
    "english": "remove",
    "turkish": "kaldırmak",
    "sentence": "Please remove your shoes before entering the house."
  },
  {
    "id": 2108,
    "english": "rent",
    "turkish": "kira",
    "sentence": "The rent for this apartment is quite high."
  },
  {
    "id": 2109,
    "english": "repair",
    "turkish": "tamir etmek",
    "sentence": "I need to repair my bicycle before the weekend."
  },
  {
    "id": 2110,
    "english": "repeat",
    "turkish": "tekrarlamak",
    "sentence": "Could you please repeat what you just said? I didn't hear you."
  },
  {
    "id": 2111,
    "english": "repeated",
    "turkish": "tekrarlanan",
    "sentence": "She has made repeated requests for more information."
  },
  {
    "id": 2112,
    "english": "replace",
    "turkish": "değiştirmek",
    "sentence": "You need to replace the old battery with a new one."
  },
  {
    "id": 2113,
    "english": "reply",
    "turkish": "cevap vermek, yanıt",
    "sentence": "She didn't reply to my email yet."
  },
  {
    "id": 2114,
    "english": "report",
    "turkish": "rapor etmek, rapor",
    "sentence": "The police are investigating the incident and will report their findings."
  },
  {
    "id": 2115,
    "english": "reporter",
    "turkish": "muhabir",
    "sentence": "A news reporter interviewed the mayor about the new project."
  },
  {
    "id": 2116,
    "english": "represent",
    "turkish": "temsil etmek",
    "sentence": "The flag represents the country's history and values."
  },
  {
    "id": 2117,
    "english": "representative",
    "turkish": "temsilci",
    "sentence": "A sales representative will contact you shortly."
  },
  {
    "id": 2118,
    "english": "reputation",
    "turkish": "itibar",
    "sentence": "He has a good reputation for being honest and hardworking."
  },
  {
    "id": 2119,
    "english": "request",
    "turkish": "talep etmek, rica",
    "sentence": "I would like to make a request for a day off next week."
  },
  {
    "id": 2120,
    "english": "require",
    "turkish": "gerektirmek",
    "sentence": "This job requires excellent communication skills."
  },
  {
    "id": 2121,
    "english": "requirement",
    "turkish": "gereklilik",
    "sentence": "A valid passport is a requirement for international travel."
  },
  {
    "id": 2122,
    "english": "rescue",
    "turkish": "kurtarmak",
    "sentence": "The firefighters worked quickly to rescue the people from the burning building."
  },
  {
    "id": 2123,
    "english": "research",
    "turkish": "araştırma yapmak, araştırma",
    "sentence": "Scientists are conducting research into new cures for diseases."
  },
  {
    "id": 2124,
    "english": "researcher",
    "turkish": "araştırmacı",
    "sentence": "The researcher published his findings in a scientific journal."
  },
  {
    "id": 2125,
    "english": "reservation",
    "turkish": "rezervasyon",
    "sentence": "We made a reservation at the restaurant for eight o'clock."
  },
  {
    "id": 2126,
    "english": "reserve",
    "turkish": "ayırtmak, rezerv",
    "sentence": "It's wise to reserve a hotel room in advance during peak season."
  },
  {
    "id": 2127,
    "english": "resident",
    "turkish": "sakin, ikamet eden",
    "sentence": "All residents of the town are invited to the community meeting."
  },
  {
    "id": 2128,
    "english": "resist",
    "turkish": "direnmek",
    "sentence": "It's hard to resist the temptation to eat that delicious cake."
  },
  {
    "id": 2129,
    "english": "resolve",
    "turkish": "çözmek, kararlaştırmak",
    "sentence": "We need to find a way to resolve this conflict peacefully."
  },
  {
    "id": 2130,
    "english": "resort",
    "turkish": "tatil köyü, başvurmak",
    "sentence": "They decided to resort to extreme measures when all else failed."
  },
  {
    "id": 2131,
    "english": "resource",
    "turkish": "kaynak",
    "sentence": "Water is a precious natural resource that we must conserve."
  },
  {
    "id": 2132,
    "english": "respect",
    "turkish": "saygı duymak, saygı",
    "sentence": "You should always show respect to your elders."
  },
  {
    "id": 2133,
    "english": "respond",
    "turkish": "cevap vermek, tepki vermek",
    "sentence": "Please respond to the survey questions honestly."
  },
  {
    "id": 2134,
    "english": "response",
    "turkish": "yanıt, tepki",
    "sentence": "The audience gave an enthusiastic response to the performance."
  },
  {
    "id": 2135,
    "english": "responsibility",
    "turkish": "sorumluluk",
    "sentence": "Taking care of your health is a personal responsibility."
  },
  {
    "id": 2136,
    "english": "responsible",
    "turkish": "sorumlu",
    "sentence": "The manager is responsible for the team's success."
  },
  {
    "id": 2137,
    "english": "restaurant",
    "turkish": "restoran",
    "sentence": "We decided to try a new Italian restaurant downtown."
  },
  {
    "id": 2138,
    "english": "result",
    "turkish": "sonuç",
    "sentence": "The experiment had a surprising result."
  },
  {
    "id": 2139,
    "english": "retain",
    "turkish": "tutmak, alıkoymak",
    "sentence": "The company aims to retain its best employees."
  },
  {
    "id": 2140,
    "english": "retire",
    "turkish": "emekli olmak",
    "sentence": "He plans to retire from his job in a few years."
  },
  {
    "id": 2141,
    "english": "retired",
    "turkish": "emekli",
    "sentence": "My retired parents enjoy traveling and spending time with their grandchildren."
  },
  {
    "id": 2142,
    "english": "return",
    "turkish": "geri dönmek, iade etmek, dönüş",
    "sentence": "She will return home after her trip abroad."
  },
  {
    "id": 2143,
    "english": "reveal",
    "turkish": "açığa vurmak, ortaya çıkarmak",
    "sentence": "The documentary revealed hidden facts about the historical event."
  },
  {
    "id": 2144,
    "english": "review",
    "turkish": "gözden geçirmek, inceleme",
    "sentence": "Before the exam, we should review all the chapters."
  },
  {
    "id": 2145,
    "english": "revise",
    "turkish": "gözden geçirmek, düzeltmek",
    "sentence": "You should revise your essay before submitting it."
  },
  {
    "id": 2146,
    "english": "revolution",
    "turkish": "devrim",
    "sentence": "The country went through a period of political revolution."
  },
  {
    "id": 2147,
    "english": "reward",
    "turkish": "ödül",
    "sentence": "Hard work often leads to a great reward."
  },
  {
    "id": 2148,
    "english": "rhythm",
    "turkish": "ritim",
    "sentence": "The music had a catchy rhythm that made everyone want to dance."
  },
  {
    "id": 2149,
    "english": "rice",
    "turkish": "pirinç",
    "sentence": "For dinner, we had chicken with rice and vegetables."
  },
  {
    "id": 2150,
    "english": "rich",
    "turkish": "zengin",
    "sentence": "The wealthy businessman owned many luxurious properties and drove a very rich, powerful car."
  },
  {
    "id": 2151,
    "english": "rid",
    "turkish": "kurtulmak",
    "sentence": "I need to get rid of these old clothes; they're taking up too much space."
  },
  {
    "id": 2152,
    "english": "ride",
    "turkish": "binmek",
    "sentence": "She loves to ride her bicycle through the park on sunny afternoons."
  },
  {
    "id": 2153,
    "english": "right",
    "turkish": "doğru",
    "sentence": "You are absolutely right about the best way to solve this problem."
  },
  {
    "id": 2154,
    "english": "rise",
    "turkish": "yükselmek",
    "sentence": "The sun will rise early tomorrow, so we should wake up to see it."
  },
  {
    "id": 2155,
    "english": "risk",
    "turkish": "risk",
    "sentence": "Investing all your money in one venture is a big risk."
  },
  {
    "id": 2156,
    "english": "river",
    "turkish": "nehir",
    "sentence": "The small boat gently floated down the wide river."
  },
  {
    "id": 2157,
    "english": "road",
    "turkish": "yol",
    "sentence": "Please be careful when crossing the road, especially at night."
  },
  {
    "id": 2158,
    "english": "robot",
    "turkish": "robot",
    "sentence": "The factory uses a robot to assemble the car parts efficiently."
  },
  {
    "id": 2159,
    "english": "role",
    "turkish": "rol",
    "sentence": "She played a key role in organizing the company's annual event."
  },
  {
    "id": 2160,
    "english": "roll",
    "turkish": "yuvarlamak",
    "sentence": "The children love to roll down the grassy hill in the park."
  },
  {
    "id": 2161,
    "english": "romantic",
    "turkish": "romantik",
    "sentence": "They planned a romantic dinner by candlelight for their anniversary."
  },
  {
    "id": 2162,
    "english": "roof",
    "turkish": "çatı",
    "sentence": "The rain was drumming loudly on the roof of the house."
  },
  {
    "id": 2163,
    "english": "room",
    "turkish": "oda",
    "sentence": "The hotel has a spacious room with a beautiful view of the city."
  },
  {
    "id": 2164,
    "english": "root",
    "turkish": "kök",
    "sentence": "The tree's roots were deeply embedded in the soil."
  },
  {
    "id": 2165,
    "english": "rope",
    "turkish": "halat",
    "sentence": "He used a strong rope to tie the package securely."
  },
  {
    "id": 2166,
    "english": "rough",
    "turkish": "sert",
    "sentence": "The sea was very rough, making the boat trip uncomfortable."
  },
  {
    "id": 2167,
    "english": "round",
    "turkish": "yuvarlak",
    "sentence": "She cut the cake into round slices for everyone to share."
  },
  {
    "id": 2168,
    "english": "route",
    "turkish": "rota",
    "sentence": "We took a scenic route through the mountains to reach our destination."
  },
  {
    "id": 2169,
    "english": "routine",
    "turkish": "rutin",
    "sentence": "Waking up early and exercising is part of her daily routine."
  },
  {
    "id": 2170,
    "english": "royal",
    "turkish": "kraliyet",
    "sentence": "The royal family attended the grand ceremony at the palace."
  },
  {
    "id": 2171,
    "english": "rub",
    "turkish": "ovalamak",
    "sentence": "He had to rub the stain on his shirt with soap and water."
  },
  {
    "id": 2172,
    "english": "rubber",
    "turkish": "kauçuk",
    "sentence": "The soles of his shoes were made of durable rubber."
  },
  {
    "id": 2173,
    "english": "rude",
    "turkish": "kaba",
    "sentence": "It is considered rude to interrupt someone while they are speaking."
  },
  {
    "id": 2174,
    "english": "rule",
    "turkish": "kural",
    "sentence": "One important rule in this game is to play fair."
  },
  {
    "id": 2175,
    "english": "run",
    "turkish": "koşmak",
    "sentence": "She decided to run in the marathon to challenge herself."
  },
  {
    "id": 2176,
    "english": "runner",
    "turkish": "koşucu",
    "sentence": "The lead runner was nearing the finish line of the race."
  },
  {
    "id": 2177,
    "english": "running",
    "turkish": "koşma",
    "sentence": "He enjoys running in the park every morning to stay fit."
  },
  {
    "id": 2178,
    "english": "rural",
    "turkish": "kırsal",
    "sentence": "They moved to a small village in a rural area for a peaceful life."
  },
  {
    "id": 2179,
    "english": "rush",
    "turkish": "acele etmek",
    "sentence": "Don't rush; take your time to complete the task properly."
  },
  {
    "id": 2180,
    "english": "sad",
    "turkish": "üzgün",
    "sentence": "She felt sad when her best friend moved to another country."
  },
  {
    "id": 2181,
    "english": "sadly",
    "turkish": "üzgünce",
    "sentence": "Sadly, the event had to be canceled due to bad weather."
  },
  {
    "id": 2182,
    "english": "safe",
    "turkish": "güvenli",
    "sentence": "It is important to follow safety procedures to stay safe."
  },
  {
    "id": 2183,
    "english": "safety",
    "turkish": "güvenlik",
    "sentence": "The company prioritizes the safety of its employees above all else."
  },
  {
    "id": 2184,
    "english": "sail",
    "turkish": "yelken açmak",
    "sentence": "He dreamed of learning to sail a boat across the ocean."
  },
  {
    "id": 2185,
    "english": "sailing",
    "turkish": "yelkencilik",
    "sentence": "Sailing is a relaxing hobby for those who enjoy being on the water."
  },
  {
    "id": 2186,
    "english": "sailor",
    "turkish": "denizci",
    "sentence": "The experienced sailor navigated the ship through the stormy seas."
  },
  {
    "id": 2187,
    "english": "salad",
    "turkish": "salata",
    "sentence": "For lunch, I'll have a fresh green salad with grilled chicken."
  },
  {
    "id": 2188,
    "english": "salary",
    "turkish": "maaş",
    "sentence": "Her new job comes with a competitive salary and good benefits."
  },
  {
    "id": 2189,
    "english": "sale",
    "turkish": "satış",
    "sentence": "There is a big sale at the department store this weekend."
  },
  {
    "id": 2190,
    "english": "salt",
    "turkish": "tuz",
    "sentence": "Please pass me the salt; this soup needs a little more flavor."
  },
  {
    "id": 2191,
    "english": "same",
    "turkish": "aynı",
    "sentence": "We live on the same street, but in different houses."
  },
  {
    "id": 2192,
    "english": "sample",
    "turkish": "örnek",
    "sentence": "The store offered a free sample of their new perfume."
  },
  {
    "id": 2193,
    "english": "sand",
    "turkish": "kum",
    "sentence": "The children built a large sandcastle on the beach."
  },
  {
    "id": 2194,
    "english": "sandwich",
    "turkish": "sandviç",
    "sentence": "He made himself a quick sandwich for lunch before work."
  },
  {
    "id": 2195,
    "english": "satellite",
    "turkish": "uydu",
    "sentence": "The satellite dish on the roof helps receive television signals."
  },
  {
    "id": 2196,
    "english": "satisfied",
    "turkish": "memnun",
    "sentence": "She was very satisfied with the results of her hard work."
  },
  {
    "id": 2197,
    "english": "satisfy",
    "turkish": "memnun etmek",
    "sentence": "The company aims to satisfy all its customers with excellent service."
  },
  {
    "id": 2198,
    "english": "sauce",
    "turkish": "sos",
    "sentence": "He poured a little tomato sauce over his pasta."
  },
  {
    "id": 2199,
    "english": "save",
    "turkish": "kaydetmek",
    "sentence": "Remember to save your progress in the document before closing it."
  },
  {
    "id": 2200,
    "english": "saving",
    "turkish": "tasarruf",
    "sentence": "She's been saving money for a new car."
  },
  {
    "id": 2201,
    "english": "say",
    "turkish": "demek",
    "sentence": "What did he say about the meeting?"
  },
  {
    "id": 2202,
    "english": "scale",
    "turkish": "ölçek",
    "sentence": "The map has a scale of 1:100,000."
  },
  {
    "id": 2203,
    "english": "scan",
    "turkish": "tarama",
    "sentence": "Please scan the document and email it to me."
  },
  {
    "id": 2204,
    "english": "scared",
    "turkish": "korkmuş",
    "sentence": "I was scared when I heard the loud noise."
  },
  {
    "id": 2205,
    "english": "scary",
    "turkish": "korkutucu",
    "sentence": "That movie was so scary, I couldn't sleep."
  },
  {
    "id": 2206,
    "english": "scene",
    "turkish": "sahne",
    "sentence": "The actors performed the final scene beautifully."
  },
  {
    "id": 2207,
    "english": "schedule",
    "turkish": "program",
    "sentence": "What is your schedule for tomorrow?"
  },
  {
    "id": 2208,
    "english": "school",
    "turkish": "okul",
    "sentence": "The children go to school every day."
  },
  {
    "id": 2209,
    "english": "science",
    "turkish": "bilim",
    "sentence": "She is studying science at university."
  },
  {
    "id": 2210,
    "english": "scientific",
    "turkish": "bilimsel",
    "sentence": "They used a scientific method to test the theory."
  },
  {
    "id": 2211,
    "english": "scientist",
    "turkish": "bilim insanı",
    "sentence": "The scientist discovered a new planet."
  },
  {
    "id": 2212,
    "english": "score",
    "turkish": "puan",
    "sentence": "The team won the game with a score of 3-1."
  },
  {
    "id": 2213,
    "english": "scream",
    "turkish": "çığlık atmak",
    "sentence": "She let out a scream when she saw the spider."
  },
  {
    "id": 2214,
    "english": "screen",
    "turkish": "ekran",
    "sentence": "The movie is playing on a big screen."
  },
  {
    "id": 2215,
    "english": "script",
    "turkish": "senaryo",
    "sentence": "The actors rehearsed their lines from the script."
  },
  {
    "id": 2216,
    "english": "sculpture",
    "turkish": "heykel",
    "sentence": "The museum has a beautiful sculpture by Rodin."
  },
  {
    "id": 2217,
    "english": "sea",
    "turkish": "deniz",
    "sentence": "We spent our vacation by the sea."
  },
  {
    "id": 2218,
    "english": "search",
    "turkish": "arama",
    "sentence": "They are conducting a search for the missing hikers."
  },
  {
    "id": 2219,
    "english": "season",
    "turkish": "mevsim",
    "sentence": "Autumn is my favorite season."
  },
  {
    "id": 2220,
    "english": "seat",
    "turkish": "koltuk",
    "sentence": "Please find your seat in the theater."
  },
  {
    "id": 2221,
    "english": "secondary",
    "turkish": "ikincil",
    "sentence": "He attended a secondary school in the city."
  },
  {
    "id": 2222,
    "english": "secret",
    "turkish": "sır",
    "sentence": "They shared a secret with each other."
  },
  {
    "id": 2223,
    "english": "secretary",
    "turkish": "sekreter",
    "sentence": "The secretary answered the phone and took messages."
  },
  {
    "id": 2224,
    "english": "section",
    "turkish": "bölüm",
    "sentence": "Please turn to the next section of the book."
  },
  {
    "id": 2225,
    "english": "sector",
    "turkish": "sektör",
    "sentence": "The technology sector is growing rapidly."
  },
  {
    "id": 2226,
    "english": "secure",
    "turkish": "güvenli",
    "sentence": "The building is secure and well-guarded."
  },
  {
    "id": 2227,
    "english": "security",
    "turkish": "güvenlik",
    "sentence": "The hotel provides excellent security for its guests."
  },
  {
    "id": 2228,
    "english": "see",
    "turkish": "görmek",
    "sentence": "Can you see the birds in the tree?"
  },
  {
    "id": 2229,
    "english": "seed",
    "turkish": "tohum",
    "sentence": "We planted seeds in the garden."
  },
  {
    "id": 2230,
    "english": "seek",
    "turkish": "aramak",
    "sentence": "He decided to seek professional advice."
  },
  {
    "id": 2231,
    "english": "seem",
    "turkish": "gibi görünmek",
    "sentence": "It seems like a good idea."
  },
  {
    "id": 2232,
    "english": "select",
    "turkish": "seçmek",
    "sentence": "Please select your preferred option from the list."
  },
  {
    "id": 2233,
    "english": "selection",
    "turkish": "seçim",
    "sentence": "They made a good selection of movies for the festival."
  },
  {
    "id": 2234,
    "english": "self",
    "turkish": "benlik",
    "sentence": "She needs to work on her self-confidence."
  },
  {
    "id": 2235,
    "english": "sell",
    "turkish": "satmak",
    "sentence": "They are planning to sell their house."
  },
  {
    "id": 2236,
    "english": "senate",
    "turkish": "senato",
    "sentence": "The bill was passed by the senate."
  },
  {
    "id": 2237,
    "english": "senator",
    "turkish": "senatör",
    "sentence": "The senator gave a speech about the new law."
  },
  {
    "id": 2238,
    "english": "send",
    "turkish": "göndermek",
    "sentence": "Please send me an email."
  },
  {
    "id": 2239,
    "english": "senior",
    "turkish": "üst düzey",
    "sentence": "He is a senior member of the team."
  },
  {
    "id": 2240,
    "english": "sense",
    "turkish": "duyu",
    "sentence": "She has a good sense of humor."
  },
  {
    "id": 2241,
    "english": "sensible",
    "turkish": "akıllıca",
    "sentence": "That was a sensible decision."
  },
  {
    "id": 2242,
    "english": "sensitive",
    "turkish": "hassas",
    "sentence": "She is very sensitive to criticism."
  },
  {
    "id": 2243,
    "english": "sentence",
    "turkish": "cümle",
    "sentence": "He wrote a long sentence."
  },
  {
    "id": 2244,
    "english": "separate",
    "turkish": "ayrı",
    "sentence": "The two rooms are separate."
  },
  {
    "id": 2245,
    "english": "sequence",
    "turkish": "dizi",
    "sentence": "The events happened in a specific sequence."
  },
  {
    "id": 2246,
    "english": "series",
    "turkish": "dizi",
    "sentence": "I watched a new series on Netflix."
  },
  {
    "id": 2247,
    "english": "serious",
    "turkish": "ciddi",
    "sentence": "This is a serious matter."
  },
  {
    "id": 2248,
    "english": "seriously",
    "turkish": "cidden",
    "sentence": "Are you seriously considering that?"
  },
  {
    "id": 2249,
    "english": "servant",
    "turkish": "hizmetçi",
    "sentence": "The rich family had several servants."
  },
  {
    "id": 2250,
    "english": "serve",
    "turkish": "hizmet etmek, servis yapmak",
    "sentence": "The waiter will serve your food in a few minutes."
  },
  {
    "id": 2251,
    "english": "service",
    "turkish": "hizmet, servis",
    "sentence": "The hotel offers excellent customer service."
  },
  {
    "id": 2252,
    "english": "session",
    "turkish": "oturum, ders dönemi",
    "sentence": "We had a productive training session this morning."
  },
  {
    "id": 2253,
    "english": "setting",
    "turkish": "ortam, ayar, mekan",
    "sentence": "The movie has a beautiful natural setting."
  },
  {
    "id": 2254,
    "english": "settle",
    "turkish": "yerleşmek, sakinleşmek, çözmek",
    "sentence": "It took them a while to settle into their new home."
  },
  {
    "id": 2255,
    "english": "severe",
    "turkish": "şiddetli, ciddi, sert",
    "sentence": "The storm caused severe damage to the town."
  },
  {
    "id": 2256,
    "english": "sex",
    "turkish": "cinsiyet, seks",
    "sentence": "The doctor asked about his sexual history."
  },
  {
    "id": 2257,
    "english": "sexual",
    "turkish": "cinsel",
    "sentence": "They discussed issues related to sexual health."
  },
  {
    "id": 2258,
    "english": "shade",
    "turkish": "gölge, ton",
    "sentence": "Let's sit in the shade of that tree."
  },
  {
    "id": 2259,
    "english": "shadow",
    "turkish": "gölge",
    "sentence": "The cat chased its own shadow."
  },
  {
    "id": 2260,
    "english": "shake",
    "turkish": "sallamak, titremek",
    "sentence": "Don't shake the bottle so hard."
  },
  {
    "id": 2261,
    "english": "shallow",
    "turkish": "sığ",
    "sentence": "The water in this part of the lake is very shallow."
  },
  {
    "id": 2262,
    "english": "shame",
    "turkish": "ayıp, utanç",
    "sentence": "He felt a sense of shame after his mistake."
  },
  {
    "id": 2263,
    "english": "shape",
    "turkish": "şekil, biçim",
    "sentence": "The clouds were changing shape in the sky."
  },
  {
    "id": 2264,
    "english": "share",
    "turkish": "paylaşmak",
    "sentence": "It's important to share your feelings with others."
  },
  {
    "id": 2265,
    "english": "sharp",
    "turkish": "keskin, sivri",
    "sentence": "Be careful, the knife is very sharp."
  },
  {
    "id": 2266,
    "english": "she",
    "turkish": "o (kadın)",
    "sentence": "She is a talented musician."
  },
  {
    "id": 2267,
    "english": "sheep",
    "turkish": "koyun",
    "sentence": "The farmer counted his sheep before they went to sleep."
  },
  {
    "id": 2268,
    "english": "sheet",
    "turkish": "çarşaf, sayfa, levha",
    "sentence": "Please change the bed sheets."
  },
  {
    "id": 2269,
    "english": "shelf",
    "turkish": "raf",
    "sentence": "I put the books back on the shelf."
  },
  {
    "id": 2270,
    "english": "shell",
    "turkish": "kabuk, istiridye, mermi",
    "sentence": "We found a beautiful shell on the beach."
  },
  {
    "id": 2271,
    "english": "shelter",
    "turkish": "barınak, sığınak",
    "sentence": "The building offered shelter from the rain."
  },
  {
    "id": 2272,
    "english": "shift",
    "turkish": "değiştirmek, vardiya",
    "sentence": "The company decided to shift its focus to new markets."
  },
  {
    "id": 2273,
    "english": "shine",
    "turkish": "parlamak",
    "sentence": "The sun will shine tomorrow."
  },
  {
    "id": 2274,
    "english": "shiny",
    "turkish": "parlak",
    "sentence": "Her new shoes were very shiny."
  },
  {
    "id": 2275,
    "english": "ship",
    "turkish": "gemi",
    "sentence": "The ship sailed across the ocean."
  },
  {
    "id": 2276,
    "english": "shirt",
    "turkish": "gömlek",
    "sentence": "He was wearing a blue shirt."
  },
  {
    "id": 2277,
    "english": "shock",
    "turkish": "şok, sarsıntı",
    "sentence": "The news came as a complete shock to everyone."
  },
  {
    "id": 2278,
    "english": "shocked",
    "turkish": "şok olmuş",
    "sentence": "She looked shocked when she heard the news."
  },
  {
    "id": 2279,
    "english": "shoe",
    "turkish": "ayakkabı",
    "sentence": "I need to buy a new pair of shoes."
  },
  {
    "id": 2280,
    "english": "shoot",
    "turkish": "ateş etmek, çekmek (fotoğraf)",
    "sentence": "Don't shoot until you see the target."
  },
  {
    "id": 2281,
    "english": "shooting",
    "turkish": "ateş etme, çekim",
    "sentence": "The police are investigating a shooting incident."
  },
  {
    "id": 2282,
    "english": "shop",
    "turkish": "dükkan, mağaza",
    "sentence": "I need to go to the shop to buy some milk."
  },
  {
    "id": 2283,
    "english": "shopping",
    "turkish": "alışveriş",
    "sentence": "We spent the afternoon shopping for presents."
  },
  {
    "id": 2284,
    "english": "short",
    "turkish": "kısa",
    "sentence": "He is a short man."
  },
  {
    "id": 2285,
    "english": "shot",
    "turkish": "atış, enjeksiyon, çekim",
    "sentence": "He took a shot at the basket and scored."
  },
  {
    "id": 2286,
    "english": "shoulder",
    "turkish": "omuz",
    "sentence": "He put his arm around her shoulder."
  },
  {
    "id": 2287,
    "english": "shout",
    "turkish": "bağırmak",
    "sentence": "Don't shout, speak calmly."
  },
  {
    "id": 2288,
    "english": "show",
    "turkish": "göstermek",
    "sentence": "Can you show me how to use this?"
  },
  {
    "id": 2289,
    "english": "shower",
    "turkish": "duş",
    "sentence": "I need to take a shower after the gym."
  },
  {
    "id": 2290,
    "english": "shut",
    "turkish": "kapatmak",
    "sentence": "Please shut the door when you leave."
  },
  {
    "id": 2291,
    "english": "shy",
    "turkish": "utangaç",
    "sentence": "She was too shy to ask for help."
  },
  {
    "id": 2292,
    "english": "sick",
    "turkish": "hasta",
    "sentence": "I'm feeling a bit sick today."
  },
  {
    "id": 2293,
    "english": "side",
    "turkish": "taraf, yan",
    "sentence": "He stood on the other side of the room."
  },
  {
    "id": 2294,
    "english": "sight",
    "turkish": "görme, manzara",
    "sentence": "The view from the top of the mountain was a beautiful sight."
  },
  {
    "id": 2295,
    "english": "sign",
    "turkish": "işaret, tabela",
    "sentence": "Look for the 'Exit' sign."
  },
  {
    "id": 2296,
    "english": "signal",
    "turkish": "işaret, sinyal",
    "sentence": "He gave a signal to start the game."
  },
  {
    "id": 2297,
    "english": "significant",
    "turkish": "önemli, anlamlı",
    "sentence": "There has been a significant improvement in his grades."
  },
  {
    "id": 2298,
    "english": "significantly",
    "turkish": "önemli ölçüde, anlamlı bir şekilde",
    "sentence": "The price has increased significantly."
  },
  {
    "id": 2299,
    "english": "silence",
    "turkish": "sessizlik",
    "sentence": "A moment of silence fell over the audience."
  },
  {
    "id": 2300,
    "english": "silent",
    "turkish": "sessiz",
    "sentence": "The room was completely silent after the music stopped."
  },
  {
    "id": 2301,
    "english": "silk",
    "turkish": "ipek",
    "sentence": "She wore a beautiful dress made of pure silk."
  },
  {
    "id": 2302,
    "english": "silly",
    "turkish": "aptalca",
    "sentence": "It's silly to worry about such small things."
  },
  {
    "id": 2303,
    "english": "silver",
    "turkish": "gümüş",
    "sentence": "He bought a silver watch for his anniversary."
  },
  {
    "id": 2304,
    "english": "similar",
    "turkish": "benzer",
    "sentence": "Their opinions were very similar on most issues."
  },
  {
    "id": 2305,
    "english": "similarity",
    "turkish": "benzerlik",
    "sentence": "The similarity between the twins was striking."
  },
  {
    "id": 2306,
    "english": "similarly",
    "turkish": "benzer şekilde",
    "sentence": "The first chapter was difficult, and similarly, the second chapter was challenging."
  },
  {
    "id": 2307,
    "english": "simple",
    "turkish": "basit",
    "sentence": "The instructions were very simple and easy to follow."
  },
  {
    "id": 2308,
    "english": "simply",
    "turkish": "basitçe",
    "sentence": "You simply need to press the button to turn it on."
  },
  {
    "id": 2309,
    "english": "since",
    "turkish": "beri",
    "sentence": "I haven't seen her since last year."
  },
  {
    "id": 2310,
    "english": "sincere",
    "turkish": "samimi",
    "sentence": "He offered his sincere apologies for the mistake."
  },
  {
    "id": 2311,
    "english": "sing",
    "turkish": "şarkı söylemek",
    "sentence": "Can you sing that song again?"
  },
  {
    "id": 2312,
    "english": "singer",
    "turkish": "şarkıcı",
    "sentence": "She is a famous singer known for her beautiful voice."
  },
  {
    "id": 2313,
    "english": "singing",
    "turkish": "şarkı söyleme",
    "sentence": "The sound of children singing filled the air."
  },
  {
    "id": 2314,
    "english": "single",
    "turkish": "tek",
    "sentence": "Each student received a single piece of paper."
  },
  {
    "id": 2315,
    "english": "sink",
    "turkish": "batmak",
    "sentence": "The ship began to sink after hitting the iceberg."
  },
  {
    "id": 2316,
    "english": "sir",
    "turkish": "bay",
    "sentence": "Excuse me, sir, could you help me?"
  },
  {
    "id": 2317,
    "english": "sister",
    "turkish": "kız kardeş",
    "sentence": "My older sister is studying medicine."
  },
  {
    "id": 2318,
    "english": "sit",
    "turkish": "oturmak",
    "sentence": "Please sit down and make yourself comfortable."
  },
  {
    "id": 2319,
    "english": "site",
    "turkish": "yer",
    "sentence": "This is a historical site that attracts many tourists."
  },
  {
    "id": 2320,
    "english": "situation",
    "turkish": "durum",
    "sentence": "It was a difficult situation, but they managed to resolve it."
  },
  {
    "id": 2321,
    "english": "size",
    "turkish": "boyut",
    "sentence": "What size shoes do you wear?"
  },
  {
    "id": 2322,
    "english": "ski",
    "turkish": "kayak yapmak",
    "sentence": "They went to the mountains to ski in the winter."
  },
  {
    "id": 2323,
    "english": "skiing",
    "turkish": "kayak",
    "sentence": "Skiing is a popular winter sport."
  },
  {
    "id": 2324,
    "english": "skill",
    "turkish": "beceri",
    "sentence": "Learning a new language requires patience and dedication."
  },
  {
    "id": 2325,
    "english": "skin",
    "turkish": "cilt",
    "sentence": "Sunscreen protects your skin from harmful rays."
  },
  {
    "id": 2326,
    "english": "skirt",
    "turkish": "etek",
    "sentence": "She wore a blue skirt and a white blouse."
  },
  {
    "id": 2327,
    "english": "sky",
    "turkish": "gökyüzü",
    "sentence": "The sky was clear and blue with no clouds."
  },
  {
    "id": 2328,
    "english": "slave",
    "turkish": "köle",
    "sentence": "Historically, many societies had slaves."
  },
  {
    "id": 2329,
    "english": "sleep",
    "turkish": "uyku",
    "sentence": "I need to get more sleep tonight."
  },
  {
    "id": 2330,
    "english": "slice",
    "turkish": "dilim",
    "sentence": "Can I have a slice of that cake?"
  },
  {
    "id": 2331,
    "english": "slide",
    "turkish": "kaymak",
    "sentence": "The children loved to slide down the big slide in the park."
  },
  {
    "id": 2332,
    "english": "slight",
    "turkish": "hafif",
    "sentence": "There was a slight change in the weather."
  },
  {
    "id": 2333,
    "english": "slightly",
    "turkish": "hafifçe",
    "sentence": "The room was slightly warmer than usual."
  },
  {
    "id": 2334,
    "english": "slip",
    "turkish": "kayıp düşmek",
    "sentence": "Be careful not to slip on the wet floor."
  },
  {
    "id": 2335,
    "english": "slope",
    "turkish": "eğim",
    "sentence": "The ski slope was covered in fresh snow."
  },
  {
    "id": 2336,
    "english": "slow",
    "turkish": "yavaş",
    "sentence": "The traffic was very slow this morning."
  },
  {
    "id": 2337,
    "english": "slowly",
    "turkish": "yavaşça",
    "sentence": "He spoke slowly so that everyone could understand."
  },
  {
    "id": 2338,
    "english": "small",
    "turkish": "küçük",
    "sentence": "She lives in a small apartment in the city."
  },
  {
    "id": 2339,
    "english": "smart",
    "turkish": "akıllı",
    "sentence": "He is a very smart student and always gets good grades."
  },
  {
    "id": 2340,
    "english": "smartphone",
    "turkish": "akıllı telefon",
    "sentence": "I use my smartphone to stay connected with friends and family."
  },
  {
    "id": 2341,
    "english": "smell",
    "turkish": "koku",
    "sentence": "The smell of fresh bread is wonderful."
  },
  {
    "id": 2342,
    "english": "smile",
    "turkish": "gülümseme",
    "sentence": "She gave him a warm smile."
  },
  {
    "id": 2343,
    "english": "smoke",
    "turkish": "duman",
    "sentence": "The smoke from the fire was thick and black."
  },
  {
    "id": 2344,
    "english": "smoking",
    "turkish": "sigara içme",
    "sentence": "Smoking is not allowed in this building."
  },
  {
    "id": 2345,
    "english": "smooth",
    "turkish": "pürüzsüz",
    "sentence": "The fabric felt very smooth to the touch."
  },
  {
    "id": 2346,
    "english": "snake",
    "turkish": "yılan",
    "sentence": "He was afraid of snakes."
  },
  {
    "id": 2347,
    "english": "sneaker",
    "turkish": "spor ayakkabı",
    "sentence": "I wear sneakers when I go for a run."
  },
  {
    "id": 2348,
    "english": "snow",
    "turkish": "kar",
    "sentence": "It snowed heavily last night."
  },
  {
    "id": 2349,
    "english": "so",
    "turkish": "çok",
    "sentence": "The movie was so interesting that I watched it twice."
  },
  {
    "id": 2350,
    "english": "soap",
    "turkish": "sabun",
    "sentence": "Please wash your hands with soap and water."
  },
  {
    "id": 2351,
    "english": "soccer",
    "turkish": "futbol",
    "sentence": "Many people around the world love to play and watch soccer."
  },
  {
    "id": 2352,
    "english": "social",
    "turkish": "sosyal",
    "sentence": "It's important to have a good social life and friends."
  },
  {
    "id": 2353,
    "english": "society",
    "turkish": "toplum",
    "sentence": "Our society is changing rapidly with new technologies."
  },
  {
    "id": 2354,
    "english": "sock",
    "turkish": "çorap",
    "sentence": "I need to buy some new socks because mine are old."
  },
  {
    "id": 2355,
    "english": "soft",
    "turkish": "yumuşak",
    "sentence": "The kitten's fur was very soft."
  },
  {
    "id": 2356,
    "english": "software",
    "turkish": "yazılım",
    "sentence": "This new software will help us manage our data more efficiently."
  },
  {
    "id": 2357,
    "english": "soil",
    "turkish": "toprak",
    "sentence": "Plants need good soil to grow well."
  },
  {
    "id": 2358,
    "english": "solar",
    "turkish": "güneş",
    "sentence": "Solar power is a clean source of energy."
  },
  {
    "id": 2359,
    "english": "soldier",
    "turkish": "asker",
    "sentence": "The soldier bravely defended his country."
  },
  {
    "id": 2360,
    "english": "solid",
    "turkish": "katı",
    "sentence": "Ice is the solid form of water."
  },
  {
    "id": 2361,
    "english": "solution",
    "turkish": "çözüm",
    "sentence": "We need to find a solution to this problem quickly."
  },
  {
    "id": 2362,
    "english": "solve",
    "turkish": "çözmek",
    "sentence": "Can you help me solve this difficult math problem?"
  },
  {
    "id": 2363,
    "english": "somebody",
    "turkish": "birisi",
    "sentence": "Is there somebody at the door?"
  },
  {
    "id": 2364,
    "english": "someone",
    "turkish": "birisi",
    "sentence": "Someone left their bag here yesterday."
  },
  {
    "id": 2365,
    "english": "something",
    "turkish": "bir şey",
    "sentence": "I want to tell you something important."
  },
  {
    "id": 2366,
    "english": "sometimes",
    "turkish": "bazen",
    "sentence": "Sometimes I like to stay home and read a book."
  },
  {
    "id": 2367,
    "english": "somewhat",
    "turkish": "biraz",
    "sentence": "I'm somewhat tired after working all day."
  },
  {
    "id": 2368,
    "english": "somewhere",
    "turkish": "bir yerde",
    "sentence": "Let's go somewhere nice for dinner tonight."
  },
  {
    "id": 2369,
    "english": "son",
    "turkish": "oğul",
    "sentence": "Their son is studying to become a doctor."
  },
  {
    "id": 2370,
    "english": "song",
    "turkish": "şarkı",
    "sentence": "She sang a beautiful song at the concert."
  },
  {
    "id": 2371,
    "english": "soon",
    "turkish": "yakında",
    "sentence": "We will see you soon!"
  },
  {
    "id": 2372,
    "english": "sorry",
    "turkish": "üzgün",
    "sentence": "I am sorry, I didn't mean to bother you."
  },
  {
    "id": 2373,
    "english": "sort",
    "turkish": "tür, çeşit; sıralamak",
    "sentence": "What sort of music do you like?"
  },
  {
    "id": 2374,
    "english": "soul",
    "turkish": "ruh",
    "sentence": "Music can touch your soul."
  },
  {
    "id": 2375,
    "english": "sound",
    "turkish": "ses",
    "sentence": "What was that strange sound?"
  },
  {
    "id": 2376,
    "english": "soup",
    "turkish": "çorba",
    "sentence": "I'd like a bowl of hot soup, please."
  },
  {
    "id": 2377,
    "english": "source",
    "turkish": "kaynak",
    "sentence": "This information is from a reliable source."
  },
  {
    "id": 2378,
    "english": "south",
    "turkish": "güney",
    "sentence": "The sun sets in the south-west."
  },
  {
    "id": 2379,
    "english": "southern",
    "turkish": "güney",
    "sentence": "We are planning a trip to the southern part of the country."
  },
  {
    "id": 2380,
    "english": "space",
    "turkish": "uzay, alan",
    "sentence": "The astronauts traveled into outer space."
  },
  {
    "id": 2381,
    "english": "speak",
    "turkish": "konuşmak",
    "sentence": "Can you speak louder, please?"
  },
  {
    "id": 2382,
    "english": "speaker",
    "turkish": "konuşmacı, hoparlör",
    "sentence": "The guest speaker gave an interesting presentation."
  },
  {
    "id": 2383,
    "english": "special",
    "turkish": "özel",
    "sentence": "Today is a special day for our family."
  },
  {
    "id": 2384,
    "english": "specialist",
    "turkish": "uzman",
    "sentence": "He is a specialist in heart surgery."
  },
  {
    "id": 2385,
    "english": "species",
    "turkish": "tür",
    "sentence": "This is a rare species of bird."
  },
  {
    "id": 2386,
    "english": "specific",
    "turkish": "belirli, özel",
    "sentence": "Do you have a specific question?"
  },
  {
    "id": 2387,
    "english": "specifically",
    "turkish": "özellikle",
    "sentence": "He was hired specifically for this project."
  },
  {
    "id": 2388,
    "english": "speech",
    "turkish": "konuşma",
    "sentence": "The president gave a speech on national television."
  },
  {
    "id": 2389,
    "english": "speed",
    "turkish": "hız",
    "sentence": "The car was traveling at a high speed."
  },
  {
    "id": 2390,
    "english": "spell",
    "turkish": "hecelemek",
    "sentence": "Can you spell your last name for me?"
  },
  {
    "id": 2391,
    "english": "spelling",
    "turkish": "heceleme",
    "sentence": "His spelling is very good."
  },
  {
    "id": 2392,
    "english": "spend",
    "turkish": "harcamak",
    "sentence": "I like to spend my free time reading."
  },
  {
    "id": 2393,
    "english": "spending",
    "turkish": "harcama",
    "sentence": "Be careful with your spending this month."
  },
  {
    "id": 2394,
    "english": "spicy",
    "turkish": "baharatlı",
    "sentence": "I enjoy eating spicy food, but not too much."
  },
  {
    "id": 2395,
    "english": "spider",
    "turkish": "örümcek",
    "sentence": "I'm not a big fan of spiders."
  },
  {
    "id": 2396,
    "english": "spirit",
    "turkish": "ruh, tin",
    "sentence": "She has a very strong and positive spirit."
  },
  {
    "id": 2397,
    "english": "spiritual",
    "turkish": "manevi",
    "sentence": "Many people find comfort in spiritual practices."
  },
  {
    "id": 2398,
    "english": "split",
    "turkish": "bölmek, ayırmak",
    "sentence": "Let's split the bill for the dinner."
  },
  {
    "id": 2399,
    "english": "spoken",
    "turkish": "konuşulan",
    "sentence": "English is a widely spoken language."
  },
  {
    "id": 2400,
    "english": "sponsor",
    "turkish": "sponsor",
    "sentence": "The company decided to sponsor the local sports team."
  },
  {
    "id": 2401,
    "english": "spoon",
    "turkish": "kaşık",
    "sentence": "Can you pass me a spoon for my soup?"
  },
  {
    "id": 2402,
    "english": "sport",
    "turkish": "spor",
    "sentence": "Playing a sport is a good way to stay healthy."
  },
  {
    "id": 2403,
    "english": "spot",
    "turkish": "nokta, yer",
    "sentence": "I found a nice spot to sit in the park."
  },
  {
    "id": 2404,
    "english": "spread",
    "turkish": "yaymak",
    "sentence": "The news of the event began to spread quickly."
  },
  {
    "id": 2405,
    "english": "spring",
    "turkish": "ilkbahar, yay",
    "sentence": "Flowers bloom in the spring."
  },
  {
    "id": 2406,
    "english": "square",
    "turkish": "kare, meydan",
    "sentence": "The children played in the town square."
  },
  {
    "id": 2407,
    "english": "stable",
    "turkish": "durağan, istikrarlı",
    "sentence": "The economy has been quite stable for the past year."
  },
  {
    "id": 2408,
    "english": "stadium",
    "turkish": "stadyum",
    "sentence": "Thousands of people attended the football match at the stadium."
  },
  {
    "id": 2409,
    "english": "staff",
    "turkish": "personel",
    "sentence": "All the staff at the hotel were very friendly."
  },
  {
    "id": 2410,
    "english": "stage",
    "turkish": "sahne, aşama",
    "sentence": "The band will perform on stage tonight."
  },
  {
    "id": 2411,
    "english": "stair",
    "turkish": "merdiven basamağı",
    "sentence": "Be careful when you go down the stairs."
  },
  {
    "id": 2412,
    "english": "stamp",
    "turkish": "pul, damga",
    "sentence": "I need to buy a stamp to mail this letter."
  },
  {
    "id": 2413,
    "english": "stand",
    "turkish": "durmak, ayakta durmak",
    "sentence": "Please stand up when the judge enters the room."
  },
  {
    "id": 2414,
    "english": "standard",
    "turkish": "standart, ölçün",
    "sentence": "The company has high quality standards."
  },
  {
    "id": 2415,
    "english": "star",
    "turkish": "yıldız",
    "sentence": "The night sky was full of bright stars."
  },
  {
    "id": 2416,
    "english": "stare",
    "turkish": "dik dik bakmak",
    "sentence": "It's rude to stare at people."
  },
  {
    "id": 2417,
    "english": "start",
    "turkish": "başlamak",
    "sentence": "The movie will start in ten minutes."
  },
  {
    "id": 2418,
    "english": "state",
    "turkish": "devlet, durum",
    "sentence": "The current state of the environment is a concern."
  },
  {
    "id": 2419,
    "english": "statement",
    "turkish": "beyanat, ifade",
    "sentence": "The politician made a statement about the new policy."
  },
  {
    "id": 2420,
    "english": "station",
    "turkish": "istasyon, durak",
    "sentence": "We arrived at the train station early."
  },
  {
    "id": 2421,
    "english": "statistic",
    "turkish": "istatistik",
    "sentence": "According to the latest statistic, unemployment has decreased."
  },
  {
    "id": 2422,
    "english": "statue",
    "turkish": "heykel",
    "sentence": "There is a beautiful statue in the city park."
  },
  {
    "id": 2423,
    "english": "status",
    "turkish": "statü, durum",
    "sentence": "His status as a respected author grew over time."
  },
  {
    "id": 2424,
    "english": "stay",
    "turkish": "kalmak",
    "sentence": "I will stay at home tonight."
  },
  {
    "id": 2425,
    "english": "steady",
    "turkish": "sabit, istikrarlı",
    "sentence": "She has a steady hand for drawing."
  },
  {
    "id": 2426,
    "english": "steal",
    "turkish": "çalmak",
    "sentence": "It is a crime to steal from others."
  },
  {
    "id": 2427,
    "english": "steel",
    "turkish": "çelik",
    "sentence": "The bridge was made of strong steel."
  },
  {
    "id": 2428,
    "english": "steep",
    "turkish": "sarp, dik",
    "sentence": "The road up the mountain was very steep."
  },
  {
    "id": 2429,
    "english": "step",
    "turkish": "adım",
    "sentence": "Take one step at a time."
  },
  {
    "id": 2430,
    "english": "sticky",
    "turkish": "yapışkan",
    "sentence": "The jam made the table sticky."
  },
  {
    "id": 2431,
    "english": "stiff",
    "turkish": "sert, katı",
    "sentence": "My muscles are stiff after the workout."
  },
  {
    "id": 2432,
    "english": "still",
    "turkish": "hala, yine de",
    "sentence": "He is still working on the project."
  },
  {
    "id": 2433,
    "english": "stock",
    "turkish": "stok, hisse senedi",
    "sentence": "The store has a large stock of goods."
  },
  {
    "id": 2434,
    "english": "stomach",
    "turkish": "mide",
    "sentence": "Eating too much can give you a stomach ache."
  },
  {
    "id": 2435,
    "english": "stone",
    "turkish": "taş",
    "sentence": "He threw a stone into the river."
  },
  {
    "id": 2436,
    "english": "stop",
    "turkish": "durmak",
    "sentence": "Please stop the car here."
  },
  {
    "id": 2437,
    "english": "store",
    "turkish": "mağaza",
    "sentence": "I bought this book at the local store."
  },
  {
    "id": 2438,
    "english": "storm",
    "turkish": "fırtına",
    "sentence": "The storm caused a lot of damage."
  },
  {
    "id": 2439,
    "english": "story",
    "turkish": "hikaye, kat",
    "sentence": "She told us an interesting story."
  },
  {
    "id": 2440,
    "english": "stove",
    "turkish": "ocak",
    "sentence": "He is cooking dinner on the stove."
  },
  {
    "id": 2441,
    "english": "straight",
    "turkish": "düz, doğruca",
    "sentence": "Go straight ahead and you will find it."
  },
  {
    "id": 2442,
    "english": "strange",
    "turkish": "garip, tuhaf",
    "sentence": "That was a strange noise."
  },
  {
    "id": 2443,
    "english": "stranger",
    "turkish": "yabancı",
    "sentence": "Don't talk to strangers."
  },
  {
    "id": 2444,
    "english": "strategy",
    "turkish": "strateji",
    "sentence": "We need a good strategy to win the game."
  },
  {
    "id": 2445,
    "english": "stream",
    "turkish": "dere, akıntı",
    "sentence": "We sat by the stream and watched the water flow."
  },
  {
    "id": 2446,
    "english": "street",
    "turkish": "sokak",
    "sentence": "The children are playing in the street."
  },
  {
    "id": 2447,
    "english": "strength",
    "turkish": "güç, kuvvet",
    "sentence": "He has great physical strength."
  },
  {
    "id": 2448,
    "english": "stress",
    "turkish": "stres",
    "sentence": "Too much stress can be bad for your health."
  },
  {
    "id": 2449,
    "english": "stretch",
    "turkish": "esnetmek",
    "sentence": "It's good to stretch your muscles before exercising."
  },
  {
    "id": 2450,
    "english": "strict",
    "turkish": "sıkı",
    "sentence": "My parents are very strict about bedtime."
  },
  {
    "id": 2451,
    "english": "strike",
    "turkish": "vurmak",
    "sentence": "The clock strikes twelve."
  },
  {
    "id": 2452,
    "english": "string",
    "turkish": "ip",
    "sentence": "She tied the package with a string."
  },
  {
    "id": 2453,
    "english": "strong",
    "turkish": "güçlü",
    "sentence": "He is a strong swimmer."
  },
  {
    "id": 2454,
    "english": "strongly",
    "turkish": "şiddetle",
    "sentence": "I strongly advise you to finish your homework."
  },
  {
    "id": 2455,
    "english": "structure",
    "turkish": "yapı",
    "sentence": "The structure of the building is very old."
  },
  {
    "id": 2456,
    "english": "struggle",
    "turkish": "mücadele etmek",
    "sentence": "She had to struggle to open the heavy door."
  },
  {
    "id": 2457,
    "english": "student",
    "turkish": "öğrenci",
    "sentence": "The student asked a question in class."
  },
  {
    "id": 2458,
    "english": "studio",
    "turkish": "stüdyo",
    "sentence": "He works as a photographer in a studio."
  },
  {
    "id": 2459,
    "english": "study",
    "turkish": "çalışmak",
    "sentence": "I need to study for my exam tomorrow."
  },
  {
    "id": 2460,
    "english": "stuff",
    "turkish": "eşya",
    "sentence": "Put all your stuff in the bag."
  },
  {
    "id": 2461,
    "english": "stupid",
    "turkish": "aptal",
    "sentence": "That was a stupid mistake."
  },
  {
    "id": 2462,
    "english": "style",
    "turkish": "tarz",
    "sentence": "She has a unique fashion style."
  },
  {
    "id": 2463,
    "english": "subject",
    "turkish": "konu",
    "sentence": "What is the subject of the book?"
  },
  {
    "id": 2464,
    "english": "submit",
    "turkish": "teslim etmek",
    "sentence": "You must submit your assignment by Friday."
  },
  {
    "id": 2465,
    "english": "substance",
    "turkish": "madde",
    "sentence": "This is a dangerous substance."
  },
  {
    "id": 2466,
    "english": "subway",
    "turkish": "metro",
    "sentence": "We took the subway to the city center."
  },
  {
    "id": 2467,
    "english": "succeed",
    "turkish": "başarmak",
    "sentence": "If you work hard, you will succeed."
  },
  {
    "id": 2468,
    "english": "success",
    "turkish": "başarı",
    "sentence": "Her success in business is well-known."
  },
  {
    "id": 2469,
    "english": "successful",
    "turkish": "başarılı",
    "sentence": "It was a very successful party."
  },
  {
    "id": 2470,
    "english": "successfully",
    "turkish": "başarıyla",
    "sentence": "They successfully completed the project."
  },
  {
    "id": 2471,
    "english": "sudden",
    "turkish": "ani",
    "sentence": "There was a sudden noise from outside."
  },
  {
    "id": 2472,
    "english": "suddenly",
    "turkish": "aniden",
    "sentence": "Suddenly, the lights went out."
  },
  {
    "id": 2473,
    "english": "suffer",
    "turkish": "acı çekmek",
    "sentence": "He had to suffer a lot of pain."
  },
  {
    "id": 2474,
    "english": "sugar",
    "turkish": "şeker",
    "sentence": "I don't like sugar in my coffee."
  },
  {
    "id": 2475,
    "english": "suggest",
    "turkish": "önermek",
    "sentence": "I suggest we go for a walk."
  },
  {
    "id": 2476,
    "english": "suggestion",
    "turkish": "öneri",
    "sentence": "That's a good suggestion!"
  },
  {
    "id": 2477,
    "english": "suit",
    "turkish": "takım elbise",
    "sentence": "He wore a smart suit to the interview."
  },
  {
    "id": 2478,
    "english": "suitable",
    "turkish": "uygun",
    "sentence": "This movie is not suitable for children."
  },
  {
    "id": 2479,
    "english": "sum",
    "turkish": "toplam",
    "sentence": "What is the sum of 5 and 7?"
  },
  {
    "id": 2480,
    "english": "summarize",
    "turkish": "özetlemek",
    "sentence": "Can you summarize the main points?"
  },
  {
    "id": 2481,
    "english": "summary",
    "turkish": "özet",
    "sentence": "I read a summary of the article."
  },
  {
    "id": 2482,
    "english": "summer",
    "turkish": "yaz",
    "sentence": "We usually go on vacation in the summer."
  },
  {
    "id": 2483,
    "english": "sun",
    "turkish": "güneş",
    "sentence": "The sun is shining brightly today."
  },
  {
    "id": 2484,
    "english": "supermarket",
    "turkish": "süpermarket",
    "sentence": "I need to buy some groceries at the supermarket."
  },
  {
    "id": 2485,
    "english": "supply",
    "turkish": "tedarik etmek",
    "sentence": "The company will supply the materials."
  },
  {
    "id": 2486,
    "english": "support",
    "turkish": "desteklemek",
    "sentence": "My family always supports my decisions."
  },
  {
    "id": 2487,
    "english": "supporter",
    "turkish": "destekçi",
    "sentence": "He is a big supporter of the local football team."
  },
  {
    "id": 2488,
    "english": "suppose",
    "turkish": "varsaymak",
    "sentence": "I suppose you're right."
  },
  {
    "id": 2489,
    "english": "sure",
    "turkish": "emin",
    "sentence": "Are you sure you locked the door?"
  },
  {
    "id": 2490,
    "english": "surely",
    "turkish": "elbette",
    "sentence": "Surely, you can help me with this."
  },
  {
    "id": 2491,
    "english": "surface",
    "turkish": "yüzey",
    "sentence": "The surface of the water was calm."
  },
  {
    "id": 2492,
    "english": "surgery",
    "turkish": "ameliyat",
    "sentence": "He is recovering well from his surgery."
  },
  {
    "id": 2493,
    "english": "surprise",
    "turkish": "sürpriz",
    "sentence": "What a nice surprise!"
  },
  {
    "id": 2494,
    "english": "surprised",
    "turkish": "şaşırmış",
    "sentence": "I was surprised to see him there."
  },
  {
    "id": 2495,
    "english": "surprising",
    "turkish": "şaşırtıcı",
    "sentence": "That's a surprising result."
  },
  {
    "id": 2496,
    "english": "surround",
    "turkish": "çevrelemek",
    "sentence": "The garden surrounds the house."
  },
  {
    "id": 2497,
    "english": "surrounding",
    "turkish": "çevreleyen",
    "sentence": "We enjoyed the beautiful surrounding countryside."
  },
  {
    "id": 2498,
    "english": "survey",
    "turkish": "anket",
    "sentence": "We conducted a survey about customer satisfaction."
  },
  {
    "id": 2499,
    "english": "survive",
    "turkish": "hayatta kalmak",
    "sentence": "He managed to survive the accident."
  },
  {
    "id": 2500,
    "english": "than",
    "turkish": "göre",
    "sentence": "She is much more experienced in marketing than her predecessor."
  },
  {
    "id": 2501,
    "english": "thank",
    "turkish": "teşekkür etmek",
    "sentence": "I would like to thank you for your continuous support during the project."
  },
  {
    "id": 2502,
    "english": "theater",
    "turkish": "tiyatro",
    "sentence": "They decided to see a classic play at the local theater this weekend."
  },
  {
    "id": 2503,
    "english": "theirs",
    "turkish": "onlarınki",
    "sentence": "This house is ours, but the one next door is theirs."
  },
  {
    "id": 2504,
    "english": "them",
    "turkish": "onları",
    "sentence": "The manager will meet them in the conference room at noon."
  },
  {
    "id": 2505,
    "english": "theme",
    "turkish": "tema",
    "sentence": "The main theme of the conference was sustainable energy solutions."
  },
  {
    "id": 2506,
    "english": "themselves",
    "turkish": "kendileri",
    "sentence": "They managed to complete the difficult project all by themselves."
  },
  {
    "id": 2507,
    "english": "then",
    "turkish": "o zaman",
    "sentence": "I finished my work and then I went for a long walk in the park."
  },
  {
    "id": 2508,
    "english": "theory",
    "turkish": "teori",
    "sentence": "Einstein's theory of relativity changed the world of modern physics."
  },
  {
    "id": 2509,
    "english": "therapy",
    "turkish": "terapi",
    "sentence": "Physical therapy is necessary for a full recovery after the surgery."
  },
  {
    "id": 2510,
    "english": "there",
    "turkish": "orada",
    "sentence": "You should go there early if you want to get a good seat."
  },
  {
    "id": 2511,
    "english": "therefore",
    "turkish": "bu nedenle",
    "sentence": "The experiment failed; therefore, we must try a different approach."
  },
  {
    "id": 2512,
    "english": "they",
    "turkish": "onlar",
    "sentence": "They are planning to expand their business to international markets."
  },
  {
    "id": 2513,
    "english": "thick",
    "turkish": "kalın",
    "sentence": "The walls of the old castle are very thick and strong."
  },
  {
    "id": 2514,
    "english": "thief",
    "turkish": "hırsız",
    "sentence": "The thief stole the expensive jewelry from the hotel safe."
  },
  {
    "id": 2515,
    "english": "thin",
    "turkish": "ince",
    "sentence": "He wore a thin jacket despite the freezing cold weather outside."
  },
  {
    "id": 2516,
    "english": "thing",
    "turkish": "şey",
    "sentence": "The most important thing is to stay focused on your long-term goals."
  },
  {
    "id": 2517,
    "english": "think",
    "turkish": "düşünmek",
    "sentence": "I need some time to think about your proposal before I decide."
  },
  {
    "id": 2518,
    "english": "thinking",
    "turkish": "düşünce",
    "sentence": "Critical thinking is a vital skill in modern professional workplaces."
  },
  {
    "id": 2519,
    "english": "thirsty",
    "turkish": "susamış",
    "sentence": "After the long hike under the sun, everyone was extremely thirsty."
  },
  {
    "id": 2520,
    "english": "though",
    "turkish": "rağmen",
    "sentence": "She decided to buy the dress even though it was quite expensive."
  },
  {
    "id": 2521,
    "english": "thought",
    "turkish": "düşünce",
    "sentence": "The thought of failing never even crossed his mind during the race."
  },
  {
    "id": 2522,
    "english": "threat",
    "turkish": "tehdit",
    "sentence": "Climate change poses a serious threat to global agriculture."
  },
  {
    "id": 2523,
    "english": "threaten",
    "turkish": "tehdit etmek",
    "sentence": "The rising water levels threaten many coastal communities."
  },
  {
    "id": 2524,
    "english": "throat",
    "turkish": "boğaz",
    "sentence": "He has a sore throat and cannot speak very clearly today."
  },
  {
    "id": 2525,
    "english": "through",
    "turkish": "aracılığıyla",
    "sentence": "We had to drive through a long tunnel to reach the city center."
  },
  {
    "id": 2526,
    "english": "throughout",
    "turkish": "boyunca",
    "sentence": "The art gallery will be open to visitors throughout the entire summer."
  },
  {
    "id": 2527,
    "english": "throw",
    "turkish": "atmak",
    "sentence": "Please don't throw plastic bottles in the regular trash bin."
  },
  {
    "id": 2528,
    "english": "thus",
    "turkish": "böylece",
    "sentence": "He worked very hard and thus earned a promotion within a year."
  },
  {
    "id": 2529,
    "english": "ticket",
    "turkish": "bilet",
    "sentence": "You need to book your train ticket at least a week in advance."
  },
  {
    "id": 2530,
    "english": "tie",
    "turkish": "bağlamak",
    "sentence": "You should tie your hair back before you start cooking in the kitchen."
  },
  {
    "id": 2531,
    "english": "tight",
    "turkish": "sıkı",
    "sentence": "These shoes are a bit tight for me; I might need a larger size."
  },
  {
    "id": 2532,
    "english": "till",
    "turkish": "kadar",
    "sentence": "We will stay at the office till we finish the monthly report."
  },
  {
    "id": 2533,
    "english": "time",
    "turkish": "zaman",
    "sentence": "Management should use their time more efficiently to meet deadlines."
  },
  {
    "id": 2534,
    "english": "tiny",
    "turkish": "küçücük",
    "sentence": "The insect was so tiny that it was almost invisible to the naked eye."
  },
  {
    "id": 2535,
    "english": "tip",
    "turkish": "ipucu",
    "sentence": "The waiter provided excellent service, so we left a generous tip."
  },
  {
    "id": 2536,
    "english": "tire",
    "turkish": "lastik",
    "sentence": "I need to change the front tire of my car because it is worn out."
  },
  {
    "id": 2537,
    "english": "tired",
    "turkish": "yorgun",
    "sentence": "She was so tired after work that she fell asleep on the sofa."
  },
  {
    "id": 2538,
    "english": "title",
    "turkish": "başlık",
    "sentence": "What is the official title of your new research paper?"
  },
  {
    "id": 2539,
    "english": "to",
    "turkish": "-e/-a",
    "sentence": "We are going to the airport to pick up our international guests."
  },
  {
    "id": 2540,
    "english": "today",
    "turkish": "bugün",
    "sentence": "Technology is changing more rapidly today than ever before."
  },
  {
    "id": 2541,
    "english": "toe",
    "turkish": "ayak parmağı",
    "sentence": "I accidentally hit my toe against the leg of the dining table."
  },
  {
    "id": 2542,
    "english": "together",
    "turkish": "birlikte",
    "sentence": "Working together is the best way to solve complex engineering problems."
  },
  {
    "id": 2543,
    "english": "toilet",
    "turkish": "tuvalet",
    "sentence": "The public toilet is located at the end of the long hallway."
  },
  {
    "id": 2544,
    "english": "tomato",
    "turkish": "domates",
    "sentence": "She added some fresh tomato and basil to the homemade pasta sauce."
  },
  {
    "id": 2545,
    "english": "tomorrow",
    "turkish": "yarın",
    "sentence": "The results of the final exam will be announced tomorrow morning."
  },
  {
    "id": 2546,
    "english": "ton",
    "turkish": "ton",
    "sentence": "This delivery truck can carry up to one ton of heavy cargo."
  },
  {
    "id": 2547,
    "english": "tone",
    "turkish": "ton",
    "sentence": "He spoke in a very professional tone during the business meeting."
  },
  {
    "id": 2548,
    "english": "tongue",
    "turkish": "dil",
    "sentence": "It is important to watch your tongue when speaking to important clients."
  },
  {
    "id": 2549,
    "english": "tonight",
    "turkish": "bu gece",
    "sentence": "Are you attending the annual award ceremony scheduled for tonight?"
  },
  {
    "id": 2550,
    "english": "too",
    "turkish": "de/da, çok",
    "sentence": "This project is too complex to finish in just one week."
  },
  {
    "id": 2551,
    "english": "tool",
    "turkish": "araç, alet",
    "sentence": "Digital software is an essential tool for modern graphic designers."
  },
  {
    "id": 2552,
    "english": "tooth",
    "turkish": "diş",
    "sentence": "You should visit the dentist immediately if you have a painful tooth."
  },
  {
    "id": 2553,
    "english": "top",
    "turkish": "üst, tepe",
    "sentence": "The view from the top of the mountain was absolutely breathtaking."
  },
  {
    "id": 2554,
    "english": "topic",
    "turkish": "konu",
    "sentence": "The main topic of today's meeting is the new budget plan."
  },
  {
    "id": 2555,
    "english": "total",
    "turkish": "toplam",
    "sentence": "The total cost of the office renovation exceeded our initial expectations."
  },
  {
    "id": 2556,
    "english": "totally",
    "turkish": "tamamen",
    "sentence": "I totally agree with your perspective on the environmental issue."
  },
  {
    "id": 2557,
    "english": "touch",
    "turkish": "dokunmak, temas",
    "sentence": "Please do not touch the exhibits while walking through the museum."
  },
  {
    "id": 2558,
    "english": "tough",
    "turkish": "zorlu, sert",
    "sentence": "Making a career change at forty can be a very tough decision."
  },
  {
    "id": 2559,
    "english": "tour",
    "turkish": "tur, gezi",
    "sentence": "We decided to take a guided tour of the historical city center."
  },
  {
    "id": 2560,
    "english": "tourism",
    "turkish": "turizm",
    "sentence": "Tourism is the primary source of income for many coastal towns."
  },
  {
    "id": 2561,
    "english": "tourist",
    "turkish": "turist",
    "sentence": "Many tourists visit the Eiffel Tower during the summer months."
  },
  {
    "id": 2562,
    "english": "toward",
    "turkish": "-e doğru",
    "sentence": "She walked quickly toward the exit after the presentation ended."
  },
  {
    "id": 2563,
    "english": "towel",
    "turkish": "havlu",
    "sentence": "Fresh towels are provided daily for all guests at the hotel."
  },
  {
    "id": 2564,
    "english": "tower",
    "turkish": "kule",
    "sentence": "The clock tower is the most famous landmark in this town."
  },
  {
    "id": 2565,
    "english": "town",
    "turkish": "kasaba, şehir",
    "sentence": "The local market is held in the center of the town every Sunday."
  },
  {
    "id": 2566,
    "english": "toy",
    "turkish": "oyuncak",
    "sentence": "The company is developing a new educational toy for toddlers."
  },
  {
    "id": 2567,
    "english": "track",
    "turkish": "iz, takip etmek",
    "sentence": "The manager used a digital system to track the progress of the project."
  },
  {
    "id": 2568,
    "english": "trade",
    "turkish": "ticaret",
    "sentence": "International trade has increased significantly over the last decade."
  },
  {
    "id": 2569,
    "english": "tradition",
    "turkish": "gelenek",
    "sentence": "It is a local tradition to exchange gifts during the winter festival."
  },
  {
    "id": 2570,
    "english": "traditional",
    "turkish": "geleneksel",
    "sentence": "We enjoyed a meal at a traditional restaurant in the small village."
  },
  {
    "id": 2571,
    "english": "traffic",
    "turkish": "trafik",
    "sentence": "Heavy traffic caused a significant delay in our morning commute."
  },
  {
    "id": 2572,
    "english": "train",
    "turkish": "tren, eğitmek",
    "sentence": "The HR department will train new employees on safety protocols next week."
  },
  {
    "id": 2573,
    "english": "trainer",
    "turkish": "eğitmen, antrenör",
    "sentence": "The professional fitness trainer created a personalized workout plan for me."
  },
  {
    "id": 2574,
    "english": "training",
    "turkish": "eğitim",
    "sentence": "All staff members must attend the leadership training session on Friday."
  },
  {
    "id": 2575,
    "english": "transfer",
    "turkish": "transfer etmek, aktarmak",
    "sentence": "I need to transfer some money from my savings to my checking account."
  },
  {
    "id": 2576,
    "english": "transform",
    "turkish": "dönüştürmek",
    "sentence": "Modern technology has the power to transform how we communicate with each other."
  },
  {
    "id": 2577,
    "english": "transition",
    "turkish": "geçiş",
    "sentence": "The transition to the new software system was surprisingly smooth."
  },
  {
    "id": 2578,
    "english": "translate",
    "turkish": "çevirmek",
    "sentence": "Could you help me translate this technical document into English?"
  },
  {
    "id": 2579,
    "english": "translation",
    "turkish": "çeviri",
    "sentence": "The official translation of the contract is currently being prepared."
  },
  {
    "id": 2580,
    "english": "transport",
    "turkish": "taşımak, ulaşım",
    "sentence": "Public transport is the most efficient way to travel around the city center."
  },
  {
    "id": 2581,
    "english": "transportation",
    "turkish": "ulaşım, taşımacılık",
    "sentence": "The government is investing heavily in better public transportation."
  },
  {
    "id": 2582,
    "english": "trash",
    "turkish": "çöp",
    "sentence": "Please remember to take out the trash before you leave the apartment."
  },
  {
    "id": 2583,
    "english": "travel",
    "turkish": "seyahat etmek",
    "sentence": "I plan to travel across Europe after I graduate from university."
  },
  {
    "id": 2584,
    "english": "traveler",
    "turkish": "gezgin, yolcu",
    "sentence": "The airport lounge offers a quiet and comfortable space for weary travelers."
  },
  {
    "id": 2585,
    "english": "treat",
    "turkish": "tedavi etmek, davranmak",
    "sentence": "Doctors use various methods to treat this specific type of illness."
  },
  {
    "id": 2586,
    "english": "treatment",
    "turkish": "tedavi",
    "sentence": "Early diagnosis is crucial for the successful treatment of the disease."
  },
  {
    "id": 2587,
    "english": "tree",
    "turkish": "ağaç",
    "sentence": "They decided to plant a cherry tree in their backyard last spring."
  },
  {
    "id": 2588,
    "english": "trend",
    "turkish": "akım, eğilim",
    "sentence": "There is a growing global trend toward working remotely from home."
  },
  {
    "id": 2589,
    "english": "trial",
    "turkish": "deneme, duruşma",
    "sentence": "The new medicine is currently undergoing extensive clinical trials."
  },
  {
    "id": 2590,
    "english": "trick",
    "turkish": "hile, püf noktası",
    "sentence": "The chef shared a simple trick for making the perfect pasta sauce."
  },
  {
    "id": 2591,
    "english": "trip",
    "turkish": "gezi, yolculuk",
    "sentence": "We are planning a business trip to London early next month."
  },
  {
    "id": 2592,
    "english": "tropical",
    "turkish": "tropikal",
    "sentence": "The island is famous for its beautiful tropical beaches and warm climate."
  },
  {
    "id": 2593,
    "english": "trouble",
    "turkish": "sorun, dert",
    "sentence": "If you have any trouble with the system, please contact IT support."
  },
  {
    "id": 2594,
    "english": "truck",
    "turkish": "kamyon",
    "sentence": "All of the new office furniture was delivered in a large moving truck."
  },
  {
    "id": 2595,
    "english": "true",
    "turkish": "doğru, gerçek",
    "sentence": "It is true that hard work and persistence usually lead to success."
  },
  {
    "id": 2596,
    "english": "truly",
    "turkish": "gerçekten",
    "sentence": "I am truly grateful for all the support you have given me recently."
  },
  {
    "id": 2597,
    "english": "trust",
    "turkish": "güvenmek, güven",
    "sentence": "Trust is the most important element in building a healthy relationship."
  },
  {
    "id": 2598,
    "english": "truth",
    "turkish": "gerçek, hakikat",
    "sentence": "To solve the problem effectively, we must first face the truth about the situation."
  },
  {
    "id": 2599,
    "english": "try",
    "turkish": "denemek",
    "sentence": "You should try to resolve the conflict through open and honest communication."
  },
  {
    "id": 2600,
    "english": "tube",
    "turkish": "tüp, boru",
    "sentence": "The laboratory technician carefully placed the blood sample into a sterile glass tube."
  },
  {
    "id": 2601,
    "english": "tune",
    "turkish": "ezgi, melodi",
    "sentence": "I can't remember the lyrics of the song, but the tune is very catchy."
  },
  {
    "id": 2602,
    "english": "tunnel",
    "turkish": "tünel",
    "sentence": "The train passed through a long tunnel before reaching the other side of the mountain."
  },
  {
    "id": 2603,
    "english": "turn",
    "turkish": "dönmek, sıra",
    "sentence": "It is finally your turn to present your ideas to the marketing team."
  },
  {
    "id": 2604,
    "english": "twice",
    "turkish": "iki kez",
    "sentence": "The manager reminded us twice that the deadline for the report is Friday."
  },
  {
    "id": 2605,
    "english": "twin",
    "turkish": "ikiz",
    "sentence": "Although they are twin brothers, they have very different personalities and interests."
  },
  {
    "id": 2606,
    "english": "type",
    "turkish": "tür, yazmak",
    "sentence": "What type of professional experience do you have in the hospitality industry?"
  },
  {
    "id": 2607,
    "english": "typical",
    "turkish": "tipik",
    "sentence": "A typical working day for a consultant involves many meetings and emails."
  },
  {
    "id": 2608,
    "english": "typically",
    "turkish": "genellikle",
    "sentence": "In this region, the weather is typically warm and humid during the summer months."
  },
  {
    "id": 2609,
    "english": "ugly",
    "turkish": "çirkin",
    "sentence": "The old, abandoned building was considered an ugly sight in the middle of the city."
  },
  {
    "id": 2610,
    "english": "ultimately",
    "turkish": "en nihayetinde",
    "sentence": "Ultimately, the decision to hire a new employee lies with the department head."
  },
  {
    "id": 2611,
    "english": "umbrella",
    "turkish": "şemsiye",
    "sentence": "You should take an umbrella with you because the forecast predicts heavy rain later today."
  },
  {
    "id": 2612,
    "english": "unable",
    "turkish": "yapamaz, aciz",
    "sentence": "Due to a technical error, the system was unable to process the online payment."
  },
  {
    "id": 2613,
    "english": "uncle",
    "turkish": "amca, dayı",
    "sentence": "My uncle works as a civil engineer and has traveled all over the world for projects."
  },
  {
    "id": 2614,
    "english": "uncomfortable",
    "turkish": "rahatsız",
    "sentence": "The chairs in the conference room were so uncomfortable that I couldn't focus on the speaker."
  },
  {
    "id": 2615,
    "english": "unconscious",
    "turkish": "baygın, bilinçsiz",
    "sentence": "The driver was found unconscious after the accident and was immediately taken to the hospital."
  },
  {
    "id": 2616,
    "english": "under",
    "turkish": "altında",
    "sentence": "The documents you are looking for are kept under the blue folder on your desk."
  },
  {
    "id": 2617,
    "english": "underground",
    "turkish": "yer altı, metro",
    "sentence": "Using the underground is often the fastest way to travel across London during rush hour."
  },
  {
    "id": 2618,
    "english": "understand",
    "turkish": "anlamak",
    "sentence": "It is important to understand the terms of the contract before you sign it."
  },
  {
    "id": 2619,
    "english": "understanding",
    "turkish": "anlayış, kavrayış",
    "sentence": "The manager showed great understanding when I explained my personal situation to him."
  },
  {
    "id": 2620,
    "english": "underwear",
    "turkish": "iç çamaşırı",
    "sentence": "She packed her suitcase with enough clothes and underwear for a ten-day trip."
  },
  {
    "id": 2621,
    "english": "unemployed",
    "turkish": "işsiz",
    "sentence": "After the factory closed, many people in the town remained unemployed for several months."
  },
  {
    "id": 2622,
    "english": "unemployment",
    "turkish": "işsizlik",
    "sentence": "The government is introducing new programs to reduce the high rate of youth unemployment."
  },
  {
    "id": 2623,
    "english": "unexpected",
    "turkish": "beklenmedik",
    "sentence": "The company's profits increased significantly due to an unexpected growth in demand."
  },
  {
    "id": 2624,
    "english": "unfair",
    "turkish": "adaletsiz",
    "sentence": "Many employees felt that the new promotion policy was unfair to those with more experience."
  },
  {
    "id": 2625,
    "english": "unfortunately",
    "turkish": "maalesef",
    "sentence": "Unfortunately, all the tickets for the seminar have already been sold out."
  },
  {
    "id": 2626,
    "english": "unhappy",
    "turkish": "mutsuz",
    "sentence": "If you are unhappy with your current salary, you should schedule a meeting with your boss."
  },
  {
    "id": 2627,
    "english": "uniform",
    "turkish": "üniforma",
    "sentence": "Flight attendants are required to wear a professional uniform while they are on duty."
  },
  {
    "id": 2628,
    "english": "union",
    "turkish": "sendika, birlik",
    "sentence": "The labor union is negotiating with the management to improve safety standards in the factory."
  },
  {
    "id": 2629,
    "english": "unique",
    "turkish": "eşsiz, benzersiz",
    "sentence": "This software offers a unique solution for small businesses looking to organize their finances."
  },
  {
    "id": 2630,
    "english": "unit",
    "turkish": "birim",
    "sentence": "The marketing department is considered a vital unit within the entire corporate structure."
  },
  {
    "id": 2631,
    "english": "united",
    "turkish": "birleşmiş",
    "sentence": "The residents remained united in their protest against the construction of the new highway."
  },
  {
    "id": 2632,
    "english": "universe",
    "turkish": "evren",
    "sentence": "Astronomers are constantly discovering new details about the origins of the universe."
  },
  {
    "id": 2633,
    "english": "university",
    "turkish": "üniversite",
    "sentence": "She decided to study international relations at a prestigious university in Europe."
  },
  {
    "id": 2634,
    "english": "unknown",
    "turkish": "bilinmeyen",
    "sentence": "The identity of the donor remains unknown, as they requested to stay anonymous."
  },
  {
    "id": 2635,
    "english": "unless",
    "turkish": "medikçe, -mazsa",
    "sentence": "You won't be able to enter the building unless you have a valid security pass."
  },
  {
    "id": 2636,
    "english": "unlike",
    "turkish": "aksine, farklı olarak",
    "sentence": "Unlike her previous manager, her new boss is very supportive of flexible working hours."
  },
  {
    "id": 2637,
    "english": "unlikely",
    "turkish": "ihtimal dışı",
    "sentence": "It is highly unlikely that the project will be finished before the end of the month."
  },
  {
    "id": 2638,
    "english": "unnecessary",
    "turkish": "gereksiz",
    "sentence": "The boss told us to avoid making any unnecessary phone calls during our shifts."
  },
  {
    "id": 2639,
    "english": "unpleasant",
    "turkish": "hoş olmayan",
    "sentence": "The meeting was quite unpleasant because of the arguments between the two directors."
  },
  {
    "id": 2640,
    "english": "until",
    "turkish": "kadar",
    "sentence": "The museum will remain closed for renovations until the beginning of next year."
  },
  {
    "id": 2641,
    "english": "unusual",
    "turkish": "sıra dışı",
    "sentence": "It is very unusual for him to be late for a meeting, as he is usually very punctual."
  },
  {
    "id": 2642,
    "english": "up",
    "turkish": "yukarı",
    "sentence": "If you don't know the definition of a word, you should look it up in a dictionary."
  },
  {
    "id": 2643,
    "english": "update",
    "turkish": "güncelleme",
    "sentence": "The IT department will update the security software on all office computers tonight."
  },
  {
    "id": 2644,
    "english": "upon",
    "turkish": "üzerine",
    "sentence": "Upon graduating from law school, he immediately started working for a top firm."
  },
  {
    "id": 2645,
    "english": "upper",
    "turkish": "üst",
    "sentence": "The upper management team is currently discussing the budget for the next fiscal year."
  },
  {
    "id": 2646,
    "english": "upset",
    "turkish": "üzgün, rahatsız",
    "sentence": "She was very upset when she found out that her application had been rejected."
  },
  {
    "id": 2647,
    "english": "upstairs",
    "turkish": "üst kat",
    "sentence": "My office is located upstairs, so I have to use the elevator every morning."
  },
  {
    "id": 2648,
    "english": "upward",
    "turkish": "yukarı doğru",
    "sentence": "The graph shows a steady upward trend in sales over the last six months."
  },
  {
    "id": 2649,
    "english": "urban",
    "turkish": "kentsel",
    "sentence": "Living in an urban environment offers many advantages, such as better public transport."
  },
  {
    "id": 2650,
    "english": "urge",
    "turkish": "dürtü",
    "sentence": "The manager felt a sudden urge to redesign the entire marketing strategy."
  },
  {
    "id": 2651,
    "english": "us",
    "turkish": "bizi",
    "sentence": "The director invited us to participate in the international conference next month."
  },
  {
    "id": 2652,
    "english": "use",
    "turkish": "kullanmak",
    "sentence": "You should use a professional tone when communicating with potential clients."
  },
  {
    "id": 2653,
    "english": "useful",
    "turkish": "faydalı",
    "sentence": "The new project management software provides many useful tools for the team."
  },
  {
    "id": 2654,
    "english": "user",
    "turkish": "kullanıcı",
    "sentence": "Each user must choose a unique password to ensure the security of the system."
  },
  {
    "id": 2655,
    "english": "usual",
    "turkish": "olağan",
    "sentence": "He arrived at the office at his usual time, despite the heavy morning traffic."
  },
  {
    "id": 2656,
    "english": "usually",
    "turkish": "genellikle",
    "sentence": "Company meetings are usually held in the main boardroom on Monday mornings."
  },
  {
    "id": 2657,
    "english": "vacation",
    "turkish": "tatil",
    "sentence": "Taking a two-week vacation can help employees reduce stress and avoid burnout."
  },
  {
    "id": 2658,
    "english": "valley",
    "turkish": "vadi",
    "sentence": "The small industrial town is located in a deep valley surrounded by mountains."
  },
  {
    "id": 2659,
    "english": "valuable",
    "turkish": "değerli",
    "sentence": "The consultant provided valuable advice on how to reduce our operational costs."
  },
  {
    "id": 2660,
    "english": "value",
    "turkish": "değer",
    "sentence": "The market value of the company has increased significantly over the last year."
  },
  {
    "id": 2661,
    "english": "van",
    "turkish": "minibüs",
    "sentence": "The delivery service uses a large white van to transport equipment to the site."
  },
  {
    "id": 2662,
    "english": "variety",
    "turkish": "çeşitlilik",
    "sentence": "The restaurant offers a wide variety of healthy options for vegetarian customers."
  },
  {
    "id": 2663,
    "english": "various",
    "turkish": "çeşitli",
    "sentence": "There are various factors to consider before deciding to invest in a new startup."
  },
  {
    "id": 2664,
    "english": "vary",
    "turkish": "farklılık göstermek",
    "sentence": "The requirements for the job vary depending on the specific department you apply to."
  },
  {
    "id": 2665,
    "english": "vast",
    "turkish": "muazzam",
    "sentence": "The organization has a vast amount of experience in managing international projects."
  },
  {
    "id": 2666,
    "english": "vegetable",
    "turkish": "sebze",
    "sentence": "Adding more fresh vegetables to your diet is a simple way to improve your health."
  },
  {
    "id": 2667,
    "english": "vehicle",
    "turkish": "araç",
    "sentence": "Electric vehicles are becoming more popular as people look for sustainable options."
  },
  {
    "id": 2668,
    "english": "venue",
    "turkish": "mekan",
    "sentence": "The local library was chosen as the venue for the community meeting."
  },
  {
    "id": 2669,
    "english": "version",
    "turkish": "versiyon",
    "sentence": "Please ensure that you have downloaded the latest version of the application."
  },
  {
    "id": 2670,
    "english": "very",
    "turkish": "çok",
    "sentence": "The CEO was very impressed with the progress the team made this quarter."
  },
  {
    "id": 2671,
    "english": "via",
    "turkish": "aracılığıyla",
    "sentence": "The annual reports were distributed to all shareholders via email yesterday."
  },
  {
    "id": 2672,
    "english": "victim",
    "turkish": "kurban",
    "sentence": "The police are currently searching for more information to help the victim of the theft."
  },
  {
    "id": 2673,
    "english": "victory",
    "turkish": "zafer",
    "sentence": "Winning the contract was a major victory for our small architectural firm."
  },
  {
    "id": 2674,
    "english": "video",
    "turkish": "video",
    "sentence": "The training department created a short video to explain the new safety rules."
  },
  {
    "id": 2675,
    "english": "view",
    "turkish": "manzara",
    "sentence": "The office on the tenth floor has a spectacular view of the entire city skyline."
  },
  {
    "id": 2676,
    "english": "viewer",
    "turkish": "izleyici",
    "sentence": "The online tutorial had over a million viewers within the first week of its release."
  },
  {
    "id": 2677,
    "english": "village",
    "turkish": "köy",
    "sentence": "Many people prefer to live in a quiet village rather than a noisy city."
  },
  {
    "id": 2678,
    "english": "violence",
    "turkish": "şiddet",
    "sentence": "The government is implementing new policies to reduce violence in the region."
  },
  {
    "id": 2679,
    "english": "violent",
    "turkish": "şiddetli",
    "sentence": "The area was hit by a violent storm that caused significant damage to property."
  },
  {
    "id": 2680,
    "english": "virtual",
    "turkish": "sanal",
    "sentence": "Many companies now offer virtual tours of their facilities for potential investors."
  },
  {
    "id": 2681,
    "english": "virus",
    "turkish": "virüs",
    "sentence": "A powerful computer virus caused the company's network to shut down temporarily."
  },
  {
    "id": 2682,
    "english": "vision",
    "turkish": "vizyon",
    "sentence": "The founder shared her vision for a future where technology is accessible to everyone."
  },
  {
    "id": 2683,
    "english": "visit",
    "turkish": "ziyaret etmek",
    "sentence": "Representatives from the head office will visit our branch next Tuesday."
  },
  {
    "id": 2684,
    "english": "visitor",
    "turkish": "ziyaretçi",
    "sentence": "All visitors must sign in at the front desk and wear an identification badge."
  },
  {
    "id": 2685,
    "english": "visual",
    "turkish": "görsel",
    "sentence": "Charts and graphs are excellent visual aids for presenting complex data."
  },
  {
    "id": 2686,
    "english": "vital",
    "turkish": "hayati",
    "sentence": "Effective communication is vital for the success of any collaborative project."
  },
  {
    "id": 2687,
    "english": "vitamin",
    "turkish": "vitamin",
    "sentence": "Taking a daily vitamin supplement can help maintain a strong immune system."
  },
  {
    "id": 2688,
    "english": "voice",
    "turkish": "ses",
    "sentence": "The customer service representative had a very calm and helpful voice."
  },
  {
    "id": 2689,
    "english": "volume",
    "turkish": "hacim",
    "sentence": "The volume of exports has increased by twenty percent over the last year."
  },
  {
    "id": 2690,
    "english": "volunteer",
    "turkish": "gönüllü",
    "sentence": "She decided to volunteer at the local community center during her weekends."
  },
  {
    "id": 2691,
    "english": "vote",
    "turkish": "oy vermek",
    "sentence": "Citizens are encouraged to vote in the local elections this coming Sunday."
  },
  {
    "id": 2692,
    "english": "wage",
    "turkish": "ücret",
    "sentence": "The company decided to increase the hourly wage for all part-time employees."
  },
  {
    "id": 2693,
    "english": "wait",
    "turkish": "beklemek",
    "sentence": "The clients had to wait in the lobby for ten minutes before the meeting started."
  },
  {
    "id": 2694,
    "english": "waiter",
    "turkish": "garson",
    "sentence": "The waiter recommended several traditional dishes from the chef's special menu."
  },
  {
    "id": 2695,
    "english": "wake",
    "turkish": "uyanmak",
    "sentence": "I usually wake up early to exercise before I go to the office."
  },
  {
    "id": 2696,
    "english": "walk",
    "turkish": "yürümek",
    "sentence": "Walking to work is a great way to incorporate physical activity into your routine."
  },
  {
    "id": 2697,
    "english": "wall",
    "turkish": "duvar",
    "sentence": "The certificates of achievement were proudly displayed on the office wall."
  },
  {
    "id": 2698,
    "english": "want",
    "turkish": "istemek",
    "sentence": "Most employees want more opportunities for professional growth within the company."
  },
  {
    "id": 2699,
    "english": "war",
    "turkish": "savaş",
    "sentence": "The historian gave a lecture on the economic impacts of the second world war."
  },
  {
    "id": 2700,
    "english": "warm",
    "turkish": "ılık",
    "sentence": "The warm sunlight filled the room on a quiet Sunday afternoon."
  },
  {
    "id": 2701,
    "english": "warn",
    "turkish": "uyarmak",
    "sentence": "The lifeguard warned the swimmers about the strong current in the ocean."
  },
  {
    "id": 2702,
    "english": "warning",
    "turkish": "uyarı",
    "sentence": "The weather forecast issued a severe storm warning for the coastal areas."
  },
  {
    "id": 2703,
    "english": "wash",
    "turkish": "yıkamak",
    "sentence": "You should wash your hands thoroughly before preparing any food."
  },
  {
    "id": 2704,
    "english": "washing",
    "turkish": "yıkama",
    "sentence": "She spent the whole morning doing the washing and hanging it out to dry."
  },
  {
    "id": 2705,
    "english": "waste",
    "turkish": "israf etmek",
    "sentence": "We should not waste precious resources like water and electricity."
  },
  {
    "id": 2706,
    "english": "watch",
    "turkish": "izlemek",
    "sentence": "I prefer to watch documentaries that explore different cultures around the world."
  },
  {
    "id": 2707,
    "english": "water",
    "turkish": "su",
    "sentence": "It is essential to drink enough water to stay hydrated throughout the day."
  },
  {
    "id": 2708,
    "english": "wave",
    "turkish": "dalga",
    "sentence": "He gave a friendly wave to his neighbors as he drove past their house."
  },
  {
    "id": 2709,
    "english": "way",
    "turkish": "yol, yöntem",
    "sentence": "Technology has completely changed the way we communicate with each other."
  },
  {
    "id": 2710,
    "english": "we",
    "turkish": "biz",
    "sentence": "We are planning to organize a charity event to help local families in need."
  },
  {
    "id": 2711,
    "english": "weak",
    "turkish": "zayıf",
    "sentence": "After the long illness, he felt too weak to walk long distances."
  },
  {
    "id": 2712,
    "english": "weakness",
    "turkish": "zayıflık",
    "sentence": "Recognizing your own weakness is the first step toward personal growth."
  },
  {
    "id": 2713,
    "english": "wealth",
    "turkish": "servet",
    "sentence": "True wealth is not just about money, but also about health and happiness."
  },
  {
    "id": 2714,
    "english": "wealthy",
    "turkish": "zengin",
    "sentence": "Many wealthy individuals donate a portion of their income to various charities."
  },
  {
    "id": 2715,
    "english": "weapon",
    "turkish": "silah",
    "sentence": "Education is considered the most powerful weapon to change the world."
  },
  {
    "id": 2716,
    "english": "wear",
    "turkish": "giymek",
    "sentence": "You are required to wear a formal suit for the business conference tomorrow."
  },
  {
    "id": 2717,
    "english": "weather",
    "turkish": "hava durumu",
    "sentence": "The outdoor event was canceled due to the unpredictable weather conditions."
  },
  {
    "id": 2718,
    "english": "web",
    "turkish": "ağ",
    "sentence": "The information is widely available on the world wide web for anyone to access."
  },
  {
    "id": 2719,
    "english": "website",
    "turkish": "web sitesi",
    "sentence": "Please visit our official website to download the latest project report."
  },
  {
    "id": 2720,
    "english": "wedding",
    "turkish": "düğün",
    "sentence": "They are busy making final preparations for their wedding ceremony in June."
  },
  {
    "id": 2721,
    "english": "week",
    "turkish": "hafta",
    "sentence": "I usually have a very busy schedule during the first week of every month."
  },
  {
    "id": 2722,
    "english": "weekend",
    "turkish": "hafta sonu",
    "sentence": "They decided to spend the weekend hiking in the mountains near the city."
  },
  {
    "id": 2723,
    "english": "weigh",
    "turkish": "tartmak",
    "sentence": "You need to weigh the pros and cons before making a final decision."
  },
  {
    "id": 2724,
    "english": "weight",
    "turkish": "ağırlık",
    "sentence": "Regular exercise helps you maintain a healthy weight and improves your mood."
  },
  {
    "id": 2725,
    "english": "well",
    "turkish": "iyi",
    "sentence": "The project was well managed and completed ahead of the scheduled deadline."
  },
  {
    "id": 2726,
    "english": "west",
    "turkish": "batı",
    "sentence": "The sun sets in the west, creating a beautiful view over the horizon."
  },
  {
    "id": 2727,
    "english": "western",
    "turkish": "batılı",
    "sentence": "Western cultures often emphasize individualism and personal freedom of expression."
  },
  {
    "id": 2728,
    "english": "wet",
    "turkish": "ıslak",
    "sentence": "Be careful while walking because the floor is still wet from cleaning."
  },
  {
    "id": 2729,
    "english": "what",
    "turkish": "ne",
    "sentence": "I was wondering what the most effective strategy would be for our marketing campaign."
  },
  {
    "id": 2730,
    "english": "wheel",
    "turkish": "tekerlek",
    "sentence": "The driver lost control when one of the wheels hit a deep pothole."
  },
  {
    "id": 2731,
    "english": "when",
    "turkish": "ne zaman",
    "sentence": "I will call you when I receive the confirmation email from the manager."
  },
  {
    "id": 2732,
    "english": "whenever",
    "turkish": "ne zaman ...-sa",
    "sentence": "Whenever I travel to a new city, I try to visit the local museums."
  },
  {
    "id": 2733,
    "english": "where",
    "turkish": "nerede",
    "sentence": "Do you know where the nearest subway station is located from here?"
  },
  {
    "id": 2734,
    "english": "whereas",
    "turkish": "oysa",
    "sentence": "She enjoys outdoor activities, whereas her husband prefers staying at home."
  },
  {
    "id": 2735,
    "english": "wherever",
    "turkish": "her nerede",
    "sentence": "You can take your laptop and work from wherever you feel comfortable."
  },
  {
    "id": 2736,
    "english": "whether",
    "turkish": "olup olmadığı",
    "sentence": "I am not sure whether we should invest in this new startup or not."
  },
  {
    "id": 2737,
    "english": "which",
    "turkish": "hangi",
    "sentence": "Could you please tell me which platform is better for online learning?"
  },
  {
    "id": 2738,
    "english": "while",
    "turkish": "iken",
    "sentence": "Please remain silent while the guest speaker is giving her presentation."
  },
  {
    "id": 2739,
    "english": "whisper",
    "turkish": "fısıldamak",
    "sentence": "They had to whisper in the library to avoid disturbing the other students."
  },
  {
    "id": 2740,
    "english": "white",
    "turkish": "beyaz",
    "sentence": "The walls of the office were painted white to make the room look brighter."
  },
  {
    "id": 2741,
    "english": "who",
    "turkish": "kim",
    "sentence": "The person who interviewed me yesterday seemed very impressed with my resume."
  },
  {
    "id": 2742,
    "english": "whole",
    "turkish": "tüm",
    "sentence": "The whole team worked overtime to ensure the project was finished on time."
  },
  {
    "id": 2743,
    "english": "whom",
    "turkish": "kime",
    "sentence": "To whom should I address this formal letter regarding the job application?"
  },
  {
    "id": 2744,
    "english": "why",
    "turkish": "neden",
    "sentence": "Could you explain why there was a delay in the delivery of the products?"
  },
  {
    "id": 2745,
    "english": "wide",
    "turkish": "geniş",
    "sentence": "The company offers a wide range of services to meet different customer needs."
  },
  {
    "id": 2746,
    "english": "widely",
    "turkish": "yaygın olarak",
    "sentence": "English is a widely spoken language used in international business and politics."
  },
  {
    "id": 2747,
    "english": "wife",
    "turkish": "eş",
    "sentence": "He lives in a small apartment in the city center with his wife and child."
  },
  {
    "id": 2748,
    "english": "wild",
    "turkish": "vahşi",
    "sentence": "It is fascinating to observe wild animals in their natural habitats."
  },
  {
    "id": 2749,
    "english": "wildlife",
    "turkish": "yaban hayatı",
    "sentence": "The national park was established to protect the local wildlife and vegetation."
  },
  {
    "id": 2750,
    "english": "willing",
    "turkish": "istekli",
    "sentence": "She is willing to help us with the new project if we provide the necessary tools."
  },
  {
    "id": 2751,
    "english": "win",
    "turkish": "kazanmak",
    "sentence": "Our team needs to win this match to qualify for the next round of the tournament."
  },
  {
    "id": 2752,
    "english": "window",
    "turkish": "pencere",
    "sentence": "Please close the window because it is getting a bit cold outside."
  },
  {
    "id": 2753,
    "english": "wine",
    "turkish": "şarap",
    "sentence": "France is famous for producing some of the highest quality wine in the world."
  },
  {
    "id": 2754,
    "english": "wing",
    "turkish": "kanat",
    "sentence": "The bird had a broken wing and was unable to fly south for the winter."
  },
  {
    "id": 2755,
    "english": "winner",
    "turkish": "kazanan",
    "sentence": "The winner of the competition will receive a cash prize and a trophy."
  },
  {
    "id": 2756,
    "english": "winter",
    "turkish": "kış",
    "sentence": "We usually go skiing in the mountains during the winter break."
  },
  {
    "id": 2757,
    "english": "wire",
    "turkish": "tel",
    "sentence": "Be careful not to touch the electric wire as it might be dangerous."
  },
  {
    "id": 2758,
    "english": "wise",
    "turkish": "bilge, akıllı",
    "sentence": "It would be wise to save some money for future emergencies instead of spending it all."
  },
  {
    "id": 2759,
    "english": "wish",
    "turkish": "dilemek, dilek",
    "sentence": "I wish you all the best in your new career and future endeavors."
  },
  {
    "id": 2760,
    "english": "with",
    "turkish": "ile",
    "sentence": "She went to the art gallery with her friends to see the new exhibition."
  },
  {
    "id": 2761,
    "english": "within",
    "turkish": "içinde, dahilinde",
    "sentence": "The delivery is expected to arrive within three business days."
  },
  {
    "id": 2762,
    "english": "without",
    "turkish": "-sız, olmaksızın",
    "sentence": "It is difficult to imagine modern life without a stable internet connection."
  },
  {
    "id": 2763,
    "english": "witness",
    "turkish": "tanık, şahit",
    "sentence": "The witness provided a detailed description of the event to the police officers."
  },
  {
    "id": 2764,
    "english": "woman",
    "turkish": "kadın",
    "sentence": "She is a successful woman who leads one of the largest companies in the city."
  },
  {
    "id": 2765,
    "english": "wonder",
    "turkish": "merak etmek",
    "sentence": "I wonder why they decided to cancel the meeting at the last minute."
  },
  {
    "id": 2766,
    "english": "wonderful",
    "turkish": "harika",
    "sentence": "We had a wonderful time during our summer vacation in Italy."
  },
  {
    "id": 2767,
    "english": "wood",
    "turkish": "odun, tahta",
    "sentence": "The traditional cabin was built entirely out of high-quality wood."
  },
  {
    "id": 2768,
    "english": "wooden",
    "turkish": "ahşap",
    "sentence": "They bought a beautiful wooden dining table that matches the rest of the furniture."
  },
  {
    "id": 2769,
    "english": "wool",
    "turkish": "yün",
    "sentence": "This sweater is made of pure wool to keep you warm during the cold nights."
  },
  {
    "id": 2770,
    "english": "word",
    "turkish": "kelime, söz",
    "sentence": "I didn't understand a single word he said because of his thick accent."
  },
  {
    "id": 2771,
    "english": "work",
    "turkish": "çalışmak, iş",
    "sentence": "He has to work late tonight to finish the monthly financial report."
  },
  {
    "id": 2772,
    "english": "worker",
    "turkish": "işçi, çalışan",
    "sentence": "The factory provides health insurance for every full-time worker."
  },
  {
    "id": 2773,
    "english": "working",
    "turkish": "çalışma, çalışan",
    "sentence": "Good working conditions are essential for maintaining employee motivation."
  },
  {
    "id": 2774,
    "english": "world",
    "turkish": "dünya",
    "sentence": "Climate change is one of the biggest challenges facing the world today."
  },
  {
    "id": 2775,
    "english": "worldwide",
    "turkish": "dünya çapında",
    "sentence": "The company has a worldwide reputation for innovation and quality."
  },
  {
    "id": 2776,
    "english": "worried",
    "turkish": "endişeli",
    "sentence": "My parents were worried because I didn't answer my phone all evening."
  },
  {
    "id": 2777,
    "english": "worry",
    "turkish": "endişelenmek",
    "sentence": "You shouldn't worry too much about things that are out of your control."
  },
  {
    "id": 2778,
    "english": "worse",
    "turkish": "daha kötü",
    "sentence": "The weather forecast says the storm will get even worse tomorrow."
  },
  {
    "id": 2779,
    "english": "worst",
    "turkish": "en kötü",
    "sentence": "That was definitely the worst movie I have ever seen in my life."
  },
  {
    "id": 2780,
    "english": "worth",
    "turkish": "değer, değerinde",
    "sentence": "This antique watch is worth a lot of money because it is very rare."
  },
  {
    "id": 2781,
    "english": "wound",
    "turkish": "yara",
    "sentence": "The doctor cleaned the wound and applied a bandage to prevent infection."
  },
  {
    "id": 2782,
    "english": "wrap",
    "turkish": "sarmak, paketlemek",
    "sentence": "Please wrap the gift carefully so it doesn't get damaged in the mail."
  },
  {
    "id": 2783,
    "english": "write",
    "turkish": "yazmak",
    "sentence": "I need to write an email to my supervisor regarding the project updates."
  },
  {
    "id": 2784,
    "english": "writer",
    "turkish": "yazar",
    "sentence": "She is a famous writer who has published several best-selling novels."
  },
  {
    "id": 2785,
    "english": "writing",
    "turkish": "yazı, yazma",
    "sentence": "His writing style is very clear and easy for most people to understand."
  },
  {
    "id": 2786,
    "english": "written",
    "turkish": "yazılı",
    "sentence": "All candidates must provide a written statement explaining their motivation."
  },
  {
    "id": 2787,
    "english": "wrong",
    "turkish": "yanlış",
    "sentence": "If you provide the wrong address, your package might be sent back to the warehouse."
  },
  {
    "id": 2788,
    "english": "yard",
    "turkish": "bahçe, avlu",
    "sentence": "The children are playing with their toys in the back yard today."
  },
  {
    "id": 2789,
    "english": "year",
    "turkish": "yıl",
    "sentence": "She plans to travel across South America sometime next year."
  },
  {
    "id": 2790,
    "english": "yellow",
    "turkish": "sarı",
    "sentence": "The fields were filled with beautiful bright yellow flowers in the spring."
  },
  {
    "id": 2791,
    "english": "yesterday",
    "turkish": "dün",
    "sentence": "I met an old high school friend at the grocery store yesterday."
  },
  {
    "id": 2792,
    "english": "yet",
    "turkish": "henüz, yine de",
    "sentence": "I haven't finished reading the report yet, but I will send it soon."
  },
  {
    "id": 2793,
    "english": "you",
    "turkish": "sen, siz",
    "sentence": "You should take a short break if you are feeling overwhelmed by work."
  },
  {
    "id": 2794,
    "english": "young",
    "turkish": "genç",
    "sentence": "Many young people move to big cities to find better job opportunities."
  },
  {
    "id": 2795,
    "english": "yours",
    "turkish": "senin, sizinki",
    "sentence": "Is this blue umbrella yours, or did someone else leave it here?"
  },
  {
    "id": 2796,
    "english": "yourself",
    "turkish": "kendin, kendinizi",
    "sentence": "You should be proud of yourself for completing such a difficult task."
  },
  {
    "id": 2797,
    "english": "youth",
    "turkish": "gençlik",
    "sentence": "He spent most of his youth traveling and exploring different cultures."
  },
  {
    "id": 2798,
    "english": "zone",
    "turkish": "bölge, alan",
    "sentence": "Smoking is strictly prohibited in this designated smoke-free zone."
  }
];
