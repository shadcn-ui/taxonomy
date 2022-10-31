"use client"

import { MDXRemote } from "next-mdx-remote"

export function MdxContent({ source }) {
  return <MDXRemote {...source} />
}
