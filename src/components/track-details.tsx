'use client';

import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { useTrackSocket } from "@/queries/use-track-socket";
import { useDetailsUrl } from "@/queries/use-detail-url";

type TrackDetailsProps = {
  uuid: string;
};

export default function TrackDetails({ uuid }: TrackDetailsProps) {
     const socketData           = useTrackSocket();
     const { data: detailData } = useDetailsUrl(uuid);
     const isValidSocketData    = socketData && typeof socketData === 'object' && Object.keys(socketData).length > 0;
     const locationData         = isValidSocketData ? socketData : detailData?.location.last_location;

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
                                   {locationData?.city} {locationData?.state}
                              </p>
                         </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                              <h3 className="text-sm font-medium">Estado</h3>
                              <p className="text-sm text-muted-foreground">{locationData?.state}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">Cidade</h3>
                              <p className="text-sm text-muted-foreground">{locationData?.city}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">Longitude</h3>
                              <p className="text-sm text-muted-foreground">{locationData?.longitude}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">Latitude</h3>
                              <p className="text-sm text-muted-foreground">{locationData?.latitude}</p>
                         </div>
                         {locationData?.cep && (
                              <div>
                                   <h3 className="text-sm font-medium">CEP</h3>
                                   <p className="text-sm text-muted-foreground">{locationData.cep}</p>
                              </div>
                         )}
                         {locationData?.neighborhood && (
                              <div>
                                   <h3 className="text-sm font-medium">Bairro</h3>
                                   <p className="text-sm text-muted-foreground">{locationData.neighborhood}</p>
                              </div>
                         )}
                         {locationData?.street && (
                              <div>
                                   <h3 className="text-sm font-medium">Rua</h3>
                                   <p className="text-sm text-muted-foreground">{locationData.street}</p>
                              </div>
                         )}
                    </div>
               </CardContent>
               {/* <CardFooter>
                    <Button variant="outline" className="w-full">
                         Ver histórico de acessos
                    </Button>
               </CardFooter> */}
          </>
     );
}