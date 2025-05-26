import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
  transports: ['websocket'],
//   reconnectionAttempts: 5,
//   reconnectionDelay: 1000,
});


export function useLocationSocket(uuid: string) {
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    if (!uuid) return;

    const event = `location-update`;

    socket.on(event, (data) => {
      setLocation(data.location);
    });

    return () => {
      socket.off(event);
    };
  }, [uuid]);

  return location;
}
