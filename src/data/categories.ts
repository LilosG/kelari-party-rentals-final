import type { ImageMetadata } from 'astro';
// tables
import tableCocktail from '../assets/images/table-cocktail.png';
import tableCocktailHightop from '../assets/images/table-cocktail-hightop.jpg';
import comingSoonImage from '../assets/images/coming-soon-decorations.png';
import tableRectangularFolding from '../assets/images/table-rectangular-folding.png';
import tableRoundFolding from '../assets/images/table-round-folding.png';
// chairs
import chairChiavariWooden from '../assets/images/chair-chiavari-wooden.png';
import chairWhiteFolding from '../assets/images/chair-white-folding.png';
import chairBrownIvoryCushion from '../assets/images/chair-brown-ivory-cushion.png';
import chairWhiteResinFolding from '../assets/images/chair-white-resin-folding.jpg';
import chairChiavariNoCushion from '../assets/images/chair-chiavari-no-cushion.jpg';
// linens - rectangular tablecloths
import tableclothRectWhiteLong from '../assets/images/tablecloth-rect-white-long.png';
import tableclothRectBlack from '../assets/images/tablecloth-rect-black.png';
import tableclothRectBlackLong from '../assets/images/tablecloth-rect-black-long.png';
import tableclothRectIvory from '../assets/images/tablecloth-rect-ivory.png';
import tableclothRectIvoryLong from '../assets/images/tablecloth-rect-ivory-long.png';
// linens - round tablecloths
import tableclothRoundWhite from '../assets/images/tablecloth-round-white.png';
import tableclothRoundWhiteLarge from '../assets/images/tablecloth-round-white-large.png';
import tableclothRoundBlack from '../assets/images/tablecloth-round-black.png';
import tableclothRoundBlackLarge from '../assets/images/tablecloth-round-black-large.png';
import tableclothRoundIvory from '../assets/images/tablecloth-round-ivory.png';
import tableclothRoundIvoryLarge from '../assets/images/tablecloth-round-ivory-large.png';
// linens - spandex tablecloths
import tableclothSpandexWhite from '../assets/images/tablecloth-spandex-white.png';
import tableclothSpandexBlack from '../assets/images/tablecloth-spandex-black.png';
import tableclothSpandexWhiteLong from '../assets/images/tablecloth-spandex-white-long.png';
import tableclothSpandexWhiteRound from '../assets/images/tablecloth-spandex-white-round.png';
// linens - cocktail covers
import tableclothCocktailWhiteSpandex from '../assets/images/tablecloth-cocktail-white-spandex.png';
import tableclothCocktailBlackSpandex from '../assets/images/tablecloth-cocktail-black-spandex.png';
import tableclothCocktailIvorySpandex from '../assets/images/tablecloth-cocktail-ivory-spandex.png';
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

// ── Types ────────────────────────────────────────────────────────────────────

export interface CategoryItem {
  name: string;
  description: string;
  sizes?: string[];
  image?: ImageMetadata;
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
  meta: {
    title: string;
    description: string;
  };
  headline: string;
  subheadline: string;
  intro: string;
  icon: string;
  items: CategoryItem[];
  whatsIncluded: CategoryIncludedItem[];
  faqs: CategoryFAQ[];
  relatedServices: string[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: "tables",
    name: "Tables",
    meta: {
      title: "Table Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Rectangular, round & cocktail table rentals for parties and events in Carlsbad, Encinitas, Oceanside & San Marcos.",
    },
    headline: "Table Rentals",
    subheadline: "Rectangular, round & cocktail tables for every event size — delivered clean and set up at your venue.",
    intro:
      "Tables are the foundation of every event setup, and getting the right style and quantity makes everything else fall into place. Kelari Party Rentals offers rectangular, round, and cocktail tables for parties of every size across North County San Diego. Every table arrives clean, is set up at your venue by our team, and is picked up after your event — no hauling, no assembly, no cleanup from you. Whether you're hosting a backyard birthday in Carlsbad, a graduation party at a San Marcos park, or a baby shower in Encinitas, we have the right table configuration for your space and guest count.",
    icon: "🪑",
    items: [
      {
        name: '60" Round Folding Table',
        description: "Seats 8–10 guests. Perfect for formal dining, centerpieces, and banquet-style layouts.",
        sizes: ['60"'],
        image: tableRoundFolding,
      },
      {
        name: "6-Foot Rectangular Table",
        description: "Seats 6–8 guests. Great for dining, buffet setups, and gift tables.",
        sizes: ["6 ft"],
        image: tableRectangularFolding,
      },
      {
        name: "8-Foot Rectangular Table",
        description: "Seats 8–10 guests. Ideal for larger dining setups, buffets, and banquets.",
        sizes: ["8 ft"],
        image: tableRectangularFolding,
      },
      {
        name: "Cocktail Table",
        description: "High-top bar-height table for standing receptions, cocktail hours, and lounge setups.",
        sizes: ['30" Round'],
        image: tableCocktailHightop,
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
        description: "Every table is cleaned and inspected before delivery — no surprises on setup day.",
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
    name: "Chairs",
    meta: {
      title: "Chair Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Folding chairs & Chiavari chairs for parties and events in Carlsbad, Encinitas, Oceanside & San Marcos.",
    },
    headline: "Chair Rentals",
    subheadline: "Folding & Chiavari chairs for every style and budget — delivered and set up at your venue.",
    intro:
      "Chair selection does more to set the tone of an event than almost any other rental decision. Standard folding chairs are practical and perfectly appropriate for casual birthdays and park events. Chiavari chairs — gold or silver — elevate the visual presentation of showers, graduation parties, and milestone celebrations significantly. Kelari Party Rentals carries the full range of chair styles for events across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Every chair is delivered clean, set up at your venue, and picked up after your event. One chair per guest is the baseline — we'll help you confirm the right count and style for your event type.",
    icon: "💺",
    items: [
      {
        name: "White Resin Folding Chair",
        description: "Standard white plastic resin folding chair. The most popular chair rental for backyard parties, park events, and casual celebrations.",
        image: chairWhiteResinFolding,
      },
      {
        name: "Chiavari Chair – Light Fruitwood",
        description: "Elegant light fruitwood Chiavari chair without cushion. Clean natural wood finish for a polished, formal look.",
        image: chairChiavariNoCushion,
      },
      {
        name: "Chiavari Chair with Ivory Cushion",
        description: "Light fruitwood Chiavari chair with a 2-inch ivory cushion add-on. Elevated comfort and style for showers, quinceañeras, and milestone events.",
        image: chairChiavariWooden,
      },
      {
        name: "Chiavari Cushion – 2-inch Ivory",
        description: "Add-on ivory cushion for Chiavari chairs. Adds comfort and a polished finish to any formal event setup.",
        image: chairBrownIvoryCushion,
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
    name: "Tents & Canopies",
    meta: {
      title: "Tent & Canopy Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Pop-up canopies and frame tents in multiple sizes for outdoor events in Carlsbad, Encinitas, Oceanside & San Marcos.",
    },
    headline: "Tent & Canopy Rentals",
    subheadline: "Pop-up canopies and frame tents for shade and shelter at any outdoor event.",
    intro:
      "In North County San Diego, a tent or canopy isn't optional for daytime outdoor events — it's what makes the difference between a comfortable celebration and guests checking the time. Kelari Party Rentals carries pop-up canopies and professional frame tents in multiple sizes for backyard parties, park events, and outdoor celebrations across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. We deliver, set up, properly weight and stake every structure, and return for same-day pickup after your event. Whether you need a compact 10x10 canopy for a food station or a 20x40 frame tent for a 100-guest graduation party, we have the right coverage for your venue and guest count.",
    icon: "⛺",
    items: [
      {
        name: "10×10 Pop-Up Canopy",
        description: "Compact canopy for small gatherings and food stations.",
        sizes: ["10×10"],
        image: comingSoonImage,
      },
      {
        name: "10×20 Pop-Up Canopy",
        description: "Extended canopy for buffet lines and mid-size groups.",
        sizes: ["10×20"],
        image: comingSoonImage,
      },
      {
        name: "20×20 Frame Tent",
        description: "Professional frame tent for parties up to 40 guests.",
        sizes: ["20×20"],
        image: comingSoonImage,
      },
      {
        name: "20×40 Frame Tent",
        description: "Large frame tent for events up to 80 guests.",
        sizes: ["20×40"],
        image: comingSoonImage,
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
        title: "Assembled & Anchored",
        description: "Every tent and canopy is fully assembled and properly anchored — weighted or staked based on your surface type.",
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
        question: "Can you set up a tent on artificial turf or concrete?",
        answer: "Yes — we bring weighted bases for artificial turf and concrete surfaces where ground staking isn't possible. Let us know your yard surface when booking and we'll bring the right anchoring equipment.",
      },
      {
        question: "Do I need a tent for an evening party?",
        answer: "Not necessarily — once the sun sets, shade becomes irrelevant and open-sky evening parties with string lights can be beautiful. Tents are most valuable for daytime events between 10am and 4pm when sun and heat are the main comfort factors.",
      },
      {
        question: "Do you deliver tents to parks in Carlsbad and Encinitas?",
        answer: "Yes — we regularly deliver and set up canopies and frame tents at public parks throughout North County San Diego. Most parks require a reservation for events with equipment — confirm your reservation window and we'll coordinate delivery to arrive within it.",
      },
    ],
  },
  {
    slug: "linens",
    name: "Linens",
    meta: {
      title: "Linen Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Tablecloths in dozens of colors for party and event rentals. Delivered across Carlsbad, Encinitas, Oceanside & San Marcos.",
    },
    headline: "Linen Rentals",
    subheadline: "Tablecloths in dozens of colors — freshly laundered and pressed.",
    intro:
      "Linens are the single highest-impact, lowest-cost upgrade available for any event setup. A bare folding table looks like a company picnic. The same table with a floor-length tablecloth looks like an intentional celebration. Kelari Party Rentals carries tablecloths in a wide range of colors and fabrics for events across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Table runners are available separately — browse our full runner selection on the table runners page. Every linen is freshly laundered and pressed before delivery. We help you coordinate colors to your event palette — share your theme and we'll build a complete linen package that ties the whole setup together.",
    icon: "🎀",
    items: [
      // GROUP 1 — Rectangle Tablecloths
      {
        name: "Rectangular Tablecloth",
        description: "Floor-length white polyester tablecloth for 6-ft and 8-ft tables.",
        sizes: ["90×132", "90×156"],
        image: tableclothRectWhiteLong,
      },
      {
        name: "Black Rectangular Tablecloth",
        description: "Floor-length black polyester tablecloth for 6-ft and 8-ft tables.",
        sizes: ["90×132", "90×156"],
        image: tableclothRectBlack,
      },
      {
        name: "Black Rectangular Tablecloth (Long)",
        description: "Extended floor-length black tablecloth for 8-ft tables with a full trailing drop.",
        sizes: ["90×156"],
        image: tableclothRectBlackLong,
      },
      {
        name: "Ivory Rectangular Tablecloth",
        description: "Floor-length ivory polyester tablecloth for 6-ft and 8-ft tables.",
        sizes: ["90×132", "90×156"],
        image: tableclothRectIvory,
      },
      {
        name: "Ivory Rectangular Tablecloth (Long)",
        description: "Extended floor-length ivory tablecloth for 8-ft tables with a full trailing drop.",
        sizes: ["90×156"],
        image: tableclothRectIvoryLong,
      },
      // GROUP 2 — Round Tablecloths
      {
        name: "Round Tablecloth",
        description: 'Floor-length white polyester tablecloth for 60" round tables.',
        sizes: ['120"'],
        image: tableclothRoundWhite,
      },
      {
        name: "White Round Tablecloth (Large)",
        description: 'Extra-full floor-length white tablecloth for 60" round tables with generous drop.',
        sizes: ['132"'],
        image: tableclothRoundWhiteLarge,
      },
      {
        name: "Black Round Tablecloth",
        description: 'Floor-length black polyester tablecloth for 60" round tables.',
        sizes: ['120"'],
        image: tableclothRoundBlack,
      },
      {
        name: "Black Round Tablecloth (Large)",
        description: 'Extra-full floor-length black tablecloth for 60" round tables with generous drop.',
        sizes: ['132"'],
        image: tableclothRoundBlackLarge,
      },
      {
        name: "Ivory Round Tablecloth",
        description: 'Floor-length ivory polyester tablecloth for 60" round tables.',
        sizes: ['120"'],
        image: tableclothRoundIvory,
      },
      {
        name: "Ivory Round Tablecloth (Large)",
        description: 'Extra-full floor-length ivory tablecloth for 60" round tables with generous drop.',
        sizes: ['132"'],
        image: tableclothRoundIvoryLarge,
      },
      // GROUP 3 — Spandex Covers
      {
        name: "White Spandex Tablecloth",
        description: "Stretch-fit white spandex cover for a sleek, modern fitted look.",
        image: tableclothSpandexWhite,
      },
      {
        name: "White Rectangular Spandex Tablecloth",
        description: "Stretch-fit white spandex cover for rectangular tables — wrinkle-free fitted finish.",
        image: tableclothSpandexWhiteLong,
      },
      {
        name: "White Round Spandex Tablecloth",
        description: "Stretch-fit white spandex cover for round tables — full-length form-fitting look.",
        image: tableclothSpandexWhiteRound,
      },
      {
        name: "Black Spandex Tablecloth",
        description: "Stretch-fit black spandex cover for a clean, tailored look.",
        image: tableclothSpandexBlack,
      },
      // GROUP 4 — Cocktail Covers
      {
        name: "White Cocktail Table Cover",
        description: "Spandex stretch cover for cocktail-height tables. Clean white finish for upscale setups.",
        image: tableclothCocktailWhiteSpandex,
      },
      {
        name: "Black Cocktail Table Cover",
        description: "Spandex stretch cover for cocktail-height tables. Sleek black finish for modern events.",
        image: tableclothCocktailBlackSpandex,
      },
      {
        name: "Ivory Cocktail Table Cover",
        description: "Spandex stretch cover for cocktail-height tables. Warm ivory finish for elegant setups.",
        image: tableclothCocktailIvorySpandex,
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
        title: "Setup Included",
        description: "We dress every table with your linens as part of the setup — you don't fold or place a single cloth.",
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
    name: "Table Runners",
    meta: {
      title: "Table Runner Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Satin & fabric table runners in multiple colors for parties and events in Carlsbad, Encinitas, Oceanside & San Marcos.",
    },
    headline: "Table Runner Rentals",
    subheadline: "Satin & fabric runners in multiple colors — the perfect finishing touch for any table.",
    intro:
      "A table runner is the easiest way to add color, texture, and visual interest to your event setup. Layered over a solid tablecloth, the right runner ties your entire color palette together and elevates any table from functional to styled. Kelari Party Rentals carries satin and fabric runners in a range of colors to coordinate with your tablecloths, chairs, and décor. Every runner arrives freshly laundered and pressed. Share your event palette when you request a quote and we'll recommend the right color combination for your setup.",
    icon: "🎀",
    items: [
      { name: "Table Runner – Off White", description: "10ft satin runner in off white. Coordinates with ivory and white tablecloths.", image: runnerWhite },
      { name: "Table Runner – Pink", description: "10ft runner in pink. Popular for baby showers and birthday celebrations.", image: runnerPink },
      { name: "Table Runner – Baby Blue", description: "10ft runner in baby blue. Great for baby showers and outdoor events.", image: runnerBabyBlue },
      { name: "Table Runner – Tan", description: "10ft runner in tan. Versatile neutral that pairs with almost any tablecloth.", image: runnerIvory },
      { name: "Table Runner – Green", description: "10ft runner in green. Fresh accent for garden parties and outdoor celebrations.", image: runnerGreen },
      { name: "See It All Come Together", description: "See how our runners, linens, and chairs create a complete tablescape for any event.", image: eventSetupTablescape },
    ],
    whatsIncluded: [
      { icon: "✅", title: "Freshly Laundered", description: "Every runner is washed, pressed, and inspected before delivery — no wrinkles, no stains." },
      { icon: "🎨", title: "Color Coordination", description: "Share your event palette and we'll recommend the right runner color to complement your tablecloths and décor." },
      { icon: "🚚", title: "Delivery Available", description: "Runners are delivered to your venue across North County San Diego as part of your rental order." },
      { icon: "🔧", title: "Placed at Setup", description: "We lay every runner on your tables as part of the setup — you don't fold or place a single piece." },
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
    name: "Decorations",
    comingSoon: true,
    meta: {
      title: "Decoration Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Decoration rentals arriving soon to North County San Diego — centerpieces, arches, backdrops & accents for parties in Carlsbad, Encinitas, Oceanside & San Marcos.",
    },
    headline: "Decoration Rentals",
    subheadline: "Centerpieces, arches, backdrops & accents to transform any space into a celebration-ready venue.",
    intro:
      "Decorations define the visual identity of your event and create the moments guests remember and photograph. The right centerpiece, backdrop, or arch takes a setup from functional to memorable. Kelari Party Rentals carries centerpieces, balloon arches, backdrop frames, vase collections, and accent pieces for events of every style across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. We deliver and position every decoration as part of the setup, coordinate with your linen and tableware choices to create a cohesive look, and collect everything after your event. You don't source, transport, or arrange a single piece — we handle it all.",
    icon: "✨",
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
        description: "We position every decoration as part of the setup — centerpieces on tables, backdrop frames assembled, arches in place.",
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
        description: "Every setup is arranged for visual impact — clean lines, balanced composition, and a polished finish.",
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
    name: "Marquee Letters",
    meta: {
      title: "Marquee Letter Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Light-up marquee letter and number rentals for parties and events in Carlsbad, Encinitas, Oceanside & San Marcos. LOVE, BABY, GRAD, CHEERS & custom numbers 0–9.",
    },
    headline: "Marquee Letter Rentals",
    subheadline: "Light-up marquee letters and numbers that make every celebration photo-ready — delivered and positioned at your venue.",
    intro:
      "Marquee letters are one of the most photographed elements at any celebration. A glowing LOVE, BABY, GRAD, or CHEERS sign instantly creates the focal point guests gravitate toward all night. Kelari Party Rentals carries warm Edison-bulb marquee letters and numbers for events across Carlsbad, Encinitas, Oceanside, San Marcos, and Vista. Every letter arrives fully functional, is positioned at your venue by our team, and is collected after your event. Whether you're spelling out a name, a word, or a milestone year, marquee letters elevate any setup from a party to a moment.",
    icon: "🔤",
    items: [
      {
        name: "LOVE",
        description: "Four-letter marquee sign with warm Edison bulbs. Perfect for engagement parties, anniversaries, and weddings.",
        image: marqueeLettersHero,
      },
      {
        name: "CHEERS",
        description: "Six-letter marquee sign for celebrations, toasts, and milestone events.",
        image: marqueeLettersEvent,
      },
      {
        name: "BABY",
        description: "Four-letter marquee sign for baby showers and gender reveals.",
        image: galleryMarquee,
      },
      {
        name: "GRAD",
        description: "Four-letter marquee sign for graduation parties and senior celebrations.",
        image: marqueeLettersGrad,
      },
      {
        name: "Mr & Mrs",
        description: "Classic Mr & Mrs marquee sign for weddings and bridal events.",
        image: marqueeLettersMrMrs,
      },
      {
        name: "Numbers 0–9",
        description: "Individual number marquee signs for milestone birthdays, anniversaries, and graduation years. Mix and match any combination.",
        image: marqueeLettersNumbers,
      },
    ],
    whatsIncluded: [
      {
        icon: "🔤",
        title: "Positioned at Your Venue",
        description: "We deliver and position every marquee letter exactly where you want it — no assembly or hauling for you.",
      },
      {
        icon: "✅",
        title: "Tested Before We Leave",
        description: "Every letter and number is tested on-site before we leave your venue — no dark bulbs or failed connections at party time.",
      },
      {
        icon: "🚚",
        title: "Delivery Available",
        description: "All marquee letter rentals are delivered to your venue across North County San Diego as part of your order.",
      },
      {
        icon: "📸",
        title: "Photo-Ready Setup",
        description: "We position letters for maximum visual impact — backdrop-facing, properly spaced, and styled to photograph beautifully.",
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
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
