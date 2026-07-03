"""
City-by-city delivery/pickup accuracy pass -- OCEANSIDE (city 3 of 9).

6 spots need fixing. Two are the stronger false-claim pattern ("with
delivery and pickup included" / "full delivery and pickup included") --
same category as the Phase 1 fixes, just missed in that pass since Phase 1
only targeted index.astro and categories.ts. The other 4 are the softer
unqualified "handle delivery and pickup" pattern.

Run from repo root: python3 scripts/fix_delivery_oceanside.py
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CITIES_TS = ROOT / "src/data/cities.ts"


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count == 0:
        die(f"[{label}] anchor not found. File may have changed since this script was written. Aborting.")
    if count > 1:
        die(f"[{label}] anchor found {count} times -- expected exactly 1. Aborting.")
    return text.replace(old, new, 1)


# 1. Buddy Todd Park / Guajome / Buccaneer FAQ answer
FIX1_OLD = (
    "Absolutely. We deliver to Buddy Todd Park, Guajome Regional Park, Buccaneer "
    "Park, and other Oceanside parks. We handle delivery and pickup for you."
)
FIX1_NEW = (
    "Absolutely. We deliver to Buddy Todd Park, Guajome Regional Park, Buccaneer "
    "Park, and other Oceanside parks. Delivery is available for an additional "
    "fee \u2014 or save the fee with free pickup at our Carlsbad warehouse."
)

# 2. Canopies/tents FAQ answer
FIX2_OLD = (
    "Yes \u2014 we carry pop-up canopies and frame tents in multiple sizes, perfect for "
    "backyard parties in Oceanside. We deliver and pick up after your event."
)
FIX2_NEW = (
    "Yes \u2014 we carry pop-up canopies and frame tents in multiple sizes, perfect for "
    "backyard parties in Oceanside. Delivery is available for an additional fee "
    "\u2014 or save the fee with free pickup at our Carlsbad warehouse."
)

# 3. birthday-party-rentals intro -- "included" false claim
FIX3_OLD = (
    "Kelari Party Rentals delivers birthday party tables, chairs, tents, and "
    "d\u00e9cor throughout Oceanside with delivery and pickup included."
)
FIX3_NEW = (
    "Kelari Party Rentals delivers birthday party tables, chairs, tents, and "
    "d\u00e9cor throughout Oceanside, with delivery available for an additional "
    "fee or free pickup at our Carlsbad warehouse."
)

# 4. backyard-party-rentals intro
FIX4_OLD = (
    "Our team handles delivery and pickup so you can focus entirely on your guests. "
    "One Jeffries Ranch family hosted a surprise military homecoming"
)
FIX4_NEW = (
    "Delivery is available for an additional fee, or you can pick up free at our "
    "Carlsbad warehouse. One Jeffries Ranch family hosted a surprise military homecoming"
)

# 5. baby-shower-rentals intro
FIX5_OLD = (
    "Kelari Party Rentals delivers elegant tables, linens, centerpieces, and "
    "seating for baby showers of every size \u2014 and handles delivery and pickup "
    "so the host can focus on celebrating the mom-to-be."
)
FIX5_NEW = (
    "Kelari Party Rentals delivers elegant tables, linens, centerpieces, and "
    "seating for baby showers of every size. Delivery is available for an "
    "additional fee, or you can pick up free at our Carlsbad warehouse \u2014 "
    "either way, the host can focus on celebrating the mom-to-be."
)

# 6. park-party-rentals intro -- "included" false claim
FIX6_OLD = (
    "Kelari Party Rentals delivers tables, chairs, tents, and d\u00e9cor to all "
    "Oceanside parks \u2014 full delivery and pickup included."
)
FIX6_NEW = (
    "Kelari Party Rentals delivers tables, chairs, tents, and d\u00e9cor to all "
    "Oceanside parks, with delivery available for an additional fee or free "
    "pickup at our Carlsbad warehouse."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "oceanside-park-faq-1")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "oceanside-tents-faq")
    text = replace_once(text, FIX3_OLD, FIX3_NEW, "oceanside-birthday-intro")
    text = replace_once(text, FIX4_OLD, FIX4_NEW, "oceanside-backyard-intro")
    text = replace_once(text, FIX5_OLD, FIX5_NEW, "oceanside-babyshower-intro")
    text = replace_once(text, FIX6_OLD, FIX6_NEW, "oceanside-park-intro")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 6 unqualified/false delivery claims in Oceanside's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: San Marcos.")


if __name__ == "__main__":
    main()
