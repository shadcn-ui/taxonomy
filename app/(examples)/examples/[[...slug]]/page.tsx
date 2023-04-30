import { DashboardHeader } from "@/components/header"
import { Icons } from "@/components/icons"
import { DashboardShell } from "@/components/shell"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { examples, TExample } from "@/lib/examples"
import Image from "next/image"

interface ExamplePageProps {
    params: {
        slug: string[]
    }
}

export const metadata = {
    title: "Examples",
    description: "View examples of popular generators on Pixelfy",
}

async function getStyleFromParams(params): Promise<TExample | null> {
    const slug = params.slug?.join("/") || ""

    if (!slug) {
        null
    }

    let images: TExample | null = null

    Object.keys(examples).forEach((style) => {
        // find matching images
        if (examples[style].slug === slug) {
            images = examples[style]
        }
    })

    return images
}

export async function generateStaticParams(): Promise<
    ExamplePageProps["params"][]
> {
    return Object.keys(examples).map((style) => {
        return {
            slug: examples[style].slug.split("/"),
        }
    })
}

export default async function DocPage({ params }) {
    const images = await getStyleFromParams(params)

    return (
        <DashboardShell>
            <DashboardHeader
                heading={images?.heading || "Examples"}
                text="View examples of pixel art generations"
            />

            <div>
                <Separator />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {images?.images?.map((image) => (
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div
                                className={` rounded-lg  overflow-hidden relative`}
                                key={image.url}
                            >
                                <Image
                                    alt={image.prompt}
                                    height={512}
                                    width={512}
                                    src={image.url}
                                />
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <p className="text-sm text-primary">
                                {image.prompt}
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                ))}
            </div>
            <Alert className="mt-6">
                <Icons.terminal className="h-4 w-4" />
                <AlertTitle>Do not see the style you want?</AlertTitle>
                <AlertDescription>
                    We are always adding more models. If there is a style you
                    want to see on the site please reach out on Twitter
                    @dparksdev.
                </AlertDescription>
            </Alert>
        </DashboardShell>
    )
}
