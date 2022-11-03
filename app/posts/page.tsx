import { db } from "@/lib/db"

export default async function PostsPage() {
  const posts = await db.post.findMany()

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
