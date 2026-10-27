import Link from "next/link";
import { Gauge, ShieldCheck, Truck, RotateCcw, Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 mt-12 sm:mt-20 text-zinc-400">
      {/* 4 Key Pillars Banner */}
      <div className="border-b border-zinc-800/80 bg-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 bg-zinc-950 border border-zinc-800 text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-tech-mono uppercase text-white tracking-wider">
                ECE 22.06 & FIM Certified
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Zero grey-market components. 100% verified track homologated safety ratings.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 bg-zinc-950 border border-zinc-800 text-amber-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-tech-mono uppercase text-white tracking-wider">
                Pan-India Express Freight
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Dispatched from Bengaluru & Delhi depots. Real-time GPS tracking with insurance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 bg-zinc-950 border border-zinc-800 text-amber-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-tech-mono uppercase text-white tracking-wider">
                Guaranteed Fitment Matrix
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Engineered for direct bolt-on compatibility with OEM frames and swingarms.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 bg-zinc-950 border border-zinc-800 text-amber-400 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-tech-mono uppercase text-white tracking-wider">
                14-Day Track Guarantee
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                Unopened hardware exchange with immediate replacement if mounting differs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap & Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-zinc-900 border border-amber-400/50 flex items-center justify-center">
                <Gauge className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-sm font-black tracking-widest text-white uppercase">APEX MOTO CORSE</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              High-performance motorcycle racing hardware, structural composites, and rider safety equipment designed for competitive track duty across Asian circuits.
            </p>
            <div className="font-tech-mono text-[11px] text-zinc-500">
              <p>PRECISION BENCHMARK: ISO 9001:2015</p>
              <p>OPERATING REGION: BENGALURU, INDIA</p>
            </div>
          </div>

          {/* Quick Hardware Links */}
          <div>
            <h5 className="text-xs font-bold font-tech-mono uppercase text-white tracking-widest mb-3 border-l-2 border-amber-400 pl-2">
              Track Hardware
            </h5>
            <ul className="space-y-2 text-xs font-tech-mono">
              <li>
                <Link href="/products/apex-gp-r-carbon-helmet" className="hover:text-amber-400 transition-colors">
                  &gt; APEX GP-R Carbon Helmet
                </Link>
              </li>
              <li>
                <Link href="/products/apex-corse-titanium-exhaust-ktm-390" className="hover:text-amber-400 transition-colors">
                  &gt; Titanium Race Exhaust (KTM 390)
                </Link>
              </li>
              <li>
                <Link href="/products/apex-monobloc-radial-brake-calipers" className="hover:text-amber-400 transition-colors">
                  &gt; Monobloc 100mm Radial Calipers
                </Link>
              </li>
              <li>
                <Link href="/products/apex-track-spec-cnc-rearsets" className="hover:text-amber-400 transition-colors">
                  &gt; CNC 6061 Billet Rearsets
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Standards */}
          <div>
            <h5 className="text-xs font-bold font-tech-mono uppercase text-white tracking-widest mb-3 border-l-2 border-amber-400 pl-2">
              Safety Homologations
            </h5>
            <div className="space-y-2 text-xs font-tech-mono text-zinc-400">
              <div className="p-2 bg-zinc-900 border border-zinc-800">
                <span className="text-amber-400 block font-bold">ECE 22.06 UN REGULATION</span>
                <span className="text-[11px] text-zinc-500">Rotational oblique acceleration testing passed.</span>
              </div>
              <div className="p-2 bg-zinc-900 border border-zinc-800">
                <span className="text-white block font-bold">TÜV RHEINLAND KBA</span>
                <span className="text-[11px] text-zinc-500">Hydraulic line & structural load verified.</span>
              </div>
            </div>
          </div>

          {/* Operations & Logistics */}
          <div>
            <h5 className="text-xs font-bold font-tech-mono uppercase text-white tracking-widest mb-3 border-l-2 border-amber-400 pl-2">
              Track Logistics
            </h5>
            <p className="text-xs text-zinc-400 mb-2">
              Dispatch facility operational Mon - Sat for same-day priority air shipping.
            </p>
            <div className="p-3 bg-zinc-900/80 border border-zinc-800 font-tech-mono text-[11px] space-y-1">
              <div className="text-zinc-300">HUB: Whitefield Industrial Area, Bengaluru</div>
              <div className="text-zinc-500">GSTIN: 29AABCA1234F1Z7</div>
              <div className="text-amber-400">SUPPORT: telemetry@apex-moto.in</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="border-t border-zinc-800/80 mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-tech-mono text-zinc-500 gap-4 text-center sm:text-left">
          <p>© 2026 APEX MOTO CORSE. ALL SPECIFICATIONS VERIFIED UNDER COMPETITION STANDARDS.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs">
            <span className="hover:text-zinc-400 cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="text-zinc-700">/</span>
            <span className="hover:text-zinc-400 cursor-pointer">TERMS OF SALE</span>
            <span className="text-zinc-700">/</span>
            <span className="hover:text-zinc-400 cursor-pointer">HOMOLOGATION REGISTRY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
