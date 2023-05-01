import { authOptions } from "@/lib/auth"
import { LOCALHOST_IP } from "@/lib/constants"
import { OpenAIStream, OpenAIStreamPayload } from "@/lib/open-ai-stream"
import { ratelimit } from "@/lib/upstash"
import { ipAddress } from "@vercel/edge"
import { getServerSession } from "next-auth/next"

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI")
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
        return new Response(null, { status: 403 })
    }

    const ip = ipAddress(req) || LOCALHOST_IP
    const { success } = await ratelimit().limit(ip)

    if (!success) {
        return new Response("Don't DDoS me pls 🥺", { status: 429 })
    }

    const { prompt } = (await req.json()) as {
        prompt?: string
    }

    if (!prompt) {
        return new Response("No prompt in the request", { status: 400 })
    }

    const payload: OpenAIStreamPayload = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        stream: true,
        n: 1,
    }

    const stream = await OpenAIStream(payload)
    return new Response(stream)
}
