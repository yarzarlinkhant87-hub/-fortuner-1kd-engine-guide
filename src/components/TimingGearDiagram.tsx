import React, { useState } from 'react';
import { Disc3, Gauge, Wrench, ShieldAlert, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface TimingGearDiagramProps {
  engineId: string;
  lang: 'my' | 'en';
}

export const TimingGearDiagram: React.FC<TimingGearDiagramProps> = ({ engineId, lang }) => {
  const [selectedGear, setSelectedGear] = useState<string>('cam');
  const is1KD = engineId === '1kd-ftv' || engineId === '2kd-ftv';

  // 1KD/2KD Internal Gear train specs
  const kdGearSpecs = [
    {
      id: 'cam',
      nameMy: 'Camshaft Pulley & Internal Cam Gear (ကမ်ရှပ် ဂီယာ/ပူလီ)',
      nameEn: 'Camshaft Timing Pulley & Sub-Gear',
      markMy: 'Cam pulley notch အမှတ်ကို Cylinder Head edge နှင့် တည့်တည့်ချိန်ပါ။ Exhaust cam နှင့် Intake cam ကြား Scissors gear (sub-gear) တပ်ဆင်စဉ် Service bolt (M6) ကြိုထိုး၍ backlash မဖြစ်စေရန် ချိန်ပါ။',
      markEn: 'Align pulley notch with head top surface line. Lock sub-gear with M6 service bolt before disassembly to maintain preload.',
      torqueNm: '98 N·m (72.3 ft-lb)',
      timingSign: 'Single Notch (•) & Punch Dot (•)',
      color: '#38bdf8'
    },
    {
      id: 'pump',
      nameMy: 'Injection Supply Pump Gear (ဒီဇယ်အင်ဂျက်တာ ဆပလိုင်းပန့် ဂီယာ)',
      nameEn: 'Common Rail Supply Pump Gear',
      markMy: 'Supply Pump Drive Gear ပေါ်ရှိ "1" သို့မဟုတ် တြိဂံ (▲) ချိန်မှတ်ကို Idler Gear No.1 ပေါ်ရှိ သက်ဆိုင်ရာ အမှတ်နှင့် တည့်တည့် တိုက်ပါ။ မူလီကြပ်အား 64 N·m။',
      markEn: 'Align pump drive gear punch mark (1 dot / ▲) with Idler Gear No.1 mark. Tighten pump nut to 64 N·m.',
      torqueNm: '64 N·m (47.2 ft-lb)',
      timingSign: 'Mark (1) or Single Dot (•)',
      color: '#f59e0b'
    },
    {
      id: 'idler1',
      nameMy: 'Idler Gear No. 1 (အတွင်း အလယ် ဂီယာကြီး)',
      nameEn: 'Idler Gear No. 1 (Main Center Idler)',
      markMy: 'အတွင်းဂီယာတွဲအားလုံးကို ချိတ်ဆက်ပေးသော အဓိကဂီယာဖြစ်သည်။ Crankshaft gear ၏ "0" အမှတ်နှင့် Idler gear ၏ "0" အမှတ်၊ Pump gear ၏ "1" နှင့် Idler ၏ "1" အမှတ်များကို တိကျစွာ ဆုံပေးရပါမည်။ Thrust plate bolt ကြပ်အား 50 N·m။',
      markEn: 'Synchronizes Crank gear (0-0 marks), Supply pump gear (1-1 marks), and Cam drive train. Thrust bolt 50 N·m.',
      torqueNm: '50 N·m (36.9 ft-lb)',
      timingSign: 'Dual Marks: (0-0) & (1-1)',
      color: '#10b981'
    },
    {
      id: 'crank',
      nameMy: 'Crankshaft Timing Gear & Damper Pulley (ခရိုင်းရှပ် ဂီယာနှင့် ပူလီကြီး)',
      nameEn: 'Crankshaft Timing Gear & Harmonic Damper',
      markMy: 'Crankshaft Gear ပေါ်ရှိ "0" အမှတ်ကို Idler Gear No.1 ၏ "0" အမှတ်နှင့် တိုက်ဆိုင်ပါ။ အပြင်ဘက် Damper Pulley ကြီး၏ ဗဟိုမူလီ (Bolt) ကို 235 N·m အပြည့်အဝ ကြပ်ရပါမည်။',
      markEn: 'Align crankshaft gear "0" dot with Idler No.1 "0" dot. Main damper pulley bolt torque is 235 N·m.',
      torqueNm: '235 N·m (173.3 ft-lb)',
      timingSign: 'TDC 0° & Double Punch (00)',
      color: '#ec4899'
    },
    {
      id: 'oilpump',
      nameMy: 'Oil Pump & Balance Shaft Gears (ဝိုင်ပန့်နှင့် ဘာလန်ရှပ် ဂီယာများ)',
      nameEn: 'Oil Pump Drive & Balance Shaft Gears',
      markMy: 'Oil pump drive gear မူလီကြပ်အား 32 N·m ဖြစ်ပြီး ဘာလန်ရှပ်ဂီယာများ (ရှိပါက) Punch marks (•) အတိုင်း တစ်ထပ်တည်း ကျရပါမည်။',
      markEn: 'Oil pump drive gear nut 32 N·m. Align balancer shaft dots to eliminate 4-cylinder secondary vibrations.',
      torqueNm: '32 N·m (23.6 ft-lb)',
      timingSign: 'Dot Punch (•)',
      color: '#a855f7'
    }
  ];

  // 1GD/2GD Timing Chain & Gear specs
  const gdGearSpecs = [
    {
      id: 'cam',
      nameMy: 'Dual Camshaft Sprockets & HLA Chain (ကမ်ရှပ် စပရော့ကတ်များ)',
      nameEn: 'Camshaft Timing Sprockets (Intake & Exhaust)',
      markMy: 'Intake နှင့် Exhaust Camshaft sprocket ပေါ်ရှိ ချိန်မှတ်များ (Punch mark) ကို Timing Chain ၏ အဝါရောင်/အမဲရောင် အမှတ်အသား Link များနှင့် တစ်ထပ်တည်း ဆုံပါ။ Sprocket bolt ကြပ်အား 100 N·m။',
      markEn: 'Align camshaft punch dots with colored chain links. Camshaft sprocket bolt torque 100 N·m.',
      torqueNm: '100 N·m (73.8 ft-lb)',
      timingSign: 'Colored Links (Yellow/Orange)',
      color: '#38bdf8'
    },
    {
      id: 'pump',
      nameMy: 'High Pressure HP5S Supply Pump Sprocket (ဒီဇယ်ဖိအားမြင့်ပန့် စပရော့ကတ်)',
      nameEn: 'HP5S Common Rail Fuel Pump Sprocket',
      markMy: 'Supply Pump Sprocket အမှတ်ကို Chain ၏ Colored Link နှင့် တည့်တည့်ထားပါ။ Pump sprocket nut ကြပ်အား 110 N·m။',
      markEn: 'Supply pump drive sprocket aligned to chain colored link. Nut torque 110 N·m.',
      torqueNm: '110 N·m (81.1 ft-lb)',
      timingSign: 'Single Dot & Colored Chain Link',
      color: '#f59e0b'
    },
    {
      id: 'crank',
      nameMy: 'Crankshaft Drive Sprocket & Damper (ခရိုင်းရှပ် စပရော့ကတ်/ပူလီ)',
      nameEn: 'Crankshaft Sprocket & Harmonic Damper Pulley',
      markMy: 'Crankshaft sprocket notch ကို TDC 0° ညွှန်တံနှင့် ချိန်ပါ။ အပြင် Crankshaft Pulley bolt ကို 265 N·m (အလွန်တင်းကျပ်) ဖြင့် ကြပ်ရပါမည်။',
      markEn: 'Crank sprocket aligned to 0° TDC cast indicator. Crank pulley bolt tightened to heavy 265 N·m.',
      torqueNm: '265 N·m (195.5 ft-lb)',
      timingSign: 'Crank TDC 0° Notch',
      color: '#ec4899'
    }
  ];

  const currentGearSpecs = is1KD ? kdGearSpecs : gdGearSpecs;
  const activeGearData = currentGearSpecs.find((g) => g.id === selectedGear) || currentGearSpecs[0];

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-cyan-400">
            <Disc3 className="w-5 h-5 animate-[spin_10s_linear_infinite]" />
            <h3 className="font-bold text-white text-base">
              {is1KD 
                ? (lang === 'my' ? '1KD-FTV အတွင်းတိုင်မင်ဂီယာတွဲ နှင့် ပေါင်အားသတ်မှတ်ချက်' : '1KD-FTV Internal Timing Gear Train & Torque Specs')
                : (lang === 'my' ? '1GD / 2GD တိုင်မင်စနစ်နှင့် စပရော့ကတ် ပေါင်အားများ' : '1GD / 2GD Timing Chain & Sprocket Specs')
              }
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            {is1KD
              ? (lang === 'my' ? 'အတွင်းဂီယာသွားများရှိ (0, 1) အမှတ်အသားများနှင့် Crank, Cam, Pump, Idler နတ်ပေါင်များ' : 'Internal gear meshing marks (0, 1) and exact torque specs for internal drive train')
              : (lang === 'my' ? 'Timing chain colored links နှင့် Cam, Pump, Crankshaft ပေါင်အားများ' : 'Timing chain sync marks and sprocket bolt torques')
            }
          </p>
        </div>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/80 w-fit shrink-0">
          {is1KD ? 'Internal Gear Train + Belt' : 'Hydraulic Chain System'}
        </span>
      </div>

      {/* Interactive Visual Gear Train Diagram (SVG) */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* SVG Diagram Canvas */}
        <div className="lg:col-span-6 bg-neutral-950 border border-neutral-800/90 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-2 left-3 text-[10px] font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Timing Diagram (ဂီယာတစ်ခုချင်းနှိပ်ကြည့်ပါ)</span>
          </div>

          <svg viewBox="0 0 400 380" className="w-full max-w-[340px] sm:max-w-[360px] h-auto my-2 select-none">
            <defs>
              <radialGradient id="gearMetallic" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#334155" />
                <stop offset="70%" stop-color="#1e293b" />
                <stop offset="100%" stop-color="#0f172a" />
              </radialGradient>
              <linearGradient id="beltColor" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0284c7" />
                <stop offset="100%" stop-color="#0369a1" />
              </linearGradient>
            </defs>

            {/* Connecting Belt / Chain Track Background */}
            <path
              d={is1KD 
                ? "M 130 90 L 270 90 L 320 200 L 290 300 L 110 300 L 80 200 Z" 
                : "M 150 90 L 250 90 L 300 210 L 200 310 L 100 210 Z"}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="5"
              strokeDasharray="8 6"
              strokeOpacity="0.4"
            />

            {/* 1. CAMSHAFT GEAR (Top Center) */}
            <g
              onClick={() => setSelectedGear('cam')}
              className="cursor-pointer transition-transform hover:scale-105"
              transform="translate(200, 90)"
            >
              <circle
                r={selectedGear === 'cam' ? 44 : 40}
                fill="url(#gearMetallic)"
                stroke={selectedGear === 'cam' ? '#38bdf8' : '#64748b'}
                strokeWidth={selectedGear === 'cam' ? 4 : 2}
                strokeDasharray="6 3"
              />
              <circle r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                CAM
              </text>
              {/* Timing mark dot */}
              <circle cx="0" cy="-38" r="4" fill="#38bdf8" />
              <text x="0" y="-44" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">TDC</text>
            </g>

            {/* 2. SUPPLY PUMP GEAR (Right Center) */}
            <g
              onClick={() => setSelectedGear('pump')}
              className="cursor-pointer transition-transform hover:scale-105"
              transform="translate(305, 195)"
            >
              <circle
                r={selectedGear === 'pump' ? 36 : 32}
                fill="url(#gearMetallic)"
                stroke={selectedGear === 'pump' ? '#f59e0b' : '#64748b'}
                strokeWidth={selectedGear === 'pump' ? 4 : 2}
                strokeDasharray="6 3"
              />
              <circle r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">
                PUMP
              </text>
              {/* Timing mark dot */}
              <circle cx="-30" cy="-10" r="4" fill="#f59e0b" />
              <text x="-40" y="-12" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Mark 1</text>
            </g>

            {/* 3. IDLER GEAR NO. 1 (Center - 1KD specific) */}
            {is1KD && (
              <g
                onClick={() => setSelectedGear('idler1')}
                className="cursor-pointer transition-transform hover:scale-105"
                transform="translate(200, 195)"
              >
                <circle
                  r={selectedGear === 'idler1' ? 42 : 38}
                  fill="url(#gearMetallic)"
                  stroke={selectedGear === 'idler1' ? '#10b981' : '#64748b'}
                  strokeWidth={selectedGear === 'idler1' ? 4 : 2}
                  strokeDasharray="5 3"
                />
                <circle r="16" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">
                  IDLER 1
                </text>
                {/* Mesh Marks */}
                <circle cx="0" cy="34" r="3.5" fill="#10b981" />
                <text x="0" y="46" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">Mark 0-0</text>
                <circle cx="34" cy="0" r="3.5" fill="#10b981" />
              </g>
            )}

            {/* 4. CRANKSHAFT GEAR & DAMPER (Bottom) */}
            <g
              onClick={() => setSelectedGear('crank')}
              className="cursor-pointer transition-transform hover:scale-105"
              transform="translate(200, 305)"
            >
              <circle
                r={selectedGear === 'crank' ? 48 : 44}
                fill="url(#gearMetallic)"
                stroke={selectedGear === 'crank' ? '#ec4899' : '#64748b'}
                strokeWidth={selectedGear === 'crank' ? 4 : 2}
                strokeDasharray="6 3"
              />
              <circle r="20" fill="#0f172a" stroke="#ec4899" strokeWidth="2.5" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                CRANK
              </text>
              {/* Timing mark */}
              <circle cx="0" cy="-42" r="4" fill="#ec4899" />
              <text x="0" y="-48" textAnchor="middle" fill="#ec4899" fontSize="9" fontWeight="bold">0° TDC</text>
            </g>

            {/* 5. OIL PUMP / TENSIONER (Left Bottom) */}
            <g
              onClick={() => setSelectedGear(is1KD ? 'oilpump' : 'pump')}
              className="cursor-pointer transition-transform hover:scale-105"
              transform="translate(95, 220)"
            >
              <circle
                r={selectedGear === 'oilpump' ? 30 : 26}
                fill="url(#gearMetallic)"
                stroke={selectedGear === 'oilpump' ? '#a855f7' : '#64748b'}
                strokeWidth={selectedGear === 'oilpump' ? 3.5 : 2}
              />
              <circle r="10" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace">
                {is1KD ? 'OIL' : 'IDLER'}
              </text>
            </g>
          </svg>

          <div className="w-full flex items-center justify-around border-t border-neutral-800/80 pt-2 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Cam (98 N·m)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Pump (64 N·m)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-pink-400" /> Crank (235 N·m)
            </span>
          </div>
        </div>

        {/* Selected Gear Detail Card */}
        <div className="lg:col-span-6 space-y-3">
          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-1.5 pb-1">
            {currentGearSpecs.map((gear) => (
              <button
                key={gear.id}
                onClick={() => setSelectedGear(gear.id)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  selectedGear === gear.id
                    ? 'bg-cyan-500 text-neutral-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                <Disc3 className="w-3.5 h-3.5" />
                <span>{gear.id.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Active Gear Detailed Box */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3 relative overflow-hidden">
            <div className="flex items-start justify-between gap-2 border-b border-neutral-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  {activeGearData.id.toUpperCase()} GEAR SPEC
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  {lang === 'my' ? activeGearData.nameMy : activeGearData.nameEn}
                </h4>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] text-neutral-400 block font-mono">နတ်ပေါင်ကြပ်အား (Torque)</span>
                <span className="text-base sm:text-lg font-mono font-bold text-amber-400">
                  {activeGearData.torqueNm}
                </span>
              </div>
            </div>

            {/* Timing Mark & Match Info */}
            <div className="bg-neutral-900/80 p-3 rounded-lg border border-neutral-800 space-y-1.5">
              <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'my' ? 'တိုင်မင် အမှတ်အသား သင်္ကေတ (Timing Mark & Sync):' : 'Synchronization & Timing Symbol:'}
              </div>
              <div className="inline-block px-2.5 py-1 rounded bg-neutral-950 border border-cyan-800/60 font-mono font-bold text-xs text-cyan-200">
                {activeGearData.timingSign}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                {lang === 'my' ? activeGearData.markMy : activeGearData.markEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
