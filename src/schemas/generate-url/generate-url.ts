import { z } from "zod";

export const createUrlSchema = z.object({
     old_url: z.string().url({ message: "Insira uma URL válida" }),
     alias: z.string().min(1, "Insira um motivo para gerar o link"),
});

export type CreateUrlData = z.infer<typeof createUrlSchema>;