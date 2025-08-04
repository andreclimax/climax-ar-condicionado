/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de redirecionamento
  async redirects() {
    return [
      // Redirecionar HTTP para HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://climaxarcondicionado.com/:path*',
        permanent: true,
      },
    ];
  },

  // Configurações de headers para SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Configurações de imagens
  images: {
    domains: ['climaxarcondicionado.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Configurações de compressão
  compress: true,

  // Configurações de performance
  experimental: {
    optimizeCss: true,
  },

  // Configurações de poweredByHeader
  poweredByHeader: false,

  // Configurações de generateEtags
  generateEtags: false,

  // Configurações de reactStrictMode
  reactStrictMode: true,

  // Configurações de compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Configurações de rewrites
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

module.exports = nextConfig; 