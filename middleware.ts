// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only protect the CMS (studio) routes
  if (pathname.startsWith('/studio')) {
    const basicAuth = request.headers.get('authorization');
    const expectedUser = process.env.NEXT_PUBLIC_CMS_USER;
    const expectedPass = process.env.NEXT_PUBLIC_CMS_PASS;

    if (!expectedUser || !expectedPass) {
      return NextResponse.next();
    }

    const expectedAuth =
      'Basic ' + Buffer.from(`${expectedUser}:${expectedPass}`).toString('base64');

    if (basicAuth !== expectedAuth) {
      const unauthorizedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Authentication Required</title>
  <!-- Include Tailwind via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
  <div class="min-h-screen flex items-center justify-center flex-col">
    <div class="bg-white p-6 rounded shadow max-w-sm text-center">
      <h1 class="text-2xl font-semibold mb-4 text-red-600">Access Denied</h1>
      <p class="text-gray-700">
        You must provide valid credentials to access this area. If you believe this is an error, 
        please contact your administrator.
      </p>
      <a href="/" class="mt-6 inline-block bg-[#333362] hover:bg-[#0F0F46] text-white font-bold py-2 px-4 rounded">
        Return Home
      </a>
    </div>
  </div>
</body>
</html>
      `;
      return new NextResponse(unauthorizedHtml, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Protected CMS Area"',
          'Content-Type': 'text/html; charset=utf-8',
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
