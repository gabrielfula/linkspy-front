'use client';

import { useSocketStore } from "@/lib/socket-store";
import { useEffect } from "react";

export function SocketInitializer() {
     useEffect(() => {
          useSocketStore.getState().initializeSocket();
     }, []);

     return null; 
}
