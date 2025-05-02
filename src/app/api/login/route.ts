import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
     const { email, password } = await req.json();
     const baseUrl             = process.env.NEXT_PUBLIC_API_BASE_URL;

     try {
          const res = await fetch(`${baseUrl}/admin/auth/signin`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ username: email, password }),
          });

          const result = await res.json();

          if (!result?.success || !result?.token) {
               return NextResponse.json(
                    { success: false, message: result.message || 'Credenciais inválidas' },
                    { status: 401 }
               );
          }

          const cookieStore = await cookies();
          cookieStore.set('token', result.token, {
               // httpOnly: true,
               path: '/',
               maxAge: 60 * 60 * 24,
               secure: process.env.NODE_ENV === 'production',
               sameSite: 'lax',
          });

          cookieStore.set('account_code', result.id, {
               path: '/',
               maxAge: 60 * 60 * 24,
               secure: process.env.NODE_ENV === 'production',
               sameSite: 'lax',
          });

          return NextResponse.json({ success: true, name: result.name });
     } catch (error) {
          console.log(error)
          return NextResponse.json({ success: false, message: 'Erro no servidor' }, { status: 500 });
     }
}
