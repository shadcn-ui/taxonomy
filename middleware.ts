import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): void | NextResponse {
  // todo user auth
  const from = request.nextUrl.pathname;

  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
