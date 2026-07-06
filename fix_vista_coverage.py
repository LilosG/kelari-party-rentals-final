#!/usr/bin/env python3
"""
Adds "Vista" to the named service-area city list across services.ts (8 fixes),
plus adds Wildwood Park as the Vista example in the Park FAQ named-parks list
(line ~681) — verified as a real City of Vista public park (651 E. Vista Way).

Usage:
    python3 fix_vista_coverage.py --check      # dry run, shows diffs, no writes
    python3 fix_vista_coverage.py --apply      # writes changes after check passes
"""
import sys
import difflib

FILE_PATH = "src/data/services.ts"

REPLACEMENTS = [
    # 1. Block A meta description - line ~59
    (
        '"Tables, chairs, tents, linens & décor for any celebration. Serving Carlsbad, Encinitas, Oceanside & San Marcos."',
        '"Tables, chairs, tents, linens & décor for any celebration. Serving Carlsbad, Encinitas, Oceanside, San Marcos & Vista."'
    ),
    # 2. Block A FAQ "Is delivery and pickup included?" - line ~125
    (
        '"We deliver across North County San Diego — Carlsbad, Encinitas, Oceanside, San Marcos, and surrounding communities. Delivery is priced by distance. Complimentary pickup is available at our Carlsbad warehouse."',
        '"We deliver across North County San Diego — Carlsbad, Encinitas, Oceanside, San Marcos, Vista, and surrounding communities. Delivery is priced by distance. Complimentary pickup is available at our Carlsbad warehouse."'
    ),
    # 3. Block A FAQ "What areas do you serve?" - line ~135
    (
        '"We serve Carlsbad, Encinitas, Oceanside, and San Marcos, plus surrounding neighborhoods throughout North County San Diego."',
        '"We serve Carlsbad, Encinitas, Oceanside, San Marcos, and Vista, plus surrounding neighborhoods throughout North County San Diego."'
    ),
    # 4. Baby Shower FAQ - line ~416
    (
        '"Yes — home deliveries are very common. We deliver to addresses throughout Carlsbad, Encinitas, Oceanside, and San Marcos and walk you through everything delivered so the host can focus on guests."',
        '"Yes — home deliveries are very common. We deliver to addresses throughout Carlsbad, Encinitas, Oceanside, San Marcos, and Vista and walk you through everything delivered so the host can focus on guests."'
    ),
    # 5. Graduation FAQ - line ~503
    (
        '"We deliver to both. Parks are popular for graduation parties in Carlsbad, Encinitas, Oceanside, and San Marcos. Just confirm your park reservation before booking and we\'ll coordinate delivery around your time slot."',
        '"We deliver to both. Parks are popular for graduation parties in Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Just confirm your park reservation before booking and we\'ll coordinate delivery around your time slot."'
    ),
    # 6. Park FAQ "Which parks do you deliver to?" - line ~666
    (
        '"We deliver to all public parks in Carlsbad, Encinitas, Oceanside, and San Marcos. Contact us with your park location and we\'ll confirm logistics."',
        '"We deliver to all public parks in Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Contact us with your park location and we\'ll confirm logistics."'
    ),
    # 7. Delivery & Pickup FAQ, service area - line ~768
    (
        '"Our primary service area covers Carlsbad, Encinitas, Oceanside, and San Marcos. For locations just outside this area, contact us — we accommodate many nearby zip codes and will confirm availability."',
        '"Our primary service area covers Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. For locations just outside this area, contact us — we accommodate many nearby zip codes and will confirm availability."'
    ),
    # 8. Quinceañera FAQ "Hispanic community" - line ~867
    (
        '"Yes — quinceañeras are one of our most requested events. We serve families in Carlsbad, Encinitas, Oceanside, San Marcos, and surrounding communities and are experienced with the scale and detail these celebrations require."',
        '"Yes — quinceañeras are one of our most requested events. We serve families in Carlsbad, Encinitas, Oceanside, San Marcos, Vista, and surrounding communities and are experienced with the scale and detail these celebrations require."'
    ),
    # 9. Park FAQ - named parks example - line ~681
    (
        '"Popular spots include Calavera Hills Community Park in Carlsbad, Moonlight Beach in Encinitas, Luiseno Park in Oceanside, and Bradley Park in San Marcos. We deliver to all of these and can advise on space and permit needs."',
        '"Popular spots include Calavera Hills Community Park in Carlsbad, Moonlight Beach in Encinitas, Luiseno Park in Oceanside, Bradley Park in San Marcos, and Wildwood Park in Vista. We deliver to all of these and can advise on space and permit needs."'
    ),
]

LABELS = [
    "Block A meta description",
    "Block A FAQ - delivery/pickup included",
    "Block A FAQ - areas served",
    "Baby Shower FAQ",
    "Graduation FAQ",
    "Park FAQ - which parks",
    "Delivery & Pickup FAQ - service area",
    "Quinceañera FAQ - Hispanic community",
    "Park FAQ - named parks example",
]


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
            [old], [new],
            fromfile=f"{label} (before)", tofile=f"{label} (after)", lineterm=""
        ))
        diffs.append(diff)
        new_content = new_content.replace(old, new, 1)

    if errors:
        print("VALIDATION FAILED — no changes written:\n")
        for e in errors:
            print(" -", e)
        sys.exit(1)

    print("All 9 blocks matched exactly once. Diffs:\n")
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
