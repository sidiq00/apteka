# 🏥 AptekaPharmaAI - GitHub Pages Version

**Aptekachilar uchun Intellektual Dori Tahlili Tizimi**

> 🚀 GitHub Pages-da bepul, **5 daqiqada** ishga tushadi!

---

## 📋 Nima Mavjud?

✅ **15+ Populyar dori** bilan dori bazasi
✅ **Tez qidiruv** - nomi, kategoriya, qo'llanilanishi bo'yicha
✅ **O'zaro ta'sirlari tekshirish** - xavfli kombinatsiyalarni ogohlantirish
✅ **Farmatsevtik chatbot** - dori savollariga javob
✅ **Responsive dizayn** - telefon va kompyuterda ishlay
✅ **Bepul deployment** - GitHub Pages-da
✅ **HTTPS** - avtomatik xavfli

---

## 🚀 Tezda Deploy Qilish

### **Talab qilinadigan narsalar:**
- GitHub account (bepul): https://github.com/signup
- Node.js 18+: https://nodejs.org/
- Git: https://git-scm.com/

### **Qadamlar (5 daqiqada):**

```bash
# 1. GitHub repo yaratish va clone qilish
git clone https://github.com/YOUR_USERNAME/aptekapharmaai.git
cd aptekapharmaai

# 2. Ushbu fayllarni qo'shish (struktura ostida)
# - public/index.html
# - public/drugs.json
# - src/App.jsx
# - src/index.jsx
# - package.json
# - .gitignore

# 3. Dependencies
npm install

# 4. GitHub-ga push
git add .
git commit -m "Initial commit - AptekaPharmaAI"
git push origin main

# 5. GitHub Pages sozlash
# GitHub Settings → Pages → gh-pages branch
```

**Keyin:** 2-5 daqiqada app online bo'ladi! 🎉

---

## 📁 Proyekt Struktura

```
aptekapharmaai/
├── package.json                    # npm konfiguratsiya
├── .gitignore                      # Git settings
├── public/
│   ├── index.html                  # React HTML template
│   └── drugs.json                  # Dori bazasi (JSON)
└── src/
    ├── App.jsx                     # Main React component
    └── index.jsx                   # React entry
```

---

## 🔧 Fayllar Tavsifi

### **package.json**
- React, Tailwind CSS, Lucide icons dependencies
- Build scripts
- GitHub Pages homepage URL

### **public/drugs.json**
- 15+ populyar dori
- Qo'llaniladigan joyları, dozalari, yan ta'sirlari
- O'zaro ta'sirlari

### **src/App.jsx**
- Main React component
- Dori qidiruvi
- Chatbot
- Drug details view
- Responsive design (Tailwind CSS)

### **.gitignore**
- node_modules/
- build/
- .env files
- IDE settings

---

## 🌍 URL

```
https://YOUR_USERNAME.github.io/aptekapharmaai
```

GitHub Pages-da **bepul** hosting!

---

## 📱 Features

### 🔍 **Dori Qidiruvi**
- Tezkor qidiruv
- Nomi bo'yicha
- Kategoriya bo'yicha
- Qo'llanilanishi bo'yicha

### 💬 **Farmatsevtik Chatbot**
- "Og'riq nima uchun?"
- "Dori nima bulib?"
- "Isitmani qanday tushirish?"
- Real-time javob

### ⚠️ **O'zaro Ta'sirlari**
- Xavfli kombinatsiyalarni ko'rish
- Ishlatmasligi kerak bo'lgan dorilar
- Yan ta'sirlari

### 🎨 **Beautiful UI**
- Modern design
- Responsive (RWD)
- Tailwind CSS
- Accessibility

---

## 🔄 Ko'roq Dori Qo'shish

Faqat `drugs.json` ni edit qiling:

```json
{
  "drugs": [
    {
      "id": 16,
      "name": "Yangi Dori",
      "generic": "Generic Name",
      "usage": "Qo'llaniladigan joyi",
      "dose": "Doғa",
      "sideEffects": "Yan ta'sirlari",
      "interactions": ["Dori1", "Dori2"],
      "category": "Kategoriya",
      "price": "Narx",
      "manufacturer": "Ishlab chiqaruvchi"
    }
  ]
}
```

Push qiling → GitHub Pages avtomatik yangilanadi! ✨

---

## 📊 Deployment Variants

| Platform | Vaqt | Narx | Difficulty |
|----------|------|------|-----------|
| **GitHub Pages** | 5 min | Bepul | ⭐ (Oson) |
| Vercel | 5 min | Bepul | ⭐ (Oson) |
| Netlify | 5 min | Bepul | ⭐ (Oson) |
| Heroku | 10 min | Platnyá | ⭐⭐ |

---

## 🛠️ Development

### **Local test:**
```bash
npm start
# Browser: http://localhost:3000
```

### **Production build:**
```bash
npm run build
# build/ folder yaratiladi
```

---

## 🔐 Security

✅ HTTPS - avtomatik enabled
✅ No API keys needed
✅ Statik content - safe
✅ Open source

---

## ⚖️ Disclaimer

⚠️ **Bu tizim faqat ma'lumot uchun!**

- Hamma dorilar shifoning tavsiyasi bilan foydalanilishi kerak
- Shifoka maslahat qilmasdan o'z-o'zidan davola olmang
- Yangi belgilari bo'lsa, darhol shifoga boring

---

## 📞 Support

**Savollar?** GITHUB_PAGES_SETUP_UZ.md ni ko'ring!

---

## 📄 License

MIT License - Free to use and modify

---

## 🎯 Next Steps

1. ✅ Deploy to GitHub Pages
2. 📈 Ko'roq dori qo'shish
3. 🔄 Updates
4. 💾 Database (Supabase/Firebase)
5. 📱 Mobile app (React Native)
6. 🌍 Translation (Rus, Ingliz)

---

Made with ❤️ for Pharmacists
**AptekaPharmaAI © 2024**
