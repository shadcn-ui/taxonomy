import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { scenarioAuthToken } from "@/lib/utils"
import { pixelateImage } from "@/lib/utils"
import { userNameSchema } from "@/lib/validations/user"
import {
    ScenarioInferenceProgress,
    ScenarioInferenceProgressResponse,
} from "@/types/scenario"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

const routeContextSchema = z.object({
    params: z.object({
        inferenceId: z.string(),
    }),
})

export async function GET(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        const { params } = routeContextSchema.parse(context)
        const { searchParams } = new URL(req.url)
        const modelId = searchParams.get("modelId")

        if (!modelId) {
            return new Response(null, { status: 400 })
        }

        const session = await getServerSession(authOptions)

        if (!session?.user) {
            return new Response(null, { status: 403 })
        }

        // Track the status of our inference progress here
        const inferenceProgress: ScenarioInferenceProgressResponse =
            await fetch(
                `https://api.cloud.scenario.com/v1/models/${modelId}/inferences/${params.inferenceId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Basic ${scenarioAuthToken}`,
                    },
                }
            ).then((res) => res.json())

        // If the inference was a success, decrement the user's credits.
        if (inferenceProgress.inference.status === "succeeded") {
            const generation = await db.generation.findUniqueOrThrow({
                where: {
                    uniqueGeneration: {
                        inferenceId: params.inferenceId,
                        modelId: modelId,
                    },
                },
            })

            const pixelatedImages = await Promise.all(
                inferenceProgress.inference.images.map((image) => {
                    return pixelateImage({
                        remoteUrl: image.url,
                    })
                })
            )

            const imagesWithPixelated = inferenceProgress.inference.images.map(
                (image, index) => {
                    return {
                        ...image,
                        pixelated: pixelatedImages[index],
                    }
                }
            )

            await db.$transaction([
                db.user.update({
                    where: {
                        id: session.user.id,
                    },
                    data: {
                        credits: {
                            decrement: 1,
                        },
                    },
                }),
                db.generation.update({
                    where: {
                        id: generation.id,
                    },
                    data: {
                        status: "COMPLETE",
                        outputImages: {
                            createMany: {
                                data: imagesWithPixelated.map((image) => {
                                    return {
                                        image: image.url,
                                        seed: image.seed,
                                        pixelatedImage: image.pixelated,
                                    }
                                }),
                            },
                        },
                    },
                }),
            ])

            let copiedInferenceProgressWithImagesPixelated: ScenarioInferenceProgressResponse =
                {
                    ...inferenceProgress,
                    inference: {
                        ...inferenceProgress.inference,
                        images: imagesWithPixelated,
                    },
                }
            return new Response(
                JSON.stringify(copiedInferenceProgressWithImagesPixelated),
                { status: 200 }
            )
        } else if (inferenceProgress.inference.status === "failed") {
            const generation = await db.generation.findUniqueOrThrow({
                where: {
                    uniqueGeneration: {
                        inferenceId: params.inferenceId,
                        modelId: modelId,
                    },
                },
            })

            await db.generation.update({
                where: {
                    id: generation.id,
                },
                data: {
                    status: "FAILED",
                },
            })
        }

        return new Response(JSON.stringify(inferenceProgress), { status: 200 })
    } catch (error) {
        console.log("Error", error)
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}
