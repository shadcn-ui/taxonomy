"use client"

import { GuidanceSelector } from "../guidance-selector"
import { SamplingStepSelector } from "../sampling-step-selector"
import { Textarea } from "../ui/textarea"
import { Icons } from "@/components/icons"
import { ImageAmountSelector } from "@/components/image-amount-selector"
import { ImageLoadingCard } from "@/components/image-loading-card"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { downloadImage } from "@/lib/client-helpers"
import { scenarioGenerators } from "@/lib/generators"
import { cn } from "@/lib/utils"
import { generateSchema } from "@/lib/validations/generate"
import {
    ScenarioImage,
    ScenarioInferenceProgressResponse,
    ScenarioInferenceResponse,
} from "@/types/scenario"
import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "@prisma/client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
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
    const [isOpen, setIsOpen] = React.useState<boolean>(true)
    const [showAdvancedOptions, setShowAdvancedOptions] =
        React.useState<boolean>(false)
    const [progress, setProgress] = React.useState<number>(0)
    const [modelId, setModelId] = React.useState<string>(
        scenarioGenerators.fantasyRpg
    )

    const [numImages, setNumImages] = React.useState<string>("4")

    const [samplingSteps, setSamplingSteps] = React.useState<number[]>([50])
    const [guidance, setGuidance] = React.useState<number[]>([7])

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
                        modelId,
                        prompt: data.prompt,
                        samplingSteps: samplingSteps[0],
                        guidance: guidance[0],
                        numImages: parseInt(numImages),
                    },
                }),
            }
        )

        if (!response?.ok && response.status === 402) {
            const errorResponse = await response.json()
            setIsSaving(false)
            return toast({
                title: "You are out of credits",
                description:
                    "In order to continue generating images please purchase more credits. If there's been a mistake contact support.",
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

        toast({
            title: "We've started your generation!",
            description:
                "This may take a few minutes. Don't worry, if it fails you will not be charged credits.",
            variant: "default",
        })

        const responseData: ScenarioInferenceResponse = await response.json()

        let generatedImages: null | ScenarioImage[] = null
        let secondCount = 0
        let showedPatienceModal = false
        while (!generatedImages) {
            // Loop in 1s intervals until the alt text is ready
            let finalResponse = await fetch(
                `/api/generate/${responseData.inference.id}?modelId=${modelId}`,
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
                if (secondCount >= 60 && !showedPatienceModal) {
                    toast({
                        title: "Still generating!",
                        description:
                            "Sorry this is taking a while. Your generation should be done soon. Thanks for your patience",
                        variant: "default",
                    })
                    showedPatienceModal = true
                }
                secondCount++
                await new Promise((resolve) => setTimeout(resolve, 1000))
            }
        }
        setIsSaving(false)
        console.log(generatedImages)
        router.refresh()
    }

    return (
        <>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                    >
                        <form
                            className={cn(className)}
                            onSubmit={handleSubmit(onSubmit)}
                            {...props}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Create Images</CardTitle>

                                    <CardDescription>
                                        Enter a prompt for a series of images
                                        you would like to create
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid  gap-8">
                                        <div>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="name">
                                                        Style
                                                    </Label>
                                                    <div className="flex items-baseline gap-4 mt-1">
                                                        <Select
                                                            value={modelId}
                                                            onValueChange={
                                                                setModelId
                                                            }
                                                            defaultValue={
                                                                scenarioGenerators.fantasyRpg
                                                            }
                                                        >
                                                            <SelectTrigger className="w-[180px]">
                                                                <SelectValue placeholder="Select a generator" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectGroup>
                                                                    <SelectLabel>
                                                                        Style
                                                                    </SelectLabel>

                                                                    <SelectItem
                                                                        value={
                                                                            scenarioGenerators.fantasyRpg
                                                                        }
                                                                    >
                                                                        Fantasy
                                                                        RPG
                                                                    </SelectItem>
                                                                    <SelectItem
                                                                        value={
                                                                            scenarioGenerators.landscapePortrait
                                                                        }
                                                                    >
                                                                        Landscape
                                                                        Portrait
                                                                    </SelectItem>
                                                                    <SelectItem
                                                                        value={
                                                                            scenarioGenerators.animeStyle
                                                                        }
                                                                    >
                                                                        Anime
                                                                        Style
                                                                    </SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">
                                                        Not sure what to choose?{" "}
                                                        <Link
                                                            className="inline-flex -ml-2"
                                                            href="/examples/fantasy-rpg"
                                                        >
                                                            <Button
                                                                className="text-xs"
                                                                size="sm"
                                                                variant={"link"}
                                                            >
                                                                View some
                                                                examples
                                                            </Button>
                                                        </Link>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Label htmlFor="name">
                                                        Number of images
                                                    </Label>
                                                    <div className="flex items-baseline gap-4 mt-1">
                                                        <Select
                                                            value={numImages}
                                                            onValueChange={
                                                                setNumImages
                                                            }
                                                            defaultValue={"4"}
                                                        >
                                                            <SelectTrigger className="w-[180px]">
                                                                <SelectValue placeholder="Select a generator" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectGroup>
                                                                    <SelectItem
                                                                        value={
                                                                            "4"
                                                                        }
                                                                    >
                                                                        4
                                                                    </SelectItem>
                                                                    <SelectItem
                                                                        value={
                                                                            "8"
                                                                        }
                                                                    >
                                                                        8
                                                                    </SelectItem>
                                                                    <SelectItem
                                                                        value={
                                                                            "12"
                                                                        }
                                                                    >
                                                                        12
                                                                    </SelectItem>
                                                                    <SelectItem
                                                                        value={
                                                                            "16"
                                                                        }
                                                                    >
                                                                        16
                                                                    </SelectItem>
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">
                                                        1 credit = 4 images
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="grid gap-1 mt-6 ">
                                                <Label htmlFor="name">
                                                    Prompt
                                                </Label>
                                                <Textarea
                                                    disabled={isSaving}
                                                    placeholder="Ex. Ekko from league of legends, vivid colors, full body, portrait"
                                                    className="mt-1"
                                                    id="Prompt"
                                                    maxLength={500}
                                                    {...register("prompt")}
                                                />
                                                {errors?.prompt && (
                                                    <p className="px-1 text-xs text-red-600">
                                                        {errors.prompt.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex-col items-start w-full">
                                    <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                                        <button
                                            type="submit"
                                            className={cn(
                                                buttonVariants(),
                                                className,
                                                "w-full lg:w-auto"
                                            )}
                                            disabled={isSaving}
                                        >
                                            {isSaving && (
                                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                            )}
                                            <span>Generate</span>
                                        </button>
                                        <Button
                                            className={cn("w-full lg:w-auto")}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setShowAdvancedOptions(
                                                    !showAdvancedOptions
                                                )
                                            }}
                                            variant={"outline"}
                                        >
                                            Show advanced options
                                        </Button>
                                    </div>
                                    <small className="mt-4 text-xs text-muted-foreground">
                                        This generation will use{" "}
                                        {parseInt(numImages) / 4}{" "}
                                        {parseInt(numImages) / 4 !== 1
                                            ? "credits"
                                            : "credit"}{" "}
                                        once it succeeds
                                    </small>

                                    <AnimatePresence initial={false}>
                                        {showAdvancedOptions && (
                                            <motion.div
                                                key="content"
                                                initial="collapsed"
                                                animate="open"
                                                exit="collapsed"
                                                className="w-full"
                                                variants={{
                                                    open: {
                                                        opacity: 1,
                                                        height: "auto",
                                                    },
                                                    collapsed: {
                                                        opacity: 0,
                                                        height: 0,
                                                    },
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0.04, 0.62, 0.23, 1],
                                                }}
                                            >
                                                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 w-full mt-8">
                                                    <SamplingStepSelector
                                                        value={samplingSteps}
                                                        onValueChange={
                                                            setSamplingSteps
                                                        }
                                                        defaultValue={[50]}
                                                    />
                                                    <GuidanceSelector
                                                        value={guidance}
                                                        onValueChange={
                                                            setGuidance
                                                        }
                                                        defaultValue={[7]}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </CardFooter>
                            </Card>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(buttonVariants(), className)}
            >
                collapse form
            </button> */}

            {isSaving && (
                <>
                    <div className="mt-4">
                        <Progress value={progress * 100} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                        {Array.from(Array(parseInt(numImages)), (e, i) => {
                            return <ImageLoadingCard key={i} />
                        })}
                    </div>
                </>
            )}

            {images && (
                <div className="mt-4 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
                        {images.map((image) => (
                            <div
                                key={image.seed}
                                className="rounded-lg overflow-hidden relative w-full"
                            >
                                {image?.pixelated && (
                                    <>
                                        <Image
                                            className="object-cover w-full h-auto"
                                            height={512}
                                            width={512}
                                            alt={"Image prompt result"}
                                            src={image.pixelated}
                                        />
                                        <Button
                                            onClick={() =>
                                                downloadImage(
                                                    image.pixelated ?? "",
                                                    image.seed
                                                )
                                            }
                                            className="absolute top-4 right-4"
                                            variant="secondary"
                                        >
                                            <Icons.download className="h-4 w-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
