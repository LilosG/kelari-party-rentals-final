"""
City-by-city delivery/pickup accuracy pass -- CARLSBAD (city 1 of 9).

Most of Carlsbad's block already discloses delivery cost correctly
("priced by distance", "quoted upfront", "complimentary warehouse
pickup"). This fixes the 3 remaining spots that state or imply delivery
is simply included, with no cost signal.

Run from repo root: python3 scripts/fix_delivery_carlsbad.py
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


# 1. Park delivery FAQ answer
FIX1_OLD = (
    "Absolutely. We regularly deliver to Poinsettia Park, Alga Norte, Holiday Park, "
    "Stagecoach Park, and other Carlsbad parks. We handle delivery and pickup so you "
    "can enjoy the event."
)
FIX1_NEW = (
    "Absolutely. We regularly deliver to Poinsettia Park, Alga Norte, Holiday Park, "
    "Stagecoach Park, and other Carlsbad parks. Delivery is available for an "
    "additional fee \u2014 or save the fee with free pickup at our Carlsbad warehouse."
)

# 2. party-rentals cityServiceContent intro (long paragraph, targeting middle sentence)
FIX2_OLD = (
    "We scale every package to your guest count and handle delivery and pickup so you can focus entirely on your guests."
)
FIX2_NEW = (
    "We scale every package to your guest count. Delivery is available for an "
    "additional fee, or you can pick up free at our Carlsbad warehouse."
)

# 3. backyard-party-rentals cityServiceContent intro
FIX3_OLD = (
    "Kelari Party Rentals delivers tables, chairs, tents, lighting, and d\u00e9cor to your "
    "Carlsbad home and handles delivery and pickup, so you never have to move a heavy table."
)
FIX3_NEW = (
    "Kelari Party Rentals delivers tables, chairs, tents, lighting, and d\u00e9cor to your "
    "Carlsbad home for an additional fee \u2014 so you never have to move a heavy table "
    "yourself \u2014 or you can pick up free at our Carlsbad warehouse if you'd rather "
    "handle transport on your own."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "carlsbad-park-faq")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "carlsbad-party-rentals-intro")
    text = replace_once(text, FIX3_OLD, FIX3_NEW, "carlsbad-backyard-intro")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 3 unqualified delivery claims in Carlsbad's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Encinitas.")


if __name__ == "__main__":
    main()
