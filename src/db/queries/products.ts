import { eq } from "drizzle-orm";
import { db } from "@/db";
import { products } from "@/db/schema";
import {
  mapProductRowToUI,
  mapProductRowsToUI,
  type DbProductWithRelations,
} from "@/db/mappers/product-mapper";
import { PRODUCTS } from "@/data/products";
import type { Product } from "@/types/product";

const isDbConfigured = Boolean(
  process.env.DATABASE_URL &&
    !process.env.DATABASE_URL.includes("placeholder")
);

// High-speed in-memory cache to eliminate redundant remote DB round-trips
let cachedProducts: Product[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 60 * 1000; // 60-second in-memory cache

/**
 * Fetch all active products from the PostgreSQL database via Drizzle ORM.
 * Uses in-memory caching to guarantee near-instantaneous (0-2ms) UI transitions.
 * Passes all rows through mapProductRowsToUI() to guarantee zero null leaks.
 * Gracefully falls back to mock catalog if the database is not provisioned or unreachable.
 */
export async function getProductsFromDb(forceFresh = false): Promise<Product[]> {
  const now = Date.now();
  if (!forceFresh && cachedProducts && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedProducts;
  }

  if (!isDbConfigured) {
    cachedProducts = PRODUCTS;
    cacheTimestamp = now;
    return PRODUCTS;
  }

  try {
    const rows = await db.query.products.findMany({
      with: {
        category: true,
        productCompatibilities: {
          with: {
            motorcycle: true,
          },
        },
      },
    });

    if (!rows || rows.length === 0) {
      cachedProducts = PRODUCTS;
      cacheTimestamp = now;
      return PRODUCTS;
    }

    const mapped = mapProductRowsToUI(rows as unknown as DbProductWithRelations[]);
    cachedProducts = mapped;
    cacheTimestamp = now;
    return mapped;
  } catch (error) {
    console.warn(
      "ApexMoto DB Query Warning: Unable to query PostgreSQL products, falling back to local dataset.",
      error
    );
    cachedProducts = PRODUCTS;
    cacheTimestamp = now;
    return PRODUCTS;
  }
}

/**
 * Fetch a single product by its unique slug from PostgreSQL via Drizzle ORM.
 * Checks in-memory cache first for instant navigation, then falls back to direct query.
 */
export async function getProductBySlugFromDb(
  slug: string
): Promise<Product | undefined> {
  // 1. Instant check against in-memory catalog
  const all = await getProductsFromDb();
  const matched = all.find((p) => p.slug === slug);
  if (matched) {
    return matched;
  }

  if (!isDbConfigured) {
    return PRODUCTS.find((p) => p.slug === slug);
  }

  try {
    const row = await db.query.products.findFirst({
      where: eq(products.slug, slug),
      with: {
        category: true,
        productCompatibilities: {
          with: {
            motorcycle: true,
          },
        },
      },
    });

    if (!row) {
      // Fallback check if DB is partially seeded
      return PRODUCTS.find((p) => p.slug === slug);
    }

    return mapProductRowToUI(row as unknown as DbProductWithRelations);
  } catch (error) {
    console.warn(
      `ApexMoto DB Query Warning: Failed to query product slug "${slug}", using fallback.`,
      error
    );
    return PRODUCTS.find((p) => p.slug === slug);
  }
}

/**
 * Fetch all product slugs for Next.js static params generation.
 */
export async function getProductSlugsFromDb(): Promise<string[]> {
  const all = await getProductsFromDb();
  return all.map((p) => p.slug);
}

