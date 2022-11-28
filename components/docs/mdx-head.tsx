import * as z from "zod"
import { allDocuments } from "contentlayer/generated"
import { ogImageSchema } from "@/lib/validations/og"

interface MdxHeadProps {
  params: {
    slug?: string[]
  }
  og?: z.infer<typeof ogImageSchema>
}

export default function MdxHead({ params, og }: MdxHeadProps) {
  const slug = params?.slug?.join("/") || ""
  const mdxDoc = allDocuments.find((doc) => doc.slugAsParams === slug)

  if (!mdxDoc) {
    return null
  }

  const title = `${mdxDoc.title} - Taxonomy`
  const url = process.env.NEXT_PUBLIC_APP_URL
  let ogUrl = new URL(`${url}/og.jpg`)

  if (og.type) {
    ogUrl = new URL(url)
    ogUrl.searchParams.set("heading", mdxDoc.title)
    ogUrl.searchParams.set("type", og.type)
  }

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={mdxDoc.description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogUrl.toString()} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:image" content={ogUrl.toString()} />
    </>
  )
}
