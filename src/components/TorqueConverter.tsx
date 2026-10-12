import React, { useState } from 'react';
import { Compass, ArrowRightLeft } from 'lucide-react';

export const TorqueConverter: React.FC = () => {
  const [val, setVal] = useState<number>(100);
  const [unit, setUnit] = useState<'nm' | 'kgfm' | 'lbft'>('nm');

  const nm = unit === 'nm' ? val : unit === 'kgfm' ? val * 9.80665 : val * 1.355818;
  const kgfm = nm / 9.80665;
  const lbft = nm / 1.355818;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
        <Compass className="w-5 h-5 text-amber-400" />
        <h3 className="font-black text-white text-base sm:text-lg">
          တော်ခ် ယူနစ် ပြောင်းစက် (Torque Unit Converter)
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* N·m */}
        <div className={`p-4 rounded-xl border transition ${unit === 'nm' ? 'bg-amber-500/10 border-amber-500/50 ring-1 ring-amber-500/30' : 'bg-slate-950/60 border-slate-800'}`}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-amber-400">Newton Meter (N·m)</span>
            {unit === 'nm' && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-black">Active</span>}
          </div>
          <input
            type="number"
            value={unit === 'nm' ? val : Number(nm.toFixed(1))}
            onChange={(e) => {
              setUnit('nm');
              setVal(parseFloat(e.target.value) || 0);
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono font-bold text-lg focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* kgf·m */}
        <div className={`p-4 rounded-xl border transition ${unit === 'kgfm' ? 'bg-amber-500/10 border-amber-500/50 ring-1 ring-amber-500/30' : 'bg-slate-950/60 border-slate-800'}`}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-emerald-400">Kilogram-force Meter (kgf·m / kg·m)</span>
            {unit === 'kgfm' && <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-black">Active</span>}
          </div>
          <input
            type="number"
            value={unit === 'kgfm' ? val : Number(kgfm.toFixed(2))}
            onChange={(e) => {
              setUnit('kgfm');
              setVal(parseFloat(e.target.value) || 0);
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono font-bold text-lg focus:outline-none focus:border-emerald-400"
          />
        </div>

        {/* lbf·ft */}
        <div className={`p-4 rounded-xl border transition ${unit === 'lbft' ? 'bg-amber-500/10 border-amber-500/50 ring-1 ring-amber-500/30' : 'bg-slate-950/60 border-slate-800'}`}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-blue-400">Foot-Pound (lbf·ft / ft-lb)</span>
            {unit === 'lbft' && <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500 text-slate-950 font-black">Active</span>}
          </div>
          <input
            type="number"
            value={unit === 'lbft' ? val : Number(lbft.toFixed(1))}
            onChange={(e) => {
              setUnit('lbft');
              setVal(parseFloat(e.target.value) || 0);
            }}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono font-bold text-lg focus:outline-none focus:border-blue-400"
          />
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
        <ArrowRightLeft className="w-4 h-4 text-amber-400 shrink-0" />
        <span>အကြံပြုချက် - 1 kgf·m ≈ 9.8 N·m | 1 lbf·ft (ft-lb) ≈ 1.356 N·m (အလုပ်ရုံသုံး ပေပေါင်း / ကီလိုဂရမ် မီတာ / နယူတန်မီတာ တိုက်ရိုက်ပြောင်းလဲပေးပါသည်)</span>
      </div>
    </div>
  );
};
