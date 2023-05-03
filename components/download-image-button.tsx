"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { downloadImage } from "@/lib/client-helpers"

interface IDownloadImageButton {
    src: string
    name: string
}
export const DownloadImageButton = ({ src, name }: IDownloadImageButton) => {
    return (
        <Button
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()

                downloadImage(src, name)
            }}
            className="absolute top-4 right-4"
            variant="secondary"
        >
            <Icons.download className="h-4 w-4" />
        </Button>
    )
}
