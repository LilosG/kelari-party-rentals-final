import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default("Kelari Party Rentals"),
    category: z.enum([
      "Party Planning",
      "Rental Guide",
      "Local Guide",
      "Tips & Advice",
    ]),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    relatedServices: z.array(z.string()).default([]),
    serviceAreas: z.array(z.string()).default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { blog };
