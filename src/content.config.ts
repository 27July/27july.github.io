import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    status: z.string(),
    featured: z.boolean().optional().default(false),
    summary: z.string(),
    image: z.string(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    tags: z.array(
      z.enum([
        "Backend",
        "Frontend",
        "Full-Stack",
        "Data",
        "ML/AI",
        "Systems",
        "Embedded",
        "HPC",
        "Mobile",
        "Desktop",
        "DevOps/Cloud",
        "Browser Extension",
      ]),
    ),
    technologies: z.array(z.string()),
  }),
});

export const collections = { projects };
