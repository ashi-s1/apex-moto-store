import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="relative max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 shadow-2xl">
        <div className="hud-corner-tl" />
        <div className="hud-corner-br" />

        <div className="flex justify-center mb-4 text-amber-400">
          <ShieldAlert className="w-12 h-12 animate-pulse" />
        </div>

        <div className="text-xs font-tech-mono text-amber-400 tracking-widest uppercase mb-1">
          // ERROR 404: TELEMETRY NOT FOUND //
        </div>

        <h1 className="text-2xl font-black uppercase text-white tracking-tight mb-3">
          COMPONENT NOT LOCATED
        </h1>

        <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
          The requested hardware module, part SKU, or chassis documentation does not exist in the active Apex registry.
        </p>

        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-tech-mono text-xs font-bold uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HARDWARE CATALOG</span>
        </Link>
      </div>
    </div>
  );
}

