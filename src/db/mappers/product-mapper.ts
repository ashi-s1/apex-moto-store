import type { InferSelectModel } from "drizzle-orm";
import type {
  categories,
  products,
  motorcycles,
  productCompatibility,
} from "@/db/schema";
import type {
  Product,
  CompatibleMotorcycle,
  TechnicalSpecs,
  ProductImage,
} from "@/types/product";

export type DbCategory = InferSelectModel<typeof categories>;
export type DbProduct = InferSelectModel<typeof products>;
export type DbMotorcycle = InferSelectModel<typeof motorcycles>;
export type DbProductCompatibility = InferSelectModel<typeof productCompatibility>;

export interface DbProductWithRelations extends DbProduct {
  category?: DbCategory | null;
  productCompatibilities?: Array<
    DbProductCompatibility & {
      motorcycle?: DbMotorcycle | null;
    }
  > | null;
}

/**
 * Maps a single database motorcycle join row to a UI-friendly CompatibleMotorcycle object.
 * Guarantees zero null values leak into React components.
 */
export function mapMotorcycleToUI(
  item: DbProductCompatibility & { motorcycle?: DbMotorcycle | null }
): CompatibleMotorcycle {
  const bike = item.motorcycle;
  return {
    make: bike?.brand?.trim() || "Universal",
    model: bike?.model?.trim() || "All Models",
    yearRange: bike?.year?.trim() || "Universal Fitment",
    fitmentNotes: item.fitmentNotes?.trim() || "Direct bolt-on fitment",
    displacementCc: bike?.displacementCc ?? undefined,
    category: (bike?.category as CompatibleMotorcycle["category"]) ?? undefined,
  };
}

/**
 * Maps raw database specs JSONB to a strictly validated TechnicalSpecs object.
 * Replaces any missing or null properties with clean defaults.
 */
export function mapSpecsToUI(
  rawSpecs: Partial<TechnicalSpecs> | null | undefined,
  fallbackSku: string
): TechnicalSpecs {
  const specs = rawSpecs ?? {};
  return {
    material: specs.material?.trim() || "Structural High-Strength Alloy",
    weight: specs.weight?.trim() || "Standard Race Spec",
    safetyRating: specs.safetyRating?.trim() || "ECE / Track Homologated",
    partSku: specs.partSku?.trim() || fallbackSku || "APX-SPEC-STD",
    finish: specs.finish?.trim() || undefined,
    torqueSpec: specs.torqueSpec?.trim() || undefined,
    closureOrMount: specs.closureOrMount?.trim() || undefined,
    certificationBody: specs.certificationBody?.trim() || undefined,
    origin: specs.origin?.trim() || undefined,
    warranty: specs.warranty?.trim() || undefined,
    extraAttributes: specs.extraAttributes ?? {},
  };
}

/**
 * Maps a raw database product row (with joined category and compatibility records)
 * to a 100% type-safe Product domain model.
 *
 * Rules:
 * - stockQuantity (DB integer) -> inventoryCount (UI)
 * - sku (DB) -> partSku (UI)
 * - category.name (DB joined) -> category (UI string)
 * - Nulls replaced with safe defaults.
 */
export function mapProductRowToUI(row: DbProductWithRelations): Product {
  const fallbackSku = row.sku?.trim() || "APX-PART-UNKNOWN";

  const images: ProductImage[] = Array.isArray(row.images)
    ? row.images.map((img, idx) => ({
        id: img?.id || `img-${idx + 1}`,
        url: img?.url || "/placeholder-product.jpg",
        alt: img?.alt || row.title || "Apex Hardware",
        label: img?.label || "Hardware View",
        isBlueprint: Boolean(img?.isBlueprint),
      }))
    : [];

  const compatibleMotorcycles: CompatibleMotorcycle[] = Array.isArray(
    row.productCompatibilities
  )
    ? row.productCompatibilities.map(mapMotorcycleToUI)
    : [];

  return {
    id: row.id,
    slug: row.slug || "",
    title: row.title || "Untitled Component",
    subtitle: row.subtitle || "",
    category: row.category?.name || "Racing Components",
    partSku: fallbackSku,
    price: Math.max(0, row.price ?? 0),
    originalPrice:
      row.originalPrice && row.originalPrice > 0
        ? row.originalPrice
        : undefined,
    inventoryCount: Math.max(0, row.stockQuantity ?? 0),
    rating: typeof row.rating === "number" ? row.rating : 5.0,
    reviewCount: Math.max(0, row.reviewCount ?? 0),
    shortDescription: row.shortDescription || "",
    fullDescription: Array.isArray(row.fullDescription)
      ? row.fullDescription.filter((p): p is string => typeof p === "string")
      : [],
    keyHighlights: Array.isArray(row.keyHighlights)
      ? row.keyHighlights.filter((h): h is string => typeof h === "string")
      : [],
    specs: mapSpecsToUI(row.specs, fallbackSku),
    compatibleMotorcycles,
    images,
    boxContents: Array.isArray(row.boxContents)
      ? row.boxContents.filter((b): b is string => typeof b === "string")
      : [],
    trackApproved: Boolean(row.trackApproved),
    homologationCode: row.homologationCode?.trim() || undefined,
  };
}

/**
 * Maps an array of database product rows to UI Product objects.
 */
export function mapProductRowsToUI(rows: DbProductWithRelations[]): Product[] {
  return rows.map(mapProductRowToUI);
}

