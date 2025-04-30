import { z } from "zod";

export const registerSchema = z.object({
     name: z.string().min(2, "Nome é obrigatório"),
     email: z.string().email("Email inválido"),
     password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
});

export type RegisterData = z.infer<typeof registerSchema>;
