/**
 * homepage.ts — all content for src/pages/index.astro
 * Services, categories, and cities are imported from their own data files.
 */

import type { Step } from "../components/HowItWorks.astro";
import type { Testimonial } from "../components/TestimonialCarousel.astro";
import type { GalleryImage } from "../components/ImageGallery.astro";
import type { FAQ } from "../components/FAQAccordion.astro";

export interface TrustBarItem {
  title: string;
  subtitle: string;
  icon: "sparkles" | "clock" | "check" | "chat" | "pin";
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export const hero = {
  title: "Party Rentals That Make Every Celebration Unforgettable",
  subtitle:
    "Tables, chairs, canopies, linens, and décor — delivered and set up across Carlsbad, Encinitas, Oceanside & San Marcos. You celebrate. We handle the rest.",
  backgroundImage: "/images/hero-party.jpg",
  primaryCta: { label: "Request a Free Quote", href: "/quote/" },
  secondaryCta: { label: "(760) 000-0000", href: "tel:7600000000" },
};

export const trustBarItems: TrustBarItem[] = [
  { title: "Clean Inventory", subtitle: "Photo-ready every time", icon: "sparkles" },
  { title: "On-Time Delivery", subtitle: "Always punctual", icon: "clock" },
  { title: "Setup & Pickup", subtitle: "We handle it all", icon: "check" },
  { title: "Easy Quoting", subtitle: "Fast, no-pressure", icon: "chat" },
  { title: "North County", subtitle: "Local & reliable", icon: "pin" },
];

// ── CTA Band ──────────────────────────────────────────────────────────────────

export const ctaBand = {
  title: "Party Rentals You Can Actually Count On",
  subtitle:
    "Free delivery, professional setup, and same-day pickup included with every rental. No hidden fees, no stress — just a beautiful event.",
  primaryCta: { label: "Get a Free Quote", href: "/quote/" },
  secondaryCta: { label: "Call (760) 000-0000", href: "tel:7600000000" },
};

// ── How It Works ──────────────────────────────────────────────────────────────

export const howItWorksSteps: Step[] = [
  {
    number: "01",
    title: "Choose Your Rentals",
    description:
      "Browse tables, chairs, canopies, linens, and décor — or tell us about your event and we'll recommend the right package.",
  },
  {
    number: "02",
    title: "We Deliver & Set Up",
    description:
      "Our team arrives early, places every item with care, and makes sure everything looks perfect before your first guest walks in.",
  },
  {
    number: "03",
    title: "Enjoy Your Event",
    description:
      "Relax and celebrate. The logistics are handled — just focus on making memories with the people you love.",
  },
  {
    number: "04",
    title: "We Pick Up After",
    description:
      "When the party's over, we return and handle the full breakdown. You don't lift a finger.",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "David & Maria R.",
    location: "Carlsbad",
    rating: 5,
    text: "Kelari made everything so easy. The tables and chairs were spotless, the canopy looked amazing, and they set everything up before our guests arrived. Can't recommend them enough!",
    date: "Oct 2024",
  },
  {
    name: "Jessica T.",
    location: "Encinitas",
    rating: 5,
    text: "We were stressed about hosting a baby shower in our backyard, but Kelari took care of everything. The linens, the setup, the décor — it was beautiful and completely hassle-free.",
    date: "Sep 2024",
  },
  {
    name: "Sarah M.",
    location: "Oceanside",
    rating: 5,
    text: "Used Kelari for my daughter's graduation party at Guajome Park. They delivered on time, set everything up perfectly, and the whole setup looked stunning. Worth every penny.",
    date: "Jun 2024",
  },
  {
    name: "The Nguyen Family",
    location: "San Marcos",
    rating: 5,
    text: "Second time using Kelari and they delivered again. Chiavari chairs, round tables, and white linens — the backyard looked like a magazine photo. Thank you!",
    date: "Aug 2024",
  },
  {
    name: "Brenda K.",
    location: "Carlsbad",
    rating: 5,
    text: "Ordered tables, chairs, and a canopy for a birthday party at Poinsettia Park. Everything arrived early and the crew was incredibly professional. Will definitely book again!",
    date: "Jul 2024",
  },
  {
    name: "Mike & Tanya L.",
    location: "Encinitas",
    rating: 5,
    text: "Best vendor we've worked with for events. Communicated clearly, showed up when they said, and the pickup was just as smooth as delivery. 100% recommend.",
    date: "May 2024",
  },
];

// ── Gallery ───────────────────────────────────────────────────────────────────

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero-party.jpg",
    alt: "Party rental setup with tables and decorations",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/birthday-party.jpg",
    alt: "Birthday party rental setup",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/backyard-party.jpg",
    alt: "Backyard party with tables and chairs",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/baby-shower.jpg",
    alt: "Elegant baby shower table setup with linens",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/graduation-party.jpg",
    alt: "Graduation celebration party setup",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/engagement-party.jpg",
    alt: "Engagement party with elegant décor",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/park-party.jpg",
    alt: "Park party rental setup with canopy",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/gallery-tablescape.jpg",
    alt: "Tablescape with linens and tableware",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/gallery-marquee.jpg",
    alt: "Marquee letters and party decorations",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/gallery-canopy.jpg",
    alt: "White canopy tent at outdoor party",
    width: 1200,
    height: 900,
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────

export const homepageFaqs: FAQ[] = [
  {
    question: "Do you deliver to Carlsbad, Encinitas, Oceanside, and San Marcos?",
    answer:
      "Yes — we deliver, set up, and pick up across all four cities and the surrounding North County San Diego communities. Free delivery is included with every rental.",
  },
  {
    question: "Is delivery and setup really included at no extra charge?",
    answer:
      "Absolutely. Delivery, professional setup at your venue, and post-event pickup are all included in your rental price. No surprise fees.",
  },
  {
    question: "Can you deliver to parks and community spaces?",
    answer:
      "Yes. We regularly deliver to public parks throughout North County. Just make sure your space is reserved and we'll coordinate the delivery window.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend at least 1–2 weeks for most events. For peak season weekends (May–September), booking 3–4 weeks ahead ensures your preferred date and inventory.",
  },
  {
    question: "What kinds of events do you specialize in?",
    answer:
      "Birthday parties, baby showers, graduation celebrations, engagement parties, backyard gatherings, and park events. If you're celebrating, we can help.",
  },
  {
    question: "Can I bundle tables, chairs, linens, and décor together?",
    answer:
      "Yes — we offer custom packages that combine everything you need. Tell us about your event and we'll put together the perfect combination at the best price.",
  },
];

// ── Top service slugs ──────────────────────────────────────────────────────────

export const topServiceSlugs = [
  "party-rentals",
  "birthday-party-rentals",
  "backyard-party-rentals",
  "baby-shower-rentals",
  "graduation-party-rentals",
  "park-party-rentals",
];
