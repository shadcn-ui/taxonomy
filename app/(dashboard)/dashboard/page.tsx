import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { User } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"
import { DashboardHeader } from "@/components/dashboard-header"
import { PostCreateButton } from "@/components/post-create-button"
import { DashboardShell } from "@/components/dashboard-shell"
import { PostItem } from "@/components/post-item"
import { EmptyPlaceholder } from "@/components/empty-placeholder"

async function getPostsForUser(userId: User["id"]) {
  return await db.post.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  })
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  const posts = await getPostsForUser(user.id)

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="divide-y divide-neutral-200 rounded-md border border-slate-200">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton className="border-slate-200 bg-white text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
