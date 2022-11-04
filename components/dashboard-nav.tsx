"use client"

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

import { Icon, Icons } from "@/components/icons"

export type NavigationItem = {
  title: string
  href: string
  disabled?: boolean
  icon?: Icon
}

export const navigationItems: NavigationItem[] = [
  {
    title: "Posts",
    href: "/dashboard",
    icon: Icons.post,
  },
  {
    title: "Pages",
    href: "/",
    icon: Icons.page,
    disabled: true,
  },
  {
    title: "Media",
    href: "/",
    icon: Icons.media,
    disabled: true,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Icons.settings,
  },
]

export function DashboardNav() {
  const path = usePathname()

  return (
    <nav className="grid items-start gap-2">
      {navigationItems.map((navigationItem, index) => (
        <Link
          key={index}
          href={navigationItem.disabled ? "/" : navigationItem.href}
        >
          <span
            className={clsx(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100",
              path === navigationItem.href ? "bg-slate-200" : "transparent",
              navigationItem.disabled && "cursor-not-allowed opacity-50"
            )}
          >
            <navigationItem.icon className="mr-2 h-4 w-4" />
            <span>{navigationItem.title}</span>
          </span>
        </Link>
      ))}
    </nav>
  )
}
