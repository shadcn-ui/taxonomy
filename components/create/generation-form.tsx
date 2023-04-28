"use client"

import { PixelatedImage } from "../pixelated-image"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"
import { scenarioGenerators } from "@/lib/generators"
import { cn, scenarioAuthToken } from "@/lib/utils"
import { generateSchema } from "@/lib/validations/generate"
import {
    ScenarioInferenceResponse,
    ScenarioInferenceProgressResponse,
    ScenarioImage,
} from "@/types/scenario"
import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import * as React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
    user: Pick<User, "id" | "name">
}

type FormData = z.infer<typeof generateSchema>

export function GenerationForm({
    user,
    className,
    ...props
}: UserNameFormProps) {
    const router = useRouter()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(generateSchema),
        defaultValues: {
            prompt: "",
        },
    })

    const [images, setImages] = React.useState<ScenarioImage[]>([])
    const [isSaving, setIsSaving] = React.useState<boolean>(false)
    const [progress, setProgress] = React.useState<number>(0)

    async function onSubmit(data: FormData) {
        setIsSaving(true)

        const response = await fetch(
            `
                /api/generate`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    parameters: {
                        modelId: scenarioGenerators.sciFiCharacter,
                        prompt: data.prompt,
                    },
                }),
            }
        )

        if (!response?.ok && response.status === 402) {
            const errorResponse = await response.json()
            setIsSaving(false)
            return toast({
                title: "You are out of credits",
                description: errorResponse.message,
                variant: "destructive",
            })
        } else if (!response.ok) {
            return toast({
                title: "Something went wrong",
                description:
                    "Please try to generate your image again. If the issue persists contact support.",
                variant: "destructive",
            })
        }

        const responseData: ScenarioInferenceResponse = await response.json()

        let generatedImages: null | ScenarioImage[] = null
        while (!generatedImages) {
            // Loop in 1s intervals until the alt text is ready
            let finalResponse = await fetch(
                `/api/generate/${responseData.inference.id}?modelId=${scenarioGenerators.sciFiCharacter}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            let jsonFinalResponse: ScenarioInferenceProgressResponse =
                await finalResponse.json()
            setProgress(jsonFinalResponse.inference.progress)

            if (jsonFinalResponse.inference.status === "succeeded") {
                generatedImages = jsonFinalResponse.inference.images
                setImages(generatedImages)
            } else if (jsonFinalResponse.inference.status === "failed") {
                break
            } else {
                await new Promise((resolve) => setTimeout(resolve, 1000))
            }
        }
        setIsSaving(false)
        console.log(generatedImages)
        router.refresh()
    }

    console.log(errors)

    return (
        <>
            <form
                className={cn(className)}
                onSubmit={handleSubmit(onSubmit)}
                {...props}
            >
                <Card>
                    <CardHeader>
                        <CardTitle>Generate Image</CardTitle>
                        <CardDescription>
                            Please enter a prompt for an image you would like to
                            generate
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                className="w-[400px]"
                                size={32}
                                {...register("prompt")}
                            />
                            {errors?.prompt && (
                                <p className="px-1 text-xs text-red-600">
                                    {errors.prompt.message}
                                </p>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <button
                            type="submit"
                            className={cn(buttonVariants(), className)}
                            disabled={isSaving}
                        >
                            {isSaving && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            <span>Generate</span>
                        </button>
                    </CardFooter>
                </Card>
            </form>
            <div className="mt-4">
                <Progress value={progress * 100} />
            </div>
            {images && (
                <div className="mt-4">
                    <div className="grid grid-cols-3 gap-4">
                        {images.map((image) => (
                            <Card key={image.seed}>
                                <CardContent>
                                    <div className="grid gap-1">
                                        {/* @ts-expect-error Server Component */}
                                        <PixelatedImage
                                            height={512}
                                            width={512}
                                            alt="Image prompt result"
                                            src={image.url}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <button
                                        type="submit"
                                        className={cn(
                                            buttonVariants(),
                                            className
                                        )}
                                        disabled={isSaving}
                                    >
                                        {isSaving && (
                                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        <span>Generate</span>
                                    </button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
