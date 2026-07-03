"""
City-by-city delivery/pickup accuracy pass -- ENCINITAS (city 2 of 9).

4 spots in Encinitas's block state or imply delivery is simply included,
with no cost signal. Everything else in the block already discloses
correctly.

Run from repo root: python3 scripts/fix_delivery_encinitas.py
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
    "Whether you're hosting a laid-back gathering in Leucadia or an elegant "
    "celebration in Olivenhain, Kelari Party Rentals brings everything you need "
    "to your door. Tables, chairs, tents, linens, and d\u00e9cor \u2014 delivered and picked up."
)
FIX1_NEW = (
    "Whether you're hosting a laid-back gathering in Leucadia or an elegant "
    "celebration in Olivenhain, Kelari Party Rentals brings everything you need "
    "to your door. Tables, chairs, tents, linens, and d\u00e9cor \u2014 delivery available "
    "for an additional fee, or free pickup at our Carlsbad warehouse."
)

# 2. Encinitas Community Park / Cottonwood Creek Park FAQ answer
FIX2_OLD = (
    "Yes \u2014 Encinitas Community Park and Cottonwood Creek Park are popular delivery "
    "locations for kids' birthdays. We handle delivery and pickup so you can focus "
    "on the birthday kid."
)
FIX2_NEW = (
    "Yes \u2014 Encinitas Community Park and Cottonwood Creek Park are popular delivery "
    "locations for kids' birthdays. Delivery is available for an additional fee \u2014 "
    "or save the fee with free pickup at our Carlsbad warehouse."
)

# 3. backyard-party-rentals cityServiceContent intro (targeting middle clause)
FIX3_OLD = (
    "we deliver and pick up so you never have to borrow a folding table from a neighbor."
)
FIX3_NEW = (
    "delivery is available for an additional fee, or you can pick up free at our "
    "Carlsbad warehouse \u2014 either way, you'll never have to borrow a folding table "
    "from a neighbor."
)

# 4. baby-shower-rentals cityServiceContent intro
FIX4_OLD = (
    "We handle delivery and pickup, and walk you through the delivery, so the host can be fully present."
)
FIX4_NEW = (
    "Delivery is available for an additional fee, or you can pick up free at our "
    "Carlsbad warehouse \u2014 either way, we'll walk you through setup so the host "
    "can be fully present."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "encinitas-city-intro")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "encinitas-park-faq")
    text = replace_once(text, FIX3_OLD, FIX3_NEW, "encinitas-backyard-intro")
    text = replace_once(text, FIX4_OLD, FIX4_NEW, "encinitas-babyshower-intro")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 4 unqualified delivery claims in Encinitas's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Oceanside.")


if __name__ == "__main__":
    main()
