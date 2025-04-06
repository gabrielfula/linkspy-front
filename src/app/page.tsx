import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo-removebg-preview.png"

export default function LandingPage() {
     return (
          <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
               <div className="flex flex-col items-center text-center max-w-xl">
                    <Image src={logo} alt="LinkSpy Logo" width={100} className="mb-6" />
                    <h1 className="text-4xl font-bold mb-4">Descubra. Rastreie. Surpreenda.</h1>
                    <p className="text-lg mb-6 text-gray-300">
                         Você já imaginou saber onde alguém está só com um clique?
                         <br />
                         Com o <span className="font-semibold text-white">LinkSpy</span>, você cria links rastreáveis e recebe a localização de quem clicar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                         <Link
                              href="/home"
                              className="bg-white hover:bg-black text-black hover:text-white hover:border-white border font-semibold py-3 px-6 rounded-lg transition"
                         >
                              Acessar Sistema
                         </Link>
                         <Link
                              href="/login"
                              className="bg-transparent border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-lg transition"
                         >
                              Efetuar Login
                         </Link>
                    </div>
               </div>
          </div>
     );
}
