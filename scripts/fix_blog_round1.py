"""
Blog delivery/pickup accuracy pass -- ROUND 1 of 4.

Files: backyard-graduation-party-ideas-north-county.mdx,
backyard-party-rental-cost-oceanside-pricing-guide.mdx,
backyard-party-setup-bressi-ranch-aviara.mdx,
backyard-party-tent-rental-cost-oceanside-pricing-guide.mdx,
best-baby-shower-rental-companies-carlsbad-local-guide.mdx

Every "free delivery" / "delivery included" claim in these files is
removed and replaced with the same disclosed-cost phrasing used across
cities.ts: delivery available for a fee (priced by distance), or free
pickup at the Carlsbad warehouse. Where the original text described
setup as a service action (not a price claim), that description is kept
attached to the paid-delivery option, since setup is performed by staff
who are on-site only when delivering.

Run from repo root: python3 scripts/fix_blog_round1.py
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = ROOT / "src/content/blog"


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def apply_fixes(path: Path, fixes: list[tuple[str, str, str]]) -> None:
    if not path.exists():
        die(f"File not found: {path}")
    text = path.read_text(encoding="utf-8")
    for old, new, label in fixes:
        count = text.count(old)
        if count == 0:
            die(f"[{path.name} :: {label}] anchor not found. File may have changed. Aborting -- no changes written to this file.")
        if count > 1:
            die(f"[{path.name} :: {label}] anchor found {count} times -- expected exactly 1. Aborting.")
        text = text.replace(old, new, 1)
    path.write_text(text, encoding="utf-8")
    print(f"[ok] {path.name}: {len(fixes)} fix(es) applied")


def main() -> None:
    if not BLOG_DIR.exists():
        die(f"{BLOG_DIR} not found. Run from repo root.")

    # 1. backyard-graduation-party-ideas-north-county.mdx
    apply_fixes(
        BLOG_DIR / "backyard-graduation-party-ideas-north-county.mdx",
        [
            (
                "We'll put together a complete graduation party package with free delivery, setup, and same-day pickup across North County San Diego.",
                "We'll put together a complete graduation party package with delivery, setup, and same-day pickup across North County San Diego \u2014 delivery is available for a fee, or you can pick up free at our Carlsbad warehouse.",
                "cta-free-delivery-setup-pickup",
            ),
        ],
    )

    # 2. backyard-party-rental-cost-oceanside-pricing-guide.mdx
    apply_fixes(
        BLOG_DIR / "backyard-party-rental-cost-oceanside-pricing-guide.mdx",
        [
            (
                "Delivery is included in our quotes, which saves $75\u2013$150 versus separate vendor fees.",
                "Delivery is available for an additional fee based on distance, or you can pick up free at our Carlsbad warehouse.",
                "faq-delivery-included-quotes",
            ),
            (
                "For most Oceanside backyard parties, renting through a local company with delivery included beats DIY by both cost and sanity.",
                "For most Oceanside backyard parties, renting through a local company beats DIY by both cost and sanity \u2014 especially once you factor in delivery or free warehouse pickup.",
                "body-delivery-included-beats-diy",
            ),
        ],
    )

    # 3. backyard-party-setup-bressi-ranch-aviara.mdx
    apply_fixes(
        BLOG_DIR / "backyard-party-setup-bressi-ranch-aviara.mdx",
        [
            (
                "Yes \u2014 Kelari Party Rentals provides free delivery, setup, and pickup throughout Bressi Ranch and Aviara. Our Carlsbad headquarters on El Camino Real is minutes from both communities, making us the closest full-service rental provider in the area.",
                "Yes \u2014 Kelari Party Rentals delivers throughout Bressi Ranch and Aviara for an additional fee, or offers free pickup at our Carlsbad warehouse. Our Carlsbad headquarters on El Camino Real is minutes from both communities, making us the closest full-service rental provider in the area.",
                "faq-free-delivery-setup-pickup",
            ),
        ],
    )

    # 4. backyard-party-tent-rental-cost-oceanside-pricing-guide.mdx
    apply_fixes(
        BLOG_DIR / "backyard-party-tent-rental-cost-oceanside-pricing-guide.mdx",
        [
            (
                "Kelari includes free delivery within North County, which saves you $100\u2013$200 compared to competitors.",
                "Delivery is available for an additional fee based on distance, or you can pick up free at our Carlsbad warehouse.",
                "faq-free-delivery-north-county",
            ),
            (
                "Oceanside is part of our North County service area\u2014which means **free delivery on all tent rentals**. Competitors often charge $100\u2013$200 for delivery alone. That's money back in your pocket. We handle everything from Oceanside to Encinitas, Carlsbad, San Marcos, and Vista.",
                "Oceanside is part of our North County service area, and delivery is priced by distance with the fee quoted upfront \u2014 or you can skip the fee entirely with free pickup at our Carlsbad warehouse. We handle everything from Oceanside to Encinitas, Carlsbad, San Marcos, and Vista.",
                "body-free-delivery-all-tent-rentals",
            ),
        ],
    )

    # 5. best-baby-shower-rental-companies-carlsbad-local-guide.mdx
    apply_fixes(
        BLOG_DIR / "best-baby-shower-rental-companies-carlsbad-local-guide.mdx",
        [
            (
                "Absolutely. We serve Carlsbad backyards plus nearby parks like Poinsettia Park and Alga Norte. Backyard showers are our specialty\u2014we handle delivery, setup, and breakdown so you focus on celebrating.",
                "Absolutely. We serve Carlsbad backyards plus nearby parks like Poinsettia Park and Alga Norte. Backyard showers are our specialty \u2014 delivery is available for an additional fee (our team handles setup and breakdown on-site), or you can pick up free at our Carlsbad warehouse.",
                "faq-handle-delivery-setup-breakdown",
            ),
            (
                "For [park party rentals](/services/park-party-rentals/) in Carlsbad, we handle delivery and setup early morning so your shower runs on time.",
                "For [park party rentals](/services/park-party-rentals/) in Carlsbad, delivery is available for an additional fee with early-morning setup by our team, or free pickup at our Carlsbad warehouse \u2014 either way, your shower runs on time.",
                "body-handle-delivery-setup-early-morning",
            ),
        ],
    )

    print("\nRound 1 complete. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes to blog content.")
    print("Next: Round 2 (5 more posts).")


if __name__ == "__main__":
    main()
