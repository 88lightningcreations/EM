module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: [
                "default-src 'self'",
                "script-src 'self' https://cdn.jsdelivr.net https://vercel.live 'unsafe-inline'",
                "style-src 'self' https://cdn.jsdelivr.net 'unsafe-inline'",
                "img-src 'self' data:",
                "font-src 'self'",
                "connect-src 'self' https://vercel.live",
                "frame-src 'none'",
                "object-src 'none'",
                "base-uri 'self'"
              ].join('; ')
            }
          ]
        }
      ]
    }
  }