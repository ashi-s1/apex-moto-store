import Link from "next/link";
import type { Metadata } from "next";
import { getProductsFromDb } from "@/db/queries/products";
import { formatINR } from "@/data/products";
import { StockStatusBadge } from "@/components/product/StockStatusBadge";
import { SafeImage } from "@/components/ui/SafeImage";
import { Gauge, ArrowRight } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Precision Track Hardware Catalog | Apex Moto Corse",
  description:
    "Explore our complete line of track-homologated motorcycle hardware, carbon fiber helmets, titanium exhaust systems, radial brake calipers, and CNC rearsets in ₹ INR.",
};

interface ProductsPageProps {
  searchParams?: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const activeCategorySlug = resolvedSearchParams.category;

  const products = await getProductsFromDb();

  // Dynamically extract all distinct categories and their counts
  const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoriesList = [
    { name: "All Modules", slug: "all", count: products.length },
    ...Object.keys(categoryCounts).map((cat) => ({
      name: cat,
      slug: cat.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      count: categoryCounts[cat],
    })),
  ];

  const filteredProducts =
    activeCategorySlug && activeCategorySlug !== "all"
      ? products.filter(
          (p) =>
            p.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") ===
            activeCategorySlug
        )
      : products;

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

      {/* Category Filter Navigation Bar - Responsive Sticky */}
      <div className="border-b border-zinc-800 bg-zinc-900/90 sticky top-14 sm:top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categoriesList.map((cat) => {
            const isActive =
              (!activeCategorySlug && cat.slug === "all") ||
              activeCategorySlug === cat.slug;
            return (
              <Link
                key={cat.slug}
                href={
                  cat.slug === "all"
                    ? "/products"
                    : `/products?category=${cat.slug}`
                }
                className={`px-3 py-1.5 text-xs font-tech-mono uppercase tracking-wider whitespace-nowrap border transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-amber-400 text-zinc-950 border-amber-300 font-extrabold shadow-sm"
                    : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-none font-bold ${
                    isActive
                      ? "bg-zinc-950 text-amber-400"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {cat.count}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-zinc-900/30 border border-zinc-800 p-6 sm:p-8">
            <p className="text-zinc-400 font-tech-mono text-xs sm:text-sm uppercase">
              No hardware components found matching category: [{activeCategorySlug}]
            </p>
            <Link
              href="/products"
              className="mt-4 inline-block px-4 py-2 bg-amber-400 text-zinc-950 font-tech-mono text-xs font-bold uppercase"
            >
              Reset Category Filter
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-950 border border-zinc-800 hover:border-amber-400/80 transition-all flex flex-col group shadow-xl relative"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              {/* Product Image & Badges */}
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                <SafeImage
                  src={product.images[0]?.url}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />

                {/* Stock Status Derived Badge */}
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10">
                  <StockStatusBadge
                    inventoryCount={product.inventoryCount}
                    showDetails={false}
                  />
                </div>

                {/* SKU Badge */}
                <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 z-10 font-tech-mono text-[10px] sm:text-[11px] bg-zinc-950/90 text-amber-400 px-2 py-0.5 border border-zinc-700 font-bold">
                  {product.partSku}
                </div>

                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-tech-mono text-zinc-400">
                    <span className="uppercase text-amber-400 font-semibold truncate max-w-[50%]">
                      {product.category}
                    </span>
                    <span className="text-zinc-500 truncate max-w-[50%] text-right">
                      SAFETY: {product.specs.safetyRating.split("/")[0]}
                    </span>
                  </div>

                  <Link href={`/products/${product.slug}`}>
                    <h2 className="text-base sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {product.title}
                    </h2>
                  </Link>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Spec Highlights Table Row */}
                <div className="py-2.5 px-3 bg-zinc-900/60 border border-zinc-800 text-[10px] sm:text-[11px] font-tech-mono grid grid-cols-2 sm:grid-cols-3 gap-2 text-zinc-300">
                  <div>
                    <span className="text-zinc-500 block text-[9px]">MATERIAL:</span>
                    <span className="truncate block">{product.specs.material}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px]">WEIGHT:</span>
                    <span className="text-amber-400 block font-bold">{product.specs.weight}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-zinc-500 block text-[9px]">FITMENT:</span>
                    <span className="text-emerald-400 block">{product.compatibleMotorcycles.length} Bikes Verified</span>
                  </div>
                </div>

                {/* Bottom Price & Link */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-tech-mono text-zinc-500 block uppercase">
                      Price in INR
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-white font-tech-mono">
                      {formatINR(product.price)}
                    </span>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-tech-mono text-[11px] sm:text-xs font-bold uppercase transition-colors shrink-0"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </main>
    </div>
  );
}
