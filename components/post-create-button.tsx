"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Post } from "@/lib/prisma"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import toast from "@/components/ui/toast"

async function createPost(): Promise<Pick<Post, "id">> {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Untitled Post",
    }),
  })

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      message: "Your post was not created. Please try again.",
      type: "error",
    })
  }

  return await response.json()
}

interface PostCreateButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export function PostCreateButton({
  className,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    setIsLoading(!isLoading)

    const post = await createPost()

    // This forces a cache invalidation.
    router.refresh()

    router.push(`/editor/${post.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex h-9 items-center rounded-md border border-transparent bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New post
    </button>
  )
}
