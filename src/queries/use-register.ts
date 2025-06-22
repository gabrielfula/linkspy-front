'use server'

import { RegisterData } from '@/schemas/register/register.schema';


export const handleRegister = async (data: RegisterData) => {
     const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     });

     const result = await res.json();

     if (!res.ok) throw new Error(result.message);
     return result;
};