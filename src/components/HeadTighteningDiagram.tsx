import React from 'react';

interface Props {
  sequence: number[];
  cylinderCount?: number;
  engineCode: string;
}

export const HeadTighteningDiagram: React.FC<Props> = ({ sequence, engineCode }) => {
  // We can display the cylinder block top view layout
  // 1GD / 2GD has 10 bolts (5 on intake side, 5 on exhaust side)
  // 1KD / 2KD has 18 bolts
  
  const isGD = sequence.length === 10;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 my-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
            ဆလင်ဒါခေါင်း မူလီကြပ်ရမည့် အစီအစဉ် (Tightening Sequence)
          </h4>
          <p className="text-xs text-neutral-400 mt-0.5">
            {engineCode} Cylinder Head Bolt Pattern (Center-Outward Order)
          </p>
        </div>
        <div className="text-xs text-neutral-400 flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block"></span>
            နံပါတ် ၁ မှ စတင်ကြပ်ပါ (Start from 1)
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-amber-400 font-mono">FRONT (အင်ဂျင်ရှေ့) ➔</span>
        </div>
      </div>

      {isGD ? (
        // 10 bolts layout for 1GD / 2GD
        <div className="relative max-w-xl mx-auto py-4 px-2">
          {/* Engine block outline */}
          <div className="border-2 border-dashed border-neutral-700 rounded-2xl p-6 bg-neutral-950/60 relative">
            {/* Front indicator */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase font-bold tracking-widest text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
              REAR
            </div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
              FRONT ➔
            </div>

            {/* Intake side label */}
            <div className="text-center text-[11px] font-mono text-cyan-400/80 mb-3 tracking-wider uppercase">
              ▲ INTAKE SIDE (အဝင်ဘက်) ▲
            </div>

            {/* Row 1: Intake Side Bolts */}
            <div className="grid grid-cols-5 gap-3 text-center my-3">
              {[10, 4, 2, 6, 8].map((order, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-all border ${
                      order <= 2
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/20'
                        : order <= 6
                        ? 'bg-neutral-800 text-white border-neutral-600'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-700'
                    }`}
                  >
                    {order}
                  </div>
                  <span className="text-[10px] text-neutral-400 mt-1 font-mono">B{idx + 1}</span>
                </div>
              ))}
            </div>

            {/* Cylinders representation */}
            <div className="grid grid-cols-4 gap-2 my-4 px-4 py-2 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
              {['CYL 4', 'CYL 3', 'CYL 2', 'CYL 1'].map((cyl, i) => (
                <div key={i} className="text-center py-1.5 rounded-lg border border-neutral-800 bg-neutral-950/80 text-[11px] font-mono font-medium text-neutral-400">
                  {cyl}
                </div>
              ))}
            </div>

            {/* Row 2: Exhaust Side Bolts */}
            <div className="grid grid-cols-5 gap-3 text-center my-3">
              {[7, 5, 1, 3, 9].map((order, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-all border ${
                      order <= 2
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg shadow-cyan-500/20'
                        : order <= 6
                        ? 'bg-neutral-800 text-white border-neutral-600'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-700'
                    }`}
                  >
                    {order}
                  </div>
                  <span className="text-[10px] text-neutral-400 mt-1 font-mono">B{idx + 6}</span>
                </div>
              ))}
            </div>

            {/* Exhaust side label */}
            <div className="text-center text-[11px] font-mono text-orange-400/80 mt-3 tracking-wider uppercase">
              ▼ EXHAUST SIDE (အထွက်ဘက်) ▼
            </div>
          </div>
        </div>
      ) : (
        // 1KD / 2KD (18 bolts sequence)
        <div className="relative max-w-2xl mx-auto py-4 px-2">
          <div className="border-2 border-dashed border-neutral-700 rounded-2xl p-6 bg-neutral-950/60 relative">
            <div className="text-center text-[11px] font-mono text-cyan-400/80 mb-3 tracking-wider uppercase">
              ▲ INTAKE SIDE (အဝင်ဘက်) ▲
            </div>

            <div className="grid grid-cols-7 gap-2 text-center my-3">
              {[14, 8, 6, 2, 4, 10, 12].map((order, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all border ${
                      order <= 2
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 ring-2 ring-cyan-500/30'
                        : order <= 8
                        ? 'bg-neutral-800 text-white border-neutral-600'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-700'
                    }`}
                  >
                    {order}
                  </div>
                  <span className="text-[9px] text-neutral-400 mt-1 font-mono">#{order}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2 my-4 px-4 py-2 bg-neutral-900/60 rounded-xl border border-neutral-800/80">
              {['CYL 4', 'CYL 3', 'CYL 2', 'CYL 1'].map((cyl, i) => (
                <div key={i} className="text-center py-1.5 rounded-lg border border-neutral-800 bg-neutral-950/80 text-[11px] font-mono font-medium text-neutral-400">
                  {cyl}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center my-3">
              {[11, 9, 3, 1, 5, 7, 13].map((order, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all border ${
                      order <= 2
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 ring-2 ring-cyan-500/30'
                        : order <= 8
                        ? 'bg-neutral-800 text-white border-neutral-600'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-700'
                    }`}
                  >
                    {order}
                  </div>
                  <span className="text-[9px] text-neutral-400 mt-1 font-mono">#{order}</span>
                </div>
              ))}
            </div>

            <div className="text-center text-[11px] font-mono text-orange-400/80 mt-3 tracking-wider uppercase">
              ▼ EXHAUST SIDE (အထွက်ဘက်) ▼
            </div>
          </div>
        </div>
      )}

      <div className="mt-3 text-xs text-neutral-400 leading-relaxed bg-neutral-950/40 p-3 rounded-lg border border-neutral-800">
        <span className="text-amber-400 font-medium">သတိပြုရန် - </span> 
        အလယ်ဗဟို နံပါတ် ၁ နှင့် ၂ မှ စတင်ပြီး အတွင်းမှ အပြင်သို့ ကြက်ခြေခတ် မျှတစွာ ကြပ်ပေးရပါမည်။ 
        ဖြုတ်သည့်အခါ (Removal Sequence) တွင် ပြောင်းပြန်ဖြစ်သော အကြီးဆုံးနံပါတ်မှ စတင်၍ ဖြည်ရပါမည် (ဆလင်ဒါခေါင်း မကွေးစေရန်)။
      </div>
    </div>
  );
};
