import { Suspense } from "react";
import type { Metadata } from "next";
import { getProductsFromDb } from "@/db/queries/products";
import { ProductsCatalogClient } from "@/components/product/ProductsCatalogClient";
import { Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Precision Track Hardware Catalog | Apex Moto Corse",
  description:
    "Explore our complete line of track-homologated motorcycle hardware, carbon fiber helmets, titanium exhaust systems, radial brake calipers, and CNC rearsets in ₹ INR.",
};

export default async function ProductsPage() {
  const products = await getProductsFromDb();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top Banner */}
      <div className="border-b border-zinc-800 bg-zinc-900/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 relative z-10">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-tech-mono text-amber-400 mb-2">
            <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>[ SYSTEM CATALOG // HARDWARE INVENTORY ]</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            COMPETITION HARDWARE CATALOG
          </h1>

          <p className="mt-2 max-w-2xl text-xs sm:text-sm lg:text-base text-zinc-400 font-sans leading-relaxed">
            Precision engineered components for supersport and roadster racing. Every item is verified for metallurgical tolerances, track durability, and safety homologations (ECE 22.06 / TÜV / FIM).
          </p>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-tech-mono text-zinc-400">
            <span className="px-2.5 sm:px-3 py-1 bg-zinc-900 border border-zinc-700 text-zinc-300">
              PRICES: INDIAN RUPEES (₹ INR)
            </span>
            <span className="px-2.5 sm:px-3 py-1 bg-zinc-900 border border-zinc-700 text-emerald-400">
              PAN-INDIA AIR FREIGHT
            </span>
            <span className="px-2.5 sm:px-3 py-1 bg-zinc-900 border border-zinc-700 text-amber-400">
              100% BOLT-ON FITMENT
            </span>
          </div>
        </div>
      </div>

      {/* Catalog Listing with Client-Side Filter inside Suspense */}
      <Suspense
        fallback={
          <div className="py-20 text-center font-tech-mono text-xs text-zinc-400">
            LOADING HARDWARE MATRIX...
          </div>
        }
      >
        <ProductsCatalogClient products={products} />
      </Suspense>
    </div>
  );
}
