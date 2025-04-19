'use client';

import { ITrackingDetails } from "@/@types/link-track.interface";
import { useSocket } from "@/hooks/use-socket";
import { useEffect, useState } from "react";

export function useTrackSocket() {

     const socket = useSocket();
     const [trackInfo, setTrackInfo] = useState<ITrackingDetails | undefined>({});

     useEffect(() => {
          if (!socket) return;

          const handleLocationTracked = (data: any) => {
               console.log("Nova localização recebida:", data);
               setTrackInfo((prev) => ({
                    ...prev,
                    city: data.city || prev?.city,
                    state: data.state || prev?.state,
                    cep: data.cep || prev?.cep,
                    neighborhood: data.neighborhood || prev?.neighborhood,
                    street: data.street || prev?.street,
               }));
          };

          socket.on("location-tracked", handleLocationTracked);

          return () => {
               socket.off("location-tracked", handleLocationTracked);
          };
     }, [socket]);

     return { trackInfo };
}