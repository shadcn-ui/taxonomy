import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { scenarioGenerators } from "@/lib/generators"
import { scenarioAuthToken } from "@/lib/utils"
import { userNameSchema } from "@/lib/validations/user"
import { ScenarioInferenceResponse } from "@/types/scenario"
import { Inference } from "@/types/scenario"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

const removeBackgroundBody = z.object({
    data: z.string(),
    backgroundColor: z.string().optional().default("transparent"),
    format: z.string().optional().default("png"),
})

export async function PUT(req: Request) {
    try {
        const body = await req.json()

        const { data, backgroundColor, format } =
            removeBackgroundBody.parse(body)

        console.log(backgroundColor, format)

        const session = await getServerSession(authOptions)

        console.log(session)
        // if (!session?.user) {
        //     return new Response(null, { status: 403 })
        // }

        // const user = await db.user.findUniqueOrThrow({
        //     where: {
        //         id: session.user.id,
        //     },
        //     select: {
        //         credits: true,
        //     },
        // })

        // if (user.credits === 0) {
        //     return new Response(
        //         JSON.stringify({
        //             message:
        //                 "User is out of credits. Purchase more to continue generating images",
        //         }),
        //         { status: 402 }
        //     )
        // }

        const removeBackground = await fetch(
            `https://api.cloud.scenario.com/v1/images/remove-background`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${scenarioAuthToken}`,
                },
                body: JSON.stringify({
                    data: data,
                    backgroundColor,
                    format,
                }),
            }
        ).then((res) => res.arrayBuffer())

        console.log(removeBackground)

        return new Response(removeBackground, {
            status: 200,
        })
    } catch (error) {
        console.log(error)
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(error, { status: 500 })
    }
}
