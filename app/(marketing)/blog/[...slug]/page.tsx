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
  const mdx = await serialize(post.content)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-2xl py-12">
      <div className="flex flex-col space-y-2">
        <h1 className="max-w-[90%] text-4xl font-bold leading-normal">
          {post.frontMatter.title}
        </h1>
        {post.frontMatter.date && (
          <p className="text-sm text-slate-600">
            {formatDate(post.frontMatter.date)}
          </p>
        )}
      </div>
      <hr className="my-6" />
      {mdx && (
        <div className="prose max-w-none">
          <MdxContent source={mdx} />
        </div>
      )}
    </article>
  )
}
