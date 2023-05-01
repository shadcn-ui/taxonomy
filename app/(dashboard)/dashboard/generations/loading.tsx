import { DashboardHeader } from "@/components/header"
import { ImageLoadingCard } from "@/components/image-loading-card"
import { SearchGenerationsInput } from "@/components/search-generations-input"
import { DashboardShell } from "@/components/shell"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCardLoader() {
    return (
        <div className="flex items-center space-x-4">
            <div className="space-y-2">
                <Skeleton className="h-96 w-full" />
            </div>
        </div>
    )
}

export default function DashboardSettingsLoading() {
    return (
        <DashboardShell>
            <DashboardHeader
                heading="Generations"
                text="View all of your generations here"
            >
                <SearchGenerationsInput />
            </DashboardHeader>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {Array.from(Array(20), (e, i) => {
                    return <ImageLoadingCard key={i} showLoadingText={false} />
                })}
            </div>
        </DashboardShell>
    )
}
