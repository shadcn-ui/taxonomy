import { NextApiRequest, NextApiResponse } from "next"
import * as z from "zod"
import { unstable_getServerSession } from "next-auth/next"

import { db } from "@/lib/db"
import { withMethods } from "@/lib/api-middlewares/with-methods"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { RequiresProPlanError } from "@/lib/exceptions"
import { authOptions } from "@/lib/auth"

const postCreateSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(403).end()
  }

  const { user } = session

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
          authorId: user.id,
        },
      })

      return res.json(posts)
    } catch (error) {
      return res.status(500).end()
    }
  }

  if (req.method === "POST") {
    try {
      const subscriptionPlan = await getUserSubscriptionPlan(user.id)

      // If user is on a free plan.
      // Check if user has reached limit of 3 posts.
      if (!subscriptionPlan?.isPro) {
        const count = await db.post.count({
          where: {
            authorId: user.id,
          },
        })

        if (count >= 3) {
          throw new RequiresProPlanError()
        }
      }

      const body = postCreateSchema.parse(req.body)

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

      if (error instanceof RequiresProPlanError) {
        return res.status(402).end()
      }

      return res.status(500).end()
    }
  }
}

export default withMethods(["GET", "POST"], handler)
