'use client';

import { ITrackingDetails } from "@/@types/link-track.interface";
import { useSocket } from "@/hooks/use-socket";
import { useEffect, useState } from "react";

export function useTrackSocket() {

     const socket = useSocket();
     const [trackInfo, setTrackInfo] = useState<ITrackingDetails | undefined>({ location: {} });

     useEffect(() => {
          if (!socket) return;

          const handleLocationTracked = (data: any) => {
               setTrackInfo((prev) => ({
                    ...prev,
                    ...data
               }));
          };

          socket.on("location-tracked", handleLocationTracked);

          return () => {
               socket.off("location-tracked", handleLocationTracked);
          };
     }, [socket]);

     return trackInfo?.location;
}