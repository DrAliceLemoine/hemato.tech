import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, isValidLanguage } from './lib/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname starts with supported language
  const pathnameHasLanguage = SUPPORTED_LANGUAGES.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // If root path, redirect to default language
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LANGUAGE}`, request.url));
  }

  // For any other path without language prefix, redirect to default language
  return NextResponse.redirect(new URL(`/${DEFAULT_LANGUAGE}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|public).*)'],
};
