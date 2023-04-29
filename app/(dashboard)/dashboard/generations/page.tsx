import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { Icons } from "@/components/icons"
import { MotionCardHover } from "@/components/motion-card-hover"
import { DashboardShell } from "@/components/shell"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Billing",
    description: "Manage billing and your subscription plan.",
}

export default async function BillingPage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    const generations = await db.generation.findMany({
        where: {
            user: {
                id: user.id,
            },
            status: "COMPLETE",
        },
        include: {
            outputImages: true,
        },
    })

    return (
        <DashboardShell>
            <DashboardHeader
                heading="Generations"
                text="View all of your generations here"
            />
            {generations?.length ? (
                <div className="grid grid-cols-4 gap-8">
                    {generations.map((generation) => (
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <div
                                    className={` rounded-lg  overflow-hidden relative grid grid-cols-${Math.ceil(
                                        generation.outputImages.length / 2
                                    )}`}
                                    key={generation.id}
                                >
                                    {generation.outputImages.map(
                                        (outputImage) => (
                                            <Image
                                                alt={generation.prompt}
                                                height={512}
                                                width={512}
                                                src={outputImage.pixelatedImage}
                                            />
                                        )
                                    )}
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <p className="text-sm text-primary">
                                    {generation.prompt}
                                </p>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </div>
            ) : (
                <EmptyPlaceholder>
                    <EmptyPlaceholder.Icon name="terminal" />
                    <EmptyPlaceholder.Title>
                        No generations created
                    </EmptyPlaceholder.Title>
                    <EmptyPlaceholder.Description>
                        You don&apos;t have any generations yet. Start creating
                        images!
                    </EmptyPlaceholder.Description>
                    <Link href="/dashboard">
                        <Button>Start creating</Button>
                    </Link>
                </EmptyPlaceholder>
            )}
        </DashboardShell>
    )
}
