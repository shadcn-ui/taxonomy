import { db } from "@/lib/db"
import { headers } from "next/headers"

export default async function PostsPage() {
  const posts = await db.post.findMany()

  headers()

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
