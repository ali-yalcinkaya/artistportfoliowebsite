import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artworks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artworks' }),
  schema: z.object({
    title: z.string(),
    technique: z.string().optional(),
    calligrapher: z.string().optional(),
    dimensions: z.string().optional(),
    image: z.string(),
    order: z.number().default(999),
    featured: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

export const collections = { artworks };
