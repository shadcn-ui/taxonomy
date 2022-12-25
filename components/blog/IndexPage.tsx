import { compareDesc } from 'date-fns'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Link from 'next/link'

import BlogHeader from '@/components/blog/BlogHeader'
import Layout from '@/components/blog/BlogLayout'
import HeroPost from '@/components/blog/HeroPost'
import MoreStories from '@/components/blog/MoreStories'
import Container from '@/components/GeneralContainer'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
                Blog
              </h1>
              <p className="text-xl text-slate-600">
                A blog built using Sanity.io Posts are written using Portable
                Text.
              </p>
            </div>
            <Link
              href="/register"
              className="relative inline-flex h-11 items-center rounded-md border border-slate-900 bg-white px-8 py-2 text-center font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Sign Up
            </Link>
          </div>
          <hr className="my-8 border-slate-200" />

          <BlogHeader title={title} description={description} level={2} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
