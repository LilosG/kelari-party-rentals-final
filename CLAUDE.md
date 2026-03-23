# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kelari Party Rentals — local SEO-focused party rental website for North County San Diego (Carlsbad, Encinitas, Oceanside, San Marcos). Astro 6 + Tailwind CSS 4 + TypeScript strict. Deploys to Vercel as static site.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- `npx astro check` — Type-check all Astro and TS files

## Architecture

- **Framework**: Astro 6 (static site generation, file-based routing)
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` plugin, CSS custom properties in `src/styles/global.css`
- **TypeScript**: Strict mode, extends `astro/tsconfigs/strict`
- **Fonts**: Cormorant Garamond (headings), DM Sans (body) — loaded via Google Fonts with preconnect

### Data-Driven Architecture

All content is centralized in `src/data/` — templates never hardcode content:
- `site.ts` — NAP, brand config, design tokens, schema defaults
- `cities.ts` — 4 cities with neighborhoods, parks, FAQs, service slugs
- `services.ts` — 8 services with `{city}` token templates for meta/headlines/intros
- `categories.ts` — 7 rental categories with items

Dynamic routes read from data files: `[city].astro` reads `cities.ts`, `[service].astro` reads `services.ts`. Use `renderCityTemplate()` to fill `{city}` tokens.

### URL Architecture (flat)

- `/` `/services/` `/rentals/` `/service-area/` `/about/` `/faq/` `/contact/` `/quote/` — static pages
- `/services/[service]/` — service pillars (from `services.ts`)
- `/[city]/` — city pages (from `cities.ts`, flat at depth 1)
- `/[city]/[service]/` — city+service money pages (depth 2)
- `/rentals/[category]/` — category pages (from `categories.ts`)

### Key Conventions

- Components in `src/components/`, layouts in `src/layouts/`
- `BaseLayout.astro` wraps all pages (head, nav, footer, schema)
- Every money page includes: LocalHero, services overview, local proof, FAQAccordion, InternalCTA, QuoteForm
- Every city page includes: unique intro, neighborhoods, parks, delivery context, FAQs
- Schema markup per page type (Organization, LocalBusiness, Service, FAQPage, BreadcrumbList)
- No inline styles — Tailwind classes only
- All images require width/height attributes
- Mobile-first, no horizontal scroll at 390px

### NAP (use identically everywhere)

Kelari Party Rentals | 5674 El Camino Real Suite M-2, Carlsbad, CA 92008 | (760) 000-0000 | hello@kelaripartyrentals.com | Mon–Sun 9AM–7PM
