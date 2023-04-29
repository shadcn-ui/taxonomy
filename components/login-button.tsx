"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { useSession } from "next-auth/react"

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
      {status === "authenticated" ? "Account" : "Login"}
    </Link>
  )
}
