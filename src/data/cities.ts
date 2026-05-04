// ── Types ────────────────────────────────────────────────────────────────────

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  state: string;
  zip: string[];
  meta: {
    title: string;
    description: string;
  };
  headline: string;
  subheadline: string;
  intro: string;
  neighborhoods: string[];
  parks: string[];
  localProof: string;
  deliveryNote: string;
  services: string[];
  faqs: CityFAQ[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const cities: City[] = [
  {
    slug: "carlsbad",
    name: "Carlsbad",
    county: "San Diego",
    state: "CA",
    zip: ["92008", "92009", "92010", "92011"],
    meta: {
      title: "Party Rentals in Carlsbad CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Carlsbad. Serving the Village, Bressi Ranch, La Costa & Aviara.",
    },
    headline: "Carlsbad Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your Carlsbad venue — stress-free.",
    intro:
      "From beachside celebrations at Carlsbad State Beach to backyard gatherings in La Costa, Kelari Party Rentals is Carlsbad's go-to source for tables, chairs, tents, linens, and event décor. We deliver, set up, and pick up so you can focus on your guests.",
    neighborhoods: [
      "Carlsbad Village",
      "Bressi Ranch",
      "La Costa",
      "Aviara",
      "Calavera Hills",
      "Carlsbad Ranch",
      "Olde Carlsbad",
      "Terramar",
    ],
    parks: [
      "Poinsettia Park",
      "Alga Norte Community Park",
      "Leo Carrillo Ranch Historic Park",
      "Holiday Park",
      "Stagecoach Park",
      "Carlsbad State Beach",
      "Hosp Grove Park",
    ],
    localProof:
      "Based right here on El Camino Real, we've helped hundreds of Carlsbad families celebrate birthdays, baby showers, and graduations with hassle-free rental packages.",
    deliveryNote:
      "Delivery available throughout all Carlsbad zip codes — 92008, 92009, 92010, and 92011. Complimentary warehouse pickup available at our Carlsbad location.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Carlsbad?",
        answer:
          "Yes — we deliver throughout Carlsbad including the Village, Bressi Ranch, La Costa, Aviara, and all surrounding neighborhoods. Delivery is priced by distance and quoted upfront. Complimentary warehouse pickup is always available at our Carlsbad location.",
      },
      {
        question: "Can I rent tables and chairs for a party at a Carlsbad park?",
        answer:
          "Absolutely. We regularly deliver to Poinsettia Park, Alga Norte, Holiday Park, Stagecoach Park, and other Carlsbad parks. We handle the setup and teardown so you can enjoy the event.",
      },
      {
        question: "How far in advance should I book party rentals in Carlsbad?",
        answer:
          "We recommend booking at least 1–2 weeks ahead, especially during peak season (May–October). Last-minute requests are welcome — call us to check availability.",
      },
      {
        question: "What areas of Carlsbad do you serve?",
        answer:
          "We serve every neighborhood in Carlsbad — from Olde Carlsbad and the Village to Calavera Hills, La Costa, Aviara, Bressi Ranch, Terramar, and Carlsbad Ranch.",
      },
    ],
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    county: "San Diego",
    state: "CA",
    zip: ["92023", "92024"],
    meta: {
      title: "Party Rentals in Encinitas CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Encinitas. Serving Leucadia, Cardiff, Olivenhain & New Encinitas.",
    },
    headline: "Encinitas Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your Encinitas venue — stress-free.",
    intro:
      "Whether you're hosting a laid-back gathering in Leucadia or an elegant celebration in Olivenhain, Kelari Party Rentals brings everything you need to your door. Tables, chairs, tents, linens, and décor — delivered, set up, and picked up.",
    neighborhoods: [
      "Leucadia",
      "Cardiff-by-the-Sea",
      "Olivenhain",
      "New Encinitas",
      "Old Encinitas",
      "Village Park",
    ],
    parks: [
      "Moonlight State Beach",
      "San Elijo Lagoon",
      "Encinitas Community Park",
      "Cottonwood Creek Park",
      "Orpheus Park",
      "Glen Park",
    ],
    localProof:
      "Just a short drive from our Carlsbad headquarters, Encinitas is one of our most-served communities. From Leucadia bungalow parties to Cardiff seaside events, we know the area inside out.",
    deliveryNote:
      "Delivery available to all Encinitas neighborhoods — Leucadia, Cardiff, Olivenhain, and beyond.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Encinitas?",
        answer:
          "Yes — we deliver throughout Encinitas including Leucadia, Cardiff-by-the-Sea, Olivenhain, Old Encinitas, and New Encinitas. Delivery is priced by distance and quoted upfront.",
      },
      {
        question: "Can you set up party rentals at Moonlight Beach or Encinitas parks?",
        answer:
          "We regularly set up at Encinitas Community Park, Cottonwood Creek Park, and other local venues. For beach events at Moonlight, we can deliver to the nearest access point.",
      },
      {
        question: "How far in advance should I book rentals in Encinitas?",
        answer:
          "We suggest booking 1–2 weeks in advance, especially for summer events. Contact us for last-minute availability — we'll do our best to accommodate.",
      },
      {
        question: "What party rental items do you offer in Encinitas?",
        answer:
          "We offer tables, chairs, tents, canopies, linens, table runners, lighting, and décor. Browse our full inventory or request a custom quote for your Encinitas event.",
      },
    ],
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    county: "San Diego",
    state: "CA",
    zip: ["92049", "92054", "92056", "92057", "92058"],
    meta: {
      title: "Party Rentals in Oceanside CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Oceanside. Serving Downtown, South O, Fire Mountain & Rancho Del Oro.",
    },
    headline: "Oceanside Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your Oceanside venue — stress-free.",
    intro:
      "Oceanside's vibrant community deserves vibrant celebrations. From pier-adjacent parties downtown to backyard barbecues in Rancho Del Oro, Kelari Party Rentals provides everything you need — tables, chairs, tents, linens, and décor, delivered and set up.",
    neighborhoods: [
      "Downtown Oceanside",
      "South Oceanside",
      "Fire Mountain",
      "Rancho Del Oro",
      "Mission Mesa",
      "Peacock Hills",
      "San Luis Rey",
      "Morro Hills",
    ],
    parks: [
      "Buddy Todd Park",
      "Guajome Regional Park",
      "Buccaneer Park",
      "Melba Bishop Recreation Center",
      "Libby Lake Park",
      "Oceanside Pier Amphitheatre",
    ],
    localProof:
      "We've served families across Oceanside for birthdays, graduations, and community events. From South O to San Luis Rey, our team knows Oceanside's neighborhoods and venues.",
    deliveryNote:
      "Delivery available across all Oceanside zip codes — 92049, 92054, 92056, 92057, and 92058.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Oceanside?",
        answer:
          "Yes — we deliver throughout Oceanside including Downtown, South O, Fire Mountain, Rancho Del Oro, Mission Mesa, and all surrounding areas. Delivery is priced by distance and quoted upfront.",
      },
      {
        question: "Can I rent party supplies for an event at an Oceanside park?",
        answer:
          "Absolutely. We deliver to Buddy Todd Park, Guajome Regional Park, Buccaneer Park, and other Oceanside parks. We handle setup and teardown for you.",
      },
      {
        question: "What's the delivery range from your Carlsbad location to Oceanside?",
        answer:
          "Oceanside is just minutes from our Carlsbad headquarters. Delivery is free to all Oceanside neighborhoods — no extra charge.",
      },
      {
        question: "Do you rent tents and canopies for Oceanside backyard parties?",
        answer:
          "Yes — we carry pop-up canopies and frame tents in multiple sizes, perfect for backyard parties in Oceanside. We deliver, set up, and pick up after your event.",
      },
    ],
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    county: "San Diego",
    state: "CA",
    zip: ["92069", "92078", "92096"],
    meta: {
      title: "Party Rentals in San Marcos CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in San Marcos. Serving Lake San Marcos, Twin Oaks Valley, Rancho Santa Fe Road & more.",
    },
    headline: "San Marcos Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your San Marcos venue — stress-free.",
    intro:
      "San Marcos families love celebrating — and Kelari Party Rentals makes it easy. Whether you're hosting at home in Twin Oaks Valley or throwing a birthday party at a local park, we deliver tables, chairs, tents, linens, and décor right to your venue.",
    neighborhoods: [
      "Lake San Marcos",
      "Twin Oaks Valley",
      "Rancho Santa Fe Road",
      "San Elijo Hills",
      "Discovery Hills",
      "Woodland Park",
      "Richmar",
    ],
    parks: [
      "Bradley Park",
      "Woodland Park",
      "Jack's Pond Park",
      "Helen Bougher Memorial Park",
      "Lux Canyon Park",
      "San Marcos Community Center",
    ],
    localProof:
      "From community celebrations at Bradley Park to intimate gatherings in Lake San Marcos, we've been the trusted party rental provider for San Marcos families and event planners.",
    deliveryNote:
      "Delivery available throughout San Marcos — 92069, 92078, and 92096.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to San Marcos?",
        answer:
          "Yes — we deliver throughout San Marcos including Lake San Marcos, Twin Oaks Valley, San Elijo Hills, Discovery Hills, and all surrounding neighborhoods. Delivery is priced by distance and quoted upfront.",
      },
      {
        question: "Can you deliver to San Marcos parks?",
        answer:
          "Absolutely. We regularly deliver to Bradley Park, Woodland Park, Jack's Pond Park, and other San Marcos parks and community spaces.",
      },
      {
        question: "How early should I book party rentals for a San Marcos event?",
        answer:
          "We recommend 1–2 weeks advance notice, especially during spring and summer. Contact us anytime — we accommodate last-minute requests when inventory allows.",
      },
      {
        question: "What sizes of tables and chairs do you rent in San Marcos?",
        answer:
          "We offer 6-foot and 8-foot rectangular tables, 60-inch round tables, folding chairs, Chiavari chairs, and kids' tables and chairs — all available for delivery in San Marcos.",
      },
    ],
  },
  {
    slug: "bressi-ranch",
    name: "Bressi Ranch",
    county: "San Diego",
    state: "CA",
    zip: ["92010"],
    meta: {
      title: "Party Rentals in Bressi Ranch Carlsbad CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Bressi Ranch, Carlsbad. Your neighborhood party rental team — stress-free.",
    },
    headline: "Bressi Ranch Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your Bressi Ranch venue — stress-free.",
    intro:
      "Bressi Ranch's beautiful planned community is one of Carlsbad's most popular spots for backyard celebrations and neighborhood gatherings. Kelari Party Rentals delivers tables, chairs, tents, linens, and décor right to your Bressi Ranch home — we set up and pick up so you can enjoy every moment.",
    neighborhoods: [
      "Bressi Ranch Village",
      "Bressi Ranch West",
      "Bressi Ranch East",
      "La Costa Meadows",
      "Rancho Carlsbad",
    ],
    parks: [
      "Bressi Ranch Community Park",
      "Alga Norte Community Park",
      "Poinsettia Park",
      "Stagecoach Park",
    ],
    localProof:
      "We've served dozens of Bressi Ranch families for birthdays, baby showers, and graduation parties. Our Carlsbad headquarters is just minutes away — same-day delivery is often possible.",
    deliveryNote:
      "Delivery available throughout Bressi Ranch and all surrounding Carlsbad zip codes — 92010.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Bressi Ranch?",
        answer:
          "Yes — we deliver throughout Bressi Ranch. Our Carlsbad headquarters is just minutes away. Delivery is priced by distance and quoted upfront. Complimentary warehouse pickup is always available.",
      },
      {
        question: "Can you set up party rentals at Bressi Ranch Community Park?",
        answer:
          "Absolutely. We regularly deliver to Bressi Ranch Community Park and nearby Alga Norte and Poinsettia Park. We handle full setup and teardown so you can focus on your guests.",
      },
      {
        question: "What party rental items are available for Bressi Ranch events?",
        answer:
          "We offer tables, chairs, tents, canopies, linens, table runners, and décor. Browse our inventory or request a custom quote.",
      },
      {
        question: "How far in advance should I book for a Bressi Ranch party?",
        answer:
          "We recommend booking 1–2 weeks ahead, especially during peak season. Contact us for last-minute availability — we accommodate requests whenever inventory allows.",
      },
    ],
  },
  {
    slug: "la-costa",
    name: "La Costa",
    county: "San Diego",
    state: "CA",
    zip: ["92009"],
    meta: {
      title: "Party Rentals in La Costa Carlsbad CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in La Costa, Carlsbad. Full-service party rentals for La Costa homes and venues.",
    },
    headline: "La Costa Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your La Costa venue — stress-free.",
    intro:
      "La Costa is one of North County San Diego's most sought-after communities — and Kelari Party Rentals is proud to serve it. From elegant backyard celebrations to casual family gatherings, we deliver everything you need: tables, chairs, tents, linens, and décor. We set up, you celebrate, we pick up.",
    neighborhoods: [
      "La Costa Valley",
      "La Costa Oaks",
      "La Costa Greens",
      "La Costa Ridge",
      "La Costa Meadows",
      "Pacific Rim",
    ],
    parks: [
      "La Costa Canyon Park",
      "Alga Norte Community Park",
      "Stagecoach Park",
      "Poinsettia Park",
      "Calavera Hills Community Park",
    ],
    localProof:
      "La Costa is one of our most-requested delivery areas. From La Costa Valley to La Costa Oaks, we've helped hundreds of families celebrate life's biggest moments with hassle-free rentals.",
    deliveryNote:
      "Delivery available throughout La Costa and all Carlsbad zip codes — 92009.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to La Costa?",
        answer:
          "Yes — we deliver throughout La Costa including La Costa Valley, La Costa Oaks, La Costa Greens, La Costa Ridge, and all surrounding neighborhoods. Delivery is priced by distance and quoted upfront.",
      },
      {
        question: "Can you deliver to La Costa parks and community spaces?",
        answer:
          "Absolutely. We regularly deliver to La Costa Canyon Park, Alga Norte, Stagecoach Park, and other nearby venues. Full setup and teardown included.",
      },
      {
        question: "How early should I book party rentals in La Costa?",
        answer:
          "We recommend 1–2 weeks advance notice, especially during spring and summer. Contact us anytime for last-minute availability.",
      },
      {
        question: "What rental items do you offer for La Costa events?",
        answer:
          "Tables, chairs, tents, canopies, linens, table runners, lighting, and décor — delivered to your La Costa venue. Request a custom quote for your event.",
      },
    ],
  },
  {
    slug: "olde-carlsbad",
    name: "Olde Carlsbad",
    county: "San Diego",
    state: "CA",
    zip: ["92008"],
    meta: {
      title: "Party Rentals in Olde Carlsbad CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Olde Carlsbad. Local party rental experts serving the heart of Carlsbad.",
    },
    headline: "Olde Carlsbad Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your Olde Carlsbad venue — stress-free.",
    intro:
      "Olde Carlsbad's charming neighborhoods and tree-lined streets are the perfect backdrop for memorable celebrations. Kelari Party Rentals delivers tables, chairs, tents, linens, and décor directly to your Olde Carlsbad home or venue — we handle setup and pickup so you can focus on your guests.",
    neighborhoods: [
      "Carlsbad Village",
      "Harding Street",
      "Magnolia Avenue",
      "Jefferson Street",
      "Pine Avenue",
      "Elm Avenue",
    ],
    parks: [
      "Holiday Park",
      "Hosp Grove Park",
      "Pine Avenue Park",
      "Carlsbad State Beach",
      "Garfield Park",
    ],
    localProof:
      "Based right here in Carlsbad, we know Olde Carlsbad's neighborhoods like our own backyard. From Village bungalow parties to Holiday Park celebrations, we've served this community for years.",
    deliveryNote:
      "Delivery available throughout Olde Carlsbad and the Carlsbad Village area — zip code 92008.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Olde Carlsbad?",
        answer:
          "Yes — we deliver throughout Olde Carlsbad and the surrounding Village area. Our headquarters is just minutes away. Delivery is priced by distance and quoted upfront.",
      },
      {
        question: "Can you set up party rentals at Holiday Park or Hosp Grove?",
        answer:
          "Absolutely. We regularly deliver to Holiday Park, Hosp Grove, and Pine Avenue Park. We handle all setup and teardown — you just show up and celebrate.",
      },
      {
        question: "What party rental items are available in Olde Carlsbad?",
        answer:
          "We offer tables, chairs, tents, canopies, linens, table runners, and décor — delivered to your Olde Carlsbad location.",
      },
      {
        question: "How do I book party rentals for an Olde Carlsbad event?",
        answer:
          "Request a free quote online or call us directly. We recommend booking 1–2 weeks ahead, but we welcome last-minute requests — contact us to check availability.",
      },
    ],
  },
  {
    slug: "aviara",
    name: "Aviara",
    county: "San Diego",
    state: "CA",
    zip: ["92011"],
    meta: {
      title: "Party Rentals in Aviara Carlsbad CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Aviara, Carlsbad. Elegant full-service party rentals for Aviara homes and venues.",
    },
    headline: "Aviara Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your Aviara venue — stress-free.",
    intro:
      "Aviara is one of Carlsbad's most beautiful master-planned communities, and its stunning homes and manicured surroundings set the stage for truly special celebrations. Kelari Party Rentals provides tables, chairs, tents, linens, and décor with professional delivery available across Carlsbad and surrounding communities.",
    neighborhoods: [
      "Aviara Oaks",
      "Aviara Point",
      "Aviara at Cabrillo",
      "Four Seasons Aviara",
      "Batiquitos Lagoon",
      "Pacific Coast Estates",
    ],
    parks: [
      "Batiquitos Lagoon Trail",
      "Poinsettia Park",
      "Alga Norte Community Park",
      "Aviara Community Park",
      "Cannon Road Park",
    ],
    localProof:
      "Aviara's elegant homes and resort setting attract some of our most memorable events. From intimate garden parties to full backyard celebrations, Kelari Party Rentals delivers the quality Aviara residents expect.",
    deliveryNote:
      "Delivery available throughout Aviara and all Carlsbad zip codes — 92011.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Aviara?",
        answer:
          "Yes — we deliver throughout Aviara including Aviara Oaks, Aviara Point, Four Seasons Aviara, and all surrounding neighborhoods. Delivery is priced by distance and quoted upfront.",
      },
      {
        question: "Can you handle upscale party setups in Aviara?",
        answer:
          "Absolutely. We provide linens, Chiavari chairs, canopies, and full décor packages suited to Aviara's elegant settings.",
      },
      {
        question: "What parks and venues in Aviara do you deliver to?",
        answer:
          "We deliver to Aviara Community Park, Poinsettia Park, Alga Norte, and private homes throughout the Aviara community. We handle full setup and teardown.",
      },
      {
        question: "How far in advance should I book for an Aviara event?",
        answer:
          "We recommend booking 1–2 weeks ahead, especially for larger or more elaborate setups. Contact us to check availability and discuss your specific rental needs.",
      },
    ],
  },
  {
    slug: "vista",
    name: "Vista",
    county: "San Diego",
    state: "CA",
    zip: ["92081", "92083", "92084", "92085"],
    meta: {
      title: "Party Rentals in Vista CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Vista. Serving Shadowridge, Buena Creek, North Vista & surrounding neighborhoods.",
    },
    headline: "Vista Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered and set up at your Vista venue — stress-free.",
    intro:
      "From backyard celebrations in Shadowridge to park parties at Brengle Terrace, Kelari Party Rentals is Vista's full-service source for tables, chairs, tents, linens, and décor. We deliver, set up, and pick up so you can enjoy every moment with your guests.",
    neighborhoods: [
      "Shadowridge",
      "Buena Creek",
      "North Vista",
      "South Vista",
      "Rancho Minerva",
      "Emerald Heights",
      "Vista Village",
    ],
    parks: [
      "Brengle Terrace Park",
      "Brengle Terrace Amphitheater",
      "Guajome Regional Park",
      "Anza-Borrego Vista",
      "Bobier Drive Park",
      "Vista Sports Park",
    ],
    localProof:
      "Vista families trust Kelari Party Rentals for birthdays, baby showers, graduation parties, and community celebrations. From Shadowridge to Vista Village, we know the neighborhoods and deliver on time.",
    deliveryNote:
      "Delivery available throughout all Vista zip codes — 92081, 92083, 92084, and 92085.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
      "quinceanera-rentals",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Vista?",
        answer:
          "Yes — we deliver throughout Vista including Shadowridge, Buena Creek, North Vista, South Vista, Rancho Minerva, and all surrounding neighborhoods. Delivery is priced by distance and quoted upfront.",
      },
      {
        question: "Can I rent tables and chairs for a party at a Vista park?",
        answer:
          "Absolutely. We regularly deliver to Brengle Terrace Park, Guajome Regional Park, Vista Sports Park, and other Vista parks. We handle full setup and teardown so you can enjoy the event.",
      },
      {
        question: "How far in advance should I book party rentals in Vista?",
        answer:
          "We recommend booking at least 1–2 weeks ahead, especially during peak season (May–October). Last-minute requests are welcome — call us to check availability.",
      },
      {
        question: "What areas of Vista do you serve?",
        answer:
          "We serve every neighborhood in Vista — Shadowridge, Buena Creek, North Vista, South Vista, Rancho Minerva, Emerald Heights, and Vista Village.",
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getCityServicePairs(): { city: string; service: string }[] {
  return cities.flatMap((c) =>
    c.services.map((s) => ({ city: c.slug, service: s }))
  );
}
