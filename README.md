# GreatStar Diesel Pro (Z.N.W) 🌟
**Author & Founder:** Zaw Naing Win (Z.N.W)  
**Shop:** GreatStar Workshop  
**Description:** Global Multi-Brand Diesel Engine Master Workshop Handbook (Japan, Korea, China, USA, Europe).

---

## 📱 GitHub မှတစ်ဆင့် APK / Mobile App ထုတ်ယူနည်းနှင့် ပြဿနာဖြေရှင်းနည်း လမ်းညွှန်

### ၁။ GitHub သို့ ချိတ်ဆက်ပြီး Code တင်နည်း (Git Push Guide)
စက်ထဲတွင်ဖြစ်စေ Terminal တွင်ဖြစ်စေ အောက်ပါ command များဖြင့် GitHub Repository အသစ်ဆီသို့ တင်နိုင်ပါသည်:

```bash
# Git စတင်တည်ဆောက်ခြင်း
git init

# ဖိုင်အားလုံး ထည့်သွင်းခြင်း
git add .

# ပထမအကြိမ် Commit မှတ်သားခြင်း
git commit -m "GreatStar Diesel Pro Z.N.W - Complete Multi-Brand Engine Guide with Zoom & App Icons"

# Main Branch သတ်မှတ်ခြင်း
git branch -M main

# GitHub Repo URL ချိတ်ဆက်ခြင်း (သင်၏ GitHub Repo Link ထည့်ပါ)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# GitHub သို့ Push တင်ခြင်း
git push -u origin main
```

---

### ၂။ App Logo "ပုံတုန်းကြီး" (Default Cube Icon) မဖြစ်စေရန် စီမံထားမှုများ 🎨

အရင်က GitHub ကနေ Web2Apk / Website 2 APK / Android Studio နဲ့ APK ပြောင်းရာတွင် GitHub/Android မူရင်း ပုံတုန်းစတုဂံတုံးကြီး ဖြစ်သွားရသည့် အကြောင်းရင်းမှာ Android အသိအမှတ်ပြု Folder များ မရှိခဲ့၍ ဖြစ်ပါသည်။

ယခုအခါ အောက်ပါ Icon များအားလုံးကို GreatStar (Z.N.W) တံဆိပ်အစစ်ဖြင့် အသင့်ဖန်တီးထည့်သွင်းပေးထားပြီး ဖြစ်ပါသည်:
1. **Root `icon.png` (512x512)** - APK builder များ တိုက်ရိုက်ဖတ်နိုင်ရန်
2. **`public/app-logo.jpg`, `icon-512.png`, `icon-192.png`, `apple-touch-icon.png`** - Web & PWA Install အတွက်
3. **Android Resources (`android/res/` နှင့် `res/`)**:
   - `mipmap-mdpi/ic_launcher.png` (48x48)
   - `mipmap-hdpi/ic_launcher.png` (72x72)
   - `mipmap-xhdpi/ic_launcher.png` (96x96)
   - `mipmap-xxhdpi/ic_launcher.png` (144x144)
   - `mipmap-xxxhdpi/ic_launcher.png` (192x192)

👉 **Website 2 APK Builder သို့မဟုတ် Android Studio တွင် အသုံးပြုသည့်အခါ:**  
App Icon နေရာတွင် Root ထဲက `icon.png` သို့မဟုတ် `public/app-logo.jpg` ကို ရွေးပေးရုံဖြင့် ဖုန်းစခရင်ပေါ်တွင် လှပသော **GreatStar Z.N.W ရွှေတံဆိပ်/အင်ဂျင်လိုဂို** အတိအကျ ပေါ်နေမည် ဖြစ်ပါသည်။

---

### ၃။ စခရင် အကျဉ်း/အကျယ် (Zoom In / Zoom Out) မရတော့သည့် ပြဿနာ ဖြေရှင်းချက် 🔍

APK ပြောင်းလိုက်သည့်အခါ လက်နှစ်ချောင်းဖြင့် ချဲ့မရတော့ခြင်း (Pinch Zoom ပျောက်သွားခြင်း) အတွက် **နည်းလမ်း ၂ သွယ်ဖြင့် ၁၀၀% အာမခံချက်ရှိအောင် စီမံထားပါသည်**:

#### နည်းလမ်း (က) — App ထဲတွင် တိုက်ရိုက်နှိပ်နိုင်သော In-App Zoom ခလုတ်များ ထည့်သွင်းပေးထားခြင်း
ဖုန်း WebView က ချဲ့တာ ပိတ်ထားလျှင်ပင် App ၏ အပေါ်ဘား (Top Bar) တွင်:
- **`[-]` ချုံ့ရန်ခလုတ်** (Zoom Out -10%)
- **`[100%]` မူလအတိုင်း ပြန်ထားရန်**
- **`[+]` ချဲ့ရန်ခလုတ်** (Zoom In +10% မှ 150% အထိ)

ပါရှိသောကြောင့် လက်ဆီပေနေသည့် စက်ပြင်ဆရာများအတွက် အလွန်လွယ်ကူစွာ စာလုံးနှင့် တော်ခ်ဇယားများကို ချက်ချင်း ချဲ့ကြည့်နိုင်ပါသည်။

#### နည်းလမ်း (ခ) — Android WebView (Java/Kotlin) တွင် Zoom ဖွင့်ပေးရန် ကုဒ်
အကယ်၍ Android Studio ဖြင့် ကိုယ်တိုင် APK ထုတ်ပါက `MainActivity` ထဲတွင် အောက်ပါ ကုဒ်လေး ထည့်ပေးပါ:

```java
WebSettings webSettings = webView.getSettings();
webSettings.setJavaScriptEnabled(true);
webSettings.setDomStorageEnabled(true);

// 🔍 လက်နှစ်ချောင်းဖြင့် ချဲ့ကြည့်နိုင်စေရန် (Pinch-to-Zoom Enable)
webSettings.setSupportZoom(true);
webSettings.setBuiltInZoomControls(true);
webSettings.setDisplayZoomControls(false); // Android မူရင်း ခလုတ်တုံးကြီးကို ဖျောက်ထားမည်
```

#### နည်းလမ်း (ဂ) — HTML Viewport Configuration
`index.html` တွင်လည်း `user-scalable=yes`, `minimum-scale=0.5`, `maximum-scale=5.0` ဟု အပြည့်အဝ ဖွင့်ပေးထားပြီး ဖြစ်ပါသည်။

---

## 🛠️ Local Development & Build Commands

```bash
# Dependencies သွင်းရန်
npm install

# Development Server စတင်ရန်
npm run dev

# Production Build ထုတ်ရန် (dist/ folder ထွက်လာမည်)
npm run build
```
