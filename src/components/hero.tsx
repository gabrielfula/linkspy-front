"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { LocationAnimation } from "./location-animation"
import { FloatingLink } from "./floating-link"

export default function Hero() {
     return (
          <div className="relative min-h-[calc(100vh-76px)] flex items-center">
               <div className="absolute inset-0 overflow-hidden">
                    <FloatingLink count={6} />
               </div>

               <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                              Já imaginou saber onde alguém está só com um clique?
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                        {" "}
                                        Descubra. Rastreie. Surpreenda.
                                   </span>
                              </h1>
                         </motion.div>

                         <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
                         >
                              Com o <span className="font-semibold text-white">LinkSpy</span>, você cria links rastreáveis.
                         </motion.p>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="flex flex-col sm:flex-row items-center justify-center gap-4"
                         >
                              <Link
                                   href="/home"
                                   className="bg-white hover:bg-black text-black hover:text-white hover:border-white border font-semibold py-3 px-6 rounded-lg transition"
                              >
                                   Acessar Sistema
                              </Link>
                              <Link
                                   href="/login"
                                   className="bg-white hover:bg-black text-black hover:text-white hover:border-white border font-semibold py-3 px-6 rounded-lg transition"
                              >
                                   Efetuar Login
                              </Link>
                         </motion.div>
                    </div>
               </div>
               <div className="absolute bottom-0 right-0 w-96 h-96">
                    <LocationAnimation />
               </div>
          </div>
     )
}
