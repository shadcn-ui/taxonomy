import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  type Post,
  type Settings,
  indexQuery,
  docsCategoriesWithArticleLinksQuery, 
  docBySlugQuery,
  docSlugsQuery,
  DocArticle,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  settingsQuery,
  DocCategory,
  Support,
  SupportCategory,
  supportCategoryQuery,
  supportCategorySlugsQuery,
  supportCategoryArticlesQuery, 
  
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

// Blog 
export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}

// Support Articles 

export async function getDocBySlug(slug: string): Promise<DocArticle> {
  if (client) {
    return (await client.fetch(docBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getAllDocsSlugs(): Promise<Pick<DocArticle, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(docSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllSupportCategories(): Promise<SupportCategory[]> {
  if (client) {
    return (await client.fetch(supportCategoryQuery)) || []
  }
  return []
}

export async function getAllSupportCategorySlugs(): Promise<Pick<SupportCategory, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(supportCategorySlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllSupportCategoryArticles(categorySlug: string): Promise<Support[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(supportCategorySlugsQuery)) || []
    return (await client.fetch(supportCategoryArticlesQuery(categorySlug))) || []
  }
  return []
}

export async function getDocsCategoriesWithArticleLinks(): Promise<DocCategory[]>  {
  if (client) {
    return (await client.fetch(docsCategoriesWithArticleLinksQuery)) || []
  }
  return []
}