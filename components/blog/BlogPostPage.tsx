import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import BlogHeader from '@/components/blog/BlogHeader'
import Layout from '@/components/blog/BlogLayout'
import MoreStories from '@/components/blog/MoreStories'
import PostBody from '@/components/blog/PostBody'
import PostHeader from '@/components/blog/PostHeader'
import PostTitle from '@/components/blog/PostTitle'
import Container from '@/components/GeneralContainer'
import { Icons } from '@/components/icons'

export default function BlogPostPage(props: {
  preview?: boolean
  loading?: boolean
  data: { post: Post; morePosts: Post[] }
  settings: Settings
}) {
  const { preview, loading, data, settings } = props
  const { post = {} as any, morePosts = [] } = data || {}
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <Link
          href="/blog"
          className="relative  -left-[200px] hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 xl:inline-flex"
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="relative max-w-3xl py-6 lg:py-10">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
        <hr className="my-4 border-slate-200" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link>
        </div>
      </Container>
    </Layout>
  )
}
