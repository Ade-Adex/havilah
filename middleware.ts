// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only protect the CMS (studio) routes
  if (pathname.startsWith('/studio')) {
    // Retrieve the Basic Auth header
    const basicAuth = request.headers.get('authorization');
    
  // Use the NEXT_PUBLIC environment variables as defined in your .env file
  const expectedUser = process.env.NEXT_PUBLIC_CMS_USER;
  const expectedPass = process.env.NEXT_PUBLIC_CMS_PASS;

    if (!expectedUser || !expectedPass) {
      // Optionally allow access or block if credentials aren't set
      return NextResponse.next();
    }

    // Build the expected Authorization header value
    const expectedAuth =
      'Basic ' +
      Buffer.from(`${expectedUser}:${expectedPass}`).toString('base64');

    // If the header doesn't match, respond with a 401 and a Basic Auth challenge
    if (basicAuth !== expectedAuth) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Protected CMS Area"',
        },
      });
    }
  }

  return NextResponse.next();
}

// Apply this middleware to all /studio routes
export const config = {
  matcher: ['/studio/:path*'],
};
