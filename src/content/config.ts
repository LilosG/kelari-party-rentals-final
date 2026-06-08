import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
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
    relatedServices: z.array(z.string()).default([]),
    serviceAreas: z.array(z.string()).default([]),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

export const collections = { blog };
