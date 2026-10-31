import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resources = defineCollection({
  loader: glob({ base: './src/content/resources', pattern: '**/index.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    sourceArea: z.string(),
    format: z.enum(['article', 'presentation']),
    tags: z.array(z.string()),
    sourceHash: z.string(),
    status: z.enum(['draft', 'published']),
    youtubeVideoUrl: z.url().optional(),
    youtubePlaylistUrl: z.url().optional(),
    sourceDownload: z.string().optional(),
  }),
});

export const collections = { resources };
