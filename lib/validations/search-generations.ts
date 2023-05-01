import * as z from "zod"

export const searchGenerationsSchema = z.object({
    input: z.string().optional(),
})
