import React from 'react';
import { SlidersHorizontal, CheckCircle } from 'lucide-react';

interface ValveAdjustmentGuideProps {
  engine: any;
}

export const ValveAdjustmentGuide: React.FC<ValveAdjustmentGuideProps> = ({ engine }) => {
  const valve = engine.valveClearance || {};
  const isToyota4Cyl = engine.brand === 'TOYOTA' && engine.cylinders === 4 && ['KD', 'GD', 'L', 'KZ'].includes(engine.series);
  const isV8 = engine.brand === 'TOYOTA' && engine.cylinders === 8;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <SlidersHorizontal className="w-5 h-5 text-amber-400" />
        <h3 className="font-black text-white text-base sm:text-lg">
          {engine.code} ဘားအဆို့ရှင် အကွာအဝေးနှင့် ချိန်ညှိနည်း (Valve Clearance Guide)
        </h3>
      </div>

      {/* Clearance Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-mono">အေးနေချိန် လေဝင်ဘား (Intake Cold)</span>
          <span className="text-base font-bold text-cyan-400 font-mono mt-1 block">
            {valve.intakeCold || valve.intake || 'N/A'}
          </span>
        </div>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-mono">အေးနေချိန် မီးခိုးထွက်ဘား (Exhaust Cold)</span>
          <span className="text-base font-bold text-amber-400 font-mono mt-1 block">
            {valve.exhaustCold || valve.exhaust || 'N/A'}
          </span>
        </div>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-mono">ပူနေချိန် လေဝင်ဘား (Intake Hot)</span>
          <span className="text-base font-bold text-slate-300 font-mono mt-1 block">
            {valve.intakeHot || 'N/A'}
          </span>
        </div>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-400 block font-mono">ပူနေချိန် မီးခိုးထွက်ဘား (Exhaust Hot)</span>
          <span className="text-base font-bold text-slate-300 font-mono mt-1 block">
            {valve.exhaustHot || 'N/A'}
          </span>
        </div>
      </div>

      {/* Specific 4-cylinder Toyota Guide */}
      {isToyota4Cyl && (
        <div className="bg-gradient-to-r from-emerald-950/40 to-slate-950 p-4 rounded-xl border border-emerald-900/40">
          <h4 className="font-bold text-white text-xs mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Toyota {engine.code} ၄ လုံးထိုး အဆို့ (Valve Overlap) ချိန်နည်း လမ်းညွှန်</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 leading-relaxed">
            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="font-bold text-emerald-300 block mb-1">၁။ No.1 Cylinder TDC တွင်ရှိချိန် (Compression Stroke):</span>
              <p className="text-slate-400">
                • No.1: Intake & Exhaust<br />
                • No.2: Intake<br />
                • No.3: Exhaust များကို စစ်ဆေးတိုင်းတာပါ။
              </p>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="font-bold text-emerald-300 block mb-1">၂။ Crankshaft 360° (တစ်ပတ်) လှည့်ပြီး No.4 TDC တွင်:</span>
              <p className="text-slate-400">
                • No.4: Intake & Exhaust<br />
                • No.3: Intake<br />
                • No.2: Exhaust များကို စစ်ဆေးတိုင်းတာပါ။
              </p>
            </div>
          </div>
        </div>
      )}

      {/* V8 Toyota Guide */}
      {isV8 && (
        <div className="bg-gradient-to-r from-amber-950/40 to-slate-950 p-4 rounded-xl border border-amber-900/40">
          <h4 className="font-bold text-white text-xs mb-1 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Toyota 1VD-FTV V8 အင်ဂျင် ဘားချိန်နည်း</span>
          </h4>
          <p className="text-xs text-slate-300">
            Shimless Lifter အမျိုးအစားဖြစ်ပြီး စံသတ်မှတ် Clearance မပြည့်ပါက Valve Lifter အထူနံပါတ် အသစ်ဖြင့် လဲလှယ် တပ်ဆင်ပေးရပါမည်။
          </p>
        </div>
      )}
    </div>
  );
};
