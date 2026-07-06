#!/usr/bin/env python3
"""
Adds "Vista" to the named service-area city list across 7 blog files (12 fixes).
Each fix is validated independently per-file: if the exact old string isn't
found exactly once in that file, the whole run aborts with no writes anywhere.

Usage:
    python3 fix_blog_vista.py --check      # dry run, shows diffs, no writes
    python3 fix_blog_vista.py --apply      # writes changes after check passes
"""
import sys
import difflib
from pathlib import Path

# Each entry: (file_path, label, old_string, new_string)
FIXES = [
    (
        "src/pages/blog/index.astro",
        "Blog index — subtitle line",
        "everything you need to plan a stress-free party in Carlsbad, Encinitas, Oceanside, and San Marcos.",
        "everything you need to plan a stress-free party in Carlsbad, Encinitas, Oceanside, San Marcos, and Vista.",
    ),
    (
        "src/content/blog/backyard-graduation-party-ideas-north-county.mdx",
        "Backyard Graduation — frontmatter description",
        'description: "Planning a backyard graduation party in Carlsbad, Encinitas, Oceanside, or San Marcos? Here are practical setup ideas, layout tips, and rental guidance to make it memorable."',
        'description: "Planning a backyard graduation party in Carlsbad, Encinitas, Oceanside, San Marcos, or Vista? Here are practical setup ideas, layout tips, and rental guidance to make it memorable."',
    ),
    (
        "src/content/blog/backyard-graduation-party-ideas-north-county.mdx",
        "Backyard Graduation — body intro line",
        "Here's how to do it right for a 2026 graduation celebration in Carlsbad, Encinitas, Oceanside, or San Marcos.",
        "Here's how to do it right for a 2026 graduation celebration in Carlsbad, Encinitas, Oceanside, San Marcos, or Vista.",
    ),
    (
        "src/content/blog/how-far-in-advance-book-party-rentals.mdx",
        "Booking Timing — frontmatter description",
        'description: "Not sure when to book your party rentals? This guide covers lead times by event type and season in Carlsbad, Encinitas, Oceanside, and San Marcos — so you don\'t lose your date."',
        'description: "Not sure when to book your party rentals? This guide covers lead times by event type and season in Carlsbad, Encinitas, Oceanside, San Marcos, and Vista — so you don\'t lose your date."',
    ),
    (
        "src/content/blog/how-far-in-advance-book-party-rentals.mdx",
        "Booking Timing — body intro line",
        "This guide covers how far in advance you should book party rentals in Carlsbad, Encinitas, Oceanside, San Marcos, and surrounding North County communities, broken down by event type and season. Straightforward and specific.",
        "This guide covers how far in advance you should book party rentals in Carlsbad, Encinitas, Oceanside, San Marcos, Vista, and surrounding North County communities, broken down by event type and season. Straightforward and specific.",
    ),
    (
        "src/content/blog/best-parks-carlsbad-encinitas-outdoor-party.mdx",
        "Best Parks — FAQ answer",
        'answer: "Yes — Kelari Party Rentals regularly delivers tables, chairs, tents, and décor to public parks throughout Carlsbad, Encinitas, Oceanside, and San Marcos. We coordinate the delivery and setup time to match your park reservation window."',
        'answer: "Yes — Kelari Party Rentals regularly delivers tables, chairs, tents, and décor to public parks throughout Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. We coordinate the delivery and setup time to match your park reservation window."',
    ),
    (
        "src/content/blog/party-rental-cost-san-diego.mdx",
        "Rental Cost Guide — body intro line",
        "This guide breaks down real pricing for tables, chairs, tents, linens, and full packages in the Carlsbad, Encinitas, Oceanside, and San Marcos area. No fluff, no bait-and-switch ranges — just honest numbers so you can build a budget that works.",
        "This guide breaks down real pricing for tables, chairs, tents, linens, and full packages in the Carlsbad, Encinitas, Oceanside, San Marcos, and Vista area. No fluff, no bait-and-switch ranges — just honest numbers so you can build a budget that works.",
    ),
    (
        "src/content/blog/party-rental-checklist-north-county.mdx",
        "Rental Checklist — body intro line",
        "This checklist is designed for parties in Carlsbad, Encinitas, Oceanside, San Marcos, and surrounding North County San Diego communities. It's organized by category so you can work through it systematically, with guest count guidance so you're not guessing on quantities.",
        "This checklist is designed for parties in Carlsbad, Encinitas, Oceanside, San Marcos, Vista, and surrounding North County San Diego communities. It's organized by category so you can work through it systematically, with guest count guidance so you're not guessing on quantities.",
    ),
    (
        "src/content/blog/party-rental-checklist-north-county.mdx",
        "Rental Checklist — park permits line",
        "**Park permits:** If you're hosting at a public park in Carlsbad, Encinitas, Oceanside, or San Marcos, check permit requirements with your city's parks department before booking. Most parks require advance notice and a fee for events with equipment.",
        "**Park permits:** If you're hosting at a public park in Carlsbad, Encinitas, Oceanside, San Marcos, or Vista, check permit requirements with your city's parks department before booking. Most parks require advance notice and a fee for events with equipment.",
    ),
    (
        "src/content/blog/graduation-party-planning-timeline-north-county.mdx",
        "Grad Timeline — frontmatter description",
        'description: "A week-by-week graduation party planning timeline for families in Carlsbad, Encinitas, Oceanside, and San Marcos. Know exactly what to book and when so nothing gets missed."',
        'description: "A week-by-week graduation party planning timeline for families in Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Know exactly what to book and when so nothing gets missed."',
    ),
    (
        "src/content/blog/graduation-party-planning-timeline-north-county.mdx",
        "Grad Timeline — body intro line",
        "This timeline is designed to prevent that. It walks through exactly what to do and when — from the moment you know the graduation date through the day of the party — for families in Carlsbad, Encinitas, Oceanside, San Marcos, and surrounding communities.",
        "This timeline is designed to prevent that. It walks through exactly what to do and when — from the moment you know the graduation date through the day of the party — for families in Carlsbad, Encinitas, Oceanside, San Marcos, Vista, and surrounding communities.",
    ),
    (
        "src/content/blog/graduation-party-planning-timeline-north-county.mdx",
        "Grad Timeline — closing CTA",
        "Questions about graduation party rentals in North County San Diego? [Request a free quote](/quote/) or browse our [graduation party rental packages](/services/graduation-party-rentals/) — we serve Carlsbad, Encinitas, Oceanside, San Marcos, and all surrounding communities with delivery available for a fee, or free pickup at our Carlsbad warehouse.",
        "Questions about graduation party rentals in North County San Diego? [Request a free quote](/quote/) or browse our [graduation party rental packages](/services/graduation-party-rentals/) — we serve Carlsbad, Encinitas, Oceanside, San Marcos, Vista, and all surrounding communities with delivery available for a fee, or free pickup at our Carlsbad warehouse.",
    ),
]


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "--check"

    errors = []
    file_cache = {}   # path -> original content
    file_new = {}     # path -> content with fixes applied so far
    diffs = []

    for file_path, label, old, new in FIXES:
        p = Path(file_path)

        if not p.exists():
            errors.append(f"[{label}] file not found: {file_path}")
            continue

        if file_path not in file_cache:
            content = p.read_text(encoding="utf-8")
            file_cache[file_path] = content
            file_new[file_path] = content

        current = file_new[file_path]
        count = current.count(old)

        if count != 1:
            errors.append(
                f"[{label}] in {file_path}: expected exactly 1 match, found {count}. "
                f"Aborting — file content may differ from the audited version."
            )
            continue

        diff = "\n".join(difflib.unified_diff(
            [old], [new],
            fromfile=f"{file_path} :: {label} (before)",
            tofile=f"{file_path} :: {label} (after)",
            lineterm=""
        ))
        diffs.append(diff)
        file_new[file_path] = current.replace(old, new, 1)

    if errors:
        print("VALIDATION FAILED — no files written:\n")
        for e in errors:
            print(" -", e)
        sys.exit(1)

    print(f"All {len(FIXES)} fixes matched exactly once across {len(file_cache)} files. Diffs:\n")
    for d in diffs:
        print(d)
        print()

    if mode == "--apply":
        for file_path, new_content in file_new.items():
            Path(file_path).write_text(new_content, encoding="utf-8")
        print(f"Applied. {len(file_cache)} files updated:")
        for fp in file_cache:
            print(" -", fp)
    else:
        print("Dry run only — no changes written. Re-run with --apply to write.")


if __name__ == "__main__":
    main()
