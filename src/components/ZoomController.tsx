import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ZoomControllerProps {
  zoomPercent: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export const ZoomController: React.FC<ZoomControllerProps> = ({
  zoomPercent,
  onZoomIn,
  onZoomOut,
  onReset,
}) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  return (
    <aside 
      aria-label="Screen Zoom Controls"
      className="fixed bottom-4 right-3 sm:right-6 z-50 flex items-center print:hidden select-none"
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-2xl rounded-2xl p-1.5 flex items-center gap-1 ring-1 ring-white/10 text-slate-100">
        {collapsed ? (
          <button
            onClick={() => setCollapsed(false)}
            title="Open Screen Zoom Control (မျက်နှာပြင် ချဲ့/ကျုံ့ ခလုတ်ဖွင့်ရန်)"
            aria-label="Open screen zoom control"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>{zoomPercent}%</span>
          </button>
        ) : (
          <>
            {/* Zoom Out Button */}
            <button
              onClick={onZoomOut}
              disabled={zoomPercent <= 80}
              title="Zoom Out (ကျုံ့မည် -10%)"
              aria-label="Zoom Out"
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center text-slate-200 transition"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            {/* Percentage Badge & Reset */}
            <button
              onClick={onReset}
              title="Reset Zoom to 100% (မူလအရွယ်အစား ၁၀၀% ပြန်ထားရန်)"
              aria-label="Reset Zoom"
              className="px-2.5 h-8 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 flex items-center gap-1 font-mono text-xs font-bold transition group"
            >
              <span className={zoomPercent !== 100 ? 'text-amber-400 font-extrabold' : 'text-slate-300'}>
                {zoomPercent}%
              </span>
              {zoomPercent !== 100 && (
                <RotateCcw className="w-3 h-3 text-slate-400 group-hover:text-white transition" />
              )}
            </button>

            {/* Zoom In Button */}
            <button
              onClick={onZoomIn}
              disabled={zoomPercent >= 200}
              title="Zoom In (ချဲ့မည် +10%)"
              aria-label="Zoom In"
              className="w-8 h-8 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center text-slate-950 font-bold transition shadow-lg shadow-amber-500/20"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            {/* Minimize */}
            <button
              onClick={() => setCollapsed(true)}
              title="Minimize zoom controls (ခေတ္တခေါက်သိမ်းရန်)"
              aria-label="Minimize zoom controls"
              className="w-6 h-8 text-[10px] text-slate-400 hover:text-slate-200 transition px-1 flex items-center justify-center"
            >
              ✕
            </button>
          </>
        )}
      </div>
    </aside>
  );
};
