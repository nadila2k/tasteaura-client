import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET, // required
  });

  const { pathname } = req.nextUrl;

  // Allow public pages
  if (pathname.startsWith("/auth") || pathname.startsWith("/api")) {
    if (token && pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // Protect /dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      // Not logged in → redirect to signin
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    // Optional: role check
    if (token.role !== "CUSTOMER") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
};

// Apply middleware only to relevant routes
export const config = {
  matcher: ["/dashboard/:path*"], // important
};
