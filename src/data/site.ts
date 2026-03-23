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

export interface SchemaDefaults {
  "@type": string[];
  url: string;
  logo: string;
  image: string;
  priceRange: string;
  currenciesAccepted: string;
  paymentAccepted: string;
  areaServed: {
    "@type": string;
    name: string;
  };
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
    phone: "(760) 000-0000",
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
    primary: "#FF6F9C",
    primaryLight: "#F2D9E7",
    primaryDark: "#9E2F5E",
    dark: "#1C1C1E",
    darkCard: "#252528",
    text: "#1C1C1E",
    muted: "#6B7280",
    softBg: "#FDF8FA",
    border: "#EDE0E8",
  },
  fonts: {
    display: "'Cormorant Garamond', serif",
    body: "'DM Sans', sans-serif",
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

export const site: SiteConfig = {
  nap,
  domain: "https://kelaripartyrentals.com",
  tagline: "Stress-Free Party Rentals in North County San Diego",
  description:
    "Kelari Party Rentals provides tables, chairs, tents, linens, and décor with free delivery and setup in Carlsbad, Encinitas, Oceanside, and San Marcos.",
  social,
  tokens,
  schema: {
    "@type": ["Organization", "LocalBusiness", "PartySupplyRentalService"],
    url: "https://kelaripartyrentals.com",
    logo: "https://kelaripartyrentals.com/logo.png",
    image: "https://kelaripartyrentals.com/og-default.jpg",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Venmo, Zelle",
    areaServed: {
      "@type": "GeoCircle",
      name: "North County San Diego",
    },
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
