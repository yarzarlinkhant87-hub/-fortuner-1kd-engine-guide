import React from 'react';
import { Fuel, Droplets } from 'lucide-react';

interface FuelAndFluidsViewProps {
  engine: any;
}

export const FuelAndFluidsView: React.FC<FuelAndFluidsViewProps> = ({ engine }) => {
  const fluids = engine.fluids || {};
  const fuel = engine.fuelSystemSpecs || {};

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      {/* 1. Fuel System & Common Rail Pressure */}
      <div>
        <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
          <Fuel className="w-5 h-5 text-amber-400" />
          <h3 className="font-black text-white text-base">
            လောင်စာဆီစနစ်နှင့် ဖိအား (Fuel System & Rail Pressure)
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono">System Type</span>
            <span className="text-xs font-bold text-white block mt-0.5">{fuel.type || 'Common Rail Direct Injection (CRDi)'}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono">Idle Rail Pressure</span>
            <span className="text-xs font-bold text-amber-400 font-mono block mt-0.5">{fuel.pressureIdle || fuel.idlePressure || '300 - 350 bar (30-35 MPa)'}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono">Max Rail Pressure</span>
            <span className="text-xs font-bold text-red-400 font-mono block mt-0.5">{fuel.pressureMax || fuel.maxPressure || '1,600 - 2,000 bar (160-200 MPa)'}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block font-mono">Fuel Pump Supply</span>
            <span className="text-xs font-bold text-emerald-400 block mt-0.5">{fuel.pumpType || 'High-Pressure Supply Pump'}</span>
          </div>
        </div>
      </div>

      {/* 2. Oil & Coolant Capacities */}
      <div>
        <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
          <Droplets className="w-5 h-5 text-blue-400" />
          <h3 className="font-black text-white text-base">
            ဆီပမာဏနှင့် အအေးခံရည် (Engine Oil & Coolant Capacities)
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block">အင်ဂျင်ဝိုင်ပမာဏ (Filter အသစ်လဲပြီး)</span>
            <span className="text-sm font-bold text-white font-mono mt-0.5 block">{fluids.oilWithFilter || 'N/A'}</span>
          </div>
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block">အင်ဂျင်ဝိုင်ပမာဏ (Filter မလဲဘဲ)</span>
            <span className="text-sm font-bold text-slate-300 font-mono mt-0.5 block">{fluids.oilWithoutFilter || 'N/A'}</span>
          </div>
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block">အကြံပြု အင်ဂျင်ဝိုင်အမျိုးအစား (Oil Grade)</span>
            <span className="text-xs font-bold text-amber-400 mt-0.5 block">{fluids.oilGrade || '10W-30 / 15W-40 (API CI-4/CK-4)'}</span>
          </div>
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block">ရေတိုင်ကီ အအေးခံရည်ပမာဏ (Coolant)</span>
            <span className="text-sm font-bold text-cyan-400 font-mono mt-0.5 block">{fluids.coolantCapacity || 'N/A'}</span>
          </div>
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 sm:col-span-2">
            <span className="text-[10px] text-slate-400 block">ဆီတိုင်ကီဆံ့ဝင်ပမာဏ (Fuel Tank Capacity)</span>
            <span className="text-sm font-bold text-emerald-400 font-mono mt-0.5 block">{fluids.fuelTankCapacity || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
