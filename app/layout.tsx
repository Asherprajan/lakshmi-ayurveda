import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lakshmi Ayurveda',
  description: 'Experience authentic Ayurvedic healing and wellness treatments in a serene environment. Our expert practitioners offer traditional therapies for holistic health and rejuvenation.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { rel: 'icon', url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { rel: 'icon', url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
  },
  manifest: '/site.webmanifest',
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
