import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
     const { email, password, name } = await req.json();
     const baseUrl                   = process.env.API_BASE_URL;

     try {
          const res = await fetch(`${baseUrl}/v1/admin/auth/register`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ username: email, password, name }),
          });

          const result = await res.json();

          return NextResponse.json({ success: true, name: result.name });
     } catch (error) {
          return NextResponse.json({ success: false, message: 'Erro no servidor' }, { status: 500 });
     }
}
