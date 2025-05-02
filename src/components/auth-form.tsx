'use client'

import { useState } from "react";
import TextInput from "./input-text";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "./ui/button";

import { LoginData, loginSchema } from "@/schemas/login/login.schema";
import { useLogin } from "@/queries/use-login";
import { useRegister } from "@/queries/use-register";
import { RegisterData, registerSchema } from "@/schemas/register/register.schema";

type Mode = "login" | "register";

interface AuthFormProps {
     mode: Mode;
}

export default function AuthForm({ mode }: AuthFormProps) {
     const [showPassword, setShowPassword] = useState(false);
     const isLogin = mode === "login";

     const {
          control,
          handleSubmit,
          reset,
     } = useForm<LoginData | RegisterData>({
          resolver: zodResolver(isLogin ? loginSchema : registerSchema),
     });

     const loginMutation = useLogin();
     const registerMutation = useRegister();
     const isPending = isLogin ? loginMutation.isPending : registerMutation.isPending;

     const handleAuth = async (data: LoginData | RegisterData) => {
          if (isLogin) {
               await loginMutation.mutateAsync(data as LoginData);
          } else {
               await registerMutation.mutateAsync(data as RegisterData);
          }
          reset();
     };

     return (
          <form className="space-y-2" onSubmit={handleSubmit(handleAuth)}>
               {!isLogin && (
                    <div className="space-y-2">
                         <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                         <TextInput disabled={isPending} control={control} name="name" placeholder="Nome do cliente" />
                    </div>
               )}

               <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <TextInput disabled={isPending} control={control} name="email" placeholder="seu.email@gmail.com" />
               </div>

               <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium">Senha</label>
                    <div className="relative">
                         <TextInput
                              disabled={isPending}
                              control={control}
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                         />
                         <button
                              type="button"
                              className="absolute cursor-pointer right-3 top-4.5 -translate-y-1/2 text-gray-500 disabled:opacity-10"
                              onClick={() => setShowPassword(!showPassword)}
                              disabled={isPending}
                         >
                              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                         </button>
                    </div>
               </div>

               <div className="pt-2">
                    <Button type="submit" disabled={isPending} className="w-full text-white">
                         {isPending ? "Carregando..." : isLogin ? "Entrar" : "Registrar"}
                    </Button>
               </div>
          </form>
     );
}
