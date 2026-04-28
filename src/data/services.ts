// ── Types ────────────────────────────────────────────────────────────────────

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceIncludedItem {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  meta: {
    title: string;
    description: string;
  };
  /** Meta templates with {city} token for city+service money pages */
  cityMeta: {
    title: string;
    description: string;
  };
  headline: string;
  /** Headline template with {city} token for city+service pages */
  cityHeadline: string;
  subheadline: string;
  /** Subheadline template with {city} token */
  citySubheadline: string;
  intro: string;
  /** Intro template with {city} token */
  cityIntro: string;
  icon: string;
  whatsIncluded: ServiceIncludedItem[];
  faqs: ServiceFAQ[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: "party-rentals",
    name: "Party Rentals",
    shortName: "Party Rentals",
    meta: {
      title: "Party Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor for any celebration. Free delivery and setup in Carlsbad, Encinitas, Oceanside & San Marcos.",
    },
    cityMeta: {
      title: "Party Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents, linens & décor with free delivery and setup in {city}. Book your stress-free party rental package today.",
    },
    headline: "Party Rentals in North County San Diego",
    cityHeadline: "Party Rentals in {city}",
    subheadline:
      "Everything you need for a picture-perfect celebration — delivered, set up, and picked up.",
    citySubheadline:
      "Tables, chairs, tents & décor delivered to your {city} venue — we set up and pick up.",
    intro:
      "Kelari Party Rentals takes the stress out of event planning. Whether it's a birthday, baby shower, graduation, or backyard get-together, we provide premium tables, chairs, tents, linens, and décor with free delivery and setup across North County San Diego.",
    cityIntro:
      "Planning a party in {city}? Kelari Party Rentals delivers tables, chairs, tents, linens, and décor right to your door. We handle setup and pickup so you can enjoy every minute of your celebration.",
    icon: "🎉",
    whatsIncluded: [
      {
        icon: "🪑",
        title: "Tables & Chairs",
        description:
          "Rectangular, round, and Chiavari options in multiple styles, delivered clean and set up at your venue.",
      },
      {
        icon: "⛺",
        title: "Tents & Canopies",
        description:
          "Pop-up canopies and frame tents for shade and weather protection at parks and backyards.",
      },
      {
        icon: "🎀",
        title: "Linens & Tableware",
        description:
          "Tablecloths, runners, napkins, plates, flatware, and glassware in coordinating colors.",
      },
      {
        icon: "✨",
        title: "Décor & Lighting",
        description:
          "Centerpieces, backdrops, string lights, and uplighting to style your celebration.",
      },
      {
        icon: "🚚",
        title: "Free Delivery & Setup",
        description:
          "We deliver to your venue, arrange everything, and return after for same-day pickup — always included.",
      },
      {
        icon: "📋",
        title: "Custom Packages",
        description:
          "Every rental is sized and styled to your event — no hidden fees, no one-size-fits-all.",
      },
    ],
    faqs: [
      {
        question: "What items can I rent for a party?",
        answer:
          "We offer tables, chairs, tents, canopies, linens, tableware, centerpieces, lighting, and décor packages. Browse our inventory or request a custom quote.",
      },
      {
        question: "Is delivery and setup included?",
        answer:
          "Yes — free delivery, setup, and pickup are included with every rental in our service area across North County San Diego.",
      },
      {
        question: "How far in advance should I book party rentals?",
        answer:
          "We recommend booking at least 1–2 weeks in advance for most events. Weekends in spring and summer fill up fast across North County San Diego, so the earlier the better.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We serve Carlsbad, Encinitas, Oceanside, and San Marcos, plus surrounding neighborhoods throughout North County San Diego.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Fill out our online quote form with your event date, location, and guest count. We'll respond with a custom package and pricing — usually within a few hours.",
      },
    ],
  },
  {
    slug: "birthday-party-rentals",
    name: "Birthday Party Rentals",
    shortName: "Birthday Parties",
    meta: {
      title: "Birthday Party Rentals | Kelari Party Rentals",
      description:
        "Make every birthday unforgettable with tables, chairs, tents, décor & themed packages. Free delivery and setup in North County San Diego.",
    },
    cityMeta: {
      title: "Birthday Party Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Birthday party tables, chairs, tents & décor with free delivery and setup in {city}. Packages for kids and adults.",
    },
    headline: "Birthday Party Rentals",
    cityHeadline: "Birthday Party Rentals in {city}",
    subheadline:
      "Tables, chairs, tents & themed décor to make every birthday celebration unforgettable.",
    citySubheadline:
      "Everything you need for an amazing birthday party in {city} — delivered and set up.",
    intro:
      "From first birthdays to milestone celebrations, Kelari Party Rentals has the tables, chairs, tents, and décor to make your birthday party special. We handle delivery, setup, and pickup so you can focus on the guest of honor.",
    cityIntro:
      "Throwing a birthday party in {city}? Kelari Party Rentals delivers tables, chairs, tents, and themed décor right to your venue. From kids' parties at the park to backyard adult celebrations, we handle it all.",
    icon: "🎂",
    whatsIncluded: [
      {
        icon: "🪑",
        title: "Tables & Chairs",
        description:
          "Seating for every guest — round tables, folding chairs, Chiavari chairs, and kids' sets.",
      },
      {
        icon: "🎂",
        title: "Birthday Décor",
        description:
          "Themed centerpieces, balloon arches, and backdrops in your party's color palette.",
      },
      {
        icon: "🎀",
        title: "Linens & Colors",
        description:
          "Coordinated tablecloths, runners, and napkins to match your birthday theme perfectly.",
      },
      {
        icon: "⛺",
        title: "Canopy or Tent",
        description:
          "Sun and weather protection for outdoor birthday parties at parks and backyards.",
      },
      {
        icon: "🚚",
        title: "Delivery & Setup",
        description:
          "We arrive before guests, set everything up, and pick up after the party ends — always free.",
      },
      {
        icon: "📋",
        title: "Birthday Packages",
        description:
          "Curated packages for kids and adults, scaled to your guest count and budget.",
      },
    ],
    faqs: [
      {
        question: "Do you offer birthday party packages?",
        answer:
          "Yes — we offer curated birthday packages that include tables, chairs, linens, and décor. Packages can be customized for kids or adults.",
      },
      {
        question: "Can you deliver birthday party rentals to a park?",
        answer:
          "Absolutely. We deliver to public parks throughout North County San Diego. We arrive early to set up and return after the party for pickup.",
      },
      {
        question: "How many tables and chairs do I need for a birthday party?",
        answer:
          "A good rule of thumb is one 60\" round table per 8 guests. For a party of 30, that's about four tables plus extra chairs. We'll recommend the right quantity when you submit your quote.",
      },
      {
        question: "Do you offer kids' birthday party setups?",
        answer:
          "Yes — we carry kids' tables, chairs, and themed décor for children's birthday parties. Kids' sets are sized for younger guests and can be paired with balloon arches or character-themed accents.",
      },
      {
        question: "What's the most popular birthday rental setup in North County San Diego?",
        answer:
          "Backyard and park parties are the most popular. A typical setup includes a pop-up canopy, two or three banquet tables, folding chairs, and coordinated linens — all delivered and assembled for you.",
      },
    ],
  },
  {
    slug: "backyard-party-rentals",
    name: "Backyard Party Rentals",
    shortName: "Backyard Parties",
    meta: {
      title: "Backyard Party Rentals | Kelari Party Rentals",
      description:
        "Transform your backyard into the perfect party venue. Tables, chairs, tents, lighting & décor with free delivery and setup.",
    },
    cityMeta: {
      title: "Backyard Party Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Transform your {city} backyard into the perfect party venue. Tables, tents, lighting & décor with free delivery and setup.",
    },
    headline: "Backyard Party Rentals",
    cityHeadline: "Backyard Party Rentals in {city}",
    subheadline:
      "Transform your backyard into the perfect party venue — no stress, no hassle.",
    citySubheadline:
      "Turn your {city} backyard into a stunning party venue with our full-service rentals.",
    intro:
      "Your backyard is the perfect party venue — with the right setup. Kelari Party Rentals provides tables, chairs, tents, canopies, lighting, linens, and décor to transform any outdoor space into an event your guests will remember.",
    cityIntro:
      "Hosting a backyard party in {city}? We deliver tables, chairs, tents, lighting, and décor right to your home. Kelari Party Rentals handles everything so your backyard becomes the perfect venue.",
    icon: "🏡",
    whatsIncluded: [
      {
        icon: "🪑",
        title: "Tables & Chairs",
        description:
          "Dining tables and chairs for any backyard layout — folding, Chiavari, or cocktail style.",
      },
      {
        icon: "⛺",
        title: "Tents & Shade",
        description:
          "Pop-up canopies and frame tents that transform any backyard into an all-weather venue.",
      },
      {
        icon: "💡",
        title: "Lighting",
        description:
          "String lights and LED uplighting to keep your backyard party going after dark.",
      },
      {
        icon: "🎀",
        title: "Linens & Décor",
        description:
          "Tablecloths, centerpieces, and accents to transform your outdoor space.",
      },
      {
        icon: "🚚",
        title: "Door-to-Door Service",
        description:
          "We deliver to your home, set up in your yard, and pick up after the party — no effort from you.",
      },
      {
        icon: "📋",
        title: "Backyard Packages",
        description:
          "Complete setups sized for your yard, guest count, and event style.",
      },
    ],
    faqs: [
      {
        question: "What do I need for a backyard party?",
        answer:
          "Most backyard parties need tables, chairs, a tent or canopy for shade, linens, and lighting. We can customize a package based on your guest count and style.",
      },
      {
        question: "Do you set up tents in backyards?",
        answer:
          "Yes — we set up pop-up canopies and frame tents in backyards of all sizes. We'll work with your space to find the best layout.",
      },
      {
        question: "Do you offer lighting for evening backyard parties?",
        answer:
          "Yes — we carry string lights and LED uplighting for evening events. String lights are especially popular for backyard parties in North County San Diego where nights stay warm.",
      },
      {
        question: "Can you work with a small backyard?",
        answer:
          "Absolutely. We assess space when we deliver and adjust the layout accordingly. Even a modest backyard can comfortably host 20–30 guests with the right table configuration and a compact canopy.",
      },
      {
        question: "How far in advance should I book a backyard party rental?",
        answer:
          "Two weeks minimum is ideal, especially for weekend dates in spring and summer. For larger setups with tents and lighting, 3–4 weeks gives us more flexibility to confirm all equipment.",
      },
    ],
  },
  {
    slug: "baby-shower-rentals",
    name: "Baby Shower Rentals",
    shortName: "Baby Showers",
    meta: {
      title: "Baby Shower Rentals | Kelari Party Rentals",
      description:
        "Elegant baby shower rentals — tables, chairs, linens, centerpieces & décor. Free delivery and setup in North County San Diego.",
    },
    cityMeta: {
      title: "Baby Shower Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Elegant baby shower tables, chairs, linens & décor with free delivery and setup in {city}. Make it memorable with Kelari.",
    },
    headline: "Baby Shower Rentals",
    cityHeadline: "Baby Shower Rentals in {city}",
    subheadline:
      "Elegant tables, chairs, linens & décor for a beautiful baby shower.",
    citySubheadline:
      "Beautiful baby shower rentals delivered and set up at your {city} venue.",
    intro:
      "Celebrate the mom-to-be with a beautifully styled baby shower. Kelari Party Rentals provides elegant tables, chairs, linens, centerpieces, and décor — all delivered, set up, and picked up so the host can enjoy every moment.",
    cityIntro:
      "Planning a baby shower in {city}? Kelari Party Rentals provides elegant tables, linens, centerpieces, and décor delivered right to your venue. We handle setup and cleanup so you can celebrate.",
    icon: "👶",
    whatsIncluded: [
      {
        icon: "🎀",
        title: "Elegant Linens",
        description:
          "Coordinated tablecloths, runners, and napkins in your shower's color palette.",
      },
      {
        icon: "🪑",
        title: "Tables & Seating",
        description:
          "Display and dining tables plus comfortable chairs for every guest.",
      },
      {
        icon: "✨",
        title: "Centerpieces & Décor",
        description:
          "Floral centerpieces, vases, and accent pieces for a beautiful tablescape.",
      },
      {
        icon: "🍽️",
        title: "Tableware",
        description:
          "Coordinated plates, flatware, and glassware for a polished presentation.",
      },
      {
        icon: "🚚",
        title: "Delivery & Setup",
        description:
          "We arrive early, arrange everything beautifully, and clean up after — so you enjoy every moment.",
      },
      {
        icon: "📋",
        title: "Custom Packages",
        description:
          "Packages tailored to your shower's size, style, and color theme.",
      },
    ],
    faqs: [
      {
        question: "Do you offer baby shower décor packages?",
        answer:
          "Yes — we offer styled baby shower packages with coordinated linens, centerpieces, and tableware. Contact us to customize colors and themes.",
      },
      {
        question: "Can you set up a baby shower at a restaurant or venue?",
        answer:
          "We deliver to private homes, restaurants, parks, and event venues. Just let us know the location and we'll coordinate delivery and setup.",
      },
      {
        question: "What colors do you carry for baby shower linens?",
        answer:
          "We stock soft neutrals, blush, sage, lavender, and classic blue and pink. Share your color palette when you request a quote and we'll put together a coordinated package.",
      },
      {
        question: "How many guests do your baby shower packages accommodate?",
        answer:
          "We size packages for showers of any scale — intimate gatherings of 10 to larger celebrations of 60 or more. We'll customize the table count, chairs, and linens to match your guest list.",
      },
      {
        question: "Do you set up baby showers at private homes in North County San Diego?",
        answer:
          "Yes — home setups are very common. We deliver to addresses throughout Carlsbad, Encinitas, Oceanside, and San Marcos and arrange everything so the host can focus on guests.",
      },
    ],
  },
  {
    slug: "graduation-party-rentals",
    name: "Graduation Party Rentals",
    shortName: "Graduation Parties",
    meta: {
      title: "Graduation Party Rentals | Kelari Party Rentals",
      description:
        "Celebrate the graduate with tables, chairs, tents, banners & décor. Free delivery and setup in North County San Diego.",
    },
    cityMeta: {
      title: "Graduation Party Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Graduation party tables, chairs, tents & décor with free delivery and setup in {city}. Celebrate their achievement in style.",
    },
    headline: "Graduation Party Rentals",
    cityHeadline: "Graduation Party Rentals in {city}",
    subheadline:
      "Celebrate their achievement with tables, tents, décor & everything you need for the perfect grad party.",
    citySubheadline:
      "Graduation party rentals delivered and set up at your {city} venue — celebrate in style.",
    intro:
      "They worked hard — now it's time to celebrate. Kelari Party Rentals provides tables, chairs, tents, banners, linens, and décor for graduation parties of every size. We deliver, set up, and pick up so you can focus on the graduate.",
    cityIntro:
      "Hosting a graduation party in {city}? Kelari Party Rentals delivers tables, chairs, tents, and décor to your home, backyard, or local park. We handle setup and teardown so you can celebrate the big milestone.",
    icon: "🎓",
    whatsIncluded: [
      {
        icon: "🎓",
        title: "Graduation Décor",
        description:
          "Themed centerpieces, backdrops, and accents in school colors.",
      },
      {
        icon: "🪑",
        title: "Tables & Chairs",
        description:
          "Seating for large graduation gatherings — rectangular, round, and folding options.",
      },
      {
        icon: "⛺",
        title: "Tents & Shade",
        description:
          "Canopies and frame tents for outdoor graduation celebrations at homes and parks.",
      },
      {
        icon: "🎀",
        title: "Linens & Tableware",
        description:
          "School-colored linens and tableware for a coordinated celebration.",
      },
      {
        icon: "🚚",
        title: "Delivery & Setup",
        description:
          "We arrive before guests, handle the full setup, and tear everything down after — always free.",
      },
      {
        icon: "📋",
        title: "Grad Packages",
        description:
          "Complete packages for 20 to 200+ guests, all in one price with no hidden fees.",
      },
    ],
    faqs: [
      {
        question: "When should I book graduation party rentals?",
        answer:
          "Graduation season (May–June) is our busiest time. We recommend booking at least 2–3 weeks in advance to guarantee availability.",
      },
      {
        question: "Do you offer graduation-themed décor?",
        answer:
          "Yes — we carry banners, table runners, and centerpieces that can be customized with school colors. Ask about our graduation party packages.",
      },
      {
        question: "Can you accommodate large graduation parties in North County San Diego?",
        answer:
          "Yes — we regularly set up for 80 to 150+ guests. Large parties may need multiple tents, extra tables, and additional seating. Request a quote with your expected guest count and we'll build a package.",
      },
      {
        question: "Do you deliver graduation rentals to parks and backyards?",
        answer:
          "We deliver to both. Parks are popular for graduation parties in Carlsbad, Encinitas, Oceanside, and San Marcos. Just confirm your park reservation before booking and we'll coordinate delivery around your time slot.",
      },
      {
        question: "What's the best way to plan a graduation party rental?",
        answer:
          "Start with your expected guest count and venue type (backyard, park, or venue), then submit a quote request. We'll recommend a complete package and confirm timing so setup is done well before guests arrive.",
      },
    ],
  },
  {
    slug: "engagement-party-rentals",
    name: "Engagement Party Rentals",
    shortName: "Engagement Parties",
    meta: {
      title: "Engagement Party Rentals | Kelari Party Rentals",
      description:
        "Celebrate the happy couple with elegant tables, chairs, linens & décor. Free delivery and setup in North County San Diego.",
    },
    cityMeta: {
      title: "Engagement Party Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Elegant engagement party tables, chairs, linens & décor with free delivery and setup in {city}. Celebrate the happy couple.",
    },
    headline: "Engagement Party Rentals",
    cityHeadline: "Engagement Party Rentals in {city}",
    subheadline:
      "Elegant tables, linens & décor to celebrate the newly engaged couple.",
    citySubheadline:
      "Engagement party rentals delivered and set up at your {city} venue — elegant and stress-free.",
    intro:
      "Mark the start of their journey together with a beautifully styled engagement party. Kelari Party Rentals offers premium tables, chairs, linens, glassware, and décor — delivered, set up, and picked up.",
    cityIntro:
      "Hosting an engagement party in {city}? Kelari Party Rentals delivers elegant tables, chairs, linens, and décor to create a memorable celebration. We take care of setup and teardown.",
    icon: "💍",
    whatsIncluded: [
      {
        icon: "🪑",
        title: "Elegant Seating",
        description:
          "Chiavari chairs and round tables for a refined, intimate engagement celebration.",
      },
      {
        icon: "🎀",
        title: "Luxury Linens",
        description:
          "Premium tablecloths, runners, and napkins in romantic, coordinating colors.",
      },
      {
        icon: "✨",
        title: "Décor & Florals",
        description:
          "Centerpieces, vases, backdrop frames, and accent pieces for a stunning setting.",
      },
      {
        icon: "🍽️",
        title: "Fine Tableware",
        description:
          "Charger plates, glassware, and flatware for an elegant tablescape.",
      },
      {
        icon: "💡",
        title: "Ambient Lighting",
        description:
          "String lights and uplighting to create a warm, romantic atmosphere.",
      },
      {
        icon: "🚚",
        title: "Delivery & Setup",
        description:
          "Full-service delivery, professional setup, and post-event pickup — all included.",
      },
    ],
    faqs: [
      {
        question: "What's included in an engagement party rental?",
        answer:
          "Our engagement packages typically include tables, chairs, premium linens, tableware, centerpieces, and optional lighting. Everything can be customized to your style.",
      },
      {
        question: "Can you accommodate both indoor and outdoor engagement parties?",
        answer:
          "Yes — we provide setups for backyards, patios, restaurants, and indoor venues. Tents and canopies are available for outdoor celebrations.",
      },
      {
        question: "How far in advance should I book engagement party rentals?",
        answer:
          "Two to three weeks in advance is recommended. If your party falls on a holiday weekend or during the busy spring season, booking earlier helps secure your preferred date.",
      },
      {
        question: "Do you offer champagne flutes and barware for engagement parties?",
        answer:
          "Yes — we carry glassware including champagne flutes, wine glasses, and water glasses. These can be added to any engagement package to complete the tablescape.",
      },
      {
        question: "Can you set up a romantic outdoor engagement party setting in North County San Diego?",
        answer:
          "Absolutely. String lights, soft linen colors, and floral centerpieces are our most popular combination for engagement parties in coastal North County San Diego. We can build a complete outdoor setup for your backyard or a park.",
      },
    ],
  },
  {
    slug: "park-party-rentals",
    name: "Park Party Rentals",
    shortName: "Park Parties",
    meta: {
      title: "Park Party Rentals | Kelari Party Rentals",
      description:
        "Tables, chairs, tents & décor delivered to your local park. Free setup and pickup across North County San Diego.",
    },
    cityMeta: {
      title: "Park Party Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Tables, chairs, tents & décor delivered to {city} parks. Free setup and pickup — we handle the heavy lifting.",
    },
    headline: "Park Party Rentals",
    cityHeadline: "Park Party Rentals in {city}",
    subheadline:
      "Tables, chairs, tents & décor delivered right to your park — we handle the heavy lifting.",
    citySubheadline:
      "Party rentals delivered to {city} parks — tables, chairs, tents & décor with full setup.",
    intro:
      "Park parties are a North County San Diego tradition. Kelari Party Rentals delivers tables, chairs, tents, and décor directly to your reserved park spot. We arrive early to set up and return after the event for pickup — all you do is show up and celebrate.",
    cityIntro:
      "Throwing a park party in {city}? Kelari Party Rentals delivers tables, chairs, tents, and décor to your favorite {city} park. We set up before your guests arrive and pick up after they leave.",
    icon: "🌳",
    whatsIncluded: [
      {
        icon: "🪑",
        title: "Tables & Chairs",
        description:
          "Portable tables and chairs delivered directly to your reserved park spot.",
      },
      {
        icon: "⛺",
        title: "Park-Ready Tents",
        description:
          "Canopies and frame tents for shade and weather protection at any park.",
      },
      {
        icon: "✨",
        title: "Decorations",
        description:
          "Centerpieces, balloons, and accents to turn a park space into a party venue.",
      },
      {
        icon: "🎀",
        title: "Linens",
        description:
          "Tablecloths and runners to dress up any park table or outdoor setup.",
      },
      {
        icon: "🚚",
        title: "On-Site Setup",
        description:
          "We arrive early, set everything up at your park, and pick up after — no heavy lifting for you.",
      },
      {
        icon: "📋",
        title: "Park Packages",
        description:
          "Pre-configured packages for common park party sizes — simple to book, easy to enjoy.",
      },
    ],
    faqs: [
      {
        question: "Which parks do you deliver to?",
        answer:
          "We deliver to all public parks in Carlsbad, Encinitas, Oceanside, and San Marcos. Contact us with your park location and we'll confirm logistics.",
      },
      {
        question: "Do I need a park permit for rentals?",
        answer:
          "Most parks require a reservation or permit for events with equipment. We recommend checking with your city's parks department. We can advise on local requirements.",
      },
      {
        question: "What park rental packages do you offer?",
        answer:
          "Our park packages include a canopy or tent, folding tables, chairs, and linens. Packages are sized for 20, 40, or 60+ guests. We can add décor, tableware, or extra seating based on your event.",
      },
      {
        question: "What are some popular parks for parties in North County San Diego?",
        answer:
          "Popular spots include Calavera Hills Community Park in Carlsbad, Moonlight Beach in Encinitas, Luiseno Park in Oceanside, and Bradley Park in San Marcos. We deliver to all of these and can advise on space and permit needs.",
      },
      {
        question: "Can you set up at a park without a dedicated parking lot nearby?",
        answer:
          "Yes — our team is experienced with park logistics. We'll walk the site on arrival and carry equipment to your reserved spot regardless of parking distance.",
      },
    ],
  },
  {
    slug: "delivery-setup-pickup",
    name: "Delivery, Setup & Pickup",
    shortName: "Delivery & Setup",
    meta: {
      title: "Free Delivery, Setup & Pickup | Kelari Party Rentals",
      description:
        "Free delivery, professional setup, and same-day pickup for all rentals across North County San Diego. Stress-free from start to finish.",
    },
    cityMeta: {
      title: "Free Delivery, Setup & Pickup in {city} | Kelari Party Rentals",
      description:
        "Free delivery, professional setup, and same-day pickup for all party rentals in {city}. We handle the logistics — you enjoy the party.",
    },
    headline: "Delivery, Setup & Pickup",
    cityHeadline: "Free Delivery, Setup & Pickup in {city}",
    subheadline:
      "We deliver, set up, and pick up — all included, no hidden fees.",
    citySubheadline:
      "Free delivery, setup, and pickup for all party rentals in {city} — no hidden fees.",
    intro:
      "At Kelari Party Rentals, full-service means full-service. Every rental includes free delivery, professional setup at your venue, and same-day pickup after your event. No extra charges, no fine print — just stress-free celebrations across North County San Diego.",
    cityIntro:
      "Every rental in {city} includes free delivery, professional setup, and same-day pickup. No extra fees, no surprises — Kelari Party Rentals handles the logistics so you can enjoy your event.",
    icon: "🚚",
    whatsIncluded: [
      {
        icon: "🚚",
        title: "Free Delivery",
        description:
          "We bring everything to your venue at no extra charge — no delivery fees, ever.",
      },
      {
        icon: "🔧",
        title: "Professional Setup",
        description:
          "Our team arranges tables, chairs, linens, and décor exactly to your specs.",
      },
      {
        icon: "✅",
        title: "Pre-Event Check",
        description:
          "We confirm every item looks perfect before leaving so you're ready to celebrate.",
      },
      {
        icon: "🧹",
        title: "Same-Day Pickup",
        description:
          "We return after your event and handle the full breakdown — no cleanup for you.",
      },
      {
        icon: "⏰",
        title: "Flexible Scheduling",
        description:
          "Delivery and pickup windows confirmed at booking to match your event timeline.",
      },
      {
        icon: "📍",
        title: "Any Venue",
        description:
          "We deliver to homes, backyards, parks, restaurants, and community spaces.",
      },
    ],
    faqs: [
      {
        question: "Is delivery really free?",
        answer:
          "Yes — delivery, setup, and pickup are included at no extra charge for all addresses in our North County San Diego service area.",
      },
      {
        question: "When do you deliver and pick up?",
        answer:
          "We typically deliver 1–2 hours before your event start time and pick up within 2 hours after it ends. Exact times are confirmed when you book.",
      },
      {
        question: "Do you deliver to addresses outside your standard service area?",
        answer:
          "Our primary service area covers Carlsbad, Encinitas, Oceanside, and San Marcos. For locations just outside this area, contact us — we accommodate many nearby zip codes and will confirm availability.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most setups take 30–60 minutes depending on the package size. Larger events with tents, lighting, and full tableware can take up to 90 minutes. We plan our delivery window to ensure everything is ready before your guests arrive.",
      },
      {
        question: "Is there an extra charge for same-day delivery or early morning setup?",
        answer:
          "No — setup timing is coordinated at booking and included in your package price. We confirm an early morning window when needed at no extra cost.",
      },
    ],
  },
  {
    slug: "quinceanera-rentals",
    name: "Quinceañera Rentals",
    shortName: "Quinceañera Rentals",
    meta: {
      title: "Quinceañera Rentals in North County San Diego | Kelari Party Rentals",
      description:
        "Elegant tables, chairs, linens, tableware & décor for quinceañeras in Carlsbad, Encinitas, Oceanside, San Marcos & Vista. Free delivery and setup.",
    },
    cityMeta: {
      title: "Quinceañera Rentals in {city} CA | Kelari Party Rentals",
      description:
        "Elegant quinceañera tables, chairs, linens & décor with free delivery and setup in {city}. Make her special day unforgettable with Kelari.",
    },
    headline: "Quinceañera Rentals in North County San Diego",
    cityHeadline: "Quinceañera Rentals in {city}",
    subheadline:
      "Elegant tables, chairs, linens & décor for a beautiful quinceañera celebration.",
    citySubheadline:
      "Quinceañera rentals delivered and set up at your {city} venue — elegant, full-service, stress-free.",
    intro:
      "A quinceañera deserves a beautiful setting. Kelari Party Rentals provides elegant tables, Chiavari chairs, premium linens, tableware, centerpieces, and décor for quinceañera celebrations across North County San Diego. We deliver, set up, and pick up — so the family can focus on the birthday girl.",
    cityIntro:
      "Planning a quinceañera in {city}? Kelari Party Rentals delivers elegant tables, Chiavari chairs, premium linens, and décor right to your venue. We handle full setup and pickup so your family can enjoy every moment of this milestone celebration.",
    icon: "👑",
    whatsIncluded: [
      {
        icon: "🪑",
        title: "Chiavari Chairs & Tables",
        description:
          "Gold or silver Chiavari chairs and round tables for an elegant quinceañera setting.",
      },
      {
        icon: "🎀",
        title: "Premium Linens",
        description:
          "Floor-length tablecloths, satin runners, and coordinating napkins in your quinceañera colors.",
      },
      {
        icon: "✨",
        title: "Centerpieces & Décor",
        description:
          "Floral centerpieces, vases, candelabras, and accent pieces for a stunning tablescape.",
      },
      {
        icon: "🍽️",
        title: "Fine Tableware",
        description:
          "Charger plates, glassware, and flatware for an elegant place setting at every seat.",
      },
      {
        icon: "⛺",
        title: "Tent or Canopy",
        description:
          "Frame tents and canopies for outdoor quinceañera venues — shade and shelter for all your guests.",
      },
      {
        icon: "🚚",
        title: "Full-Service Delivery",
        description:
          "We deliver, set up every item with care, and return for pickup after the celebration — always included.",
      },
    ],
    faqs: [
      {
        question: "What rental items do you provide for a quinceañera?",
        answer:
          "We provide tables, Chiavari chairs, premium linens, charger plates, glassware, flatware, centerpieces, canopies or tents, and décor accents. Everything can be customized to your quinceañera color theme and style.",
      },
      {
        question: "Do you deliver quinceañera rentals to backyards and venues in {city}?",
        answer:
          "Yes — we deliver to private homes, backyards, parks, community centers, and event venues throughout {city}. Free delivery, professional setup, and same-day pickup are included with every order.",
      },
      {
        question: "How far in advance should I book quinceañera rentals?",
        answer:
          "We recommend booking 3–4 weeks in advance for quinceañeras, especially for weekend dates during peak season (May–October). Contact us early to confirm availability and reserve your date.",
      },
      {
        question: "Can you match our quinceañera color theme?",
        answer:
          "Yes — we carry linens, napkins, and accent pieces in a wide range of colors. Share your color palette when you request a quote and we will put together a coordinated package.",
      },
      {
        question: "Do you serve the Hispanic community with quinceañera rentals throughout North County San Diego?",
        answer:
          "Yes — quinceañeras are one of our most requested events. We serve families in Carlsbad, Encinitas, Oceanside, San Marcos, and surrounding communities and are experienced with the scale and detail these celebrations require.",
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

/**
 * Replace {city} token in a template string with the given city name.
 */
export function renderCityTemplate(template: string, cityName: string): string {
  return template.replace(/\{city\}/g, cityName);
}
