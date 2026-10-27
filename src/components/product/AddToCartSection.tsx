"use client";

import { useState } from "react";
import { formatINR, getDerivedStockStatus } from "@/data/products";
import { StockStatusBadge } from "./StockStatusBadge";
import {
  ShoppingBag,
  Zap,
  Plus,
  Minus,
  BellRing,
  Truck,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

interface AddToCartSectionProps {
  price: number;
  originalPrice?: number;
  inventoryCount: number;
  partSku: string;
}

export function AddToCartSection({
  price,
  originalPrice,
  inventoryCount,
  partSku,
}: AddToCartSectionProps) {
  const stockInfo = getDerivedStockStatus(inventoryCount);
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [backorderNotified, setBackorderNotified] = useState(false);

  const discountAmount = originalPrice ? originalPrice - price : 0;
  const discountPercent = originalPrice
    ? Math.round((discountAmount / originalPrice) * 100)
    : 0;

  const handleIncrement = () => {
    if (quantity < inventoryCount) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const handleNotifyMe = () => {
    setBackorderNotified(true);
    setTimeout(() => setBackorderNotified(false), 4000);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 p-4 sm:p-6 shadow-2xl relative">
      {/* Top chamfer accent */}
      <div className="absolute top-0 left-0 w-8 h-1 bg-amber-400" />

      {/* Stock Status derived badge */}
      <div className="mb-4">
        <StockStatusBadge inventoryCount={inventoryCount} />
      </div>

      {/* Price in ₹ INR */}
      <div className="border-b border-zinc-800/80 pb-4 sm:pb-5 mb-4 sm:mb-5">
        <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
          <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-tech-mono">
            {formatINR(price)}
          </span>

          {originalPrice && originalPrice > price && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm text-zinc-500 line-through font-tech-mono">
                {formatINR(originalPrice)}
              </span>
              <span className="px-1.5 sm:px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 font-tech-mono text-[10px] sm:text-xs font-bold uppercase">
                SAVE {discountPercent}% ({formatINR(discountAmount)})
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2 text-[10px] sm:text-[11px] font-tech-mono text-zinc-400">
          <span className="text-zinc-300">PRICE INCL. OF ALL TAXES & GST</span>
          <span className="text-zinc-600">|</span>
          <span className="text-emerald-400">FREE EXPRESS AIR FREIGHT</span>
        </div>
      </div>

      {/* Quantity & CTA Actions */}
      {stockInfo.canAddToCart ? (
        <div className="space-y-4">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-tech-mono uppercase tracking-wider text-zinc-300">
              PURCHASE QUANTITY:
            </span>

            <div className="flex items-center border border-zinc-700 bg-zinc-900">
              <button
                type="button"
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="w-11 h-11 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 active:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="w-12 text-center font-tech-mono font-bold text-sm text-white select-none">
                {quantity}
              </span>

              <button
                type="button"
                onClick={handleIncrement}
                disabled={quantity >= inventoryCount}
                className="w-11 h-11 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 active:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Critical stock notice */}
          {stockInfo.status === "low_stock" && (
            <div className="text-[11px] font-tech-mono text-amber-400 bg-amber-950/40 border border-amber-700/50 p-2 leading-relaxed">
              ⚠ WAREHOUSE ALERT: Only {inventoryCount} units remaining. Max allocation {inventoryCount} per racer.
            </div>
          )}

          {/* Primary Action Button: Add to Cart */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-zinc-950 font-tech-mono text-xs font-extrabold uppercase tracking-wider shadow-lg transition-colors border border-amber-300"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>ADD TO TRACK CART</span>
            </button>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-white font-tech-mono text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-700 hover:border-amber-400"
            >
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>EXPRESS BUY NOW</span>
            </button>
          </div>

          {addedNotice && (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500 text-emerald-300 font-tech-mono text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{quantity}x Unit(s) [SKU: {partSku}] added to your Track Cart!</span>
            </div>
          )}
        </div>
      ) : (
        /* Out of Stock Scenario */
        <div className="space-y-4">
          <div className="p-3.5 bg-red-950/40 border border-red-700/60 font-tech-mono text-xs space-y-1">
            <div className="text-red-400 font-bold uppercase">
              CURRENT ALLOCATION DEPLETED
            </div>
            <div className="text-zinc-400 text-[11px] leading-relaxed">
              This component is currently undergoing precision machining. Register below for instant notification when restocked.
            </div>
          </div>

          <button
            type="button"
            onClick={handleNotifyMe}
            className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-amber-400 font-tech-mono text-xs font-bold uppercase tracking-wider transition-colors border border-amber-500/50 hover:border-amber-400"
          >
            <BellRing className="w-4 h-4 text-amber-400 shrink-0" />
            <span>NOTIFY ME WHEN IN STOCK</span>
          </button>

          {backorderNotified && (
            <div className="p-3 bg-amber-950/60 border border-amber-500 text-amber-300 font-tech-mono text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Notification registered! You will receive priority telemetry ping on restock.</span>
            </div>
          )}
        </div>
      )}

      {/* Trust & Guarantee points */}
      <div className="border-t border-zinc-800/80 mt-5 pt-3.5 space-y-2 text-xs font-tech-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <Truck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span>Dispatched via Blue Dart Apex Express Air Priority</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>100% Guaranteed Fitment & Apex Track Tested</span>
        </div>
      </div>

      {/* Mobile-Only Sticky Bottom Buy Bar (visible only on small screens) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-3 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[9px] font-tech-mono text-zinc-400 uppercase block">
            {stockInfo.canAddToCart ? "IN STOCK" : "DEPLETED"}
          </span>
          <span className="text-lg font-black text-white font-tech-mono">
            {formatINR(price)}
          </span>
        </div>

        {stockInfo.canAddToCart ? (
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 max-w-[200px] min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 bg-amber-400 active:bg-amber-500 text-zinc-950 font-tech-mono text-xs font-extrabold uppercase tracking-wider border border-amber-300"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>ADD TO CART</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNotifyMe}
            className="flex-1 max-w-[200px] min-h-[44px] flex items-center justify-center gap-1.5 py-2 px-3 bg-zinc-900 border border-amber-500/60 text-amber-400 font-tech-mono text-[11px] font-bold uppercase tracking-wider"
          >
            <BellRing className="w-3.5 h-3.5 shrink-0" />
            <span>NOTIFY ME</span>
          </button>
        )}
      </div>
    </div>
  );
}
