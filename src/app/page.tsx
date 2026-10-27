import Link from "next/link";
import { getProductsFromDb } from "@/db/queries/products";
import { formatINR } from "@/data/products";
import { StockStatusBadge } from "@/components/product/StockStatusBadge";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  Gauge,
  ArrowRight,
  Wrench,
  ChevronRight,
} from "lucide-react";

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProductsFromDb();
  const featuredProduct = products[0]; // Apex GP-R Carbon Helmet

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Hero Section with Industrial Moto Vibe */}
      <section className="relative border-b border-zinc-800 bg-zinc-950 overflow-hidden py-10 sm:py-16 lg:py-24">
        {/* Background Grids & Hazard Stripes */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Mission & Hero Text */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] sm:text-xs font-tech-mono text-amber-400">
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <span className="truncate">HOMOLOGATED RACING COMPONENTS // 2026 SPEC</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] sm:leading-none">
                TRACK PRECISION.
                <span className="block text-amber-400">UNCOMPROMISING</span>
                SAFETY RATINGS.
              </h1>

              <p className="max-w-xl text-sm sm:text-base lg:text-lg text-zinc-400 font-sans leading-relaxed">
                Engineered in Bengaluru for competitive Asian circuits. From autoclave-molded ECE 22.06 pre-preg carbon fiber helmets to hydroformed titanium exhaust manifolds and 7075 monobloc radial brakes.
              </p>

              {/* Action Buttons - Full width on small screens, row on sm+ */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href={`/products/${featuredProduct.slug}`}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-zinc-950 font-tech-mono text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl border border-amber-300 transition-colors"
                >
                  <Gauge className="w-4 h-4 shrink-0" />
                  <span>EXPLORE FEATURED: GP-R HELMET</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>

                <Link
                  href="/products"
                  className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 text-zinc-200 font-tech-mono text-xs font-bold uppercase tracking-wider border border-zinc-700 hover:border-amber-400 transition-colors text-center justify-center flex items-center"
                >
                  FULL HARDWARE CATALOG &gt;
                </Link>
              </div>

              {/* Key Technical Standards - Responsive columns */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-5 sm:pt-6 border-t border-zinc-800/80 text-xs font-tech-mono">
                <div className="bg-zinc-900/40 sm:bg-transparent p-2 sm:p-0 border sm:border-0 border-zinc-800/60">
                  <span className="text-amber-400 text-sm sm:text-lg font-black block font-tech-mono">
                    ECE 22.06
                  </span>
                  <span className="text-zinc-500 text-[10px] sm:text-[11px] uppercase block leading-tight mt-0.5">
                    Homologation
                  </span>
                </div>
                <div className="bg-zinc-900/40 sm:bg-transparent p-2 sm:p-0 border sm:border-0 border-zinc-800/60">
                  <span className="text-white text-sm sm:text-lg font-black block font-tech-mono">
                    100% BOLT-ON
                  </span>
                  <span className="text-zinc-500 text-[10px] sm:text-[11px] uppercase block leading-tight mt-0.5">
                    Fitment Guarantee
                  </span>
                </div>
                <div className="bg-zinc-900/40 sm:bg-transparent p-2 sm:p-0 border sm:border-0 border-zinc-800/60">
                  <span className="text-emerald-400 text-sm sm:text-lg font-black block font-tech-mono">
                    ₹ INR PRICING
                  </span>
                  <span className="text-zinc-500 text-[10px] sm:text-[11px] uppercase block leading-tight mt-0.5">
                    Taxes Included
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-zinc-900/80 border border-zinc-800 p-4 sm:p-6 shadow-2xl group">
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                <div className="flex items-center justify-between text-xs font-tech-mono text-zinc-400 mb-3 sm:mb-4">
                  <span className="text-amber-400 font-bold uppercase text-[11px] sm:text-xs">
                    FEATURED SPECIMEN
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-400">SKU: {featuredProduct.partSku}</span>
                </div>

                <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden mb-3 sm:mb-4 border border-zinc-800">
                  <SafeImage
                    src={featuredProduct.images[0]?.url}
                    alt={featuredProduct.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <StockStatusBadge
                      inventoryCount={featuredProduct.inventoryCount}
                      showDetails={false}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {featuredProduct.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {featuredProduct.shortDescription}
                  </p>

                  <div className="pt-3 sm:pt-4 border-t border-zinc-800 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-tech-mono text-zinc-500 block">
                        PRICE IN INR
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white font-tech-mono">
                        {formatINR(featuredProduct.price)}
                      </span>
                    </div>

                    <Link
                      href={`/products/${featuredProduct.slug}`}
                      className="px-3 sm:px-4 py-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-tech-mono text-xs font-bold uppercase flex items-center gap-1 transition-colors shrink-0"
                    >
                      <span>INSPECT SPEC</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1">
        <div className="border-b border-zinc-800 pb-4 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech-mono text-amber-400 uppercase">
              <Wrench className="w-3.5 h-3.5" />
              <span>ACTIVE HARDWARE PORTFOLIO</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-white mt-1">
              HIGH-PERFORMANCE HARDWARE MODULES
            </h2>
          </div>

          <Link
            href="/products"
            className="text-xs font-tech-mono text-zinc-400 hover:text-amber-400 flex items-center gap-1 uppercase self-start sm:self-auto"
          >
            <span>Browse Full Matrix</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.slug}`}
              className="bg-zinc-950 border border-zinc-800 hover:border-amber-400/80 transition-all flex flex-col group shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                <SafeImage
                  src={item.images[0]?.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute top-2 left-2">
                  <StockStatusBadge
                    inventoryCount={item.inventoryCount}
                    showDetails={false}
                  />
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-tech-mono bg-zinc-950/90 text-amber-400 px-1.5 py-0.5 border border-zinc-800">
                  {item.partSku}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-tech-mono uppercase text-zinc-500 block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                  <div className="text-[11px] font-tech-mono text-zinc-400 truncate">
                    <span className="text-zinc-500">SPEC:</span>{" "}
                    {item.specs?.material ? item.specs.material.split("&")[0] : "Track Spec"}
                  </div>

                  <div className="flex items-center justify-between text-xs font-tech-mono">
                    <span className="text-base font-black text-white">
                      {formatINR(item.price)}
                    </span>
                    <span className="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform">
                      VIEW &gt;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
