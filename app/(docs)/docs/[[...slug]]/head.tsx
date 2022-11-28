import { allDocs } from "contentlayer/generated"

import MdxHead from "@/components/docs/mdx-head"

export default function Head({ params }) {
  const slug = params?.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  return (
    <MdxHead
      params={params}
      og={{ heading: doc.description, type: "Documentation", mode: "light" }}
    />
  )
}
