import { Icons } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export default function IndexPage() {
  return (
    <section className="mx-auto grid max-w-[1100px] grid-cols-[1fr_380px] items-center gap-12 py-12">
      <div>
        <h1 className="text-6xl font-black leading-[1.1]">
          Publishing Platform for Everyone
        </h1>
        <p className="my-4 max-w-[85%] text-xl leading-8 text-slate-500">
          A Next.js 13 application built using layouts, server components and
          everything new in React 18.
        </p>
        <Link
          href="/login"
          className="relative inline-flex h-11 items-center rounded-md border border-transparent bg-brand-500 px-8 py-2 font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          Get Started
          <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      <Image
        src="/images/nextjs-icon-dark-background.png"
        width={380}
        height={380}
        alt="Next.js logo"
        priority
      />
    </section>
  )
}
