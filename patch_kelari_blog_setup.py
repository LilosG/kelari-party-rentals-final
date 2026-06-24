#!/usr/bin/env python3
"""
patch_kelari_blog_setup.py
Run from the repo root:  python3 patch_kelari_blog_setup.py
Fixes Kelari-specific setup messaging in the Encinitas wedding tent blog post
and the shared BlogLayout.astro sidebar CTA and service registry.
"""

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent

changes = [

    # ── src/content/blog/backyard-wedding-tent-rental-cost-encinitas-pricing-guide.mdx ──

    # 1 · Frontmatter description — remove "setup costs" as a Kelari offering
    (
        "src/content/blog/backyard-wedding-tent-rental-cost-encinitas-pricing-guide.mdx",
        'description: "Real pricing for wedding tent rentals in Encinitas. Compare sizes, add-ons, delivery, and setup costs with transparent estimates from Kelari."',
        'description: "Real pricing for wedding tent rentals in Encinitas. Compare sizes, add-ons, and delivery costs with transparent estimates from Kelari."',
    ),

    # 2 · FAQ answer 1 — "We provide" follows setup fee claim, ties it to Kelari
    (
        "src/content/blog/backyard-wedding-tent-rental-cost-encinitas-pricing-guide.mdx",
        'answer: "Tent rental costs in Encinitas typically range from $800 to $3,500+ depending on size, duration, and add-ons like sidewalls or lighting. A 20x40 tent for a weekend runs $1,200–$1,800. Delivery and setup fees add $300–$600. We provide transparent quotes with no hidden charges."',
        'answer: "Tent rental costs in Encinitas typically range from $800 to $3,500+ depending on size, duration, and add-ons like sidewalls or lighting. A 20x40 tent for a weekend runs $1,200–$1,800. Delivery fees typically add $300–$600 depending on distance and vendor. We provide transparent quotes with no hidden charges."',
    ),

    # 3 · Body closing — "Our team has set up tents"
    (
        "src/content/blog/backyard-wedding-tent-rental-cost-encinitas-pricing-guide.mdx",
        "Our team has set up tents in backyards from Olde Carlsbad to Aviara, and we know the quirks of every neighborhood—coastal wind patterns, typical soil conditions, parking realities.",
        "Our team has delivered tents to backyards from Olde Carlsbad to Aviara, and we know the quirks of every neighborhood—coastal wind patterns, typical soil conditions, parking realities.",
    ),

    # ── src/layouts/BlogLayout.astro ─────────────────────────────────────────

    # 4 · Sidebar CTA — "We deliver, set up, and pick up"
    (
        "src/layouts/BlogLayout.astro",
        "<p class=\"text-sm text-neutral-500 mb-4\">We deliver, set up, and pick up across North County San Diego.</p>",
        "<p class=\"text-sm text-neutral-500 mb-4\">We deliver and pick up across North County San Diego.</p>",
    ),

    # 5 · SERVICE_REGISTRY graduation shortDesc
    (
        "src/layouts/BlogLayout.astro",
        '{ slug: "graduation-party-rentals", name: "Graduation Party Rentals", href: "/services/graduation-party-rentals/", shortDesc: "Graduation party setups with delivery, setup, and pickup included." },',
        '{ slug: "graduation-party-rentals", name: "Graduation Party Rentals", href: "/services/graduation-party-rentals/", shortDesc: "Graduation party rentals with delivery and pickup included." },',
    ),
]


def apply_changes():
    results = {"applied": [], "not_found": [], "skipped": []}

    for file_rel, find, replace in changes:
        path = REPO_ROOT / file_rel
        if not path.exists():
            print(f"  ✗  FILE NOT FOUND: {file_rel}")
            results["not_found"].append(file_rel)
            continue

        text = path.read_text(encoding="utf-8")

        if find not in text:
            if replace in text:
                print(f"  ↩  Already patched — skipping: {file_rel}")
                results["skipped"].append(file_rel)
            else:
                print(f"  ✗  String not found in {file_rel}:")
                print(f"       → {find[:80]}...")
                results["not_found"].append(file_rel)
            continue

        patched = text.replace(find, replace, 1)
        path.write_text(patched, encoding="utf-8")
        label = find[:70].replace("\n", " ") + ("..." if len(find) > 70 else "")
        print(f"  ✓  {file_rel}  →  {label}")
        results["applied"].append(file_rel)

    print()
    print("─" * 60)
    print(f"  Applied:          {len(results['applied'])}")
    print(f"  Already patched:  {len(results['skipped'])}")
    print(f"  Not found:        {len(results['not_found'])}")
    print("─" * 60)

    if results["not_found"]:
        print("\n  ⚠  Strings not located — review manually:")
        for f in results["not_found"]:
            print(f"     {f}")
        sys.exit(1)


if __name__ == "__main__":
    print("\nKelari — Blog Setup Copy Patch\n")
    apply_changes()
    print()
