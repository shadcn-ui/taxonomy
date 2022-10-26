import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import * as z from "zod"

export const schema = z.object({
  userId: z.string(),
})

export function withUser(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      const query = await schema.parse(req.query)

      // Check if the user has access to this user.
      const session = await getSession({ req })

      if (query.userId !== session?.user.id) {
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
