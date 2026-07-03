"""
City-by-city delivery/pickup accuracy pass -- BRESSI RANCH (city 5 of 9).

2 spots need fixing. Everything else in the block already discloses
delivery cost correctly.

Run from repo root: python3 scripts/fix_delivery_bressiranch.py
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


# 1. city.intro
FIX1_OLD = (
    "Kelari Party Rentals delivers tables, chairs, tents, linens, and d\u00e9cor "
    "right to your Bressi Ranch home \u2014 we deliver and pick up so you can enjoy "
    "every moment."
)
FIX1_NEW = (
    "Kelari Party Rentals delivers tables, chairs, tents, linens, and d\u00e9cor "
    "right to your Bressi Ranch home. Delivery is available for an additional "
    "fee, or you can pick up free at our Carlsbad warehouse \u2014 either way, you "
    "can enjoy every moment."
)

# 2. Bressi Ranch Community Park / Alga Norte / Poinsettia FAQ answer
FIX2_OLD = (
    "Absolutely. We regularly deliver to Bressi Ranch Community Park and nearby "
    "Alga Norte and Poinsettia Park. We handle delivery and pickup so you can "
    "focus on your guests."
)
FIX2_NEW = (
    "Absolutely. We regularly deliver to Bressi Ranch Community Park and nearby "
    "Alga Norte and Poinsettia Park. Delivery is available for an additional "
    "fee \u2014 or save the fee with free pickup at our Carlsbad warehouse."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "bressiranch-city-intro")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "bressiranch-park-faq")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 2 unqualified delivery claims in Bressi Ranch's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: La Costa.")


if __name__ == "__main__":
    main()
