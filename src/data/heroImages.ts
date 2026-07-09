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
import kelariPartyRentalsAviaraPartyRentals from '../assets/images/heroes/kelari-party-rentals-aviara-party-rentals.png';
import kelariPartyRentalsVistaPartyRentals from '../assets/images/heroes/kelari-party-rentals-vista-party-rentals.png';
import kelariPartyRentalsTableRunnerRentals from '../assets/images/heroes/kelari-party-rentals-table-runner-rentals.png';
import kelariPartyRentalsOldeCarlsbadPartyRentals from '../assets/images/heroes/kelari-party-rentals-olde-carlsbad-party-rentals.png';
import kelariPartyRentalsTableRentals from '../assets/images/heroes/kelari-party-rentals-table-rentals.png';
import kelariPartyRentalsChairRentals from '../assets/images/heroes/kelari-party-rentals-chair-rentals.png';
import kelariPartyRentalsBressiRanchBackyardPartyRentals from '../assets/images/heroes/kelari-party-rentals-bressi-ranch-backyard-party-rentals.png';
import kelariPartyRentalsMarqueeLettersWide from '../assets/images/heroes/marquee-letters-wide.jpg';
import kelariPartyRentalsOceansideEventRentals from '../assets/images/heroes/kelari-party-rentals-oceanside-event-rentals.png';
import kelariPartyRentalsHomepageHero from '../assets/images/heroes/kelari-party-rentals-homepage-hero.png';
import kelariPartyRentalsCarlsbadPartyRentals from '../assets/images/heroes/kelari-party-rentals-carlsbad-party-rentals.png';

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

  kelariPartyRentalsAviaraPartyRentals: {
    image: kelariPartyRentalsAviaraPartyRentals,
    alt: 'Kelari Party Rentals outdoor party rental setup in Aviara and North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsVistaPartyRentals: {
    image: kelariPartyRentalsVistaPartyRentals,
    alt: 'Kelari Party Rentals backyard party rental setup in Vista and North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsTableRunnerRentals: {
    image: kelariPartyRentalsTableRunnerRentals,
    alt: 'Kelari Party Rentals table runner and event rental setup in North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsOldeCarlsbadPartyRentals: {
    image: kelariPartyRentalsOldeCarlsbadPartyRentals,
    alt: 'Kelari Party Rentals outdoor party rental setup in Olde Carlsbad and North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsTableRentals: {
    image: kelariPartyRentalsTableRentals,
    alt: 'Kelari Party Rentals table rental setup in Carlsbad and North County San Diego',
    focalPoint: 'center center',
  },

  kelariPartyRentalsChairRentals: {
    image: kelariPartyRentalsChairRentals,
    alt: 'Kelari Party Rentals chair rental setup in La Costa and North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsBressiRanchBackyardPartyRentals: {
    image: kelariPartyRentalsBressiRanchBackyardPartyRentals,
    alt: 'Kelari Party Rentals backyard party setup in Bressi Ranch and North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsMarqueeLettersWide: {
    image: kelariPartyRentalsMarqueeLettersWide,
    alt: 'Kelari Party Rentals marquee letter rentals in North County San Diego',
    focalPoint: 'center center',
  },

  kelariPartyRentalsOceansideEventRentals: {
    image: kelariPartyRentalsOceansideEventRentals,
    alt: 'Kelari Party Rentals event rental setup in Oceanside and North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsHomepageHero: {
    image: kelariPartyRentalsHomepageHero,
    alt: 'Kelari Party Rentals homepage party rental setup in North County San Diego',
    focalPoint: 'center center',
  },
  kelariPartyRentalsCarlsbadPartyRentals: {
    image: kelariPartyRentalsCarlsbadPartyRentals,
    alt: 'Kelari Party Rentals party rental setup in Carlsbad and North County San Diego',
    focalPoint: 'center center',
  },
} satisfies Record<string, HeroImageConfig>;
