import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { cn, pixelateImage } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

async function getGitHubStars(): Promise<string | null> {
    try {
        const response = await fetch(
            "https://api.github.com/repos/shadcn/taxonomy",
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
                },
                next: {
                    revalidate: 60,
                },
            }
        )

        if (!response?.ok) {
            return null
        }

        const json = await response.json()

        return parseInt(json["stargazers_count"]).toLocaleString()
    } catch (error) {
        return null
    }
}

export default async function IndexPage() {
    const stars = await getGitHubStars()

    const [landscape, character, anime] = await Promise.all([
        pixelateImage({
            remoteUrl:
                "https://cdn.cloud.scenario.com/assets/RaR-r0MsQoOsPEALd-hgXA?p=100&Expires=1683504000&Key-Pair-Id=K36FIAB9LE2OLR&Signature=aT2dU7eUREvpx~I5z5as5NxMvVYcIWheXYdnyNZNvM5yJmHsfrfMaC6GxXLIF8iVJ67JNtJGBJSts0jBldaCgYEd2UC7lvsZBCNmlCV7GmraXXEEFKovVgzBe~pFi-r7rWlRsBjGT7A1NWKfYlPx~9hYbrMvA-KxqppEvYlxAn2vD4tXqq0DBUaWA0OHEK2is9Qw3Bh1tyk~O0~-eEv1jnfVeHeDE5wwHBPp75qmCW9HtrKAN2GwtX9QkVEqNjOjcWCIMA0Js-KVvuE1Sy-j8QSEF7gcqNtJ1kEidoFmJ646Wmhzyxdz5V4Ou6rswPP1i0XVv93C5ltUHuoGb-v2Rg__",
        }),
        pixelateImage({
            remoteUrl:
                "https://cdn.cloud.scenario.com/assets/HJVjD8xkSEKhk1lSTMExuw?p=100&Expires=1683504000&Key-Pair-Id=K36FIAB9LE2OLR&Signature=tLrmhwNKlG~KKiR4p2Z3FVls2XO2I1-h7-2rmkZiFEwHZjOb6xdxWX2xcohbpjvY-hor2HbUeVqKKJ5fV4Qilbtt~JyDos8HUeF3yfaNTJO~29q6ff1wKiEs4kMrtmHfK4CnInAgCdUCfwFlKffRyvXoe92HE0bqURnbl3~0rtjxcZHqp2FTNqutz0P9k1H-KoHm-uFq4GD9Ywh1NQDhtb8LRD8THIEdukZnq2Kw5Y5oQ3QqYV1d~3ANRJSmvFkCl01g7-5v0P~ZPD~KCXHN80Xn9kLzqqS3aOrH6M5qz9jvTpgd0aEw~u93aP1-noDYUUfO-Comt4X-n32Qb5Fpyg__",
        }),
        pixelateImage({
            remoteUrl:
                "https://cdn.cloud.scenario.com/assets/O3z8ZWCKRyKyJHC8lxGdEg?p=100&Expires=1683504000&Key-Pair-Id=K36FIAB9LE2OLR&Signature=iwVSn2siKk-ql-gZ~m8S2BY2xFbsxXJI0037-wKD6iMBNiN~NxFQLyPzILR0mOaYX8uyXuOao7bSZTeTrW4q~QGDXmJ1CErxMfv~dTTWCWA7iW5eX-XhK7sp7zb2kYxHPTi-5Vu2TKBXGBNu9GJjJxG2GOA839zaY4rLdS-TLR2lxCORcDWI7IoH0stRHKUaQOXWgUHCjrAGa1ZglNa8eCr7YVPqkw7Wcm8opS4YYe~m~O1-2ry0ydHwbN3rIAXb2SQjm7KuUkUod62g9TgYWyXqMCUS7LysM2O4cHcpJmzIhqcA3w8n-gcCvd~UuMBozOLFxwLgJCAZWb5ZMF3mBg__",
        }),
    ])

    const featuredCardData = [
        {
            image: landscape,
            title: "Landscape Portraits",
            prompts: ["gorgeous waterfall landscape", "castle in the sky"],
            imageAlt: "Image showing an 8 bit castle in the sky",
        },
        {
            image: character,
            title: "Character Portraits",
            prompts: ["Lizard man", "cyberpunk aesthetic", "retro furistism"],
            imageAlt:
                "image showing a lizard creature in a cyberpunk vaporwave background",
        },
        {
            image: anime,
            title: "Anime style",
            prompts: ["Kitsune girl", "anime", "cyberpunk"],
            imageAlt:
                "Image showing a green dracula potion with devil wings pixelated",
        },
    ]

    return (
        <>
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Link
                        href={siteConfig.links.twitter}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Introducing Pixelfy
                    </Link>
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Generate high-quality pixel art with AI
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Pixelfy is a tool that harnesses bleeding-edge AI models
                        to generate beautiful pixel art images for your creative
                        projects
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/login"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            Get Started
                        </Link>
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </section>
            <section
                id="examples"
                className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Your limit is your imagination
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Pixelfy provides a variety of battle-tested generators
                        to create all types of images.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-8">
                    {featuredCardData.map((card) => (
                        <Card key={card.title}>
                            <CardHeader>
                                <CardTitle>{card.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="grid gap-4 relative">
                                {card?.image && (
                                    <Image
                                        height={512}
                                        width={512}
                                        src={card.image}
                                        className="w-full rounded-lg overflow-hidden"
                                        alt={card.imageAlt}
                                    />
                                )}
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-col items-start flex-wrap">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {card.prompts.map((prompt) => (
                                            <Badge
                                                key={prompt}
                                                variant="secondary"
                                            >
                                                {prompt}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            <section
                id="open-source"
                className="container py-8 md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Proudly Open Source
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Pixelfy is open source and powered by open source
                        software. <br /> The code is available on{" "}
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        .{" "}
                    </p>
                    {stars && (
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex"
                        >
                            <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 text-foreground"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </div>
                            <div className="flex items-center">
                                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                                    {stars} stars on GitHub
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </section>
        </>
    )
}
