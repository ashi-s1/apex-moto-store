import { config } from "dotenv";
config({ path: ".env" });

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { PRODUCTS } from "../data/products";
import type { TechnicalSpecs, ProductImage } from "../types/product";

const connectionString = process.env.DATABASE_URL;

if (!connectionString || connectionString.includes("placeholder")) {
  console.error("Error: DATABASE_URL is not set or is still a placeholder.");
  console.error("Please configure your PostgreSQL connection string in .env before running db:seed.");
  process.exit(1);
}

const sql = neon(connectionString);
const db = drizzle(sql, { schema });

async function seed() {
  console.log("🏁 ApexMoto Database Seeding Started...");

  // 1. Seed Categories
  const categoryMap = new Map<string, string>(); // categoryName -> categoryId
  const categoryData = [
    {
      name: "Rider Gear & Protection",
      slug: "rider-gear-protection",
      description: "FIM & ECE 22.06 certified helmets, leathers, and high-velocity track protection",
    },
    {
      name: "Performance Exhausts",
      slug: "performance-exhausts",
      description: "Hydroformed titanium manifolds, decat headers, and tuned acoustic slip-ons",
    },
    {
      name: "Braking & Hydraulics",
      slug: "braking-hydraulics",
      description: "Billet 7075 CNC radial monobloc calipers, master cylinders, and braided lines",
    },
    {
      name: "Chassis & Ergonomics",
      slug: "chassis-ergonomics",
      description: "Multi-axis adjustable track rearsets, CNC clip-ons, and triple tree clamps",
    },
    {
      name: "Crash Protection",
      slug: "crash-protection",
      description: "High-velocity frame sliders, axle bobbins, engine case covers, and track abrasion guards",
    },
    {
      name: "Suspension",
      slug: "suspension",
      description: "Multi-adjustable track mono-shocks, cartridge fork kits, and precision steering dampers",
    },
    {
      name: "Drive & Gearing",
      slug: "drive-gearing",
      description: "Lightweight 520 superbike racing chains, CNC hard-anodized rear sprockets, and countershaft gears",
    },
    {
      name: "Electronics & Data Logging",
      slug: "electronics-data-logging",
      description: "GPS lap timers, quick-shifter modules, and digital dash data loggers for telemetry analysis.",
    },
  ];

  for (const cat of categoryData) {
    const [inserted] = await db
      .insert(schema.categories)
      .values(cat)
      .onConflictDoUpdate({
        target: schema.categories.name,
        set: { description: cat.description, updatedAt: new Date() },
      })
      .returning({ id: schema.categories.id });

    categoryMap.set(cat.name, inserted.id);
    console.log(`  ✓ Category: ${cat.name} (${inserted.id})`);
  }

  // 2. Seed Unique Motorcycles
  // Key: `${brand}-${model}` -> motorcycleId
  const motorcycleMap = new Map<string, string>();

  for (const prod of PRODUCTS) {
    for (const bike of prod.compatibleMotorcycles) {
      const bikeKey = `${bike.make.trim()}::${bike.model.trim()}`;
      if (!motorcycleMap.has(bikeKey)) {
        const [insertedBike] = await db
          .insert(schema.motorcycles)
          .values({
            brand: bike.make.trim(),
            model: bike.model.trim(),
            year: bike.yearRange.trim(),
            displacementCc: bike.displacementCc,
            category: bike.category,
          })
          .returning({ id: schema.motorcycles.id });

        motorcycleMap.set(bikeKey, insertedBike.id);
        console.log(`  ✓ Motorcycle: ${bike.make} ${bike.model} [${bike.yearRange}]`);
      }
    }
  }

  // 3. Seed Products & Many-to-Many Compatibility
  for (const prod of PRODUCTS) {
    const categoryId = categoryMap.get(prod.category);
    if (!categoryId) {
      console.warn(`  ! Category not found for: ${prod.category}`);
      continue;
    }

    const [insertedProd] = await db
      .insert(schema.products)
      .values({
        categoryId,
        slug: prod.slug,
        title: prod.title,
        subtitle: prod.subtitle,
        sku: prod.partSku,
        price: prod.price,
        originalPrice: prod.originalPrice,
        stockQuantity: prod.inventoryCount,
        rating: prod.rating,
        reviewCount: prod.reviewCount,
        shortDescription: prod.shortDescription,
        fullDescription: prod.fullDescription,
        keyHighlights: prod.keyHighlights,
        specs: prod.specs,
        images: prod.images,
        boxContents: prod.boxContents,
        trackApproved: prod.trackApproved,
        homologationCode: prod.homologationCode,
      })
      .onConflictDoUpdate({
        target: schema.products.slug,
        set: {
          title: prod.title,
          price: prod.price,
          stockQuantity: prod.inventoryCount,
          specs: prod.specs,
          images: prod.images,
          updatedAt: new Date(),
        },
      })
      .returning({ id: schema.products.id });

    console.log(`  ✓ Product: ${prod.title} [SKU: ${prod.partSku}] (${insertedProd.id})`);

    // 4. Seed Product Compatibility Join Table
    for (const bike of prod.compatibleMotorcycles) {
      const bikeKey = `${bike.make.trim()}::${bike.model.trim()}`;
      const motorcycleId = motorcycleMap.get(bikeKey);

      if (motorcycleId) {
        await db
          .insert(schema.productCompatibility)
          .values({
            productId: insertedProd.id,
            motorcycleId,
            fitmentNotes: bike.fitmentNotes,
          })
          .onConflictDoNothing();
      }
    }
  }

  // 4. Seed Sample Electronics & Data Logging Products
  const electronicsCatId = categoryMap.get("Electronics & Data Logging");
  if (electronicsCatId) {
    const sampleElectronics: Array<{
      categoryId: string;
      title: string;
      subtitle: string;
      slug: string;
      sku: string;
      price: number;
      originalPrice: number;
      stockQuantity: number;
      rating: number;
      reviewCount: number;
      shortDescription: string;
      fullDescription: string[];
      keyHighlights: string[];
      specs: TechnicalSpecs;
      images: ProductImage[];
      boxContents: string[];
      trackApproved: boolean;
    }> = [
      {
        categoryId: electronicsCatId,
        title: "Starlane Stealth GPS Lap Timer",
        subtitle: "High-precision 10Hz GPS receiver with automatic finish line and sector timing detection.",
        slug: "starlane-stealth-gps-lap-timer",
        sku: "ELEC-GPS-01",
        price: 34999,
        originalPrice: 38999,
        stockQuantity: 10,
        rating: 4.8,
        reviewCount: 12,
        shortDescription: "High-precision 10Hz GPS receiver with automatic finish line and sector timing detection.",
        fullDescription: [
          "High-precision 10Hz GPS receiver with automatic finish line and sector timing detection.",
          "Features an internal database of world circuits with automatic track detection upon arrival.",
          "Illuminated backlit display with real-time lap delta and best lap indicators."
        ],
        keyHighlights: [
          "10Hz GPS Engine with 1/100s Precision",
          "Automatic Finish Line Detection",
          "Backlit High-Contrast Screen"
        ],
        specs: {
          material: "Billet Aluminum & Polycarbonate Casing",
          weight: "145g",
          safetyRating: "IP67 Weatherproof",
          partSku: "ELEC-GPS-01",
          finish: "Anodized Black",
          origin: "Italy",
          warranty: "2-Year Manufacturer Warranty",
          extraAttributes: { "Refresh Rate": "10Hz GPS" }
        },
        images: [
          {
            id: "img-elec-gps-01-main",
            url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
            alt: "Starlane Stealth GPS Lap Timer",
            label: "Primary View"
          }
        ],
        boxContents: ["Lap Timer Unit", "Power Loom Cable", "Billet Handlebar Mount Bracket"],
        trackApproved: true
      },
      {
        categoryId: electronicsCatId,
        title: "Annitori Pro Quick-Shifter Module",
        subtitle: "Seamless push/pull strain gauge quick-shifter for clutchless full-throttle upshifts.",
        slug: "annitori-pro-quick-shifter-module",
        sku: "ELEC-QS-02",
        price: 24500,
        originalPrice: 27999,
        stockQuantity: 6,
        rating: 4.9,
        reviewCount: 19,
        shortDescription: "Seamless push/pull strain gauge quick-shifter for clutchless full-throttle upshifts.",
        fullDescription: [
          "Seamless push/pull strain gauge quick-shifter for clutchless full-throttle upshifts.",
          "Configurable kill times per gear range via dedicated smartphone Bluetooth app.",
          "Fully sealed digital load cell sensor resistant to vibration and wash pressure."
        ],
        keyHighlights: [
          "Dual Push & Pull Strain Gauge Sensor",
          "Bluetooth Smartphone App Calibration",
          "Millisecond Precision Ignition Cut"
        ],
        specs: {
          material: "CNC 6061-T6 Aircraft Billet",
          weight: "95g",
          safetyRating: "FIM Homologated Spec",
          partSku: "ELEC-QS-02",
          finish: "Hard Anodized Clear",
          origin: "USA",
          warranty: "2-Year Manufacturer Warranty",
          extraAttributes: { "Connectivity": "Bluetooth 5.0 Low Energy" }
        },
        images: [
          {
            id: "img-elec-qs-02-main",
            url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
            alt: "Annitori Pro Quick-Shifter Module",
            label: "Primary View"
          }
        ],
        boxContents: ["Strain Gauge Load Cell", "Shift Rod Adapter Set", "Plug-and-Play Coil Harness"],
        trackApproved: true
      },
      {
        categoryId: electronicsCatId,
        title: "AIM MXS 1.2 Race Dash Logger",
        subtitle: "Professional 5-inch TFT color display with integrated data logging and wide channels for ECU integration.",
        slug: "aim-mxs-1-2-race-dash-logger",
        sku: "ELEC-DASH-03",
        price: 189999,
        originalPrice: 209999,
        stockQuantity: 3,
        rating: 5.0,
        reviewCount: 7,
        shortDescription: "Professional 5-inch TFT color display with integrated data logging and wide channels for ECU integration.",
        fullDescription: [
          "Professional 5-inch TFT color display with integrated data logging and wide channels for ECU integration.",
          "Sample and record telemetry parameters including RPM, gear position, throttle angle, suspension travel, and brake pressures.",
          "Configurable RGB shift light arrays and customizable predictive lap timing interfaces."
        ],
        keyHighlights: [
          "High-Contrast 5.0\" TFT Color Matrix Display",
          "Over 1,000 CAN ECU Protocols Supported",
          "4GB Internal High-Speed Telemetry Memory"
        ],
        specs: {
          material: "Anodized Billet Aluminum Enclosure",
          weight: "530g",
          safetyRating: "IP65 Weather Resistant",
          partSku: "ELEC-DASH-03",
          finish: "Matte Black Anodized",
          origin: "Italy",
          warranty: "2-Year Factory Warranty",
          extraAttributes: { "Display": "5-inch TFT", "Sensors": "8 Analog Channels + CAN" }
        },
        images: [
          {
            id: "img-elec-dash-03-main",
            url: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8",
            alt: "AIM MXS 1.2 Race Dash Logger",
            label: "Primary View"
          }
        ],
        boxContents: ["AIM MXS 1.2 Display Unit", "37-Pin Motorsport Harness", "External GPS09 Module", "USB Download Cable"],
        trackApproved: true
      }
    ];

    for (const prod of sampleElectronics) {
      await db
        .insert(schema.products)
        .values(prod)
        .onConflictDoUpdate({
          target: schema.products.slug,
          set: {
            title: prod.title,
            price: prod.price,
            stockQuantity: prod.stockQuantity,
            specs: prod.specs,
            images: prod.images,
            updatedAt: new Date(),
          },
        });
      console.log(`  ✓ Sample Product: ${prod.title} [SKU: ${prod.sku}]`);
    }
  }

  console.log("✅ ApexMoto Database Seeding Completed Successfully.");
}

seed().catch((err) => {
  console.error("❌ Seeding failed with error:", err);
  process.exit(1);
});