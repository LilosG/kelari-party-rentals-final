"""
Fixes the city hub product grid (e.g. /carlsbad/):
  1. Enables marquee-letters + add-ons for the 5 primary cities -- both are
     real, live inventory (not hidden/comingSoon like decorations), so they
     get the same local-page treatment as the other 5 categories. 7 total.
  2. Adds an 8th "Browse All Rentals" tile -> clean 2x4 grid, and gives
     visitors an escape hatch to categories not yet enabled per-city
     (e.g. decorations, once it launches).
  3. Moves the product grid above the event-type services section, since
     "what do you actually rent" should come before "browse by occasion."

Run from repo root: python3 scripts/fix_city_grid_layout.py
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CITIES_TS = ROOT / "src/data/cities.ts"
CITY_CATEGORY_GRID = ROOT / "src/components/CityCategoryGrid.astro"
CITY_INDEX_PAGE = ROOT / "src/pages/[city]/index.astro"


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


OLD_CATEGORIES_LINE = '    categories: ["tables", "chairs", "tents-canopies", "linens", "table-runners"],'
NEW_CATEGORIES_LINE = '    categories: ["tables", "chairs", "tents-canopies", "linens", "table-runners", "marquee-letters", "add-ons"],'

PRIMARY_CITY_SLUGS = ["carlsbad", "encinitas", "oceanside", "san-marcos", "vista"]


def patch_cities_ts() -> None:
    text = CITIES_TS.read_text(encoding="utf-8")
    for slug in PRIMARY_CITY_SLUGS:
        anchor_old = f'slug: "{slug}",\n{OLD_CATEGORIES_LINE}'
        anchor_new = f'slug: "{slug}",\n{NEW_CATEGORIES_LINE}'
        count = text.count(anchor_old)
        if count != 1:
            die(f"[cities-categories] expected exactly 1 occurrence of the categories line for '{slug}', found {count}. Aborting.")
        text = text.replace(anchor_old, anchor_new, 1)
    CITIES_TS.write_text(text, encoding="utf-8")
    print("[ok] cities.ts: 5 primary cities now have all 7 real categories (added marquee-letters, add-ons)")


CARDS_LOGIC_OLD = """const cards = slugs
  .map((s) => allCategories.find((c) => c.slug === s))
  .filter((c): c is (typeof allCategories)[0] => Boolean(c) && !c.hidden)
  .map((c) => ({
    icon: c.icon,
    name: c.name,
    description: c.subheadline,
    href: `/${citySlug}/${c.citySlug}/`,
    image: c.heroImage?.image ?? heroParty,
  }));"""

CARDS_LOGIC_NEW = """const cards = slugs
  .map((s) => allCategories.find((c) => c.slug === s))
  .filter((c): c is (typeof allCategories)[0] => Boolean(c) && !c.hidden)
  .map((c) => ({
    icon: c.icon,
    name: c.name,
    description: c.subheadline,
    href: `/${citySlug}/${c.citySlug}/`,
    image: c.heroImage?.image ?? heroParty,
  }));

if (showBrowseAll) {
  cards.push({
    icon: "",
    name: "Browse All Rentals",
    description: "See every rental category we offer, including new arrivals.",
    href: "/rentals/",
    image: heroParty,
  });
}"""

PROPS_INTERFACE_OLD = """export interface Props {
  slugs: string[];
  citySlug: string;
  columns?: 2 | 3 | 4;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bg?: "white" | "light" | "dark" | "pink-light";
  padding?: "default" | "compact" | "featured" | "none";
}"""

PROPS_INTERFACE_NEW = """export interface Props {
  slugs: string[];
  citySlug: string;
  columns?: 2 | 3 | 4;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bg?: "white" | "light" | "dark" | "pink-light";
  padding?: "default" | "compact" | "featured" | "none";
  /** Adds a trailing "Browse All Rentals" tile linking to /rentals/.
   *  Defaults to true -- escape hatch for categories not yet enabled for
   *  this city (e.g. decorations, once live), and rounds out the grid. */
  showBrowseAll?: boolean;
}"""

PROPS_DESTRUCTURE_OLD = """const {
  slugs,
  citySlug,
  columns = 4,
  eyebrow,
  title,
  subtitle,
  bg = "white",
  padding = "default",
} = Astro.props;"""

PROPS_DESTRUCTURE_NEW = """const {
  slugs,
  citySlug,
  columns = 4,
  eyebrow,
  title,
  subtitle,
  bg = "white",
  padding = "default",
  showBrowseAll = true,
} = Astro.props;"""


def patch_city_category_grid() -> None:
    text = CITY_CATEGORY_GRID.read_text(encoding="utf-8")

    if text.count(PROPS_INTERFACE_OLD) != 1:
        die("[grid-props-interface] anchor not found or not unique. Aborting.")
    text = text.replace(PROPS_INTERFACE_OLD, PROPS_INTERFACE_NEW, 1)

    if text.count(PROPS_DESTRUCTURE_OLD) != 1:
        die("[grid-props-destructure] anchor not found or not unique. Aborting.")
    text = text.replace(PROPS_DESTRUCTURE_OLD, PROPS_DESTRUCTURE_NEW, 1)

    if text.count(CARDS_LOGIC_OLD) != 1:
        die("[grid-cards-logic] anchor not found or not unique. Aborting.")
    text = text.replace(CARDS_LOGIC_OLD, CARDS_LOGIC_NEW, 1)

    CITY_CATEGORY_GRID.write_text(text, encoding="utf-8")
    print("[ok] CityCategoryGrid.astro: added showBrowseAll prop + trailing 'Browse All Rentals' tile")


SWAP_OLD = """  <!-- 4 \u00b7 Services \u2014 light \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ServiceGrid
    eyebrow="OUR SERVICES"
    title={`Party Rental Services in ${city.name}`}
    subtitle={`Professional delivery available throughout ${city.name} and surrounding North County communities.`}
    slugs={city.services}
    citySlug={city.slug}
    columns={4}
    bg="light"
  />

  <!-- 4b \u00b7 Products \u2014 white \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  {city.categories.length > 0 && (
    <CityCategoryGrid
      eyebrow="SHOP BY PRODUCT"
      title={`Browse ${city.name} Rentals by Product`}
      subtitle={`Tables, chairs, tents & more delivered to your ${city.name} venue.`}
      slugs={city.categories}
      citySlug={city.slug}
      columns={4}
      bg="white"
    />
  )}"""

SWAP_NEW = """  <!-- 4 \u00b7 Products \u2014 light \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  {city.categories.length > 0 && (
    <CityCategoryGrid
      eyebrow="SHOP BY PRODUCT"
      title={`Browse ${city.name} Rentals by Product`}
      subtitle={`Tables, chairs, tents & more delivered to your ${city.name} venue.`}
      slugs={city.categories}
      citySlug={city.slug}
      columns={4}
      bg="light"
    />
  )}

  <!-- 4b \u00b7 Services \u2014 white \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ServiceGrid
    eyebrow="OUR SERVICES"
    title={`Party Rental Services in ${city.name}`}
    subtitle={`Professional delivery available throughout ${city.name} and surrounding North County communities.`}
    slugs={city.services}
    citySlug={city.slug}
    columns={4}
    bg="white"
  />"""


def patch_city_index_page() -> None:
    text = CITY_INDEX_PAGE.read_text(encoding="utf-8")
    if text.count(SWAP_OLD) != 1:
        die("[city-index-swap] anchor not found or not unique -- page may have changed since last edit. Aborting.")
    text = text.replace(SWAP_OLD, SWAP_NEW, 1)
    CITY_INDEX_PAGE.write_text(text, encoding="utf-8")
    print("[ok] [city]/index.astro: Products section moved above Services, bg alternation preserved")


def main() -> None:
    for p in [CITIES_TS, CITY_CATEGORY_GRID, CITY_INDEX_PAGE]:
        if not p.exists():
            die(f"Expected file not found: {p}. Run from repo root.")

    patch_cities_ts()
    patch_city_category_grid()
    patch_city_index_page()

    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: /carlsbad/marquee-letter-rentals/ and /carlsbad/party-add-on-rentals/")
    print("(and the same for encinitas, oceanside, san-marcos, vista) as new routes --")
    print("10 new pages total, 165 -> 175. Plus the reordered 8-card grid on each city hub.")


if __name__ == "__main__":
    main()
