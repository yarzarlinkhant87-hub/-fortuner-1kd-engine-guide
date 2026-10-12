import React from 'react';
import { Cog, CheckCircle2 } from 'lucide-react';

interface TimingGuideViewProps {
  engine: any;
}

export const TimingGuideView: React.FC<TimingGuideViewProps> = ({ engine }) => {
  const timing = engine.timingMarks || {};
  const notes = engine.timingNotes || [];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
        <Cog className="w-5 h-5 text-amber-400" />
        <h3 className="font-black text-white text-base sm:text-lg">
          {engine.code} တိုင်မင်အမှတ်အသားများနှင့် ချိန်နည်းလမ်းညွှန် (Timing Marks & Alignment)
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] font-bold text-amber-400 block mb-1 font-mono uppercase">
            Crankshaft (အောက်ဒလက်)
          </span>
          <p className="text-xs text-slate-200 leading-relaxed">
            {timing.crankshaft || 'TDC အမှတ် (0° Mark) နှင့် အင်ဂျင်ဘလောက် အမှတ်အသားကို တိုက်ဆိုင်ထားပါ။'}
          </p>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] font-bold text-emerald-400 block mb-1 font-mono uppercase">
            Camshaft (ကမ်ရှပ် အပေါ်အမှတ်)
          </span>
          <p className="text-xs text-slate-200 leading-relaxed">
            {timing.camshaft || 'Cam gear အမှတ်အသား (TDC Dot / Line) ကို Cylinder Head အမှတ်နှင့် ချိန်ညှိပါ။'}
          </p>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[11px] font-bold text-blue-400 block mb-1 font-mono uppercase">
            High Pressure Pump / Drive
          </span>
          <p className="text-xs text-slate-200 leading-relaxed">
            {timing.pump || timing.highPressurePump || 'Common Rail Pump သို့မဟုတ် Injection Pump အမှတ်အသား ချိန်ညှိရန်။'}
          </p>
        </div>
      </div>

      {notes && notes.length > 0 && (
        <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono">
            အရေးကြီး သတိပြုရန် အချက်များ (Crucial Timing Notes)
          </h4>
          <ul className="space-y-1.5">
            {notes.map((note: string, i: number) => (
              <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
