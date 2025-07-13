"use client";

import { useLocationSocket } from "@/hooks/use-locationSocket";
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import HistoryLink from "./history-link";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";



type Props = {
  uuid: string;
  fallbackLocation: any;
};

export default function TrackDetailsClient({ uuid, fallbackLocation }: Props) {
    const liveLocation        = useLocationSocket(uuid);
    const location            = liveLocation || fallbackLocation.last_location;
    const [isOpen, setIsOpen] = useState(false);

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
                        <p className="text-sm text-muted-foreground">{location?.street} - {location?.city}</p>
                    </div>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-sm font-medium">Estado</h3>
                        <p className="text-sm text-muted-foreground">{location?.state}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium">Cidade</h3>
                        <p className="text-sm text-muted-foreground">{location?.city}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium">Longitude</h3>
                        <p className="text-sm text-muted-foreground">{location?.longitude}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium">CEP</h3>
                        <p className="text-sm text-muted-foreground">{location?.cep}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium">Latitude</h3>
                        <p className="text-sm text-muted-foreground">{location?.latitude}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium">Bairro</h3>
                        <p className="text-sm text-muted-foreground">{location?.neighborhood}</p>
                    </div>
                    <div className="grid col-span-2">
                        <h3 className="text-sm font-medium">Rua</h3>
                        <p className="text-sm text-muted-foreground">{location?.street}</p>
                    </div>
                </div>
            </CardContent>
            {location?.latitude && location?.longitude && (
                <CardFooter className="flex flex-col gap-4">
                    <div>
                        {/* <MapLocation latitude={location.latitude} longitude={location.longitude} key={location.uuid} /> */}
                    </div>
                    <Button onClick={() => setIsOpen(!isOpen)} variant="outline" className="w-full">
                        Ver histórico de acessos
                    </Button>
                    <HistoryLink
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        locations={fallbackLocation.locations_history}
                    />
                </CardFooter>
            )}
        </>
    );
}
