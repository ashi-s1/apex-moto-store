import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  real,
  boolean,
  jsonb,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import type { TechnicalSpecs, ProductImage } from "@/types/product";

// 1. Categories Table
export const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// 2. Products Table
export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  subtitle: text("subtitle").notNull().default(""),
  sku: varchar("sku", { length: 100 }).notNull().unique(), // Part SKU
  price: integer("price").notNull(), // Price in ₹ INR
  originalPrice: integer("original_price"),
  stockQuantity: integer("stock_quantity").notNull().default(0), // Integer inventory
  rating: real("rating").notNull().default(5.0),
  reviewCount: integer("review_count").notNull().default(0),
  shortDescription: text("short_description").notNull().default(""),
  fullDescription: jsonb("full_description").$type<string[]>().notNull().default([]),
  keyHighlights: jsonb("key_highlights").$type<string[]>().notNull().default([]),
  specs: jsonb("specs").$type<TechnicalSpecs>().notNull().default({} as TechnicalSpecs),
  images: jsonb("images").$type<ProductImage[]>().notNull().default([]),
  boxContents: jsonb("box_contents").$type<string[]>().notNull().default([]),
  trackApproved: boolean("track_approved").notNull().default(true),
  homologationCode: varchar("homologation_code", { length: 100 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// 3. Motorcycles Table
export const motorcycles = pgTable("motorcycles", {
  id: uuid("id").defaultRandom().primaryKey(),
  brand: varchar("brand", { length: 100 }).notNull(), // e.g. "Yamaha", "KTM", "Ducati"
  model: varchar("model", { length: 150 }).notNull(), // e.g. "YZF-R1 / R1M", "RC 390"
  year: varchar("year", { length: 50 }).notNull(), // e.g. "2018 - 2026"
  displacementCc: integer("displacement_cc"),
  category: varchar("category", { length: 50 }), // e.g. "Supersport", "Naked", "Cafe Racer"
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

// 4. Product Compatibility Join Table (Many-to-Many between products and motorcycles)
export const productCompatibility = pgTable(
  "product_compatibility",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    motorcycleId: uuid("motorcycle_id")
      .notNull()
      .references(() => motorcycles.id, { onDelete: "cascade" }),
    fitmentNotes: text("fitment_notes").notNull().default("Direct bolt-on fitment"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("product_motorcycle_idx").on(table.productId, table.motorcycleId),
  ]
);

// Drizzle Relations
export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  productCompatibilities: many(productCompatibility),
}));

export const motorcyclesRelations = relations(motorcycles, ({ many }) => ({
  productCompatibilities: many(productCompatibility),
}));

export const productCompatibilityRelations = relations(productCompatibility, ({ one }) => ({
  product: one(products, {
    fields: [productCompatibility.productId],
    references: [products.id],
  }),
  motorcycle: one(motorcycles, {
    fields: [productCompatibility.motorcycleId],
    references: [motorcycles.id],
  }),
}));
