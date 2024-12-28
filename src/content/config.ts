import { defineCollection, z } from 'astro:content';

export const collections = {
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      publishDate: z.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      image: z.string().default("/static/blog-placeholder.png")
    }),
  }),
};