'use client';

import { useSocketStore } from "@/lib/socket-store";
import { useEffect } from "react";

export function SocketInitializer() {
     useEffect(() => {
          console.log("to no SocketInitializer")
          useSocketStore.getState().initializeSocket();
     }, []);

     return null; 
}
