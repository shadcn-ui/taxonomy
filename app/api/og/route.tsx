import { getServerSession } from "next-auth/next"
import { NextResponse } from "next/server"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { RequiresProPlanError } from "@/lib/exceptions"
import { getUserSubscriptionPlan } from "@/lib/subscription"

export const dynamic = "force-dynamic" // 🔑 CRITICAL

const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      )
    }

    const posts = await db.post.findMany({
      where: { authorId: session.user.id },
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
    })

    return NextResponse.json(posts, {
      headers: { "Cache-Control": "no-store" },
    })
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      )
    }

    const subscriptionPlan = await getUserSubscriptionPlan(session.user.id)

    if (!subscriptionPlan?.isPro) {
      const count = await db.post.count({
        where: { authorId: session.user.id },
      })

      if (count >= 3) {
        throw new RequiresProPlanError()
      }
    }

    const body = postCreateSchema.parse(await req.json())

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: session.user.id,
      },
      select: { id: true },
    })

    return NextResponse.json(post, {
      headers: { "Cache-Control": "no-store" },
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: 422 })
    }

    if (error instanceof RequiresProPlanError) {
      return NextResponse.json(
        { error: "Requires Pro Plan" },
        { status: 402 }
      )
    }

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
