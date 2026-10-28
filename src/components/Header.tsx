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
  Flame,
  Disc,
  Sliders,
  Radio,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Box,
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
    {
      href: "/products",
      label: "All Hardware",
      tag: "10 MODULES",
      icon: Box,
      desc: "Full competition inventory & telemetry gear",
    },
    {
      href: "/products/apex-gp-r-carbon-helmet",
      label: "Carbon Helmet & Armor",
      tag: "ECE 22.06",
      icon: ShieldCheck,
      desc: "FIM certified 3K prepreg carbon shell",
    },
    {
      href: "/products/apex-corse-titanium-exhaust-ktm-390",
      label: "Titanium Exhaust",
      tag: "RACE SPEC",
      icon: Flame,
      desc: "Hydroformed full system with carbon endcap",
    },
    {
      href: "/products/apex-monobloc-radial-brake-calipers",
      label: "Braking Systems",
      tag: "MONOBLOC",
      icon: Disc,
      desc: "CNC 7075-T6 4-piston radial calipers",
    },
    {
      href: "/products/apex-track-spec-cnc-rearsets",
      label: "CNC Rearsets",
      tag: "BILLET 6061",
      icon: Sliders,
      desc: "Multi-position reverse GP shift ergonomics",
    },
    {
      href: "/products?category=electronics-data-logging",
      label: "Telemetry & 10Hz GPS",
      tag: "10HZ GNSS",
      icon: Radio,
      desc: "Standalone autonomous circuit lap timer & logger",
    },
  ];

  const bikePlatforms = [
    { name: "KTM RC / Duke 390", tag: "GEN 2 & 3" },
    { name: "Yamaha YZF-R15 / R3", tag: "V3 / V4" },
    { name: "Kawasaki Ninja 400 / ZX", tag: "SUPERSPORT" },
    { name: "BMW G310R / RR", tag: "ROADSTER" },
  ];

  return (
    <>
      {/* Main Top Header */}
      <header className="sticky top-0 z-40 w-full bg-zinc-950 border-b border-zinc-800">
        {/* Top telemetry ticker bar - Responsive */}
        <div className="bg-zinc-900 border-b border-zinc-800/80 px-3 sm:px-4 py-1 text-[10px] sm:text-[11px] font-tech-mono text-zinc-400 flex items-center justify-between overflow-x-auto whitespace-nowrap scrollbar-none">
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
                  APEX <span className="text-amber-400">MOTO</span>
                </span>
                <span className="text-[10px] sm:text-xs font-tech-mono bg-zinc-800 text-zinc-300 px-1 py-0.2 border border-zinc-700">
                  CORSE
                </span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-tech-mono text-zinc-400 tracking-wider uppercase hidden sm:block">
                Precision Motorcycle Hardware
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-tech-mono uppercase tracking-wider text-zinc-300">
            <Link
              href="/products"
              className="hover:text-amber-400 transition-colors py-1 border-b-2 border-transparent hover:border-amber-400"
            >
              Hardware
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
              className="lg:hidden p-2 bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-amber-400 hover:border-amber-400/60 active:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400"
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
      </header>

      {/* FULL-SCREEN HIGH-PERFORMANCE MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 z-[9999] bg-zinc-950 flex flex-col justify-between overflow-hidden"
        >
          {/* Top Bar inside Drawer */}
          <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <div className="w-7 h-7 bg-zinc-950 border border-amber-400/80 flex items-center justify-center">
                <Gauge className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-wider text-white uppercase">
                  APEX <span className="text-amber-400">MOTO</span>
                </span>
                <span className="text-[9px] font-tech-mono bg-zinc-800 text-zinc-400 px-1 py-0.5 border border-zinc-700">
                  CORSE
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-400 text-zinc-950 font-tech-mono text-[11px] font-bold uppercase"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>CART: 2</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 bg-zinc-950 border border-amber-400/80 text-amber-400 hover:bg-amber-400 hover:text-zinc-950 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Telemetry Status Strip */}
          <div className="bg-zinc-900/60 border-b border-zinc-800/80 px-4 py-1.5 flex items-center justify-between text-[10px] font-tech-mono text-zinc-400 shrink-0">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              TELEMETRY: ONLINE
            </span>
            <span className="text-zinc-500">BLR DEPOT (₹ INR)</span>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 overscroll-contain">
            {/* Quick Search & Machine Fitment Bar */}
            <div className="bg-zinc-900/80 border border-zinc-800 p-3 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-tech-mono text-zinc-400">
                <span className="text-amber-400 font-bold uppercase flex items-center gap-1">
                  <Search className="w-3 h-3" />
                  MOTORCYCLE FITMENT LOOKUP
                </span>
                <span className="text-emerald-400">[CAD VERIFIED]</span>
              </div>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between py-2 px-3 bg-zinc-950 border border-zinc-700 text-xs font-tech-mono text-zinc-300 hover:border-amber-400 transition-colors"
              >
                <span className="text-zinc-400 text-[11px]">Search by Bike Model or Part SKU...</span>
                <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
              </Link>

              {/* Machine Filter Chips */}
              <div className="pt-1 flex flex-wrap gap-1.5">
                {bikePlatforms.map((bike) => (
                  <Link
                    key={bike.name}
                    href={`/products?search=${encodeURIComponent(bike.name.split(" ")[0])}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[10px] font-tech-mono bg-zinc-950 border border-zinc-800 hover:border-amber-400/80 text-zinc-300 px-2 py-1 flex items-center gap-1 transition-colors"
                  >
                    <span>{bike.name}</span>
                    <span className="text-amber-400 text-[8px] bg-zinc-900 px-1 py-0.2">
                      {bike.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Hardware Catalog Section */}
            <div className="space-y-2">
              <div className="text-[10px] font-tech-mono uppercase tracking-widest text-zinc-500 flex items-center justify-between border-b border-zinc-800/80 pb-1">
                <span>COMPETITION HARDWARE DIRECTORY</span>
                <span className="text-amber-400">TRACK READY</span>
              </div>

              <div className="space-y-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 border transition-all ${
                        isActive
                          ? "bg-amber-400/10 border-amber-400 text-white"
                          : "bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700 text-zinc-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <div className="font-tech-mono text-xs font-bold uppercase tracking-wider text-white">
                            {link.label}
                          </div>
                          <div className="text-[10px] text-zinc-400 line-clamp-1">
                            {link.desc}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 pl-2">
                        <span className="text-[9px] font-tech-mono bg-zinc-950 border border-zinc-800 text-amber-400 px-1.5 py-0.5">
                          {link.tag}
                        </span>
                        <ChevronRight className="w-4 h-4 text-zinc-500" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Engineering Standards Card */}
            <div className="bg-zinc-900/60 border border-zinc-800 p-3 space-y-1.5 font-tech-mono">
              <div className="flex items-center gap-2 text-[11px] text-white font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>HOMOLOGATION STANDARDS</span>
              </div>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-sans">
                ECE 22.06 certified prepreg carbon shells, hydroformed titanium systems, and CNC 7075-T6 billet alloys verified for circuit competition.
              </p>
              <div className="flex flex-wrap gap-3 pt-1 text-[9px] text-emerald-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> FIM Homologated
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 100% Bolt-On Fitment
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Pan-India Air Freight
                </span>
              </div>
            </div>
          </div>

          {/* Sticky Drawer Footer */}
          <div className="p-3 bg-zinc-900 border-t border-zinc-800 shrink-0 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-tech-mono text-zinc-400">
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3 h-3 text-amber-400" />
                DEPOT: BENGALURU & DELHI
              </span>
              <span className="text-emerald-400 font-semibold">ALL ITEMS IN STOCK</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1 py-2.5 px-3 bg-zinc-950 border border-zinc-700 hover:border-amber-400 text-white font-tech-mono text-xs font-bold uppercase transition-colors"
              >
                <span>ALL PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-tech-mono text-xs font-bold uppercase transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>TRACK CART (2)</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
