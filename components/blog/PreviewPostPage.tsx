'use client'

import { usePreview } from 'lib/sanity.preview'
import {
  type Post,
  type Settings,
  postAndMoreStoriesQuery,
  settingsQuery,
} from 'lib/sanity.queries'

import BlogPostPage from '@/components/blog/BlogPostPage'

export default function PreviewPostPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: { post: Post; morePosts: Post[] } = usePreview(
    token,
    postAndMoreStoriesQuery,
    {
      slug,
    }
  ) || { post: null, morePosts: [] }
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <BlogPostPage preview data={data} settings={settings} />
}
