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
        "Tables, chairs, tents, linens & décor rentals with free delivery and setup in Carlsbad. Serving the Village, Bressi Ranch, La Costa & Aviara.",
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
      "Free delivery and pickup throughout all Carlsbad zip codes — 92008, 92009, 92010, and 92011.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Carlsbad?",
        answer:
          "Yes! We offer free delivery, setup, and pickup throughout Carlsbad including the Village, Bressi Ranch, La Costa, Aviara, and all surrounding neighborhoods.",
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
        "Tables, chairs, tents, linens & décor rentals with free delivery and setup in Encinitas. Serving Leucadia, Cardiff, Olivenhain & New Encinitas.",
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
      "Free delivery and pickup to all Encinitas neighborhoods — Leucadia, Cardiff, Olivenhain, and beyond.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Encinitas?",
        answer:
          "Yes! We provide free delivery, setup, and pickup throughout Encinitas — including Leucadia, Cardiff-by-the-Sea, Olivenhain, Old Encinitas, and New Encinitas.",
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
          "We offer tables, chairs, tents, canopies, linens, tableware, lighting, and décor. Browse our full inventory or request a custom quote for your Encinitas event.",
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
        "Tables, chairs, tents, linens & décor rentals with free delivery and setup in Oceanside. Serving Downtown, South O, Fire Mountain & Rancho Del Oro.",
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
      "Free delivery and pickup across all Oceanside zip codes — 92049, 92054, 92056, 92057, and 92058.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to Oceanside?",
        answer:
          "Yes! We offer free delivery, setup, and pickup throughout Oceanside — Downtown, South O, Fire Mountain, Rancho Del Oro, Mission Mesa, and all surrounding areas.",
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
        "Tables, chairs, tents, linens & décor rentals with free delivery and setup in San Marcos. Serving Lake San Marcos, Twin Oaks Valley, Rancho Santa Fe Road & more.",
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
      "Free delivery and pickup throughout San Marcos — 92069, 92078, and 92096.",
    services: [
      "party-rentals",
      "birthday-party-rentals",
      "backyard-party-rentals",
      "baby-shower-rentals",
      "graduation-party-rentals",
      "engagement-party-rentals",
      "park-party-rentals",
      "delivery-setup-pickup",
    ],
    faqs: [
      {
        question: "Do you deliver party rentals to San Marcos?",
        answer:
          "Yes! We offer free delivery, setup, and pickup throughout San Marcos — Lake San Marcos, Twin Oaks Valley, San Elijo Hills, Discovery Hills, and all surrounding neighborhoods.",
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
