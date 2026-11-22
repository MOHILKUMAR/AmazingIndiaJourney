import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const tours = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/packages' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['same-day', 'golden-triangle', 'gt-extension', 'rajasthan']),
    destinations: z.array(z.string()), // destination slugs
    route: z.array(z.string()),
    days: z.number().int().positive(),
    duration: z.string(), // label shown on cards, e.g. "12 hrs", "1 day", "8 Days"
    priceFrom: z.number().positive().optional(), // empty = "Price on request"
    originalPrice: z.number().positive().optional(),
    badge: z.string().optional(), // e.g. "30% Off"
    reviewCount: z.number().optional(),
    pickup: z.string().optional(),
    hotelLevel: z.string().optional(),
    guide: z.string().optional(),
    vehicle: z.string().optional(),
    meals: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    highlights: z.array(z.string()),
    itinerary: z
      .array(z.object({ day: z.number().optional(), time: z.string().optional(), title: z.string(), description: z.string().optional() }))
      .default([]),
    inclusions: z.array(z.string()).default([]),
    exclusions: z.array(z.string()).default([]),
    note: z.string().optional(),
    importantInfo: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
  }),
});

const destinations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    summary: z.string(),
    bestTime: z.string(),
    image: z.string().optional(),
    order: z.number().default(100),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Agra Day Tour Packages'),
    category: z.string(),
    image: z.string().optional(),
    relatedTours: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: file('./src/data/reviews.json'),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    date: z.string(),
    rating: z.number().min(1).max(5),
    text: z.string(),
    tour: z.string().optional(),
  }),
});

const faqs = defineCollection({
  loader: file('./src/data/faqs.json'),
  schema: z.object({ q: z.string(), a: z.string(), category: z.string() }),
});

export const collections = { tours, destinations, blog, reviews, faqs };
