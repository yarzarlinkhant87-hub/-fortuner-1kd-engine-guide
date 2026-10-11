import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { EngineSpec } from '../data/toyotaDieselData';

interface Props {
  engine: any;
}

export const ValveAdjustmentGuide: React.FC<Props> = ({ engine }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // Custom guide logic based on engine series / type
  const isToyota4Cyl = engine.brand === 'TOYOTA' && engine.cylinders === 4 && ['KD', 'GD', 'L', 'KZ'].includes(engine.series);
  const isV8 = engine.brand === 'TOYOTA' && engine.cylinders === 8; // 1VD-FTV
  const isV6 = engine.brand === 'TOYOTA' && engine.cylinders === 6 && engine.series === 'F33A';
  const is6CylInline = engine.brand === 'TOYOTA' && engine.cylinders === 6 && engine.series === 'HZ_HD'; // 1HZ, 1HD
  const isVHeavyTruck = (engine.cylinders === 10 || engine.cylinders === 12 || ((engine.brand === 'ISUZU' || engine.brand === 'NISSAN') && engine.cylinders === 8));

  // If this engine does not have a specialized guide, hide completely so it doesn't mix with other engines
  if (!isToyota4Cyl && !isV8 && !isV6 && !is6CylInline && !isVHeavyTruck) {
    return null;
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              ဘားချိန်နည်း & Valve Overlap လမ်းညွှန်
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                {engine.code}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              အဆို့ (Valve) မလွဲအောင် ဘယ်ဆလင်ဒါကို TDC ထားချိန် ဘယ်ဘားတွေ ချိန်ရမလဲ ရှင်းလင်းချက်
            </p>
          </div>
        </div>

        <button className="p-1.5 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-slate-800 space-y-4 text-xs text-slate-300">
          
          {/* Concept definition of Valve Overlap */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <h4 className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" /> Valve Overlap (ဘားအိုဗာလက်) ဆိုတာ ဘာလဲ?
            </h4>
            <p className="leading-relaxed text-slate-300">
              <strong>ဘားအိုဗာလက် (Valve Overlap)</strong> ဆိုတာ ဆလင်ဒါတစ်ခုမှာ အိတ်ဇောထွက်ခါနီး (Exhaust ပိတ်ခါနီး) နဲ့ အင်တိတ်ဆီလေဝင်ခါစ (Intake စဖွင့်ချိန်) မှာ <strong>ဘား ၂ မျိုးစလုံး တစ်ပြိုင်နက် ပွင့်နေတဲ့ အခိုက်အတန့်</strong> ကို ခေါ်ပါတယ်။
              <br />
              💡 <strong>ဝပ်ရှော့ လက်တွေ့ မှတ်သားနည်း:</strong> မျက်နှာချင်းဆိုင် မီးပေါက်စုံတွဲ (Companion Cylinder) က <strong>ဘားအိုဗာလက် (Overlap)</strong> ဖြစ်နေချိန်မှာ အခြားတစ်လုံးက <strong>TDC Compression (အပိန်းဆုံး အပိတ်ဆုံး)</strong> ရောက်နေတာမို့ အဲဒီတစ်လုံးရဲ့ ဘားတွေကို စိတ်ချလက်ချ ချိန်ညှိနိုင်တာ ဖြစ်ပါတယ်။
            </p>
          </div>

          {/* V8 SPECIFIC GUIDE (1VD-FTV) */}
          {isV8 && (
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-red-950/40 to-slate-950 p-4 rounded-xl border border-red-900/40">
                <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  V8 (1VD-FTV) ဘားချိန် စနစ် (Bank 1 & Bank 2)
                </h4>
                <p className="mb-2 leading-relaxed">
                  1VD-FTV အင်ဂျင်သည် <strong>Firing Order (1-2-7-3-4-5-6-8)</strong> ဖြစ်ပြီး ဆလင်ဒါ ၈ လုံး ရှိပါသည်:
                  <br />
                  • <strong>Bank 1 (ညာဘက်ခြမ်း):</strong> ဆလင်ဒါ ၁, ၃, ၅, ၇
                  <br />
                  • <strong>Bank 2 (ဘယ်ဘက်ခြမ်း):</strong> ဆလင်ဒါ ၂, ၄, ၆, ၈
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="font-bold text-amber-400 block mb-1">အဆင့် (၁): No. 1 Cylinder TDC ထားချိန်</span>
                    <p className="text-[11px] text-slate-300">
                      Crankshaft ကို 0° TDC တွင် ချိန်ပြီး No. 1 သည် Compression Stroke တွင် ရှိပါက တိုင်းတာရမည့် ဘားများ:
                      <br />
                      • <strong>Cyl 1:</strong> Intake & Exhaust
                      <br />
                      • <strong>Cyl 2:</strong> Intake
                      <br />
                      • <strong>Cyl 7:</strong> Exhaust
                    </p>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="font-bold text-blue-400 block mb-1">အဆင့် (၂): Crankshaft ၃၆၀° (၁ ပတ်) လှည့်ပြီး</span>
                    <p className="text-[11px] text-slate-300">
                      Crankshaft ကို နောက်ထပ် ၃၆၀ ဒီဂရီ ထပ်လှည့်၍ No. 4 Cylinder TDC ရောက်ချိန်တွင် ကျန်ရှိသော ဘားများ:
                      <br />
                      • <strong>Cyl 4:</strong> Intake & Exhaust
                      <br />
                      • <strong>Cyl 3, 5, 6, 8:</strong> သက်ဆိုင်ရာ လွတ်နေသော ဘားများ
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-[11px] text-amber-300">
                  ⚠️ <strong>Shimless Tappet ဖြစ်၍:</strong> Clearance မမှန်ပါက ကမ်ရှပ်ကို ဖြုတ်ပြီး သတ်မှတ် မိုက်ခရိုမီတာ အထူရှိသော Lifter ဖလားခွက် အသစ်ကို လဲလှယ် တပ်ဆင်ရပါမည်။
                </div>
              </div>
            </div>
          )}

                    {/* ISUZU V10 & V8 HEAVY TRUCK GUIDE (10PE1 / 8PE1) */}
          {(engine.cylinders === 10 || engine.cylinders === 12 || (engine.brand === 'ISUZU' && engine.cylinders === 8) || (engine.brand === 'NISSAN' && engine.cylinders === 8)) && (
            <div className="bg-gradient-to-r from-purple-950/40 to-slate-950 p-4 rounded-xl border border-purple-900/40 space-y-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                ကားကြီး V-Type V8/V10/V12 ({engine.code}) ဘားချိန်နည်း လမ်းညွှန်
              </h4>
              <p className="text-slate-300 leading-relaxed">
                • <strong>ဆလင်ဒါ စီစဉ်ပုံ:</strong> ညာဘက်ခြမ်း (Right Bank 1) တွင် <strong>1, 3, 5, 7 {engine.cylinders === 10 ? ', 9' : ''}</strong> နှင့် ဘယ်ဘက်ခြမ်း (Left Bank 2) တွင် <strong>2, 4, 6, 8 {engine.cylinders === 10 ? ', 10' : ''}</strong> စီစဉ်ထားပါသည်။
                <br />
                • <strong>Firing Order:</strong> {engine.firingOrder}
                <br />
                • <strong>ဘားကွာဟချက် စံနှုန်း:</strong> အင်ဂျင်အေးချိန် Intake & Exhaust နှစ်မျိုးစလုံး <strong>0.40 mm</strong> (Feel gauge ပြားဖြင့် ဝက်အူနှင့် လော့နတ် ညှိပါ)။
              </p>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-[11px] text-purple-300">
                💡 <strong>ဝပ်ရှော့ လက်တွေ့ ဘားချိန်နည်း:</strong> မီးပေါက်စဉ် (Firing Order) အတိုင်း ဆလင်ဒါတစ်ခုချင်းစီကို TDC (အပိန်းဆုံး အပိတ်ဆုံး) အလှည့်ကျ ရောက်ချိန်တွင် ၎င်းဆလင်ဒါ၏ Intake နှင့် Exhaust ဘား ၂ ခုစလုံးကို တပြိုင်နက် 0.40 mm သေချာ ချိန်ညှိသွားနိုင်ပါသည်။
              </div>
            </div>
          )}

          {/* 6-CYLINDER INLINE (1HZ, 1HD) */}
          {is6CylInline && (
            <div className="bg-gradient-to-r from-blue-950/40 to-slate-950 p-4 rounded-xl border border-blue-900/40">
              <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                ၆ လုံးထိုး (1HZ / 1HD) မီးပေါက်စုံတွဲ အလှည့်ကျ ချိန်နည်း
              </h4>
              <p className="mb-2 leading-relaxed">
                Firing Order: <strong>1 - 5 - 3 - 6 - 2 - 4</strong> (စုံတွဲများမှာ <strong>1-6, 5-2, 3-4</strong> ဖြစ်သည်)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="font-bold text-amber-400 block mb-1">၁။ No. 1 TDC Compression (No. 6 Overlap)</span>
                  <p className="text-[11px] text-slate-300">
                    No. 6 တွင် ဘား ၂ မျိုးစလုံး Overlap ဖြစ်ချိန်တွင် No. 1 သည် အပိန်းဆုံး ရောက်နေပါသည်။
                    <br />
                    • တိုင်းရမည့် အဆို့များ: <strong>Cyl 1 (In & Ex), Cyl 2 (In), Cyl 3 (Ex), Cyl 4 (In), Cyl 5 (Ex)</strong>
                  </p>
                </div>

                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="font-bold text-blue-400 block mb-1">၂။ No. 6 TDC Compression (No. 1 Overlap)</span>
                  <p className="text-[11px] text-slate-300">
                    ခရိုင်းကို ၃၆၀° (၁ ပတ်) ထပ်လှည့်၍ No. 1 Overlap ဖြစ်ချိန်တွင် No. 6 TDC ရောက်ပါသည်။
                    <br />
                    • ကျန်အဆို့များ: <strong>Cyl 6 (In & Ex), Cyl 2 (Ex), Cyl 3 (In), Cyl 4 (Ex), Cyl 5 (In)</strong>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TOYOTA 4-CYLINDER (KD, GD, L, KZ) */}
          {isToyota4Cyl && (
            <div className="bg-gradient-to-r from-emerald-950/40 to-slate-950 p-4 rounded-xl border border-emerald-900/40">
              <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Toyota {engine.code} ၄ လုံးထိုး အဆို့ (Valve Overlap) ချိန်နည်း
              </h4>
              <p className="mb-2 leading-relaxed">
                Firing Order: <strong>1 - 3 - 4 - 2</strong> (စုံတွဲများ: <strong>1-4</strong> တွဲ နှင့် <strong>3-2</strong> တွဲ)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="font-bold text-amber-400 block mb-1">၁။ No. 1 Cylinder TDC (No. 4 Overlap)</span>
                  <p className="text-[11px] text-slate-300">
                    No. 4 ဘား အိုဗာလက် ဖြစ်ချိန် No. 1 ကို ချိန်ပါ:
                    <br />
                    • <strong>Cyl 1:</strong> Intake & Exhaust
                    <br />
                    • <strong>Cyl 2:</strong> Intake
                    <br />
                    • <strong>Cyl 3:</strong> Exhaust
                  </p>
                </div>

                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <span className="font-bold text-blue-400 block mb-1">၂။ No. 4 Cylinder TDC (No. 1 Overlap)</span>
                  <p className="text-[11px] text-slate-300">
                    ခရိုင်းကို ၃၆၀° (၁ ပတ်) ထပ်လှည့်၍ No. 1 Overlap ဖြစ်ချိန် No. 4 ကို ချိန်ပါ:
                    <br />
                    • <strong>Cyl 4:</strong> Intake & Exhaust
                    <br />
                    • <strong>Cyl 2:</strong> Exhaust
                    <br />
                    • <strong>Cyl 3:</strong> Intake
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* General Summary */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              အင်ဂျင်အေးချိန် (20°C / 68°F အောက်) တွင်သာ စံနှုန်းအတိုင်း သေချာ တိုင်းတာ ညှိယူပေးရပါမည်။
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
