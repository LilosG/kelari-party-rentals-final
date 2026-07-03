"""
Hides quinceanera-rentals from ServiceGrid card layouts (used on /carlsbad/,
/encinitas/, etc. and on /services/) so the "Party Rental Services" grid
goes from 9 cards to 8 -- a clean 2x4, matching the product grid fix.

Does NOT touch:
  - Header.astro nav dropdown -- confirmed it filters only
    "delivery-setup-pickup" and does not check `hidden`, so quinceanera
    stays listed there exactly as requested.
  - /carlsbad/quinceanera-rentals/, /services/quinceanera-rentals/, or
    any other route -- the page keeps building and stays fully indexable.
    Same pattern as `decorations.hidden` in categories.ts, which is
    already proven not to remove the underlying page.

Run from repo root: python3 scripts/hide_quinceanera_from_grids.py
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SERVICES_TS = ROOT / "src/data/services.ts"
SERVICE_GRID = ROOT / "src/components/ServiceGrid.astro"


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def replace_once(path: Path, old: str, new: str, label: str) -> str:
    text = path.read_text(encoding="utf-8")
    count = text.count(old)
    if count == 0:
        die(f"[{label}] anchor not found in {path}. Aborting.")
    if count > 1:
        die(f"[{label}] anchor found {count} times in {path} -- expected exactly 1. Aborting.")
    return text.replace(old, new, 1)


# ─────────────────────────────────────────────────────────────────────────
# 1. services.ts -- add hidden?: boolean to Service type, set it on
#    quinceanera-rentals
# ─────────────────────────────────────────────────────────────────────────

TYPE_OLD = """  icon: string;
  heroImage?: HeroImageConfig;
  whatsIncluded: ServiceIncludedItem[];
  faqs: ServiceFAQ[];
}"""

TYPE_NEW = """  icon: string;
  heroImage?: HeroImageConfig;
  whatsIncluded: ServiceIncludedItem[];
  faqs: ServiceFAQ[];
  /** Excludes this service from ServiceGrid card layouts. The page itself
   *  (/services/{slug}/, /{city}/{slug}/) is unaffected and stays fully
   *  indexable -- mirrors Category.hidden in categories.ts. */
  hidden?: boolean;
}"""

SLUG_ANCHOR_OLD = 'slug: "quinceanera-rentals",'
SLUG_ANCHOR_NEW = 'slug: "quinceanera-rentals",\n    hidden: true,'


def patch_services_ts() -> None:
    text = replace_once(SERVICES_TS, TYPE_OLD, TYPE_NEW, "service-type")
    SERVICES_TS.write_text(text, encoding="utf-8")

    text = SERVICES_TS.read_text(encoding="utf-8")
    count = text.count(SLUG_ANCHOR_OLD)
    if count != 1:
        die(f"[quinceanera-slug] expected exactly 1 occurrence, found {count}. Aborting.")
    text = text.replace(SLUG_ANCHOR_OLD, SLUG_ANCHOR_NEW, 1)
    SERVICES_TS.write_text(text, encoding="utf-8")
    print("[ok] services.ts: added Service.hidden, set hidden: true on quinceanera-rentals")


# ─────────────────────────────────────────────────────────────────────────
# 2. ServiceGrid.astro -- filter hidden services out of both resolution
#    branches (explicit `slugs` list, and the "all services" default pool)
# ─────────────────────────────────────────────────────────────────────────

GRID_LOGIC_OLD = """let resolvedServices: (ServiceCard & { slug: string })[] = services
  ? services.map((s) => ({ ...s, slug: s.slug ?? s.href.split("/").filter(Boolean).pop() ?? "" }))
  : (() => {
      const pool = slugs
        ? slugs
            .map((s) => allServices.find((sv) => sv.slug === s))
            .filter((s): s is (typeof allServices)[0] => Boolean(s))
        : allServices;
      return pool.map((s) => ({
        icon: s.icon,
        name: s.shortName,
        description: s.subheadline,
        href: citySlug ? `/${citySlug}/${s.slug}/` : `/services/${s.slug}/`,
        slug: s.slug,
      }));
    })();"""

GRID_LOGIC_NEW = """let resolvedServices: (ServiceCard & { slug: string })[] = services
  ? services.map((s) => ({ ...s, slug: s.slug ?? s.href.split("/").filter(Boolean).pop() ?? "" }))
  : (() => {
      const pool = slugs
        ? slugs
            .map((s) => allServices.find((sv) => sv.slug === s))
            .filter((s): s is (typeof allServices)[0] => Boolean(s) && !s.hidden)
        : allServices.filter((s) => !s.hidden);
      return pool.map((s) => ({
        icon: s.icon,
        name: s.shortName,
        description: s.subheadline,
        href: citySlug ? `/${citySlug}/${s.slug}/` : `/services/${s.slug}/`,
        slug: s.slug,
      }));
    })();"""


def patch_service_grid() -> None:
    text = replace_once(SERVICE_GRID, GRID_LOGIC_OLD, GRID_LOGIC_NEW, "service-grid-logic")
    SERVICE_GRID.write_text(text, encoding="utf-8")
    print("[ok] ServiceGrid.astro: filters out hidden services in both the slugs-list and all-services pool")


def main() -> None:
    for p in [SERVICES_TS, SERVICE_GRID]:
        if not p.exists():
            die(f"Expected file not found: {p}. Run from repo root.")

    patch_services_ts()
    patch_service_grid()

    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175) -- no routes added or removed, only card")
    print("visibility changed. /carlsbad/ and /services/ Party Rental Services grids")
    print("should now show 8 cards (2x4) instead of 9. Confirm quinceanera-rentals")
    print("is still in the header nav dropdown and its page still builds.")


if __name__ == "__main__":
    main()
