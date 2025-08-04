import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Climax Ar Condicionado - Venda, Instalação e Manutenção em Londrina | 22 Anos de Experiência',
  description: 'Especialistas em ar condicionado em Londrina há mais de 22 anos. Venda, instalação e manutenção profissional com PMOC, ART e engenheiro capacitado. Atendimento 24h. Orçamento gratuito. Ligue (43) 99831-2268',
  keywords: 'ar condicionado londrina, manutenção ar condicionado londrina, instalação ar condicionado londrina, venda ar condicionado londrina, climatização londrina, climax ar condicionado, PMOC londrina, ART climatização, engenheiro ar condicionado londrina, atendimento 24h ar condicionado',
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
    title: 'Climax Ar Condicionado - Especialistas em Londrina | 22 Anos de Experiência',
    description: 'Venda, instalação e manutenção de ar condicionado em Londrina. PMOC, ART e engenheiro capacitado. Atendimento 24h. Orçamento gratuito.',
    url: 'https://climaxarcondicionado.com',
    siteName: 'Climax Ar Condicionado',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/climax-logo.png',
        width: 1200,
        height: 630,
        alt: 'Climax Ar Condicionado - Especialistas em Londrina há 22 anos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climax Ar Condicionado - Especialistas em Londrina | 22 Anos',
    description: 'Venda, instalação e manutenção de ar condicionado em Londrina. PMOC, ART e atendimento 24h.',
    images: ['/climax-logo.png'],
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
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
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
          id="structured-data"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('structured-data').textContent = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Climax Ar Condicionado",
                "description": "Especialistas em ar condicionado em Londrina há mais de 22 anos. Venda, instalação e manutenção profissional com PMOC, ART e engenheiro capacitado. Atendimento 24h.",
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
                        "name": "Venda de Ar Condicionado",
                        "description": "Venda de equipamentos de ar condicionado com garantia e instalação"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Instalação de Ar Condicionado",
                        "description": "Instalação profissional com projetos de climatização e ART"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Manutenção de Ar Condicionado",
                        "description": "Manutenção preventiva e corretiva com PMOC e engenheiro capacitado"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Projetos de Climatização",
                        "description": "Projetos técnicos completos com documentação PMOC"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "150",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "foundingDate": "2002",
                "numberOfEmployees": "10",
                "award": [
                  "22 anos de experiência",
                  "Engenheiro capacitado",
                  "PMOC e ART",
                  "Atendimento 24h"
                ]
              });
            `
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
