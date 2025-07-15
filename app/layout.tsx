import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lakshmi Ayurveda',
  description: 'Experience authentic Ayurvedic healing and wellness treatments in a serene environment. Our expert practitioners offer traditional therapies for holistic health and rejuvenation.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
