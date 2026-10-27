export type StockState = "in_stock" | "low_stock" | "out_of_stock";

export interface DerivedStockInfo {
  status: StockState;
  label: "In Stock" | "Low Stock" | "Out of Stock";
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  dotBg: string;
  dotPulse: boolean;
  canAddToCart: boolean;
  message: string;
  urgencyText?: string;
}

export interface TechnicalSpecs {
  material: string;
  weight: string;
  safetyRating: string;
  partSku: string;
  finish?: string;
  torqueSpec?: string;
  closureOrMount?: string;
  certificationBody?: string;
  origin?: string;
  warranty?: string;
  extraAttributes?: Record<string, string>;
}

export interface CompatibleMotorcycle {
  make: string;
  model: string;
  yearRange: string;
  fitmentNotes: string;
  displacementCc?: number;
  category?: "Supersport" | "Naked" | "Cafe Racer" | "Adventure" | "Sport Tourer";
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  label: string; // e.g. "Primary View", "Track 45°", "Exploded Tech", "Mounted"
  isBlueprint?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  partSku: string;
  price: number; // in INR
  originalPrice?: number; // in INR
  inventoryCount: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullDescription: string[];
  keyHighlights: string[];
  specs: TechnicalSpecs;
  compatibleMotorcycles: CompatibleMotorcycle[];
  images: ProductImage[];
  boxContents: string[];
  trackApproved: boolean;
  homologationCode?: string;
}
