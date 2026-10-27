# ApexMoto — Project Instructions & Engineering Rules

## Tech Stack & Commands
- **Package Manager:** `pnpm` (Never use `npm` or `yarn`)
- **Framework:** Next.js (App Router) with TypeScript
- **Database:** PostgreSQL (Neon) + Drizzle ORM (`src/db/schema`)
- **Commands:**
  - `pnpm dev` — Start development server
  - `pnpm build` — Production build verification
  - `pnpm typecheck` — Run `tsc --noEmit` before completing any multi-file task

## Architecture & Data Rules
1. **No Raw Database Rows in UI:** All Drizzle queries must pass through a mapper function in `src/db/mappers/` before reaching UI components. Never expose raw foreign keys or database `null` values directly to React components.
2. **Derived Stock & Fitment State:** Never hardcode `"Sold Out"` or `"Fits Bike"` strings in the database. Derive stock availability (`in_stock`, `low_stock`, `out_of_stock`) from integer `stock_quantity` and universal vs. bike-specific compatibility flags.
3. **Database Queries:** Use Drizzle ORM query builder for all database access. Do not write raw SQL unless explicitly instructed.

## Security Guardrails
1. **Forms & Mutations:** Never create HTML `<form>` tags without an explicit `method="POST"` or a bound Next.js Server Action to prevent sensitive input leaking into URL query parameters.
2. **Server-Side Authorization:** Hiding UI links is not authorization. Every `/admin` route and server action must independently verify the user's session and admin role on the server.
3. **Secrets:** Never read, log, or hardcode values from `.env` or `.env.local`. Always validate that `BETTER_AUTH_SECRET` is at least 32 characters of high-entropy randomness on startup.

## UI & Design System (Industrial Moto Aesthetic)
- **Theme:** High-contrast dark-mode industrial aesthetic (`#0D0D0F` carbon background, `#18181C` gunmetal cards, `#FF5500` safety orange primary accent, crisp off-white typography).
- **Typography:** Bold geometric headings paired with monospace fonts for SKU numbers, part specs, Price (in ₹ INR), and safety certifications (`ECE 22.06`, `DOT`).
- **No Generic AI Styling:** Avoid purple/blue neon gradients or generic SaaS dashboard cards. Keep layouts sharp, structured, and technical.
-