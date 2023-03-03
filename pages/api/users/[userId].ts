import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { withCurrentUser } from "@/lib/api-middlewares/with-current-user"
import { withMethods } from "@/lib/api-middlewares/with-methods"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { userNameSchema } from "@/lib/validations/user"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PATCH") {
    try {
      const session = await getServerSession(req, res, authOptions)
      const user = session?.user

      if (!user) {
        throw new Error("User not found.")
      }

      const body = req.body

      if (body?.name) {
        const payload = userNameSchema.parse(body)

        await db.user.update({
          where: {
            id: user.id,
          },
          data: {
            name: payload.name,
          },
        })
      }

      return res.end()
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json(error.issues)
      }

      return res.status(422).end()
    }
  }
}

export default withMethods(["PATCH"], withCurrentUser(handler))
