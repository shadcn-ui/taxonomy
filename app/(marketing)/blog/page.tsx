
import IndexPage from '@/components/blog/IndexPage'
import PreviewIndexPage from '@/components/blog/PreviewIndexPage'
import { PreviewSuspense } from 'components/PreviewSuspense'
import { compareDesc } from "date-fns"
import { previewData } from 'next/headers'
// import { allPosts } from "contentlayer/generated"
import { getAllPosts, getSettings } from 'lib/sanity.client'


export default async function BlogPage() {
  // Fetch queries in parallel
  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])
  
  if (previewData()) {
    const token = previewData().token || null

    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage posts={posts} settings={settings} />
}

export const revalidate = 1