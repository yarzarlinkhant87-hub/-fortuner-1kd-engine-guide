import React, { useState } from 'react';
import { Calculator, ArrowRightLeft, Check } from 'lucide-react';

export const TorqueConverter: React.FC = () => {
  const [val, setVal] = useState<number>(85);
  const [unit, setUnit] = useState<'nm' | 'kgfCm' | 'lbfFt'>('nm');

  const nm = unit === 'nm' ? val : unit === 'kgfCm' ? val * 0.0980665 : val * 1.355818;
  const kgfCm = nm * 10.19716;
  const lbfFt = nm * 0.737562;
  const lbfIn = nm * 8.850745;

  const quickPresets = [
    { label: '85 N·m (KD Head Step 1)', nm: 85 },
    { label: '35 N·m (GD Head Step 1 / Conn Rod)', nm: 35 },
    { label: '365 N·m (1KD Crank Bolt)', nm: 365 },
    { label: '280 N·m (1GD Crank Bolt)', nm: 280 },
    { label: '490 N·m (1HZ Crank Bolt)', nm: 490 },
    { label: '22 N·m (Injector Clamp)', nm: 22 },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-red-600/20 text-red-400 rounded-lg">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white text-base">Torque Unit Converter (တော်ခ် တွက်စက်)</h3>
          <p className="text-xs text-slate-400">N·m, kgf·cm, lbf·ft, lbf·in အပြန်အလှန် အမြန်ပြောင်းလဲခြင်း</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="col-span-2">
          <label className="text-xs text-slate-400 block mb-1">တန်ဖိုး ရိုက်ထည့်ပါ (Enter Value)</label>
          <div className="relative">
            <input
              type="number"
              value={val}
              onChange={(e) => setVal(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-lg font-bold text-white focus:outline-none focus:border-red-500"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-400 block mb-1">ယူနစ် ရွေးချယ်ပါ (Input Unit)</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as any)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-medium focus:outline-none focus:border-red-500"
          >
            <option value="nm">Newton Meter (N·m)</option>
            <option value="kgfCm">Kilogram-force cm (kgf·cm)</option>
            <option value="lbfFt">Pound-foot (lbf·ft / ft·lb)</option>
          </select>
        </div>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
          <span className="text-xs text-slate-400 block">Newton Meter</span>
          <span className="text-lg font-black text-red-400">{nm.toFixed(1)}</span>
          <span className="text-[10px] text-slate-500 font-mono block">N·m</span>
        </div>
        <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
          <span className="text-xs text-slate-400 block">Kgf·Centimeter</span>
          <span className="text-lg font-black text-amber-400">{kgfCm.toFixed(0)}</span>
          <span className="text-[10px] text-slate-500 font-mono block">kgf·cm</span>
        </div>
        <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
          <span className="text-xs text-slate-400 block">Foot·Pound</span>
          <span className="text-lg font-black text-blue-400">{lbfFt.toFixed(1)}</span>
          <span className="text-[10px] text-slate-500 font-mono block">lbf·ft (ft·lb)</span>
        </div>
        <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
          <span className="text-xs text-slate-400 block">Inch·Pound</span>
          <span className="text-lg font-black text-emerald-400">{lbfIn.toFixed(0)}</span>
          <span className="text-[10px] text-slate-500 font-mono block">lbf·in</span>
        </div>
      </div>

      {/* Quick buttons */}
      <div>
        <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">အသုံးများသော အင်ဂျင်ကျပ်အားများ (Quick Presets):</span>
        <div className="flex flex-wrap gap-1.5">
          {quickPresets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setUnit('nm');
                setVal(p.nm);
              }}
              className="px-2.5 py-1 bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 rounded-lg border border-slate-700 transition flex items-center gap-1"
            >
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
