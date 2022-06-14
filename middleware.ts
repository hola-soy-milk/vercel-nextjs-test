import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/test") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
