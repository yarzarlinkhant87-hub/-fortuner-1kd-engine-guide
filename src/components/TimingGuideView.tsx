import React from 'react';
import { Cog, CheckCircle2, AlertTriangle } from 'lucide-react';
import { EngineSpec } from '../data/toyotaDieselData';

interface Props {
  engine: EngineSpec;
}

export const TimingGuideView: React.FC<Props> = ({ engine }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
            <Cog className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Timing System & Alignment Marks</h3>
            <p className="text-xs text-slate-400">{engine.code} တိုက်မင်ခါးပတ်/တိုက်မင်ချိန် ချိန်ညှိနည်း လမ်းညွှန်</p>
          </div>
        </div>
        <span className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full font-medium">
          {engine.timingTypeMm}
        </span>
      </div>

      {/* Visual Alignment Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {/* Crankshaft */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wide">1. Crankshaft Mark</span>
              <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono">0° TDC</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium mb-2">
              {engine.timingMarksGuide.crankshaftMm}
            </p>
          </div>
          <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 font-mono">
            {engine.timingMarksGuide.crankshaft}
          </div>
        </div>

        {/* Camshaft */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">2. Camshaft Mark</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">TDC Notch</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium mb-2">
              {engine.timingMarksGuide.camshaftMm}
            </p>
          </div>
          <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 font-mono">
            {engine.timingMarksGuide.camshaft}
          </div>
        </div>

        {/* Pump / Idler */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">3. Fuel Pump / Gear</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">Pump Mark</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-medium mb-2">
              {engine.timingMarksGuide.pumpMm}
            </p>
          </div>
          <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 font-mono">
            {engine.timingMarksGuide.pump}
          </div>
        </div>
      </div>

      {/* Workshop Critical Note */}
      <div className="bg-amber-950/30 border border-amber-800/60 rounded-xl p-3.5 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-200 leading-relaxed">
          <span className="font-bold text-white block mb-0.5">ဝပ်ရှော့ သတိပြုရန် အချက် -</span>
          {engine.timingMarksGuide.notesMm} တိုက်မင်ခါးပတ် (သို့မဟုတ်) ကြိုး တပ်ဆင်ပြီးတိုင်း ခရိုင်းရှပ်ကို နာရီလက်တံအတိုင်း လက်ဖြင့် ၂ ပတ် အပြည့်လှည့်ပြီး အမှတ်များ အားလုံး ကွက်တိ ပြန်တိုက်ဆိုင်ခြင်း ရှိမရှိ အမြဲ စစ်ဆေးပါ။
        </div>
      </div>
    </div>
  );
};
