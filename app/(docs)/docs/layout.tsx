import { DocsSidebarNav } from "@/components/docs/sidebar-nav"
import { getDocsCategoriesWithArticleLinks } from 'lib/sanity.client'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  let docCategories = await getDocsCategoriesWithArticleLinks()

  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full flex-shrink-0 overflow-y-auto border-r border-r-slate-100 py-6 pr-2 md:sticky md:block lg:py-10">
        <DocsSidebarNav items={docCategories} />
      </aside>
      {children}
    </div>
  )
}
