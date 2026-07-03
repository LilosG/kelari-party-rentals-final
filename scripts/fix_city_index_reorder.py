"""
Completes the reorder that aborted on the last run. Only touches
src/pages/[city]/index.astro -- cities.ts and CityCategoryGrid.astro
already succeeded and are left alone.

Run from repo root: python3 scripts/fix_city_index_reorder.py
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CITY_INDEX_PAGE = ROOT / "src/pages/[city]/index.astro"


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


SWAP_OLD = (
    "  <!-- 4 \u00b7 Services \u2014 light \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n"
    "  <ServiceGrid\n"
    "    eyebrow=\"OUR SERVICES\"\n"
    "    title={`Party Rental Services in ${city.name}`}\n"
    "    subtitle={`Professional delivery available throughout ${city.name} and surrounding North County communities.`}\n"
    "    slugs={city.services}\n"
    "    citySlug={city.slug}\n"
    "    columns={4}\n"
    "    bg=\"light\"\n"
    "  />\n"
    "\n"
    "  <!-- 4b \u00b7 Products \u2014 white \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n"
    "  {city.categories.length > 0 && (\n"
    "    <CityCategoryGrid\n"
    "      eyebrow=\"SHOP BY PRODUCT\"\n"
    "      title={`Browse ${city.name} Rentals by Product`}\n"
    "      subtitle={`Tables, chairs, tents & more delivered to your ${city.name} venue.`}\n"
    "      slugs={city.categories}\n"
    "      citySlug={city.slug}\n"
    "      columns={4}\n"
    "      bg=\"white\"\n"
    "    />\n"
    "  )}"
)

SWAP_NEW = (
    "  <!-- 4 \u00b7 Products \u2014 light \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n"
    "  {city.categories.length > 0 && (\n"
    "    <CityCategoryGrid\n"
    "      eyebrow=\"SHOP BY PRODUCT\"\n"
    "      title={`Browse ${city.name} Rentals by Product`}\n"
    "      subtitle={`Tables, chairs, tents & more delivered to your ${city.name} venue.`}\n"
    "      slugs={city.categories}\n"
    "      citySlug={city.slug}\n"
    "      columns={4}\n"
    "      bg=\"light\"\n"
    "    />\n"
    "  )}\n"
    "\n"
    "  <!-- 4b \u00b7 Services \u2014 white \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n"
    "  <ServiceGrid\n"
    "    eyebrow=\"OUR SERVICES\"\n"
    "    title={`Party Rental Services in ${city.name}`}\n"
    "    subtitle={`Professional delivery available throughout ${city.name} and surrounding North County communities.`}\n"
    "    slugs={city.services}\n"
    "    citySlug={city.slug}\n"
    "    columns={4}\n"
    "    bg=\"white\"\n"
    "  />"
)


def main() -> None:
    if not CITY_INDEX_PAGE.exists():
        die(f"{CITY_INDEX_PAGE} not found. Run from repo root.")

    text = CITY_INDEX_PAGE.read_text(encoding="utf-8")
    count = text.count(SWAP_OLD)
    if count != 1:
        die(
            f"Expected exactly 1 occurrence of the anchor block, found {count}. "
            "Not making a partial edit -- paste back a fresh `sed -n '130,175p'` "
            "of the file so the anchor can be rebuilt exactly."
        )

    text = text.replace(SWAP_OLD, SWAP_NEW, 1)
    CITY_INDEX_PAGE.write_text(text, encoding="utf-8")
    print("[ok] [city]/index.astro: Products section moved above Services, bg alternation preserved")
    print("\nDone. Now run:")
    print("  npm run build")


if __name__ == "__main__":
    main()
