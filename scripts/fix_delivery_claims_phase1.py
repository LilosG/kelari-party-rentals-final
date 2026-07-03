"""
Phase 1 of the delivery/pickup accuracy fix -- corrects the two places on
the site that flatly claim delivery is FREE, which it is not. Delivery is
available for an additional fee (priced by distance); warehouse pickup at
the Carlsbad location is the free option.

Does NOT touch cities.ts -- that file has ~30 instances of a softer but
still misleading pattern ("we deliver and pick up" with no cost signal)
that need individual sentence-level review, not a blind find/replace.
That is a separate, tracked follow-up pass.

Run from repo root: python3 scripts/fix_delivery_claims_phase1.py
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX_PAGE = ROOT / "src/pages/index.astro"
CATEGORIES_TS = ROOT / "src/data/categories.ts"


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
# 1. index.astro -- homepage CityCards subtitle claims free delivery
# ─────────────────────────────────────────────────────────────────────────

INDEX_OLD = 'subtitle="We deliver to every neighborhood across our four core cities \u2014 with free delivery always included."'
INDEX_NEW = 'subtitle="We deliver to every neighborhood across our four core cities \u2014 delivery available for an additional fee, or free pickup at our Carlsbad warehouse."'


def patch_index_page() -> None:
    text = replace_once(INDEX_PAGE, INDEX_OLD, INDEX_NEW, "index-free-delivery")
    INDEX_PAGE.write_text(text, encoding="utf-8")
    print("[ok] index.astro: removed false 'free delivery always included' claim")


# ─────────────────────────────────────────────────────────────────────────
# 2. categories.ts -- linens category meta description claims free
#    delivery and pickup
# ─────────────────────────────────────────────────────────────────────────

CATEGORIES_OLD = "Tablecloths in dozens of colors delivered to {city}. Freshly laundered and pressed, with free delivery and pickup."
CATEGORIES_NEW = "Tablecloths in dozens of colors delivered to {city}. Freshly laundered and pressed, with delivery available for an additional fee or free pickup at our Carlsbad warehouse."


def patch_categories_ts() -> None:
    text = replace_once(CATEGORIES_TS, CATEGORIES_OLD, CATEGORIES_NEW, "categories-free-delivery")
    CATEGORIES_TS.write_text(text, encoding="utf-8")
    print("[ok] categories.ts: removed false 'free delivery and pickup' claim on linens meta description")


def main() -> None:
    for p in [INDEX_PAGE, CATEGORIES_TS]:
        if not p.exists():
            die(f"Expected file not found: {p}. Run from repo root.")

    patch_index_page()
    patch_categories_ts()

    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), no routes changed -- copy-only fix.")
    print("\nNext (separate task): city-by-city pass on cities.ts to replace the")
    print("~30 unqualified 'we deliver and pick up' / 'handle delivery and pickup'")
    print("phrases with cost-disclosed language, approved wording:")
    print('  Narrative: "Delivery is available for an additional fee, or you can')
    print('  pick up free at our Carlsbad warehouse."')
    print('  FAQ/venue-specific: "Delivery to [venue] is available for an additional')
    print('  fee -- or save the fee with free pickup at our Carlsbad warehouse."')


if __name__ == "__main__":
    main()
