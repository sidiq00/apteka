# 🚀 GitHub Pages-da AptekaPharmaAI Deploy Qilish

## ⚡ **TEZ BOSQICHLAR (10 DAQIQADA)**

### **BOSQICH 1: GitHub Account Yaratish**
1. **https://github.com/signup** ga boring
2. Email, password kirgiz, verify qil
3. Username tanlang (masalan: `aptekachilar`)

---

### **BOSQICH 2: Repository Yaratish**

1. **GitHub login qilib, "Create repository" qil**
   - Name: `aptekapharmaai`
   - Public tanlang
   - "Create repository" bosing

2. **SSH key sozlash** (optional, lekin tavsiya qilinadi)
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   # Key faylni GitHub ➜ Settings ➜ SSH Keys ga qo'shing
   ```

---

### **BOSQICH 3: Proyektni Local-da Tayyorlash**

```bash
# Terminal/Command Prompt da:

# 1. Repository klonlash
git clone https://github.com/YOUR_USERNAME/aptekapharmaai.git
cd aptekapharmaai

# 2. Barcha fayllarni shu papkaga ko'shing:
# - public/index.html
# - public/drugs.json
# - src/App.jsx (react component)
# - package.json
# - .gitignore
```

---

### **BOSQICH 4: Node.js va npm o'rnatish**

Agar o'rnatilmagan bo'lsa:
```bash
# https://nodejs.org/ dan Node.js 18+ o'rnating

# Tekshirish
node --version
npm --version
```

---

### **BOSQICH 5: Loyihani Ishlatish va Build Qilish**

```bash
# Proyekt papkasida:

# 1. Kutubxonalarni o'rnatish
npm install

# 2. Local test (ixtiyoriy)
npm start
# Browser-da: http://localhost:3000

# 3. GitHub Pages uchun build qilish
npm run build
```

---

### **BOSQICH 6: GitHub-ga Push Qilish**

```bash
# Proyekt papkasida:

# 1. Git ni ishga tushirish (birinchi marta)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# 2. Barcha fayllarni stage-ga qo'shish
git add .

# 3. Commit qilish
git commit -m "Initial commit - AptekaPharmaAI"

# 4. GitHub-ga push qilish
git push origin main
```

---

### **BOSQICH 7: GitHub Pages Sozlash**

1. **GitHub -> Repository -> Settings** boring
2. **"Pages"** (chap tarafda)
3. **"Build and deployment"** bo'limida:
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. **"Save"** bosing

5. **GitHub Actions sozlash** (avtomatik deploy uchun):
   - **Settings → Actions → General**
   - "Workflow permissions" → "Read and write permissions"
   - **Save**

---

### **BOSQICH 8: Avtomatik Deploy Sozlash** (ixtiyoriy)

`.github/workflows/deploy.yml` fayl yaratish:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

---

### **BOSQICH 9: Tayyy! 🎉**

**2-5 daqiqadan keyin, sizning app:**
```
https://YOUR_USERNAME.github.io/aptekapharmaai
```

Ushbu URL-da ishga tushadi!

---

## 📋 **KEYIN HAR GEL YANGILASH**

Faylni o'zgartirganingizdan keyin:

```bash
# Terminal-da proyekt papkasida:
git add .
git commit -m "Dorilar bazasini yangiladi"
git push origin main

# GitHub Pages avtomatik yangilanitur!
```

---

## 🐛 **AGAR MUAMMO BO'LSA**

### **"404 Not Found" xatosi**
- `package.json`-da `"homepage"` berilganmi?
- Check: `"homepage": "https://USERNAME.github.io/aptekapharmaai"`
- GitHub Pages sozlanganmi? (Settings → Pages)

### **CSS/JS yuklmadi**
- Browser console-da xatolarni ko'rish
- Build folder mavjudmi?
- `npm run build` qayta bajaring

### **Dorilar ko'rinmadi**
- `public/drugs.json` papkada bormi?
- React komponentasida `fetch('drugs.json')` to'g'rimi?

---

## 📚 **KEYINGI QADAMLAR**

1. ✅ **Custom domain** qo'shing (opsional):
   - Settings → Pages → Custom domain
   - Domain registrar-da CNAME record qo'shing

2. 🔐 **HTTPS** avtomatik yoqiladi

3. 📊 **Analytics** qo'shing:
   - Google Analytics
   - Vercel Analytics

4. 💾 **Database** qo'shing (keyin):
   - Supabase
   - Firebase
   - AWS

---

## 🎯 **YO'NALTIRUVCHI FAYLLAR**

```
aptekapharmaai/
├── public/
│   ├── index.html          ← Main HTML
│   └── drugs.json          ← Dori bazasi
├── src/
│   ├── App.jsx             ← React komponent
│   └── index.js            ← React entry
├── package.json            ← npm konfiguratsiya
├── .gitignore              ← Git exclude
└── .github/workflows/      ← GitHub Actions (deploy)
    └── deploy.yml
```

---

## 🚀 **DEPLOY DONE!**

**E-mail: aptekachilar@example.com**
**URL: https://aptekachilar.github.io/aptekapharmaai** 🎉

---

### **Savol bo'lsa - GitHub Desktop ishlatishingiz mumkin!**
- Easy UI orqali git push qiling
- Terminal bilmagan odamlar uchun yaroqli
- Download: https://desktop.github.com/
