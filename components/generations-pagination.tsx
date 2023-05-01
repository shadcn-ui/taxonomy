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
import { authOptions } from "@/lib/auth"
import {
    getGenerationCount,
    getUserGenerations,
    preloadGenerationCount,
    preloadGenerations,
} from "@/lib/generations"
import { getCurrentUser } from "@/lib/session"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Generations",
    description: "View all of your past generations",
}

const pageSize = 20

export async function GenerationPagePagination({
    search,
    page,
}: {
    search: string | undefined
    page: number
}) {
    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    const countQuery = getGenerationCount({ search })
    const generatedImageCount = await countQuery

    const nextPageWithOptionalSearchQueryString = search
        ? `/dashboard/generations?page=${page + 1}&search=${search}`
        : `/dashboard/generations?page=${page + 1}`

    const previousPageWithOptionalSearchQueryString = search
        ? `/dashboard/generations?page=${page - 1}&search=${search}`
        : `/dashboard/generations?page=${page - 1}`

    return (
        <>
            {generatedImageCount > 20 && (
                <div className="flex justify-end mt-4 gap-4">
                    {page > 1 && (
                        <Link href={previousPageWithOptionalSearchQueryString}>
                            <Button disabled={page === 1}>Previous</Button>
                        </Link>
                    )}

                    {page * pageSize < generatedImageCount && (
                        <Link href={nextPageWithOptionalSearchQueryString}>
                            <Button
                                disabled={
                                    page * pageSize >= generatedImageCount
                                }
                            >
                                Next
                            </Button>
                        </Link>
                    )}
                </div>
            )}
        </>
    )
}
