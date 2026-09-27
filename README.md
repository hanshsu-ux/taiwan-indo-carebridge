# 台印照護好幫手 (Bisa! CareBridge)

> 專為台灣在居家護理長輩、家庭雇主與印尼籍家庭看護工打造的雙向即時溝通板與照護學習 PWA 網頁應用。

---

## 🌟 核心功能特色

1. **雙向溝通發音板 (Two-Way Communication Board)**
   - 包含「我需要幫忙」、「我想喝溫水」、「我想上廁所」、「該吃藥了」、「哪裡在痛」等大按鈕卡片。
   - 點擊直接調用瀏覽器內建 Web Speech API 播放真人雙語發音。
   - 雙模式切換：
     - **長輩模式 (Mode Majikan)**：中文大字體、注音、台語發音提示、點擊播放印尼語給看護聽。
     - **看護模式 (Mode Perawat)**：印尼文置頂、印尼式拼音念中文、點擊播放中文給長輩聽。

2. **台灣長輩台語照護實用語 (Hokkien Care Phrases)**
   - 納入「愛放尿 (ài pàng-jiō)」、「愛呷藥仔 (ài tsia̍h-io̍h)」、「身軀痛 (sin-khu thiànn)」、「心肝頭足慒 (sim-kuann-thâu tsiok tso)」等高頻句子，附帶印尼文翻譯與近似音。

3. **170 筆生活照護單字庫 (Learning Modules)**
   - 涵蓋 11 大生活分類（問候禮貌、稱謂、時間、照護動作、身體部位、症狀不適、飲食、藥物就醫、家事清潔、數字、緊急狀況）。
   - 支援中、印、拼音即時模糊搜尋。

4. **每日照護工作檢查表 (Daily Task Checklist)**
   - 時間軸式護理流程（量血壓、拍痰、更換尿布、翻身拍背、體溫測量...）。
   - 支援互動打勾、完成度百分比進度條與自動儲存。

5. **穆斯林文化備忘與自訂備忘錄 (Cultural Notes & Memo)**
   - 清真飲食 (Halal) 規範、每日五次祈禱時間 (Sholat) 與台灣長輩生活習性指引。
   - 雇主可輸入長輩病歷、過敏史與用藥叮嚀，自動本機保存並支援語音朗讀。

---

## 🚀 部署至 GitHub 與 Vercel 指南

### 步驟 1：在 GitHub 建立新儲存庫
1. 前往 [GitHub](https://github.com/new) 建立一個名為 `taiwan-indo-carebridge` 的新儲存庫（建議設為 Public 或 Private）。

### 步驟 2：將本機代碼推送到 GitHub
在終端機中執行：
```bash
cd ~/taiwan-indo-carebridge
git init
git add .
git commit -m "feat: 初版台印照護好幫手 PWA 應用程式"
git branch -M main
git remote add origin https://github.com/您的GitHub帳號/taiwan-indo-carebridge.git
git push -u origin main
```

### 步驟 3：在 Vercel 匯入並部署
1. 前往 [Vercel Dashboard](https://vercel.com/dashboard)。
2. 點擊 **"Add New..." -> "Project"**。
3. 選擇剛剛推送到 GitHub 的 `taiwan-indo-carebridge` 儲存庫並點擊 **"Import"**。
4. Framework Preset 保持預設 (Other)，Build Command 與 Output Directory 無需修改。
5. 點擊 **"Deploy"**，幾秒鐘後即可取得專屬的線上 HTTPS 正式網址！

---

## 💻 本地端立即測試
您可以在本機直接開啟 `index.html`：
- 在 Mac 終端機執行：`open ~/taiwan-indo-carebridge/index.html`
- 或在該目錄執行：`npx serve .`

---

## 📄 相關文件
- [台印照護好幫手 (Bisa! 雙語照護網) - 產品規格文件 (PRD & Wireframe)](https://docs.google.com/document/d/12AB4pbGDzu1PDxjpihBAT0xSAHSj6G9j3QvfC76ZoLo/edit)
