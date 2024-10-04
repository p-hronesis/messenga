import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request, "That was the request");

  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
