import { notFound } from "next/navigation"

import { Editor } from "@/components/editor"
import { db } from "@/lib/db"

async function getPost(postId: string) {
  return await db.post.findFirst({
    where: {
      id: postId,
    },
  })
}

interface EditorPageProps {
  params: { postId: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const post = await getPost(params.postId)

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
