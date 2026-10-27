"use client";

import { useState } from "react";
import { ProductImage } from "@/types/product";
import { SafeImage } from "@/components/ui/SafeImage";

interface ProductGalleryProps {
  images: ProductImage[];
  title: string;
  category: string;
  partSku: string;
}

export function ProductGallery({
  images,
  title,
  category,
  partSku,
}: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hudOverlay, setHudOverlay] = useState(true);

  const activeImage = images[activeImageIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Primary High-Contrast Display Frame */}
      <div className="relative aspect-[4/3] w-full bg-zinc-950 border border-zinc-800 rounded-none overflow-hidden group shadow-2xl">
        {/* Subtle grid background for industrial feel */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        {/* HUD Corner Accents */}
        <div className="hud-corner-tl" />
        <div className="hud-corner-br" />

        {/* Top HUD Telemetry Ribbon */}
        <div className="absolute top-2.5 sm:top-3 inset-x-2.5 sm:inset-x-3 z-20 flex items-center justify-between text-[10px] sm:text-[11px] font-tech-mono pointer-events-none gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="bg-zinc-950/90 text-amber-400 px-1.5 sm:px-2 py-0.5 border border-zinc-700 uppercase font-semibold truncate max-w-[130px] sm:max-w-xs text-[10px] sm:text-[11px]">
              {category}
            </span>
            <span className="bg-zinc-950/80 text-zinc-400 px-2 py-0.5 border border-zinc-800 hidden sm:inline">
              SKU: {partSku}
            </span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto shrink-0">
            <button
              onClick={() => setHudOverlay(!hudOverlay)}
              type="button"
              className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-tech-mono uppercase border transition-colors ${
                hudOverlay
                  ? "bg-amber-400 text-zinc-950 border-amber-400 font-bold"
                  : "bg-zinc-900/90 text-zinc-400 border-zinc-700 hover:text-white"
              }`}
            >
              <span className="hidden xs:inline">HUD RETICLE </span>
              <span className="xs:hidden">HUD </span>
              {hudOverlay ? "[ON]" : "[OFF]"}
            </button>
          </div>
        </div>

        {/* HUD Crosshairs Overlay */}
        {hudOverlay && (
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            {/* Center target crosshair */}
            <div className="relative w-20 h-20 border border-dashed border-amber-400/25 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-amber-400/40 rounded-full" />
              <div className="absolute top-0 w-px h-3 bg-amber-400/60" />
              <div className="absolute bottom-0 w-px h-3 bg-amber-400/60" />
              <div className="absolute left-0 h-px w-3 bg-amber-400/60" />
              <div className="absolute right-0 h-px w-3 bg-amber-400/60" />
            </div>

            {/* Coordinates in corner */}
            <div className="absolute bottom-3 left-3 text-[10px] font-tech-mono text-zinc-500">
              FRAME // ANGLE: {activeImage?.label.toUpperCase() || "CAM 01"}
            </div>
            <div className="absolute bottom-3 right-3 text-[10px] font-tech-mono text-amber-400/80">
              [TRACK SPEC HOMOLOGATED]
            </div>
          </div>
        )}

        {/* Main Image */}
        {activeImage?.url ? (
          <SafeImage
            src={activeImage.url}
            alt={activeImage.alt || title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-95 contrast-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600 font-tech-mono text-xs">
            IMAGE SIGNAL PENDING
          </div>
        )}

        {/* Bottom gradient fade for contrast */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent pointer-events-none" />
      </div>

      {/* High-Contrast Angle Selectors / Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {images.map((img, index) => {
          const isActive = index === activeImageIndex;
          return (
            <button
              key={img.id || index}
              onClick={() => setActiveImageIndex(index)}
              type="button"
              className={`relative aspect-[4/3] bg-zinc-950 border text-left overflow-hidden transition-all group ${
                isActive
                  ? "border-amber-400 ring-1 ring-amber-400 shadow-lg shadow-amber-400/10"
                  : "border-zinc-800 hover:border-zinc-600 opacity-70 hover:opacity-100"
              }`}
            >
              <SafeImage
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
              />

              {/* Angle Tag on thumbnail */}
              <div
                className={`absolute inset-x-0 bottom-0 py-0.5 px-1 text-[9px] font-tech-mono uppercase tracking-wider truncate text-center ${
                  isActive
                    ? "bg-amber-400 text-zinc-950 font-bold"
                    : "bg-zinc-900/90 text-zinc-400 group-hover:text-white"
                }`}
              >
                {img.label}
              </div>

              {isActive && (
                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-amber-400" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
