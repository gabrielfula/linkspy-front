import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {

     try {
          console.log("post")
          const cookieStore = await cookies();
          cookieStore.delete('next-auth.session-token');
          cookieStore.delete('next-auth.callback-url');
          cookieStore.delete('next-auth.csrf-token');
          cookieStore.delete('token');
          cookieStore.delete('account_code');

          return NextResponse.json({ success: true });
     } catch (error) {
          return NextResponse.json({ success: false, message: 'Erro no servidor' }, { status: 500 });
     }
}