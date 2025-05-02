import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = () => {
     const [socket, setSocket] = useState<Socket | null>(null);

     // useEffect(() => {
     //      if (socket) return;

     //      const socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
     //           transports: ['websocket'],
     //      });

     //      setSocket(socketInstance);

     //      return () => {
     //           socketInstance.disconnect();
     //      };
     // }, [socket]);

     return socket;
};
