import type React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { profile } from '@/content/profile'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const description = profile.description

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
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
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
