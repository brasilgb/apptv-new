import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';

export function middleware(req: NextRequest) {
  const cookies = req.headers.get('cookie') || '';
  const { portal_access } = cookie.parse(cookies);

  if (!portal_access) {
    console.log('No portal access cookie found, redirecting to /not-found');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  let user;
  try {
    user = JSON.parse(portal_access);
  } catch (e) {
    console.log('Failed to parse portal_access cookie, redirecting to /not-found');
    return NextResponse.redirect(new URL(`/${process.env.NEXT_PUBLIC_APP_ID}/not-found`, req.url));
  }

  const allowedPaths = user.folders.map((folder: { path: string }) => folder.path);
  console.log('Allowed Paths:', allowedPaths);

  // Check if the full pathname is allowed
  const isPathAllowed = allowedPaths.some((allowedPath: string) => process.env.NEXT_PUBLIC_APP_ID === allowedPath);
  console.log('Is Path Allowed:', isPathAllowed);

  if (!isPathAllowed) {
    console.log('Path not allowed, redirecting to /not-found');
    return NextResponse.redirect(new URL(`/${process.env.NEXT_PUBLIC_APP_ID}/not-found`, req.url));
  }

  console.log('Tem permissão, seguirá com a requisição...', process.env.NEXT_PUBLIC_APP_ID)
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logotipo.svg).*)'],
};
