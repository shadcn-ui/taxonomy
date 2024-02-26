import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { defineCollection, defineConfig, s } from 'velite'

const computedFields = (data, ctx) => {
  console.log(ctx.meta.file.stem)
  return {
    ...data,
    slug: `/${ctx.meta.file.stem?.replace('/index', '')}`,
    slugAsParams: ctx.meta.file.stem?.replace('/index', '').split('/').slice(1).join('/'),
  }
}

const docs = defineCollection({
  name: 'Doc',
  pattern: 'docs/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    published: s.boolean().default(true),
    body: s.mdx()
  }).transform(computedFields)
})

const guides = defineCollection({
  name: 'Guide',
  pattern: 'guides/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    featured: s.boolean().default(false),
    body: s.mdx()
  }).transform(computedFields)
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    image: s.string().max(99),
    authors: s.array(s.string()),
    body: s.mdx()
  }).transform(computedFields)
})

const authors = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    avatar: s.string().max(99),
    twitter: s.string().max(99),
    body: s.mdx()
  }).transform(computedFields)
})

const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    body: s.mdx()
  }).transform(computedFields)
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { pages: {
    name: 'Page',
    pattern: 'pages/**/*.mdx',
    schema: s.object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      body: s.mdx()
    }).transform(computedFields)
  }, authors: {
    name: 'Author',
    pattern: 'authors/**/*.mdx',
    schema: s.object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      avatar: s.string().max(99),
      twitter: s.string().max(99),
      body: s.mdx()
    }).transform(computedFields)
  }, posts: {
    name: 'Post',
    pattern: 'blog/**/*.mdx',
    schema: s.object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      image: s.string().max(99),
      authors: s.array(s.string()),
      body: s.mdx()
    }).transform(computedFields)
  }, guides: {
    name: 'Guide',
    pattern: 'guides/**/*.mdx',
    schema: s.object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      body: s.mdx()
    }).transform(computedFields)
  }, docs: {
    name: 'Doc',
    pattern: 'docs/**/*.mdx',
    schema: s.object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      published: s.boolean().default(true),
      body: s.mdx()
    }).transform(computedFields)
  } },
  mdx: {
    rehypePlugins: [
      rehypeSlug as any,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  }
})
