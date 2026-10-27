import { Gauge } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-4 text-center max-w-md">
        {/* Animated Gauge HUD Icon */}
        <div className="relative w-14 h-14 bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-xl">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-amber-400" />
          <Gauge className="w-7 h-7 text-amber-400 animate-spin" style={{ animationDuration: "3s" }} />
        </div>

        {/* Status Line */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[11px] font-tech-mono text-amber-400">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>FETCHING HOMOLOGATED HARDWARE // TELEMETRY SYNC</span>
          </div>
          <p className="text-xs font-tech-mono text-zinc-500 uppercase tracking-wider">
            Loading specifications & track compatibility...
          </p>
        </div>

        {/* Industrial progress bar */}
        <div className="w-48 h-1 bg-zinc-900 border border-zinc-800 overflow-hidden">
          <div className="h-full bg-amber-400 animate-pulse w-full" />
        </div>
      </div>
    </div>
  );
}
