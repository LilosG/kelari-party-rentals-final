"""
Blog delivery/pickup accuracy pass -- ROUND 4 of 4 (FINAL).

File: tent-vs-no-tent-backyard-party.mdx

This is the last remaining file with an unqualified/false delivery claim
from the original audit. Every other matched file was covered in
Rounds 1-3.

Run from repo root: python3 scripts/fix_blog_round4.py
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

    apply_fixes(
        BLOG_DIR / "tent-vs-no-tent-backyard-party.mdx",
        [
            (
                "We serve [Carlsbad](/carlsbad/backyard-party-rentals/), [Encinitas](/encinitas/backyard-party-rentals/), [Oceanside](/oceanside/backyard-party-rentals/), [San Marcos](/san-marcos/backyard-party-rentals/), and [Vista](/vista/backyard-party-rentals/) with free delivery, setup, and pickup on every rental.",
                "We serve [Carlsbad](/carlsbad/backyard-party-rentals/), [Encinitas](/encinitas/backyard-party-rentals/), [Oceanside](/oceanside/backyard-party-rentals/), [San Marcos](/san-marcos/backyard-party-rentals/), and [Vista](/vista/backyard-party-rentals/) \u2014 delivery is available for a fee, or you can pick up free at our Carlsbad warehouse.",
                "body-free-delivery-setup-pickup-every-rental",
            ),
        ],
    )

    print("\nRound 4 complete -- ALL BLOG POSTS DONE.")
    print("Now run:")
    print("  npm run build")
    print("\nExpect: same page count (175), copy-only changes.")
    print("\nThis closes out the full delivery/pickup accuracy pass:")
    print("  - 2 flat false-claim fixes (index.astro, categories.ts)")
    print("  - 33 corrections across all 9 cities in cities.ts")
    print("  - 26 corrections across blog posts + BlogLayout.astro (4 rounds)")


if __name__ == "__main__":
    main()
