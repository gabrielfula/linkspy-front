'use client'

import { useState } from "react";
import TextInput from "./input-text";
import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "@/schemas/login/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/queries/use-login";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "./ui/button";


export default function LoginForm() {

     const [showPassword, setShowPassword] = useState(false);

     const { mutateAsync, isPending } = useLogin();

     const { control, handleSubmit, reset } = useForm<LoginData>({
          resolver: zodResolver(loginSchema),
     });
   
     const handleLogin = async (data: LoginData) => {
          await mutateAsync(data);
          reset();
     };

     return (
          <form className="space-y-4" onSubmit={handleSubmit(handleLogin)} >
               <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                         Email
                    </label>
                    <TextInput
                         control={control}
                         name="email"
                         placeholder="seu.email@gmail.com"
                    />
               </div>

               <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium">
                         Senha
                    </label>
                    <div className="relative">
                         <TextInput
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
                         {isPending ? "Carregando..." : "Entrar"}
                    </Button>
               </div>
          </form>
     );
}
