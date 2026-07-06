"""
Blog delivery/pickup accuracy pass -- ROUND 3 of 4.

Files: graduation-party-rentals-carlsbad.mdx,
how-far-in-advance-book-party-rentals.mdx,
party-rental-checklist-north-county.mdx,
party-rental-cost-san-diego.mdx,
party-rentals-la-costa-carlsbad.mdx (4 instances in this one)

Note: party-rental-cost-san-diego.mdx's general market-cost paragraph
(line 11 in the original grep) describes typical industry pricing, not a
Kelari-specific "free" claim -- left untouched. Only its FAQ answer
(line 13) makes a claim about Kelari's own policy and needs fixing.

Run from repo root: python3 scripts/fix_blog_round3.py
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

    # 1. graduation-party-rentals-carlsbad.mdx
    apply_fixes(
        BLOG_DIR / "graduation-party-rentals-carlsbad.mdx",
        [
            (
                "Delivery is included in our quotes.",
                "Delivery is available for an additional fee based on distance, or you can pick up free at our Carlsbad warehouse.",
                "faq-delivery-included-quotes",
            ),
        ],
    )

    # 2. how-far-in-advance-book-party-rentals.mdx
    apply_fixes(
        BLOG_DIR / "how-far-in-advance-book-party-rentals.mdx",
        [
            (
                "[Request a free quote](/quote/) today and lock in your date \u2014 free delivery, setup, and pickup included with every rental.",
                "[Request a free quote](/quote/) today and lock in your date \u2014 delivery, setup, and pickup are available with every rental: delivery for a fee, or free pickup at our Carlsbad warehouse.",
                "body-free-delivery-setup-pickup-included",
            ),
        ],
    )

    # 3. party-rental-checklist-north-county.mdx
    apply_fixes(
        BLOG_DIR / "party-rental-checklist-north-county.mdx",
        [
            (
                "with free delivery, setup, and pickup on every order.",
                "with delivery available for a fee, or free pickup at our Carlsbad warehouse, on every order.",
                "body-free-delivery-setup-pickup-every-order",
            ),
        ],
    )

    # 4. party-rental-cost-san-diego.mdx -- only the FAQ answer, not the
    #    general market-cost paragraph
    apply_fixes(
        BLOG_DIR / "party-rental-cost-san-diego.mdx",
        [
            (
                "At Kelari Party Rentals, free delivery, setup, and pickup are included with every rental across North County San Diego \u2014 no hidden fees.",
                "At Kelari Party Rentals, delivery is available for an additional fee based on distance, or you can pick up free at our Carlsbad warehouse \u2014 no hidden fees either way.",
                "faq-free-delivery-setup-pickup-included",
            ),
        ],
    )

    # 5. party-rentals-la-costa-carlsbad.mdx -- 4 instances
    apply_fixes(
        BLOG_DIR / "party-rentals-la-costa-carlsbad.mdx",
        [
            (
                "Yes \u2014 Kelari Party Rentals provides free delivery, setup, and pickup throughout La Costa including La Costa Valley, La Costa Oaks, La Costa Greens, La Costa Ridge, and all surrounding neighborhoods. Our Carlsbad headquarters is just minutes away.",
                "Yes \u2014 Kelari Party Rentals delivers throughout La Costa including La Costa Valley, La Costa Oaks, La Costa Greens, La Costa Ridge, and all surrounding neighborhoods for an additional fee, or offers free pickup at our Carlsbad warehouse. Our Carlsbad headquarters is just minutes away.",
                "faq-free-delivery-setup-pickup-neighborhoods",
            ),
            (
                "We regularly deliver to La Costa Canyon Park, Alga Norte Community Park, Stagecoach Park, Poinsettia Park, and Calavera Hills Community Park. We handle delivery and pickup at every location.",
                "We regularly deliver to La Costa Canyon Park, Alga Norte Community Park, Stagecoach Park, Poinsettia Park, and Calavera Hills Community Park. Delivery is available for an additional fee at every location \u2014 or save the fee with free pickup at our Carlsbad warehouse.",
                "faq-handle-delivery-pickup-parks",
            ),
            (
                "We serve birthday parties, baby showers, graduation parties, engagement parties, backyard gatherings, park parties, and quincea\u00f1eras throughout La Costa. Every rental includes free delivery and same-day pickup.",
                "We serve birthday parties, baby showers, graduation parties, engagement parties, backyard gatherings, park parties, and quincea\u00f1eras throughout La Costa. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse with same-day pickup after your event.",
                "faq-every-rental-includes-free-delivery",
            ),
            (
                "we'll put together a custom package with free delivery and setup.",
                "we'll put together a custom package with delivery available for a fee, or free pickup at our Carlsbad warehouse.",
                "cta-free-delivery-setup",
            ),
        ],
    )

    print("\nRound 3 complete. Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("Next: Round 4 (final -- remaining posts).")


if __name__ == "__main__":
    main()
