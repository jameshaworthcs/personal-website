import React from 'react'
import { Metadata } from 'next'

const title = 'York Wines: the owner on my work'
const description =
  "Alex Edwards, the owner of York Wines, and James Haworth talk about James's work on the York Wines website: a 43-second video with a transcript."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/york-wines',
  },
  openGraph: {
    type: 'website',
    url: '/york-wines',
    siteName: 'James Haworth',
    locale: 'en_GB',
    title: `${title} · James Haworth`,
    description,
    images: [
      {
        url: '/york-wines-og.jpg',
        width: 1200,
        height: 630,
        alt: 'James Haworth outside York Wines, from the video',
      },
    ],
  },
}

export default function YorkWinesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
