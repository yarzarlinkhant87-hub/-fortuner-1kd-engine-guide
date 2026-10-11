import React from 'react';
import { Fuel, Droplets, Gauge, AlertCircle } from 'lucide-react';
import { EngineSpec } from '../data/toyotaDieselData';

interface Props {
  engine: EngineSpec;
}

export const FuelAndFluidsView: React.FC<Props> = ({ engine }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Fuel System */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <Fuel className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Fuel & Injection System (ဆီစနစ်)</h3>
            <p className="text-xs text-slate-400">{engine.fuelSystemMm}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block">စက်နိုးထားချိန် ဖိအား (Idle Pressure)</span>
              <span className="text-sm font-semibold text-white">Minimum Idle Rail Pressure</span>
            </div>
            <span className="text-base font-bold text-emerald-400 font-mono">
              {engine.fuelSystemSpecs.pressureIdle}
            </span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block">အမြင့်ဆုံး ဖိအား (Maximum Pressure)</span>
              <span className="text-sm font-semibold text-white">Full Load / High RPM</span>
            </div>
            <span className="text-base font-bold text-red-400 font-mono">
              {engine.fuelSystemSpecs.pressureMax}
            </span>
          </div>

          {engine.fuelSystemSpecs.injectorResistance && (
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-xs text-slate-400 block">နော်ဇယ် ခုခံအား (Injector Resistance)</span>
                <span className="text-sm font-semibold text-white">Solenoid / Piezo Resistance</span>
              </div>
              <span className="text-sm font-bold text-amber-400 font-mono">
                {engine.fuelSystemSpecs.injectorResistance}
              </span>
            </div>
          )}

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-emerald-400">လမ်းညွှန်ချက် - </span>
            {engine.fuelSystemSpecs.notesMm}
          </div>
        </div>
      </div>

      {/* Fluids & Capacities */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Fluids & Capacities (အရည်ပမာဏများ)</h3>
            <p className="text-xs text-slate-400">အင်ဂျင်ဝိုင်နှင့် ရေတိုင်ကီ ဝင်ဆံ့မှု</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block">အင်ဂျင်ဝိုင် (စစ်ဘူးပါ) With Filter</span>
              <span className="text-sm font-semibold text-white">Oil Capacity (Full Change)</span>
            </div>
            <span className="text-base font-bold text-blue-400 font-mono">
              {engine.fluids.oilWithFilter}
            </span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block">အင်ဂျင်ဝိုင် (စစ်ဘူးမပါ) Without Filter</span>
              <span className="text-sm font-semibold text-white">Drain and Refill</span>
            </div>
            <span className="text-base font-bold text-slate-300 font-mono">
              {engine.fluids.oilWithoutFilter}
            </span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block">အကြံပြု အင်ဂျင်ဝိုင် ဂရိတ် (Oil Grade)</span>
              <span className="text-sm font-semibold text-white">Viscosity & Specification</span>
            </div>
            <span className="text-xs font-bold text-amber-300 font-mono text-right max-w-[180px]">
              {engine.fluids.oilGrade}
            </span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block">ရေတိုင်ကီ အအေးခံရည် (Coolant)</span>
              <span className="text-sm font-semibold text-white">Toyota Long Life Coolant</span>
            </div>
            <span className="text-sm font-bold text-cyan-400 font-mono">
              {engine.fluids.coolantCapacity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
