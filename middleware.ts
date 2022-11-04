import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

import { getSession } from "@/lib/session"

export default withAuth(
  async function middleware(req) {
    const session = await getSession(req.headers.get("cookie"))

    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register")

    if (isAuthPage) {
      if (session) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }

      return null
    }

    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/dashboard/:path*", "/editor", "/login", "/register"],
}
