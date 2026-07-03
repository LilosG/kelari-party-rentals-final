"""
City-by-city delivery/pickup accuracy pass -- LA COSTA (city 6 of 9).

2 spots need fixing. One is the stronger false-claim pattern ("Full
delivery and pickup included") -- same category as the Oceanside fixes.

Run from repo root: python3 scripts/fix_delivery_lacosta.py
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


# 1. La Costa Canyon Park / Alga Norte / Stagecoach FAQ answer -- "included" false claim
FIX1_OLD = (
    "Absolutely. We regularly deliver to La Costa Canyon Park, Alga Norte, "
    "Stagecoach Park, and other nearby venues. Full delivery and pickup included."
)
FIX1_NEW = (
    "Absolutely. We regularly deliver to La Costa Canyon Park, Alga Norte, "
    "Stagecoach Park, and other nearby venues. Delivery is available for an "
    "additional fee \u2014 or save the fee with free pickup at our Carlsbad "
    "warehouse."
)

# 2. graduation-party-rentals FAQ answer
FIX2_OLD = (
    "Yes \u2014 La Costa properties often have space for 20\u00d720 or 20\u00d730 tents and "
    "60\u2013100+ guests. We handle full delivery and pickup so the family can focus "
    "on celebrating the graduate."
)
FIX2_NEW = (
    "Yes \u2014 La Costa properties often have space for 20\u00d720 or 20\u00d730 tents and "
    "60\u2013100+ guests. Delivery is available for an additional fee, or you can "
    "pick up free at our Carlsbad warehouse \u2014 either way, the family can focus "
    "on celebrating the graduate."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "lacosta-park-faq")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "lacosta-graduation-faq")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 2 unqualified/false delivery claims in La Costa's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Olde Carlsbad.")


if __name__ == "__main__":
    main()
