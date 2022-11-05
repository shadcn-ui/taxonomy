import { Page } from "@/lib/mdx/sources"

export default async function Head({ params }) {
  const page = await Page.getMdxNode(params?.slug)

  if (!page) {
    return null
  }

  return (
    <>
      <title>{page.frontMatter.title}</title>
      {page.frontMatter.excerpt && (
        <meta name="description" content={page.frontMatter.excerpt} />
      )}
    </>
  )
}
