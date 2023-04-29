import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { scenarioGenerators } from "@/lib/generators"
import { scenarioAuthToken } from "@/lib/utils"
import { userNameSchema } from "@/lib/validations/user"
import { ScenarioInferenceResponse } from "@/types/scenario"
import { Inference } from "@/types/scenario"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

const generateBody = z.object({
    parameters: z.object({
        modelId: z.string(),
        prompt: z.string().max(120),
    }),
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { parameters } = generateBody.parse(body)

        const session = await getServerSession(authOptions)
        if (!session?.user) {
            return new Response(null, { status: 403 })
        }

        const user = await db.user.findUniqueOrThrow({
            where: {
                id: session.user.id,
            },
            select: {
                credits: true,
            },
        })

        if (user.credits === 0) {
            return new Response(
                JSON.stringify({
                    message:
                        "User is out of credits. Purchase more to continue generating images",
                }),
                { status: 402 }
            )
        }

        const generation: ScenarioInferenceResponse = await fetch(
            `https://api.cloud.scenario.com/v1/models/${parameters.modelId}/inferences`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${scenarioAuthToken}`,
                },
                body: JSON.stringify({
                    parameters: {
                        enableSafetyCheck: false,
                        type: "txt2img",
                        prompt: parameters.prompt,
                        negativePrompt: "trading cards, cards",
                    },
                }),
            }
        ).then((res) => res.json())

        await db.generation.create({
            data: {
                prompt: parameters.prompt,
                modelId: parameters.modelId,
                inferenceId: generation.inference.id,
                numSamples: generation.inference.parameters.numSamples,
                numInferenceSteps:
                    generation.inference.parameters.numInferenceSteps,
                guidance: generation.inference.parameters.guidance,
                user: {
                    connect: {
                        id: session.user.id,
                    },
                },
            },
        })

        return new Response(JSON.stringify(generation), {
            status: 200,
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(error, { status: 500 })
    }
}
