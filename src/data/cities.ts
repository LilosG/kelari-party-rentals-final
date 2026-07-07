import type { HeroImageConfig } from './heroImages';
import { heroImages } from './heroImages';

// ── Types ────────────────────────────────────────────────────────────────────

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityServiceContent {
  intro: string;
  localVenue: string;
  deliveryNote: string;
  faqs: Array<{ question: string; answer: string }>;
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
  heroImage?: HeroImageConfig;
  services: string[];
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
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const cities: City[] = [
  {
    slug: "carlsbad",
    categories: ["tables", "chairs", "tents-canopies", "linens", "table-runners", "marquee-letters", "add-ons"],
    name: "Carlsbad",
    county: "San Diego",
    state: "CA",
    zip: ["92008", "92009", "92010", "92011"],
    meta: {
      title: "Party Rentals in Carlsbad, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Carlsbad. Serving the Village, Bressi Ranch, La Costa & Aviara.",
    },
    headline: "Carlsbad Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your Carlsbad venue — stress-free.",
    intro:
      "From beachside celebrations at Carlsbad State Beach to backyard gatherings in La Costa, Kelari Party Rentals is Carlsbad's go-to source for tables, chairs, tents, linens, and event décor. We deliver and pick up so you can focus on your guests.",
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
    heroImage: heroImages.partyRentalsNew,
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
          "Absolutely. We regularly deliver to Poinsettia Park, Alga Norte, Holiday Park, Stagecoach Park, and other Carlsbad parks. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
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
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Carlsbad's year-round sunshine and spacious neighborhoods make it one of North County's most active party destinations. Whether you're hosting a garden party on an Aviara estate, a backyard gathering in Bressi Ranch, or a community celebration at Calavera Hills Community Park, Kelari Party Rentals delivers tables, chairs, tents, linens, and décor right to your venue. We scale every package to your guest count. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse. One La Costa family recently hosted a 65-person milestone birthday in their backyard; we delivered round tables, a 20×20 frame tent, and coordinating linens and had everything delivered two hours before guests arrived.",
        localVenue:
          "Calavera Hills Community Park and private estates in Aviara are among Carlsbad's most popular settings for full party rental setups.",
        deliveryNote:
          "Delivery is available throughout all Carlsbad zip codes (92008–92011); complimentary pickup from our El Camino Real warehouse is always free.",
        faqs: [
          {
            question: "Do you deliver party rentals near the Legoland corridor in Carlsbad?",
            answer:
              "Yes — we serve the entire Carlsbad corridor including neighborhoods near Legoland. Delivery is priced by distance from our Carlsbad warehouse and confirmed upfront before you book.",
          },
          {
            question: "What's a typical party rental setup for a Calavera Hills park event?",
            answer:
              "A standard Calavera Hills setup usually includes a 10×20 canopy, two or three 8-foot banquet tables, 30–40 folding chairs, and coordinated linens. We arrive before your reserved window to have everything in place.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Carlsbad birthday parties run the full range — from kids' celebrations near the Legoland corridor to milestone adult parties in Aviara and La Costa. Poinsettia Park and Stagecoach Community Park are local favorites for outdoor kids' birthdays, while backyard celebrations in La Costa often lean toward more polished setups with Chiavari chairs and themed décor. Kelari Party Rentals delivers everything needed for a memorable Carlsbad birthday — tables, chairs, tents, themed linens, and décor — and handles all the logistics. A La Costa family recently celebrated their daughter's 7th birthday at Poinsettia Park with a full canopy, tables and chairs, and a coordinated balloon arch that delighted the whole class.",
        localVenue:
          "Poinsettia Park and Stagecoach Community Park are popular Carlsbad birthday party venues with open lawns well-suited for tent and table setups.",
        deliveryNote:
          "We deliver to every Carlsbad zip code — or pick up from our El Camino Real warehouse at no charge.",
        faqs: [
          {
            question: "Can you deliver a birthday party setup to Poinsettia Park in Carlsbad?",
            answer:
              "Yes — Poinsettia Park is one of our most-requested Carlsbad delivery spots. We coordinate with your park reservation and have everything delivered and ready before your guests arrive.",
          },
          {
            question: "Do you have kids' birthday party packages for Carlsbad events near Legoland?",
            answer:
              "Absolutely. We provide full party rental setups for kids' celebrations, including themed décor popular with younger crowds. These packages are especially in demand for backyard and park parties in the Legoland corridor neighborhoods.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Carlsbad backyards were made for entertaining. Bressi Ranch's planned community homes, La Costa's generous lot sizes, and Aviara's resort-style properties all offer the space to host a truly impressive outdoor party with the right rental equipment. Kelari Party Rentals delivers tables, chairs, tents, lighting, and décor to your Carlsbad home for an additional fee — so you never have to move a heavy table yourself — or you can pick up free at our Carlsbad warehouse if you'd rather handle transport on your own. One Bressi Ranch couple recently hosted a 60-person retirement party in their backyard; we deliver a 20×30 frame tent, eight round tables, and café string lights the evening before and had everything ready by morning.",
        localVenue:
          "Bressi Ranch and La Costa neighborhoods are Carlsbad's most popular areas for backyard party rentals, with lot sizes well-suited for tent setups.",
        deliveryNote:
          "Our Carlsbad warehouse is minutes from most Bressi Ranch and La Costa homes — same-day delivery is sometimes possible for last-minute requests.",
        faqs: [
          {
            question: "Can you fit a tent in a typical Bressi Ranch backyard?",
            answer:
              "Most Bressi Ranch yards can accommodate a 10×20 or 20×20 tent. Our team assesses your space on arrival and adjusts the layout to work around any obstacles.",
          },
          {
            question: "Do you handle lighting for evening backyard parties in Carlsbad?",
            answer:
              "Yes — string lights and LED uplighting are popular additions for Carlsbad evening events. Our warm nights are perfect for extended outdoor gatherings, and the right lighting makes the space feel special after dark.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Baby showers in Carlsbad tend toward the elegant side, whether hosted on an Aviara patio with lagoon views or in a La Costa backyard garden. Kelari Party Rentals provides beautifully coordinated tables, chairs, linens, centerpieces, and décor to make every shower feel effortless. We deliver everything ready to set up and return for pickup — so the host can be fully present for the mom-to-be. One Aviara family recently hosted a garden-style shower for 40 guests on their patio; we delivered soft sage linens, floral centerpieces, and Chiavari chairs that perfectly complemented the garden setting.",
        localVenue:
          "Private patios in Aviara and backyard gardens in La Costa provide naturally elegant backdrops for Carlsbad baby showers.",
        deliveryNote:
          "Delivery is available throughout Carlsbad; complimentary warehouse pickup from El Camino Real is always available if you prefer to transport items yourself.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to an Aviara home in Carlsbad?",
            answer:
              "Absolutely. Aviara is one of our most-requested Carlsbad delivery areas for baby showers. We deliver tables, chairs, and styled linens, ready to set up before guests arrive.",
          },
          {
            question: "What linen colors work best for Carlsbad garden baby showers?",
            answer:
              "Sage, blush, and soft ivory are the most popular for outdoor garden showers in Carlsbad. We carry a full range of colors — share your theme when you request a quote.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Graduation season is one of Carlsbad's biggest party periods. Carlsbad High, La Costa Canyon High, and Jefferson Middle School all send off large graduating classes in May and June, and families throughout La Costa, Calavera Hills, and Bressi Ranch host celebrations to match. Kelari Party Rentals is fully stocked for graduation season with tables, chairs, tents, and school-colored linens for parties of any size. A Calavera Hills family recently hosted a 90-person graduation party for their La Costa Canyon grad; we delivered two 20×20 tents, 10 round tables, and school-colored linens in a single morning run.",
        localVenue:
          "Stagecoach Community Park and spacious backyards throughout La Costa and Calavera Hills are Carlsbad's most popular graduation party venues.",
        deliveryNote:
          "Graduation season is our busiest — book early to guarantee your delivery window, especially for May and June weekends.",
        faqs: [
          {
            question: "How early should I book graduation party rentals in Carlsbad?",
            answer:
              "We recommend booking 3–4 weeks ahead for Carlsbad graduation parties. May and June weekends fill quickly, especially right after Carlsbad High and La Costa Canyon ceremonies.",
          },
          {
            question: "Can you accommodate a large graduation party at Stagecoach Community Park in Carlsbad?",
            answer:
              "Yes — Stagecoach is a popular venue for larger outdoor graduation parties in Carlsbad. We coordinate delivery to your reserved area and handle pickup after your event.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Carlsbad's coastal setting — ocean breezes, blooming gardens, and elegant neighborhoods — makes it one of the most romantic places in North County to host an engagement party. Private estates in Aviara and backyard gardens in Olde Carlsbad are especially popular for this milestone celebration. Kelari Party Rentals provides premium tables, Chiavari chairs, luxury linens, and romantic lighting to create a setting worthy of the happy couple. One Olde Carlsbad family recently hosted an engagement party for 50 guests with rose gold linens, floral centerpieces, and bistro lights strung between their garden pergola posts — the kind of evening everyone remembered.",
        localVenue:
          "Private estate gardens in Aviara and charming backyard patios in Olde Carlsbad are the most sought-after settings for Carlsbad engagement parties.",
        deliveryNote:
          "We deliver throughout Carlsbad — from Aviara (92011) to Olde Carlsbad (92008) — with pricing quoted upfront.",
        faqs: [
          {
            question: "Can you create an elegant outdoor engagement party setup in Carlsbad?",
            answer:
              "Absolutely. Our most popular Carlsbad engagement setups pair Chiavari chairs and round tables with floor-length linens, floral centerpieces, and string lights — perfect for Carlsbad's warm evenings.",
          },
          {
            question: "Do you deliver engagement party rentals to Aviara homes in Carlsbad?",
            answer:
              "Yes — Aviara is a frequent delivery destination for elegant engagement parties. We deliver everything ready to go and walk you through the delivery so the hosts can get back to their guests quickly.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Carlsbad's well-maintained parks are community treasures and among the most popular venues for birthday parties, family reunions, and neighborhood celebrations. Calavera Hills Community Park, Poinsettia Park, and Holiday Park all offer open lawns with pavilion areas ideal for tent setups. Kelari Party Rentals delivers tables, chairs, canopies, and décor directly to your reserved Carlsbad park spot, arriving early to have everything delivered and in place before your first guest. A family who reserved the upper lawn at Calavera Hills Community Park for a 60-person reunion recently relied on us for two canopies, six banquet tables, and 60 folding chairs — all set up an hour before guests arrived.",
        localVenue:
          "Calavera Hills Community Park and Poinsettia Park are Carlsbad's most popular park party venues, both offering large open lawns and pavilion facilities.",
        deliveryNote:
          "Our Carlsbad warehouse means short delivery windows for park events — we can often accommodate early-morning drops for parks that open at sunrise.",
        faqs: [
          {
            question: "Do you need a permit to use rental equipment at Carlsbad parks?",
            answer:
              "Most Carlsbad parks require a reservation or facility permit for events with equipment. We recommend checking with the City of Carlsbad Parks and Recreation Department before booking.",
          },
          {
            question: "Which Carlsbad parks do you deliver party rentals to?",
            answer:
              "We deliver to all Carlsbad parks — Calavera Hills Community Park, Poinsettia Park, Stagecoach Park, Holiday Park, Alga Norte, and more. Share your reserved area and we'll plan the logistics.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "Our warehouse at 5674 El Camino Real is the heart of Kelari Party Rentals — and it means Carlsbad customers get some of our fastest delivery windows and most flexible scheduling. Professional delivery is priced by distance from the warehouse and quoted upfront with no hidden fees. Prefer not to pay for delivery? Complimentary pickup at our Carlsbad location is always available, making it easy to grab your rentals the morning of your event. One Bressi Ranch customer picked up tables and chairs for her daughter's birthday party, loaded them in her SUV in under 20 minutes, and returned everything the next morning — zero delivery fee.",
        localVenue:
          "Our warehouse at 5674 El Camino Real serves as the hub for all Carlsbad pickups and returns — minutes from Bressi Ranch, La Costa, and most Carlsbad neighborhoods.",
        deliveryNote:
          "Carlsbad delivery starts at our lowest rates since it's in our immediate service area — and warehouse pickup on El Camino Real is always free.",
        faqs: [
          {
            question: "Can I pick up my rental items from your Carlsbad warehouse?",
            answer:
              "Yes — complimentary pickup and dropoff is always available at 5674 El Camino Real. It's a great option for smaller orders or events where you have a vehicle to transport items.",
          },
          {
            question: "How is delivery pricing determined for Carlsbad events?",
            answer:
              "Delivery is priced by distance from our Carlsbad warehouse. For in-city addresses, rates are among our lowest. We quote the exact fee upfront so you can compare it against the free pickup option.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras hold a special place in Carlsbad's cultural life, and Kelari Party Rentals is proud to serve families planning this milestone celebration. Whether the party is hosted in a private Aviara estate, a spacious Calavera Hills backyard, or a rented hall near Carlsbad Village, we deliver elegant Chiavari chairs, premium linens, candelabra centerpieces, and full tent coverage to bring every quinceañera vision to life. One Carlsbad family recently celebrated their daughter's quinceañera with 120 guests in their backyard; we delivered gold Chiavari chairs, round tables with burgundy and gold linens, candelabra centerpieces, and a 30×30 frame tent — and the family said it looked like a ballroom under the stars.",
        localVenue:
          "Private estates in Aviara and spacious backyards throughout Calavera Hills are among Carlsbad's most popular settings for quinceañera celebrations.",
        deliveryNote:
          "We deliver quinceañera rentals throughout Carlsbad; delivery pricing is quoted upfront, and complimentary warehouse pickup is available for families coordinating their own transport.",
        faqs: [
          {
            question: "Do you provide quinceañera rentals for large parties in Carlsbad?",
            answer:
              "Yes — quinceañeras often involve 80–150+ guests, and we're fully equipped for large-scale setups. We provide Chiavari chairs, round tables, floor-length linens, and frame tents for Carlsbad backyards and venues.",
          },
          {
            question: "Can you match our quinceañera color theme for a Carlsbad event?",
            answer:
              "Absolutely. We carry linens, table runners, and accent pieces in a wide range of colors. Share your color palette when you request a quote and we'll build a fully coordinated package.",
          },
        ],
      },
    },
  },
  {
    slug: "encinitas",
    categories: ["tables", "chairs", "tents-canopies", "linens", "table-runners", "marquee-letters", "add-ons"],
    name: "Encinitas",
    county: "San Diego",
    state: "CA",
    zip: ["92023", "92024"],
    meta: {
      title: "Party Rentals in Encinitas, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Encinitas. Serving Leucadia, Cardiff, Olivenhain & New Encinitas.",
    },
    headline: "Encinitas Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your Encinitas venue — stress-free.",
    intro:
      "Whether you're hosting a laid-back gathering in Leucadia or an elegant celebration in Olivenhain, Kelari Party Rentals brings everything you need to your door. Tables, chairs, tents, linens, and décor — delivery available for an additional fee, or free pickup at our Carlsbad warehouse.",
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
    heroImage: heroImages.backyardNew,
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
        question: "Can rentals be delivered to Moonlight Beach or Encinitas parks?",
        answer:
          "We regularly deliver to Encinitas Community Park, Cottonwood Creek Park, and other local venues. For beach events at Moonlight, we can deliver to the nearest access point.",
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
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Encinitas has a distinctly laid-back coastal energy that infuses even its most elaborate celebrations. From bohemian backyard gatherings in Leucadia to polished garden parties in Olivenhain, the style here blends elegance with a relaxed surf-town vibe. Kelari Party Rentals delivers tables, chairs, tents, and décor throughout Encinitas, tailoring every package to match the event's spirit. One Olivenhain family recently hosted a 70-person garden party with long farm tables, linen runners, and café lights installed over their courtyard — a setup that felt right at home among Olivenhain's horse trails and mature oaks.",
        localVenue:
          "Olivenhain backyards and Encinitas Community Park are among the most popular settings in Encinitas for full party rental setups.",
        deliveryNote:
          "Delivery to Encinitas is priced by distance from our Carlsbad warehouse — a short haul — and confirmed upfront before you book.",
        faqs: [
          {
            question: "Do you deliver party rentals to Leucadia and Cardiff in Encinitas?",
            answer:
              "Yes — we deliver throughout Encinitas including Leucadia, Cardiff-by-the-Sea, Olivenhain, Old Encinitas, and New Encinitas. Delivery is priced by distance from our Carlsbad warehouse and quoted upfront.",
          },
          {
            question: "What's a typical party rental setup for an Encinitas garden event?",
            answer:
              "Encinitas garden parties often feature round tables or long farm tables with linen runners, Chiavari or cross-back chairs, and a canopy for shade. String lights are a popular addition for evening events in Leucadia and Olivenhain.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Birthday parties in Encinitas reflect the city's surf-and-garden culture — joyful, often outdoors, and always relaxed. Surf-themed kids' parties are a staple near the coast in Cardiff and Leucadia, while Olivenhain families tend toward more intimate backyard celebrations. Kelari Party Rentals delivers birthday party tables, chairs, canopies, and themed décor throughout Encinitas. A Cardiff family recently celebrated their son's 8th birthday with a surf-themed setup at Cottonwood Creek Park; we delivered a canopy, folding tables, chairs, and blue-and-white linens that perfectly matched the theme.",
        localVenue:
          "Cottonwood Creek Park and Encinitas Community Park are popular Encinitas birthday party spots with open lawns ideal for tent and table setups.",
        deliveryNote:
          "We deliver birthday party rentals to all Encinitas neighborhoods; warehouse pickup from Carlsbad is free for families close to the 5 freeway.",
        faqs: [
          {
            question: "Can you do a coastal-themed birthday party setup in Encinitas?",
            answer:
              "We can deliver coastal-themed linens, canopies, and décor perfect for a surf birthday at Cottonwood Creek Park or in a Cardiff or Leucadia backyard.",
          },
          {
            question: "Do you deliver kids' birthday party rentals to Encinitas parks?",
            answer:
              "Yes — Encinitas Community Park and Cottonwood Creek Park are popular delivery locations for kids' birthdays. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Encinitas backyards range from cozy Leucadia cottage gardens to expansive Olivenhain properties with room for a full tent setup. Kelari Party Rentals brings the right equipment for both. Whether you need a compact 10×10 shade canopy and a couple of tables for an intimate gathering, or a 30×30 frame tent with café lights for a Saturday night celebration, delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, you'll never have to borrow a folding table from a neighbor. One Olivenhain couple hosted their annual garden party for 80 guests with a frame tent, eight round tables, Chiavari chairs, and soft white linens — guests kept asking who they'd hired as the event planner.",
        localVenue:
          "Olivenhain is Encinitas's top neighborhood for large backyard party rentals, with spacious lots that can accommodate full frame tent setups.",
        deliveryNote:
          "Delivery to Encinitas backyards is confirmed upfront — complimentary pickup at our El Camino Real warehouse in Carlsbad is also always available.",
        faqs: [
          {
            question: "Can you set up a tent in an Olivenhain backyard?",
            answer:
              "Yes — Olivenhain properties are some of the most tent-friendly in Encinitas. Our frame tents work well on open lawn areas and we'll assess the layout on arrival to find the best placement.",
          },
          {
            question: "Do you deliver backyard party rentals to Leucadia?",
            answer:
              "Absolutely. Leucadia's cottage-style homes often have charming outdoor spaces, and we specialize in working with compact yards. Even a smaller backyard can host a great party with the right table and canopy configuration.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Encinitas has a strong wellness and community culture, and baby showers here tend to be heartfelt, beautifully styled, and grounded in that coastal-bohemian spirit. Whether the shower is hosted in a New Encinitas home or at Encinitas Community Park, Kelari Party Rentals provides elegant tables, linens, centerpieces, and décor to set the right tone. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, we'll walk you through setup so the host can be fully present. One New Encinitas host threw a garden-style baby shower for 35 guests in her backyard; we delivered sage-and-blush linens, floral centerpieces, and draped Chiavari chairs that had every guest asking who did the styling.",
        localVenue:
          "Backyard gardens in New Encinitas and Olivenhain are popular baby shower venues, with Encinitas Community Park as a parkside alternative for larger gatherings.",
        deliveryNote:
          "Delivery to Encinitas is available from our Carlsbad warehouse and priced by distance; warehouse pickup is free for those who prefer to transport items.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to a home in New Encinitas?",
            answer:
              "Yes — New Encinitas is a frequent delivery destination for baby showers. We deliver tables, chairs, linens, and centerpieces and walk you through the delivery so the host has everything she needs.",
          },
          {
            question: "What décor styles work well for Encinitas baby showers?",
            answer:
              "The coastal-bohemian aesthetic is very popular here — think soft neutrals, pampas grass accents, linen runners, and blush or sage palettes. We can build a package that matches your specific vibe.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Graduation parties in Encinitas celebrate grads from La Costa Canyon High, San Dieguito Academy, and other North County schools. These events often fill Olivenhain backyards or spill into Encinitas Community Park, where families gather to honor their graduate with a full outdoor party setup. Kelari Party Rentals helps Encinitas families celebrate with tables, chairs, tents, and coordinated school-colored linens for any party size. One Leucadia family celebrated their San Dieguito Academy grad with a 55-person backyard party; we deliver a 20×20 canopy, five round tables, and navy-and-gold linens the morning of the event.",
        localVenue:
          "Encinitas Community Park and Olivenhain backyards are the most popular venues for graduation parties in Encinitas, comfortably hosting 30–80+ guests.",
        deliveryNote:
          "Graduation party delivery to Encinitas is priced by distance from Carlsbad — book 2–3 weeks ahead to secure your May or June date.",
        faqs: [
          {
            question: "Do you deliver graduation party rentals to all Encinitas neighborhoods?",
            answer:
              "Yes — we serve Leucadia, Cardiff, Olivenhain, Old Encinitas, and New Encinitas. Graduation season fills quickly, so we recommend booking 2–3 weeks ahead.",
          },
          {
            question: "Can you set up a large graduation party at Encinitas Community Park?",
            answer:
              "Encinitas Community Park is a great venue for larger graduation gatherings. We deliver to your reserved area and handle everything through post-event pickup — just confirm your park reservation before booking.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Encinitas's romantic coastal character makes it one of the most atmospheric settings in North County for an engagement party. Cottage gardens in Leucadia and sprawling estates in Olivenhain offer dramatically different backdrops, but both benefit from the right rental setup — elegant tables, warm lighting, and lush linens. Kelari Party Rentals delivers everything needed to create a memorable setting right to your Encinitas venue. One Cardiff couple celebrated their engagement with 45 guests in a Leucadia backyard garden; we delivered round tables with ivory linens, votives, and string lights under a canopy of eucalyptus trees — pure Encinitas magic.",
        localVenue:
          "Leucadia bungalow gardens and Olivenhain estates are Encinitas's most atmospheric settings for intimate engagement party celebrations.",
        deliveryNote:
          "Delivery to Encinitas engagement parties is available from our Carlsbad warehouse — pricing is based on distance and confirmed upfront.",
        faqs: [
          {
            question: "Can you set up an engagement party in a Leucadia backyard?",
            answer:
              "Absolutely. Leucadia's relaxed, lush character makes it a beautiful setting for an engagement party. We work with the space — even compact cottage yards — to create an elegant, intimate setup.",
          },
          {
            question: "What engagement party rentals are most popular in Encinitas?",
            answer:
              "Round tables with floor-length linens, Chiavari or wooden cross-back chairs, string lights, and floral centerpieces are the most requested combination for Encinitas engagement parties — coastal elegance with a bohemian warmth.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Encinitas parks offer some of North County's most beautiful outdoor event settings. Encinitas Community Park provides a wide open lawn ideal for tent setups, while Cottonwood Creek Park offers a more intimate feel near the beach corridor. Kelari Party Rentals delivers tables, chairs, canopies, and décor to all Encinitas parks, arriving early to drop everything off and returning after the event for pickup — zero heavy lifting for you. One family booked the lower lawn at Encinitas Community Park for a 50-person birthday party; we delivered two canopies, five tables, and 50 folding chairs with linens in under 90 minutes.",
        localVenue:
          "Encinitas Community Park and Cottonwood Creek Park are Encinitas's most popular park party destinations, with open lawns and easy vehicle access for delivery.",
        deliveryNote:
          "We deliver park party rentals to all Encinitas parks — our crew handles the carry-in regardless of parking distance from the setup area.",
        faqs: [
          {
            question: "Do you deliver party rentals to Cottonwood Creek Park in Encinitas?",
            answer:
              "Yes — Cottonwood Creek Park is a popular delivery location for us. We deliver to your reserved area and coordinate timing around your park reservation window.",
          },
          {
            question: "Do I need a permit for a party at Encinitas Community Park?",
            answer:
              "Most events with equipment at Encinitas parks require a reservation or park permit. Check with the City of Encinitas Parks & Recreation department — we can advise on typical logistics once your reservation is confirmed.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "For Encinitas customers, Kelari Party Rentals offers reliable delivery from our Carlsbad warehouse — just a short drive down the 5. Professional delivery is priced by distance and quoted upfront, covering every neighborhood from Leucadia to Olivenhain. Prefer to save on delivery? Our complimentary warehouse pickup at El Camino Real is always available — a convenient option for Encinitas customers heading south. One New Encinitas family picked up tables, chairs, and a canopy for their baby shower the morning of the event, saving the delivery fee and having everything home in under 20 minutes.",
        localVenue:
          "Our Carlsbad warehouse on El Camino Real is the starting point for all Encinitas deliveries — a short drive from Leucadia and most other Encinitas neighborhoods.",
        deliveryNote:
          "Delivery to Encinitas runs from our Carlsbad warehouse and is priced by distance to your specific zip code, confirmed before you book.",
        faqs: [
          {
            question: "How much does delivery cost from Carlsbad to Encinitas?",
            answer:
              "Delivery is priced by distance from our Carlsbad warehouse to your specific Encinitas address and quoted upfront. Prefer no delivery fee? Complimentary pickup at El Camino Real is always available.",
          },
          {
            question: "How far in advance do you confirm delivery windows for Encinitas events?",
            answer:
              "We confirm your delivery window at booking. We typically deliver 1–2 hours before your event and pick up within 2 hours after it ends — times coordinated to fit your event schedule.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras in Encinitas bring together extended family and close friends in a celebration that reflects the family's values and style. Whether hosted in a spacious Olivenhain backyard or a rented hall near Encinitas, Kelari Party Rentals provides the elegant Chiavari chairs, premium linens, and full décor packages that make a quinceañera feel like the milestone it is. One Encinitas family recently celebrated their daughter's quinceañera with 100 guests; we delivered round tables, gold Chiavari chairs, floor-length rose linens, and a floral centerpiece for every table — and the quinceañera herself said it looked better than she had imagined.",
        localVenue:
          "Spacious Olivenhain backyards and rented halls near Encinitas Community Park are popular quinceañera venues for Encinitas families.",
        deliveryNote:
          "Quinceañera delivery to Encinitas is available from our Carlsbad warehouse; warehouse pickup is a free option for families coordinating their own transport.",
        faqs: [
          {
            question: "Do you deliver quinceañera rentals to Encinitas?",
            answer:
              "Yes — we serve all Encinitas neighborhoods for quinceañeras. We recommend booking 3–4 weeks ahead to secure your date and finalize your colors and quantities.",
          },
          {
            question: "Can you handle a large quinceañera delivery in an Olivenhain backyard?",
            answer:
              "Absolutely. Olivenhain properties are some of the most spacious in Encinitas and work beautifully for large quinceañera setups. We bring Chiavari chairs, round tables, premium linens, and a frame tent for outdoor coverage if needed.",
          },
        ],
      },
    },
  },
  {
    slug: "oceanside",
    categories: ["tables", "chairs", "tents-canopies", "linens", "table-runners", "marquee-letters", "add-ons"],
    name: "Oceanside",
    county: "San Diego",
    state: "CA",
    zip: ["92049", "92054", "92056", "92057", "92058"],
    meta: {
      title: "Party Rentals in Oceanside, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Oceanside. Serving Downtown, South O, Fire Mountain & Rancho Del Oro.",
    },
    headline: "Oceanside Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your Oceanside venue — stress-free.",
    intro:
      "Oceanside's vibrant community deserves vibrant celebrations. From pier-adjacent parties downtown to backyard barbecues in Rancho Del Oro, Kelari Party Rentals provides everything you need — tables, chairs, tents, linens, and décor, delivered right to your venue.",
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
    heroImage: heroImages.birthdayNew,
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
          "Absolutely. We deliver to Buddy Todd Park, Guajome Regional Park, Buccaneer Park, and other Oceanside parks. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
      },
      {
        question: "What's the delivery range from your Carlsbad location to Oceanside?",
        answer:
          "Oceanside is just minutes from our Carlsbad headquarters. Delivery is free to all Oceanside neighborhoods — no extra charge.",
      },
      {
        question: "Do you rent tents and canopies for Oceanside backyard parties?",
        answer:
          "Yes — we carry pop-up canopies and frame tents in multiple sizes, perfect for backyard parties in Oceanside. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
      },
    ],
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Oceanside has a bold, community-driven party culture fueled by its diverse population and vibrant neighborhoods. From large family reunions at Guajome Regional Park to backyard block parties in Rancho del Oro, the city knows how to celebrate with scale and heart. Kelari Party Rentals delivers full party rental packages — tables, chairs, tents, linens, and décor — throughout Oceanside, with delivery from our nearby Carlsbad warehouse. One Rancho del Oro family recently hosted a three-generation reunion for 90 guests; we delivered 10 round tables, 90 folding chairs, a 30×30 frame tent, and coordinated linens and had everything delivered the morning of the event.",
        localVenue:
          "Guajome Regional Park and backyard spaces in Rancho del Oro are among Oceanside's most popular settings for full party rental setups.",
        deliveryNote:
          "Our Carlsbad warehouse is just minutes from South Oceanside — delivery is available to all five Oceanside zip codes, priced upfront.",
        faqs: [
          {
            question: "Do you deliver party rentals throughout all Oceanside neighborhoods?",
            answer:
              "Yes — we deliver to Fire Mountain, South Oceanside, Rancho del Oro, Jeffries Ranch, and downtown Oceanside. Delivery is priced by distance from our Carlsbad warehouse and quoted upfront.",
          },
          {
            question: "What's a typical party rental package for an Oceanside backyard event?",
            answer:
              "A typical Oceanside backyard party includes a 20×20 canopy or frame tent, four to six rectangular tables, 40–60 folding chairs, and coordinated linens. We scale the package to your guest count and yard size.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Birthday parties are a big deal in Oceanside — the city's diverse, close-knit community turns birthdays into neighborhood events, from first-birthday bashes to milestone adult celebrations. Kids' parties at Buddy Todd Park and Mance Buchanon Park are a local staple, while Fire Mountain backyards often host larger adult gatherings. Kelari Party Rentals delivers birthday party tables, chairs, tents, and décor throughout Oceanside, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. One Fire Mountain family celebrated their daughter's 10th birthday at Buddy Todd Park with a canopy, four tables, chairs, and a balloon arch — the birthday girl said it was the best day ever.",
        localVenue:
          "Buddy Todd Park and Luiseno Park are Oceanside's most popular venues for kids' birthday parties, with open lawn areas and easy parking for delivery.",
        deliveryNote:
          "Delivery to Oceanside birthday parties is available from our Carlsbad warehouse — we quote pricing upfront based on your specific address.",
        faqs: [
          {
            question: "Can you deliver birthday party rentals to Buddy Todd Park in Oceanside?",
            answer:
              "Yes — Buddy Todd Park is one of our most-requested Oceanside delivery locations. We coordinate with your park reservation and arrive early to have everything delivered and ready before guests arrive.",
          },
          {
            question: "Do you have themed birthday party options for Oceanside events?",
            answer:
              "We carry a range of linen colors and décor accents that can be matched to any birthday theme. We provide full party rental setups for kids' celebrations. Share your theme when you request a quote.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Oceanside backyards host some of the most spirited celebrations in North County — military homecoming parties in Jeffries Ranch, quinceañeras in Rancho del Oro, block parties in Fire Mountain. Whatever the occasion, Kelari Party Rentals delivers the tables, chairs, tents, and décor to make any outdoor space the right venue. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse. One Jeffries Ranch family hosted a surprise military homecoming for 70 guests in their backyard; we delivered a 20×30 frame tent, eight round tables, and navy-and-gold linens three hours before the guest of honor arrived.",
        localVenue:
          "Rancho del Oro and Jeffries Ranch neighborhoods offer generous backyard spaces well-suited for tent rentals and large party setups.",
        deliveryNote:
          "Delivery runs from our Carlsbad warehouse to your Oceanside backyard — pricing is based on distance and quoted before you confirm.",
        faqs: [
          {
            question: "Can you set up a large tent in an Oceanside backyard?",
            answer:
              "Yes — many Oceanside backyards in Rancho del Oro and Jeffries Ranch can accommodate 20×20 or 20×30 frame tents. We assess the space on arrival and work with your layout.",
          },
          {
            question: "Do you deliver backyard party rentals for military homecoming parties in Oceanside?",
            answer:
              "Absolutely. Military homecoming parties are one of our most heartfelt setups in Oceanside. We work quickly and reliably to ensure everything is ready on time for the big arrival.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Baby showers in Oceanside bring together families from across the city's diverse neighborhoods, from South Oceanside homes to Rancho del Oro backyard patios. The style varies but the warmth is constant. Kelari Party Rentals delivers elegant tables, linens, centerpieces, and seating for baby showers of every size. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, the host can focus on celebrating the mom-to-be. One South Oceanside host threw a 45-person baby shower in her backyard; we delivered blush linens, tiered floral centerpieces, and Chiavari chairs that matched her pink-and-gold theme perfectly.",
        localVenue:
          "Backyard patios in South Oceanside and Rancho del Oro are popular baby shower venues with easy access for delivery and setup.",
        deliveryNote:
          "Delivery to Oceanside baby showers is available from our Carlsbad warehouse; free warehouse pickup is an option for hosts who prefer to transport rentals themselves.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to South Oceanside?",
            answer:
              "Yes — South Oceanside is a frequent delivery destination for us. We deliver tables, chairs, linens, and centerpieces and walk you through the delivery before the shower begins.",
          },
          {
            question: "What linen and décor styles are popular for Oceanside baby showers?",
            answer:
              "Blush, sage, and soft yellow are popular linen colors for Oceanside baby showers. We carry a full range of colors and runner options — share your theme when requesting a quote.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Graduation parties in Oceanside are a full production — Oceanside High, El Camino High, and other local schools send off large graduating classes, and families in Rancho del Oro and Fire Mountain celebrate accordingly. Backyard graduations and park events at Guajome Regional Park and Buddy Todd Park are especially popular. Kelari Party Rentals is fully stocked for graduation season with tables, chairs, tents, and school-colored linens for parties of 30 to 150+. One Oceanside High grad's family hosted 110 guests at a Rancho del Oro backyard party; we delivered two 20×20 tents, 12 round tables, and maroon-and-gold linens in a single morning.",
        localVenue:
          "Guajome Regional Park pavilions and spacious backyards in Rancho del Oro are Oceanside's top graduation party venues for larger gatherings.",
        deliveryNote:
          "Graduation season books fast in Oceanside — reserve your delivery window early, especially for May and June weekends.",
        faqs: [
          {
            question: "Can you handle a large graduation party setup in Oceanside?",
            answer:
              "Yes — we regularly set up for 80–150+ guests at Oceanside graduation parties. We provide multiple tents, large table quantities, and coordinated linens for big celebrations.",
          },
          {
            question: "Do you deliver graduation party rentals to Guajome Regional Park in Oceanside?",
            answer:
              "Absolutely. Guajome Regional Park is a popular graduation venue in Oceanside. We coordinate delivery to your reserved pavilion or lawn area and handle pickup after your event.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Engagement parties in Oceanside reflect the city's warm, community spirit. Whether hosted in a Rancho del Oro backyard or a downtown Oceanside patio, these celebrations bring together friends and family to honor the newly engaged couple. Kelari Party Rentals provides premium tables, Chiavari chairs, luxury linens, and ambient lighting — everything needed to create a beautiful engagement party setting in Oceanside. One Rancho del Oro family hosted an engagement party for 55 guests under the oak trees in their backyard; we delivered round tables with ivory linens, votive candles, and string lights for an evening everyone remembered.",
        localVenue:
          "Backyard patios in Rancho del Oro and the growing downtown Oceanside area offer stylish settings for engagement party celebrations.",
        deliveryNote:
          "Delivery to Oceanside engagement parties is available from our Carlsbad warehouse — pricing is transparent and confirmed before you book.",
        faqs: [
          {
            question: "Can you create a romantic outdoor engagement party setup in Oceanside?",
            answer:
              "Yes — string lights, soft linen colors, and floral centerpieces are our most requested combination for Oceanside engagement parties. We can build a complete outdoor setup for your backyard or venue.",
          },
          {
            question: "Do you deliver engagement party rentals to all Oceanside neighborhoods?",
            answer:
              "We deliver throughout Oceanside — Fire Mountain, South Oceanside, Rancho del Oro, Jeffries Ranch, and downtown. Delivery is priced by distance from our Carlsbad warehouse and confirmed upfront.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Oceanside is home to some of North County's largest and most beautiful parks, and they're a natural gathering place for the city's community-minded residents. Guajome Regional Park offers shaded pavilions and open lawns for events of 80+ guests, while Buddy Todd Park and Luiseno Park are perfect for family-sized birthday and reunion setups. Kelari Party Rentals delivers tables, chairs, tents, and décor to all Oceanside parks, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. One family reunion at Guajome Regional Park brought together 80 relatives; we delivered three canopies, eight banquet tables, and 80 chairs for a full-day celebration.",
        localVenue:
          "Guajome Regional Park is Oceanside's top park venue for large events, with pavilion facilities and open lawns that accommodate full tent and table setups.",
        deliveryNote:
          "We deliver party rentals to all Oceanside parks from our Carlsbad warehouse — delivery pricing is distance-based and quoted upfront.",
        faqs: [
          {
            question: "Do you deliver party rentals to Guajome Regional Park in Oceanside?",
            answer:
              "Yes — Guajome Regional Park is one of our most popular park delivery locations in Oceanside. We coordinate with your reservation window and deliver delivery — tables, chairs, tents, and décor.",
          },
          {
            question: "Which Oceanside parks do you regularly deliver party rentals to?",
            answer:
              "We deliver to Guajome Regional Park, Buddy Todd Park, Luiseno Park, Mance Buchanon Park, Buccaneer Park, and other Oceanside parks. Confirm your park reservation and we'll handle the logistics.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "Oceanside is one of our most-served delivery destinations, and our nearby Carlsbad warehouse makes for efficient, on-time deliveries throughout the city. Professional delivery covers every Oceanside zip code — 92049, 92054, 92056, 92057, and 92058 — and is priced by distance with the fee confirmed before you book. Prefer to skip delivery? Complimentary pickup at our El Camino Real warehouse is always available, and the drive from most Oceanside neighborhoods is under 15 minutes. One Jeffries Ranch family rented tables, chairs, and linens for a quinceañera, opted for free warehouse pickup, and used two vehicles to transport everything to their venue — saving the delivery fee entirely.",
        localVenue:
          "Our El Camino Real warehouse in Carlsbad is just a short drive from South Oceanside and most other Oceanside neighborhoods — convenient for both delivery and free pickup.",
        deliveryNote:
          "All five Oceanside zip codes fall within our standard delivery area — pricing is based on distance from Carlsbad and quoted upfront.",
        faqs: [
          {
            question: "How much does delivery from Carlsbad to Oceanside cost?",
            answer:
              "Delivery to Oceanside is priced by distance from our Carlsbad warehouse to your specific address. We quote the exact fee upfront so you can compare it against our always-free warehouse pickup option.",
          },
          {
            question: "Can I pick up rental items from your Carlsbad warehouse if I'm in Oceanside?",
            answer:
              "Absolutely. Complimentary pickup and dropoff at our El Camino Real location is available to all customers. Most Oceanside neighborhoods are under 15 minutes from our warehouse.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras are among the most beloved celebrations in Oceanside, and Kelari Party Rentals is proud to serve the families planning these milestone events. Oceanside quinceañeras tend to be large, vibrant, and full of color — often hosted in spacious backyards in Rancho del Oro or Jeffries Ranch, or in rented halls throughout the city. We deliver Chiavari chairs, round tables, premium floor-length linens, candelabra centerpieces, and tent coverage to bring every quinceañera vision to life. One Oceanside family celebrated their daughter's quinceañera with 130 guests in their Rancho del Oro backyard; we delivered gold Chiavari chairs, 14 round tables, floor-length fuchsia linens, and a 30×40 frame tent.",
        localVenue:
          "Spacious backyards in Rancho del Oro and Jeffries Ranch are Oceanside's most popular quinceañera venues for large outdoor celebrations.",
        deliveryNote:
          "Quinceañera deliveries to Oceanside are available from our Carlsbad warehouse — book 3–4 weeks ahead to secure your date and finalize your package.",
        faqs: [
          {
            question: "Do you provide quinceañera rentals for large events in Oceanside?",
            answer:
              "Yes — Oceanside quinceañeras often involve 100–150+ guests, and we're fully equipped. We provide Chiavari chairs, round tables, floor-length linens, centerpieces, and frame tents for outdoor venues.",
          },
          {
            question: "Can you match our quinceañera color theme for an Oceanside event?",
            answer:
              "Absolutely. We carry linens, satin runners, and accent pieces in a wide range of colors. Share your color palette when you request a quote and we'll build a coordinated package for your Oceanside celebration.",
          },
        ],
      },
    },
  },
  {
    slug: "san-marcos",
    categories: ["tables", "chairs", "tents-canopies", "linens", "table-runners", "marquee-letters", "add-ons"],
    name: "San Marcos",
    county: "San Diego",
    state: "CA",
    zip: ["92069", "92078", "92096"],
    meta: {
      title: "Party Rentals in San Marcos, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in San Marcos. Serving Lake San Marcos, Twin Oaks Valley, Rancho Santa Fe Road & more.",
    },
    headline: "San Marcos Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your San Marcos venue — stress-free.",
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
    heroImage: heroImages.graduationNew,
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
          "We offer 6-foot and 8-foot rectangular tables, 60-inch round tables, folding chairs, and Chiavari chairs — all available for delivery in San Marcos.",
      },
    ],
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "San Marcos is a growing, family-oriented community with a vibrant celebration culture. San Elijo Hills HOA events and Twin Oaks Valley backyard gatherings are staples of the community calendar, and Discovery Lake provides a scenic backdrop for lakeside parties. Kelari Party Rentals delivers tables, chairs, tents, linens, and décor throughout all three San Marcos zip codes. One San Elijo Hills family recently hosted a 75-person HOA neighborhood party; we delivered six banquet tables, 75 folding chairs, two pop-up canopies, and coordinated linens and had the community space looking festive by mid-morning.",
        localVenue:
          "San Elijo Hills community spaces and Bradley Park are San Marcos's most popular settings for full party rental setups.",
        deliveryNote:
          "Delivery to San Marcos is priced by distance from our Carlsbad warehouse — covering all three zip codes (92069, 92078, 92096) with pricing quoted upfront.",
        faqs: [
          {
            question: "Do you deliver party rentals to San Elijo Hills in San Marcos?",
            answer:
              "Yes — San Elijo Hills is one of our most-requested San Marcos delivery neighborhoods. We deliver tables, chairs, tents, and décor to HOA events, community spaces, and private homes throughout the area.",
          },
          {
            question: "What's a typical party rental package for a San Marcos backyard event?",
            answer:
              "A typical San Marcos package includes a 10×20 or 20×20 canopy, three to five round or rectangular tables, 30–60 folding or Chiavari chairs, and coordinated linens. We scale every package to your guest count and venue.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "San Marcos is full of families, and birthday parties here range from casual backyard gatherings in Twin Oaks to themed celebrations at Bradley Park and Richmar Park. Kelari Party Rentals delivers birthday party tables, chairs, canopies, and themed décor throughout San Marcos. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, parents can focus on the birthday kid. One Twin Oaks family recently celebrated their son's 9th birthday at Bradley Park with a canopy, tables, chairs, and a themed linen set — by the time guests arrived, the party was already set and waiting.",
        localVenue:
          "Bradley Park and Richmar Park are San Marcos's most popular birthday party venues, with open lawn areas and picnic facilities suited for tent and table setups.",
        deliveryNote:
          "Birthday party rentals delivered throughout San Marcos — warehouse pickup from our Carlsbad location is always free if you'd prefer to skip the delivery fee.",
        faqs: [
          {
            question: "Can you deliver kids' birthday party rentals to Bradley Park in San Marcos?",
            answer:
              "Yes — Bradley Park is a popular delivery location for us. We arrive before your reserved park time to have tables, chairs, and canopy set up before guests arrive.",
          },
          {
            question: "Do you have themed birthday décor options for San Marcos events?",
            answer:
              "We carry a wide range of linen colors and table accents, and we provide full party rental setups for kids' celebrations. Share your birthday theme when you request a quote and we'll put together a matching package.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "San Marcos backyards are built for entertaining. San Elijo Hills homes sit on well-sized lots with room for tent setups, and Twin Oaks Valley properties often have expansive yards perfect for large family gatherings. Kelari Party Rentals delivers tables, chairs, tents, lighting, and décor to San Marcos homes, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. One San Elijo Hills family hosted a 55-person birthday bash in their backyard; we delivered a 20×20 frame tent, six round tables, 55 folding chairs, and string lights well before lunch.",
        localVenue:
          "San Elijo Hills and Twin Oaks Valley neighborhoods have generously sized backyards that accommodate full tent setups and large guest counts.",
        deliveryNote:
          "Delivery from our Carlsbad warehouse to San Marcos typically takes under 30 minutes — complimentary pickup at El Camino Real is available at no charge.",
        faqs: [
          {
            question: "Can you set up a tent in a San Elijo Hills backyard in San Marcos?",
            answer:
              "Yes — most San Elijo Hills yards can accommodate a 10×20 or 20×20 tent. We assess the space on arrival and work with your layout to find the best configuration.",
          },
          {
            question: "Do you deliver backyard party rentals to Twin Oaks Valley in San Marcos?",
            answer:
              "Absolutely. Twin Oaks Valley is a frequent delivery destination for backyard party rentals. We bring everything to your home, walk you through the delivery, and return for pickup after your event.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "San Marcos's growing family community makes it one of North County's busiest areas for baby showers. Whether the shower is hosted in a San Elijo Hills home, a community space in The Crossings, or a sunny backyard in Woodland Park, Kelari Party Rentals provides elegantly coordinated tables, linens, centerpieces, and seating to make the event feel special. One San Elijo Hills host threw a 40-person baby shower in her outdoor courtyard; we delivered ivory linens, blush floral centerpieces, and Chiavari chairs that matched her color palette perfectly.",
        localVenue:
          "San Elijo Hills private homes and community spaces in The Crossings are popular baby shower venues in San Marcos.",
        deliveryNote:
          "Baby shower delivery to San Marcos is available from our Carlsbad warehouse with pricing confirmed before you book; free warehouse pickup is always an option.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to a San Elijo Hills home in San Marcos?",
            answer:
              "Yes — San Elijo Hills is a frequent delivery destination for baby showers. We deliver tables, chairs, linens, and centerpieces and walk you through the delivery before your guests arrive.",
          },
          {
            question: "What linen colors are popular for San Marcos baby showers?",
            answer:
              "Blush, sage, ivory, and soft lavender are popular choices for San Marcos baby showers. We carry a full range — share your palette when requesting a quote and we'll build a coordinated package.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "San Marcos is home to Cal State San Marcos and several strong high schools, which means graduation season brings a surge of celebrations every May and June. Families in San Elijo Hills, Twin Oaks, and Woodland Park throw parties that honor their graduate in style. Kelari Party Rentals delivers tables, chairs, tents, and school-colored linens for graduation parties of any size throughout San Marcos. One Twin Oaks family celebrated their CSUSM graduate with a 70-person backyard party; we delivered a 20×30 frame tent, eight round tables, and school-colored linens in a single morning delivery.",
        localVenue:
          "Spacious backyards in San Elijo Hills and Bradley Park are San Marcos's most popular venues for graduation party celebrations.",
        deliveryNote:
          "Graduation season fills fast — book your San Marcos delivery window 2–3 weeks ahead for May and June dates.",
        faqs: [
          {
            question: "Do you deliver graduation party rentals for Cal State San Marcos celebrations?",
            answer:
              "Yes — CSUSM graduation is one of our busiest San Marcos weekends. We handle all sizes, from intimate family gatherings to large multi-family celebrations. Book early to guarantee your date.",
          },
          {
            question: "Can you accommodate a large graduation party at a San Marcos park?",
            answer:
              "Absolutely. Bradley Park is a great venue for larger graduation gatherings. We deliver to your reserved area and handle everything through post-event pickup — just confirm your park reservation before booking.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Engagement parties in San Marcos reflect the community's warmth and close-knit character. Whether the celebration is in a San Elijo Hills backyard with hillside views or a private community space in The Crossings, Kelari Party Rentals brings premium tables, Chiavari chairs, luxury linens, and ambient lighting to make the setting feel as special as the occasion. One Discovery Hills couple recently celebrated their engagement with 50 guests in their backyard; we delivered round tables with champagne linens, votive clusters, and string lights for a warm, intimate evening.",
        localVenue:
          "San Elijo Hills backyards with hillside views and community spaces in The Crossings provide naturally scenic settings for San Marcos engagement parties.",
        deliveryNote:
          "Delivery to San Marcos engagement parties is available from our Carlsbad warehouse — pricing is based on distance and confirmed upfront.",
        faqs: [
          {
            question: "Can you create an elegant engagement party setup in a San Marcos backyard?",
            answer:
              "Yes — string lights, round tables with floor-length linens, Chiavari chairs, and floral centerpieces are our most popular combination for San Marcos engagement parties. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
          },
          {
            question: "Do you deliver engagement party rentals to Discovery Hills or San Elijo Hills in San Marcos?",
            answer:
              "Absolutely. Both neighborhoods are popular delivery destinations for engagement parties. We deliver everything ready to go so the hosts can focus on welcoming their guests.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "San Marcos parks are the heartbeat of neighborhood life and one of the most popular venues for birthday parties, family reunions, and community celebrations. Bradley Park and Jack Henley Park both offer open lawn areas suited to tent setups and gatherings of 40+ guests, while Richmar Park is a neighborhood favorite for more intimate events. Kelari Party Rentals delivers tables, chairs, canopies, and décor to your reserved San Marcos park spot, arriving early to have everything ready before your first guest. One family used Bradley Park for a 65-person reunion; we delivered two canopies, six banquet tables, 65 folding chairs, and linens — assembled before the park gates opened.",
        localVenue:
          "Bradley Park and Jack Henley Park are San Marcos's most popular park party venues, offering open lawns and pavilion access for large events.",
        deliveryNote:
          "We deliver to all San Marcos parks from our Carlsbad warehouse — delivery fee is quoted upfront, and complimentary pickup is available if you prefer to transport items yourself.",
        faqs: [
          {
            question: "Do you need a permit to have party rentals delivered to San Marcos parks?",
            answer:
              "Most San Marcos parks require a reservation or facility permit for events with equipment. We recommend checking with the City of San Marcos Parks & Recreation before booking — we can advise on typical logistics.",
          },
          {
            question: "Which San Marcos parks do you deliver party rentals to?",
            answer:
              "We deliver to Bradley Park, Jack Henley Park, Richmar Park, Woodland Park, and other San Marcos parks. Share your reserved area when you book and we'll plan the delivery accordingly.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "For San Marcos customers, Kelari Party Rentals offers reliable delivery from our Carlsbad warehouse — a straightforward drive up the 5 or 78. Professional delivery is priced by distance and quoted upfront before you commit. Prefer no delivery fee? Our complimentary warehouse pickup at 5674 El Camino Real is always available, and many San Marcos customers find the drive easy. One Woodland Park family picked up tables and chairs for a neighborhood HOA event, returned them the next day, and had zero delivery fee — and said they'd do it again.",
        localVenue:
          "Our El Camino Real warehouse in Carlsbad is the delivery and pickup hub for San Marcos customers — under 30 minutes from most San Marcos neighborhoods.",
        deliveryNote:
          "San Marcos falls within our regular delivery area — pricing covers your specific address and is quoted upfront with no surprises.",
        faqs: [
          {
            question: "How long does delivery from Carlsbad to San Marcos take?",
            answer:
              "Most San Marcos addresses are 20–30 minutes from our Carlsbad warehouse. We confirm your delivery window at booking and arrive with enough lead time before your event starts.",
          },
          {
            question: "Can I pick up party rentals from your Carlsbad warehouse for a San Marcos event?",
            answer:
              "Yes — complimentary pickup and dropoff is always available at 5674 El Camino Real. It's a popular option for San Marcos customers with a vehicle large enough to carry their order.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras are a cornerstone celebration in San Marcos's vibrant community, and Kelari Party Rentals is experienced in making these milestone events unforgettable. Whether the party is hosted in a San Elijo Hills backyard, a community hall in The Crossings, or a lakeside venue near Discovery Lake, we deliver elegant Chiavari chairs, premium floor-length linens, candelabra centerpieces, and full tent coverage to bring the quinceañera vision to life. One San Marcos family recently celebrated their daughter's quinceañera with 95 guests in their backyard; we delivered silver Chiavari chairs, round tables with floor-length ivory linens, floral centerpieces, and a 20×30 frame tent.",
        localVenue:
          "San Elijo Hills backyards and community spaces near Discovery Lake are San Marcos's most popular quinceañera venues.",
        deliveryNote:
          "Quinceañera deliveries to San Marcos are available from our Carlsbad warehouse — we recommend booking 3–4 weeks ahead to secure your date and confirm your color theme.",
        faqs: [
          {
            question: "Do you provide quinceañera rentals for large events in San Marcos?",
            answer:
              "Yes — we're fully equipped for quinceañera setups of 60–150+ guests in San Marcos. We provide Chiavari chairs, round tables, premium linens, centerpieces, and frame tents for outdoor and indoor venues.",
          },
          {
            question: "Can you match our quinceañera color theme for a San Marcos event?",
            answer:
              "Absolutely. We carry linens, table runners, and accent pieces in a wide range of colors. Share your color palette when you request a quote and we'll build a fully coordinated package for your San Marcos celebration.",
          },
        ],
      },
    },
  },
  {
    slug: "bressi-ranch",
    categories: [], // Phase 1: not yet enabled — see rollout notes
    name: "Bressi Ranch",
    county: "San Diego",
    state: "CA",
    zip: ["92010"],
    meta: {
      title: "Party Rentals in Bressi Ranch, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Bressi Ranch, Carlsbad. Your neighborhood party rental team — stress-free.",
    },
    headline: "Bressi Ranch Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your Bressi Ranch venue — stress-free.",
    intro:
      "Bressi Ranch's beautiful planned community is one of Carlsbad's most popular spots for backyard celebrations and neighborhood gatherings. Kelari Party Rentals delivers tables, chairs, tents, linens, and décor right to your Bressi Ranch home. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, you can enjoy every moment.",
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
    heroImage: heroImages.babyShowerNew,
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
        question: "Can rentals be delivered to Bressi Ranch Community Park?",
        answer:
          "Absolutely. We regularly deliver to Bressi Ranch Community Park and nearby Alga Norte and Poinsettia Park. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
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
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Bressi Ranch is one of Carlsbad's most beloved planned communities — wide streets, manicured landscaping, and homes with generous backyard spaces make it a natural setting for celebrations. From upscale birthday gatherings to HOA block parties at Bressi Ranch Community Park, the neighborhood has a year-round party culture that Kelari Party Rentals knows well. Our warehouse is just minutes away, so delivery is fast and scheduling is flexible. One Bressi Ranch family hosted an HOA community event for 80 neighbors; we delivered eight banquet tables, 80 folding chairs, two pop-up canopies, and coordinated linens the morning of the event.",
        localVenue:
          "Bressi Ranch Community Park and large private backyards throughout the neighborhood are the most popular settings for full party rental setups.",
        deliveryNote:
          "Our Carlsbad warehouse is minutes from Bressi Ranch — delivery rates are among our lowest, and complimentary pickup at El Camino Real is always free.",
        faqs: [
          {
            question: "Do you deliver party rentals to Bressi Ranch in Carlsbad?",
            answer:
              "Yes — Bressi Ranch is one of our closest and most-requested delivery neighborhoods. Our warehouse on El Camino Real is just minutes away, which means fast delivery and flexible scheduling.",
          },
          {
            question: "What's a typical party rental setup for a Bressi Ranch backyard event?",
            answer:
              "A typical Bressi Ranch setup includes a 10×20 or 20×20 canopy, three to five tables, 30–50 folding or Chiavari chairs, and coordinating linens. We customize for your guest count and yard size.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Birthday parties in Bressi Ranch tend toward the upscale — it's that kind of neighborhood. Whether it's a princess-themed 5th birthday in the backyard or an elegant 40th with Chiavari chairs and linen-draped tables, Kelari Party Rentals delivers the right setup. Alga Norte Community Park and Bressi Ranch Community Park are popular venues for kids' birthdays, and many Bressi Ranch backyards are perfectly sized for larger adult celebrations. One Bressi Ranch family celebrated their twins' 7th birthday at Alga Norte Community Park with two canopies, tables and chairs, and a colorful balloon arch that made the whole park feel festive.",
        localVenue:
          "Bressi Ranch Community Park and Alga Norte Community Park are the most popular birthday party venues in and around Bressi Ranch.",
        deliveryNote:
          "Delivery to Bressi Ranch birthdays is fast — our warehouse is minutes away. Free warehouse pickup at El Camino Real is also available.",
        faqs: [
          {
            question: "Can you deliver birthday party rentals to Alga Norte Community Park for a Bressi Ranch event?",
            answer:
              "Yes — Alga Norte is a popular delivery location for Bressi Ranch birthday parties. We coordinate around your park reservation and have everything ready before the birthday guest of honor arrives.",
          },
          {
            question: "Do you have upscale birthday party packages for Bressi Ranch events?",
            answer:
              "Absolutely. Chiavari chairs, round tables with linen covers, themed centerpieces, and canopies are popular for Bressi Ranch birthday setups. We customize every package to your event style and guest count.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Bressi Ranch backyards are among Carlsbad's best-proportioned outdoor party spaces — larger lots, clean landscaping, and wide side yards that accommodate frame tent setups with ease. Whether you're hosting 25 close friends or 70 neighbors for a block party, Kelari Party Rentals delivers everything to make your Bressi Ranch backyard the venue of the evening. Our warehouse is just minutes away, making us one of the fastest delivery options in North County. One Bressi Ranch couple hosted a 65-person anniversary party in their backyard; we delivered a 20×20 frame tent, eight round tables, 65 Chiavari chairs, and string lights — and had everything delivered well before cocktail hour.",
        localVenue:
          "Bressi Ranch's newer-construction homes with large, level backyards are ideal for frame tent setups — one of our most tent-friendly delivery neighborhoods.",
        deliveryNote:
          "Bressi Ranch is in our immediate delivery zone — same-day delivery is sometimes available, and warehouse pickup at El Camino Real is always free.",
        faqs: [
          {
            question: "Can you set up a tent in a typical Bressi Ranch backyard?",
            answer:
              "Most Bressi Ranch yards can accommodate a 10×20 or 20×20 tent comfortably. The flat, well-maintained lots are among the easiest we work with. We assess the space on arrival and finalize the layout.",
          },
          {
            question: "Do you offer evening party lighting for Bressi Ranch backyard events?",
            answer:
              "Yes — string lights and LED uplighting are popular additions for Bressi Ranch evening parties. The community's warm climate makes outdoor night events especially enjoyable, and the right lighting sets the perfect mood.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Bressi Ranch is full of young families, and baby showers are one of the neighborhood's most beloved celebrations. Whether the shower is hosted in a beautifully landscaped backyard or a community space near Village Square, Kelari Party Rentals provides elegantly coordinated tables, linens, centerpieces, and seating to make every shower feel like an event. We deliver everything ready to set up beautifully and return for pickup — so the host can be a guest at her own party. One Bressi Ranch host recently threw a 50-person baby shower in her backyard; we delivered blush and gold linens, floral centerpieces, and Chiavari chairs — and guests complimented the décor for weeks.",
        localVenue:
          "Beautifully landscaped Bressi Ranch backyards are the most popular venue for baby showers in the neighborhood, with community spaces near Village Square as an alternative.",
        deliveryNote:
          "Delivery to Bressi Ranch baby showers is among our shortest routes — or pick up from our El Camino Real warehouse at no charge.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to a Bressi Ranch home?",
            answer:
              "Yes — Bressi Ranch is one of our closest delivery neighborhoods. We deliver tables, chairs, linens, and centerpieces and walk you through the delivery before guests arrive, making the morning stress-free for the host.",
          },
          {
            question: "What linen and décor styles are popular for Bressi Ranch baby showers?",
            answer:
              "Blush, ivory, and gold palettes are especially popular in Bressi Ranch. We carry a full range of linen colors, table runners, and centerpiece options — share your color theme when you request a quote.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Bressi Ranch families celebrate their graduates with the style the neighborhood is known for. Whether the party is for a Carlsbad High senior or a La Costa Canyon grad, backyard graduation parties in Bressi Ranch are a spring tradition — and Kelari Party Rentals is right around the corner. We deliver tables, chairs, tents, and school-colored linens and have the party ready before the first guests arrive. One Bressi Ranch family hosted a 75-person graduation party for their Carlsbad High senior; we delivered a 20×30 frame tent, nine round tables, and navy-and-gold linens the morning of the ceremony — it was all set before they got home.",
        localVenue:
          "Large Bressi Ranch backyards and nearby Stagecoach Park are popular graduation party venues for Bressi Ranch families.",
        deliveryNote:
          "Bressi Ranch's proximity to our warehouse means we can accommodate tighter delivery windows — book 2–3 weeks ahead for May and June to guarantee your date.",
        faqs: [
          {
            question: "How early should I book graduation party rentals for a Bressi Ranch event?",
            answer:
              "We recommend booking 2–3 weeks ahead, especially for May and June weekends. Bressi Ranch deliveries are among our shortest runs, so we can sometimes fit last-minute orders — but booking early guarantees your date.",
          },
          {
            question: "Can you handle a large graduation party in a Bressi Ranch backyard?",
            answer:
              "Yes — many Bressi Ranch yards can comfortably fit a 20×20 or 20×30 tent, multiple tables, and 60–80+ chairs. We assess the space on delivery and adjust the layout to maximize your yard.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Engagement parties in Bressi Ranch often set a high bar — this is a community that appreciates quality and attention to detail. Whether the celebration is an intimate garden dinner for 30 or a full backyard affair for 70, Kelari Party Rentals provides premium tables, Chiavari chairs, luxury linens, and romantic lighting to create a setting that honors the occasion. One Bressi Ranch couple hosted an engagement party for 55 guests in their backyard; we delivered round tables with ivory floor-length linens, gold Chiavari chairs, votive clusters, and bistro lights — and the couple said it was exactly the vibe they'd envisioned.",
        localVenue:
          "Bressi Ranch's well-maintained private backyards are the go-to venue for engagement parties in the neighborhood, offering upscale surroundings without a venue fee.",
        deliveryNote:
          "Bressi Ranch is in our immediate delivery zone — pricing is among our lowest, and warehouse pickup on El Camino Real is always available at no charge.",
        faqs: [
          {
            question: "Can you create an elegant engagement party setup in a Bressi Ranch backyard?",
            answer:
              "Absolutely. Our most popular Bressi Ranch engagement setups pair gold Chiavari chairs with round tables, floor-length ivory linens, floral centerpieces, and string lights — a refined look that fits the neighborhood's style.",
          },
          {
            question: "Do you offer same-day or last-minute delivery for engagement parties in Bressi Ranch?",
            answer:
              "Because our warehouse is just minutes from Bressi Ranch, we can sometimes accommodate last-minute requests. Contact us as early as possible and we'll let you know what's available for your date.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Bressi Ranch Community Park is the neighborhood's central gathering spot — well-maintained lawns, pavilion access, and easy parking make it ideal for birthday parties, HOA events, and family reunions. Alga Norte Community Park and Poinsettia Park are both within a short drive for larger setups. Kelari Party Rentals delivers tables, chairs, canopies, and décor to all parks in and around Bressi Ranch, arriving early to have everything in place before your event begins. One neighborhood family used Bressi Ranch Community Park for a 60-person birthday celebration; we delivered two canopies, five tables, and 60 folding chairs with linens an hour before guests arrived.",
        localVenue:
          "Bressi Ranch Community Park is the neighborhood's most popular park party venue, with open lawns and pavilion facilities for events of any size.",
        deliveryNote:
          "Park deliveries in Bressi Ranch are among our fastest — our warehouse is minutes away, making early-morning delivery windows easy to accommodate.",
        faqs: [
          {
            question: "Can you deliver party rentals to Bressi Ranch Community Park?",
            answer:
              "Yes — Bressi Ranch Community Park is one of our most-requested delivery locations. We coordinate with your reservation time and have everything delivered before the event begins.",
          },
          {
            question: "Do I need a permit to use rental equipment at Bressi Ranch Community Park?",
            answer:
              "Most events with equipment at Bressi Ranch Community Park require a reservation or permit from the City of Carlsbad Parks and Recreation Department. We can advise on typical requirements once your reservation is confirmed.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "For Bressi Ranch customers, Kelari Party Rentals offers the fastest delivery in our service area — our El Camino Real warehouse is just minutes from most Bressi Ranch homes. Professional delivery is priced by distance from the warehouse and quoted upfront; for Bressi Ranch addresses, delivery fees are among our lowest. Prefer to skip delivery entirely? Complimentary pickup at our Carlsbad warehouse is always available, and many Bressi Ranch customers walk in, load up, and are home in under 20 minutes. One Bressi Ranch neighbor picked up tables and chairs for her daughter's bridal shower, had everything home in minutes, and returned the rentals the next morning — no delivery fee, no hassle.",
        localVenue:
          "Our El Camino Real warehouse is just minutes from Bressi Ranch — the shortest delivery route in our entire service area.",
        deliveryNote:
          "Bressi Ranch is in our immediate service zone — delivery pricing starts at our lowest rate, and complimentary warehouse pickup is always free.",
        faqs: [
          {
            question: "Is same-day delivery available for Bressi Ranch events?",
            answer:
              "Because Bressi Ranch is minutes from our warehouse, same-day delivery is sometimes possible when inventory allows. Contact us as early as you can and we'll do our best to accommodate your timeline.",
          },
          {
            question: "How does delivery pricing work for Bressi Ranch customers?",
            answer:
              "Delivery is priced by distance from our Carlsbad warehouse. Bressi Ranch is one of our closest neighborhoods, so rates are among the lowest in our service area. We quote the exact fee upfront — and warehouse pickup is always free.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras in Bressi Ranch bring the community together in a big way — these milestone celebrations fill backyards with color, family, and joy. Whether the party is hosted at a private Bressi Ranch home or a nearby venue in Carlsbad, Kelari Party Rentals delivers elegant Chiavari chairs, premium floor-length linens, candelabra centerpieces, and tent coverage for quinceañera setups of every scale. Our warehouse is just minutes away, making us one of the most reliable delivery options for quinceañera families. One Bressi Ranch family celebrated their daughter's quinceañera with 100 guests in their backyard; we delivered gold Chiavari chairs, round tables with floor-length blush linens, floral centerpieces, and a 20×30 frame tent.",
        localVenue:
          "Large Bressi Ranch backyards and nearby Carlsbad venues are the most popular quinceañera settings for Bressi Ranch families.",
        deliveryNote:
          "Quinceañera deliveries to Bressi Ranch are among our fastest — our warehouse is minutes away. Book 3–4 weeks ahead to secure your date and finalize your package.",
        faqs: [
          {
            question: "Do you provide quinceañera rentals for large events in Bressi Ranch?",
            answer:
              "Yes — we're fully equipped for quinceañera setups of 60–120+ guests in Bressi Ranch. We provide Chiavari chairs, round tables, floor-length linens, centerpieces, and frame tents for outdoor events.",
          },
          {
            question: "Can you match our quinceañera color theme for a Bressi Ranch event?",
            answer:
              "Absolutely. We carry linens, table runners, and accent pieces in a full range of colors. Share your color palette when you request a quote and we'll build a coordinated package for your Bressi Ranch quinceañera.",
          },
        ],
      },
    },
  },
  {
    slug: "la-costa",
    categories: [], // Phase 1: not yet enabled — see rollout notes
    name: "La Costa",
    county: "San Diego",
    state: "CA",
    zip: ["92009"],
    meta: {
      title: "Party Rentals in La Costa, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in La Costa, Carlsbad. Full-service party rentals for La Costa homes and venues.",
    },
    headline: "La Costa Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your La Costa venue — stress-free.",
    intro:
      "La Costa is one of North County San Diego's most sought-after communities — and Kelari Party Rentals is proud to serve it. From elegant backyard celebrations to casual family gatherings, we deliver everything you need: tables, chairs, tents, linens, and décor. We deliver, you celebrate, we pick up.",
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
    heroImage: heroImages.engagementNew,
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
          "Absolutely. We regularly deliver to La Costa Canyon Park, Alga Norte, Stagecoach Park, and other nearby venues. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
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
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "La Costa is one of North County San Diego's most prestigious communities, home to the Omni La Costa Resort & Spa and a golf-course lifestyle that sets a high bar for celebrations. Whether you're hosting an upscale garden party in La Costa Valley, a milestone celebration in La Costa Oaks, or a family reunion at La Costa Canyon Park, Kelari Party Rentals delivers tables, chairs, tents, linens, and décor to your door and handles every detail. One La Costa Ridge family recently hosted a 55-person anniversary celebration in their backyard; we delivered round tables, gold Chiavari chairs, ivory floor-length linens, and a garden canopy — and their guests asked for our card before they left.",
        localVenue:
          "La Costa Canyon Park and private estate backyards in La Costa Valley and La Costa Oaks are La Costa's most popular settings for full party rental setups.",
        deliveryNote:
          "La Costa is part of Carlsbad — our El Camino Real warehouse is just minutes away. Delivery fees are among our lowest, and free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you match the upscale aesthetic of La Costa events near the Omni La Costa Resort?",
            answer:
              "Absolutely. We carry Chiavari chairs, floor-length linens, floral centerpieces, and premium décor packages suited to La Costa's elegant style. Our packages are fully customized — not off-the-shelf.",
          },
          {
            question: "Do you deliver party rentals to La Costa Valley and La Costa Oaks?",
            answer:
              "Yes — we deliver throughout La Costa including La Costa Valley, La Costa Oaks, La Costa Greens, La Costa Ridge, and La Costa Meadows. Our Carlsbad warehouse is just minutes away.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Milestone birthday parties are a La Costa specialty. Whether it's an elegant 50th in a La Costa Meadows backyard, a milestone kids' celebration at La Costa Canyon Park, or a lavish outdoor dinner for 80 guests, the standard in La Costa is elevated — and Kelari Party Rentals rises to meet it. We deliver birthday party tables, chairs, canopies, and themed décor and handle all logistics so the host can focus on the guest of honor. One La Costa Greens family recently celebrated a father's 60th birthday with 70 guests; we delivered a 20×20 canopy, eight round tables, gold Chiavari chairs, and champagne linens — a setup that looked like it belonged in a magazine.",
        localVenue:
          "La Costa Canyon Park and luxury estate backyards in La Costa Valley are the most popular birthday party venues in La Costa.",
        deliveryNote:
          "Since La Costa is within Carlsbad, delivery from our warehouse takes just minutes — and complimentary pickup at El Camino Real is always free.",
        faqs: [
          {
            question: "Can you set up an elegant birthday party in a La Costa backyard?",
            answer:
              "Yes — upscale birthday setups with Chiavari chairs, floor-length linens, floral centerpieces, and canopies are very popular in La Costa. We customize every package to your guest count and event style.",
          },
          {
            question: "Do you deliver kids' birthday party rentals to La Costa Canyon Park?",
            answer:
              "Absolutely. La Costa Canyon Park is a great venue for kids' birthday parties. We deliver tables, chairs, and a canopy to your reserved area before your guests arrive.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "La Costa backyards are made for entertaining. La Costa Valley, La Costa Oaks, and La Costa Ridge homes often feature expansive lot sizes, mature landscaping, and outdoor spaces that set the scene for truly memorable celebrations. Whether you're planning an intimate garden dinner or a full-scale outdoor event for 100 guests, Kelari Party Rentals delivers tables, chairs, tents, lighting, and décor and handles the entire setup and pickup. One La Costa Oaks family recently hosted an outdoor anniversary dinner for 60 guests; we delivered a 20×30 frame tent, eight round tables, Chiavari chairs, linen runners, and string lights — the yard looked like a private event venue.",
        localVenue:
          "Estate backyards in La Costa Valley and La Costa Oaks provide expansive, elegantly landscaped settings ideal for full tent and table setups.",
        deliveryNote:
          "As a Carlsbad neighborhood, La Costa is a very short drive from our El Camino Real warehouse — delivery fees are among our lowest, and free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you set up a large tent in a La Costa backyard?",
            answer:
              "Most La Costa properties in La Costa Valley and La Costa Oaks can accommodate a 20×20 or 20×30 frame tent. The spacious, well-landscaped lots make La Costa one of our most tent-friendly delivery neighborhoods.",
          },
          {
            question: "Do you offer evening lighting for La Costa backyard events?",
            answer:
              "Yes — string lights and LED uplighting are popular additions for La Costa evening parties. The warm climate and elegant outdoor spaces in La Costa are perfect for extended outdoor celebrations after dark.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Baby showers in La Costa have a naturally elegant character — the community's luxury homes, manicured gardens, and resort-adjacent setting create a beautiful backdrop for this intimate milestone. Kelari Party Rentals provides beautifully coordinated tables, linens, centerpieces, and seating that match La Costa's standard of presentation. One La Costa Ridge host threw a 45-person garden baby shower in her backyard; we delivered blush and ivory linens, floral centerpieces, and Chiavari chairs arranged in her garden — guests complimented the setup all morning.",
        localVenue:
          "Private estate gardens in La Costa Valley and La Costa Ridge provide naturally elegant settings for La Costa baby showers.",
        deliveryNote:
          "La Costa is minutes from our Carlsbad warehouse on El Camino Real — delivery is fast and rates are low. Free warehouse pickup is also always an option.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to a La Costa home?",
            answer:
              "Yes — La Costa is one of our most frequently served neighborhoods for baby showers. We deliver tables, chairs, linens, and centerpieces and walk you through the delivery so the host has everything she needs.",
          },
          {
            question: "What décor styles are popular for La Costa baby showers?",
            answer:
              "Soft ivory, blush, sage, and champagne palettes are popular for La Costa baby showers — they complement the neighborhood's upscale, natural aesthetic. We carry a full range of linen and accent colors.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "La Costa families celebrate their graduates with the style the neighborhood is known for. Grads from La Costa Canyon High and other North County schools are honored with full outdoor parties in La Costa Valley and La Costa Oaks backyards — often with 60 to 100 guests. Kelari Party Rentals delivers tables, chairs, tents, and school-colored linens for graduation parties of any size in La Costa. One La Costa Greens family celebrated their La Costa Canyon High grad with 80 guests in their backyard; we delivered a 20×30 frame tent, nine round tables, and school-colored linens the morning of the ceremony — ready by the time they drove home from graduation.",
        localVenue:
          "Spacious estate backyards throughout La Costa Valley and La Costa Oaks are La Costa's most popular graduation party venues, with La Costa Canyon Park as a park alternative.",
        deliveryNote:
          "Graduation deliveries to La Costa are quick — same Carlsbad city as our warehouse. Book 2–3 weeks ahead for May and June weekends; free warehouse pickup is also available.",
        faqs: [
          {
            question: "Can you handle a large graduation party in La Costa?",
            answer:
              "Yes — La Costa properties often have space for 20×20 or 20×30 tents and 60–100+ guests. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, the family can focus on celebrating the graduate.",
          },
          {
            question: "How early should I book graduation party rentals for a La Costa Canyon High grad party?",
            answer:
              "We recommend 2–3 weeks ahead for La Costa graduation parties. May and June weekends fill quickly, especially right after La Costa Canyon High ceremonies. Contact us early to secure your date.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "La Costa is one of the most romantic settings in North County for an engagement party. The Omni La Costa Resort sets the tone for the neighborhood's upscale event culture, and private estate gardens in La Costa Valley and La Costa Oaks live up to that reputation. Kelari Party Rentals provides premium tables, Chiavari chairs, luxury linens, and ambient lighting to create an engagement party setting that honors the occasion. One La Costa Valley couple recently hosted an engagement party for 60 guests in their garden; we delivered round tables with ivory floor-length linens, gold Chiavari chairs, floral centerpieces, and bistro lights strung across the pergola — the space looked more stunning than any event venue.",
        localVenue:
          "Private estate gardens in La Costa Valley and La Costa Oaks are La Costa's most sought-after engagement party settings, rivaling the Omni La Costa Resort in beauty without the venue fee.",
        deliveryNote:
          "Delivery within Carlsbad is among our fastest — La Costa is just minutes from our El Camino Real warehouse, and free pickup is always available.",
        faqs: [
          {
            question: "Can you create an upscale engagement party setup that matches the Omni La Costa aesthetic?",
            answer:
              "Absolutely. Chiavari chairs, round tables with floor-length linens, floral centerpieces, and string lights or uplighting are our most popular La Costa engagement setup — a look that holds its own against any resort venue.",
          },
          {
            question: "Do you deliver engagement party rentals to La Costa Valley and La Costa Oaks?",
            answer:
              "Yes — both neighborhoods are frequent delivery destinations for elegant engagement parties. We handle every detail so the hosts can greet their guests rather than moving furniture.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "La Costa Canyon Park is the neighborhood's top outdoor event venue — its well-maintained lawns and natural surroundings are a natural choice for birthday parties, family reunions, and community celebrations. Stagecoach Community Park is a popular nearby alternative for larger setups. Kelari Party Rentals delivers tables, chairs, canopies, and décor to both parks, arriving early to have everything delivered and in place before your first guest. One family reserved the lower lawn at La Costa Canyon Park for a 55-person birthday party; we delivered two canopies, five tables, and 55 folding chairs with linens — everything set up 90 minutes before the first guest arrived.",
        localVenue:
          "La Costa Canyon Park and Stagecoach Community Park are La Costa's most popular outdoor venues for park party rental setups.",
        deliveryNote:
          "Park deliveries in La Costa are among our shortest routes — same Carlsbad city as our warehouse. Free warehouse pickup is always available for families who prefer to transport items.",
        faqs: [
          {
            question: "Do you deliver party rentals to La Costa Canyon Park?",
            answer:
              "Yes — La Costa Canyon Park is one of our most-requested La Costa delivery locations. We coordinate with your park reservation and arrive early to drop everything off before guests arrive.",
          },
          {
            question: "Do I need a permit for a party at La Costa Canyon Park?",
            answer:
              "Most park events with equipment require a reservation or facility permit. We recommend checking with the City of Carlsbad Parks and Recreation Department — and we can advise on typical logistics once your reservation is confirmed.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "For La Costa customers, Kelari Party Rentals offers delivery from our Carlsbad warehouse that's genuinely just around the corner. La Costa is in our immediate service area — delivery is priced by distance and quoted upfront, and for La Costa addresses, fees are among our lowest. Want to skip delivery entirely? Complimentary warehouse pickup at our El Camino Real location is always available, and the drive from La Costa takes under 10 minutes for most addresses. One La Costa Valley family picked up tables and chairs for a backyard graduation party, loaded up in minutes, and returned everything the next morning — zero delivery fee.",
        localVenue:
          "Our El Camino Real warehouse is just a short drive from La Costa — among our nearest neighborhoods for both delivery and free pickup.",
        deliveryNote:
          "La Costa is within Carlsbad — our closest delivery zone. Delivery fees are the lowest in our service area, and free warehouse pickup at El Camino Real is always an option.",
        faqs: [
          {
            question: "How much does delivery cost from the Carlsbad warehouse to La Costa?",
            answer:
              "La Costa is within Carlsbad — our closest delivery zone — so fees are among the lowest we offer. The exact fee is quoted upfront. Want to avoid delivery entirely? Free warehouse pickup at El Camino Real is always available.",
          },
          {
            question: "Is same-day delivery available for La Costa events?",
            answer:
              "Because La Costa is just minutes from our El Camino Real warehouse, same-day delivery is sometimes possible when inventory allows. Contact us early and we'll do our best to accommodate.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras in La Costa are some of the most beautiful we deliver for — the neighborhood's elegant homes and manicured outdoor spaces create a natural backdrop for this milestone celebration. Whether the party is hosted in a La Costa Valley estate garden or a large La Costa Oaks backyard, Kelari Party Rentals delivers Chiavari chairs, premium floor-length linens, candelabra centerpieces, and full tent coverage to make the setting worthy of the occasion. One La Costa family recently celebrated their daughter's quinceañera with 100 guests in their backyard; we delivered gold Chiavari chairs, round tables with floor-length rose gold linens, floral centerpieces for every table, and a 20×30 frame tent.",
        localVenue:
          "Private estate gardens in La Costa Valley and La Costa Oaks are among the most beautiful quinceañera settings in North County — no hall rental required.",
        deliveryNote:
          "La Costa is just minutes from our Carlsbad warehouse — delivery is fast and rates are among our lowest. Book 3–4 weeks ahead for quinceañeras, and free warehouse pickup is always an option.",
        faqs: [
          {
            question: "Can you set up an elegant quinceañera in a La Costa backyard?",
            answer:
              "Absolutely. La Costa's estate properties are among our most tent-friendly and beautifully appointed venues. We bring Chiavari chairs, round tables, floor-length linens, candelabra centerpieces, and a frame tent if needed.",
          },
          {
            question: "Can you match our quinceañera color theme for a La Costa event?",
            answer:
              "Yes — we carry linens, satin runners, and accent pieces in a full range of colors. Share your color palette when you request a quote and we'll build a fully coordinated package for your La Costa quinceañera.",
          },
        ],
      },
    },
  },
  {
    slug: "olde-carlsbad",
    categories: [], // Phase 1: not yet enabled — see rollout notes
    name: "Olde Carlsbad",
    county: "San Diego",
    state: "CA",
    zip: ["92008"],
    meta: {
      title: "Party Rentals in Olde Carlsbad, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Olde Carlsbad. Local party rental experts serving the heart of Carlsbad.",
    },
    headline: "Olde Carlsbad Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your Olde Carlsbad venue — stress-free.",
    intro:
      "Olde Carlsbad's charming neighborhoods and tree-lined streets are the perfect backdrop for memorable celebrations. Kelari Party Rentals delivers tables, chairs, tents, linens, and décor directly to your Olde Carlsbad home or venue. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, you can focus on your guests.",
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
    heroImage: heroImages.parkPartyNew,
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
        question: "Can rentals be delivered to Holiday Park or Hosp Grove?",
        answer:
          "Absolutely. We regularly deliver to Holiday Park, Hosp Grove, and Pine Avenue Park. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
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
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Olde Carlsbad is where Carlsbad's original character lives — tree-lined streets, craftsman bungalows, and a community spirit that makes celebrations feel personal and warm. Whether you're hosting a neighborhood backyard party on Magnolia Avenue, a family reunion at Holiday Park, or a gathering at a Pine Avenue bungalow, Kelari Party Rentals delivers tables, chairs, tents, linens, and décor to make it memorable. The cottage-style backyards here are cozy and inviting — we're experienced fitting the right setup into the tighter spaces that make Olde Carlsbad homes so charming. One Harding Street family recently hosted a 40-person neighborhood block party; we delivered six round tables, 40 folding chairs, and a 20×20 frame tent that fit perfectly between the garden and garage.",
        localVenue:
          "Holiday Park is the central outdoor venue for Olde Carlsbad celebrations, with open lawns and historic oak trees that make it one of the most popular party settings in all of Carlsbad.",
        deliveryNote:
          "Olde Carlsbad is our home neighborhood — our El Camino Real warehouse is just a 5-minute drive away. Delivery is among our fastest and most affordable, and free warehouse pickup is always an option.",
        faqs: [
          {
            question: "Can you deliver party rentals to the Carlsbad Village area in Olde Carlsbad?",
            answer:
              "Yes — the Village area is one of our most-requested Olde Carlsbad delivery destinations. We deliver tables, chairs, tents, and décor, with delivery available for an additional fee or free pickup at our Carlsbad warehouse.",
          },
          {
            question: "Can you fit a party tent in a compact Olde Carlsbad backyard?",
            answer:
              "Absolutely. We're experienced with Olde Carlsbad's cottage-style lots and know how to select the right tent or canopy size to maximize the space without overcrowding it.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Birthday parties in Olde Carlsbad have a neighborhood warmth that newer developments can't replicate — friends walk over, families fill the backyard, and the celebration feels rooted in community. Whether it's a kid's birthday at Holiday Park or an adult milestone in a Carlsbad Village bungalow backyard, Kelari Party Rentals delivers the tables, chairs, and décor to make every age worth celebrating in style. Our team is experienced with the cozy cottage-style lots that characterize Olde Carlsbad — we know how to maximize every inch for the best possible setup. One Elm Avenue family celebrated their son's 7th birthday at Holiday Park with 30 kids and parents; we delivered tables, 30 chairs, and a shade canopy — all ready when the piñata arrived.",
        localVenue:
          "Holiday Park is Olde Carlsbad's most popular birthday party venue, with open lawns, picnic areas, and room for canopy setups of all sizes.",
        deliveryNote:
          "Being right in Carlsbad means Olde Carlsbad deliveries are quick and inexpensive — a short drive from our El Camino Real warehouse, with free pickup always available.",
        faqs: [
          {
            question: "Do you deliver birthday party rentals to Holiday Park in Olde Carlsbad?",
            answer:
              "Yes — Holiday Park is one of our most-requested Olde Carlsbad delivery locations. We coordinate with your reservation time and have everything delivered and ready before your guests arrive.",
          },
          {
            question: "Can you set up a birthday party in a small Olde Carlsbad backyard?",
            answer:
              "Absolutely. We're experienced with Olde Carlsbad's compact lots and will recommend the right canopy or tent size to fit your space comfortably without feeling crowded.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Olde Carlsbad's compact craftsman yards are a unique challenge and a unique charm. These cottage-style backyards — smaller than newer Carlsbad developments — call for thoughtful setup that makes the space feel festive rather than crowded. Kelari Party Rentals is experienced with just this kind of space: we help you select the right tent or canopy size and recommend the most efficient table layout to transform a cozy lot into a welcoming gathering spot. One Jefferson Street homeowner was skeptical that a party for 35 guests would work in her backyard — we delivered a 10×20 canopy, four round tables, and 35 chairs in the exact arrangement that made it feel spacious, and she texted us the next day to say it was perfect.",
        localVenue:
          "Craftsman bungalow backyards along Magnolia Avenue, Elm Avenue, and Jefferson Street are Olde Carlsbad's signature backyard party settings.",
        deliveryNote:
          "Olde Carlsbad is steps from our Carlsbad warehouse — delivery fees are minimal and warehouse pickup at El Camino Real is always complimentary.",
        faqs: [
          {
            question: "What size tent works best for a small Olde Carlsbad backyard party?",
            answer:
              "A 10×10 or 10×20 canopy is the most popular choice for Olde Carlsbad's compact lots. We assess the space and recommend the best fit to maximize guests without blocking access.",
          },
          {
            question: "Do you deliver backyard party rentals to homes near Carlsbad Village?",
            answer:
              "Yes — the Village area is a frequent stop for us. We deliver to Village-area homes and can navigate the narrower streets of the older neighborhoods with our delivery vehicles.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Baby showers in Olde Carlsbad carry a community warmth that perfectly suits the neighborhood's close-knit character. Whether hosted in a sunlit craftsman bungalow backyard or the garden patio of a Carlsbad Village home, these celebrations benefit from coordinated linens, elegant seating, and the little details that make the occasion feel as special as it is. Kelari Party Rentals delivers tables, chairs, linens, and centerpieces and arranges everything beautifully so the host can greet guests from the moment they arrive. One Pine Avenue host threw a 30-person backyard baby shower; we delivered blush linens, floral centerpieces, and Chiavari chairs that transformed her cottage patio into a proper garden party setting.",
        localVenue:
          "Cottage garden patios throughout the Carlsbad Village and Pine Avenue neighborhoods are Olde Carlsbad's most charming baby shower settings.",
        deliveryNote:
          "Our El Camino Real warehouse is just minutes from Olde Carlsbad — delivery here is among our fastest and most affordable. Free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to a Carlsbad Village home in Olde Carlsbad?",
            answer:
              "Yes — Carlsbad Village is a frequent delivery destination for baby showers. We deliver tables, chairs, linens, and centerpieces and walk you through the delivery before the guests arrive.",
          },
          {
            question: "What linen styles work well for an Olde Carlsbad cottage-style baby shower?",
            answer:
              "Soft blush, ivory, sage, and lavender palettes complement Olde Carlsbad's craftsman aesthetic beautifully. We carry a full range of linen colors and runner options — share your theme when you request a quote.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Carlsbad High School grads from the Olde Carlsbad community celebrate right in the neighborhood, and their families pull out all the stops. Backyard celebrations in the Village and park parties at Holiday Park are both popular — and Kelari Party Rentals is ready with tables, chairs, tents, and school-colored linens for graduation day. Our team knows how to make the most of a compact Village backyard or an open Holiday Park lawn, delivering and setting up before the grad gets home from the ceremony. One Magnolia Avenue family threw a 50-person Carlsbad High graduation party in their Village backyard; we delivered a 10×20 tent, five round tables, and navy and gold linens — everything in place while they were still applauding at the ceremony.",
        localVenue:
          "Holiday Park is a popular graduation party venue for Olde Carlsbad families, while compact Village backyards are a charming option for more intimate celebrations.",
        deliveryNote:
          "Graduation deliveries to Olde Carlsbad are fast — our El Camino Real warehouse is just a few minutes away. Book early for May and June weekends, and free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you deliver graduation party rentals to a Carlsbad Village backyard in Olde Carlsbad?",
            answer:
              "Yes — Village-area backyards are a frequent graduation party delivery destination for us. We work within the tighter lot sizes and deliver everything before the ceremony ends.",
          },
          {
            question: "Do you deliver graduation party rentals to Holiday Park in Olde Carlsbad?",
            answer:
              "Absolutely. Holiday Park is one of our most-requested Olde Carlsbad park delivery locations for graduation parties. We coordinate with your reservation and have everything delivered in advance.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Olde Carlsbad's historic Village character creates an intimate, romantic atmosphere for engagement celebrations. Craftsman bungalow gardens, tree-lined streets, and walkable proximity to the coast set a tone that's personal and memorable. Whether you're hosting 25 guests in a Magnolia Avenue garden or 60 guests at Holiday Park, Kelari Party Rentals provides round tables, Chiavari chairs, linen runners, and ambient lighting that suits the Village aesthetic beautifully. One Carlsbad Village couple recently celebrated their engagement at Holiday Park with 40 friends and family; we delivered four round tables with champagne linens, Chiavari chairs, and bistro lights that glowed through a perfect North County evening.",
        localVenue:
          "Holiday Park and craftsman garden patios throughout Carlsbad Village are Olde Carlsbad's most intimate and character-filled engagement party settings.",
        deliveryNote:
          "Our warehouse on El Camino Real is practically next door to Olde Carlsbad — delivery is fast, affordable, and free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you set up a romantic outdoor engagement party at Holiday Park in Olde Carlsbad?",
            answer:
              "Absolutely. Holiday Park's mature trees and open lawns make it a beautiful engagement party setting. We deliver round tables, Chiavari chairs, linens, and bistro lights — and handle pickup after your event.",
          },
          {
            question: "Do you deliver engagement party rentals to Carlsbad Village homes?",
            answer:
              "Yes — Village homes are a frequent delivery destination for engagement parties. We're experienced with the cottage-style lots and work within the space to create an elegant, intimate setup.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Holiday Park is the heart of Olde Carlsbad's outdoor social life — a beautiful community park within walking distance of the Village, with mature oak trees, open lawns, and a beloved local atmosphere. Whether you're reserving the main lawn for a big family birthday, setting up a shaded gathering under the oaks, or celebrating at Hosp Grove Park nearby, Kelari Party Rentals delivers tables, chairs, canopies, and décor, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. Holiday Park's walkability makes it a favorite for Village guests who can stroll over. One family hosted a 45-person park birthday at Holiday Park; we delivered a 20×20 canopy, five round tables, and 45 chairs under the oaks an hour before the party started.",
        localVenue:
          "Holiday Park is Olde Carlsbad's most beloved park venue, with open lawns and mature trees that create natural shade and character for outdoor party setups.",
        deliveryNote:
          "Holiday Park is just a short drive from our El Camino Real warehouse — park deliveries here are quick and affordable, and free pickup is always an option for portable items.",
        faqs: [
          {
            question: "Do you deliver party rentals to Holiday Park in Olde Carlsbad?",
            answer:
              "Yes — Holiday Park is our most-requested Olde Carlsbad park delivery location. We coordinate with your reservation time and have tables, chairs, and canopies delivered before your guests arrive.",
          },
          {
            question: "Do I need a permit for a party at Holiday Park in Carlsbad?",
            answer:
              "Most events with equipment at Holiday Park require a facility reservation. Check with the City of Carlsbad Parks and Recreation Department — we can advise on typical logistics once your reservation is confirmed.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "For Olde Carlsbad customers, Kelari Party Rentals is practically a neighbor. Our El Camino Real warehouse is just a short drive away — deliveries in the 92008 zip code are among our fastest and most affordable. If you'd rather skip the delivery fee entirely, warehouse pickup is always complimentary, and most Olde Carlsbad homes are under 10 minutes from our location. One Carlsbad Village homeowner picked up a canopy, four round tables, and 40 chairs from our warehouse for a neighborhood backyard party — loaded up in 15 minutes and was home setting up while others were still searching for a rental company.",
        localVenue:
          "Our El Camino Real warehouse is just minutes from the heart of Olde Carlsbad, making it our nearest delivery destination and one of the most convenient free pickup locations for Village-area customers.",
        deliveryNote:
          "Deliveries within Olde Carlsbad are among our shortest routes — our El Camino Real warehouse is just a couple of minutes away. Free warehouse pickup is always an option.",
        faqs: [
          {
            question: "How much does delivery cost to Olde Carlsbad from your Carlsbad warehouse?",
            answer:
              "Olde Carlsbad is right next door to our warehouse — delivery fees here are among our lowest. The exact fee is quoted upfront. Prefer no delivery fee? Free warehouse pickup at El Camino Real is always available.",
          },
          {
            question: "Can Olde Carlsbad customers pick up rental items from your warehouse?",
            answer:
              "Yes — complimentary pickup at 5674 El Camino Real is always available. Most Olde Carlsbad addresses are just minutes from our warehouse, making pickup a fast and easy option for most events.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras in Olde Carlsbad celebrate a milestone with the warmth and community spirit the neighborhood is known for. Village-area families often host in backyards or nearby community spaces, creating an intimate setting that feels personal and joyful. Kelari Party Rentals delivers Chiavari chairs, round tables, premium floor-length linens, and canopy coverage to transform any Olde Carlsbad space into a celebration-worthy venue. The cottage-style yards here respond beautifully to the right setup — we know how to maximize the space with the right tent size and table arrangement. One Elm Avenue family celebrated their daughter's quinceañera with 60 guests in their expanded backyard; we delivered gold Chiavari chairs, round tables with floor-length fuchsia linens, and a 10×20 frame tent — a magical Village quinceañera setting.",
        localVenue:
          "Pine Avenue Community Center and nearby Carlsbad Village parks are popular quinceañera venue options for Olde Carlsbad families seeking community spaces for larger celebrations.",
        deliveryNote:
          "Because Olde Carlsbad is just minutes from our El Camino Real warehouse, delivery here is among our fastest and most affordable. Free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you set up a quinceañera in a compact Olde Carlsbad backyard?",
            answer:
              "Yes — we're experienced with Olde Carlsbad's compact lots and know how to fit the right tent size, table arrangement, and décor to create a full quinceañera setting even in a cozy space.",
          },
          {
            question: "Do you deliver quinceañera rentals near Carlsbad Village in Olde Carlsbad?",
            answer:
              "Absolutely. Carlsbad Village is just minutes from our warehouse — we deliver Chiavari chairs, round tables, floor-length linens, and canopy coverage — and handle pickup after your event.",
          },
        ],
      },
    },
  },
  {
    slug: "aviara",
    categories: [], // Phase 1: not yet enabled — see rollout notes
    name: "Aviara",
    county: "San Diego",
    state: "CA",
    zip: ["92011"],
    meta: {
      title: "Party Rentals in Aviara, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Aviara, Carlsbad. Elegant full-service party rentals for Aviara homes and venues.",
    },
    headline: "Aviara Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your Aviara venue — stress-free.",
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
    heroImage: heroImages.quinceaneraNew,
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
        question: "Can you handle upscale party deliveries in Aviara?",
        answer:
          "Absolutely. We provide linens, Chiavari chairs, canopies, and full décor packages suited to Aviara's elegant settings.",
      },
      {
        question: "What parks and venues in Aviara do you deliver to?",
        answer:
          "We deliver to Aviara Community Park, Poinsettia Park, Alga Norte, and private homes throughout the Aviara community. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
      },
      {
        question: "How far in advance should I book for an Aviara event?",
        answer:
          "We recommend booking 1–2 weeks ahead, especially for larger or more elaborate setups. Contact us to check availability and discuss your specific rental needs.",
      },
    ],
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Aviara is among North County San Diego's most prestigious addresses — a master-planned community of luxury homes, manicured landscapes, and the world-class Park Hyatt Aviara Resort setting the tone for the neighborhood's event culture. Parties here set the bar high, and Kelari Party Rentals meets that standard with tables, chairs, tents, linens, and custom décor delivered directly to your Aviara home or venue. From intimate garden gatherings in Aviara Oaks to large milestone celebrations with Batiquitos Lagoon as the backdrop, we bring the equipment and expertise that Aviara events deserve. One Aviara Point family hosted a 65-person anniversary celebration in their estate garden; we delivered round tables, gold Chiavari chairs, ivory floor-length linens, and a 20×20 canopy — a setup guests compared to a Park Hyatt garden event.",
        localVenue:
          "Aviara Community Park and private estate gardens in Aviara Oaks and Aviara Point are Aviara's most popular party rental settings, with stunning lagoon-adjacent views.",
        deliveryNote:
          "Aviara is within Carlsbad — our El Camino Real warehouse is just a short drive away. Delivery fees are among our lowest, and complimentary warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you match the upscale aesthetic of a Park Hyatt Aviara–style party?",
            answer:
              "Absolutely. We carry Chiavari chairs, floor-length linens, floral centerpieces, premium canopies, and ambient lighting packages suited to Aviara's luxury standard. Every package is fully customized.",
          },
          {
            question: "Do you deliver party rentals throughout the Aviara community?",
            answer:
              "Yes — we deliver to Aviara Oaks, Aviara Point, Aviara at Cabrillo, Four Seasons Aviara, Pacific Coast Estates, and all surrounding neighborhoods. Delivery is priced by distance and quoted upfront.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Birthday celebrations in Aviara carry the neighborhood's signature elegance — whether it's a milestone 40th in a Four Seasons Aviara–adjacent backyard, a kids' birthday on the lawns of Aviara Community Park, or an intimate garden dinner for 30 close friends with Batiquitos Lagoon views. Kelari Party Rentals delivers birthday party tables, chairs, canopies, and décor to Aviara homes and parks, handling every detail so the host can be fully present for the occasion. One Aviara Oaks family hosted a 70th birthday celebration for 55 guests in their estate garden; we delivered a 20×20 frame tent, eight round tables, gold Chiavari chairs, and coordinated ivory linens — a setup the birthday guest called the best party they'd ever attended.",
        localVenue:
          "Aviara Community Park and private estate gardens in Aviara Oaks and Four Seasons Aviara are Aviara's most popular birthday party settings.",
        deliveryNote:
          "Aviara is in the heart of Carlsbad — our El Camino Real warehouse is less than 10 minutes away. Delivery fees are minimal, and free warehouse pickup is always an option.",
        faqs: [
          {
            question: "Can you set up an elegant birthday party in an Aviara estate backyard?",
            answer:
              "Yes — Aviara's spacious, manicured lots are among our most tent-friendly delivery sites. We deliver Chiavari chairs, round tables, floor-length linens, and canopy coverage — and handle pickup after your event.",
          },
          {
            question: "Do you deliver kids' birthday party rentals to Aviara Community Park?",
            answer:
              "Absolutely. Aviara Community Park is a beautiful venue for kids' birthday parties. We deliver tables, chairs, and a canopy to your reserved area and have everything ready before your guests arrive.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Aviara estate backyards are some of the finest outdoor party settings in all of North County San Diego. With luxury homes, designer landscaping, and ocean or Batiquitos Lagoon views from the upper community, Aviara backyards reward an elevated rental package. Kelari Party Rentals delivers frame tents, Chiavari chairs, premium linens, ambient lighting, and custom décor to Aviara properties, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. We've worked in Aviara at Cabrillo, Aviara Point, and Pacific Coast Estates — the spacious, well-maintained lots are a joy to work with. One Pacific Coast Estates family hosted an outdoor dinner party for 80 guests; we delivered a 20×30 frame tent, nine round tables, Chiavari chairs, floor-length linens, and café lights — the backyard looked like a private luxury event venue.",
        localVenue:
          "Estate backyards throughout Aviara Oaks, Aviara Point, and Pacific Coast Estates provide luxury-level outdoor settings for Aviara's most memorable backyard celebrations.",
        deliveryNote:
          "Our warehouse on El Camino Real is a short drive from Aviara — delivery here is fast and affordable. Complimentary warehouse pickup is always an option for Aviara customers.",
        faqs: [
          {
            question: "Can you set up a large tent in an Aviara estate backyard?",
            answer:
              "Yes — Aviara's spacious properties can typically accommodate 20×20 or 20×30 frame tents with room to spare. The large, well-landscaped lots make Aviara one of our most tent-friendly delivery communities.",
          },
          {
            question: "Do you offer ambient lighting for Aviara backyard evening events?",
            answer:
              "Absolutely. String lights and LED uplighting are very popular for Aviara evening parties — the warm climate and elegant outdoor spaces create a perfect setting for extended outdoor celebrations after dark.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Baby showers in Aviara naturally lean toward elegance — the community's luxury homes, manicured garden spaces, and Park Hyatt Aviara–adjacent atmosphere call for coordinated linens, refined centerpieces, and Chiavari chairs that match the neighborhood's style. Kelari Party Rentals provides fully coordinated baby shower setups delivered to Aviara homes, with tables, chairs, linens, and centerpieces ready for you to arrange beautifully before guests arrive. One homeowner in the Four Seasons Aviara neighborhood hosted a 40-person garden baby shower; we delivered sage and ivory linens, botanical centerpieces, and Chiavari chairs arranged in her garden — guests said it was the most beautiful shower they'd ever attended.",
        localVenue:
          "Private garden settings in Aviara Oaks and the Four Seasons Aviara neighborhood are Aviara's most elegant and sought-after baby shower venues.",
        deliveryNote:
          "Delivery to Aviara from our Carlsbad warehouse is just minutes — one of our shortest delivery routes. Free warehouse pickup at El Camino Real is always available.",
        faqs: [
          {
            question: "Can you deliver an elegant baby shower setup to an Aviara home?",
            answer:
              "Yes — Aviara is one of our most frequently served neighborhoods for upscale baby showers. We deliver tables, chairs, coordinated linens, and centerpieces and walk you through the delivery before the first guest arrives.",
          },
          {
            question: "What décor styles are popular for Aviara baby showers?",
            answer:
              "Soft ivory, sage, champagne, and blush palettes are especially popular in Aviara — they complement the neighborhood's upscale aesthetic. We carry a full range of linen colors and runner options.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Graduations are milestone moments, and Aviara families celebrate them with the style the neighborhood is known for. Grads from Pacific Ridge School, La Costa Canyon High, and other North County schools are honored with full outdoor parties in Aviara estate gardens and at Aviara Community Park. Kelari Party Rentals delivers tables, chairs, tents, and school-colored linens for graduation parties of any size in Aviara, arriving early and walking the family through setup so they can be present for the moment the grad walks through the door. One Aviara Oaks family celebrated their son's graduation with 75 guests; we delivered a 20×20 tent, eight round tables, 75 chairs, and navy and gold linens — everything ready before the ceremony ended.",
        localVenue:
          "Aviara estate gardens and Aviara Community Park are Aviara's most popular graduation party venues, accommodating groups of 40 to 100+ guests.",
        deliveryNote:
          "Aviara is within Carlsbad, making our El Camino Real warehouse just minutes away. Graduation weekend deliveries book fast — reserve early. Free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you set up a large graduation party in an Aviara estate backyard?",
            answer:
              "Yes — Aviara's spacious lots are among our most tent-friendly delivery sites. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, the family can focus on celebrating.",
          },
          {
            question: "Do you deliver graduation party rentals to Aviara Community Park?",
            answer:
              "Absolutely. Aviara Community Park is a beautiful venue for larger graduation gatherings. We coordinate with your park reservation and have everything delivered well before guests arrive.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Aviara is one of the most romantic settings in all of North County San Diego for an engagement celebration. The Park Hyatt Aviara Resort and Aviara Golf Club set the tone for the community's upscale event culture, and private estate gardens — many with direct views of Batiquitos Lagoon — provide the most beautiful private venues imaginable. Kelari Party Rentals provides premium engagement party setups with round tables, Chiavari chairs, luxury floor-length linens, floral centerpieces, and ambient lighting that honors the occasion. One Aviara Point couple celebrated their engagement with 55 guests in their estate garden; we delivered round tables with ivory linens, gold Chiavari chairs, floral centerpieces, and string lights with Batiquitos Lagoon views as the backdrop — a setting guests said was more beautiful than any venue they'd ever toured.",
        localVenue:
          "Private estate gardens in Aviara Point and Aviara Oaks, with Batiquitos Lagoon views and proximity to the Park Hyatt Aviara, are among the most breathtaking engagement party settings in North County.",
        deliveryNote:
          "Because Aviara is right in Carlsbad, our El Camino Real warehouse is just a short drive away — delivery costs are low and free warehouse pickup is always available.",
        faqs: [
          {
            question: "Can you create an engagement party setup that matches the Aviara Golf Club aesthetic?",
            answer:
              "Absolutely. Chiavari chairs, round tables with floor-length linens, floral centerpieces, and string lights or uplighting are our most popular Aviara engagement setup — a look that holds its own against any luxury venue.",
          },
          {
            question: "Do you deliver engagement party rentals to Aviara Oaks and Aviara Point?",
            answer:
              "Yes — both neighborhoods are frequent delivery destinations for elegant engagement parties. We handle every detail so the hosts can focus on their guests from the moment they arrive.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Aviara Community Park is a gem of a venue — beautifully maintained, spacious, and set within the community's elegant master-planned surroundings. Whether you're planning a birthday party, family reunion, or community celebration, the park's open lawns accommodate full tent setups and groups of all sizes. Alga Norte Community Park is nearby for even larger gatherings, and the Batiquitos Lagoon trail adjacency gives the whole area a serene, natural character. Kelari Party Rentals delivers tables, chairs, canopies, and décor to Aviara Community Park and nearby venues, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. One family reserved the main lawn for a 50-person birthday celebration; we delivered two 10×20 canopies, five round tables, 50 chairs, and linens — party-ready well before the first guests arrived.",
        localVenue:
          "Aviara Community Park is Aviara's primary outdoor party venue, with beautiful maintained lawns and a community park setting that accommodates events of all sizes.",
        deliveryNote:
          "Park deliveries in Aviara are among our shortest routes from the El Camino Real warehouse — delivery fees are low and free warehouse pickup is always available.",
        faqs: [
          {
            question: "Do you deliver party rentals to Aviara Community Park?",
            answer:
              "Yes — Aviara Community Park is a frequent delivery location for us. We coordinate with your reservation time and deliver tables, chairs, and canopies before your guests arrive.",
          },
          {
            question: "Do I need a permit to have rental equipment delivered to Aviara Community Park?",
            answer:
              "Most events with equipment at Aviara Community Park require a park reservation or facility permit. Check with the City of Carlsbad Parks and Recreation Department — we can advise on typical logistics once your reservation is confirmed.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "Aviara customers get two great options with Kelari Party Rentals: professional delivery from our Carlsbad warehouse direct to your Aviara address, or complimentary pickup at our El Camino Real location. Aviara is one of our nearest delivery neighborhoods — fees are among our lowest and turnaround is fast. Prefer to avoid the delivery fee? Our warehouse is just minutes from Aviara, and most rental items for a backyard event fit easily in an SUV or minivan. One Aviara at Cabrillo homeowner picked up tables, chairs, and linens for a family anniversary dinner — loaded up in under 20 minutes and was back home arranging the backyard with the afternoon still ahead.",
        localVenue:
          "Our El Camino Real warehouse serves Aviara customers as both a delivery origin and a free pickup location — a short drive from all Aviara neighborhoods.",
        deliveryNote:
          "Aviara is one of our nearest delivery destinations — our El Camino Real warehouse is just a few minutes away. Delivery fees are among our lowest, and free warehouse pickup is always an option.",
        faqs: [
          {
            question: "How much does delivery cost from your Carlsbad warehouse to Aviara?",
            answer:
              "Aviara is in our immediate service area — delivery fees are among the lowest we offer. The exact amount is quoted upfront before you book. Prefer no delivery fee? Free warehouse pickup at El Camino Real is always available.",
          },
          {
            question: "Can Aviara customers pick up rental items at your Carlsbad warehouse?",
            answer:
              "Yes — complimentary pickup at 5674 El Camino Real is available to all customers. Aviara is just a short drive from our warehouse, making pickup a fast and easy option for most event orders.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras in Aviara celebrate a milestone worthy of the community's elegance. The luxury homes and estate gardens of Aviara Oaks, Aviara Point, and Four Seasons Aviara create naturally stunning backdrops for this once-in-a-lifetime celebration. Kelari Party Rentals delivers Chiavari chairs, round tables, premium floor-length linens, candelabra centerpieces, and full frame tent coverage to Aviara addresses, creating a quinceañera setting worthy of the Aviara Golf Club aesthetic. The spacious, manicured lots throughout Aviara are some of our most tent-friendly delivery sites in all of Carlsbad. One Aviara family celebrated their daughter's quinceañera with 95 guests in their estate garden; we delivered gold Chiavari chairs, round tables with floor-length dusty rose linens, floral centerpieces, and a 20×30 frame tent — a setting that moved guests to tears.",
        localVenue:
          "Private estate gardens in Aviara Oaks and Aviara Point, adjacent to the Aviara Golf Club and Park Hyatt Aviara, are among the most breathtaking quinceañera settings in North County San Diego.",
        deliveryNote:
          "Quinceañera deliveries to Aviara are handled from our Carlsbad warehouse just minutes away — book 3–4 weeks ahead and free warehouse pickup is always an option.",
        faqs: [
          {
            question: "Can you set up an elegant quinceañera in an Aviara estate garden?",
            answer:
              "Absolutely. Aviara's estate properties are among our most beautifully appointed delivery sites. We bring Chiavari chairs, round tables, floor-length linens, candelabra centerpieces, and a frame tent if needed — everything to create a setting worthy of the occasion.",
          },
          {
            question: "Can you match our quinceañera color theme for an Aviara event?",
            answer:
              "Yes — we carry linens, satin runners, and accent pieces in a full range of colors. Share your color palette when you request a quote and we'll build a fully coordinated package for your Aviara quinceañera.",
          },
        ],
      },
    },
  },
  {
    slug: "vista",
    categories: ["tables", "chairs", "tents-canopies", "linens", "table-runners", "marquee-letters", "add-ons"],
    name: "Vista",
    county: "San Diego",
    state: "CA",
    zip: ["92081", "92083", "92084", "92085"],
    meta: {
      title: "Party Rentals in Vista, CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor rentals with professional delivery in Vista. Serving Shadowridge, Buena Creek, North Vista & surrounding neighborhoods.",
    },
    headline: "Vista Party Rentals",
    subheadline:
      "Tables, chairs, tents & décor delivered to your Vista venue — stress-free.",
    intro:
      "From backyard celebrations in Shadowridge to park parties at Brengle Terrace, Kelari Party Rentals is Vista's full-service source for tables, chairs, tents, linens, and décor. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, you can enjoy every moment with your guests.",
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
    heroImage: heroImages.galleryTablescape,
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
          "Absolutely. We regularly deliver to Brengle Terrace Park, Guajome Regional Park, Vista Sports Park, and other Vista parks. Delivery is available for an additional fee — or save the fee with free pickup at our Carlsbad warehouse.",
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
    cityServiceContent: {
      "party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Vista has a warm, multi-generational community character that makes for some of North County's most spirited celebrations. Whether it's a large family reunion in Shadowridge, a neighborhood block party in Rancho Buena Vista, or a community event at Brengle Terrace Park, Vista families know how to celebrate with scale. Kelari Party Rentals delivers tables, chairs, tents, linens, and décor throughout all four Vista zip codes. One Shadowridge family recently hosted a multi-generational reunion for 85 guests in their backyard; we delivered nine round tables, 85 folding chairs, a 30×30 frame tent, and coordinated linens — everything set up before the first relatives arrived.",
        localVenue:
          "Shadowridge backyards and Brengle Terrace Park are Vista's most popular settings for full party rental setups.",
        deliveryNote:
          "Delivery to Vista is priced by distance from our Carlsbad warehouse and quoted upfront — all four Vista zip codes are within our regular service area.",
        faqs: [
          {
            question: "Do you deliver party rentals to Shadowridge in Vista?",
            answer:
              "Yes — Shadowridge is one of our most-requested Vista delivery neighborhoods. We deliver tables, chairs, tents, and décor, with delivery available for an additional fee or free pickup at our Carlsbad warehouse.",
          },
          {
            question: "What's a typical party rental package for a large Vista family gathering?",
            answer:
              "Larger Vista gatherings often include a 20×30 or 30×30 frame tent, eight to ten round tables, 80–100 folding chairs, and coordinated linens. We quote by guest count and venue — share those details when you request a quote.",
          },
        ],
      },
      "birthday-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Birthday parties in Vista tend to be lively, generously sized, and family-forward. Whether the celebration is for a toddler's first birthday in an Alta Vista backyard or a milestone 50th in Shadowridge, Kelari Party Rentals delivers the tables, chairs, tents, and themed décor to make the occasion memorable. Brengle Terrace Park is a favorite for outdoor birthday setups, with its wide lawns and easy parking. One Rancho Buena Vista family celebrated a grandmother's 70th birthday at Brengle Terrace Park with a canopy, six round tables, Chiavari chairs, and coordinated linens — the guest of honor said it was the best party the family had ever thrown.",
        localVenue:
          "Brengle Terrace Park is Vista's most popular park venue for birthday parties, with open lawns and easy vehicle access for delivery.",
        deliveryNote:
          "Birthday party deliveries to Vista are priced by distance from our Carlsbad warehouse — or pick up at El Camino Real at no charge.",
        faqs: [
          {
            question: "Can you deliver birthday party rentals to Brengle Terrace Park in Vista?",
            answer:
              "Yes — Brengle Terrace Park is one of our most-requested Vista delivery locations. We coordinate around your park reservation and arrive early so everything is ready before guests arrive.",
          },
          {
            question: "Do you offer kids' birthday party packages for Vista events?",
            answer:
              "Absolutely. We provide full party rental setups for kids' birthday celebrations, including themed décor. These packages are popular for backyard and park birthday parties throughout Vista.",
          },
        ],
      },
      "backyard-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Vista's established neighborhoods — especially Shadowridge — are known for larger-lot homes that make excellent backyard party venues. Multi-generational gatherings and community celebrations happen regularly in Vista backyards, often with 50 to 100+ guests. Kelari Party Rentals delivers frame tents, tables, chairs, lighting, and décor to Vista homes, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. One Shadowridge family hosted a 90-person backyard barbecue for a family reunion; we delivered a 30×30 tent, 10 round tables, 90 folding chairs, and café lights — ready before the food hit the grill.",
        localVenue:
          "Shadowridge is Vista's top neighborhood for large backyard party rentals, with established lot sizes that comfortably accommodate full frame tent setups.",
        deliveryNote:
          "Delivery from our Carlsbad warehouse to Vista is typically 25–35 minutes — complimentary warehouse pickup is also available for Vista customers.",
        faqs: [
          {
            question: "Can you fit a large tent in a Shadowridge backyard in Vista?",
            answer:
              "Most Shadowridge properties can accommodate a 20×20 or 20×30 frame tent. We assess the space on delivery and work around any obstacles like trees, fences, or side access constraints.",
          },
          {
            question: "Do you deliver backyard party rentals to Rancho Buena Vista in Vista?",
            answer:
              "Yes — Rancho Buena Vista is a frequent delivery destination. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — we're experienced with Vista's varied lot sizes either way.",
          },
        ],
      },
      "baby-shower-rentals": {
        // TODO: replace with real customer story
        intro:
          "Baby showers in Vista bring together families with warmth and joy, whether hosted in an Alta Vista home, a Shadowridge backyard, or a Foothill community space. Kelari Party Rentals delivers beautifully coordinated tables, linens, centerpieces, and seating for showers of every size. We handle delivery and arrangement so the host stays relaxed and present throughout. One Foothill family threw a 45-person baby shower in their backyard; we delivered lavender linens, floral centerpieces, and Chiavari chairs — and the mom-to-be said it looked like a styled photoshoot.",
        localVenue:
          "Backyard patios in Shadowridge and Alta Vista are Vista's most popular settings for baby showers, with easy access for delivery and setup.",
        deliveryNote:
          "Baby shower delivery to Vista is available from our Carlsbad warehouse; warehouse pickup is always free for hosts who prefer to handle transport.",
        faqs: [
          {
            question: "Can you deliver baby shower rentals to a home in Shadowridge in Vista?",
            answer:
              "Yes — Shadowridge is a frequent delivery destination for baby showers. We deliver tables, chairs, linens, and centerpieces and walk you through the delivery before guests arrive.",
          },
          {
            question: "What linen styles work well for Vista baby showers?",
            answer:
              "Soft florals, blush, lavender, and sage palettes are popular for Vista baby showers. We carry a range of linen colors and runner options — share your theme when you request a quote.",
          },
        ],
      },
      "graduation-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Graduation parties in Vista celebrate grads from Vista High, Rancho Buena Vista High, and Foothill High — and the community throws celebrations worthy of the achievement. Backyard parties in Shadowridge and park events at Brengle Terrace Park are especially popular for larger graduation gatherings. Kelari Party Rentals is ready for graduation season with tables, chairs, tents, and school-colored linens. One Rancho Buena Vista High grad's family hosted 80 guests in their Shadowridge backyard; we delivered a 20×20 tent, eight round tables, and burgundy-and-gold linens the morning of the party.",
        localVenue:
          "Shadowridge backyards and Brengle Terrace Park are Vista's most popular graduation party venues, accommodating groups of 40 to 100+ guests.",
        deliveryNote:
          "Graduation season fills fast — book your Vista delivery window 2–3 weeks ahead for May and June weekends.",
        faqs: [
          {
            question: "Can you set up a large graduation party in a Vista backyard?",
            answer:
              "Yes — Shadowridge and Rancho Buena Vista have large enough lots for multi-tent graduation setups. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, the family can enjoy the celebration.",
          },
          {
            question: "Do you deliver graduation party rentals to Brengle Terrace Park in Vista?",
            answer:
              "Absolutely. Brengle Terrace Park is a great venue for larger Vista graduation gatherings. We coordinate with your park reservation, and delivery is available for an additional fee or free pickup at our Carlsbad warehouse.",
          },
        ],
      },
      "engagement-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Engagement parties in Vista reflect the community's close family ties and generous spirit — bringing together extended family and longtime friends to honor the newly engaged couple. Whether hosted in a Shadowridge backyard or the hillside setting of an Alta Vista home, Kelari Party Rentals provides premium tables, Chiavari chairs, luxury linens, and ambient lighting to create a beautifully styled setting. One Alta Vista couple celebrated their engagement with 60 guests in a Shadowridge backyard; we delivered round tables with ivory and gold linens, votive clusters, floral centerpieces, and string lights that sparkled through the evening.",
        localVenue:
          "Shadowridge backyards and elevated hillside properties in Alta Vista offer scenic settings for Vista engagement party celebrations.",
        deliveryNote:
          "Delivery to Vista engagement parties is priced by distance from our Carlsbad warehouse and confirmed upfront — free pickup at El Camino Real is also always available.",
        faqs: [
          {
            question: "Can you set up a romantic outdoor engagement party in a Vista backyard?",
            answer:
              "Absolutely. String lights, round tables with floor-length linens, Chiavari chairs, and floral centerpieces are our most popular combination for Vista engagement parties. We handle every detail.",
          },
          {
            question: "Do you deliver engagement party rentals to Shadowridge in Vista?",
            answer:
              "Yes — Shadowridge is one of our most-requested Vista delivery neighborhoods for engagement parties. Delivery is available for an additional fee, or you can pick up free at our Carlsbad warehouse — either way, the hosts can focus on their guests.",
          },
        ],
      },
      "park-party-rentals": {
        // TODO: replace with real customer story
        intro:
          "Vista's parks are a cornerstone of the community's social life. Brengle Terrace Park is the go-to venue for large outdoor events — its wide open lawns and easy parking make it ideal for tent setups and gatherings of 50+ guests. Bobier Vista Park is a neighborhood favorite for more intimate events, and Guajome Regional Park handles the largest gatherings. Kelari Party Rentals delivers tables, chairs, canopies, and décor to all Vista parks, with delivery available for an additional fee or free pickup at our Carlsbad warehouse. One family used the main lawn at Brengle Terrace Park for a 70-person birthday party; we delivered two canopies, seven tables, 70 chairs, and linens — party-ready 90 minutes before guests arrived.",
        localVenue:
          "Brengle Terrace Park is Vista's premier outdoor party venue, with ample lawn space and parking to support full tent and table setups.",
        deliveryNote:
          "We deliver park party rentals to all Vista parks from our Carlsbad warehouse — pricing is distance-based and quoted before you book.",
        faqs: [
          {
            question: "Do you deliver party rentals to Brengle Terrace Park in Vista?",
            answer:
              "Yes — Brengle Terrace Park is our most-requested Vista park delivery location. We coordinate with your reservation time and have everything delivered and ready before your guests arrive.",
          },
          {
            question: "Do I need a permit for a party at Brengle Terrace Park in Vista?",
            answer:
              "Most events with equipment at Vista parks require a reservation or permit. Check with the City of Vista Parks & Recreation Department — we can advise on typical logistics once your reservation is confirmed.",
          },
        ],
      },
      "delivery-setup-pickup": {
        // TODO: replace with real customer story
        intro:
          "Vista customers have two great options with Kelari Party Rentals: professional delivery from our Carlsbad warehouse to your Vista address, or complimentary pickup at our El Camino Real location. Delivery is priced by distance and quoted upfront — most Vista addresses fall within our standard delivery rate. Prefer to skip the delivery fee? Many Vista customers make the 20–30 minute drive to our warehouse, pick up their rental items, and are back home with time to spare. One Shadowridge family picked up tables, chairs, and a canopy for a quinceañera pre-party from our warehouse and returned everything the morning after — no delivery fee, no stress.",
        localVenue:
          "Our El Camino Real warehouse in Carlsbad is the delivery and pickup hub for Vista customers — a 20–30 minute drive from most Vista neighborhoods.",
        deliveryNote:
          "Delivery to Vista is priced by distance from Carlsbad and confirmed upfront — all four Vista zip codes fall within our standard service range.",
        faqs: [
          {
            question: "How is delivery priced from Carlsbad to Vista?",
            answer:
              "Delivery is priced by distance from our Carlsbad warehouse to your specific Vista address, and the fee is quoted upfront before you book. Want to skip the delivery fee? Warehouse pickup at El Camino Real is always complimentary.",
          },
          {
            question: "Can Vista customers pick up rental items from your Carlsbad warehouse?",
            answer:
              "Yes — complimentary pickup and dropoff at 5674 El Camino Real is available to all customers. Most Vista neighborhoods are 20–30 minutes from our warehouse, making it a popular option for orders that fit in a vehicle.",
          },
        ],
      },
      "quinceanera-rentals": {
        // TODO: replace with real customer story
        intro:
          "Quinceañeras are one of Vista's most cherished celebrations, and Kelari Party Rentals is proud to serve the families who plan these milestone events with care and joy. Vista quinceañeras tend to be large, colorful, and filled with family — often hosted in spacious Shadowridge backyards or rented community halls throughout the city. We deliver elegant Chiavari chairs, round tables, premium floor-length linens, candelabra centerpieces, and full tent coverage to create the spectacular setting a quinceañera deserves. One Shadowridge family recently celebrated their daughter's quinceañera with 110 guests; we delivered gold Chiavari chairs, 12 round tables, floor-length rose gold linens, and a 30×30 frame tent.",
        localVenue:
          "Spacious Shadowridge backyards and community halls throughout Vista are the most popular quinceañera venues in the city.",
        deliveryNote:
          "Quinceañera deliveries to Vista are available from our Carlsbad warehouse — book 3–4 weeks ahead to secure your date and finalize your package details.",
        faqs: [
          {
            question: "Do you provide quinceañera rentals for large events in Vista?",
            answer:
              "Yes — Vista quinceañeras often involve 80–120+ guests, and we're fully equipped for the scale. We provide Chiavari chairs, round tables, floor-length linens, centerpieces, and frame tents.",
          },
          {
            question: "Can you match our quinceañera color theme for a Vista event?",
            answer:
              "Absolutely. We carry linens, satin runners, and accent pieces in a full range of colors. Share your color palette when you request a quote and we'll build a coordinated package for your Vista quinceañera.",
          },
        ],
      },
    },
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
