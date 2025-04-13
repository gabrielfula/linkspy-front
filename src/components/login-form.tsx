'use client'

import { useState } from "react"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { handleLogin } from "@/app/actions/login";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
     const [showPassword, setShowPassword] = useState(false);

     const router = useRouter();

     const { executeFormAction, data, isPending } = useServerAction(handleLogin);

     const onSubmit = async (event: React.FormEvent) => {
          event.preventDefault();
          await executeFormAction(new FormData(event.target as HTMLFormElement));

          if (data !== undefined && data.success === true) {
               toast.success("Login realizado com sucesso!");
               router.push("/home")
          } else if (data !== undefined && data.success === false) {
               toast.error(data.message);
          } else {
               toast.error("Erro inesperado");
          }
     };

     return (
          <form className="space-y-4" onSubmit={onSubmit} >
               <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                         Email
                    </label>
                    <Input
                         id="email"
                         name="email"
                         type="email"
                         placeholder="seu.email@gmail.com"
                         className="w-full border border-gray-300 rounded-md"
                         required
                    />
               </div>

               <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium">
                         Senha
                    </label>
                    <div className="relative">
                         <Input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="w-full border border-gray-300 rounded-md pr-10"
                              required
                         />
                         <button
                              type="button"
                              className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 disabled:opacity-10"
                              onClick={() => setShowPassword(!showPassword)}
                              disabled={isPending}
                         >
                              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                         </button>
                    </div>
               </div>

               <div className="pt-2">
                    <Button type="submit" className="w-full text-white">
                         Entrar
                    </Button>
               </div>
          </form>
     );
}
