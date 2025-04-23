import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = () => {
     const socketRef = useRef<Socket | null>(null);
     const [socket, setSocket] = useState<Socket | null>(null);

     useEffect(() => {
          const socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
               transports: ['websocket'],
          });

          socketRef.current = socketInstance;
          setSocket(socketInstance);

          return () => {
               socketInstance.disconnect();
          };
     }, []);

     return socket;
};
