/**
 * homepage.ts — all content for src/pages/index.astro
 * Services, categories, and cities are imported from their own data files.
 */

import type { Step } from "../components/HowItWorks.astro";
import type { Testimonial } from "../components/TestimonialCarousel.astro";
import type { GalleryImage } from "../components/ImageGallery.astro";
import type { FAQ } from "../components/FAQAccordion.astro";
import { booqableStore } from "./site";

import heroPartyImg from "../assets/images/hero-party.jpg";
import birthdayPartyImg from "../assets/images/birthday-party.jpg";
import backyardPartyImg from "../assets/images/backyard-party.jpg";
import babyShowerImg from "../assets/images/baby-shower.jpg";
import graduationPartyImg from "../assets/images/graduation-party.jpg";
import engagementPartyImg from "../assets/images/engagement-party.jpg";
import parkPartyImg from "../assets/images/park-party.jpg";
import galleryTablescapeImg from "../assets/images/gallery-tablescape.jpg";
import galleryMarqueeImg from "../assets/images/gallery-marquee.jpg";
import galleryCanopyImg from "../assets/images/gallery-canopy.jpg";

export interface TrustBarItem {
  title: string;
  subtitle: string;
  icon: "sparkles" | "clock" | "check" | "chat" | "pin";
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export const hero = {
  title: "Party Rentals That Make Every Celebration Unforgettable",
  subtitle:
    "Tables, chairs, canopies, linens, and décor — delivered across Carlsbad, Encinitas, Oceanside & San Marcos. You celebrate. We handle the rest.",
  backgroundImage: "/images/hero-party.jpg",
  primaryCta: { label: "Book Now", href: booqableStore },
  secondaryCta: { label: "Get a Free Quote", href: "/quote/" },
};

export const trustBarItems: TrustBarItem[] = [
  { title: "Clean Inventory", subtitle: "Photo-ready every time", icon: "sparkles" },
  { title: "Reliable Delivery", subtitle: "On time, every time", icon: "clock" },
  { title: "Se Habla Español", subtitle: "Bilingual service", icon: "globe" },
  { title: "Easy Quoting", subtitle: "Fast, no-pressure", icon: "chat" },
  { title: "North County", subtitle: "Local & reliable", icon: "pin" },
];

// ── CTA Band ──────────────────────────────────────────────────────────────────

export const ctaBand = {
  title: "Party Rentals You Can Actually Count On",
  subtitle:
    "Professional delivery available across North County San Diego. No hidden fees, no stress — just a beautiful event.",
  primaryCta: { label: "Book Now", href: booqableStore },
  secondaryCta: { label: "Get a Free Quote", href: "/quote/" },
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
    title: "We Deliver",
    description:
      "Our team arrives at your venue and brings everything you ordered, ready to go. We walk you through setup so everything's clear before your first guest walks in.",
  },
  {
    number: "03",
    title: "Enjoy Your Event",
    description:
      "Relax and celebrate. The logistics are handled — just focus on making memories with the people you love.",
  },
  {
    number: "04",
    title: "We Handle Pickup",
    description:
      "When the party's over, we return and collect everything. Prefer to drop off at our Carlsbad location? Complimentary warehouse pickup is always available.",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: "David & Maria R.",
    location: "Carlsbad",
    rating: 5,
    text: "Kelari made everything so easy. The tables and chairs were spotless, the canopy looked amazing, and everything was dropped off right on time before our guests arrived. Can't recommend them enough!",
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
    text: "Used Kelari for my daughter's graduation party at Guajome Park. They delivered right on time and everything was exactly what we ordered. The whole setup looked stunning. Worth every penny.",
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
  { src: heroPartyImg, alt: "Party rental setup with tables and decorations" },
  { src: birthdayPartyImg, alt: "Birthday party rental setup" },
  { src: backyardPartyImg, alt: "Backyard party with tables and chairs" },
  { src: babyShowerImg, alt: "Elegant baby shower table setup with linens" },
  { src: graduationPartyImg, alt: "Graduation celebration party setup" },
  { src: engagementPartyImg, alt: "Engagement party with elegant décor" },
  { src: parkPartyImg, alt: "Park party rental setup with canopy" },
  { src: galleryTablescapeImg, alt: "Tablescape with linens and tableware" },
  { src: galleryMarqueeImg, alt: "Marquee letters and party decorations" },
  { src: galleryCanopyImg, alt: "White canopy tent at outdoor party" },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────

export const homepageFaqs: FAQ[] = [
  {
    question: "Where do you deliver?",
    answer:
      "We deliver across North County San Diego including Carlsbad, Encinitas, Oceanside, San Marcos, Vista, and surrounding communities. Delivery is priced by distance — request a quote with your event address and we'll include the delivery fee upfront.",
  },
  {
    question: "Do you offer complimentary pickup?",
    answer:
      "Yes — customers are always welcome to pick up and drop off rentals at our Carlsbad warehouse at no charge. If you'd like us to deliver to your venue, delivery fees are quote-based by distance.",
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
  "engagement-party-rentals",
  "park-party-rentals",
];
