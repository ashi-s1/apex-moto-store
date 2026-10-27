import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getProductBySlugFromDb,
  getProductSlugsFromDb,
  getProductsFromDb,
} from "@/db/queries/products";
import { formatINR } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { TechSpecTable } from "@/components/product/TechSpecTable";
import { CompatibleMotorcyclesList } from "@/components/product/CompatibleMotorcyclesList";
import { AddToCartSection } from "@/components/product/AddToCartSection";
import { StockStatusBadge } from "@/components/product/StockStatusBadge";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  ShieldCheck,
  ChevronRight,
  Package,
  Wrench,
  Gauge,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const revalidate = 60;

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProductSlugsFromDb();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlugFromDb(slug);

  if (!product) {
    return {
      title: "Product Not Found | Apex Moto Corse",
    };
  }

  return {
    title: `${product.title} (${product.partSku}) | ${formatINR(product.price)} | Apex Moto`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} - Apex Moto Corse`,
      description: product.shortDescription,
      images: product.images[0]?.url ? [product.images[0].url] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlugFromDb(slug);

  if (!product) {
    notFound();
  }

  // Get other products for "Related Track Hardware"
  const allProducts = await getProductsFromDb();
  const relatedProducts = allProducts.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top Breadcrumb & Telemetry Navigation */}
      <div className="border-b border-zinc-800 bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-tech-mono text-zinc-400 gap-2 sm:gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <Link
              href="/"
              className="hover:text-amber-400 transition-colors uppercase"
            >
              APEX
            </Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <Link
              href="/products"
              className="hover:text-amber-400 transition-colors uppercase"
            >
              HARDWARE
            </Link>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-500 uppercase truncate max-w-[100px] xs:max-w-none">{product.category}</span>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-amber-400 font-semibold truncate max-w-[130px] xs:max-w-[200px] sm:max-w-xs">
              {product.partSku}
            </span>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px]">
            <span className="text-zinc-500 hidden md:inline">
              SYS-REF: {product.homologationCode || "APX-TRACK-HOMO"}
            </span>
            <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700">
              TRACK SPEC: READY
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-10 sm:space-y-16 pb-24 sm:pb-12">
        {/* Top Product Hero Section: Gallery + Buy Box & Key Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column: High-Contrast Imagery & Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <ProductGallery
              images={product.images}
              title={product.title}
              category={product.category}
              partSku={product.partSku}
            />

            {/* Quick Highlights / Bullet Specs */}
            <div className="bg-zinc-950 border border-zinc-800 p-4 sm:p-5 relative">
              <div className="flex items-center gap-2 mb-3">
                <Gauge className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-bold font-tech-mono uppercase tracking-wider text-white">
                  ENGINEERING HIGHLIGHTS
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-zinc-300 font-sans"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Title, SKU, Price, Derived Stock & Cart Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              {/* Category & Homologation Tags */}
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-[11px] sm:text-xs font-tech-mono uppercase text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 font-bold">
                  {product.category}
                </span>

                {product.homologationCode && (
                  <span className="text-[11px] sm:text-xs font-tech-mono uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-600/40 px-2 py-0.5">
                    {product.homologationCode}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {product.title}
              </h1>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                {product.subtitle}
              </p>

              {/* Monospace SKU & Rating Bar */}
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-tech-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">PART SKU:</span>
                  <span className="text-amber-400 font-bold bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[11px] sm:text-xs">
                    {product.partSku}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-300 text-[11px] sm:text-xs">
                  <span className="text-amber-400 font-bold">★ {product.rating}</span>
                  <span className="text-zinc-500">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* High-Contrast Price & Add to Cart Section with Stock Status */}
            <AddToCartSection
              price={product.price}
              originalPrice={product.originalPrice}
              inventoryCount={product.inventoryCount}
              partSku={product.partSku}
            />

            {/* Quick Spec Matrix preview */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-3.5 sm:p-4 font-tech-mono text-xs space-y-2">
              <div className="text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-wider">
                CORE TECHNICAL PARAMETERS
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-800">
                <div>
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">MATERIAL:</span>
                  <span className="text-zinc-200 truncate block font-medium text-[11px] sm:text-xs">
                    {product.specs.material}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">WEIGHT:</span>
                  <span className="text-amber-400 block font-bold text-[11px] sm:text-xs">
                    {product.specs.weight}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">SAFETY RATING:</span>
                  <span className="text-emerald-400 block font-semibold truncate text-[11px] sm:text-xs">
                    {product.specs.safetyRating}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[9px] sm:text-[10px]">PLATFORMS:</span>
                  <span className="text-zinc-200 block font-medium text-[11px] sm:text-xs">
                    {product.compatibleMotorcycles.length} Motorcycles Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Detailed Technical Specifications Table */}
        <section className="space-y-4">
          <div className="border-b border-zinc-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-xl font-bold uppercase tracking-wider text-white font-tech-mono">
                1. Technical Specification Sheet
              </h2>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Lab-measured tolerances, metallurgical compositions, and homologation compliance.
              </p>
            </div>
            <div className="font-tech-mono text-[11px] sm:text-xs text-amber-400">
              [ISO 9001 TESTED]
            </div>
          </div>

          <TechSpecTable specs={product.specs} productTitle={product.title} />
        </section>

        {/* Section 2: Deep Dive Engineering Description & Box Contents */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-800 p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs sm:text-sm font-bold font-tech-mono uppercase tracking-wider text-white">
                TRACK ENGINEERING & DEVELOPMENT REPORT
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
              {product.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Package / Box Contents */}
          <div className="lg:col-span-4 bg-zinc-950 border border-zinc-800 p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Package className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs sm:text-sm font-bold font-tech-mono uppercase tracking-wider text-white">
                INCLUDED IN THE BOX
              </h3>
            </div>
            <ul className="space-y-2.5 text-[11px] sm:text-xs font-tech-mono text-zinc-300">
              {product.boxContents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">[{idx + 1}]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Compatible Motorcycles List */}
        <section className="space-y-4">
          <div className="border-b border-zinc-800 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-xl font-bold uppercase tracking-wider text-white font-tech-mono">
                2. Compatible Motorcycles
              </h2>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Chassis fitment matrix verified on OEM mounting tabs and subframes.
              </p>
            </div>
            <div className="font-tech-mono text-[11px] sm:text-xs text-emerald-400">
              [100% BOLT-ON]
            </div>
          </div>

          <CompatibleMotorcyclesList
            compatibleBikes={product.compatibleMotorcycles}
            partTitle={product.title}
          />
        </section>

        {/* Section 4: Related Track Hardware */}
        <section className="space-y-6 pt-6 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white font-tech-mono">
                RECOMMENDED TRACK HARDWARE
              </h3>
              <p className="text-xs text-zinc-400 font-sans mt-0.5">
                Complementary components for race weekend preparation.
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-tech-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 uppercase self-start sm:self-auto"
            >
              <span>View All Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedProducts.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="group bg-zinc-950 border border-zinc-800 hover:border-amber-400/80 transition-all overflow-hidden flex flex-col shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
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
                  <div className="absolute bottom-2 right-2 text-[10px] font-tech-mono bg-zinc-950/90 text-zinc-400 px-1.5 py-0.5 border border-zinc-800">
                    {item.partSku}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-tech-mono uppercase text-amber-400 block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-sans line-clamp-2 mt-1">
                      {item.title}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-tech-mono">
                    <span className="text-base font-black text-white">
                      {formatINR(item.price)}
                    </span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[11px] font-bold">
                      INSPECT SPEC &gt;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
