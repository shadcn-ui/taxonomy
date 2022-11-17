import { allDocuments } from "contentlayer/generated"

interface MdxHeadProps {
  params: {
    slug?: string[]
  }
}

export default function MdxHead({ params }: MdxHeadProps) {
  const slug = params?.slug?.join("/") || ""
  const mdxDoc = allDocuments.find((doc) => doc.slugAsParams === slug)

  if (!mdxDoc) {
    return null
  }

  const title = `${mdxDoc.title} - Taxonomy`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={mdxDoc.description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tx.shadcn.com" />
      <meta property="og:image" content="https://tx.shadcn.com/og.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tx.shadcn.com" />
      <meta property="twitter:image" content="https://tx.shadcn.com/og.jpg" />
    </>
  )
}
