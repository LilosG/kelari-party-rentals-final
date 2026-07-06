"""
Blog delivery/pickup accuracy pass -- ROUND 2 of 4.

Files: src/layouts/BlogLayout.astro (shared component -- one fix, wide reach),
best-parks-carlsbad-birthday-party.mdx,
best-parks-carlsbad-encinitas-outdoor-party.mdx,
best-party-rental-companies-carlsbad-local-guide.mdx,
best-party-rental-companies-oceanside-local-guide.mdx,
graduation-party-planning-timeline-north-county.mdx (3 instances in this one)

Run from repo root: python3 scripts/fix_blog_round2.py
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = ROOT / "src/content/blog"
LAYOUT_FILE = ROOT / "src/layouts/BlogLayout.astro"


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

    # 1. BlogLayout.astro -- shared component, single fix reaches every post
    apply_fixes(
        LAYOUT_FILE,
        [
            (
                'shortDesc: "Graduation party rentals with delivery and pickup included."',
                'shortDesc: "Graduation party rentals with delivery available for a fee, or free pickup at our Carlsbad warehouse."',
                "shortdesc-delivery-pickup-included",
            ),
        ],
    )

    # 2. best-parks-carlsbad-birthday-party.mdx
    apply_fixes(
        BLOG_DIR / "best-parks-carlsbad-birthday-party.mdx",
        [
            (
                "Yes \u2014 we deliver tables, chairs, tents, linens, and d\u00e9cor to all Carlsbad parks including Poinsettia Park, Alga Norte, Stagecoach Park, Holiday Park, and Hosp Grove. We handle delivery and pickup so you can focus on the birthday celebration.",
                "Yes \u2014 we deliver tables, chairs, tents, linens, and d\u00e9cor to all Carlsbad parks including Poinsettia Park, Alga Norte, Stagecoach Park, Holiday Park, and Hosp Grove. Delivery is available for an additional fee \u2014 or save the fee with free pickup at our Carlsbad warehouse.",
                "faq-handle-delivery-pickup",
            ),
        ],
    )

    # 3. best-parks-carlsbad-encinitas-outdoor-party.mdx
    apply_fixes(
        BLOG_DIR / "best-parks-carlsbad-encinitas-outdoor-party.mdx",
        [
            (
                "Ready to plan your park party? We deliver to all Carlsbad and Encinitas parks with delivery and pickup included.",
                "Ready to plan your park party? We deliver to all Carlsbad and Encinitas parks \u2014 delivery is available for a fee, or you can pick up free at our Carlsbad warehouse.",
                "body-delivery-pickup-included",
            ),
        ],
    )

    # 4. best-party-rental-companies-carlsbad-local-guide.mdx
    apply_fixes(
        BLOG_DIR / "best-party-rental-companies-carlsbad-local-guide.mdx",
        [
            (
                "Our team handles delivery and pickup across North County\u2014Carlsbad, Encinitas, Oceanside, and beyond\u2014with transparent pricing and no hidden fees.",
                "Delivery across North County\u2014Carlsbad, Encinitas, Oceanside, and beyond\u2014is available for an additional fee based on distance, or you can pick up free at our Carlsbad warehouse, with transparent pricing and no hidden fees either way.",
                "faq-handles-delivery-transparent-pricing",
            ),
        ],
    )

    # 5. best-party-rental-companies-oceanside-local-guide.mdx
    apply_fixes(
        BLOG_DIR / "best-party-rental-companies-oceanside-local-guide.mdx",
        [
            (
                "Get a detailed quote for your Oceanside event\u2014chairs, tables, linens, and delivery included.",
                "Get a detailed quote for your Oceanside event\u2014chairs, tables, linens, and delivery options.",
                "cta-delivery-included",
            ),
        ],
    )

    # 6. graduation-party-planning-timeline-north-county.mdx -- 3 instances
    apply_fixes(
        BLOG_DIR / "graduation-party-planning-timeline-north-county.mdx",
        [
            (
                "Kelari Party Rentals offers full graduation packages with free delivery and setup.",
                "Kelari Party Rentals offers full graduation packages with delivery available for a fee, or free pickup at our Carlsbad warehouse.",
                "faq-free-delivery-setup",
            ),
            (
                "Graduation season books out fast in North County San Diego. Lock in your date now before inventory fills \u2014 free delivery, setup, and pickup included.",
                "Graduation season books out fast in North County San Diego. Lock in your date now before inventory fills \u2014 delivery is available for a fee, or free pickup at our Carlsbad warehouse.",
                "cta-free-delivery-setup-pickup-included",
            ),
            (
                "we serve Carlsbad, Encinitas, Oceanside, San Marcos, and all surrounding communities with free delivery, setup, and pickup.",
                "we serve Carlsbad, Encinitas, Oceanside, San Marcos, and all surrounding communities with delivery available for a fee, or free pickup at our Carlsbad warehouse.",
                "body-free-delivery-setup-pickup",
            ),
        ],
    )

    print("\nRound 2 complete. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Round 3 (5 more posts).")


if __name__ == "__main__":
    main()
