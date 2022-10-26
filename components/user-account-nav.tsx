"use client"

import { User } from "next-auth"
import { signOut } from "next-auth/react"

import { DropdownMenu } from "@/components/ui/dropdown"
import { Icons } from "@/components/icons"
import { UserAvatar } from "./user-avatar"
import Link from "next/link"

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="flex items-center gap-2 overflow-hidden rounded-md border bg-white p-2 px-2 hover:bg-slate-100 focus:ring-2 focus:ring-brand-900 focus:ring-offset-2 focus-visible:outline-none">
        <UserAvatar user={{ name: user.name, image: user.image }} />
        <div className="flex flex-1 flex-col items-start">
          {user.name && <p className="text-sm font-medium">{user.name}</p>}
          <p className="rounded-md bg-brand px-2 py-[2px] text-[10px] uppercase text-white">
            Pro
          </p>
        </div>
        <Icons.ellipsis className="h-4 w-4" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="md:w-[240px]" align="start">
          <div className="flex items-center justify-start gap-2 p-4">
            <div className="flex flex-col leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
              {user.email && (
                <p className="w-[200px] truncate text-sm text-slate-600">
                  {user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link href="/dashboard" className="w-full">
              Dashboard
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/dashboard/settings" className="w-full">
              Settings
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <Link
              href="https://github.com/shadcn/taxonomy"
              className="w-full"
              target="_blank"
            >
              GitHub
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            className="cursor-pointer"
            onSelect={(event) => {
              event.preventDefault()
              signOut({
                callbackUrl: `${window.location.origin}/login`,
              })
            }}
          >
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu>
  )
}
