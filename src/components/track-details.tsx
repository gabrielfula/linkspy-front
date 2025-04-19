'use client';

import { MapPin } from "lucide-react";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { useTrackSocket } from "@/queries/use-track-socket";

export default function TrackDetails() {
     
     const { trackInfo } = useTrackSocket();

     return (
          <>
               <CardHeader>
                    <CardTitle>Dados de Localização</CardTitle>
                    <CardDescription>Informações geográficas do último acesso</CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                    <div className="flex items-start">
                         <div>
                              <h3 className="font-medium">Localização</h3>
                              <p className="text-sm text-muted-foreground">
                                   {trackInfo?.city}, {trackInfo?.state}
                              </p>
                         </div>
                    </div>

               <Separator />

               <div className="grid grid-cols-2 gap-4">
                    <div>
                         <h3 className="text-sm font-medium">Estado</h3>
                         <p className="text-sm text-muted-foreground">{trackInfo?.state}</p>
                    </div>
                    <div>
                         <h3 className="text-sm font-medium">Cidade</h3>
                         <p className="text-sm text-muted-foreground">{trackInfo?.city}</p>
                    </div>
               </div>

               {trackInfo?.cep && (
                    <div>
                         <h3 className="text-sm font-medium">CEP</h3>
                         <p className="text-sm text-muted-foreground">{trackInfo?.cep}</p>
                    </div>
               )}

               {trackInfo?.neighborhood && (
                    <div>
                         <h3 className="text-sm font-medium">Bairro</h3>
                         <p className="text-sm text-muted-foreground">{trackInfo?.neighborhood}</p>
                    </div>
               )}

               {trackInfo?.street && (
                    <div>
                         <h3 className="text-sm font-medium">Rua</h3>
                         <p className="text-sm text-muted-foreground">{trackInfo?.street}</p>
                    </div>
               )}
               </CardContent>
               <CardFooter>
                    <Button variant="outline" className="w-full">
                         Ver histórico de acessos
                    </Button>
               </CardFooter>
          </>
     );
}