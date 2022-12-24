"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "types"
import { cn } from "@/lib/utils"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()
  console.log("Pathname: " + pathname)
  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-8")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>
          <DocsSidebarNavItems items={item.items } pathname={pathname} />
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps): JSX.Element {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.disabled ? "#" : `/docs/${item.slug}` }
          className={cn(
            "flex w-full items-center rounded-md px-2 py-2 hover:underline",
            item.disabled && "cursor-not-allowed opacity-60",
            {
              "bg-slate-100": pathname ===  `/docs/` + item.slug,
            }
          )}
          target={item.external && "_blank"}
          rel={item.external ? "noreferrer" : ""}
        >
          {item.title}
        </Link>
      ))}
    </div>
  ) : null
}
