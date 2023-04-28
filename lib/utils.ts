import { ClassValue, clsx } from "clsx"
import Jimp from "jimp"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export type TPixelateImage = {
    remoteUrl: string
    pixelSize?: number
}

export async function pixelateImage({
    remoteUrl,
    pixelSize = 8,
}: TPixelateImage): Promise<string | null> {
    try {
        const image = await Jimp.read(remoteUrl).then((image) =>
            image.pixelate(pixelSize, 0, 0, image.getWidth(), image.getHeight())
        )

        console.log("Image", image)

        return image.getBase64Async(image.getMIME())
    } catch (error) {
        return null
    }
}

const scenarioToken = process.env.SCENARIO_API_TOKEN as string
const scenarioSecret = process.env.SCENARIO_SECRET as string

export const scenarioAuthToken = `${btoa(`${scenarioToken}:${scenarioSecret}`)}`
