import IndexPage from '@/components/blog/IndexPage'
import PreviewIndexPage from '@/components/blog/PreviewIndexPage'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'
import { marketingConfig } from '@/config/marketing'
import { PreviewSuspense } from 'components/PreviewSuspense'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { previewData } from 'next/headers'
import Link from 'next/link'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])

  if (previewData()) {
    const token = previewData().token || null
    return (
      <div className="flex min-h-screen flex-col">
        <header className="container sticky top-0 z-40 bg-white">
          <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
            <MainNav items={marketingConfig.mainNav} />
            <nav>
              <Link
                href="/login"
                className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-6 py-1 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Login
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <PreviewSuspense
            fallback={
              <IndexPage loading preview posts={posts} settings={settings} />
            }
          >
            <PreviewIndexPage token={token} />
          </PreviewSuspense>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-6 py-1 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <IndexPage posts={posts} settings={settings} />
      </main>
      <SiteFooter />
    </div>
  )
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
