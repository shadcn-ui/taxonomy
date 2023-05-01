import * as z from "zod"

export const generateSchema = z.object({
    prompt: z.string().max(160),
    modelId: z.string().optional(),
})
