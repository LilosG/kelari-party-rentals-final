import type { ImageMetadata } from 'astro';

import babyShower from '../assets/images/baby-shower.jpg';
import backyardParty from '../assets/images/backyard-party.jpg';
import birthdayParty from '../assets/images/birthday-party.jpg';
import engagementParty from '../assets/images/engagement-party.jpg';
import galleryMarquee from '../assets/images/gallery-marquee.jpg';
import galleryTablescape from '../assets/images/gallery-tablescape.jpg';
import graduationParty from '../assets/images/graduation-party.jpg';
import heroParty from '../assets/images/hero-party.jpg';
import parkParty from '../assets/images/park-party.jpg';
import tentWhite10x20Open from '../assets/images/tent-white-10x20-open.png';

export interface HeroImageConfig {
  image: ImageMetadata;
  focalPoint?: string;
}

export const heroImages = {
  babyShower: { image: babyShower, focalPoint: '50% 50%' },
  backyardParty: { image: backyardParty, focalPoint: '50% 50%' },
  backyardPartyHero: { image: heroParty, focalPoint: '50% 50%' },
  birthdayParty: { image: birthdayParty, focalPoint: '50% 50%' },
  engagementParty: { image: engagementParty, focalPoint: '50% 50%' },
  galleryMarquee: { image: galleryMarquee, focalPoint: '50% 50%' },
  galleryTablescape: { image: galleryTablescape, focalPoint: '50% 50%' },
  graduationParty: { image: graduationParty, focalPoint: '50% 50%' },
  heroParty: { image: heroParty, focalPoint: '50% 50%' },
  parkParty: { image: parkParty, focalPoint: '50% 50%' },
  tentWhite10x20Open: { image: tentWhite10x20Open, focalPoint: '50% 100%' },
} satisfies Record<string, HeroImageConfig>;
