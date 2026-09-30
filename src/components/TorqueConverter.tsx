import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export const TorqueConverter: React.FC = () => {
  const [val, setVal] = useState<number>(45);
  const [fromUnit, setFromUnit] = useState<'nm' | 'ftlb' | 'kgfm'>('nm');

  // Conversions:
  // 1 N·m = 0.737562 ft-lb = 0.101972 kgf·m
  // 1 ft-lb = 1.355818 N·m = 0.138255 kgf·m
  // 1 kgf·m = 9.80665 N·m = 7.23301 ft-lb

  let nm = 0;
  let ftlb = 0;
  let kgfm = 0;

  if (fromUnit === 'nm') {
    nm = val;
    ftlb = val * 0.737562;
    kgfm = val * 0.101972;
  } else if (fromUnit === 'ftlb') {
    ftlb = val;
    nm = val * 1.355818;
    kgfm = val * 0.138255;
  } else {
    kgfm = val;
    nm = val * 9.80665;
    ftlb = val * 7.23301;
  }

  const quickPresets = [
    { label: 'Head (45 N·m)', value: 45, unit: 'nm' as const },
    { label: 'Rod (35 N·m)', value: 35, unit: 'nm' as const },
    { label: 'Main (170 N·m)', value: 170, unit: 'nm' as const },
    { label: 'Pulley (265 N·m)', value: 265, unit: 'nm' as const },
    { label: 'Injector (30 N·m)', value: 30, unit: 'nm' as const },
  ];

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
            Torque Unit Calculator (ပေါင်အား ယူနစ်ပြောင်းစနစ်)
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Newton-meter (N·m) ➔ Foot-pound (ft-lb) ➔ Kilogram-force meter (kgf·m)
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setVal(45);
            setFromUnit('nm');
          }}
          className="text-xs text-neutral-400 hover:text-neutral-200 flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Input row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-neutral-300 mb-1.5">
            ထည့်သွင်းမည့် တန်ဖိုး (Enter Value)
          </label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={isNaN(val) ? '' : val}
            onChange={(e) => setVal(parseFloat(e.target.value) || 0)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-lg font-mono text-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1.5">
            မူလယူနစ် (From Unit)
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as any)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          >
            <option value="nm">N·m (Newton-meter)</option>
            <option value="ftlb">ft-lb (Foot-pound)</option>
            <option value="kgfm">kgf·m (Kilogram-meter)</option>
          </select>
        </div>
      </div>

      {/* Quick presets */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs text-neutral-500">အမြန်ရွေးရန်:</span>
        {quickPresets.map((preset, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setVal(preset.value);
              setFromUnit(preset.unit);
            }}
            className="px-2.5 py-1 text-xs rounded-lg bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/60 transition-colors"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-800/60 text-center">
        <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="text-[11px] text-neutral-400 uppercase font-mono">N·m</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400 mt-0.5">
            {nm.toFixed(1)}
          </div>
          <div className="text-[10px] text-neutral-500">Newton meter</div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="text-[11px] text-neutral-400 uppercase font-mono">ft·lb (ပေါင်)</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-0.5">
            {ftlb.toFixed(1)}
          </div>
          <div className="text-[10px] text-neutral-500">Foot pound</div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
          <div className="text-[11px] text-neutral-400 uppercase font-mono">kgf·m (ကီလို)</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-purple-400 mt-0.5">
            {kgfm.toFixed(2)}
          </div>
          <div className="text-[10px] text-neutral-500">Kilogram force meter</div>
        </div>
      </div>
    </div>
  );
};
