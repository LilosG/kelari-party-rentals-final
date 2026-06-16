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

export interface HeroImageConfig {
  image: ImageMetadata;
  focalPoint?: string;
}

export const heroImages = {
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
} satisfies Record<string, HeroImageConfig>;
