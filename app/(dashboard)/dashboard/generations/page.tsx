import { DownloadImageButton } from "@/components/download-image-button"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { SearchGenerationsInput } from "@/components/search-generations-input"
import { DashboardShell } from "@/components/shell"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Generations",
    description: "View all of your past generations",
}

const pageSize = 20

export default async function GenerationPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined }
}) {
    const page = parseInt(searchParams?.page ?? "1") ?? 1

    const search = searchParams?.search ?? undefined

    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    const [generatedImageCount, generatedImages] = await Promise.all([
        db.outputImage.count({
            where: {
                generation: {
                    status: "COMPLETE",
                    user: {
                        id: user.id,
                    },
                    prompt: {
                        contains: search,
                    },
                },
            },
        }),
        db.outputImage.findMany({
            where: {
                generation: {
                    status: "COMPLETE",
                    user: {
                        id: user.id,
                    },
                    prompt: {
                        contains: search,
                    },
                },
            },
            take: pageSize,
            skip: (page - 1) * pageSize,
            include: {
                generation: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        }),
    ])

    const nextPageWithOptionalSearchQueryString = search
        ? `/dashboard/generations?page=${page + 1}&search=${search}`
        : `/dashboard/generations?page=${page + 1}`

    const previousPageWithOptionalSearchQueryString = search
        ? `/dashboard/generations?page=${page - 1}&search=${search}`
        : `/dashboard/generations?page=${page - 1}`

    return (
        <DashboardShell>
            <DashboardHeader
                heading="Generations"
                text="View all of your generations here"
            >
                <SearchGenerationsInput
                // className="w-full lg:max-w-[24rem]"
                // placeholder="Search generations..."
                />
            </DashboardHeader>
            {generatedImages?.length ? (
                <>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {generatedImages.map((generatedImage) => (
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <div
                                        className={` rounded-lg  overflow-hidden relative`}
                                        key={generatedImage.id}
                                    >
                                        <Image
                                            alt={
                                                generatedImage.generation.prompt
                                            }
                                            height={512}
                                            width={512}
                                            src={generatedImage.pixelatedImage}
                                        />
                                        <DownloadImageButton
                                            src={generatedImage.pixelatedImage}
                                            name={generatedImage.seed}
                                        />
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                    <p className="text-sm text-primary">
                                        {generatedImage.generation.prompt}
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        ))}
                    </div>
                    {generatedImageCount > 20 && (
                        <div className="flex justify-end mt-4 gap-4">
                            {page > 1 && (
                                <Link
                                    href={
                                        previousPageWithOptionalSearchQueryString
                                    }
                                >
                                    <Button disabled={page === 1}>
                                        Previous
                                    </Button>
                                </Link>
                            )}

                            {page * pageSize < generatedImageCount && (
                                <Link
                                    href={nextPageWithOptionalSearchQueryString}
                                >
                                    <Button
                                        disabled={
                                            page * pageSize >=
                                            generatedImageCount
                                        }
                                    >
                                        Next
                                    </Button>
                                </Link>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <>
                    {search ? (
                        <EmptyPlaceholder>
                            <EmptyPlaceholder.Icon name="terminal" />
                            <EmptyPlaceholder.Title>
                                No generations match your search term
                            </EmptyPlaceholder.Title>
                            <EmptyPlaceholder.Description className="mb-0 pb-0">
                                Try refining your search term
                            </EmptyPlaceholder.Description>
                        </EmptyPlaceholder>
                    ) : (
                        <EmptyPlaceholder>
                            <EmptyPlaceholder.Icon name="terminal" />
                            <EmptyPlaceholder.Title>
                                No generations created
                            </EmptyPlaceholder.Title>
                            <EmptyPlaceholder.Description>
                                You don&apos;t have any generations yet. Start
                                creating images!
                            </EmptyPlaceholder.Description>
                            <Link href="/dashboard">
                                <Button>Start creating</Button>
                            </Link>
                        </EmptyPlaceholder>
                    )}
                </>
            )}
        </DashboardShell>
    )
}
