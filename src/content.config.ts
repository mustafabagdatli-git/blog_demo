import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // An experiment a reader can open and run, served from public/experiments/.
    experiment: z.string().optional(),
    // The facts of the run, shown as a card at the top of the post. Leave a field
    // out when it is unknown: the card says "not recorded" rather than guessing.
    run: z
      .object({
        date: z.coerce.date().optional(),
        models: z.string().optional(),
        setup: z.string().optional(),
        result: z.string().optional(),
        cost: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { posts };
