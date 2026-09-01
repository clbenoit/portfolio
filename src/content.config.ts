import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog_fr = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog/fr' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    authors: z.array(z.string()).optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.string().optional(),
    category: z.string().optional(),
  }),
});

const blog_en = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog/en' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    authors: z.array(z.string()).optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.string().optional(),
    category: z.string().optional(),
  }),
});

const projects_fr = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects/fr' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.string().optional(),
    category: z.string().optional(),
  }),
});

const projects_en = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects/en' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { blog_fr, blog_en, projects_fr, projects_en };