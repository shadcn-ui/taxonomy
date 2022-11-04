import { notFound } from "next/navigation"
import { headers } from "next/headers"
import { Post, User } from "@prisma/client"

import { Editor } from "@/components/editor"
import { db } from "@/lib/db"
import { getSession } from "@/lib/session"

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  })
}

interface EditorPageProps {
  params: { postId: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const session = await getSession(headers().get("cookie"))
  const post = await getPostForUser(params.postId, session?.user.id)

  if (!post) {
    notFound()
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  )
}
