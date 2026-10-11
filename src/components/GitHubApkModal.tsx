import React, { useState } from 'react';
import { 
  Github, 
  Smartphone, 
  ZoomIn, 
  CheckCircle2, 
  Download, 
  X, 
  AlertTriangle, 
  Code2, 
  Copy, 
  Check, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface GitHubApkModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentZoom: number;
  onSetZoom: (zoom: number) => void;
}

export const GitHubApkModal: React.FC<GitHubApkModalProps> = ({
  isOpen,
  onClose,
  currentZoom,
  onSetZoom
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'zoom' | 'logo' | 'github' | 'pwa'>('zoom');

  if (!isOpen) return null;

  const webViewCode = `// Android Studio / Java (MainActivity.java):
WebSettings webSettings = myWebView.getSettings();
webSettings.setJavaScriptEnabled(true);
webSettings.setDomStorageEnabled(true);

// 🔥 လက်နဲ့ အကျဉ်း/အကျယ် ချဲ့ခွင့်ပြုရန် (Enable Pinch-to-Zoom):
webSettings.setSupportZoom(true);
webSettings.setBuiltInZoomControls(true);
webSettings.setDisplayZoomControls(false); // မလိုလားအပ်သော ခလုတ်တုံးကြီးများ မပေါ်စေရန်`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(webViewCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-white flex items-center gap-2">
                <span>GitHub & APK Upgrade လမ်းညွှန်</span>
                <span className="text-[10px] bg-red-600/30 text-red-300 border border-red-500/40 px-1.5 py-0.5 rounded font-mono">
                  Z.N.W Pro
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Pinch-to-Zoom (အကျဉ်း/အကျယ်ချဲ့ခြင်း) နှင့် GreatStar Logo မပျောက်စေရန် စီမံချက်များ
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/60 px-3 py-1.5 gap-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('zoom')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'zoom'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>၁။ ဇူးမ် (Zoom) ချဲ့နည်း</span>
          </button>

          <button
            onClick={() => setActiveTab('logo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'logo'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>၂။ လိုဂို (Logo) သတ်မှတ်နည်း</span>
          </button>

          <button
            onClick={() => setActiveTab('github')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'github'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>၃။ GitHub & WebView</span>
          </button>

          <button
            onClick={() => setActiveTab('pwa')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'pwa'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>၄။ PWA (အလွယ်ဆုံးနည်း)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-sm text-slate-300">
          
          {/* TAB 1: ZOOM */}
          {activeTab === 'zoom' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-3.5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-amber-300 block mb-1">
                    အကို မေးထားသည့် ပြဿနာအဖြေ (Zoom လုံးဝမပိတ်အောင် ပြုပြင်ထားမှု)
                  </span>
                  ဖုန်းထဲတွင် APK ပြောင်းထွက်လာချိန်တွင် အကျဉ်း/အကျယ် ချဲ့မရတော့ခြင်းမှာ Android WebView စနစ်တွင် <code className="text-amber-200 bg-amber-900/40 px-1 py-0.5 rounded">SupportZoom = false</code> ပုံသေပိတ်ထားလေ့ရှိသောကြောင့် ဖြစ်ပါသည်။
                </div>
              </div>

              {/* Solution 1: Built-in Live Zoom Controller */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                    <span>တိုက်ရိုက် စခရင် ဇူးမ်ချဲ့စနစ် (Built-in In-App Zoom)</span>
                  </span>
                  <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                    လက်ရှိ: {currentZoom}%
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  ဖုန်းစခရင် သေးငယ်နေလျှင် သို့မဟုတ် လက်တွင် ဆီပေနေ၍ လက်နှစ်ချောင်းဖြင့် ကလိရခက်ပါက အောက်ပါ ခလုတ်များဖြင့် တစ်ချက်နှိပ်ရုံဖြင့် စာလုံး၊ ပုံများနှင့် တော်ခ်ဇယားများကို ချက်ချင်း ချဲ့နိုင်/ကျဉ်းနိုင်ပါသည်:
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {[90, 100, 110, 125, 140, 150].map((level) => (
                    <button
                      key={level}
                      onClick={() => onSetZoom(level)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition border ${
                        currentZoom === level
                          ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-400/50 hover:bg-slate-800'
                      }`}
                    >
                      {level === 100 ? '100% (မူလ)' : `${level}%`}
                    </button>
                  ))}
                  <button
                    onClick={() => onSetZoom(100)}
                    className="px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white bg-slate-800/80 border border-slate-700 hover:bg-slate-700 ml-auto"
                  >
                    Reset (မူလအတိုင်း)
                  </button>
                </div>
              </div>

              {/* Solution 2: Viewport Code Fix */}
              <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>စနစ်အတွင်း Viewport Pinch-Zoom အပြည့်အဝ ဖွင့်လှစ်ထားရှိမှု:</span>
                </div>
                <div className="text-xs text-slate-400 bg-slate-900 p-2.5 rounded-lg font-mono border border-slate-800 overflow-x-auto">
                  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=5.0, user-scalable=yes" /&gt;
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  အထက်ပါ ကုဒ်ကြောင့် Web Browser များတွင် လက်နှစ်ချောင်းဖြင့် <span className="text-white font-bold">Pinch-to-zoom (အကျဉ်း/အကျယ်ချဲ့ခြင်း) ကို ၅ ဆ (500%) အထိ</span> လွတ်လပ်စွာ ချဲ့ကြည့်နိုင်အောင် သတ်မှတ်ပေးထားပြီး ဖြစ်ပါသည်။
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: LOGO */}
          {activeTab === 'logo' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center gap-4">
                <img 
                  src="/app-logo.jpg" 
                  alt="GreatStar Z.N.W" 
                  className="w-24 h-24 rounded-2xl shadow-xl ring-2 ring-amber-500/50 object-cover shrink-0"
                />
                <div className="space-y-1.5 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="font-black text-white text-base">GreatStar Diesel Pro</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-mono font-bold">
                      Z.N.W
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    ဆိုင်နာမည်: <span className="text-amber-400 font-semibold">GreatStar</span> | မူရင်းဖန်တီးသူ: <span className="text-amber-400 font-semibold">ဦးဇော်နိုင်ဝင်း (Z.N.W)</span>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    GitHub မှ ပုံသေချပေးသည့် ပုံတုန်းကြီး (Default Octocat/Android Bot Icon) လုံးဝ မဖြစ်စေရန် အောက်ပါ Icon ဖိုင်များကို စနစ်တကျ ချိတ်ဆက်ထားပြီး ဖြစ်ပါသည်:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <a
                      href="/app-logo.jpg"
                      download="GreatStar_ZNW_AppLogo_1024.jpg"
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>HD Logo (1024px) ဒေါင်းရန်</span>
                    </a>
                    <a
                      href="/icon-512.png"
                      download="ic_launcher_512.png"
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700 transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>APK Icon (512px)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Icon Checklist */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300 block">အသင့်ထည့်သွင်းထားသော ဖိုင်များ:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-mono text-white">/public/icon-512.png</div>
                      <div className="text-[10px] text-slate-400">Android APK & PWA Icon (512x512)</div>
                    </div>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-mono text-white">/public/icon-192.png</div>
                      <div className="text-[10px] text-slate-400">Mobile Home Screen (192x192)</div>
                    </div>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-mono text-white">/public/apple-touch-icon.png</div>
                      <div className="text-[10px] text-slate-400">iPhone / iPad Touch Icon (180x180)</div>
                    </div>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-mono text-white">/public/favicon.ico</div>
                      <div className="text-[10px] text-slate-400">Browser Tab GreatStar Icon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GITHUB & WEBVIEW */}
          {activeTab === 'github' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 space-y-2">
                <span className="font-bold text-white text-xs sm:text-sm block">
                  Android WebView တွင် Pinch-to-Zoom မပိတ်သွားစေရန် ထည့်ရမည့် ကုဒ်:
                </span>
                <p className="text-xs text-slate-400">
                  အကယ်၍ Android Studio (သို့မဟုတ် Website 2 APK) ဖြင့် APK ထုတ်မည်ဆိုပါက <code className="text-amber-300">MainActivity</code> တွင် အောက်ပါကုဒ်လိုင်း ၃ ကြောင်း ထည့်ပေးရုံဖြင့် လက်ဖြင့် အကျဉ်း/အကျယ်ချဲ့ခြင်း အပြည့်အဝ အလုပ်လုပ်ပါမည်:
                </p>
                <div className="relative">
                  <pre className="bg-slate-900 text-amber-200 text-xs p-3 rounded-lg overflow-x-auto font-mono border border-slate-800">
                    {webViewCode}
                  </pre>
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded border border-slate-700 flex items-center gap-1 transition"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'ကူးပြီးပြီ' : 'ကုဒ်ကူးရန်'}</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 space-y-2">
                <span className="font-bold text-white text-xs sm:text-sm block">
                  GitHub သို့ တင်ပြီး APK ထုတ်သည့် အဆင့်ဆင့်:
                </span>
                <ol className="text-xs text-slate-300 space-y-1.5 list-decimal pl-4">
                  <li>GitHub Repository သို့ ယခု Source Code ကို အပြည့်အစုံ Push/Upload ပြုလုပ်ပါ။</li>
                  <li>အက်ပ်လိုဂိုအတွက် <code className="text-amber-300">public/icon-512.png</code> ကို APK Icon (ic_launcher) အဖြစ် သတ်မှတ်ပါ။</li>
                  <li>WebView Zoom ကို အထက်ပါအတိုင်း <code className="text-emerald-400">setSupportZoom(true)</code> ပေးထားပါ။</li>
                  <li>ထွက်လာသော APK ကို မည်သည့် Android ဖုန်းတွင်မဆို အင်စတောလ်လုပ်၍ အဆင်ပြေစွာ သုံးနိုင်ပါပြီခင်ဗျာ။</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 4: PWA (EASIEST) */}
          {activeTab === 'pwa' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3.5 flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-emerald-300 block mb-1">
                    အကောင်းဆုံးနှင့် အလွယ်ဆုံး အကြံပြုချက် (APK တောင် မထုတ်ဘဲ App သွင်းနည်း)
                  </span>
                  ယခု App သည် <b>Progressive Web App (PWA)</b> စနစ် အပြည့်အစုံ ပါရှိပြီး ဖြစ်ပါသည်။ ဖုန်းထဲတွင် APK ဆောက်ရန်မလိုဘဲ တိုက်ရိုက် ထည့်သွင်းနိုင်ပါသည်:
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
                <span className="font-bold text-white text-xs sm:text-sm block">
                  📲 ဖုန်းထဲသို့ အက်ပ်အဖြစ် ထည့်သွင်းနည်း (၃ စက္ကန့်သာ ကြာပါသည်):
                </span>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold text-[11px] shrink-0">
                      ၁
                    </span>
                    <span>ယခု App လင့်ခ်ကို ဖုန်း၏ <b>Google Chrome</b> (သို့မဟုတ် Safari) ဖြင့် ဖွင့်ပါ။</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold text-[11px] shrink-0">
                      ၂
                    </span>
                    <span>ညာဘက်အပေါ်ထောင့်က အစက် ၃ စက် (⋮) ကို နှိပ်ပြီး <b>"Install app"</b> သို့မဟုတ် <b>"Add to Home screen (ပင်မစာမျက်နှာသို့ ထည့်ရန်)"</b> ကို နှိပ်ပါ။</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold text-[11px] shrink-0">
                      ၃
                    </span>
                    <span>ဖုန်း Screen ပေါ်တွင် <b>GreatStar Z.N.W</b> လိုဂိုဖြင့် App အိုင်ကွန် အစစ် ရောက်သွားမည်ဖြစ်ပြီး <b>လက်ဖြင့် အကျဉ်း/အကျယ် (Zoom) ချဲ့ခြင်း ၁၀၀% အလုပ်လုပ်</b> ပါမည်။</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            GreatStar Diesel Master • Author: Zaw Naing Win
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-md"
          >
            နားလည်ပါပြီ (ပိတ်မည်)
          </button>
        </div>

      </div>
    </div>
  );
};
