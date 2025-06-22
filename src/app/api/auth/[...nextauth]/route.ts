import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Senha", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/auth/signin`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            username: credentials?.email,
                            password: credentials?.password,
                        }),
                    });

                    const result = await res.json();

                    const cookieServer = await cookies();

                    if (res.ok && result.success && result.token) {

                        cookieServer.set('token', result.token, {
                            httpOnly: true,
                            path: '/',
                            maxAge: 60 * 60 * 24,
                            secure: process.env.NODE_ENV === 'production',
                            sameSite: 'lax',
                        });

                        cookieServer.set('account_code', result.id, {
                            path: '/',
                            maxAge: 60 * 60 * 24,
                            secure: process.env.NODE_ENV === 'production',
                            sameSite: 'lax',
                        });

                        return {
                            id: result.id,
                            name: result.name,
                            email: result.email,
                            token: result.token,
                        };
                    }

                    return null;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.accessToken = user.token;
                token.user        = user;
            }

            return token;
        },
        async session({ session, token }: any) {
            session.accessToken = token.accessToken;
            session.user        = token.user;

            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
