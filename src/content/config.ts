// src/content/config.ts
// Kelari Party Rentals — Astro Content Collection Schema
// =======================================================
// This file was missing from the repo entirely.
// Place at: src/content/config.ts

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Kelari Party Rentals'),
    category: z.enum([
      'Party Planning',
      'Rental Guide',
      'Local Guide',
      'Tips & Advice',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    ogImage: z.string().optional(),
    // Internal linking fields — drive Related Services + money page sidebar
    relatedServices: z.array(z.string()).default([]),
    serviceAreas: z.array(z.string()).default([]),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

export const collections = { blog };
