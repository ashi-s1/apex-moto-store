"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function SafeImage({
  src,
  alt,
  className = "",
  fallbackSrc,
}: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || "");
  const [hasError, setHasError] = useState(!src);

  // If the src prop changes externally, reset error state
  if (src && src !== currentSrc && !hasError) {
    setCurrentSrc(src);
  }

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
    return (
      <div
        className={`w-full h-full min-h-[160px] bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-amber-400 mb-2">
          <ImageOff className="w-5 h-5 opacity-80" />
        </div>
        <span className="text-[11px] font-tech-mono uppercase tracking-wider text-amber-400 font-semibold line-clamp-1">
          {alt}
        </span>
        <span className="text-[9px] font-tech-mono text-zinc-500 uppercase mt-1">
          [TELEMETRY VISUAL UNAVAILABLE]
        </span>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={className}
    />
  );
}
