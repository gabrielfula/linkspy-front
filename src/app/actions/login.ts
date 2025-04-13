'use server';

import { apiRequest } from "@/lib/api";
import { loginSchema } from "@/schemas/login/login.schema";
import { createServerAction } from "zsa"

export const handleLogin = createServerAction()
.input(loginSchema, { type: "formData" })
.handler(async ({ input }) => {
     const { email, password } = input;

     try {
          const response = await apiRequest("admin/auth/signin", "POST", {
               username: email,
               password,
          });

          return response
     } catch (error) {
          return {
               success: false,
               message: "Erro ao conectar com o servidor",
          };
     }
});
