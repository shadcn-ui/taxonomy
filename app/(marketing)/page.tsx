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
import { db } from "@/lib/db"
import { cn, pixelateImage } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 60

async function getImageGenerations() {
    try {
        return (await db.outputImage.count()).toLocaleString()
    } catch (error) {
        return null
    }
}
export default async function IndexPage() {
    const imageGenerations = await getImageGenerations()

    const [landscape, character, popCulture] = await Promise.all([
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
                "https://cdn.cloud.scenario.com/assets/UmOYgxPoSi-phI3F1OAVtg?p=100&Expires=1683504000&Key-Pair-Id=K36FIAB9LE2OLR&Signature=LXEa8PtWJXuPUPVOiOFZeVceoS3~aHuPANnRfjcPgPYGh4a25cT5w58D8PRrOrf1j1CvLL-Ylc3ci6KhFHQpwxxn776qdw6iY5gMOnG6sBQIrhhHAF47gy-pl5ARJeBD8l8IVBGYsAEYmrS3U6SRyb76liOMoCn3EZa5c9gSfdVIaRyZ-yb3dMjSC~KBYu03zKo2sQvgNxrbX-xsuR2wlktYI0fdv6UpL8T8FUep8dfKLL0tu4TBcwnr1bbBWTTjbEOHsdtBSNFvurLkzENQ51LuwQyZCs2TJ6dBqX3KmyYfbyOjYCqi1JsCiNur4PJkg5dWP5LWllrnd0S5xrNXsw__",
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
            image: "/anime.png",
            title: "Anime style",
            prompts: ["Kitsune girl", "anime", "cyberpunk"],
            imageAlt:
                "Image showing a green dracula potion with devil wings pixelated",
        },
        {
            image: popCulture,
            title: "Popular Culture",
            prompts: ["Ekko from League of Legends", "Character portrait"],
            imageAlt: "Image showing Ekko from league of legends pixelated",
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
                        to generate professional pixel art images for your
                        creative projects
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/login"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            Create
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
                    {imageGenerations && (
                        <Badge variant="outline" className="mt-8">
                            {imageGenerations.toLocaleString()} images generated
                            and counting!
                        </Badge>
                    )}
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
                        to create all types of images, and we are always adding
                        more.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 pt-8">
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
                        Entirely Open Source
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Pixelfy is open source and powered by open source
                        software and AI models. <br /> The code is available on{" "}
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
                </div>
            </section>
        </>
    )
}
