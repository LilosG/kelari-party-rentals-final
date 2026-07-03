"""
City-by-city delivery/pickup accuracy pass -- AVIARA (city 8 of 9).

4 spots need fixing. Everything else in the block already discloses
delivery cost correctly.

Run from repo root: python3 scripts/fix_delivery_aviara.py
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


# 1. Aviara Community Park / Poinsettia / Alga Norte FAQ answer
FIX1_OLD = (
    "We deliver to Aviara Community Park, Poinsettia Park, Alga Norte, and "
    "private homes throughout the Aviara community. We handle delivery and "
    "pickup after your event."
)
FIX1_NEW = (
    "We deliver to Aviara Community Park, Poinsettia Park, Alga Norte, and "
    "private homes throughout the Aviara community. Delivery is available for "
    "an additional fee \u2014 or save the fee with free pickup at our Carlsbad "
    "warehouse."
)

# 2. backyard-party-rentals cityServiceContent intro
FIX2_OLD = (
    "Kelari Party Rentals delivers frame tents, Chiavari chairs, premium "
    "linens, ambient lighting, and custom d\u00e9cor to Aviara properties and "
    "handles delivery and pickup."
)
FIX2_NEW = (
    "Kelari Party Rentals delivers frame tents, Chiavari chairs, premium "
    "linens, ambient lighting, and custom d\u00e9cor to Aviara properties, with "
    "delivery available for an additional fee or free pickup at our Carlsbad "
    "warehouse."
)

# 3. graduation-party-rentals FAQ answer -- "full" claim
FIX3_OLD = (
    "Yes \u2014 Aviara's spacious lots are among our most tent-friendly delivery "
    "sites. We handle full delivery and pickup for graduation parties of any "
    "scale so the family can focus on celebrating."
)
FIX3_NEW = (
    "Yes \u2014 Aviara's spacious lots are among our most tent-friendly delivery "
    "sites. Delivery is available for an additional fee, or you can pick up "
    "free at our Carlsbad warehouse \u2014 either way, the family can focus on "
    "celebrating."
)

# 4. park-party-rentals cityServiceContent intro (Aviara Community Park)
FIX4_OLD = (
    "Kelari Party Rentals delivers tables, chairs, canopies, and d\u00e9cor to "
    "Aviara Community Park and nearby venues, handling delivery and pickup."
)
FIX4_NEW = (
    "Kelari Party Rentals delivers tables, chairs, canopies, and d\u00e9cor to "
    "Aviara Community Park and nearby venues, with delivery available for an "
    "additional fee or free pickup at our Carlsbad warehouse."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "aviara-park-faq")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "aviara-backyard-intro")
    text = replace_once(text, FIX3_OLD, FIX3_NEW, "aviara-graduation-faq")
    text = replace_once(text, FIX4_OLD, FIX4_NEW, "aviara-parkparty-intro")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 4 unqualified delivery claims in Aviara's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Vista (final city).")


if __name__ == "__main__":
    main()
