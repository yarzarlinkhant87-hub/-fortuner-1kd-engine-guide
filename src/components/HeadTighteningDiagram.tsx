import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

interface Props {
  boltsCount: number;
  engineCode: string;
}

export const HeadTighteningDiagram: React.FC<Props> = ({ boltsCount, engineCode }) => {
  // 18 bolts standard for 4-cyl Toyota diesels (KD, GD, L, KZ)
  // 26 bolts for 6-cyl (1HZ, 1HD)
  // 10 bolts per bank for V8 (1VD)
  const is6Cyl = boltsCount === 26;

  // 18-bolt standard Toyota sequence:
  // Exhaust side (top row: 18, 14, 10, 6, 2, 4, 8, 12, 16)
  // Intake side (bottom row: 17, 13, 9, 5, 1, 3, 7, 11, 15)
  const top18 = [18, 14, 10, 6, 2, 4, 8, 12, 16];
  const bot18 = [17, 13, 9, 5, 1, 3, 7, 11, 15];

  // 26-bolt sequence for 1HZ/1HD
  const top26 = [26, 22, 18, 14, 10, 6, 2, 4, 8, 12, 16, 20, 24];
  const bot26 = [25, 21, 17, 13, 9, 5, 1, 3, 7, 11, 15, 19, 23];

  const topRow = is6Cyl ? top26 : top18;
  const botRow = is6Cyl ? bot26 : bot18;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Cylinder Head Bolt Tightening Sequence</h3>
            <p className="text-xs text-slate-400">ဆလင်ဒါခေါင်း မူလီ ကျပ်ရမည့် အစီအစဉ် ပုံကြမ်း ({engineCode} - {boltsCount} Bolts)</p>
          </div>
        </div>
        <span className="text-xs px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full font-mono">
          Front (ရှေ့) ➔ Rear (နောက်)
        </span>
      </div>

      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
        <div className="min-w-[500px]">
          {/* Header indicator */}
          <div className="flex justify-between items-center text-[11px] text-slate-500 pb-2 mb-2 border-b border-slate-800 font-mono">
            <span>◄ FRONT OF ENGINE (အင်ဂျင်ရှေ့ပိုင်း)</span>
            <span className="text-amber-400 font-semibold">EXHAUST MANIFOLD SIDE (အိတ်ဇောဘက်)</span>
            <span>REAR (ဂီယာဘက်) ►</span>
          </div>

          {/* Top Row (Exhaust) */}
          <div className="flex justify-between items-center py-2 px-2 gap-2">
            {topRow.map((num, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm border shadow-lg transition transform hover:scale-110 ${
                    num <= 4
                      ? 'bg-red-600 border-red-400 text-white shadow-red-900/50'
                      : num <= 10
                      ? 'bg-amber-600 border-amber-400 text-white shadow-amber-900/50'
                      : 'bg-slate-800 border-slate-600 text-slate-200'
                  }`}
                >
                  {num}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 font-mono">B{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Center Engine Head Visual Body */}
          <div className="my-2 py-1.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-slate-800/80 flex items-center justify-center text-xs text-slate-400 font-mono tracking-wider">
            ── CYLINDER HEAD CENTER LINE (အလယ်ဗဟိုမှ စတင်ကျပ်ပါ) ──
          </div>

          {/* Bottom Row (Intake) */}
          <div className="flex justify-between items-center py-2 px-2 gap-2">
            {botRow.map((num, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm border shadow-lg transition transform hover:scale-110 ${
                    num <= 4
                      ? 'bg-red-600 border-red-400 text-white shadow-red-900/50'
                      : num <= 10
                      ? 'bg-amber-600 border-amber-400 text-white shadow-amber-900/50'
                      : 'bg-slate-800 border-slate-600 text-slate-200'
                  }`}
                >
                  {num}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 font-mono">B{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Footer indicator */}
          <div className="flex justify-between items-center text-[11px] text-slate-500 pt-2 mt-2 border-t border-slate-800 font-mono">
            <span>Timing Belt / Chain Side</span>
            <span className="text-blue-400 font-semibold">INTAKE MANIFOLD SIDE (အင်တိတ်ဘက်)</span>
            <span>Flywheel Side</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-white">ကျပ်နည်း လမ်းညွှန်ချက် - </span>
          နံပါတ် ၁၊ ၂၊ ၃၊ ၄ (အလယ်ဗဟို) မှ စတင်ပြီး နံပါတ်စဉ်အလိုက် အပြင်ဘက်သို့ ခရုပတ်ပုံစံ ညီညာစွာ အဆင့်ဆင့် ကျပ်ရပါမည်။ ဖြုတ်ချိန်တွင် ပြောင်းပြန် (နံပါတ်အကြီးဆုံးမှ စတင်) ဖြုတ်ရပါမည်။
        </div>
      </div>
    </div>
  );
};
