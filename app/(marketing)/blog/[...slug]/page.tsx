import { Blog } from "@/lib/mdx/sources"
import { MdxContent } from "@/components/mdx-content"
import { formatDate } from "@/lib/utils"

// TODO: Properly type this file once the following fix lands.
// @see https://github.com/vercel/next.js/pull/42019
interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  const files = await Blog.getMdxFiles()

  return files?.map((file) => ({
    slug: file.slug.split("/"),
  }))
}

export default async function PostPage({ params }) {
  const post = await Blog.getMdxNode(params?.slug?.join("/"))

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
      <div className="prose max-w-none">
        <MdxContent source={post.mdx} />
      </div>
    </article>
  )
}
