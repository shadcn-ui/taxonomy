import type { Icon } from "lucide-react"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  icon?: Icon
}

export type MainNavItem = Pick<NavItem, "title" | "href" | "disabled">

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)
