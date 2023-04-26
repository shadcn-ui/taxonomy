import Jimp from "jimp"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const image = await Jimp.read(
        "https://replicate.delivery/pbxt/QD2ffi8XFlu600tJSeaHJGtHMQ2jPNCiMims0KesOF0HnMWDB/out-0.png"
    ).then((image) =>
        image.pixelate(8, 0, 0, image.getWidth(), image.getHeight())
    )

    const getBase64 = await image.getBase64Async(image.getMIME())
    res.setHeader("content-type", image.getMIME())

    res.json(getBase64)
}
