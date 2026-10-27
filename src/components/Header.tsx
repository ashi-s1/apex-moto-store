"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gauge,
  ShieldCheck,
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronRight,
  Wrench,
  Check,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/products", label: "All Hardware", tag: "CATALOG" },
    {
      href: "/products/apex-gp-r-carbon-helmet",
      label: "Carbon Helmet",
      tag: "ECE 22.06",
    },
    {
      href: "/products/apex-corse-titanium-exhaust-ktm-390",
      label: "Titanium Exhaust",
      tag: "TRACK RACE",
    },
    {
      href: "/products/apex-monobloc-radial-brake-calipers",
      label: "Braking Systems",
      tag: "MONOBLOC",
    },
    {
      href: "/products/apex-track-spec-cnc-rearsets",
      label: "CNC Rearsets",
      tag: "BILLET 6061",
    },
    {
      href: "/products?category=electronics-data-logging",
      label: "Telemetry & GPS",
      tag: "10HZ GNSS",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
      {/* Top telemetry ticker bar - Responsive */}
      <div className="bg-zinc-900/90 border-b border-zinc-800/80 px-3 sm:px-4 py-1 text-[10px] sm:text-[11px] font-tech-mono text-zinc-400 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-none">
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-amber-400 animate-pulse" />
            APEX TELEMETRY LIVE
          </span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline text-zinc-400">
            DEPOT: BLR-01 SOUTH WAREHOUSE
          </span>
          <span className="hidden md:inline text-zinc-600">|</span>
          <span className="hidden md:inline text-zinc-400">
            HOMOLOGATION: ECE 22.06 / FIM TRACK READY
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-zinc-400 shrink-0 pl-2">
          <span className="text-zinc-300">
            CURRENCY: <strong className="text-white font-semibold">INR (₹)</strong>
          </span>
          <span className="hidden xs:inline text-zinc-600">|</span>
          <span className="hidden xs:flex text-emerald-400 items-center gap-1">
            <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span className="hidden sm:inline">100% GENUINE SPEC</span>
            <span className="sm:hidden">VERIFIED</span>
          </span>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group shrink-0"
          aria-label="Apex Moto Corse Home"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-amber-400 transition-colors">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-amber-400" />
            <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase">
                APEX
              </span>
              <span className="text-base sm:text-lg font-bold tracking-widest text-amber-400 uppercase">
                MOTO
              </span>
              <span className="text-[9px] sm:text-[10px] font-tech-mono bg-zinc-800 text-zinc-300 px-1 py-0.2 border border-zinc-700 rounded-none">
                CORSE
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-tech-mono tracking-widest text-zinc-500 uppercase -mt-0.5 sm:-mt-1 hidden xs:block">
              Precision Track Engineering
            </span>
          </div>
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-tech-mono uppercase tracking-wider text-zinc-300">
          <Link
            href="/products"
            className={`hover:text-amber-400 transition-colors py-1 border-b-2 ${
              pathname === "/products"
                ? "border-amber-400 text-amber-400"
                : "border-transparent"
            }`}
          >
            All Hardware
          </Link>
          <Link
            href="/products/apex-gp-r-carbon-helmet"
            className="hover:text-amber-400 transition-colors py-1 border-b-2 border-transparent hover:border-amber-400"
          >
            Carbon Helmet
          </Link>
          <Link
            href="/products/apex-corse-titanium-exhaust-ktm-390"
            className="hover:text-amber-400 transition-colors py-1 border-b-2 border-transparent hover:border-amber-400"
          >
            Titanium Exhaust
          </Link>
          <Link
            href="/products/apex-monobloc-radial-brake-calipers"
            className="hover:text-amber-400 transition-colors py-1 border-b-2 border-transparent hover:border-amber-400"
          >
            Braking Systems
          </Link>
          <Link
            href="/products/apex-track-spec-cnc-rearsets"
            className="hover:text-amber-400 transition-colors py-1 border-b-2 border-transparent hover:border-amber-400"
          >
            CNC Rearsets
          </Link>
          <Link
            href="/products?category=electronics-data-logging"
            className="hover:text-amber-400 transition-colors py-1 border-b-2 border-transparent hover:border-amber-400 text-amber-400/90"
          >
            Telemetry
          </Link>
        </nav>

        {/* Action icons / Quick Cart & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Fitment Lookup link (Desktop / Tablet) */}
          <Link
            href="/products"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-xs font-tech-mono text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden md:inline">FITMENT LOOKUP</span>
            <span className="md:hidden">FITMENT</span>
          </Link>

          {/* Cart button */}
          <Link
            href="/products"
            className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-zinc-950 font-tech-mono text-xs font-bold uppercase transition-colors shrink-0"
            aria-label="Track Cart with 2 items"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden md:inline">TRACK CART</span>
            <span className="px-1.5 py-0.2 bg-zinc-950 text-amber-400 text-[10px] font-black">
              2
            </span>
          </Link>

          {/* Mobile Menu Hamburger Toggle (Visible < lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-amber-400 hover:border-zinc-700 active:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-amber-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Decorative hazard stripe line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-zinc-800 via-amber-500/40 to-zinc-800" />

      {/* Mobile Slide-Out / Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(3.5rem+1.75rem)] sm:top-[calc(4rem+1.75rem)] bottom-0 z-40 bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800 overflow-y-auto flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 sm:p-6 space-y-6">
            {/* Quick Mobile Search / Catalog Access */}
            <div className="bg-zinc-900/80 border border-zinc-800 p-3">
              <div className="flex items-center justify-between text-[11px] font-tech-mono text-zinc-400 mb-2">
                <span className="text-amber-400 font-bold uppercase flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  MOTORCYCLE FITMENT LOOKUP
                </span>
                <span className="text-zinc-600">[SYS-READY]</span>
              </div>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-2 px-3 bg-zinc-950 border border-zinc-700 text-xs font-tech-mono text-zinc-300 hover:border-amber-400 transition-colors"
              >
                <span>Search by Bike Model or Part SKU...</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Navigation Section */}
            <div>
              <div className="text-[10px] font-tech-mono uppercase tracking-widest text-zinc-500 mb-2 border-b border-zinc-800 pb-1">
                COMPETITION HARDWARE DIRECTORY
              </div>
              <nav className="divide-y divide-zinc-800/60">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-2 font-tech-mono text-xs uppercase tracking-wider transition-colors ${
                        isActive
                          ? "text-amber-400 bg-zinc-900/40 border-l-2 border-amber-400 pl-3"
                          : "text-zinc-200 hover:text-amber-400 hover:bg-zinc-900/20"
                      }`}
                    >
                      <span className="font-semibold">{link.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5">
                          {link.tag}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Engineering Standards Pill */}
            <div className="bg-zinc-900/60 border border-zinc-800 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-tech-mono text-white font-bold">
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                <span>HOMOLOGATION COMPLIANCE</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                ECE 22.06 certified composite shells, hydroformed titanium systems, and 7075-T6 billet alloys verified for circuit competition.
              </p>
              <div className="flex items-center gap-3 pt-2 text-[10px] font-tech-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> FIM Homologated
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3" /> 100% Bolt-On Fitment
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer Info */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/90 font-tech-mono text-[11px] text-zinc-400 flex items-center justify-between">
            <div>
              <span className="text-zinc-500 block text-[9px]">DEPOT LOCATION</span>
              <span className="text-zinc-300">BENGALURU, INDIA (₹ INR)</span>
            </div>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 bg-amber-400 text-zinc-950 font-bold text-xs uppercase"
            >
              BROWSE ALL
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
