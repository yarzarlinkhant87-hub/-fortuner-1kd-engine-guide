import React, { useState } from 'react';
import { Gauge, Droplet, Zap, AlertTriangle, ShieldCheck, ArrowUpRight, Activity } from 'lucide-react';

interface FuelInjectionPressureProps {
  engineId: string;
  lang: 'my' | 'en';
}

export const FuelInjectionPressure: React.FC<FuelInjectionPressureProps> = ({ engineId, lang }) => {
  const [selectedUnit, setSelectedUnit] = useState<'bar' | 'psi' | 'mpa'>('bar');
  const is1KD = engineId === '1kd-ftv' || engineId === '2kd-ftv';

  // Common Rail Fuel Injection Specs
  const specs = is1KD
    ? {
        systemName: 'Denso ECD-U2 / HP3 Common Rail System (1KD / 2KD)',
        generation: 'Generation 2 Common Rail (180 MPa Max)',
        maxPressureBar: 1600, // up to 1800 bar in late models
        idlePressureBar: 300, // ~30 MPa to 35 MPa
        crankingPressureBar: 200, // minimum ~20 to 25 MPa to start
        supplyPumpModel: 'Denso HP3 Two-Plunger High Pressure Radial Pump',
        injectorType: 'Solenoid Driven 6-Hole Micro-Sac Nozzles',
        preInjection: 'Pilot Injection (အင်ဂျင်ဆူညံသံနှင့် ခေါက်သံ လျှော့ချရန် အကြိုဖြန်းစနစ်)',
        railPressureSensorVoltage: 'Idle: 1.3V – 1.7V (approx. 30–35 MPa) / WOT: 3.8V – 4.5V (160 MPa)',
        feedbackCorrectionLimit: '± 3.0 mm³/stroke (Injection Volume Compensation Value)',
        notesMy: 'အင်ဂျင်စက်နှိုးရန် Cranking Pressure အနည်းဆုံး 20 - 25 MPa (200 - 250 Bar) ရှိရပါမည်။ ဖိအား 200 Bar မပြည့်ပါက ECU မှ အင်ဂျက်တာ မီးဖွင့်မည် မဟုတ်ပါ။ 1KD တွင် အင်ဂျက်တာ ကြေးဝါရှာ (Copper washer) ကို အသစ်အမြဲ သုံးရပါမည် (Torque: 26 N·m)။',
        notesEn: 'Minimum 20–25 MPa (200–250 bar) rail pressure is strictly required for ECU to trigger injector drivers during cranking. Replace OEM copper seats (26 N·m).'
      }
    : {
        systemName: 'Denso i-ART / HP5S Common Rail System (1GD / 2GD)',
        generation: 'Generation 4 High-Precision Common Rail (2,200 to 2,500 Bar Max)',
        maxPressureBar: 2200, // up to 2500 bar in 204PS 1GD
        idlePressureBar: 350, // ~35 MPa
        crankingPressureBar: 250, // ~25 MPa
        supplyPumpModel: 'Denso HP5S Single Plunger High Pressure Supply Pump',
        injectorType: 'i-ART Piezo/Advanced Solenoid with Built-in Pressure Sensor on EACH Injector',
        preInjection: 'Multiple Multi-Stage Pilot & Post-Injection (Up to 5 injections per stroke)',
        railPressureSensorVoltage: 'Digital i-ART Can-bus closed-loop feedback per cylinder',
        feedbackCorrectionLimit: '± 2.0 mm³/stroke (Self-learning per injector memory)',
        notesMy: '1GD/2GD တွင် အင်ဂျက်တာ တစ်လုံးချင်းစီ၌ ဖိအားနှင့် အပူချိန် တိုင်းတာသော i-ART sensor ပါရှိသည်။ အင်ဂျက်တာ မူလီ ကြပ်အား 30 N·m ဖြစ်ပြီး High Pressure Fuel Pipe nut ကြပ်အားမှာ 35 N·m ဖြစ်သည်။',
        notesEn: 'Features i-ART independent pressure monitoring on each injector. Fuel injector clamp torque 30 N·m, rail pipe flare nuts 35 N·m.'
      };

  const convertPressure = (bar: number) => {
    if (selectedUnit === 'bar') return `${bar.toLocaleString()} bar`;
    if (selectedUnit === 'psi') return `${Math.round(bar * 14.5038).toLocaleString()} psi`;
    return `${(bar / 10).toFixed(1)} MPa`;
  };

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 shadow-xl space-y-5">
      {/* Title & Unit Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-amber-400">
            <Droplet className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-white text-base">
              {lang === 'my' ? 'ဒီဇယ် အင်ဂျက်တာ ပန့်နှင့် Common Rail ဖိအားသတ်မှတ်ချက်' : 'Common Rail High Pressure Fuel & Injector Specs'}
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            {specs.systemName} · {specs.generation}
          </p>
        </div>

        {/* Unit Selector */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800 self-start sm:self-auto">
          {(['bar', 'psi', 'mpa'] as const).map((unit) => (
            <button
              key={unit}
              onClick={() => setSelectedUnit(unit)}
              className={`px-3 py-1 text-xs font-mono font-bold rounded-lg uppercase transition-all ${
                selectedUnit === unit
                  ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Main Pressure Gauge Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Cranking Pressure */}
        <div className="bg-neutral-950 border border-neutral-800/90 rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
            <span className="font-mono text-cyan-400">စက်နှိုးချိန် ဖိအား (CRANKING)</span>
            <Activity className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
            {convertPressure(specs.crankingPressureBar)}
          </div>
          <p className="text-[11px] text-neutral-400 mt-2">
            {lang === 'my' ? 'စက်နှိုးရန် အနိမ့်ဆုံး လိုအပ်သောဖိအား (အောက်ရောက်ပါက စက်မနိုးပါ)' : 'Minimum required pressure to fire injectors'}
          </p>
        </div>

        {/* Idle Pressure */}
        <div className="bg-neutral-950 border border-neutral-800/90 rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
            <span className="font-mono text-emerald-400">အင်ဂျင်နှိုးထားချိန် (IDLE)</span>
            <Gauge className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
            {convertPressure(specs.idlePressureBar)}
          </div>
          <p className="text-[11px] text-neutral-400 mt-2">
            {lang === 'my' ? '650–750 RPM အင်ဂျင်လည်ပတ်နေချိန် ပုံမှန်ဖိအား' : 'Normal idle operating rail pressure'}
          </p>
        </div>

        {/* Max Rail Pressure */}
        <div className="bg-neutral-950 border border-amber-900/30 rounded-xl p-4 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-neutral-400 text-xs mb-1">
            <span className="font-mono text-amber-400">အမြင့်ဆုံးဖိအား (MAX LOAD)</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-amber-300 mt-1">
            {convertPressure(specs.maxPressureBar)}
          </div>
          <p className="text-[11px] text-neutral-400 mt-2">
            {lang === 'my' ? 'လီဗာအပြည့်နင်းချိန် အမြင့်ဆုံးဒီဇယ်ဖိအား' : 'Maximum peak pressure at wide open throttle'}
          </p>
        </div>
      </div>

      {/* Fuel System Technical Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 space-y-2">
          <div className="font-semibold text-neutral-300 flex items-center gap-1.5">
            <Droplet className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'my' ? 'ဒီဇယ်ပန့်နှင့် အင်ဂျက်တာ အမျိုးအစား:' : 'Pump & Injector Architecture:'}</span>
          </div>
          <div className="text-neutral-400 space-y-1">
            <div><strong className="text-white">Supply Pump:</strong> {specs.supplyPumpModel}</div>
            <div><strong className="text-white">Injector Type:</strong> {specs.injectorType}</div>
            <div><strong className="text-white">Injection Pilot:</strong> {specs.preInjection}</div>
          </div>
        </div>

        <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 space-y-2">
          <div className="font-semibold text-neutral-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'my' ? 'စစ်ဆေးချက် တန်ဖိုးများနှင့် အာရုံခံဗို့အား:' : 'Diagnostic Values & Sensor Voltage:'}</span>
          </div>
          <div className="text-neutral-400 space-y-1">
            <div><strong className="text-white">Sensor Voltage:</strong> {specs.railPressureSensorVoltage}</div>
            <div><strong className="text-white">Injector Feedback Limit:</strong> {specs.feedbackCorrectionLimit}</div>
            <div><strong className="text-white">Injector Clamp Bolt:</strong> {is1KD ? '26 N·m (19.2 ft-lb)' : '30 N·m (22.1 ft-lb)'}</div>
          </div>
        </div>
      </div>

      {/* Mechanic Critical Notice */}
      <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-amber-300 block mb-0.5">
            {lang === 'my' ? 'ဝပ်ရှော့ ဆရာများအတွက် အထူးသတိပြုရန် လမ်းညွှန်ချက်:' : 'Professional Common Rail Service Caution:'}
          </strong>
          {lang === 'my' ? specs.notesMy : specs.notesEn}
        </div>
      </div>
    </div>
  );
};
