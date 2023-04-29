"use client"

import { Icons } from "./icons"
import { Badge } from "./ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { UserAvatar } from "@/components/user-avatar"
import { User } from "next-auth"
import { signOut } from "next-auth/react"
import Link from "next/link"

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
    user: Pick<User, "name" | "image" | "email">
    credits: number
}

export function UserAccountNav({ user, credits }: UserAccountNavProps) {
    return (
        <div className="flex items-center gap-4">
            <span className="text-sm text-foreground hidden lg:block">
                {" "}
                {credits} credits remaining
            </span>
            <Link href="/credits">
                <Button size="sm">Buy credits</Button>
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className="relative">
                    <UserAvatar
                        user={{
                            name: user.name || null,
                            image: user.image || null,
                        }}
                        className="h-8 w-8"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-1 leading-none">
                            {user.name && (
                                <p className="font-medium">{user.name}</p>
                            )}
                            {user.email && (
                                <p className="w-[200px] truncate text-sm text-muted-foreground">
                                    {user.email}
                                </p>
                            )}
                        </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard/billing">Billing</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onSelect={(event) => {
                            event.preventDefault()
                            signOut({
                                callbackUrl: `${window.location.origin}/login`,
                            })
                        }}
                    >
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
