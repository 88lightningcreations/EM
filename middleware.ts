import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  if (process.env.NODE_ENV === 'development') {
    response.headers.set(
      "Content-Security-Policy",
      `default-src 'self'; ` +
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://vercel.live; ` +
      `script-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://vercel.live; ` +
      `style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; ` +
      `img-src 'self' data: blob:; ` +
      `font-src 'self'; ` +
      `connect-src 'self' https://vercel.live ws://localhost:*; ` +
      `frame-src 'none'; ` +
      `object-src 'none'; ` +
      `base-uri 'self'`
    )
  } else {
    response.headers.set(
      "Content-Security-Policy",
      `default-src 'self'; ` +
      `script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://vercel.live; ` +
      `script-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://vercel.live; ` +
      `style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; ` +
      `img-src 'self' data: blob:; ` +
      `font-src 'self'; ` +
      `connect-src 'self' https://vercel.live; ` +
      `frame-src 'none'; ` +
      `object-src 'none'; ` +
      `base-uri 'self'`
    )
  }

  return response
}