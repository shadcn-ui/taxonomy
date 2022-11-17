"use client"

import Image from "next/image"

import { Popover } from "@/ui/popover"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import OgImage from "public/og.jpg"

export function Help() {
  return (
    <Popover>
      <Popover.Trigger className="fixed right-4 bottom-4 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-brand text-white">
        <Icons.pizza className="h-5 w-5" />
        <span className="sr-only">Toggle</span>
      </Popover.Trigger>
      <Popover.Content className="bg-brand p-4 text-sm text-white">
        <div className="grid w-[300px] gap-4">
          <Image
            src={OgImage}
            alt="Screenshot"
            className="overflow-hidden rounded-sm"
          />
          <p>
            This app is a work in progress. I&apos;m building this in public.
          </p>
          <p>
            You can follow the progress on Twitter{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="border-b border-b-white"
            >
              @shadcn
            </a>{" "}
            or on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="border-b border-b-white"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Popover.Content>
    </Popover>
  )
}
