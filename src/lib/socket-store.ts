import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import { toast } from 'sonner';

interface SocketStore {
     socket: Socket | null;
     initializeSocket: () => void;
     sendMessage: (message: string) => void;
}

export const useSocketStore = create<SocketStore>((set, get) => ({
     socket: null,

     initializeSocket: () => {
          if (get().socket) return;

          const socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
               transports: ['websocket'],
          });

          set({ socket: socketInstance });

          socketInstance.on('location-tracked', (data) => {
               const city = data?.location?.city ?? 'localização desconhecida';
               toast.success(`Nova localização recebida: ${city}`);
          });
     },

     sendMessage: (message: string) => {
          const socket = get().socket;
          socket?.emit('message', message);
     },
}));
