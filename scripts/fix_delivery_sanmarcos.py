"""
City-by-city delivery/pickup accuracy pass -- SAN MARCOS (city 4 of 9).

3 spots need fixing. Everything else in the block already discloses
delivery cost correctly.

Run from repo root: python3 scripts/fix_delivery_sanmarcos.py
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


# 1. birthday-party-rentals cityServiceContent intro
FIX1_OLD = (
    "Kelari Party Rentals delivers birthday party tables, chairs, canopies, and "
    "themed d\u00e9cor throughout San Marcos, handling delivery and pickup so parents "
    "can focus on the birthday kid."
)
FIX1_NEW = (
    "Kelari Party Rentals delivers birthday party tables, chairs, canopies, and "
    "themed d\u00e9cor throughout San Marcos. Delivery is available for an additional "
    "fee, or you can pick up free at our Carlsbad warehouse \u2014 either way, "
    "parents can focus on the birthday kid."
)

# 2. backyard-party-rentals cityServiceContent intro
FIX2_OLD = (
    "Kelari Party Rentals delivers tables, chairs, tents, lighting, and d\u00e9cor to "
    "San Marcos homes and handles delivery and pickup."
)
FIX2_NEW = (
    "Kelari Party Rentals delivers tables, chairs, tents, lighting, and d\u00e9cor to "
    "San Marcos homes, with delivery available for an additional fee or free "
    "pickup at our Carlsbad warehouse."
)

# 3. engagement-party-rentals FAQ answer
FIX3_OLD = (
    "Yes \u2014 string lights, round tables with floor-length linens, Chiavari chairs, "
    "and floral centerpieces are our most popular combination for San Marcos "
    "engagement parties. We handle delivery and pickup after your event."
)
FIX3_NEW = (
    "Yes \u2014 string lights, round tables with floor-length linens, Chiavari chairs, "
    "and floral centerpieces are our most popular combination for San Marcos "
    "engagement parties. Delivery is available for an additional fee \u2014 or save "
    "the fee with free pickup at our Carlsbad warehouse."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "sanmarcos-birthday-intro")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "sanmarcos-backyard-intro")
    text = replace_once(text, FIX3_OLD, FIX3_NEW, "sanmarcos-engagement-faq")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 3 unqualified delivery claims in San Marcos's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Bressi Ranch.")


if __name__ == "__main__":
    main()
