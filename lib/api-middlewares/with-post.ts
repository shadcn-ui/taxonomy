import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import * as z from "zod"
import { db } from "../db"

export const schema = z.object({
  postId: z.string(),
})

export function withPost(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      const query = await schema.parse(req.query)

      // Check if the user has access to this post.
      const session = await getSession({ req })
      const count = await db.post.count({
        where: {
          id: query.postId,
          authorId: session.user.id,
        },
      })

      if (count < 1) {
        return res.status(403).end()
      }

      return handler(req, res)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }

      return res.status(500).end()
    }
  }
}
