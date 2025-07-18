import Image from "next/image";
import logo from "../../../../public/images/logo-removebg-preview.png"
import Link from "next/link";
import AuthForm from "@/components/auth-form";
import { Suspense } from "react";

export default function LoginPage() {
     return (
          <>
               <div className="flex-1 flex items-center justify-center p-6 h-screen">
                    <div className="w-full max-w-md">
                         <div className="flex items-center justify-center">
                              <Image src={logo} alt="LinkSpy Logo" width={220} />
                         </div>
                         <h1 className="text-2xl font-bold text-center mb-5">Acesse sua conta</h1>
                         <p className="text-center text-gray-500 mb-5 text-sm">Digite seu email e senha para acessar o painel de controle.</p>
                         <Suspense fallback={<div>Carregando...</div>}>
                              <AuthForm mode="login" />
                         </Suspense>
                         <div className="text-center text-sm text-gray-500 mt-10">
                              Não tem uma conta?{" "}
                              <Link href="/register" className="text-gray-900 font-medium hover:underline">
                                   Registre-se
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     );
}