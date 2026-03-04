import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    answer_capsule: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'faq': faqCollection,
};
