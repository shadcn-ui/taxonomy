import { Icons } from "@/components/icons"
import Link from "next/link"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container flex items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">Taxonomy</span>
          </Link>
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link href="/blog" className="text-sm font-medium hover:underline">
              Blog
            </Link>
            <Link
              href="#"
              className="cursor-not-allowed text-sm font-medium opacity-60 hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="cursor-not-allowed text-sm font-medium opacity-60 hover:underline"
            >
              Docs
            </Link>
          </nav>
        </div>
        <nav>
          <Link
            href="/login"
            className="relative inline-flex items-center rounded-md border border-transparent bg-brand-500 px-6 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
