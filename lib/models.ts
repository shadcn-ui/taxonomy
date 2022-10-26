import { Post } from ".prisma/client"

export type SelectFields<T> = {
  [K in keyof T]?: true
}

export type PostItem = Pick<Post, "id" | "title" | "published">
