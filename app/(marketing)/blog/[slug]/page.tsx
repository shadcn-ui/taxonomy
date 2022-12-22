import BlogPostPage from '@/components/blog/BlogPostPage'
import PreviewPostPage from '@/components/blog/PreviewPostPage'
import { PreviewSuspense } from 'components/PreviewSuspense'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { previewData } from 'next/headers'

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const settings = getSettings()
   console.log(params.slug)



  if (previewData()) {
    const token = previewData().token || null
    const data = getPostAndMoreStories(params.slug, token)
    console.log(data); 
    return (
    <PreviewSuspense
      fallback={
        <BlogPostPage
          loading
          preview
          data={await data}
          settings={await settings}
        />
      }
    >
      <PreviewPostPage token={token} slug={params.slug} />
    </PreviewSuspense>
  )
} 
  const data = getPostAndMoreStories(params.slug)
  return <BlogPostPage data={await data} settings={await settings} />
}
// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1