import { pixelateImage } from "@/lib/utils"
import Image, { ImageProps } from "next/image"

type TPixelatedImageProps = ImageProps & {
    src: string
}
export async function PixelatedImage(props: TPixelatedImageProps) {
    const pixelatedImage = await pixelateImage({ remoteUrl: props.src })

    return <Image height={512} width={512} alt="test" src={pixelatedImage} />
}
