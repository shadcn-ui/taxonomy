import * as z from "zod"

export const postPatchSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").max(128).optional(),

  // TODO: Type this properly from editorjs block types?
  content: z.any().optional(),
})
