import Link from "next/link"
import { notFound } from "next/navigation"

import { allGuides } from "contentlayer/generated"

import { getTableOfContents } from "@/lib/toc"
import { Mdx } from "@/components/docs/mdx"
import { DashboardTableOfContents } from "@/components/docs/toc"
import { DocsPageHeader } from "@/components/docs/page-header"
import { Icons } from "@/components/icons"
import "@/styles/mdx.css"

interface GuidePageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  GuidePageProps["params"][]
> {
  return allGuides.map((guide) => ({
    slug: guide.slugAsParams.split("/"),
  }))
}

export default async function GuidePage({ params }: GuidePageProps) {
  const slug = params?.slug?.join("/")
  const guide = allGuides.find((guide) => guide.slugAsParams === slug)

  if (!guide) {
    notFound()
  }

  const toc = await getTableOfContents(guide.body.raw)

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader heading={guide.title} text={guide.description} />
        <Mdx code={guide.body.code} />
        <hr className="my-4 border-slate-200" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/guides"
            className="mb-4 inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all guides
          </Link>
        </div>
      </div>
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  )
}
