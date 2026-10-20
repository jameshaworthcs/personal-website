import type React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

const description =
  'Final-year Computer Science with AI student at the University of York, graduating 06/2027. Placement year at ETAS (Bosch Group); founder of Verified Handles. Looking for graduate software and AI engineering roles.'

export const metadata: Metadata = {
  metadataBase: new URL('https://j-h.ai'),
  title: {
    default: 'James Haworth: Software Engineer',
    template: '%s · James Haworth',
  },
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'James Haworth',
    locale: 'en_GB',
    title: 'James Haworth: Software Engineer',
    description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'James Haworth, Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Plausible, self-hosted: no cookies; see /privacy */}
        <Script src="/plausible-init.js" strategy="afterInteractive" />
        <Script
          src="https://analytics.cloud.jhaworth.ai/js/pa-qGNXF4fpuLQ_gq-DrpxIk.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
