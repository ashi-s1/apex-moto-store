"use client";

import { useState, useMemo } from "react";
import { CompatibleMotorcycle } from "@/types/product";
import {
  Wrench,
  Search,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";

interface CompatibleMotorcyclesListProps {
  compatibleBikes: CompatibleMotorcycle[];
  partTitle: string;
}

export function CompatibleMotorcyclesList({
  compatibleBikes,
  partTitle,
}: CompatibleMotorcyclesListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMake, setSelectedMake] = useState<string>("ALL");

  // Interactive Fitment Checker State
  const [checkerMake, setCheckerMake] = useState<string>("");
  const [checkerModel, setCheckerModel] = useState<string>("");
  const [checkerResult, setCheckerResult] = useState<{
    tested: boolean;
    fits: boolean;
    bike?: CompatibleMotorcycle;
  } | null>(null);

  // Extract unique motorcycle makes
  const uniqueMakes = useMemo(() => {
    const makes = Array.from(new Set(compatibleBikes.map((b) => b.make)));
    return ["ALL", ...makes];
  }, [compatibleBikes]);

  // Filter bikes based on search query and make
  const filteredBikes = useMemo(() => {
    return compatibleBikes.filter((bike) => {
      const matchesMake =
        selectedMake === "ALL" ||
        bike.make.toLowerCase() === selectedMake.toLowerCase();

      const matchesSearch =
        bike.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.fitmentNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.yearRange.includes(searchQuery);

      return matchesMake && matchesSearch;
    });
  }, [compatibleBikes, selectedMake, searchQuery]);

  const handleRunCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkerMake.trim()) return;

    const found = compatibleBikes.find(
      (b) =>
        b.make.toLowerCase().includes(checkerMake.toLowerCase()) &&
        (checkerModel.trim() === "" ||
          b.model.toLowerCase().includes(checkerModel.toLowerCase()))
    );

    if (found) {
      setCheckerResult({ tested: true, fits: true, bike: found });
    } else {
      setCheckerResult({ tested: true, fits: false });
    }
  };

  return (
    <section className="bg-zinc-950 border border-zinc-800 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-zinc-900/90 px-4 sm:px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Wrench className="w-4 h-4 text-amber-400" />
          <h3 className="font-tech-mono text-sm font-bold uppercase tracking-wider text-white">
            COMPATIBLE MOTORCYCLES & FITMENT MATRIX
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-tech-mono text-zinc-400">
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {compatibleBikes.length} PLATFORMS VERIFIED
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* Interactive Fitment Verification Checker */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-4 relative">
          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />

          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-tech-mono uppercase font-bold text-amber-400 tracking-wider">
              [ QUICK FITMENT VERIFICATION TOOL ]
            </span>
            <span className="text-[11px] font-tech-mono text-zinc-500">
              CAD VERIFIED
            </span>
          </div>

          <form
            onSubmit={handleRunCheck}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div>
              <label className="block text-[10px] font-tech-mono uppercase text-zinc-400 mb-1">
                Motorcycle Make / Brand
              </label>
              <select
                value={checkerMake}
                onChange={(e) => {
                  setCheckerMake(e.target.value);
                  setCheckerResult(null);
                }}
                className="w-full bg-zinc-950 border border-zinc-700 text-base sm:text-xs font-tech-mono text-zinc-200 p-2.5 sm:p-2 focus:border-amber-400 focus:outline-none h-11 sm:h-9"
              >
                <option value="">-- SELECT MAKE --</option>
                {uniqueMakes
                  .filter((m) => m !== "ALL")
                  .map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-tech-mono uppercase text-zinc-400 mb-1">
                Model Name / Keyword
              </label>
              <input
                type="text"
                placeholder="e.g. Duke, R1, GT 650..."
                value={checkerModel}
                onChange={(e) => {
                  setCheckerModel(e.target.value);
                  setCheckerResult(null);
                }}
                className="w-full bg-zinc-950 border border-zinc-700 text-base sm:text-xs font-tech-mono text-zinc-200 p-2.5 sm:p-2 focus:border-amber-400 focus:outline-none placeholder:text-zinc-600 h-11 sm:h-9"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={!checkerMake}
                className="w-full min-h-[44px] sm:min-h-0 sm:h-9 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-950 font-tech-mono text-xs font-bold uppercase p-2 border border-amber-300 transition-colors flex items-center justify-center"
              >
                VERIFY FITMENT
              </button>
            </div>
          </form>

          {/* Fitment Result Alert */}
          {checkerResult && (
            <div
              className={`mt-4 p-3 border font-tech-mono text-xs ${
                checkerResult.fits
                  ? "bg-emerald-950/70 border-emerald-500 text-emerald-300"
                  : "bg-zinc-900 border-zinc-700 text-zinc-300"
              }`}
            >
              {checkerResult.fits ? (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      ✓ GUARANTEED FITMENT CONFIRMED
                    </span>
                    <span>
                      {checkerResult.bike?.make} {checkerResult.bike?.model} (
                      {checkerResult.bike?.yearRange}):{" "}
                      {checkerResult.bike?.fitmentNotes}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-400 block">
                      REQUIRES TECHNICAL VERIFICATION
                    </span>
                    <span>
                      Model not in primary database. May require custom bracket or different part variant. Contact Apex support for CAD chassis drawings.
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Filter bar: Make tabs & Search input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Make selection pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 sm:pb-0 text-xs font-tech-mono">
            {uniqueMakes.map((make) => (
              <button
                key={make}
                type="button"
                onClick={() => setSelectedMake(make)}
                className={`px-2.5 py-1.5 sm:py-1 uppercase tracking-wider whitespace-nowrap transition-colors border shrink-0 ${
                  selectedMake === make
                    ? "bg-amber-400 text-zinc-950 font-bold border-amber-400"
                    : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {make}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative sm:w-64">
            <Search className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-zinc-500 absolute left-3 sm:left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter bikes or years..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 pl-9 sm:pl-8 pr-3 py-2 sm:py-1.5 text-base sm:text-xs font-tech-mono text-zinc-200 focus:outline-none focus:border-amber-400 placeholder:text-zinc-600 h-11 sm:h-auto"
            />
          </div>
        </div>

        {/* Motorcycle List Cards */}
        {filteredBikes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredBikes.map((bike, idx) => (
              <div
                key={`${bike.make}-${bike.model}-${idx}`}
                className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 hover:border-zinc-700 transition-colors relative group"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <span className="text-[10px] font-tech-mono uppercase tracking-widest text-amber-400 block font-bold">
                      {bike.make}
                    </span>
                    <h4 className="text-sm font-bold text-white font-sans group-hover:text-amber-300 transition-colors">
                      {bike.model}
                    </h4>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-[10px] font-tech-mono text-zinc-300">
                      {bike.yearRange}
                    </span>
                    {bike.category && (
                      <span className="text-[9px] font-tech-mono text-zinc-500 uppercase">
                        {bike.category}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-2 text-xs text-zinc-400 border-t border-zinc-800/60 pt-2 flex items-start gap-1.5">
                  <span className="text-emerald-400 text-xs font-bold">✓</span>
                  <span className="font-sans leading-relaxed text-zinc-300">
                    {bike.fitmentNotes}
                  </span>
                </div>

                {bike.displacementCc && (
                  <div className="mt-2 text-[10px] font-tech-mono text-zinc-500 flex items-center justify-between">
                    <span>DISPLACEMENT: {bike.displacementCc} CC</span>
                    <span className="text-emerald-400/80">[DIRECT BOLT-ON]</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 border border-zinc-800 bg-zinc-900/20 text-xs font-tech-mono text-zinc-500 space-y-2">
            <div>NO MATCHING MOTORCYCLES FOUND FOR &quot;{searchQuery}&quot;</div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedMake("ALL");
              }}
              className="text-amber-400 underline hover:text-amber-300"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Fitment Guarantee Notice */}
        <div className="p-3 bg-zinc-900 border border-zinc-800 flex items-center justify-between text-xs font-tech-mono text-zinc-400 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              100% BOLT-ON FITMENT GUARANTEE: Free 14-day exchange if physical geometry differs.
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 uppercase">
            REF // FIT-SPEC-2026
          </span>
        </div>
      </div>
    </section>
  );
}
