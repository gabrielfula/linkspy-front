import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
     const isLoggedIn = request.cookies.get("token");

     const pathname = request.nextUrl.pathname;

     if (pathname.startsWith("/home") && !isLoggedIn) {
          const loginUrl = new URL("/login", request.url);
          loginUrl.searchParams.set("redirect", pathname);

          return NextResponse.redirect(loginUrl);
     }

     return NextResponse.next(); 
}

export const config = {
     matcher: ["/home/:path*"],
};
