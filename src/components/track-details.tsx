'use client';

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { useDetailsUrl } from "@/queries/use-detail-url";
import { Button } from "./ui/button";

type TrackDetailsProps = {
  uuid: string;
};

export default function TrackDetails({ uuid }: TrackDetailsProps) {
     const { data: detailData } = useDetailsUrl(uuid);

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
                                   {detailData?.location.last_location.street} - {detailData?.location.last_location.city}
                              </p>
                         </div>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                         <div>
                              <h3 className="text-sm font-medium">Estado</h3>
                              <p className="text-sm text-muted-foreground">{detailData?.location.last_location.state}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">Cidade</h3>
                              <p className="text-sm text-muted-foreground">{detailData?.location.last_location.city}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">Longitude</h3>
                              <p className="text-sm text-muted-foreground">{detailData?.location.last_location.longitude}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">CEP</h3>
                              <p className="text-sm text-muted-foreground">{detailData?.location.last_location.cep}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">Latitude</h3>
                              <p className="text-sm text-muted-foreground">{detailData?.location.last_location.latitude}</p>
                         </div>
                         <div>
                              <h3 className="text-sm font-medium">Bairro</h3>
                              <p className="text-sm text-muted-foreground">{detailData?.location.last_location.neighborhood}</p>
                         </div>
                         <div className="grid col-span-2">
                              <h3 className="text-sm font-medium">Rua</h3>
                              <p className="text-sm text-muted-foreground">{detailData?.location.last_location.street}</p>
                         </div>
                    </div>
               </CardContent>
               <CardFooter>
                    <Button variant="outline" className="w-full">
                         Ver histórico de acessos
                    </Button>
               </CardFooter>
          </>
     );
}