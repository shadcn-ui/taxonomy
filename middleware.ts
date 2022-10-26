import { NextRequest, NextResponse } from "next/server"
import { getSession } from "./lib/session"

export async function middleware(req: NextRequest) {
  const session = await getSession(req.headers.get("cookie"))
  // console.log(sess)
  // next-auth middleware is not Next.js 13 ready.
  // For now we just check for a cookie.
  // Totally not safe but YOLO.
  // const cookie = request.headers.get("cookie")
  // console.log({ cookie })

  if (!session && !req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (session && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }
}

export const config = { matcher: ["/login", "/dashboard/:path*"] }
