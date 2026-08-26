import type { ImageMetadata } from 'astro';
import type { HeroImageConfig } from './heroImages';
import { heroImages } from './heroImages';
// tables
import kelariCocktailTable from '../assets/images/kelari-party-rentals-cocktail-table.png';
import kelariBellyUpTable from '../assets/images/kelari-party-rentals-belly-up.png';
import comingSoonImage from '../assets/images/coming-soon-decorations.png';
import tableRectangularFolding from '../assets/images/table-rectangular-folding.png';
import tableRoundFolding from '../assets/images/table-round-folding.png';
// chairs
import chairChiavariWooden from '../assets/images/chair-chiavari-wooden.png';
import chairWhiteFolding from '../assets/images/chair-white-folding.png';
import chairBrownIvoryCushion from '../assets/images/chair-brown-ivory-cushion.png';
import kelariWhiteResinChair from '../assets/images/kelari-party-rentals-white-resin-chair.jpg';
import chairWhiteResinFolding from '../assets/images/chair-white-resin-folding.jpg';
import kelariChairNoCushion from '../assets/images/kelari-party-rentals-chair-no-cushion.png';
// linens - rectangular tablecloths
import tableclothRectWhiteLong from '../assets/images/tablecloth-rect-white-long.png';
import tableclothRectBlack from '../assets/images/tablecloth-rect-black.png';
import tableclothRectBlackLong from '../assets/images/tablecloth-rect-black-long.png';
import tableclothRectIvory from '../assets/images/tablecloth-rect-ivory.png';
import tableclothRectIvoryLong from '../assets/images/tablecloth-rect-ivory-long.png';
// linens - round tablecloths
import tableclothRoundWhiteLarge from '../assets/images/tablecloth-round-white-large.png';
import tableclothRoundBlackLarge from '../assets/images/tablecloth-round-black-large.png';
import tableclothRoundIvoryLarge from '../assets/images/tablecloth-round-ivory-large.png';
import cocktailLinenWhiteLifestyle from '../assets/images/kelari-cocktail-table-linen-white.png';
import cocktailLinenBlackLifestyle from '../assets/images/kelari-cocktail-table-linen-black.png';
import cocktailLinenIvoryLifestyle from '../assets/images/kelari-cocktail-table-linen-ivory.png';
// linens - spandex tablecloths
import tableclothSpandexWhite from '../assets/images/tablecloth-spandex-white.png';
import tableclothSpandexBlack from '../assets/images/tablecloth-spandex-black.png';
import tableclothSpandexWhiteLong from '../assets/images/tablecloth-spandex-white-long.png';
import tableclothSpandexWhiteRound from '../assets/images/tablecloth-spandex-white-round-lifestyle.png';
import tableclothSpandexBlackRound from '../assets/images/tablecloth-spandex-black-round-lifestyle.png';
// linens - cocktail covers
import tableclothCocktailWhiteSpandex from '../assets/images/tablecloth-cocktail-white-spandex.png';
import tableclothCocktailBlackSpandex from '../assets/images/tablecloth-cocktail-black-spandex.png';
import tableclothCocktailIvorySpandex from '../assets/images/tablecloth-cocktail-ivory-spandex.png';
// linens - belly up loose linens
import bellyUpLinenBlack from '../assets/images/belly-up-linen-black.png';
import bellyUpLinenWhite from '../assets/images/belly-up-linen-white.png';
import bellyUpLinenIvory from '../assets/images/belly-up-linen-ivory.png';
// runners
import runnerWhite from '../assets/images/runner-white.png';
import runnerBabyBlue from '../assets/images/runner-baby-blue.png';
import runnerGreen from '../assets/images/runner-green.png';
import runnerPink from '../assets/images/runner-pink.png';
import runnerIvory from '../assets/images/runner-ivory.png';
// inspiration
import eventSetupTablescape from '../assets/images/event-setup-tablescape.png';
import galleryMarquee from '../assets/images/gallery-marquee.jpg';
import marqueeLettersHero from '../assets/images/marquee-letters-hero.jpg';
import marqueeLettersEvent from '../assets/images/marquee-letters-event.jpg';
import marqueeLettersGrad from '../assets/images/marquee-letters-grad.jpg';
import marqueeLettersMrMrs from '../assets/images/marquee-letters-mr-mrs.jpg';
import marqueeLettersNumbers from '../assets/images/marquee-letters-numbers.jpg';
import tentWhite10x10Open from '../assets/images/kelari-party-rentals-tent-and-canopy-rentals-10-by-10-white.png';
import tentWhite10x10Walls from '../assets/images/kelari-party-rentals-tent-and-canopy-rentals-10-by-10-enclosed-white.png';
import tentWhite10x20Open from '../assets/images/kelari-party-rentals-tent-and-canopy-rentals-10-by-20-white.png';
import tentWhite10x20Walls from '../assets/images/kelari-party-rentals-tent-and-canopy-rentals-10-by-20-white-enclosed.png';
import addOnBalloonSquareFrame from '../assets/images/add-ons/kelari-party-rentals-balloon-square-frame.png';
import addOnBalloonCircleFrame from '../assets/images/add-ons/kelari-party-rentals-balloon-circle-frame.png';
import addOnBalloonPillars from '../assets/images/add-ons/kelari-party-rentals-baloon-pillars.png';
import addOnWoodBackdrop from '../assets/images/add-ons/kelari-party-rentals-wood-back-drop.png';
import addOnWoodTableCovering from '../assets/images/add-ons/kelari-party-rentals-wood-table-covering.png';

// ── Types ────────────────────────────────────────────────────────────────────

export interface CategoryItem {
  name: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  image?: ImageMetadata;
  bookingUrl?: string;
  bookingUrls?: { label: string; url: string }[];
}

export interface CategoryItemGroup {
  title: string;
  cols?: 2 | 3 | 4;
  hidden?: boolean;
  items: CategoryItem[];
}

export interface CategoryIncludedItem {
  icon: string;
  title: string;
  description: string;
}

export interface CategoryFAQ {
  question: string;
  answer: string;
}

export interface Category {
  slug: string;
  name: string;
  comingSoon?: boolean;
  hidden?: boolean;
  meta: {
    title: string;
    description: string;
  };
  headline: string;
  subheadline: string;
  intro: string;
  icon: string;
  heroImage?: HeroImageConfig;
  items: CategoryItem[];
  groups?: CategoryItemGroup[];
  whatsIncluded: CategoryIncludedItem[];
  faqs: CategoryFAQ[];
  gridCols?: 2 | 3 | 4;
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
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: "tables",
    citySlug: "table-rentals",
    cityMeta: {
      title: "Table Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Rectangular, round & cocktail table rentals delivered to {city}. Delivery available for an additional fee, or free pickup at our Carlsbad warehouse.",
    },
    cityHeadline: "Table Rentals in {city}",
    citySubheadline:
      "Rectangular, round & cocktail tables delivered and ready for your {city} event.",
    cityIntro:
      "Planning an event in {city}? Kelari Party Rentals delivers rectangular, round, and cocktail tables right to your venue — clean, ready to use, and picked up after your event. Whether you're hosting a backyard birthday, a graduation party at a local park, or a baby shower at home, we'll help you figure out the right table count and configuration for your {city} space and guest list.",
    name: "Tables",
    meta: {
      title: "Table Rentals in North County | Kelari Party Rentals",
      description:
        "Rectangular, round & cocktail table rentals for parties and events in Carlsbad, Encinitas, Oceanside, San Marcos & Vista.",
    },
    headline: "Table Rentals",
    subheadline: "Rectangular, round & cocktail tables for every event size — delivered clean and ready to use.",
    intro:
      "Tables are the foundation of every event setup, and getting the right style and quantity makes everything else fall into place. Kelari Party Rentals offers rectangular, round, and cocktail tables for parties of every size across North County San Diego. Every table arrives clean, ready for you to place at your venue, and is picked up after your event — no hauling, no cleanup from you. Whether you're hosting a backyard birthday in Carlsbad, a graduation party at a San Marcos park, or a baby shower in Encinitas, we have the right table configuration for your space and guest count.",
    icon: "🪑",
    heroImage: heroImages.tablesNew,
    items: [
      {
        name: '60" Round Folding Table',
        description: "Seats 8–10 guests. Perfect for formal dining, centerpieces, and banquet-style layouts.",
        sizes: ['60"'],
        image: tableRoundFolding,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/round-plastic-folding-table-60",
      },
      {
        name: "6-Foot Rectangular Table",
        description: "Seats 6–8 guests. Great for dining, buffet setups, and gift tables.",
        sizes: ["6 ft"],
        image: tableRectangularFolding,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/rectangular-plastic-table-6ft",
      },
      {
        name: "8-Foot Rectangular Table",
        description: "Seats 8–10 guests. Ideal for larger dining setups, buffets, and banquets.",
        sizes: ["8 ft"],
        image: tableRectangularFolding,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/rectangular-plastic-table-8ft",
      },
      {
        name: "Cocktail Table",
        description: "30-inch round table with standard-height pole, ideal for display tables, dessert stations, and smaller event setups.",
        sizes: ["Standard Height"],
        image: kelariCocktailTable,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/cocktail-table-30-round",
      },
      {
        name: "Belly-Up Table",
        description: "30-inch round table with a 42-inch bar-height pole, ideal for cocktail hours, drink stations, and standing receptions.",
        sizes: ['42" Bar Height'],
        image: kelariBellyUpTable,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/belly-up-30-round",
      },
    ],
    whatsIncluded: [
      {
        icon: "🚚",
        title: "Delivery Available",
        description: "We deliver tables to your venue across North County San Diego — homes, parks, community centers, and event spaces.",
      },
      {
        icon: "✅",
        title: "Clean & Event-Ready",
        description: "Every table is cleaned, inspected, and delivered ready to use — spotless every time.",
      },
      {
        icon: "✅",
        title: "Clean & Inspection-Ready",
        description: "Every table is cleaned and inspected before delivery — no surprises on delivery day.",
      },
      {
        icon: "🧹",
        title: "Same-Day Pickup",
        description: "We return after your event and collect everything. You don't move a single table.",
      },
      {
        icon: "📐",
        title: "Layout Guidance",
        description: "Not sure how many tables or what configuration fits your space? We'll recommend the right setup based on your guest count and venue.",
      },
      {
        icon: "📋",
        title: "Mix & Match",
        description: "Combine rectangular, round, and cocktail tables in one order — we coordinate the delivery.",
      },
    ],
    relatedServices: [
      "birthday-party-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "quinceanera-rentals",
      "baby-shower-rentals",
    ],
    faqs: [
      {
        question: "How many tables do I need for my party?",
        answer: "For round tables seating 8–10 guests each, divide your guest count by 8 and round up. Always add 1–2 extra tables for food, cake, and gifts on top of your seating count. For 50 guests: 7 round tables for seating plus 2 extra for food and gifts.",
      },
      {
        question: "What is the difference between round and rectangular tables?",
        answer: "Round tables create better conversation flow — guests face each other and the setup feels more social. Rectangular tables are more space-efficient and work well for buffet lines and park setups. For milestone events like showers and graduation parties, round tables are the more common choice.",
      },
      {
        question: "Do you deliver tables to parks in Carlsbad and Encinitas?",
        answer: "Yes — we deliver to all public parks throughout North County San Diego including Poinsettia Park, Alga Norte, Stagecoach Park, Encinitas Community Park, and more. We deliver to your reserved park location and pick up after your event.",
      },
      {
        question: "Are linens included with table rentals?",
        answer: "Linens are a separate rental item but can be added to any table order. We carry tablecloths and runners in a wide range of colors. Most events benefit significantly from adding linens — a bare table looks like a cafeteria; the same table with a tablecloth looks intentional.",
      },
      {
        question: "How far in advance should I book table rentals?",
        answer: "We recommend 1–2 weeks for most events and 3–4 weeks for summer weekends (May–September). For graduation season in June, book 4–6 weeks ahead — table inventory commits fast during that window.",
      },
    ],
  },
  {
    slug: "chairs",
    citySlug: "chair-rentals",
    cityMeta: {
      title: "Chair Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Folding & Chiavari chair rentals delivered to {city}. Delivery available for an additional fee, or free pickup at our Carlsbad warehouse.",
    },
    cityHeadline: "Chair Rentals in {city}",
    citySubheadline:
      "Folding & Chiavari chairs delivered to your {city} venue — clean and ready to use.",
    cityIntro:
      "Hosting an event in {city}? Kelari Party Rentals delivers folding and Chiavari chairs right to your venue. Standard folding chairs work great for casual backyard and park parties, while Chiavari chairs elevate showers, graduations, and milestone celebrations. We'll help you confirm the right count and style for your {city} event.",
    name: "Chairs",
    meta: {
      title: "Chair Rentals in North County | Kelari Party Rentals",
      description:
        "Folding chairs & Chiavari chairs for parties and events in Carlsbad, Encinitas, Oceanside, San Marcos & Vista.",
    },
    headline: "Chair Rentals",
    subheadline: "Folding & Chiavari chairs for every style and budget — delivered to your venue.",
    intro:
      "Chair selection does more to set the tone of an event than almost any other rental decision. Standard folding chairs are practical and perfectly appropriate for casual birthdays and park events. Chiavari chairs — gold or silver — elevate the visual presentation of showers, graduation parties, and milestone celebrations significantly. Kelari Party Rentals carries the full range of chair styles for events across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Every chair is delivered clean and picked up after your event. One chair per guest is the baseline — we'll help you confirm the right count and style for your event type.",
    icon: "💺",
    heroImage: heroImages.chairsNew,
    items: [
      {
        name: "White Resin Folding Chair",
        description: "Standard white plastic resin folding chair. The most popular chair rental for backyard parties, park events, and casual celebrations.",
        image: kelariWhiteResinChair,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/resin-folding-chair-white",
      },
      {
        name: "Chiavari Chair – Fruitwood",
        description: "Fruitwood Chiavari chair without cushion. A clean natural wood chair option for showers, milestone events, weddings, and polished backyard celebrations.",
        image: kelariChairNoCushion,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/wood-chiavari-chair-light-fruitwood-no-cushion",
      },
      {
        name: "Chiavari Cushion – 2-inch Ivory",
        description: "Add-on ivory cushion for Chiavari chairs. Adds comfort and a polished finish to any formal event setup.",
        image: chairBrownIvoryCushion,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/wood-chiavari-chair-light-fruitwood",
      },
      {
        name: "White Folding Chair",
        description: "Simple white folding chair for casual parties, park events, backyard gatherings, and extra guest seating. Lightweight, clean, and practical for flexible event setups.",
        image: chairWhiteResinFolding,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/white-plastic-folding-chair",
      },
    ],
    whatsIncluded: [
      {
        icon: "🚚",
        title: "Delivery Available",
        description: "Chair orders are delivered to your venue across North County San Diego — homes, parks, community centers, and event spaces.",
      },
      {
        icon: "✅",
        title: "Clean & Event-Ready",
        description: "Every chair is cleaned and inspected before delivery — spotless and ready for your guests.",
      },
      {
        icon: "✅",
        title: "Clean & Inspected",
        description: "Every chair is cleaned and checked before delivery. Chiavari cushions are freshly covered.",
      },
      {
        icon: "🧹",
        title: "Post-Event Pickup",
        description: "We return after your event and collect every chair. No stacking, no hauling for you.",
      },
      {
        icon: "🪑",
        title: "Style Options",
        description: "White folding, black folding, gold Chiavari, and silver Chiavari chairs — all available in one order.",
      },
      {
        icon: "📋",
        title: "Quantity Guidance",
        description: "Not sure how many chairs you need? We'll confirm the right count based on your guest list and layout.",
      },
    ],
    relatedServices: [
      "birthday-party-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "How many chairs do I need for my event?",
        answer: "Plan for one chair per guest plus a 5–10% buffer for late additions. For 50 guests, order 55 chairs. If your event has a cocktail format where guests mingle rather than sit, you can reduce to 60–70% of your guest count.",
      },
      {
        question: "What is the difference between folding chairs and Chiavari chairs?",
        answer: "Folding chairs are practical, affordable, and appropriate for casual events — birthdays, park parties, graduation celebrations. Chiavari chairs are an elegant upgrade suited to showers, engagement parties, quinceañeras, and milestone events where presentation matters. The visual difference is significant and worth the upgrade for formal occasions.",
      },
      {
        question: "What chair style works best for formal events?",
        answer: "Chiavari chairs are the top choice for showers, quinceañeras, engagement parties, and milestone events where presentation matters. The visual upgrade over a standard folding chair is significant and worth it for formal occasions.",
      },
      {
        question: "Can I mix chair styles in one order?",
        answer: "Yes — you can combine Chiavari chairs for the main tables with standard folding chairs for overflow seating. We coordinate the full order in a single delivery.",
      },
      {
        question: "Do you deliver chairs to parks in North County San Diego?",
        answer: "Yes — we deliver to all public parks throughout Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. We deliver to your reserved park location and pick up after your event.",
      },
    ],
  },
  {
    slug: "tents-canopies",
    citySlug: "tent-rentals",
    cityMeta: {
      title: "Tent & Canopy Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Pop-up canopies & frame tents delivered to {city} for outdoor events. We walk you through setup on arrival — delivery available for an additional fee, or free pickup at our Carlsbad warehouse.",
    },
    cityHeadline: "Tent & Canopy Rentals in {city}",
    citySubheadline:
      "Pop-up canopies and frame tents delivered to your {city} venue for shade and shelter.",
    cityIntro:
      "Outdoor events in {city} need shade — Kelari Party Rentals delivers pop-up canopies and frame tents in multiple sizes right to your venue. We'll walk you through assembly, weighting, and staking on-site, then return for same-day pickup. Tell us your {city} yard or park dimensions and guest count, and we'll recommend the right size.",
    name: "Tents & Canopies",
    gridCols: 4,
    meta: {
      title: "Tent & Canopy Rentals in North County | Kelari Party Rentals",
      description:
        "Pop-up canopies and frame tents in multiple sizes for outdoor events in Carlsbad, Encinitas, Oceanside, San Marcos & Vista.",
    },
    headline: "Tent & Canopy Rentals",
    subheadline: "Pop-up canopies and frame tents for shade and shelter at any outdoor event.",
    intro:
      "In North County San Diego, a tent or canopy isn't optional for daytime outdoor events — it's what makes the difference between a comfortable celebration and guests checking the time. Kelari Party Rentals carries pop-up canopies and professional frame tents in multiple sizes for backyard parties, park events, and outdoor celebrations across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. We deliver every structure and walk you through assembly, weighting, and staking on-site — so you're fully ready to go. We return for same-day pickup after your event. Whether you need a compact 10x10 canopy for a food station or a 20x40 frame tent for a 100-guest graduation party, we have the right coverage for your venue and guest count.",
    icon: "⛺",
    heroImage: heroImages.tentWhite10x20Open,
    items: [
      {
        name: "10×10 Pop-Up Canopy",
        description: "Compact open canopy for food stations, dessert tables, and small gathering areas. Fits 1-2 tables.",
        sizes: ["10×10"],
        colors: ["White", "Black"],
        image: tentWhite10x10Open,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/steel-frame-canopy-10-x-10-white",
      },
      {
        name: "10×10 Pop-Up Canopy with Walls",
        description: "10×10 canopy with sidewalls for added wind protection and a more enclosed setup.",
        sizes: ["10×10"],
        colors: ["White", "Black"],
        image: tentWhite10x10Walls,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/10-x10-waterproof-pop-up-canopy-tent-with-sides",
      },
      {
        name: "10×20 Pop-Up Canopy",
        description: "Extended open canopy for buffet lines, dining areas, and mid-size groups. Fits 3-4 tables.",
        sizes: ["10×20"],
        colors: ["White", "Black"],
        image: tentWhite10x20Open,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/steel-frame-canopy-10-x-20-white",
      },
      {
        name: "10×20 Pop-Up Canopy with Walls",
        description: "10×20 canopy with sidewalls for a more enclosed event space with wind and sun protection on all sides.",
        sizes: ["10×20"],
        colors: ["White", "Black"],
        image: tentWhite10x20Walls,
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/10-x20-waterproof-pop-up-canopy-tent-with-sides-white",
      },
    ],
    whatsIncluded: [
      {
        icon: "🚚",
        title: "Delivery Available",
        description: "We transport and deliver every tent and canopy to your venue across North County San Diego.",
      },
      {
        icon: "🔧",
        title: "Assembly Instructions Included",
        description: "Every tent and canopy comes with a full on-site walkthrough of assembly, weighting, and staking for your specific surface — delivered with everything you need.",
      },
      {
        icon: "⚓",
        title: "Proper Anchoring",
        description: "Every canopy and tent is weighted or staked to handle coastal Carlsbad breezes. We bring the right anchoring equipment for your yard surface.",
      },
      {
        icon: "✅",
        title: "Pre-Event Check",
        description: "We confirm every structure is secure and properly positioned before leaving your venue.",
      },
      {
        icon: "🧹",
        title: "Same-Day Pickup",
        description: "We return after your event and handle full collection and removal — no disassembly for you.",
      },
      {
        icon: "📐",
        title: "Size Guidance",
        description: "Not sure what size tent fits your yard or guest count? We'll recommend the right option based on your space and event details.",
      },
    ],
    relatedServices: [
      "birthday-party-rentals",
      "backyard-party-rentals",
      "park-party-rentals",
      "graduation-party-rentals",
    ],
    faqs: [
      {
        question: "What size tent do I need for my backyard party?",
        answer: "A 10x20 pop-up canopy covers a dining area for 20–30 guests. A 20x20 frame tent comfortably fits 40–50 guests. For 60–100 guests, a 20x40 frame tent is the right call. When in doubt, go slightly larger — a tent with breathing room is significantly more comfortable than a cramped one.",
      },
      {
        question: "What is the difference between a pop-up canopy and a frame tent?",
        answer: "Pop-up canopies set up quickly, are freestanding, and come in 10x10 and 10x20 sizes. They provide overhead shade and light wind protection but are open on the sides. Frame tents are more substantial aluminum-frame structures — sturdier in wind, more polished in appearance, and available in larger sizes. Frame tents are the right choice for larger events, more formal occasions, and any event where weather protection matters.",
      },
      {
        question: "Can a tent be set up on artificial turf or concrete?",
        answer: "Yes — we bring weighted bases for artificial turf and concrete surfaces where ground staking isn't possible. Let us know your yard surface when booking and we'll bring the right anchoring equipment.",
      },
      {
        question: "Do I need a tent for an evening party?",
        answer: "Not necessarily — once the sun sets, shade becomes irrelevant and open-sky evening parties with string lights can be beautiful. Tents are most valuable for daytime events between 10am and 4pm when sun and heat are the main comfort factors.",
      },
      {
        question: "Do you deliver tents to parks in Carlsbad and Encinitas?",
        answer: "Yes — we regularly deliver canopies and frame tents to public parks throughout North County San Diego. Most parks require a reservation for events with equipment — confirm your reservation window and we'll coordinate delivery to arrive within it.",
      },
    ],
  },
  {
    slug: "linens",
    citySlug: "linen-rentals",
    cityMeta: {
      title: "Linen Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Tablecloths in dozens of colors delivered to {city}. Freshly laundered and pressed, with delivery available for an additional fee or free pickup at our Carlsbad warehouse.",
    },
    cityHeadline: "Linen Rentals in {city}",
    citySubheadline:
      "Freshly laundered tablecloths delivered to your {city} venue.",
    cityIntro:
      "A bare table looks like a company picnic — a tablecloth makes it look intentional. Kelari Party Rentals delivers freshly laundered and pressed tablecloths in dozens of colors to events across {city}. Share your color palette and we'll help you put together a coordinated linen package for your {city} celebration.",
    name: "Linens",
    meta: {
      title: "Linen Rentals in North County | Kelari Party Rentals",
      description:
        "Tablecloths in dozens of colors for party and event rentals. Delivered across Carlsbad, Encinitas, Oceanside, San Marcos & Vista.",
    },
    headline: "Linen Rentals",
    subheadline: "Tablecloths in dozens of colors — freshly laundered and pressed.",
    intro:
      "Linens are the single highest-impact, lowest-cost upgrade available for any event setup. A bare folding table looks like a company picnic. The same table with a floor-length tablecloth looks like an intentional celebration. Kelari Party Rentals carries tablecloths in a wide range of colors and fabrics for events across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Table runners are available separately — browse our full runner selection on the table runners page. Every linen is freshly laundered and pressed before delivery. We help you coordinate colors to your event palette — share your theme and we'll build a complete linen package that ties the whole setup together.",
    icon: "🎀",
    heroImage: heroImages.linensNew,
    items: [],
    groups: [
      {
        title: "Rectangular Tablecloths",
        cols: 3,
        hidden: true,
        items: [
          {
            name: "Rectangular Tablecloth – White",
            description: "Polyester tablecloth for 6ft and 8ft rectangular tables. Clean white finish for any event.",
            sizes: ["6ft", "8ft"],
            image: tableclothRectWhiteLong,
            bookingUrls: [
              { label: "6ft", url: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-x132-white" },
              { label: "8ft", url: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-x156-white" },
            ],
          },
          {
            name: "Rectangular Tablecloth – Black",
            description: "Polyester tablecloth for 6ft and 8ft rectangular tables. Sleek black finish for modern events.",
            sizes: ["6ft", "8ft"],
            image: tableclothRectBlack,
            bookingUrls: [
              { label: "6ft", url: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-x132-black" },
              { label: "8ft", url: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-x156-black" },
            ],
          },
          {
            name: "Rectangular Tablecloth – Beige",
            description: "Polyester tablecloth for 6ft and 8ft rectangular tables. Warm beige finish for elegant setups.",
            sizes: ["6ft", "8ft"],
            image: tableclothRectIvory,
            bookingUrls: [
              { label: "6ft", url: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-x132-tan-ivory" },
              { label: "8ft", url: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-x156-tan-ivory" },
            ],
          },
        ],
      },
      {
        title: "Round Tablecloths – 60″ Dining Tables",
        cols: 3,
        hidden: true,
        items: [
          {
            name: "Round Tablecloth – White",
            description: 'Floor-length white tablecloth for 60" round dining tables.',
            sizes: ['120" Round'],
            image: tableclothRoundWhiteLarge,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/tablecloth-120-round-white",
          },
          {
            name: "Round Tablecloth – Black",
            description: 'Floor-length black tablecloth for 60" round dining tables.',
            sizes: ['120" Round'],
            image: tableclothRoundBlackLarge,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/tablecloth-120-round-black",
          },
          {
            name: "Round Tablecloth – Ivory",
            description: 'Floor-length ivory tablecloth for 60" round dining tables.',
            sizes: ['120" Round'],
            image: tableclothRoundIvoryLarge,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/tablecloth-120-round-tan-ivory",
          },
        ],
      },
      {
        title: "Cocktail Table Linens – 30″ Round Tables",
        cols: 3,
        hidden: true,
        items: [
          {
            name: "Cocktail Linen – White",
            description: 'Round tablecloth for 30" cocktail tables. Clean white finish.',
            sizes: ['108" Round'],
            image: cocktailLinenWhiteLifestyle,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-round-white",
          },
          {
            name: "Cocktail Linen – Black",
            description: 'Round tablecloth for 30" cocktail tables. Sleek black finish.',
            sizes: ['108" Round'],
            image: cocktailLinenBlackLifestyle,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-round-black",
          },
          {
            name: "Cocktail Linen – Ivory",
            description: 'Round tablecloth for 30" cocktail tables. Warm ivory finish.',
            sizes: ['108" Round'],
            image: cocktailLinenIvoryLifestyle,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/tablecloth-90-round-tan-ivory",
          },
        ],
      },
      {
        title: "Belly Up Linens",
        cols: 3,
        hidden: true,
        items: [
          {
            name: "Belly Up Linen – Black",
            description: 'Round loose-drape tablecloth for 30" belly-up cocktail tables. Sleek black finish.',
            sizes: ['108" Round', '120" Round'],
            image: bellyUpLinenBlack,
            bookingUrls: [
              { label: '108"', url: "https://rentals.kelaripartyrentals.com/products/tablecloth-108-round-black" },
              { label: '120"', url: "https://rentals.kelaripartyrentals.com/products/tablecloth-120-round-black" },
            ],
          },
          {
            name: "Belly Up Linen – White",
            description: 'Round loose-drape tablecloth for 30" belly-up cocktail tables. Clean white finish.',
            sizes: ['108" Round', '120" Round'],
            image: bellyUpLinenWhite,
            bookingUrls: [
              { label: '108"', url: "https://rentals.kelaripartyrentals.com/products/tablecloth-108-round-white" },
              { label: '120"', url: "https://rentals.kelaripartyrentals.com/products/tablecloth-120-round-white" },
            ],
          },
          {
            name: "Belly Up Linen – Ivory",
            description: 'Round loose-drape tablecloth for 30" belly-up cocktail tables. Warm ivory finish.',
            sizes: ['108" Round', '120" Round'],
            image: bellyUpLinenIvory,
            bookingUrls: [
              { label: '108"', url: "https://rentals.kelaripartyrentals.com/products/tablecloth-108-round-tan-ivory" },
              { label: '120"', url: "https://rentals.kelaripartyrentals.com/products/tablecloth-120-round-tan-ivory" },
            ],
          },
        ],
      },
      {
        title: "Banquet Spandex Covers",
        cols: 3,
        items: [
          {
            name: "Banquet Spandex – White",
            description: "Stretch-fit white spandex cover for 6ft and 8ft rectangular tables. Wrinkle-free fitted finish.",
            sizes: ["6ft", "8ft"],
            image: tableclothSpandexWhiteLong,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/spandex-cover-8ft-banquet-white",
          },
          {
            name: "Banquet Spandex – Black",
            description: "Stretch-fit black spandex cover for 6ft and 8ft rectangular tables. Clean tailored look.",
            sizes: ["6ft", "8ft"],
            image: tableclothSpandexBlack,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/spandex-cover-8ft-banquet-black",
          },
        ],
      },
      {
        title: "Belly-Up Spandex Covers",
        cols: 3,
        items: [
          {
            name: "Belly Up Spandex – White",
            description: 'Stretch-fit white spandex cover for 30" cocktail tables. Clean fitted finish.',
            image: tableclothCocktailWhiteSpandex,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/spandex-cover-30-cocktail-white",
          },
          {
            name: "Belly Up Spandex – Black",
            description: 'Stretch-fit black spandex cover for 30" cocktail tables. Sleek modern finish.',
            image: tableclothCocktailBlackSpandex,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/spandex-cover-30-cocktail-black",
          },
          {
            name: "Belly Up Spandex – Ivory",
            description: 'Stretch-fit ivory spandex cover for 30" cocktail tables. Warm elegant finish.',
            image: tableclothCocktailIvorySpandex,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/spandex-cover-30-cocktail-tan-ivory",
          },
        ],
      },
      {
        title: "Round Spandex Covers",
        cols: 3,
        items: [
          {
            name: "Round Spandex – White",
            description: 'Stretch-fit white spandex cover for 60" round dining tables. Full-length form-fitting look.',
            image: tableclothSpandexWhiteRound,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/spandex-cover-60-round-white",
          },
          {
            name: "Round Spandex – Black",
            description: 'Stretch-fit black spandex cover for 60" round dining tables. Clean tailored finish.',
            image: tableclothSpandexBlackRound,
            bookingUrl: "https://rentals.kelaripartyrentals.com/products/spandex-cover-60-round-black",
          },
        ],
      },
    ],
    whatsIncluded: [
      {
        icon: "✅",
        title: "Freshly Laundered",
        description: "Every linen is washed, pressed, and inspected before delivery — no wrinkles, no stains.",
      },
      {
        icon: "🎨",
        title: "Color Coordination",
        description: "Share your event palette and we'll match tablecloths and runners into a coordinated package.",
      },
      {
        icon: "🚚",
        title: "Delivery Available",
        description: "Linens are delivered to your venue across North County San Diego as part of your rental order.",
      },
      {
        icon: "🔧",
        title: "Freshly Pressed & Ready",
        description: "Every linen arrives clean and pressed — ready to place the moment you're set up.",
      },
      {
        icon: "🧹",
        title: "Post-Event Pickup",
        description: "We collect all linens after your event. No washing, no returning — we handle everything.",
      },
      {
        icon: "📋",
        title: "Full Range of Colors",
        description: "From classic white and ivory to dusty rose, navy, sage, gold, and burgundy — we carry the colors your event needs.",
      },
    ],
    relatedServices: [
      "engagement-party-rentals",
      "quinceanera-rentals",
      "baby-shower-rentals",
    ],
    faqs: [
      {
        question: "What colors of linens do you carry?",
        answer: "We carry a wide range of colors including white, ivory, black, navy, royal blue, dusty rose, blush, burgundy, sage green, emerald, gold, silver, lavender, and more. Contact us with your color palette and we'll confirm availability for your event date.",
      },
      {
        question: "What size tablecloth do I need for a round table?",
        answer: "For a 60-inch round table with a floor-length drop, you need a 120-inch round tablecloth. For a mid-length drop, a 90-inch round works. Floor-length is the standard for formal events — showers, graduation parties, and quinceañeras. Mid-length works for casual setups.",
      },
      {
        question: "Do I need runners in addition to tablecloths?",
        answer: "Runners are optional but add a significant layer of visual interest. A tablecloth in your base color plus a runner in a contrasting accent color is the most common and effective approach. It creates a layered, intentional look without overcomplicating the setup. Table runners are available as a separate rental — see our table runners page for available colors and options.",
      },
      {
        question: "Are linens included with table rentals or priced separately?",
        answer: "Linens are priced separately from tables but can be added to any order. We recommend combining tables, chairs, and linens in a single quote — we'll price the complete package together.",
      },
      {
        question: "How do I choose the right linen colors for my event?",
        answer: "Pick two colors — a base and an accent. Keep tablecloths in the base color and runners in the accent. White or ivory base with a colored accent works for almost any event. For quinceañeras and showers, coordinate with your overall color theme. When in doubt, contact us and we'll make recommendations.",
      },
    ],
  },
  {
    slug: "table-runners",
    citySlug: "table-runner-rentals",
    cityMeta: {
      title: "Table Runner Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Satin & fabric table runners delivered to {city}. The perfect finishing touch, freshly pressed and ready to use.",
    },
    cityHeadline: "Table Runner Rentals in {city}",
    citySubheadline:
      "Satin & fabric runners delivered to your {city} venue — the perfect finishing touch.",
    cityIntro:
      "A table runner layered over a tablecloth is the easiest way to add color and texture to your {city} event. Kelari Party Rentals delivers freshly pressed runners in a range of colors, ready to coordinate with your linens, chairs, and décor for your {city} celebration.",
    name: "Table Runners",
    meta: {
      title: "Table Runner Rentals in North County | Kelari Party Rentals",
      description:
        "Satin & fabric table runners in multiple colors for parties and events in Carlsbad, Encinitas, Oceanside, San Marcos & Vista.",
    },
    headline: "Table Runner Rentals",
    subheadline: "Satin & fabric runners in multiple colors — the perfect finishing touch for any table.",
    intro:
      "A table runner is the easiest way to add color, texture, and visual interest to your event setup. Layered over a solid tablecloth, the right runner ties your entire color palette together and elevates any table from functional to styled. Kelari Party Rentals carries satin and fabric runners in a range of colors to coordinate with your tablecloths, chairs, and décor. Every runner arrives freshly laundered and pressed. Share your event palette when you request a quote and we'll recommend the right color combination for your setup.",
    icon: "🎀",
    heroImage: heroImages.tableRunnersNew,
    items: [
      { name: "Table Runner – Off White", description: "10ft satin runner in off white. Coordinates with ivory and white tablecloths.", image: runnerWhite, bookingUrl: "https://rentals.kelaripartyrentals.com/products/table-runner-10ft-off-white" },
      { name: "Table Runner – Pink", description: "10ft runner in pink. Popular for baby showers and birthday celebrations.", image: runnerPink, bookingUrl: "https://rentals.kelaripartyrentals.com/products/table-runner-10ft-pink" },
      { name: "Table Runner – Baby Blue", description: "10ft runner in baby blue. Great for baby showers and outdoor events.", image: runnerBabyBlue, bookingUrl: "https://rentals.kelaripartyrentals.com/products/table-runner-10ft-baby-blue" },
      { name: "Table Runner – Tan", description: "10ft runner in tan. Versatile neutral that pairs with almost any tablecloth.", image: runnerIvory, bookingUrl: "https://rentals.kelaripartyrentals.com/products/table-runner-10ft-tan" },
      { name: "Table Runner – Green", description: "10ft runner in green. Fresh accent for garden parties and outdoor celebrations.", image: runnerGreen, bookingUrl: "https://rentals.kelaripartyrentals.com/products/table-runner-10ft-green" },
      { name: "See It All Come Together", description: "See how our runners, linens, and chairs create a complete tablescape for any event.", image: eventSetupTablescape },
    ],
    whatsIncluded: [
      { icon: "✅", title: "Freshly Laundered", description: "Every runner is washed, pressed, and inspected before delivery — no wrinkles, no stains." },
      { icon: "🎨", title: "Color Coordination", description: "Share your event palette and we'll recommend the right runner color to complement your tablecloths and décor." },
      { icon: "🚚", title: "Delivery Available", description: "Runners are delivered to your venue across North County San Diego as part of your rental order." },
      { icon: "🔧", title: "Freshly Pressed & Ready", description: "Every runner arrives clean and pressed — ready to lay the moment you're set up." },
      { icon: "🧹", title: "Post-Event Collection", description: "We collect all runners after your event. No washing, no returning — we handle everything." },
      { icon: "📋", title: "Multiple Colors Available", description: "Off white, pink, baby blue, tan, and green — coordinate with any event theme or color palette." },
    ],
    relatedServices: [
      "engagement-party-rentals",
      "quinceanera-rentals",
      "baby-shower-rentals",
    ],
    faqs: [
      { question: "Do I need a runner if I already have a tablecloth?", answer: "Runners are optional but add a significant layer of visual interest. A tablecloth in your base color plus a runner in a contrasting accent is the most common and effective approach — it creates a layered, intentional look that photographs beautifully." },
      { question: "What colors of table runners do you carry?", answer: "We currently carry off white, pink, baby blue, tan, and green. Contact us with your event palette and we'll confirm which color best coordinates with your tablecloths and décor." },
      { question: "Can I combine runners with tablecloths in one order?", answer: "Yes — most linen orders combine tablecloths and runners together. We price the complete linen package and deliver everything in one order." },
      { question: "How long are the table runners?", answer: "Our runners are 10 feet long and work well across 6ft and 8ft rectangular tables, with a natural drape on each end." },
      { question: "How far in advance should I book table runners?", answer: "We recommend booking 1–2 weeks in advance for most events and 2–3 weeks during peak season (May–September) to ensure your preferred color is available." },
    ],
  },
    {
    slug: "decorations",
    citySlug: "decoration-rentals",
    cityMeta: {
      title: "Decoration Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Centerpieces, arches, backdrops & accents arriving soon for {city} events.",
    },
    cityHeadline: "Decoration Rentals in {city}",
    citySubheadline:
      "Centerpieces, arches, backdrops & accents for your {city} celebration.",
    cityIntro:
      "Decoration rentals are arriving soon for {city} events — contact us to reserve early access for centerpieces, balloon arches, and backdrop frames.",
    name: "Decorations",
    comingSoon: true,
    hidden: true,
    meta: {
      title: "Decoration Rentals in North County | Kelari Party Rentals",
      description:
        "Decoration rentals arriving soon — centerpieces, arches, backdrops & accents for parties in Carlsbad, Encinitas, Oceanside, San Marcos & Vista.",
    },
    headline: "Decoration Rentals",
    subheadline: "Centerpieces, arches, backdrops & accents to transform any space into a celebration-ready venue.",
    intro:
      "Decorations define the visual identity of your event and create the moments guests remember and photograph. The right centerpiece, backdrop, or arch takes a setup from functional to memorable. Kelari Party Rentals carries centerpieces, balloon arches, backdrop frames, vase collections, and accent pieces for events of every style across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. We deliver every decoration ready to position, coordinate with your linen and tableware choices to create a cohesive look, and collect everything after your event. You don't source, transport, or arrange a single piece — we handle it all.",
    icon: "✨",
    heroImage: heroImages.decorationsNew,
    items: [
      {
        name: "Centerpiece",
        description: "Floral or lantern centerpieces for table focal points.",
      },
      {
        name: "Balloon Arch",
        description: "Custom color balloon arch for photo backdrops and entrances.",
      },
      {
        name: "Backdrop Frame",
        description: "Adjustable frame for fabric, balloon, or floral backdrops.",
      },
      {
        name: "Vase Collection",
        description: "Glass cylinder and mercury vases in assorted sizes.",
      },
    ],
    whatsIncluded: [
      {
        icon: "✨",
        title: "Styled Placement",
        description: "Every decoration arrives ready to position — centerpieces, backdrop frames, and arches, all delivered and ready for you to place.",
      },
      {
        icon: "🎨",
        title: "Color Coordination",
        description: "We coordinate décor with your linen and tableware choices to create a cohesive visual look across the entire setup.",
      },
      {
        icon: "🚚",
        title: "Delivery Available",
        description: "All decoration rentals are delivered to your venue across North County San Diego as part of your order.",
      },
      {
        icon: "📸",
        title: "Photo-Ready Results",
        description: "Every piece is delivered ready to create visual impact — clean lines, balanced composition, a polished finish you control.",
      },
      {
        icon: "🧹",
        title: "Post-Event Collection",
        description: "We collect all decoration rentals after your event. No disassembly or packing for you.",
      },
      {
        icon: "📋",
        title: "Custom Packages",
        description: "Decorations can be combined with tables, linens, and tableware in a single coordinated package.",
      },
    ],
    relatedServices: [
      "birthday-party-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "What decoration rentals are most popular for baby showers?",
        answer: "Centerpieces and backdrop frames are the most requested decoration rentals for baby showers. A floral or lantern centerpiece on each guest table plus a styled backdrop behind the gift or food table creates the visual focal points guests photograph most. Coordinating the décor with your linen colors ties the whole setup together.",
      },
      {
        question: "Do you offer balloon arches for birthday parties?",
        answer: "Yes — we carry balloon arches in custom color combinations for birthdays, graduation parties, and quinceañeras. Balloon arches work well as entrance arches, photo backdrop structures, and dessert table accents. Specify your color palette when requesting a quote.",
      },
      {
        question: "What is a backdrop frame and what can I do with it?",
        answer: "A backdrop frame is an adjustable metal or PVC structure that supports fabric drapes, balloon installations, floral walls, or printed vinyl backdrops. It creates a defined focal point for photos behind the head table, cake table, or main entrance. The frame is the structure — the backdrop material can be customized to your event style.",
      },
      {
        question: "Can decorations be combined with linens and tableware in one order?",
        answer: "Yes — most of our full-service orders combine tables, chairs, linens, and decorations in one package. One delivery, one pickup. Request a quote with your full list and we'll coordinate everything.",
      },
      {
        question: "How far in advance should I book decoration rentals?",
        answer: "We recommend 2–3 weeks for most decoration orders and 4–6 weeks for peak season events (May–September) or events requiring custom balloon colors. Backdrop frames and centerpiece styles have limited inventory — earlier booking gives you more options.",
      },
    ],
  },
  {
    slug: "marquee-letters",
    citySlug: "marquee-letter-rentals",
    cityMeta: {
      title: "Marquee Letter Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Light-up marquee letters & numbers delivered to {city}. LOVE, BABY, GRAD, CHEERS & custom numbers 0-9.",
    },
    cityHeadline: "Marquee Letter Rentals in {city}",
    citySubheadline:
      "Light-up marquee letters delivered to your {city} celebration.",
    cityIntro:
      "Marquee letters are one of the most photographed pieces at any event. Kelari Party Rentals delivers warm Edison-bulb marquee letters and numbers to celebrations across {city}, fully tested and ready to place.",
    name: "Marquee Letters",
    comingSoon: true,
    meta: {
      title: "Marquee Letter Rentals | North County | Kelari Party Rentals",
      description:
        "Light-up marquee letter and number rentals for parties in Carlsbad, Encinitas, Oceanside, San Marcos & Vista. LOVE, BABY, GRAD, CHEERS & custom numbers 0–9.",
    },
    headline: "Marquee Letter Rentals",
    subheadline: "Light-up marquee letters and numbers that make every celebration photo-ready — delivered to your venue.",
    intro:
      "Marquee letters are one of the most photographed elements at any celebration. A glowing LOVE, BABY, GRAD, or CHEERS sign instantly creates the focal point guests gravitate toward all night. Kelari Party Rentals carries warm Edison-bulb marquee letters and numbers for events across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Every letter arrives fully functional and ready to place, and is collected after your event. Whether you're spelling out a name, a word, or a milestone year, marquee letters elevate any celebration from a party to a moment.",
    icon: "🔤",
    heroImage: heroImages.marqueeLettersNew,
    items: [
      {
        name: "LOVE",
        description: "Four-letter marquee sign with warm Edison bulbs. Perfect for engagement parties, anniversaries, and weddings.",
        image: marqueeLettersHero,
        comingSoon: true,
      },
      {
        name: "CHEERS",
        description: "Six-letter marquee sign for celebrations, toasts, and milestone events.",
        image: marqueeLettersEvent,
        comingSoon: true,
      },
      {
        name: "BABY",
        description: "Four-letter marquee sign for baby showers and gender reveals.",
        image: marqueeLettersMrMrs,
        comingSoon: true,
      },
      {
        name: "GRAD",
        description: "Four-letter marquee sign for graduation parties and senior celebrations.",
        image: marqueeLettersNumbers,
        comingSoon: true,
      },
      {
        name: "Mr & Mrs",
        description: "Classic Mr & Mrs marquee sign for weddings and bridal events.",
        image: galleryMarquee,
        comingSoon: true, // TODO: no real Mr & Mrs photo exists yet — replace when sourced
      },
      {
        name: "Numbers 0–9",
        description: "Individual number marquee signs for milestone birthdays, anniversaries, and graduation years. Mix and match any combination.",
        image: marqueeLettersGrad,
        comingSoon: true,
      },
    ],
    whatsIncluded: [
      {
        icon: "🔤",
        title: "Ready to Place",
        description: "Every marquee letter arrives fully charged and ready to position exactly where you want it — no assembly hassle.",
      },
      {
        icon: "✅",
        title: "Tested Before Delivery",
        description: "Every letter and number is tested before it leaves our warehouse — no dark bulbs or failed connections at party time.",
      },
      {
        icon: "🚚",
        title: "Delivery Available",
        description: "All marquee letter rentals are delivered to your venue across North County San Diego as part of your order.",
      },
      {
        icon: "📸",
        title: "Photo-Ready Design",
        description: "Every letter is built for maximum visual impact — backdrop-facing, properly spaced, and styled to photograph beautifully.",
      },
      {
        icon: "🧹",
        title: "Post-Event Collection",
        description: "We collect all marquee letters after your event. No packing, no loading — we handle everything.",
      },
      {
        icon: "📋",
        title: "Mix & Match",
        description: "Combine words and numbers in a single order — GRAD + 2025, BABY + a number, or any custom combination for your event.",
      },
    ],
    relatedServices: [
      "engagement-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "What marquee letter words do you carry?",
        answer: "We carry LOVE, CHEERS, BABY, GRAD, PROM, and Mr & Mrs as complete word sets, plus individual numbers 0–9 for milestone years and ages. Contact us to confirm availability for your event date.",
      },
      {
        question: "How tall are the marquee letters?",
        answer: "Our marquee letters are approximately 2–3 feet tall — large enough to be visible and impactful across the venue while still being proportional in photos and backdrops.",
      },
      {
        question: "Do marquee letters need a power source?",
        answer: "Yes — our marquee letters use standard 120V power. Confirm the location of your nearest indoor or outdoor outlet when booking and we'll bring appropriate extension cabling to reach it.",
      },
      {
        question: "Where should I position marquee letters at my event?",
        answer: "The most popular placements are behind the head table, next to the cake or dessert table, in front of a backdrop, or at the venue entrance. We'll recommend the best position based on your layout when we deliver.",
      },
      {
        question: "Can marquee letters be added to an existing rental order?",
        answer: "Yes — marquee letters can be added to any order that includes tables, chairs, tents, or linens. Everything is delivered together in a single order. Request a quote with your complete rental list and we'll price everything together.",
      },
    ],
  },
  {
    slug: "add-ons",
    citySlug: "party-add-on-rentals",
    cityMeta: {
      title: "Party Add-On Rentals in {city}, CA | Kelari Party Rentals",
      description:
        "Balloon arch stands, column kits & backdrop frames delivered to {city} events.",
    },
    cityHeadline: "Party Add-Ons in {city}",
    citySubheadline:
      "Balloon arch stands, column kits & backdrop frames delivered to your {city} event.",
    cityIntro:
      "Add-ons are the finishing pieces that take a standard setup to the next level. Kelari Party Rentals delivers balloon arch stands, column kits, and backdrop frames to events across {city}, ready for you to assemble and style.",
    name: "Add-Ons",
    meta: {
      title: "Party Add-On Rentals in North County | Kelari Party Rentals",
      description:
        "Balloon arch stands, balloon column kits, wooden backdrops & wooden table covers for parties in Carlsbad, Encinitas, Oceanside, San Marcos & Vista.",
    },
    headline: "Party Add-Ons",
    subheadline: "Balloon arch stands, column kits, wooden backdrops & table covers to round out your setup.",
    intro:
      "Add-ons are the finishing pieces that take a standard table-and-chair setup to the next level. Kelari Party Rentals carries balloon arch stands, reusable balloon column kits, wooden backdrop and photo wall frames, and wooden-style table covers for events across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Every add-on arrives clean and ready for you to place and assemble at your venue, and is picked up after your event. Pair them with your tables, chairs, and linens for a complete, coordinated look.",
    icon: "🎈",
    heroImage: heroImages.decorationsNew,
    items: [
      {
        name: "Over-the-Table Balloon Arch Stand",
        image: addOnBalloonSquareFrame,
        description: "Adjustable rod stand with clamps, 31\"–110\" length, 31\"–64\" height. Mounts directly over a table for balloon arch displays.",
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/walk-through-balloon-arch-stand-8-7ft",
      },
      {
        name: "Balloon Arch Stand (7.5ft Round Backdrop Frame)",
        image: addOnBalloonCircleFrame,
        description: "Adjustable half-circle arch with a large round backdrop frame — ideal for photo walls and entrances.",
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/round-balloon-backdrop-stand-7-5ft",
      },
      {
        name: "Balloon Column Kit (2-Set)",
        image: addOnBalloonPillars,
        description: "Reusable metal column kit with base, set of 2, for birthdays, weddings, graduations, and showers.",
        bookingUrl: "https://rentals.kelaripartyrentals.com/products/balloon-column-kit-pair",
      },
      {
        name: "Wooden Backdrop / Photo Wall",
        image: addOnWoodBackdrop,
        description: "Wooden balloon arch and photo wall backdrop for event styling.",
        bookingUrl: "https://rentals.kelaripartyrentals.com/collections/balloon-display-structures",
        comingSoon: true,
      },
      {
        name: "Wooden Table Covers",
        image: addOnWoodTableCovering,
        description: "Wood-style table covers used in place of traditional linens for a rustic or natural look.",
        bookingUrl: "https://rentals.kelaripartyrentals.com/collections/balloon-display-structures",
        comingSoon: true,
      },
    ],
    whatsIncluded: [
      {
        icon: "🪢",
        title: "Self-Assembly, Made Easy",
        description: "Every add-on arrives clean and ready — stands, frames, and covers are simple to set up yourself at your venue.",
      },
      {
        icon: "🎨",
        title: "Coordinated Styling",
        description: "Add-ons pair with your tables, chairs, and linens to create a cohesive look across your full setup.",
      },
      {
        icon: "🚚",
        title: "Delivery & Pickup",
        description: "All add-on rentals are delivered to your venue and picked up after your event — no hauling for you.",
      },
      {
        icon: "♻️",
        title: "Reusable, Durable Pieces",
        description: "Balloon stands and column kits are built for repeat use across multiple events, holding their shape setup after setup.",
      },
      {
        icon: "📋",
        title: "Custom Packages",
        description: "Add-ons can be combined with tables, chairs, linens, and decorations in a single coordinated order.",
      },
    ],
    relatedServices: [
      "birthday-party-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do I need to assemble the balloon arch stands myself?",
        answer: "Yes — all add-on stands, frames, and covers are delivered clean and ready for you to assemble at your venue. The rod stands and column kits use clamps and bases designed for quick assembly without tools.",
      },
      {
        question: "What sizes do the balloon arch stands come in?",
        answer: "The over-the-table rod stand adjusts from 31\" to 110\" in length and 31\" to 64\" in height. The round backdrop frame stand extends to 7.5ft for a large half-circle arch.",
      },
      {
        question: "Can I use the wooden table covers instead of a linen tablecloth?",
        answer: "Yes — the wooden-style table covers work as a standalone alternative to linens for a more rustic or natural aesthetic, or you can mix and match across tables at the same event.",
      },
      {
        question: "Are the balloon column kits reusable across multiple events?",
        answer: "Yes — the metal column kits with base are built for repeat use and come as a 2-set, 3-in-1 configuration suitable for birthdays, weddings, graduations, and showers.",
      },
      {
        question: "How far in advance should I book add-on rentals?",
        answer: "We recommend booking 1–2 weeks in advance for most events and 2–3 weeks during peak season (May–September) to ensure availability.",
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

/**
 * Replace {city} token in a template string with the given city name.
 * Mirrors services.ts's renderCityTemplate — kept as a separate export
 * here (rather than importing across data files) to avoid a circular
 * dependency between categories.ts and services.ts.
 */
export function renderCategoryCityTemplate(template: string, cityName: string): string {
  return template.replace(/\{city\}/g, cityName);
}
