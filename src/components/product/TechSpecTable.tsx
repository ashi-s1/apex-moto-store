"use client";

import { useState } from "react";
import { TechnicalSpecs } from "@/types/product";
import { ShieldCheck, Copy, Check, FileText, Cpu, Wrench, Layers } from "lucide-react";

interface TechSpecTableProps {
  specs: TechnicalSpecs;
  productTitle: string;
}

export function TechSpecTable({ specs, productTitle }: TechSpecTableProps) {
  const [copiedSku, setCopiedSku] = useState(false);

  const handleCopySku = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(specs.partSku);
      setCopiedSku(true);
      setTimeout(() => setCopiedSku(false), 2000);
    }
  };

  const coreRows = [
    {
      key: "PART SKU",
      label: "Component SKU",
      value: specs.partSku,
      isMonospace: true,
      highlight: true,
      icon: Cpu,
      action: (
        <button
          onClick={handleCopySku}
          type="button"
          className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-tech-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
          title="Copy Part SKU"
        >
          {copiedSku ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-amber-400" />
              <span>COPY SKU</span>
            </>
          )}
        </button>
      ),
    },
    {
      key: "SAFETY RATING",
      label: "Safety & Homologation",
      value: specs.safetyRating,
      isMonospace: false,
      highlight: true,
      icon: ShieldCheck,
      badgeText: "TRACK CERTIFIED",
    },
    {
      key: "MATERIAL",
      label: "Structural Material",
      value: specs.material,
      isMonospace: false,
      highlight: false,
      icon: Layers,
    },
    {
      key: "WEIGHT",
      label: "Component Mass / Weight",
      value: specs.weight,
      isMonospace: true,
      highlight: false,
      icon: Wrench,
    },
  ];

  const secondaryRows = [
    ...(specs.finish ? [{ key: "SURFACE FINISH", label: "Surface Treatment", value: specs.finish }] : []),
    ...(specs.torqueSpec ? [{ key: "TORQUE SPEC", label: "Fastener Torque", value: specs.torqueSpec, isMono: true }] : []),
    ...(specs.closureOrMount ? [{ key: "MOUNT / CLOSURE", label: "Mounting Architecture", value: specs.closureOrMount }] : []),
    ...(specs.certificationBody ? [{ key: "HOMOLOGATION LAB", label: "Testing Authority", value: specs.certificationBody }] : []),
    ...(specs.origin ? [{ key: "FACILITY ORIGIN", label: "Fabrication Facility", value: specs.origin }] : []),
    ...(specs.warranty ? [{ key: "WARRANTY COVERAGE", label: "Apex Guarantee", value: specs.warranty }] : []),
  ];

  return (
    <div className="w-full bg-zinc-950 border border-zinc-800 shadow-xl relative overflow-hidden">
      {/* Top HUD Header bar */}
      <div className="bg-zinc-900/90 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-amber-400 shrink-0" />
          <span className="font-tech-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white">
            TECHNICAL SPECIFICATION SHEET
          </span>
          <span className="text-zinc-600 font-tech-mono text-xs hidden xs:inline">|</span>
          <span className="font-tech-mono text-[11px] sm:text-xs text-zinc-400 hidden xs:inline">
            REV: 2026.4
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-tech-mono text-zinc-500 uppercase hidden sm:inline">
            SYSTEM ID: {specs.partSku}
          </span>
          <div className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-amber-400 font-tech-mono text-[9px] sm:text-[10px] uppercase font-semibold">
            VERIFIED SPEC
          </div>
        </div>
      </div>

      {/* Main Spec Table */}
      <div className="overflow-x-auto scrollbar-none">
        <table className="w-full text-left border-collapse min-w-[320px]">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/40 text-[10px] sm:text-[11px] font-tech-mono uppercase text-zinc-400 tracking-wider">
              <th className="py-2.5 px-3 sm:px-4 w-5/12 sm:w-1/3">Parameter</th>
              <th className="py-2.5 px-3 sm:px-4 w-7/12 sm:w-2/3">Engineering Specification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/80 text-xs font-sans">
            {/* Core Promoted Rows: SKU, Safety Rating, Material, Weight */}
            {coreRows.map((row) => (
              <tr
                key={row.key}
                className={
                  row.highlight
                    ? "bg-zinc-900/40 hover:bg-zinc-900/70 transition-colors"
                    : "hover:bg-zinc-900/20 transition-colors"
                }
              >
                <td className="py-2.5 sm:py-3 px-3 sm:px-4 align-top">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <row.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="block font-tech-mono text-[10px] sm:text-[11px] font-bold uppercase text-zinc-300 tracking-wider">
                        {row.key}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-zinc-500 hidden xs:block">
                        {row.label}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-2.5 sm:py-3 px-3 sm:px-4 align-middle">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
                    <span
                      className={`text-xs sm:text-sm ${
                        row.isMonospace
                          ? "font-tech-mono font-semibold tracking-wider text-amber-400 bg-zinc-900/80 px-1.5 sm:px-2 py-0.5 sm:py-1 border border-zinc-800"
                          : "text-zinc-100 font-medium"
                      } ${
                        row.key === "SAFETY RATING"
                          ? "text-emerald-300 font-semibold flex items-center gap-1.5 flex-wrap"
                          : ""
                      }`}
                    >
                      {row.key === "SAFETY RATING" && (
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                      )}
                      <span>{row.value}</span>
                    </span>

                    {row.action && <div className="shrink-0">{row.action}</div>}

                    {row.badgeText && (
                      <span className="text-[9px] sm:text-[10px] font-tech-mono bg-emerald-950/80 text-emerald-400 border border-emerald-600/50 px-1.5 sm:px-2 py-0.5 uppercase tracking-wider shrink-0">
                        {row.badgeText}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}

            {/* Secondary Rows */}
            {secondaryRows.map((row) => (
              <tr
                key={row.key}
                className="hover:bg-zinc-900/30 transition-colors"
              >
                <td className="py-2.5 sm:py-3 px-3 sm:px-4 align-top">
                  <span className="block font-tech-mono text-[10px] sm:text-[11px] font-semibold uppercase text-zinc-400 tracking-wider">
                    {row.key}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-500 hidden xs:block">{row.label}</span>
                </td>
                <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-zinc-300">
                  <span
                    className={
                      row.isMono
                        ? "font-tech-mono text-zinc-200 bg-zinc-900/50 px-1.5 py-0.5 border border-zinc-800 text-[11px] sm:text-xs"
                        : "text-zinc-200 text-xs"
                    }
                  >
                    {row.value}
                  </span>
                </td>
              </tr>
            ))}

            {/* Extra Attributes if available */}
            {specs.extraAttributes &&
              Object.entries(specs.extraAttributes).map(([attrKey, attrVal]) => (
                <tr
                  key={attrKey}
                  className="hover:bg-zinc-900/30 transition-colors bg-zinc-950/50"
                >
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 align-top font-tech-mono text-[10px] sm:text-[11px] uppercase text-zinc-400 tracking-wider">
                    {attrKey}
                  </td>
                  <td className="py-2.5 sm:py-3 px-3 sm:px-4 font-tech-mono text-xs text-zinc-300">
                    {attrVal}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Technical Guarantee Seal */}
      <div className="bg-zinc-900/60 p-3 border-t border-zinc-800 flex flex-wrap items-center justify-between text-[11px] font-tech-mono text-zinc-400 gap-2">
        <div className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-amber-400" />
          <span>TOLERANCES: ±0.05mm CNC DIMENSIONAL CALIBRATION</span>
        </div>
        <div className="text-zinc-500">
          DOCUMENT SPEC # APX-DOC-{specs.partSku}
        </div>
      </div>
    </div>
  );
}
