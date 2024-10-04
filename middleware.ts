import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.cookies);
  console.log("THOSE ARE THE COOKIES");
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/users", "/conversations"];

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const token = request.cookies.get("next-auth.session-token");

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to all routes

export const config = {
  matcher: ["/:path*"],
};
