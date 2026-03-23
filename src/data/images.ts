const DEFAULT_IMAGE = "/images/hero-party.jpg";

const serviceImages: Record<string, string> = {
  "party-rentals": "/images/hero-party.jpg",
  "birthday-party-rentals": "/images/birthday-party.jpg",
  "backyard-party-rentals": "/images/backyard-party.jpg",
  "baby-shower-rentals": "/images/baby-shower.jpg",
  "graduation-party-rentals": "/images/graduation-party.jpg",
  "engagement-party-rentals": "/images/engagement-party.jpg",
  "park-party-rentals": "/images/park-party.jpg",
  "delivery-setup-pickup": "/images/backyard-party.jpg",
  "table-and-chair-rentals": "/images/gallery-tablescape.jpg",
  "tent-and-canopy-rentals": "/images/gallery-canopy.jpg",
};

const cityImages: Record<string, string> = {
  carlsbad: "/images/hero-party.jpg",
  encinitas: "/images/backyard-party.jpg",
  oceanside: "/images/park-party.jpg",
  "san-marcos": "/images/graduation-party.jpg",
};

const categoryImages: Record<string, string> = {
  tables: "/images/gallery-tablescape.jpg",
  chairs: "/images/backyard-party.jpg",
  "tents-canopies": "/images/gallery-canopy.jpg",
  linens: "/images/baby-shower.jpg",
  tableware: "/images/gallery-tablescape.jpg",
  decorations: "/images/gallery-marquee.jpg",
  lighting: "/images/engagement-party.jpg",
};

export function getServiceImage(slug: string): string {
  return serviceImages[slug] ?? DEFAULT_IMAGE;
}

export function getCityImage(slug: string): string {
  return cityImages[slug] ?? DEFAULT_IMAGE;
}

export function getCategoryImage(slug: string): string {
  return categoryImages[slug] ?? DEFAULT_IMAGE;
}

export { DEFAULT_IMAGE, serviceImages, cityImages, categoryImages };
