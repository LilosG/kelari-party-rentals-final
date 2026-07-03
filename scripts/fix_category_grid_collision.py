"""
Fixes the CategoryGrid.astro collision from the previous script run.

Root cause: CategoryGrid.astro already existed (used by rentals/index.astro
and the homepage, with a `categories` prop and comingSoon support). The
prior script assumed the filename was free and overwrote it with an
incompatible shape. This script:

  1. Restores the original CategoryGrid.astro via `git checkout` (exact,
     no reconstruction from diff — avoids any risk of a subtly wrong restore)
  2. Creates a new, distinctly-named component: CityCategoryGrid.astro,
     with the city-scoped `slugs`/`citySlug` logic, so it never collides
     with the original component's name or prop contract again
  3. Repoints [city]/index.astro at the new component

Run from repo root: python3 scripts/fix_category_grid_collision.py
"""

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CATEGORY_GRID = ROOT / "src/components/CategoryGrid.astro"
CITY_CATEGORY_GRID = ROOT / "src/components/CityCategoryGrid.astro"
CITY_INDEX_PAGE = ROOT / "src/pages/[city]/index.astro"


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def restore_original_category_grid() -> None:
    result = subprocess.run(
        ["git", "checkout", "--", "src/components/CategoryGrid.astro"],
        cwd=ROOT,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        die(f"git checkout failed: {result.stderr.strip()}")
    print("✓ Restored original CategoryGrid.astro via git checkout")


CITY_CATEGORY_GRID_CONTENT = '''---
// City-scoped product grid — distinct component and prop contract from
// CategoryGrid.astro (which powers the generic /rentals/ hub and homepage
// and must not be touched). This component always resolves to real,
// city-specific product URLs: /{citySlug}/{category.citySlug}/
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import heroParty from '../assets/images/hero-party.jpg';
import Section from "./Section.astro";
import SectionHeader from "./SectionHeader.astro";
import { categories as allCategories } from "../data/categories";

export interface Props {
  slugs: string[];
  citySlug: string;
  columns?: 2 | 3 | 4;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bg?: "white" | "light" | "dark" | "pink-light";
  padding?: "default" | "compact" | "featured" | "none";
}

const {
  slugs,
  citySlug,
  columns = 4,
  eyebrow,
  title,
  subtitle,
  bg = "white",
  padding = "default",
} = Astro.props;

const isDark = bg === "dark";

const cards = slugs
  .map((s) => allCategories.find((c) => c.slug === s))
  .filter((c): c is (typeof allCategories)[0] => Boolean(c) && !c.hidden)
  .map((c) => ({
    icon: c.icon,
    name: c.name,
    description: c.subheadline,
    href: `/${citySlug}/${c.citySlug}/`,
    image: c.heroImage?.image ?? heroParty,
  }));

const colClass = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
}[columns];
---

<Section {bg} spacing={padding} width="wide">
  {(title || eyebrow) && (
    <div class="mb-12 md:mb-16">
      <SectionHeader
        {eyebrow}
        title={title ?? ""}
        {subtitle}
        dark={isDark}
        width="wide"
      />
    </div>
  )}

  <div class={`grid gap-6 md:gap-7 ${colClass}`}>
    {cards.map((card) => (
      <a
        href={card.href}
        class="group relative overflow-hidden rounded-2xl bg-white border border-neutral-100 flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
      >
        <div class="relative overflow-hidden aspect-[16/10]">
          <Image
            src={card.image}
            alt={card.name}
            widths={[400, 800]}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        </div>
        <div class="p-5 flex flex-col flex-1">
          <h3 class="font-display font-bold text-lg text-neutral-900 group-hover:text-brand-pink transition-colors">
            {card.name}
          </h3>
          <p class="text-sm mt-2 leading-relaxed text-neutral-600 flex-1 line-clamp-2">
            {card.description}
          </p>
          <span class="inline-flex items-center gap-1 text-sm font-semibold mt-4 group-hover:gap-2 transition-all duration-200 text-brand-pink">
            Learn more <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </a>
    ))}
  </div>
</Section>
'''


def create_city_category_grid() -> None:
    if CITY_CATEGORY_GRID.exists():
        die(f"{CITY_CATEGORY_GRID} already exists — aborting rather than overwriting an unknown file.")
    CITY_CATEGORY_GRID.write_text(CITY_CATEGORY_GRID_CONTENT, encoding="utf-8")
    print(f"✓ Created {CITY_CATEGORY_GRID.relative_to(ROOT)}")


def repoint_city_index_page() -> None:
    if not CITY_INDEX_PAGE.exists():
        die(f"{CITY_INDEX_PAGE} not found.")
    text = CITY_INDEX_PAGE.read_text(encoding="utf-8")

    import_old = 'import CategoryGrid from "../../components/CategoryGrid.astro";'
    import_new = 'import CityCategoryGrid from "../../components/CityCategoryGrid.astro";'
    if text.count(import_old) != 1:
        die(f"Expected exactly 1 occurrence of the CategoryGrid import in {CITY_INDEX_PAGE}, found {text.count(import_old)}. Aborting.")
    text = text.replace(import_old, import_new, 1)

    tag_old = "<CategoryGrid"
    tag_new = "<CityCategoryGrid"
    if text.count(tag_old) != 1:
        die(f"Expected exactly 1 occurrence of <CategoryGrid in {CITY_INDEX_PAGE}, found {text.count(tag_old)}. Aborting.")
    text = text.replace(tag_old, tag_new, 1)

    CITY_INDEX_PAGE.write_text(text, encoding="utf-8")
    print(f"✓ {CITY_INDEX_PAGE.relative_to(ROOT)}: repointed to CityCategoryGrid")


def main() -> None:
    restore_original_category_grid()
    create_city_category_grid()
    repoint_city_index_page()
    print("\nDone. Now run:")
    print("  git diff src/components/CategoryGrid.astro   # should show NOTHING")
    print("  npm run build")


if __name__ == "__main__":
    main()
