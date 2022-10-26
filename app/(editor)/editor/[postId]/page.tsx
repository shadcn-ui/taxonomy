// import { notFound } from "next/dist/client/components/not-found"

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

  // TODO: If I return notFound here, I get a linting error.
  // Type error: Page "app/(editor)/editor/[postId]/page.tsx" does not match the required types of a Next.js Page.
  // Expected "ReactNode", got "void | Element".
  // if (!post) {
  //   return notFound()
  // }

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
