import { nap } from "./site";

export interface ContactMetaItem {
  label: string;
  value: string;
  href?: string;
  icon: string;
  description?: string;
}

export interface ConversionProofPointLink {
  label: string;
  href: string;
}

export interface ConversionProofPoint {
  title: string;
  description: string;
  icon: string;
  links?: ConversionProofPointLink[];
}

export const contactMetaItems: ContactMetaItem[] = [
  {
    label: "Phone",
    value: nap.contact.phone,
    href: `tel:${nap.contact.phone.replace(/\D/g, "")}`,
    description: "Call for availability, package guidance, or booking help.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "Email",
    value: nap.contact.email,
    href: `mailto:${nap.contact.email}`,
    description: "Send your wishlist, event notes, or venue details any time.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Hours",
    value: nap.contact.hours,
    description: "We answer quotes fast during business hours.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Address",
    value: nap.address.full,
    description: "Serving Carlsbad and surrounding North County San Diego communities.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export const conversionProofPoints: ConversionProofPoint[] = [
  {
    title: "Fast response time",
    description: "We respond within 2 hours during business hours, with most quotes sent the same day.",
    icon: "⚡",
  },
  {
    title: "Delivery across North County SD",
    description: "Professional delivery available to your venue — every quote includes logistics upfront, no surprise add-ons.",
    icon: "🚚",
  },
  {
    title: "Call, email, or message us",
    description: nap.contact.hours,
    icon: "💬",
    links: [
      { label: nap.contact.phone, href: `tel:${nap.contact.phone.replace(/\D/g, "")}` },
      { label: nap.contact.email, href: `mailto:${nap.contact.email}` },
    ],
  },
];

export const resourcesNav = [
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
  { label: "How It Works", href: "/#how-it-works" },
];

export const footerNavGroups = [
  {
    title: "Services",
    links: [
      { label: "Party Rentals", href: "/services/party-rentals/" },
      { label: "Birthday Parties", href: "/services/birthday-party-rentals/" },
      { label: "Baby Showers", href: "/services/baby-shower-rentals/" },
      { label: "Graduation Parties", href: "/services/graduation-party-rentals/" },
      { label: "Park Parties", href: "/services/park-party-rentals/" },
      { label: "Delivery & Pickup", href: "/services/delivery-setup-pickup/" },
      { label: "Browse Rentals", href: "/rentals/" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "Carlsbad", href: "/carlsbad/" },
      { label: "Encinitas", href: "/encinitas/" },
      { label: "Oceanside", href: "/oceanside/" },
      { label: "San Marcos", href: "/san-marcos/" },
      { label: "Bressi Ranch", href: "/bressi-ranch/" },
      { label: "La Costa", href: "/la-costa/" },
      { label: "Olde Carlsbad", href: "/olde-carlsbad/" },
      { label: "Aviara", href: "/aviara/" },
      { label: "Vista", href: "/vista/" },
      { label: "Full Service Area", href: "/service-area/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contact", href: "/contact/" },
      { label: "Get a Quote", href: "/quote/" },
    ],
  },
];
