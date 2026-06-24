#!/usr/bin/env python3
"""
patch_kelari_setup_copy_2.py
Run from the repo root:  python3 patch_kelari_setup_copy_2.py
Fixes remaining setup-service implications in cities.ts and page files.
"""

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent


# ── Exact-string replacements ─────────────────────────────────────────────────

exact_changes = [

    # ── src/data/cities.ts — all "walk you through setup" variants ───────────

    (
        "src/data/cities.ts",
        "walk you through setup so the hosts can get back to their guests quickly.",
        "walk you through the delivery so the hosts can get back to their guests quickly.",
    ),
    (
        "src/data/cities.ts",
        "walk you through setup, so the host can be fully present.",
        "walk you through the delivery, so the host can be fully present.",
    ),
    (
        "src/data/cities.ts",
        # line 457
        "walk you through setup so the host has everything she needs.",
        "walk you through the delivery so the host has everything she needs.",
    ),
    (
        "src/data/cities.ts",
        "walk you through setup before the shower begins.",
        "walk you through the delivery before the shower begins.",
    ),
    (
        "src/data/cities.ts",
        "walk you through setup, and return for pickup after your event.",
        "walk you through the delivery, and return for pickup after your event.",
    ),
    (
        "src/data/cities.ts",
        "walk you through setup before your guests arrive.",
        "walk you through the delivery before your guests arrive.",
    ),
    (
        "src/data/cities.ts",
        "walk you through setup before guests arrive, making the morning stress-free for the host.",
        "walk you through the delivery before guests arrive, making the morning stress-free for the host.",
    ),
    (
        "src/data/cities.ts",
        # line 1504 — same as 457, second occurrence
        "walk you through setup so the host has everything she needs.",
        "walk you through the delivery so the host has everything she needs.",
    ),
    (
        "src/data/cities.ts",
        "walk you through setup before the guests arrive.",
        "walk you through the delivery before the guests arrive.",
    ),
    (
        "src/data/cities.ts",
        "walk you through setup before the first guest arrives.",
        "walk you through the delivery before the first guest arrives.",
    ),
    (
        "src/data/cities.ts",
        # line 2289 — same as 984
        "walk you through setup before guests arrive.",
        "walk you through the delivery before guests arrive.",
    ),

    # ── src/data/categories.ts — add-ons "set up at your venue" ─────────────
    # These say "for you to set up" (customer does it) but still imply the
    # word setup in a service context — clean them up.

    (
        "src/data/categories.ts",
        "Every add-on arrives clean and ready for you to set up at your venue, and is picked up after your event.",
        "Every add-on arrives clean and ready for you to place and assemble at your venue, and is picked up after your event.",
    ),
    (
        "src/data/categories.ts",
        '"Yes — all add-on stands, frames, and covers are delivered clean and ready for you to set up at your venue. The rod stands and column kits use clamps and bases designed for quick assembly without tools.",',
        '"Yes — all add-on stands, frames, and covers are delivered clean and ready for you to assemble at your venue. The rod stands and column kits use clamps and bases designed for quick assembly without tools.",',
    ),

    # ── src/pages/[city]/index.astro ─────────────────────────────────────────

    (
        "src/pages/[city]/index.astro",
        'eyebrow="RECENT SETUPS"',
        'eyebrow="RECENT DELIVERIES"',
    ),

    # ── src/pages/[city]/[service].astro ─────────────────────────────────────

    (
        "src/pages/[city]/[service].astro",
        'eyebrow="RECENT SETUPS"',
        'eyebrow="RECENT DELIVERIES"',
    ),

    # ── src/pages/services/index.astro ───────────────────────────────────────

    (
        "src/pages/services/index.astro",
        'eyebrow="RECENT SETUPS"',
        'eyebrow="RECENT DELIVERIES"',
    ),
    (
        "src/pages/services/index.astro",
        'title="Real Setups, Real Celebrations"',
        'title="Real Events, Real Celebrations"',
    ),

    # ── src/pages/services/[service].astro ───────────────────────────────────

    (
        "src/pages/services/[service].astro",
        'eyebrow="RECENT SETUPS"',
        'eyebrow="RECENT DELIVERIES"',
    ),
]


def apply_exact_changes():
    results = {"applied": [], "not_found": [], "skipped": []}

    for file_rel, find, replace in exact_changes:
        path = REPO_ROOT / file_rel
        if not path.exists():
            print(f"  ✗  FILE NOT FOUND: {file_rel}")
            results["not_found"].append((file_rel, find))
            continue

        text = path.read_text(encoding="utf-8")

        if find not in text:
            if replace in text:
                print(f"  ↩  Already patched — skipping: {file_rel}")
                results["skipped"].append(file_rel)
            else:
                print(f"  ✗  String not found in {file_rel}:")
                print(f"       → {find[:80]}...")
                results["not_found"].append((file_rel, find))
            continue

        patched = text.replace(find, replace)
        path.write_text(patched, encoding="utf-8")
        label = find[:70].replace("\n", " ") + ("..." if len(find) > 70 else "")
        print(f"  ✓  {file_rel}  →  {label}")
        results["applied"].append(file_rel)

    return results


def apply_regex_replace(file_rel, pattern, replacement, flags=0):
    """For cases where multiple identical strings need replacing in one pass."""
    path = REPO_ROOT / file_rel
    if not path.exists():
        print(f"  ✗  FILE NOT FOUND: {file_rel}")
        return 0
    text = path.read_text(encoding="utf-8")
    new_text, count = re.subn(pattern, replacement, text, flags=flags)
    if count:
        path.write_text(new_text, encoding="utf-8")
        print(f"  ✓  {file_rel}  →  regex replaced {count}x: {pattern[:60]}")
    else:
        print(f"  ↩  No matches for regex in {file_rel}: {pattern[:60]}")
    return count


def main():
    print("\nKelari Party Rentals — Setup Copy Patch 2\n")

    results = apply_exact_changes()

    print()
    print("─" * 60)
    print(f"  Applied:          {len(results['applied'])}")
    print(f"  Already patched:  {len(results['skipped'])}")
    print(f"  Not found:        {len(results['not_found'])}")
    print("─" * 60)

    if results["not_found"]:
        print("\n  ⚠  The following strings were not located — review manually:")
        for f, s in results["not_found"]:
            print(f"     {f}  →  {s[:80]}")
        sys.exit(1)

    print()


if __name__ == "__main__":
    main()
