"""
City-by-city delivery/pickup accuracy pass -- OLDE CARLSBAD (city 7 of 9).

4 spots need fixing. Everything else in the block already discloses
delivery cost correctly.

Run from repo root: python3 scripts/fix_delivery_oldecarlsbad.py
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
    "directly to your Olde Carlsbad home or venue \u2014 we handle delivery and pickup "
    "so you can focus on your guests."
)
FIX1_NEW = (
    "Kelari Party Rentals delivers tables, chairs, tents, linens, and d\u00e9cor "
    "directly to your Olde Carlsbad home or venue. Delivery is available for an "
    "additional fee, or you can pick up free at our Carlsbad warehouse \u2014 either "
    "way, you can focus on your guests."
)

# 2. Holiday Park / Hosp Grove / Pine Avenue FAQ answer
FIX2_OLD = (
    "Absolutely. We regularly deliver to Holiday Park, Hosp Grove, and Pine "
    "Avenue Park. We handle delivery and pickup \u2014 you just show up and celebrate."
)
FIX2_NEW = (
    "Absolutely. We regularly deliver to Holiday Park, Hosp Grove, and Pine "
    "Avenue Park. Delivery is available for an additional fee \u2014 or save the fee "
    "with free pickup at our Carlsbad warehouse."
)

# 3. Village area delivery FAQ answer
FIX3_OLD = (
    "Yes \u2014 the Village area is one of our most-requested Olde Carlsbad delivery "
    "destinations. We deliver tables, chairs, tents, and d\u00e9cor and handle delivery "
    "and pickup."
)
FIX3_NEW = (
    "Yes \u2014 the Village area is one of our most-requested Olde Carlsbad delivery "
    "destinations. We deliver tables, chairs, tents, and d\u00e9cor, with delivery "
    "available for an additional fee or free pickup at our Carlsbad warehouse."
)

# 4. park-party-rentals cityServiceContent intro (Holiday Park)
FIX4_OLD = (
    "Kelari Party Rentals delivers tables, chairs, canopies, and d\u00e9cor and "
    "handles delivery and pickup. Holiday Park's walkability"
)
FIX4_NEW = (
    "Kelari Party Rentals delivers tables, chairs, canopies, and d\u00e9cor, with "
    "delivery available for an additional fee or free pickup at our Carlsbad "
    "warehouse. Holiday Park's walkability"
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "oldecarlsbad-city-intro")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "oldecarlsbad-holidaypark-faq")
    text = replace_once(text, FIX3_OLD, FIX3_NEW, "oldecarlsbad-village-faq")
    text = replace_once(text, FIX4_OLD, FIX4_NEW, "oldecarlsbad-parkparty-intro")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 4 unqualified delivery claims in Olde Carlsbad's block")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Aviara.")


if __name__ == "__main__":
    main()
