import { z } from "zod";

export const createUrlSchema = z.object({
     old_url: z.string().url({ message: "Insira uma URL válida" }),
});

export type CreateUrlData = z.infer<typeof createUrlSchema>;