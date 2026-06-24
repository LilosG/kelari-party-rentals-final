#!/usr/bin/env python3
"""
patch_kelari_setup_copy.py
Run from the repo root:  python3 patch_kelari_setup_copy.py
Applies all 23 copy fixes that remove setup-service implications.
"""

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent

changes = [
    # ── src/data/homepage.ts ──────────────────────────────────────────────

    # 1 · How It Works step 02
    (
        "src/data/homepage.ts",
        'Our team arrives at your venue and brings everything you ordered, ready to go. We walk you through setup so everything\'s clear before your first guest walks in.',
        'Our team arrives at your venue and unloads everything. For items like tents and marquee letters, we walk you through assembly and confirm everything is working before we leave — so you\'re ready before your first guest arrives.',
    ),

    # 2 · Jessica T. review
    (
        "src/data/homepage.ts",
        'text: "We were stressed about hosting a baby shower in our backyard, but Kelari took care of everything. The linens, the setup, the décor — it was beautiful and completely hassle-free.",',
        'text: "We were stressed about hosting a baby shower in our backyard, but Kelari made it easy. The linens and décor arrived beautifully and everything looked stunning — completely hassle-free.",',
    ),

    # ── src/pages/index.astro ─────────────────────────────────────────────

    # 3 · "WHAT WE OFFER" subtitle
    (
        "src/pages/index.astro",
        'subtitle="Explore our most requested setups for birthdays, showers, graduations, park gatherings, and backyard celebrations."',
        'subtitle="Explore our most popular rental packages for birthdays, showers, graduations, park gatherings, and backyard celebrations."',
    ),

    # 4 · Gallery eyebrow
    (
        "src/pages/index.astro",
        'eyebrow="RECENT SETUPS"',
        'eyebrow="RECENT DELIVERIES"',
    ),

    # 5 · Gallery title
    (
        "src/pages/index.astro",
        'title="Real Setups, Real Celebrations"',
        'title="Real Events, Real Celebrations"',
    ),

    # ── src/data/services.ts ──────────────────────────────────────────────

    # 6 · party-rentals whatsIncluded Tables & Chairs
    (
        "src/data/services.ts",
        '"Rectangular, round, and Chiavari options in multiple styles, delivered clean and set up at your venue.",',
        '"Rectangular, round, and Chiavari options in multiple styles, delivered clean and ready to place at your venue.",',
    ),

    # 7 · party-rentals faqs[4] answer tail
    (
        "src/data/services.ts",
        "all delivered and ready for your setup.",
        "all delivered and ready to go.",
    ),

    # 8 · backyard-party-rentals whatsIncluded Delivery Available
    (
        "src/data/services.ts",
        '"We deliver to your home and walk you through setup in your yard. Complimentary warehouse pickup is also available at our Carlsbad location.",',
        '"We deliver to your home and walk you through any items that need assembly. Complimentary warehouse pickup is also available at our Carlsbad location.",',
    ),

    # 9 · backyard-party-rentals faqs[1] answer
    (
        "src/data/services.ts",
        '"Yes — we deliver pop-up canopies and frame tents to backyards of all sizes and walk you through setup on arrival. We\'ll work with your space to find the best layout.",',
        '"Yes — we deliver pop-up canopies and frame tents to backyards of all sizes and walk you through assembly on arrival. We\'ll work with your space to find the best layout.",',
    ),

    # 10 · baby-shower-rentals whatsIncluded Delivery & Pickup
    (
        "src/data/services.ts",
        '"Delivery available to your venue. We arrive on time and walk you through setup. Complimentary warehouse pickup also available.",',
        '"Delivery available to your venue. We arrive on time and walk you through anything that needs demonstrating. Complimentary warehouse pickup also available.",',
    ),

    # 11 · baby-shower-rentals faqs[4] answer tail
    (
        "src/data/services.ts",
        "we deliver to addresses throughout Carlsbad, Encinitas, Oceanside, and San Marcos and walk you through setup so the host can focus on guests.",
        "we deliver to addresses throughout Carlsbad, Encinitas, Oceanside, and San Marcos and walk you through everything delivered so the host can focus on guests.",
    ),

    # 12 · delivery-setup-pickup intro (remove last sentence)
    (
        "src/data/services.ts",
        "Prefer to handle transport yourself? Complimentary pickup and dropoff is always available at our Carlsbad warehouse — no fee, no hassle. Ask us about our full-service delivery and arrangement option for your event.",
        "Prefer to handle transport yourself? Complimentary pickup and dropoff is always available at our Carlsbad warehouse — no fee, no hassle.",
    ),

    # 13 · delivery-setup-pickup cityIntro (remove last sentence)
    (
        "src/data/services.ts",
        "Complimentary pickup at our Carlsbad warehouse is always available. Ask us about our full-service delivery and arrangement option for your event.",
        "Complimentary pickup at our Carlsbad warehouse is always available.",
    ),

    # 14 · delivery-setup-pickup faqs[3] question
    (
        "src/data/services.ts",
        'question: "How long does setup take?",',
        'question: "How long does delivery take?",',
    ),

    # 15 · delivery-setup-pickup faqs[3] answer
    (
        "src/data/services.ts",
        '"Most deliveries take 30–60 minutes depending on the package size. Larger events with tents and lighting may take longer. We plan the delivery window to ensure everything is in place before your guests arrive. Ask us about our full-service delivery option if you\'d like our team to handle arrangement at your venue.",',
        '"Most deliveries take 30–60 minutes depending on the package size. Larger orders with tents may take longer. We coordinate the delivery window so everything is unloaded and any instructions confirmed before your guests arrive.",',
    ),

    # 16 · delivery-setup-pickup faqs[4] — remove the entire FAQ object
    (
        "src/data/services.ts",
        """      {
        question: "Do you offer delivery with professional arrangement?",
        answer:
          "Ask us about our full-service delivery option for your event — we're happy to discuss what's available for your date and venue.",
      },""",
        "",
    ),

    # 17 · graduation-party-rentals faqs[2] answer
    (
        "src/data/services.ts",
        '"Yes — we regularly set up for 80 to 150+ guests.',
        '"Yes — we regularly deliver for events of 80 to 150+ guests.',
    ),

    # 18 · engagement-party-rentals faqs[4] question
    (
        "src/data/services.ts",
        'question: "Can you set up a romantic outdoor engagement party setting in North County San Diego?",',
        'question: "Do you deliver for romantic outdoor engagement parties in North County San Diego?",',
    ),

    # ── src/data/categories.ts ────────────────────────────────────────────

    # 19 · tables subheadline
    (
        "src/data/categories.ts",
        'subheadline: "Rectangular, round & cocktail tables for every event size — delivered clean and set up at your venue.",',
        'subheadline: "Rectangular, round & cocktail tables for every event size — delivered clean and ready to use.",',
    ),

    # 20 · tents-canopies intro
    (
        "src/data/categories.ts",
        "We deliver every structure and walk you through setup, weighting, and staking on-site, then return for same-day pickup after your event.",
        "We deliver every structure and walk you through assembly, weighting, and staking on-site — so you're fully ready to go. We return for same-day pickup after your event.",
    ),

    # 21 · tents-canopies whatsIncluded[1] title
    (
        "src/data/categories.ts",
        'title: "Assembled & Anchored",',
        'title: "Assembly Instructions Included",',
    ),

    # 22 · tents-canopies whatsIncluded[1] description
    (
        "src/data/categories.ts",
        'description: "Every tent and canopy is delivered ready to assemble — we walk you through weighting or staking based on your surface type.",',
        'description: "Every tent and canopy comes with a full on-site walkthrough of assembly, weighting, and staking for your specific surface — delivered with everything you need.",',
    ),

    # 23 · marquee-letters intro closing
    (
        "src/data/categories.ts",
        "marquee letters elevate any setup from a party to a moment.",
        "marquee letters elevate any celebration from a party to a moment.",
    ),

    # ── src/pages/faq.astro ───────────────────────────────────────────────

    # 24 · meta description
    (
        "src/pages/faq.astro",
        '"Answers to common questions about party rentals, delivery, setup, pricing, and service area. Kelari Party Rentals — North County San Diego.";',
        '"Answers to common questions about party rentals, delivery, pricing, and service area. Kelari Party Rentals — North County San Diego.";',
    ),
]


def apply_changes():
    results = {"applied": [], "not_found": [], "skipped_already_patched": []}

    for file_rel, find, replace in changes:
        path = REPO_ROOT / file_rel
        if not path.exists():
            print(f"  ✗  FILE NOT FOUND: {file_rel}")
            results["not_found"].append(file_rel)
            continue

        original = path.read_text(encoding="utf-8")

        if find not in original:
            if replace in original:
                print(f"  ↩  Already patched — skipping: {file_rel}")
                results["skipped_already_patched"].append(file_rel)
            else:
                print(f"  ✗  String not found in {file_rel}:")
                print(f"       → {find[:80]}...")
                results["not_found"].append(file_rel)
            continue

        patched = original.replace(find, replace, 1)
        path.write_text(patched, encoding="utf-8")
        label = find[:70].replace("\n", " ") + ("..." if len(find) > 70 else "")
        print(f"  ✓  {file_rel}  →  {label}")
        results["applied"].append(file_rel)

    print()
    print("─" * 60)
    print(f"  Applied:          {len(results['applied'])}")
    print(f"  Already patched:  {len(results['skipped_already_patched'])}")
    print(f"  Not found:        {len(results['not_found'])}")
    print("─" * 60)

    if results["not_found"]:
        print("\n  ⚠  The following strings were not located — review manually:")
        for f in results["not_found"]:
            print(f"     {f}")
        sys.exit(1)


if __name__ == "__main__":
    print("\nKelari Party Rentals — Setup Copy Patch\n")
    apply_changes()
    print()
