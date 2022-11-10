import Link from "next/link"

import { Blog } from "@/lib/mdx/sources"
import { formatDate } from "@/lib/utils"

export default async function BlogPage() {
  const posts = await Blog.getAllMdxNodes()

  return (
    <div className="container pt-8 md:max-w-3xl md:pt-12 lg:pt-24">
      <div className="mx-auto flex flex-col gap-4">
        <h1 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Blog
        </h1>
        <p className="max-w-[75%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
          A blog built using MDX content. I copied some sample blog posts from
          my{" "}
          <Link href="https://shadcn.com" target="_blank" className="underline">
            personal site
          </Link>
          .
        </p>
      </div>
      <div className="md:pt-18 pt-12 pb-8 md:pb-10 lg:pt-24 lg:pb-12">
        <hr className="border-slate-100" />
      </div>
      {posts.map((post) => (
        <article key={post.slug} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <Link href={post.url}>
              <h2 className="max-w-[80%] text-2xl font-bold leading-normal sm:text-3xl md:text-3xl">
                {post.frontMatter.title}
              </h2>
            </Link>
            {post.frontMatter.date && (
              <p className="text-sm text-slate-600">
                {formatDate(post.frontMatter.date)}
              </p>
            )}
          </div>
          {post.frontMatter.excerpt && (
            <p className="text-slate-600">{post.frontMatter.excerpt}</p>
          )}
          <div className="py-8 md:py-10 lg:py-12">
            <hr className="border-slate-100" />
          </div>
        </article>
      ))}
    </div>
  )
}
