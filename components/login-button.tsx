"use client"

import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react"
import Link from "next/link"

export function LoginButton() {
    const { status } = useSession()
    return (
        <Link
            href="/login"
            className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
            )}
        >
            {status === "authenticated" ? "Dashboard" : "Login"}
        </Link>
    )
}
