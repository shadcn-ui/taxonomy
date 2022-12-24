import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
const supportCategoryFields = groq`
      _id,
      title,
      subText,
      icon,
      "count": count(*[_type == "support" && references(^._id)]),
      "slug": slug.current,
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const supportCategoryQuery = groq`
*[_type == "supportCategory"] | order(date asc, _updatedAt asc) {
  ${supportCategoryFields}
}`

export const supportCategorySlugsQuery = groq`
*[_type == "supportCategory" && defined(slug.current)][].slug.current
`
export function supportCategoryArticlesQuery(categorySlug: string) {return  groq`
  *[_type == "support" && category->slug.current == "${categorySlug}" ] | order(date asc, _updatedAt asc) {
    _id,
  title,
  "slug": slug.current,
  content, 
}
`}  

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const docSlugsQuery = groq`
*[_type == "documentation" && defined(slug.current)][].slug.current
`

export const docBySlugQuery = groq`
*[_type == "documentation" && slug.current == $slug][0] {
  title, 
  description,
 content, 
 "slug": slug.current, 
 "headings": content[length(style) == 2 && string::startsWith(style, "h")]
} 
`

export const docsCategoriesWithArticleLinksQuery  = groq`*[_type == "docCategory"] | order(date asc, _updatedAt asc) {
  title,
  "items" : *[_type == "documentation" && references(^._id) ] { title, "slug" : slug.current} ,
  }`

export interface Author {
  name?: string
  picture?: any
}

export interface DocArticle{
  _id: string
  title: string
  description: string
  coverImage?: any
  slug?: string
  content?: any
  headings?: any
}

export interface DocCategory {
  title: string
  slug?: string
  icon?: any
  items: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Support {
  _id: string
  title?: string
  slug?: string
  content?: any
}

export interface SupportCategory {
  _id: string
  count?: number
  title?: string
  subText?: string
  slug?: string
  icon?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}