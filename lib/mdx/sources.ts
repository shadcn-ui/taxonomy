import * as z from "zod"
import { createSource } from "."

export const Blog = createSource({
  contentPath: "content/blog",
  basePath: "/blog",
  sortBy: "date",
  sortOrder: "desc",
  frontMatter: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
  }),
})
