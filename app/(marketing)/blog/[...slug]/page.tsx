import { notFound } from "next/navigation"
import { serialize } from "next-mdx-remote/serialize"

import { Blog } from "@/lib/mdx/sources"
import { MdxContent } from "@/components/mdx-content"
import { formatDate } from "@/lib/utils"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const files = await Blog.getMdxFiles()

  return files?.map((file) => ({
    slug: file.slug.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await Blog.getMdxNode(params?.slug)

  if (!post) {
    notFound()
  }

  const mdx = await serialize(post.content)

  return (
    <article className="container pt-8 md:max-w-3xl md:pt-12 lg:pt-24">
      <div className="flex flex-col space-y-4">
        <h1 className="md:leading-12 text-2xl font-bold leading-[1.2] sm:text-3xl md:text-5xl">
          {post.frontMatter.title}
        </h1>
        {post.frontMatter.date && (
          <p className="text-slate-800">{formatDate(post.frontMatter.date)}</p>
        )}
      </div>
      <div className="pt-12 pb-8 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12">
        <hr className="border-slate-100" />
      </div>
      {mdx && (
        <div className="prose max-w-none">
          <MdxContent source={mdx} />
        </div>
      )}
      <div className="pt-12 pb-8 md:pt-10 md:pb-8 lg:pt-12 lg:pb-12">
        <hr className="border-slate-100" />
      </div>
    </article>
  )
}
