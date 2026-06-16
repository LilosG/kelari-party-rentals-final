import type { ImageMetadata } from 'astro';

import babyShower from '../assets/images/heroes/baby-shower-wide.jpg';
import backyardParty from '../assets/images/heroes/backyard-party-wide.jpg';
import birthdayParty from '../assets/images/heroes/birthday-party-wide.jpg';
import engagementParty from '../assets/images/heroes/engagement-party-wide.jpg';
import galleryMarquee from '../assets/images/heroes/gallery-marquee-wide.jpg';
import galleryTablescape from '../assets/images/heroes/gallery-tablescape-wide.jpg';
import graduationParty from '../assets/images/heroes/graduation-party-wide.jpg';
import heroParty from '../assets/images/heroes/hero-party-wide.jpg';
import parkParty from '../assets/images/heroes/park-party-wide.jpg';
import tentWhite10x20Open from '../assets/images/heroes/tent-white-10x20-open-wide.jpg';

// NEW hero images added [today's date] - replace cropped-wrong originals above
// where noted in categories.ts / services.ts. Each has a deliberately tuned
// focalPoint based on actual subject position, not a blanket default.
import chairsNew from '../assets/images/heroes/chairs-wide.jpg';
import tablesNew from '../assets/images/heroes/tables-wide.jpg';
import linensNew from '../assets/images/heroes/linens-wide.jpg';
import tableRunnersNew from '../assets/images/heroes/table-runners-wide.jpg';
import decorationsNew from '../assets/images/heroes/decorations-wide.jpg';
import marqueeLettersNew from '../assets/images/heroes/marquee-letters-wide.jpg';
import partyRentalsNew from '../assets/images/heroes/party-rentals-wide.jpg';
import birthdayNew from '../assets/images/heroes/birthday-wide.jpg';
import backyardNew from '../assets/images/heroes/backyard-wide.jpg';
import babyShowerNew from '../assets/images/heroes/baby-shower-wide.jpg';
import graduationNew from '../assets/images/heroes/graduation-wide.jpg';
import engagementNew from '../assets/images/heroes/engagement-wide.jpg';
import parkPartyNew from '../assets/images/heroes/park-party-wide.jpg';
import quinceaneraNew from '../assets/images/heroes/quinceanera-wide.jpg';

export interface HeroImageConfig {
  image: ImageMetadata;
  focalPoint?: string;
}

export const heroImages = {
  // --- existing entries, untouched ---
  babyShower: { image: babyShower, focalPoint: '50% 50%' },
  backyardParty: { image: backyardParty, focalPoint: '50% 50%' },
  backyardPartyHero: { image: backyardParty, focalPoint: '50% 50%' },
  birthdayParty: { image: birthdayParty, focalPoint: '50% 50%' },
  engagementParty: { image: engagementParty, focalPoint: '50% 50%' },
  galleryMarquee: { image: galleryMarquee, focalPoint: '50% 50%' },
  galleryTablescape: { image: galleryTablescape, focalPoint: '50% 50%' },
  graduationParty: { image: graduationParty, focalPoint: '50% 50%' },
  heroParty: { image: heroParty, focalPoint: '50% 50%' },
  parkParty: { image: parkParty, focalPoint: '50% 50%' },
  tentWhite10x20Open: { image: tentWhite10x20Open, focalPoint: '50% 50%' },

  // --- new entries, replace the assignments above on the pages noted ---
  chairsNew: { image: chairsNew, focalPoint: '50% 65%' },
  tablesNew: { image: tablesNew, focalPoint: '50% 60%' },
  linensNew: { image: linensNew, focalPoint: '50% 55%' },
  tableRunnersNew: { image: tableRunnersNew, focalPoint: '50% 45%' },
  decorationsNew: { image: decorationsNew, focalPoint: '50% 55%' },
  marqueeLettersNew: { image: marqueeLettersNew, focalPoint: '50% 55%' },
  partyRentalsNew: { image: partyRentalsNew, focalPoint: '50% 55%' },
  birthdayNew: { image: birthdayNew, focalPoint: '50% 50%' },
  backyardNew: { image: backyardNew, focalPoint: '50% 55%' },
  babyShowerNew: { image: babyShowerNew, focalPoint: '50% 50%' },
  graduationNew: { image: graduationNew, focalPoint: '50% 50%' },
  engagementNew: { image: engagementNew, focalPoint: '50% 55%' },
  parkPartyNew: { image: parkPartyNew, focalPoint: '50% 50%' },
  quinceaneraNew: { image: quinceaneraNew, focalPoint: '50% 55%' },
} satisfies Record<string, HeroImageConfig>;
