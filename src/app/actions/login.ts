'use server';

import { apiRequest } from "@/lib/api";
import { loginSchema } from "@/schemas/login/login.schema";
import { cookies } from "next/headers";
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
          if (response?.success && response.token) {
               (await cookies()).set("token", response.token, {
                    // httpOnly: true,
                    path: "/",
                    maxAge: 60 * 60 * 24 * 1,
               });
          }

          return response
     } catch (error) {
          return {
               success: false,
               message: "Erro ao conectar com o servidor",
          };
     }
});
