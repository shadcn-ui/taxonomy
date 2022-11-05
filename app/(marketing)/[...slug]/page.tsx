import { notFound } from "next/navigation"

import { Page } from "@/lib/mdx/sources"
import { MdxContent } from "@/components/mdx-content"
import { serialize } from "next-mdx-remote/serialize"

interface PageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const files = await Page.getMdxFiles()

  return files?.map((file) => ({
    slug: file.slug.split("/"),
  }))
}

export default async function BasicPage({ params }: PageProps) {
  const page = await Page.getMdxNode(params.slug)

  if (!page) {
    notFound()
  }

  const mdx = await serialize(page.content)

  return (
    <article className="mx-auto max-w-2xl py-12">
      <div className="flex flex-col space-y-2">
        <h1 className="max-w-[90%] text-4xl font-bold leading-normal">
          {page.frontMatter.title}
        </h1>
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
