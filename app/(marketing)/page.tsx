import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import hero from "../../public/images/hero.png"

export default async function IndexPage() {

  return (
    <>
      <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <Image src={hero} width={250} alt="Hero image" priority />
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
            Welcome back, John
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            How do u feel today?
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/docs" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}