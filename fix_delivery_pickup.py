#!/usr/bin/env python3
"""
Standardizes the "Delivery & Pickup" whatsIncluded entry across services.ts.
Usage:
    python3 fix_delivery_pickup.py --check      # dry run, shows diffs, no writes
    python3 fix_delivery_pickup.py --apply      # writes changes after check passes
"""
import sys
import difflib

FILE_PATH = "src/data/services.ts"

REPLACEMENTS = [
    # Block A (generic hub) - line ~104-108
    (
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue across North County SD. Prefer to pick up? Complimentary warehouse pickup is always available at our Carlsbad location.",
      },''',
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue across North County SD. Complimentary warehouse pickup always available at our Carlsbad location.",
      },'''
    ),
    # Backyard - line ~288-292
    (
        '''      {
        icon: "🚚",
        title: "Delivery Available",
        description:
          "We deliver to your home and walk you through any items that need assembly. Complimentary warehouse pickup is also available at our Carlsbad location.",
      },''',
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue across North County SD. Complimentary warehouse pickup always available at our Carlsbad location.",
      },'''
    ),
    # Baby Shower - line ~380-384
    (
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue. We arrive on time and walk you through anything that needs demonstrating. Complimentary warehouse pickup also available.",
      },''',
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue across North County SD. Complimentary warehouse pickup always available at our Carlsbad location.",
      },'''
    ),
    # Engagement - line ~564-568
    (
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue. Complimentary warehouse pickup always available at our Carlsbad location.",
      },''',
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue across North County SD. Complimentary warehouse pickup always available at our Carlsbad location.",
      },'''
    ),
    # Park - line ~650-655
    (
        '''      {
        icon: "🚚",
        title: "On-Site Delivery",
        description:
          "We arrive at your park, deliver and position every item, and pick up after the event — no heavy lifting for you.",
      },''',
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue across North County SD. Complimentary warehouse pickup always available at our Carlsbad location.",
      },'''
    ),
    # Quinceañera - line ~837-841
    (
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Professional delivery available to your venue across North County SD. Complimentary warehouse pickup always available at our Carlsbad location.",
      },''',
        '''      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description:
          "Delivery available to your venue across North County SD. Complimentary warehouse pickup always available at our Carlsbad location.",
      },'''
    ),
]

LABELS = ["Block A (generic hub)", "Backyard", "Baby Shower", "Engagement", "Park", "Quinceañera"]


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "--check"

    with open(FILE_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    errors = []
    new_content = content
    diffs = []

    for label, (old, new) in zip(LABELS, REPLACEMENTS):
        count = new_content.count(old)
        if count != 1:
            errors.append(f"[{label}] expected exactly 1 match, found {count}. Aborting — file may have changed since audit.")
            continue
        diff = "\n".join(difflib.unified_diff(
            old.splitlines(), new.splitlines(),
            fromfile=f"{label} (before)", tofile=f"{label} (after)", lineterm=""
        ))
        diffs.append(diff)
        new_content = new_content.replace(old, new, 1)

    if errors:
        print("VALIDATION FAILED — no changes written:\n")
        for e in errors:
            print(" -", e)
        sys.exit(1)

    print("All 6 blocks matched exactly once. Diffs:\n")
    for d in diffs:
        print(d)
        print()

    if mode == "--apply":
        with open(FILE_PATH, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Applied. {FILE_PATH} updated.")
    else:
        print("Dry run only — no changes written. Re-run with --apply to write.")


if __name__ == "__main__":
    main()
