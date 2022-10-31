import { promises as fs } from "fs"
import hasha from "hasha"
import glob from "fast-glob"
import path from "path"
import NodeCache from "node-cache"
import { serialize } from "next-mdx-remote/serialize"
import {
  SerializeOptions,
  MDXRemoteSerializeResult,
} from "next-mdx-remote/dist/types"
import * as z from "zod"

const mdxCache = new NodeCache()

export interface Source<T> {
  contentPath: string
  basePath: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
  frontMatter: T
}

interface MdxFile {
  filepath: string
  slug: string
  url: string
}

export interface MdxFileData<TFrontmatter> {
  raw: string
  hash: string
  frontMatter: TFrontmatter
  mdx: MDXRemoteSerializeResult
}

export function createSource<T extends z.ZodType>(source: Source<T>) {
  const { contentPath, basePath, sortBy, sortOrder } = source

  async function getMdxFiles() {
    const files = await glob(`${contentPath}/**/*.{md,mdx}`)

    if (!files.length) return []

    return files.map((filepath) => {
      let slug = filepath
        .replace(contentPath, "")
        .replace(/^\/+/, "")
        .replace(new RegExp(path.extname(filepath) + "$"), "")

      slug = slug.replace(/\/?index$/, "")

      return {
        filepath,
        slug,
        url: `${basePath?.replace(/\/$/, "")}/${slug}`,
      }
    })
  }

  async function getFileData(
    file: MdxFile,
    mdxOptions?: SerializeOptions
  ): Promise<MdxFileData<z.infer<T>>> {
    const raw = await fs.readFile(file.filepath, "utf-8")
    const hash = hasha(raw.toString())

    const cachedContent = mdxCache.get<MdxFileData<z.infer<T>>>(hash)
    if (cachedContent?.hash === hash) {
      return cachedContent
    }

    const mdx = await serialize(raw, {
      parseFrontmatter: true,
      ...mdxOptions,
    })
    const frontMatter = mdx.frontmatter
      ? (source.frontMatter.parse(mdx.frontmatter) as z.infer<T>)
      : null

    const fileData = {
      raw,
      frontMatter,
      hash,
      mdx,
    }

    mdxCache.set(hash, fileData)

    return fileData
  }

  async function getMdxNode(
    slug: string | string[],
    mdxOptions?: SerializeOptions
  ) {
    const _slug = Array.isArray(slug) ? slug.join("/") : slug

    const files = await getMdxFiles()

    if (!files?.length) return null

    const [file] = files.filter((file) => file.slug === _slug)

    if (!file) return null

    const data = await getFileData(file, mdxOptions)

    return {
      ...file,
      ...data,
    }
  }

  async function getAllMdxNodes() {
    const files = await getMdxFiles()

    if (!files.length) return []

    const nodes = await Promise.all(
      files.map(async (file) => {
        return await getMdxNode(file.slug)
      })
    )

    const adjust = sortOrder === "desc" ? -1 : 1
    return nodes.sort((a, b) => {
      if (a.frontMatter[sortBy] < b.frontMatter[sortBy]) {
        return -1 * adjust
      }
      if (a.frontMatter[sortBy] > b.frontMatter[sortBy]) {
        return 1 * adjust
      }
      return 0
    })
  }

  return {
    getMdxFiles,
    getFileData,
    getMdxNode,
    getAllMdxNodes,
  }
}
