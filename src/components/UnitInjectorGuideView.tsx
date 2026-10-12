import React, { useState } from 'react';
import { Zap, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface UnitInjectorGuideViewProps {
  initialEngineId?: string;
  onBackToEngines?: () => void;
}

const UNIT_INJECTOR_ENGINES = [
  {
    id: 'scania-124g',
    name: 'Scania 124G (DC12 / DSC12 420HP PDE)',
    brand: 'SCANIA',
    system: 'Bosch PDE Unit Injector',
    spec: '66.9 mm ± 0.1 mm (Setting Gauge) or Zero Clearance + 3/4 turn (270°)',
    method: 'Cylinder TDC အခြေအနေတွင် အင်ဂျက်တာ ကွန်းတက်တာကို 66.9 mm Gauge ဖြင့် ချိန်ညှိပါ။ မူလီကို ထိသည်အထိ လှည့်ပြီးနောက် 270 ဒီဂရီ (3/4 Turn) တင်းကျပ်ပြီး Lock Nut 39 N·m ကြပ်ပါ။'
  },
  {
    id: 'volvo-d12',
    name: 'Volvo D12 / D12D (FH12 / FM12 EUI)',
    brand: 'VOLVO',
    system: 'Delphi / Lucas EUI Unit Injector',
    spec: 'Zero Clearance + 3-4 Flats (180° - 240°)',
    method: 'Cam lobe အမြင့်ဆုံးရောက်ချိန်တွင် Adjusting screw ကို အောက်ထိအောင် Zero lash ထိအောင် လှည့်ပါ။ ထို့နောက် 3-4 flats (180° မှ 240°) ပြန်လည်လှည့်ပြီး Lock nut ကို 52 N·m ဖြင့် ကြပ်ပါ။'
  },
  {
    id: 'cat-c15',
    name: 'Caterpillar CAT C15 / 3406E (MEUI)',
    brand: 'CATERPILLAR',
    system: 'CAT MEUI Unit Injector',
    spec: 'Height Gauge: 78.0 mm ± 0.2 mm',
    method: 'CAT Height Gauge (9U-7227) ကို အသုံးပြု၍ အင်ဂျက်တာထိပ်မှ အောက်ခြေအထိ 78.0 mm အတိအကျ ချိန်ညှိပါ။'
  },
  {
    id: 'detroit-s60',
    name: 'Detroit Diesel Series 60 (12.7L / 14.0L DDEC)',
    brand: 'DETROIT DIESEL',
    system: 'Detroit DDEC EUI',
    spec: '78.2 mm / 81.0 mm (Gauge pin)',
    method: 'Specific Gauge pin ဖြင့် အင်ဂျက်တာ Follower အမြင့်ကို ချိန်ညှိပါ။ Lock nut 41 N·m ကြပ်ပါ။'
  },
  {
    id: 'cummins-isx',
    name: 'Cummins ISX15 / QSX15 (Dual Cam EUI)',
    brand: 'CUMMINS',
    system: 'Cummins Dual Cam HPI / EUI',
    spec: 'Torque Method: 8 N·m (71 in-lb) then back off 2 hours (60°)',
    method: 'Injector Rocker Lever ကို 8 N·m ဖြင့် ကြပ်ပြီးနောက် 60 ဒီဂရီ (နာရီ ၂ ချက်) ပြန်လျှော့ကာ Lock nut 60 N·m ဖြင့် အပြီးသတ် ကြပ်ပါ။'
  }
];

export const UnitInjectorGuideView: React.FC<UnitInjectorGuideViewProps> = ({
  initialEngineId = 'scania-124g',
  onBackToEngines
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialEngineId);
  const active = UNIT_INJECTOR_ENGINES.find((e) => e.id === selectedId) || UNIT_INJECTOR_ENGINES[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <Zap className="w-6 h-6 text-amber-400" />
          <div>
            <h2 className="text-base sm:text-lg font-black text-white">
              Unit Injector Tappet ချိန်နည်း သီးသန့် လမ်းညွှန် (PDE / EUI / MEUI)
            </h2>
            <p className="text-xs text-slate-400">
              Scania 124G, Volvo D12, CAT C15, Detroit Series 60, Cummins ISX တွဲကားကြီးများ
            </p>
          </div>
        </div>

        {onBackToEngines && (
          <button
            onClick={onBackToEngines}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition border border-slate-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>အင်ဂျင်ဇယားသို့ ပြန်သွားရန်</span>
          </button>
        )}
      </div>

      {/* Select Engine Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {UNIT_INJECTOR_ENGINES.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
              selectedId === item.id
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Detail Card */}
      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <span className="text-sm font-black text-white">{active.name}</span>
          <span className="text-[11px] px-2 py-0.5 rounded-md font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {active.system}
          </span>
        </div>

        <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
          <span className="text-[10px] text-amber-400 uppercase font-mono font-bold block mb-1">
            စံချိန်စံညွှန်း တန်ဖိုး (Standard Specification / Gauge)
          </span>
          <span className="text-sm font-mono font-bold text-white block">
            {active.spec}
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-300 uppercase font-mono block">
            လက်တွေ့ ချိန်ညှိပုံ နည်းလမ်း (Step-by-Step Procedure)
          </span>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <p>{active.method}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
