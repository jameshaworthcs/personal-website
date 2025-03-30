import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'York Wines - CV',
  description: 'York Wines CV video presentation by James Haworth',
}

export default function YorkWinesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
