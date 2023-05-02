import { db } from "./db"
import { getCurrentUser } from "@/lib/session"
import { cache } from "react"
import "server-only"

const PAGE_SIZE = 20

type TGenerationCount = {
    search?: string
}

export const preloadGenerationCount = ({ search }: TGenerationCount) => {
    void getGenerationCount({ search })
}

export const getGenerationCount = cache(
    async ({ search }: TGenerationCount) => {
        const user = await getCurrentUser()

        if (!user) throw new Error("No user found")

        return db.outputImage.count({
            where: {
                generation: {
                    status: "COMPLETE",
                    user: {
                        id: user.id,
                    },
                    prompt: {
                        search: search,
                    },
                },
            },
        })
    }
)

type TGenerationsForUser = {
    page: number
    search?: string
}

export const preloadGenerations = ({ page, search }: TGenerationsForUser) => {
    void getUserGenerations({ page, search })
}

export const getUserGenerations = cache(
    async ({ page, search }: TGenerationsForUser) => {
        const user = await getCurrentUser()

        if (!user) throw new Error("No user found")

        return db.outputImage.findMany({
            where: {
                generation: {
                    status: "COMPLETE",
                    user: {
                        id: user.id,
                    },
                    prompt: {
                        search: search,
                    },
                },
            },
            take: PAGE_SIZE,
            skip: (page - 1) * PAGE_SIZE,
            include: {
                generation: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        })
    }
)
