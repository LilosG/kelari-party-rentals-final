// ── Types ────────────────────────────────────────────────────────────────────

export interface Address {
  street: string;
  suite: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  hours: string;
}

export interface NAP {
  name: string;
  address: Address;
  contact: ContactInfo;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  google: string;
}

export interface DesignTokens {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    dark: string;
    darkCard: string;
    text: string;
    muted: string;
    softBg: string;
    border: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  radii: {
    card: string;
    button: string;
  };
  shadows: {
    card: string;
    cardHover: string;
  };
}

export interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface CityObject {
  "@type": "City";
  name: string;
  sameAs: string;
}

export interface SchemaDefaults {
  "@type": string | string[];
  url: string;
  logo: { "@type": "ImageObject"; url: string };
  image: { "@type": "ImageObject"; url: string };
  priceRange: string;
  currenciesAccepted: string;
  paymentAccepted: string;
  openingHoursSpecification: OpeningHoursSpecification[];
  areaServed: CityObject[];
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  sameAs: string[];
}

export interface SiteConfig {
  nap: NAP;
  domain: string;
  tagline: string;
  description: string;
  social: SocialLinks;
  tokens: DesignTokens;
  schema: SchemaDefaults;
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const nap: NAP = {
  name: "Kelari Party Rentals",
  address: {
    street: "5674 El Camino Real",
    suite: "Suite M-2",
    city: "Carlsbad",
    state: "CA",
    zip: "92008",
    full: "5674 El Camino Real Suite M-2, Carlsbad, CA 92008",
  },
  contact: {
    phone: "(760) 805-0540",
    email: "hello@kelaripartyrentals.com",
    hours: "Mon–Sun 9AM–7PM",
  },
};

export const social: SocialLinks = {
  facebook: "https://facebook.com/kelaripartyrentals",
  instagram: "https://instagram.com/kelaripartyrentals",
  google: "https://g.page/kelaripartyrentals",
};

export const tokens: DesignTokens = {
  colors: {
    primary: "#E8356D",
    primaryLight: "#FCE4EC",
    primaryDark: "#B5264F",
    dark: "#222222",
    darkCard: "#2A2A2A",
    text: "#404040",
    muted: "#737373",
    softBg: "#fdf8f9",
    border: "#f0e4ea",
  },
  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif",
  },
  radii: {
    card: "16px",
    button: "8px",
  },
  shadows: {
    card: "0 2px 20px rgba(0,0,0,0.08)",
    cardHover: "0 8px 40px rgba(200,68,122,0.18)",
  },
};

export const recaptchaSiteKey = "6LcvXZksAAAAAN0CwNr2NFgKft5Q7rEnIZSdcfMN";

export const site: SiteConfig = {
  nap,
  domain: "https://kelaripartyrentals.com",
  tagline: "Stress-Free Party Rentals in North County San Diego",
  description:
    "Kelari Party Rentals provides tables, chairs, tents, linens, and décor with professional delivery across Carlsbad, Encinitas, Oceanside, and San Marcos. Get a free quote today.",
  social,
  tokens,
  schema: {
    "@type": "LocalBusiness",
    url: "https://kelaripartyrentals.com",
    logo: { "@type": "ImageObject", url: "https://kelaripartyrentals.com/logo.png" },
    image: { "@type": "ImageObject", url: "https://kelaripartyrentals.com/og-default.jpg" },
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Venmo, Zelle",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Carlsbad", sameAs: "https://en.wikipedia.org/wiki/Carlsbad,_California" },
      { "@type": "City", name: "Encinitas", sameAs: "https://en.wikipedia.org/wiki/Encinitas,_California" },
      { "@type": "City", name: "Oceanside", sameAs: "https://en.wikipedia.org/wiki/Oceanside,_California" },
      { "@type": "City", name: "San Marcos", sameAs: "https://en.wikipedia.org/wiki/San_Marcos,_California" },
      { "@type": "City", name: "Vista", sameAs: "https://en.wikipedia.org/wiki/Vista,_California" },
      { "@type": "City", name: "La Costa", sameAs: "https://en.wikipedia.org/wiki/La_Costa,_San_Diego_County,_California" },
      { "@type": "City", name: "Bressi Ranch", sameAs: "https://en.wikipedia.org/wiki/Carlsbad,_California" },
      { "@type": "City", name: "Olde Carlsbad", sameAs: "https://en.wikipedia.org/wiki/Carlsbad,_California" },
      { "@type": "City", name: "Aviara", sameAs: "https://en.wikipedia.org/wiki/Carlsbad,_California" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.1581,
      longitude: -117.3506,
    },
    sameAs: [
      social.facebook,
      social.instagram,
      social.google,
    ],
  },
};
