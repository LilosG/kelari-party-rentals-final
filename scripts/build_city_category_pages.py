"""
Kelari Party Rentals — City x Category page rollout
Run from repo root: python3 scripts/build_city_category_pages.py

What this does:
  1. Extends Category type + data (categories.ts) with city-template fields
  2. Extends City type + data (cities.ts) with categories[] + cityCategoryContent
  3. Extracts current [service].astro body into layouts/CityServiceTemplate.astro
  4. Creates layouts/CityCategoryTemplate.astro (new, mirrors it)
  5. Creates the unified [city]/[slug].astro dispatcher, deletes old [service].astro
  6. Creates components/CategoryGrid.astro (mirrors ServiceGrid.astro)
  7. Updates rentals/[category].astro city links to point at real city+category pages
  8. Adds a "Browse by Product" section to [city]/index.astro

Everything here is additive or a targeted, anchored string replacement.
Nothing is deleted except the old [service].astro (replaced by the dispatcher).
Review with `git diff` before committing. Run `npm run build` after.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CATEGORIES_TS = ROOT / "src/data/categories.ts"
CITIES_TS = ROOT / "src/data/cities.ts"
OLD_SERVICE_PAGE = ROOT / "src/pages/[city]/[service].astro"
NEW_DISPATCHER = ROOT / "src/pages/[city]/[slug].astro"
CITY_SERVICE_TEMPLATE = ROOT / "src/layouts/CityServiceTemplate.astro"
CITY_CATEGORY_TEMPLATE = ROOT / "src/layouts/CityCategoryTemplate.astro"
CATEGORY_GRID = ROOT / "src/components/CategoryGrid.astro"
RENTALS_CATEGORY_PAGE = ROOT / "src/pages/rentals/[category].astro"
CITY_INDEX_PAGE = ROOT / "src/pages/[city]/index.astro"


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def replace_once(path: Path, old: str, new: str, label: str) -> str:
    text = path.read_text(encoding="utf-8")
    count = text.count(old)
    if count == 0:
        die(f"[{label}] anchor not found in {path} — file may have changed since this script was written. Aborting before making a partial edit.")
    if count > 1:
        die(f"[{label}] anchor found {count} times in {path} — expected exactly 1. Aborting.")
    return text.replace(old, new, 1)


def insert_after_each(path: Path, anchor_prefix: str, anchors: list[str], build_insert, label: str) -> str:
    """
    For each literal anchor line in `anchors` (must each appear exactly once),
    insert build_insert(anchor) immediately after that line.
    """
    text = path.read_text(encoding="utf-8")
    for anchor in anchors:
        full_anchor = f'{anchor_prefix}"{anchor}",'
        count = text.count(full_anchor)
        if count != 1:
            die(f"[{label}] anchor '{full_anchor}' found {count} times in {path} — expected exactly 1. Aborting.")
        text = text.replace(full_anchor, full_anchor + "\n" + build_insert(anchor), 1)
    return text


# ─────────────────────────────────────────────────────────────────────────
# 1. categories.ts — type additions
# ─────────────────────────────────────────────────────────────────────────

CATEGORY_TYPE_OLD = """  gridCols?: 2 | 3 | 4;
  relatedServices: string[];
}"""

CATEGORY_TYPE_NEW = """  gridCols?: 2 | 3 | 4;
  relatedServices: string[];
  /** Slug used for city-level routes: /{city}/{citySlug}/ — separate from the
   *  generic /rentals/{slug}/ slug so existing indexed URLs never change. */
  citySlug: string;
  /** Meta templates with {city} token for city+category money pages */
  cityMeta: {
    title: string;
    description: string;
  };
  /** Headline template with {city} token */
  cityHeadline: string;
  /** Subheadline template with {city} token */
  citySubheadline: string;
  /** Intro template with {city} token */
  cityIntro: string;
}"""

CATEGORY_CITY_FIELDS = {
    "tables": dict(
        citySlug="table-rentals",
        title="Table Rentals in {city}, CA | Kelari Party Rentals",
        description="Rectangular, round & cocktail table rentals delivered to {city}. Free delivery, setup, and pickup with Kelari Party Rentals.",
        headline="Table Rentals in {city}",
        subheadline="Rectangular, round & cocktail tables delivered and ready for your {city} event.",
        intro="Planning an event in {city}? Kelari Party Rentals delivers rectangular, round, and cocktail tables right to your venue — clean, ready to use, and picked up after your event. Whether you're hosting a backyard birthday, a graduation party at a local park, or a baby shower at home, we'll help you figure out the right table count and configuration for your {city} space and guest list.",
    ),
    "chairs": dict(
        citySlug="chair-rentals",
        title="Chair Rentals in {city}, CA | Kelari Party Rentals",
        description="Folding & Chiavari chair rentals delivered to {city}. Free delivery, setup, and pickup with Kelari Party Rentals.",
        headline="Chair Rentals in {city}",
        subheadline="Folding & Chiavari chairs delivered to your {city} venue — clean and ready to use.",
        intro="Hosting an event in {city}? Kelari Party Rentals delivers folding and Chiavari chairs right to your venue. Standard folding chairs work great for casual backyard and park parties, while Chiavari chairs elevate showers, graduations, and milestone celebrations. We'll help you confirm the right count and style for your {city} event.",
    ),
    "tents-canopies": dict(
        citySlug="tent-rentals",
        title="Tent & Canopy Rentals in {city}, CA | Kelari Party Rentals",
        description="Pop-up canopies & frame tents delivered to {city} for outdoor events. Free delivery, setup guidance, and pickup.",
        headline="Tent & Canopy Rentals in {city}",
        subheadline="Pop-up canopies and frame tents delivered to your {city} venue for shade and shelter.",
        intro="Outdoor events in {city} need shade — Kelari Party Rentals delivers pop-up canopies and frame tents in multiple sizes right to your venue. We'll walk you through assembly, weighting, and staking on-site, then return for same-day pickup. Tell us your {city} yard or park dimensions and guest count, and we'll recommend the right size.",
    ),
    "linens": dict(
        citySlug="linen-rentals",
        title="Linen Rentals in {city}, CA | Kelari Party Rentals",
        description="Tablecloths in dozens of colors delivered to {city}. Freshly laundered and pressed, with free delivery and pickup.",
        headline="Linen Rentals in {city}",
        subheadline="Freshly laundered tablecloths delivered to your {city} venue.",
        intro="A bare table looks like a company picnic — a tablecloth makes it look intentional. Kelari Party Rentals delivers freshly laundered and pressed tablecloths in dozens of colors to events across {city}. Share your color palette and we'll help you put together a coordinated linen package for your {city} celebration.",
    ),
    "table-runners": dict(
        citySlug="table-runner-rentals",
        title="Table Runner Rentals in {city}, CA | Kelari Party Rentals",
        description="Satin & fabric table runners delivered to {city}. The perfect finishing touch, freshly pressed and ready to use.",
        headline="Table Runner Rentals in {city}",
        subheadline="Satin & fabric runners delivered to your {city} venue — the perfect finishing touch.",
        intro="A table runner layered over a tablecloth is the easiest way to add color and texture to your {city} event. Kelari Party Rentals delivers freshly pressed runners in a range of colors, ready to coordinate with your linens, chairs, and décor for your {city} celebration.",
    ),
    "decorations": dict(
        citySlug="decoration-rentals",
        title="Decoration Rentals in {city}, CA | Kelari Party Rentals",
        description="Centerpieces, arches, backdrops & accents arriving soon for {city} events.",
        headline="Decoration Rentals in {city}",
        subheadline="Centerpieces, arches, backdrops & accents for your {city} celebration.",
        intro="Decoration rentals are arriving soon for {city} events — contact us to reserve early access for centerpieces, balloon arches, and backdrop frames.",
    ),
    "marquee-letters": dict(
        citySlug="marquee-letter-rentals",
        title="Marquee Letter Rentals in {city}, CA | Kelari Party Rentals",
        description="Light-up marquee letters & numbers delivered to {city}. LOVE, BABY, GRAD, CHEERS & custom numbers 0-9.",
        headline="Marquee Letter Rentals in {city}",
        subheadline="Light-up marquee letters delivered to your {city} celebration.",
        intro="Marquee letters are one of the most photographed pieces at any event. Kelari Party Rentals delivers warm Edison-bulb marquee letters and numbers to celebrations across {city}, fully tested and ready to place.",
    ),
    "add-ons": dict(
        citySlug="party-add-on-rentals",
        title="Party Add-On Rentals in {city}, CA | Kelari Party Rentals",
        description="Balloon arch stands, column kits & backdrop frames delivered to {city} events.",
        headline="Party Add-Ons in {city}",
        subheadline="Balloon arch stands, column kits & backdrop frames delivered to your {city} event.",
        intro="Add-ons are the finishing pieces that take a standard setup to the next level. Kelari Party Rentals delivers balloon arch stands, column kits, and backdrop frames to events across {city}, ready for you to assemble and style.",
    ),
}


def build_category_field_insert(slug: str) -> str:
    f = CATEGORY_CITY_FIELDS[slug]
    return (
        f'    citySlug: "{f["citySlug"]}",\n'
        f'    cityMeta: {{\n'
        f'      title: "{f["title"]}",\n'
        f'      description:\n'
        f'        "{f["description"]}",\n'
        f'    }},\n'
        f'    cityHeadline: "{f["headline"]}",\n'
        f'    citySubheadline:\n'
        f'      "{f["subheadline"]}",\n'
        f'    cityIntro:\n'
        f'      "{f["intro"]}",'
    )


def patch_categories_ts() -> None:
    text = replace_once(CATEGORIES_TS, CATEGORY_TYPE_OLD, CATEGORY_TYPE_NEW, "category-type")
    CATEGORIES_TS.write_text(text, encoding="utf-8")

    text = insert_after_each(
        CATEGORIES_TS,
        "slug: ",
        list(CATEGORY_CITY_FIELDS.keys()),
        build_category_field_insert,
        "category-data",
    )
    CATEGORIES_TS.write_text(text, encoding="utf-8")
    print("✓ categories.ts patched (type + 8 category city-template blocks)")


# ─────────────────────────────────────────────────────────────────────────
# 2. cities.ts — type additions
# ─────────────────────────────────────────────────────────────────────────

CITY_TYPE_OLD = """  services: string[];
  faqs: CityFAQ[];
  cityServiceContent?: {
    [serviceSlug: string]: CityServiceContent;
  };
}"""

CITY_TYPE_NEW = """  services: string[];
  /** Category slugs (from categories.ts) enabled for this city's product pages */
  categories: string[];
  faqs: CityFAQ[];
  cityServiceContent?: {
    [serviceSlug: string]: CityServiceContent;
  };
  /** Optional per-city override content for category pages, same shape as
   *  cityServiceContent — reused directly rather than duplicating the type. */
  cityCategoryContent?: {
    [categorySlug: string]: CityServiceContent;
  };
}"""

# Phase 1 rollout — see chat notes. Primary cities get the 5 core categories.
# Neighborhood-tier cities start empty (opt-in later, avoids cannibalization
# risk with their parent city until confirmed).
CITY_CATEGORY_ROLLOUT = {
    "carlsbad": ["tables", "chairs", "tents-canopies", "linens", "table-runners"],
    "encinitas": ["tables", "chairs", "tents-canopies", "linens", "table-runners"],
    "oceanside": ["tables", "chairs", "tents-canopies", "linens", "table-runners"],
    "san-marcos": ["tables", "chairs", "tents-canopies", "linens", "table-runners"],
    "vista": ["tables", "chairs", "tents-canopies", "linens", "table-runners"],
    "bressi-ranch": [],
    "la-costa": [],
    "olde-carlsbad": [],
    "aviara": [],
}


def build_city_field_insert(slug: str) -> str:
    cats = CITY_CATEGORY_ROLLOUT[slug]
    if not cats:
        return "    categories: [], // Phase 1: not yet enabled — see rollout notes"
    inline = ", ".join(f'"{c}"' for c in cats)
    return f"    categories: [{inline}],"


def patch_cities_ts() -> None:
    text = replace_once(CITIES_TS, CITY_TYPE_OLD, CITY_TYPE_NEW, "city-type")
    CITIES_TS.write_text(text, encoding="utf-8")

    text = insert_after_each(
        CITIES_TS,
        "slug: ",
        list(CITY_CATEGORY_ROLLOUT.keys()),
        build_city_field_insert,
        "city-data",
    )
    CITIES_TS.write_text(text, encoding="utf-8")
    print("✓ cities.ts patched (type + categories[] for 9 cities)")


# ─────────────────────────────────────────────────────────────────────────
# 3. Extract current [service].astro → layouts/CityServiceTemplate.astro
# ─────────────────────────────────────────────────────────────────────────

def build_city_service_template() -> None:
    if not OLD_SERVICE_PAGE.exists():
        die(f"{OLD_SERVICE_PAGE} not found — cannot extract template.")
    original = OLD_SERVICE_PAGE.read_text(encoding="utf-8")

    # Split frontmatter / template body
    parts = original.split("---", 2)
    if len(parts) != 3:
        die("Could not parse [service].astro frontmatter — unexpected format.")
    frontmatter, body = parts[1], parts[2]

    # Rewrite import paths: layouts/ sits one level shallower than pages/[city]/
    frontmatter = frontmatter.replace('"../../layouts/', '"../layouts/')
    frontmatter = frontmatter.replace('"../../components/', '"../components/')
    frontmatter = frontmatter.replace('"../../data/', '"../data/')

    # getStaticPaths does not belong in a layout component — the dispatcher owns routing.
    frontmatter = re.sub(
        r"export function getStaticPaths\(\) \{.*?\n\}\n\n",
        "",
        frontmatter,
        flags=re.DOTALL,
    )

    new_content = (
        "---\n"
        + frontmatter.strip()
        + "\n---\n"
        + body
    )
    CITY_SERVICE_TEMPLATE.write_text(new_content, encoding="utf-8")
    print(f"✓ Created {CITY_SERVICE_TEMPLATE.relative_to(ROOT)} (extracted from old [service].astro)")


# ─────────────────────────────────────────────────────────────────────────
# 4. New layouts/CityCategoryTemplate.astro
# ─────────────────────────────────────────────────────────────────────────

CITY_CATEGORY_TEMPLATE_CONTENT = '''---
import BaseLayout from "../layouts/BaseLayout.astro";
import LocalHero from "../components/LocalHero.astro";
import TrustBar from "../components/TrustBar.astro";
import Section from "../components/Section.astro";
import SectionHeader from "../components/SectionHeader.astro";
import WhatsIncluded from "../components/WhatsIncluded.astro";
import NeighborhoodTags from "../components/NeighborhoodTags.astro";
import ParksList from "../components/ParksList.astro";
import CtaBand from "../components/CtaBand.astro";
import FAQAccordion from "../components/FAQAccordion.astro";
import CityCards from "../components/CityCards.astro";
import QuoteForm from "../components/QuoteForm.astro";
import RentalCard from "../components/RentalCard.astro";

import { site, nap, booqableStore } from "../data/site";
import { cities, type City } from "../data/cities";
import {
  categories,
  type Category,
  renderCategoryCityTemplate,
} from "../data/categories";
import { services as allServices } from "../data/services";
import { testimonials, galleryImages } from "../data/homepage";
import TestimonialCarousel from "../components/TestimonialCarousel.astro";
import ImageGallery from "../components/ImageGallery.astro";

interface Props {
  city: City;
  category: Category;
}

const { city, category } = Astro.props;

const cityContent = city.cityCategoryContent?.[category.slug];

const heroImage = category.heroImage;

const pageTitle = renderCategoryCityTemplate(category.cityMeta.title, city.name);
const pageDescription = renderCategoryCityTemplate(category.cityMeta.description, city.name);
const headline = renderCategoryCityTemplate(category.cityHeadline, city.name);
const subheadline = renderCategoryCityTemplate(category.citySubheadline, city.name);
const intro = renderCategoryCityTemplate(category.cityIntro, city.name);
const canonical = `${site.domain}/${city.slug}/${category.citySlug}/`;

const combinedFaqs = [
  ...category.faqs,
  ...city.faqs,
];

// Cross-link to this city's event-type pages that use this product
// (e.g. Carlsbad table-rentals -> Carlsbad backyard-party-rentals)
const relatedCityServices = city.services
  .map((slug) => allServices.find((s) => s.slug === slug))
  .filter((s): s is (typeof allServices)[number] => Boolean(s))
  .filter((s) => category.relatedServices.includes(s.slug));

const nearbyAreas = cities
  .filter((c) => c.slug !== city.slug && c.categories.includes(category.slug))
  .map((c) => ({
    name: c.name,
    tagline: `${category.name} rentals in ${c.name}.`,
    href: `/${c.slug}/${category.citySlug}/`,
  }));

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.domain}/#localbusiness`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${category.name} in ${city.name}`,
    provider: { "@id": `${site.domain}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: `${city.name}, ${city.state}`,
    },
    description: pageDescription,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: combinedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: canonical,
    description: pageDescription,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      {
        "@type": "ListItem",
        position: 2,
        name: city.name,
        item: `${site.domain}/${city.slug}/`,
      },
      { "@type": "ListItem", position: 3, name: category.name, item: canonical },
    ],
  },
];
---

<BaseLayout
  title={pageTitle}
  description={pageDescription}
  canonical={canonical}
  schema={schema}
>

  <!-- 1 - Hero -->
  <LocalHero
    title={headline}
    subtitle={subheadline}
    image={heroImage?.image}
    focalPoint={heroImage?.focalPoint}
    breadcrumbs={[
      { label: "Home", href: "/" },
      { label: city.name, href: `/${city.slug}/` },
      { label: category.name, href: canonical },
    ]}
  />

  <!-- 2 - Trust Bar -->
  <TrustBar />

  <!-- 2b - Coming soon notice (mirrors /rentals/[category]/ behavior) -->
  {category.comingSoon && (
    <div class="bg-[#FBEAF0] border-b border-[#F4C0D1]">
      <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center gap-2 text-sm text-[#72243E]">
        <span>
          {category.name} inventory arriving soon in {city.name} —{" "}
          <a href="/contact/" class="font-semibold underline underline-offset-2 hover:text-[#4B1528] transition-colors">
            contact us to reserve yours
          </a>.
        </span>
      </div>
    </div>
  )}

  <!-- 3 - Intro -->
  <Section bg="white">
    <div class="max-w-3xl mx-auto text-center">
      <p class="font-body uppercase tracking-[0.18em] text-[0.68rem] font-bold mb-5 text-brand-pink">
        ABOUT THIS RENTAL
      </p>
      <div class="border-t border-neutral-200 pt-6">
        <p class="text-lg md:text-xl text-neutral-600 leading-relaxed">
          {cityContent?.intro ?? intro}
        </p>
      </div>
    </div>
  </Section>

  <!-- 3b - Local venue callout (conditional) -->
  {cityContent?.localVenue && (
    <Section bg="white" spacing="compact">
      <div class="max-w-3xl mx-auto">
        <div class="border-l-4 border-brand-pink bg-neutral-50 pl-5 py-4 rounded-r">
          <p class="font-body uppercase tracking-[0.18em] text-[0.68rem] font-bold mb-2 text-brand-pink">LOCAL VENUE</p>
          <p class="text-base text-neutral-700 italic leading-relaxed">{cityContent.localVenue}</p>
        </div>
      </div>
    </Section>
  )}

  <!-- 4 - Item grid -->
  <Section bg="light">
    <div class="mb-10 md:mb-14">
      <SectionHeader
        eyebrow="BROWSE ITEMS"
        title={`Available ${category.name} in ${city.name}`}
        subtitle={`Delivered across ${city.name} — complimentary warehouse pickup always available.`}
      />
    </div>
    {category.groups && category.groups.length > 0 ? (
      <div class="space-y-12 md:space-y-16">
        {category.groups.map((group) => (
          <div>
            <h3 class="font-display text-xl font-bold text-neutral-800 mb-6 pb-3 border-b border-neutral-200">
              {group.title}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {group.items.map((item) => (
                <RentalCard item={item} icon={category.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {category.items.map((item) => (
          <RentalCard item={item} icon={category.icon} />
        ))}
      </div>
    )}
  </Section>

  <!-- 5 - What's included -->
  <WhatsIncluded
    eyebrow="FULL-SERVICE RENTALS"
    title={`What's Included with ${category.name} in ${city.name}`}
    items={category.whatsIncluded}
    columns={3}
    bg="white"
  />

  <!-- 6 - Local proof -->
  <Section bg="light">
    <div class="max-w-3xl mx-auto text-center">
      <SectionHeader
        eyebrow="LOCAL EXPERTS"
        title={`Trusted for ${category.name} in ${city.name}`}
      />
      <p class="mt-6 text-lg text-neutral-600 leading-relaxed">
        {city.localProof}
      </p>
      <p class="mt-3 text-base text-neutral-500">
        {cityContent?.deliveryNote ?? city.deliveryNote}
      </p>
    </div>
  </Section>

  <!-- 7 - Neighborhoods -->
  <NeighborhoodTags
    eyebrow="NEIGHBORHOODS"
    title={`${city.name} Neighborhoods We Serve`}
    neighborhoods={city.neighborhoods}
    bg="white"
    padding="compact"
  />

  <!-- 8 - Parks -->
  <ParksList
    eyebrow="POPULAR VENUES"
    title={`Popular ${city.name} Parks for ${category.name}`}
    parks={city.parks.map((p) => ({ name: p }))}
    bg="light"
    padding="compact"
  />

  <!-- 9 - Gallery -->
  <ImageGallery
    eyebrow="RECENT DELIVERIES"
    title={`${category.name} Setups in ${city.name}`}
    subtitle={`Real events we've delivered across ${city.name} and North County San Diego.`}
    images={galleryImages.slice(0, 8)}
    columns={4}
    bg="white"
  />

  <!-- 10 - Testimonials -->
  <TestimonialCarousel
    eyebrow="REVIEWS"
    title={`What ${city.name} Families Say`}
    subtitle={`Hundreds of events served across ${city.name} and North County San Diego.`}
    testimonials={testimonials}
    bg="light"
  />

  <!-- 11 - Related event types in this city -->
  {relatedCityServices.length > 0 && (
    <Section bg="white">
      <div class="mb-10 md:mb-12">
        <SectionHeader
          eyebrow="POPULAR IN {city.name}"
          title={`${category.name} for Every Event Type`}
          subtitle={`See how ${city.name} hosts use ${category.name.toLowerCase()} across their events.`}
        />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {relatedCityServices.map((service) => (
          <a
            href={`/${city.slug}/${service.slug}/`}
            class="group flex flex-col bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-[0_8px_40px_rgba(200,68,122,0.12)] hover:border-brand-pink/30 transition-all duration-300"
          >
            <span class="text-2xl mb-3" aria-hidden="true">{service.icon}</span>
            <h3 class="font-display font-bold text-neutral-900 text-lg mb-2 group-hover:text-brand-pink transition-colors">
              {service.name} in {city.name}
            </h3>
            <p class="text-sm text-neutral-600 leading-relaxed flex-1">
              {service.subheadline}
            </p>
            <span class="inline-flex items-center gap-1 text-sm font-semibold mt-4 text-brand-pink group-hover:gap-2 transition-all duration-200">
              View packages <span aria-hidden="true">&rarr;</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  )}

  <!-- 12 - Nearby cities offering this category -->
  {nearbyAreas.length > 0 && (
    <CityCards
      eyebrow="NEARBY CITIES"
      title={`${category.name} in Nearby Cities`}
      subtitle={`We also deliver ${category.name.toLowerCase()} in these North County cities.`}
      cities={nearbyAreas.map((a) => ({ name: a.name, description: a.tagline, href: a.href }))}
      bg="light"
      padding="default"
    />
  )}

  <!-- 13 - FAQ -->
  <FAQAccordion
    eyebrow="FAQ"
    title={`${category.name} in ${city.name} — FAQs`}
    faqs={combinedFaqs}
    bg="white"
  />

  {cityContent?.faqs && cityContent.faqs.length > 0 && (
    <FAQAccordion
      eyebrow="LOCAL FAQs"
      title={`Questions About ${category.name} in ${city.name}`}
      faqs={cityContent.faqs}
      bg="light"
    />
  )}

  <!-- 14 - CTA -->
  <CtaBand
    title={`Book ${category.name} in ${city.name}`}
    subtitle={`Get a free quote for ${category.name.toLowerCase()} in ${city.name}. Delivery and pickup are always included.`}
    primaryCta={{ label: "Book Now", href: booqableStore }}
    secondaryCta={{ label: "Get a Free Quote", href: "/quote/" }}
    tertiaryCta={{ label: `Call ${nap.contact.phone}`, href: `tel:${nap.contact.phone.replace(/\\D/g, "")}` }}
  />

  <!-- 15 - Quote form -->
  <QuoteForm
    heading={`Get a Free ${category.name} Quote in ${city.name}`}
    subheading={`Tell us about your ${city.name} event and we'll put together a custom ${category.name.toLowerCase()} package.`}
    city={city.slug}
  />

</BaseLayout>
'''


def build_city_category_template() -> None:
    CITY_CATEGORY_TEMPLATE.write_text(CITY_CATEGORY_TEMPLATE_CONTENT, encoding="utf-8")
    print(f"✓ Created {CITY_CATEGORY_TEMPLATE.relative_to(ROOT)}")


# ─────────────────────────────────────────────────────────────────────────
# 5. renderCategoryCityTemplate helper + getCategoryBySlug already exist —
#    just need the {city}-token renderer added to categories.ts
# ─────────────────────────────────────────────────────────────────────────

RENDER_HELPER_OLD = """export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}"""

RENDER_HELPER_NEW = """export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

/**
 * Replace {city} token in a template string with the given city name.
 * Mirrors services.ts's renderCityTemplate — kept as a separate export
 * here (rather than importing across data files) to avoid a circular
 * dependency between categories.ts and services.ts.
 */
export function renderCategoryCityTemplate(template: string, cityName: string): string {
  return template.replace(/\\{city\\}/g, cityName);
}"""


def patch_categories_render_helper() -> None:
    text = replace_once(CATEGORIES_TS, RENDER_HELPER_OLD, RENDER_HELPER_NEW, "category-render-helper")
    CATEGORIES_TS.write_text(text, encoding="utf-8")
    print("✓ categories.ts: renderCategoryCityTemplate() added")


# ─────────────────────────────────────────────────────────────────────────
# 6. Unified dispatcher: [city]/[slug].astro (replaces [service].astro)
# ─────────────────────────────────────────────────────────────────────────

DISPATCHER_CONTENT = '''---
// Unified city x (service | category) route. Astro matches routes by
// pattern, not param name, so a single dynamic segment under /[city]/
// must be handled by one file. This dispatcher builds paths from both
// data sources and delegates rendering to the matching layout template.
import { cities, type City } from "../../data/cities";
import { services, type Service, getServiceBySlug } from "../../data/services";
import { categories, type Category, getCategoryBySlug } from "../../data/categories";
import CityServiceTemplate from "../../layouts/CityServiceTemplate.astro";
import CityCategoryTemplate from "../../layouts/CityCategoryTemplate.astro";

type ServicePath = { kind: "service"; city: City; service: Service };
type CategoryPath = { kind: "category"; city: City; category: Category };

export function getStaticPaths() {
  const paths: {
    params: { city: string; slug: string };
    props: ServicePath | CategoryPath;
  }[] = [];

  for (const city of cities) {
    for (const serviceSlug of city.services) {
      const service = getServiceBySlug(serviceSlug);
      if (service) {
        paths.push({
          params: { city: city.slug, slug: service.slug },
          props: { kind: "service", city, service },
        });
      }
    }
    for (const categorySlug of city.categories) {
      const category = getCategoryBySlug(categorySlug);
      if (category && !category.hidden) {
        paths.push({
          params: { city: city.slug, slug: category.citySlug },
          props: { kind: "category", city, category },
        });
      }
    }
  }

  return paths;
}

type Props = ServicePath | CategoryPath;
const props = Astro.props;
---

{props.kind === "service" ? (
  <CityServiceTemplate city={props.city} service={props.service} />
) : (
  <CityCategoryTemplate city={props.city} category={props.category} />
)}
'''


def build_dispatcher_and_remove_old() -> None:
    NEW_DISPATCHER.write_text(DISPATCHER_CONTENT, encoding="utf-8")
    print(f"✓ Created {NEW_DISPATCHER.relative_to(ROOT)}")
    if OLD_SERVICE_PAGE.exists():
        OLD_SERVICE_PAGE.unlink()
        print(f"✓ Removed {OLD_SERVICE_PAGE.relative_to(ROOT)} (superseded by dispatcher — route pattern collision otherwise)")


# ─────────────────────────────────────────────────────────────────────────
# 7. components/CategoryGrid.astro — mirrors ServiceGrid.astro
# ─────────────────────────────────────────────────────────────────────────

CATEGORY_GRID_CONTENT = '''---
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import heroParty from '../assets/images/hero-party.jpg';
import Section from "./Section.astro";
import SectionHeader from "./SectionHeader.astro";
import { categories as allCategories } from "../data/categories";

export interface CategoryCard {
  icon: string;
  name: string;
  description: string;
  href: string;
  slug?: string;
}

export interface Props {
  cards?: CategoryCard[];
  columns?: 2 | 3 | 4;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  bg?: "white" | "light" | "dark" | "pink-light";
  padding?: "default" | "compact" | "featured" | "none";
  slugs?: string[];
  citySlug?: string;
}

const {
  cards,
  columns = 4,
  eyebrow,
  title,
  subtitle,
  bg = "white",
  padding = "default",
  slugs,
  citySlug,
} = Astro.props;

const isDark = bg === "dark";

function getCategoryImage(slug: string): ImageMetadata {
  return allCategories.find((c) => c.slug === slug)?.heroImage?.image ?? heroParty;
}

let resolvedCards: (CategoryCard & { slug: string })[] = cards
  ? cards.map((c) => ({ ...c, slug: c.slug ?? c.href.split("/").filter(Boolean).pop() ?? "" }))
  : (() => {
      const pool = slugs
        ? slugs
            .map((s) => allCategories.find((c) => c.slug === s))
            .filter((c): c is (typeof allCategories)[0] => Boolean(c) && !c.hidden)
        : allCategories.filter((c) => !c.hidden);
      return pool.map((c) => ({
        icon: c.icon,
        name: c.name,
        description: c.subheadline,
        href: citySlug ? `/${citySlug}/${c.citySlug}/` : `/rentals/${c.slug}/`,
        slug: c.slug,
      }));
    })();

const colClass = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
}[columns];
---

<Section {bg} spacing={padding} width="wide">
  {(title || eyebrow) && (
    <div class="mb-12 md:mb-16">
      <SectionHeader
        {eyebrow}
        title={title ?? ""}
        {subtitle}
        dark={isDark}
        width="wide"
      />
    </div>
  )}

  <div class={`grid gap-6 md:gap-7 ${colClass}`}>
    {resolvedCards.map((card) => (
      <a
        href={card.href}
        class="group relative overflow-hidden rounded-2xl bg-white border border-neutral-100 flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
      >
        <div class="relative overflow-hidden aspect-[16/10]">
          <Image
            src={getCategoryImage(card.slug)}
            alt={card.name}
            widths={[400, 800]}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
            loading="lazy"
            class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          />
        </div>
        <div class="p-5 flex flex-col flex-1">
          <h3 class="font-display font-bold text-lg text-neutral-900 group-hover:text-brand-pink transition-colors">
            {card.name}
          </h3>
          <p class="text-sm mt-2 leading-relaxed text-neutral-600 flex-1 line-clamp-2">
            {card.description}
          </p>
          <span class="inline-flex items-center gap-1 text-sm font-semibold mt-4 group-hover:gap-2 transition-all duration-200 text-brand-pink">
            Learn more <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </a>
    ))}
  </div>
</Section>
'''


def build_category_grid() -> None:
    CATEGORY_GRID.write_text(CATEGORY_GRID_CONTENT, encoding="utf-8")
    print(f"✓ Created {CATEGORY_GRID.relative_to(ROOT)}")


# ─────────────────────────────────────────────────────────────────────────
# 8. rentals/[category].astro — link cityCards to real city+category URLs
# ─────────────────────────────────────────────────────────────────────────

CITY_CARDS_OLD = """const cityCards = cities.map((c) => ({
  name: c.name,
  description: `${category.name} rentals in ${c.name}.`,
  href: `/${c.slug}/`,
}));"""

CITY_CARDS_NEW = """// Only link to cities where this category actually has a page —
// falling back to the city hub would send bottom-funnel clicks to a
// page without the product, which is worse than not linking at all.
const cityCards = cities
  .filter((c) => c.categories.includes(category.slug))
  .map((c) => ({
    name: c.name,
    description: `${category.name} rentals in ${c.name}.`,
    href: `/${c.slug}/${category.citySlug}/`,
  }));"""


def patch_rentals_category_page() -> None:
    text = replace_once(RENTALS_CATEGORY_PAGE, CITY_CARDS_OLD, CITY_CARDS_NEW, "rentals-citycards")
    RENTALS_CATEGORY_PAGE.write_text(text, encoding="utf-8")
    print("✓ rentals/[category].astro: city links now point at real /{city}/{category}/ pages")


# ─────────────────────────────────────────────────────────────────────────
# 9. [city]/index.astro — add "Browse by Product" section
# ─────────────────────────────────────────────────────────────────────────

CITY_INDEX_IMPORT_OLD = """import ServiceGrid from "../../components/ServiceGrid.astro";"""
CITY_INDEX_IMPORT_NEW = """import ServiceGrid from "../../components/ServiceGrid.astro";
import CategoryGrid from "../../components/CategoryGrid.astro";"""

CITY_INDEX_SECTION_OLD = """  <!-- 5 · Neighborhoods — light (compact) ──────── -->
  <NeighborhoodTags"""

CITY_INDEX_SECTION_NEW = """  <!-- 4b · Products — white ──────────────────── -->
  {city.categories.length > 0 && (
    <CategoryGrid
      eyebrow="SHOP BY PRODUCT"
      title={`Browse ${city.name} Rentals by Product`}
      subtitle={`Tables, chairs, tents & more delivered to your ${city.name} venue.`}
      slugs={city.categories}
      citySlug={city.slug}
      columns={4}
      bg="white"
    />
  )}

  <!-- 5 · Neighborhoods — light (compact) ──────── -->
  <NeighborhoodTags"""


def patch_city_index_page() -> None:
    text = CITY_INDEX_PAGE.read_text(encoding="utf-8")
    if CITY_INDEX_IMPORT_OLD not in text:
        die(f"[city-index-import] anchor not found in {CITY_INDEX_PAGE}. Aborting.")
    text = text.replace(CITY_INDEX_IMPORT_OLD, CITY_INDEX_IMPORT_NEW, 1)
    if CITY_INDEX_SECTION_OLD not in text:
        die(f"[city-index-section] anchor not found in {CITY_INDEX_PAGE}. Aborting.")
    text = text.replace(CITY_INDEX_SECTION_OLD, CITY_INDEX_SECTION_NEW, 1)
    CITY_INDEX_PAGE.write_text(text, encoding="utf-8")
    print("✓ [city]/index.astro: 'Browse by Product' section added")


# ─────────────────────────────────────────────────────────────────────────

def main() -> None:
    for p in [CATEGORIES_TS, CITIES_TS, OLD_SERVICE_PAGE, RENTALS_CATEGORY_PAGE, CITY_INDEX_PAGE]:
        if not p.exists():
            die(f"Expected file not found: {p} — run this from the repo root.")

    build_city_service_template()      # do this BEFORE deleting old file
    patch_categories_ts()
    patch_categories_render_helper()
    patch_cities_ts()
    build_city_category_template()
    build_category_grid()
    build_dispatcher_and_remove_old()  # deletes old [service].astro
    patch_rentals_category_page()
    patch_city_index_page()

    print("\\nDone. Now run:")
    print("  npm run build")
    print("\\nThen review before committing:")
    print("  git diff --stat")
    print("  git status")


if __name__ == "__main__":
    main()
