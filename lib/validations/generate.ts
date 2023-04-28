import * as z from "zod"

export const generateSchema = z.object({
    prompt: z.string().max(120),
    modelId: z.string().optional(),
})
