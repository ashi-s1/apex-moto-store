import { getDerivedStockStatus } from "@/data/products";
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";

interface StockStatusBadgeProps {
  inventoryCount: number;
  className?: string;
  showDetails?: boolean;
}

export function StockStatusBadge({
  inventoryCount,
  className = "",
  showDetails = true,
}: StockStatusBadgeProps) {
  const stockInfo = getDerivedStockStatus(inventoryCount);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* High-Contrast Industrial Status Badge */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 border font-tech-mono text-xs uppercase tracking-wider font-semibold ${stockInfo.badgeBg} ${stockInfo.badgeBorder} ${stockInfo.badgeText}`}
      >
        {/* Pulsing or Solid Status Indicator Dot */}
        <span className="relative flex h-2 w-2">
          {stockInfo.dotPulse && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${stockInfo.dotBg}`}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${stockInfo.dotBg}`}
          />
        </span>

        {/* Status Label */}
        <span>{stockInfo.label}</span>

        {/* Micro-detail badge for Low Stock urgency */}
        {stockInfo.status === "low_stock" && (
          <span className="hidden sm:inline bg-amber-500/20 text-amber-300 px-1.5 py-0.2 text-[10px] font-bold border border-amber-500/40">
            {inventoryCount} LEFT
          </span>
        )}
      </div>

      {/* Explanatory logistics / restock message */}
      {showDetails && (
        <div className="flex items-center gap-2 text-xs font-tech-mono text-zinc-400">
          {stockInfo.status === "in_stock" && (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>{stockInfo.message}</span>
            </>
          )}

          {stockInfo.status === "low_stock" && (
            <>
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="text-amber-300 font-medium">{stockInfo.message}</span>
            </>
          )}

          {stockInfo.status === "out_of_stock" && (
            <>
              <Clock className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
              <span className="text-zinc-400">{stockInfo.message}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
