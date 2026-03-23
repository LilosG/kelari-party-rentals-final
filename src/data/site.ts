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
    brandPink: string;
    brandPinkLight: string;
    brandPinkDark: string;
    brandDark: string;
    brandDarkSoft: string;
    accentSage: string;
    primary: string;
    primaryHover: string;
    surface: string;
    bg: string;
    bgSoft: string;
    text: string;
    muted: string;
    softBg: string;
    border: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    neutral950: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  type: {
    heroTitle: string;
    sectionTitle: string;
    leadParagraph: string;
    lineHeightDisplay: string;
    lineHeightLead: string;
  };
  spacing: {
    cardPadding: string;
    sectionVerticalRhythm: string;
  };
  radii: {
    card: string;
    button: string;
  };
  shadows: {
    card: string;
    cardHover: string;
    buttonHover: string;
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
    brandPink: "#FF6F9C",
    brandPinkLight: "#FFB6D9",
    brandPinkDark: "#C43068",
    brandDark: "#222222",
    brandDarkSoft: "#2A2A2A",
    accentSage: "#A8C5A0",
    primary: "#FF6F9C",
    primaryHover: "#C43068",
    surface: "#FFB6D9",
    bg: "#222222",
    bgSoft: "#2A2A2A",
    text: "#222222",
    muted: "#525252",
    softBg: "#FDF8FA",
    border: "#EDE0E8",
    neutral50: "#FAFAFA",
    neutral100: "#F5F5F5",
    neutral200: "#E5E5E5",
    neutral300: "#D4D4D4",
    neutral400: "#A3A3A3",
    neutral500: "#737373",
    neutral600: "#525252",
    neutral700: "#404040",
    neutral800: "#262626",
    neutral900: "#171717",
    neutral950: "#0A0A0A",
  },
  fonts: {
    display: '"Playfair Display", Georgia, serif',
    body: '"DM Sans", system-ui, sans-serif',
  },
  type: {
    heroTitle: "clamp(2.5rem, 1.875rem + 2.75vw, 4.5rem)",
    sectionTitle: "clamp(2rem, 1.6875rem + 1.375vw, 3rem)",
    leadParagraph: "clamp(1.125rem, 1.046875rem + 0.34375vw, 1.375rem)",
    lineHeightDisplay: "1.15",
    lineHeightLead: "1.7",
  },
  spacing: {
    cardPadding: "clamp(2rem, 1.6875rem + 1.375vw, 2.5rem)",
    sectionVerticalRhythm: "clamp(4rem, 3.375rem + 2.75vw, 6rem)",
  },
  radii: {
    card: "16px",
    button: "8px",
  },
  shadows: {
    card: "0 2px 16px rgba(0, 0, 0, 0.08)",
    cardHover: "0 8px 40px rgba(255, 111, 156, 0.18)",
    buttonHover: "0 4px 16px rgba(200, 68, 122, 0.3)",
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
    sameAs: [social.facebook, social.instagram, social.google],
  },
};
