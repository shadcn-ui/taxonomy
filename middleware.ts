import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): void | NextResponse {
  const requestHeaders = new Headers(request.headers);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  // matcher: ['/dashboard/:path*', '/login', '/register'],
};
