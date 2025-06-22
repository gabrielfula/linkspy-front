'use server'

import { LoginData } from '@/schemas/login/login.schema';

const webUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const handleLogin = async (data: LoginData) => {
     try {
          const res = await fetch(`${webUrl}/api/login`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(data),
          });

          return await res.json();
     } catch (error: any) {
          throw new Error(error.message);
     }
};