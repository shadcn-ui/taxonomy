import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import * as z from "zod"

import { db } from "@/lib/db"
import { withMethods } from "@/lib/api-middlewares/with-methods"
import { withAuthentication } from "@/lib/api-middlewares/with-authentication"

const postCreateSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (req.method === "GET") {
    try {
      const posts = await db.post.findMany({
        select: {
          id: true,
          title: true,
          published: true,
          createdAt: true,
        },
        where: {
          authorId: session.user.id,
        },
      })

      return res.json(posts)
    } catch (error) {
      return res.status(500).end()
    }
  }

  if (req.method === "POST") {
    try {
      const body = postCreateSchema.parse(JSON.parse(req.body))

      const post = await db.post.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: session.user.id,
        },
        select: {
          id: true,
        },
      })

      return res.json(post)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }

      return res.status(500).end()
    }
  }
}

export default withMethods(["GET", "POST"], withAuthentication(handler))
