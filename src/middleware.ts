import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
     const isLoggedIn = request.cookies.get("token");
     const pathname = request.nextUrl.pathname;

     const isProtectedRoute = pathname.startsWith("/home");
     const isPublicRoute = ["/", "/login", "/register"].includes(pathname);

     if (isProtectedRoute && !isLoggedIn) {
          const loginUrl = new URL("/login", request.url);
          loginUrl.searchParams.set("redirect", pathname);
          return NextResponse.redirect(loginUrl);
     }

     if (isLoggedIn && isPublicRoute) {
          return NextResponse.redirect(new URL("/home", request.url));
     }

     return NextResponse.next();
}

export const config = {
     matcher: ["/home/:path*"],
};
