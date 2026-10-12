import React from 'react';
import { Wrench } from 'lucide-react';

interface HeadTighteningDiagramProps {
  engine: any;
}

export const HeadTighteningDiagram: React.FC<HeadTighteningDiagramProps> = ({ engine }) => {
  const steps = engine.tighteningSteps || [];
  const sequence = engine.tighteningSequence || [];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
        <Wrench className="w-5 h-5 text-amber-400" />
        <h3 className="font-black text-white text-base sm:text-lg">
          ခေါင်းဘိုတူး အကြပ်ဆင့်နှင့် လှည့်ရမည့် အစီအစဉ် (Head Bolt Tightening Sequence & Steps)
        </h3>
      </div>

      {/* Tightening Stages */}
      <div className="mb-6">
        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 font-mono">
          Tightening Steps (အဆင့်ဆင့် ကြပ်နည်း)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {steps.map((st: any, idx: number) => (
            <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <div>
                <span className="text-xs font-bold text-white block">{st.step || st.stage || `Step ${idx + 1}`}</span>
                <span className="text-xs text-amber-400 font-mono font-bold block">{st.torque || st.value}</span>
                {st.note && <span className="text-[11px] text-slate-400 mt-0.5 block">{st.note}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bolt Diagram Visual */}
      {sequence && sequence.length > 0 && (
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">
            Bolt Numbering Order (အလယ်မှ ဘေးသို့ ကြပ်ရမည့် အစဉ်လိုက်)
          </h4>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-wrap gap-2 items-center justify-center">
            {sequence.map((boltNum: number, i: number) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-slate-900 border-2 border-amber-500/60 text-amber-300 font-black text-xs font-mono flex items-center justify-center shadow-md shadow-amber-500/10"
              >
                {boltNum}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 text-center mt-2">
            * သတိပြုရန် - ခေါင်းမကွေးစေရန် အလယ်ဘိုတူးများမှ စတင်ကာ ဘေးပတ်လည်သို့ ခရုပတ်ပုံစံ အဆင့်ဆင့် ညီညာစွာ ကြပ်ပေးရပါမည်။
          </p>
        </div>
      )}
    </div>
  );
};
