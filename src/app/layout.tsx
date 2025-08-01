import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Climax Ar Condicionado - Venda, Instalação e Manutenção em Londrina',
  description: 'Especialistas em ar condicionado em Londrina há mais de 22 anos. Venda, instalação e manutenção profissional com PMOC e ART. Atendimento 24h. Ligue (43) 99831-2268',
  keywords: 'ar condicionado, londrina, manutenção ar condicionado, instalação ar condicionado, venda ar condicionado, climatização, climax',
  authors: [{ name: 'Climax Ar Condicionado' }],
  creator: 'Climax Ar Condicionado',
  publisher: 'Climax Ar Condicionado',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://climaxarcondicionado.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Climax Ar Condicionado - Especialistas em Londrina',
    description: 'Venda, instalação e manutenção de ar condicionado em Londrina. Atendimento 24h. Mais de 10 anos de experiência.',
    url: 'https://climaxarcondicionado.com',
    siteName: 'Climax Ar Condicionado',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Climax Ar Condicionado - Especialistas em Londrina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climax Ar Condicionado - Especialistas em Londrina',
    description: 'Venda, instalação e manutenção de ar condicionado em Londrina. Atendimento 24h.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Favicon e ícones otimizados para Google */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/climax-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta tags para logo no Google */}
        <meta name="msapplication-TileColor" content="#FF6B35" />
        <meta name="msapplication-TileImage" content="/climax-logo.png" />
        <meta name="theme-color" content="#FF6B35" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Open Graph com logo */}
        <meta property="og:image" content="https://climaxarcondicionado.com/climax-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Climax Ar Condicionado - Logo" />
        
        {/* Twitter Card com logo */}
        <meta name="twitter:image" content="https://climaxarcondicionado.com/climax-logo.png" />
        <meta name="twitter:image:alt" content="Climax Ar Condicionado - Logo" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Climax Ar Condicionado",
              "description": "Especialistas em ar condicionado em Londrina há mais de 22 anos",
              "url": "https://climaxarcondicionado.com",
              "telephone": "+5543998312268",
              "email": "andre.climax@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Londrina",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.3105",
                "longitude": "-51.1593"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "image": "https://climaxarcondicionado.com/climax-logo.png",
              "logo": "https://climaxarcondicionado.com/climax-logo.png",
              "sameAs": [
                "https://www.facebook.com/climaxarcondicionado",
                "https://www.instagram.com/climaxarcondicionado"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "-23.3105",
                  "longitude": "-51.1593"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Ar Condicionado",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Venda de Ar Condicionado"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalação de Ar Condicionado"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Manutenção de Ar Condicionado"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
