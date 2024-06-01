import { NextResponse } from 'next/server';

import { auth } from './auth';
import { authRoutes, publicRoutes } from './routes';

export default auth(request => {
  const { nextUrl } = request;
  const isLoggedIn = !!request.auth;

  const isPublic = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if (isPublic) {
    return NextResponse.next();
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/members', nextUrl));
    }

    return NextResponse.next();
  }

  if (!isPublic && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
