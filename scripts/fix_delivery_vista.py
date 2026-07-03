"""
City-by-city delivery/pickup accuracy pass -- VISTA (city 9 of 9, FINAL).

9 spots need fixing -- the most of any city, but this completes the full
9-city pass across cities.ts. Everything else in the block already
discloses delivery cost correctly.

Run from repo root: python3 scripts/fix_delivery_vista.py
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
    "We deliver and pick up so you can enjoy every moment with your guests."
)
FIX1_NEW = (
    "Delivery is available for an additional fee, or you can pick up free at "
    "our Carlsbad warehouse \u2014 either way, you can enjoy every moment with your "
    "guests."
)

# 2. Brengle Terrace / Guajome / Vista Sports Park FAQ answer
FIX2_OLD = (
    "Absolutely. We regularly deliver to Brengle Terrace Park, Guajome "
    "Regional Park, Vista Sports Park, and other Vista parks. We handle "
    "delivery and pickup so you can enjoy the event."
)
FIX2_NEW = (
    "Absolutely. We regularly deliver to Brengle Terrace Park, Guajome "
    "Regional Park, Vista Sports Park, and other Vista parks. Delivery is "
    "available for an additional fee \u2014 or save the fee with free pickup at "
    "our Carlsbad warehouse."
)

# 3. Shadowridge delivery FAQ answer (backyard-party-rentals)
FIX3_OLD = (
    "Yes \u2014 Shadowridge is one of our most-requested Vista delivery "
    "neighborhoods. We deliver tables, chairs, tents, and d\u00e9cor and handle "
    "delivery and pickup."
)
FIX3_NEW = (
    "Yes \u2014 Shadowridge is one of our most-requested Vista delivery "
    "neighborhoods. We deliver tables, chairs, tents, and d\u00e9cor, with delivery "
    "available for an additional fee or free pickup at our Carlsbad warehouse."
)

# 4. backyard-party-rentals cityServiceContent intro
FIX4_OLD = (
    "Kelari Party Rentals delivers frame tents, tables, chairs, lighting, and "
    "d\u00e9cor to Vista homes and handles delivery and pickup."
)
FIX4_NEW = (
    "Kelari Party Rentals delivers frame tents, tables, chairs, lighting, and "
    "d\u00e9cor to Vista homes, with delivery available for an additional fee or "
    "free pickup at our Carlsbad warehouse."
)

# 5. Rancho Buena Vista FAQ answer
FIX5_OLD = (
    "Yes \u2014 Rancho Buena Vista is a frequent delivery destination. We handle "
    "delivery and pickup and are experienced with Vista's varied lot sizes."
)
FIX5_NEW = (
    "Yes \u2014 Rancho Buena Vista is a frequent delivery destination. Delivery is "
    "available for an additional fee, or you can pick up free at our Carlsbad "
    "warehouse \u2014 we're experienced with Vista's varied lot sizes either way."
)

# 6. graduation-party-rentals FAQ answer -- "full" claim
FIX6_OLD = (
    "Yes \u2014 Shadowridge and Rancho Buena Vista have large enough lots for "
    "multi-tent graduation setups. We handle full delivery and pickup so the "
    "family can enjoy the celebration."
)
FIX6_NEW = (
    "Yes \u2014 Shadowridge and Rancho Buena Vista have large enough lots for "
    "multi-tent graduation setups. Delivery is available for an additional "
    "fee, or you can pick up free at our Carlsbad warehouse \u2014 either way, the "
    "family can enjoy the celebration."
)

# 7. Brengle Terrace Park graduation FAQ answer
FIX7_OLD = (
    "Absolutely. Brengle Terrace Park is a great venue for larger Vista "
    "graduation gatherings. We coordinate with your park reservation and "
    "handle delivery and pickup."
)
FIX7_NEW = (
    "Absolutely. Brengle Terrace Park is a great venue for larger Vista "
    "graduation gatherings. We coordinate with your park reservation, and "
    "delivery is available for an additional fee or free pickup at our "
    "Carlsbad warehouse."
)

# 8. engagement-party-rentals FAQ answer
FIX8_OLD = (
    "Yes \u2014 Shadowridge is one of our most-requested Vista delivery "
    "neighborhoods for engagement parties. We handle delivery and pickup so "
    "the hosts can focus on their guests."
)
FIX8_NEW = (
    "Yes \u2014 Shadowridge is one of our most-requested Vista delivery "
    "neighborhoods for engagement parties. Delivery is available for an "
    "additional fee, or you can pick up free at our Carlsbad warehouse \u2014 "
    "either way, the hosts can focus on their guests."
)

# 9. park-party-rentals cityServiceContent intro
FIX9_OLD = (
    "Kelari Party Rentals delivers tables, chairs, canopies, and d\u00e9cor to all "
    "Vista parks and handles delivery and pickup."
)
FIX9_NEW = (
    "Kelari Party Rentals delivers tables, chairs, canopies, and d\u00e9cor to all "
    "Vista parks, with delivery available for an additional fee or free "
    "pickup at our Carlsbad warehouse."
)


def main() -> None:
    if not CITIES_TS.exists():
        die(f"{CITIES_TS} not found. Run from repo root.")

    text = CITIES_TS.read_text(encoding="utf-8")
    text = replace_once(text, FIX1_OLD, FIX1_NEW, "vista-city-intro")
    text = replace_once(text, FIX2_OLD, FIX2_NEW, "vista-parks-faq")
    text = replace_once(text, FIX3_OLD, FIX3_NEW, "vista-shadowridge-faq")
    text = replace_once(text, FIX4_OLD, FIX4_NEW, "vista-backyard-intro")
    text = replace_once(text, FIX5_OLD, FIX5_NEW, "vista-ranchobuenavista-faq")
    text = replace_once(text, FIX6_OLD, FIX6_NEW, "vista-graduation-faq")
    text = replace_once(text, FIX7_OLD, FIX7_NEW, "vista-brenglepark-faq")
    text = replace_once(text, FIX8_OLD, FIX8_NEW, "vista-engagement-faq")
    text = replace_once(text, FIX9_OLD, FIX9_NEW, "vista-parkparty-intro")
    CITIES_TS.write_text(text, encoding="utf-8")

    print("[ok] cities.ts: fixed 9 unqualified delivery claims in Vista's block")
    print("[ok] ALL 9 CITIES COMPLETE -- cities.ts delivery/pickup accuracy pass finished")
    print("\nDone. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")


if __name__ == "__main__":
    main()
