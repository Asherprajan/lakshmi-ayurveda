import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Lakshmi Ayurveda | Authentic Kerala Ayurvedic Retreat for Panchakarma, Wellness, and Holistic Healing',
  description: 'Lakshmi Ayurveda Heritage Villa in Kovalam, Trivandrum, Kerala offers authentic Panchakarma treatments, Ayurvedic consultations, yoga retreats, and traditional therapies for holistic health, rejuvenation, and natural healing in a serene South Indian environment.',
  keywords: [
    'authentic Kerala Ayurveda retreat for Panchakarma and wellness',
    'best Ayurvedic villa in Kovalam Trivandrum Kerala India',
    'traditional Ayurvedic therapies for holistic health and rejuvenation',
    'Ayurvedic consultation with experienced doctor in Kerala',
    'Ayurvedic spa and massage for natural healing in South India',
    'luxury Ayurveda resort for yoga and meditation retreats',
    'Ayurvedic healing center for detox and stress relief in Kerala',
    'Ayurveda Heritage Villa for long stay wellness programs',
    'personalized Panchakarma treatment packages in Kerala',
    'Ayurvedic treatments for chronic illness and lifestyle diseases',
    'family-friendly Ayurveda resort with private rooms in Kovalam',
    'Ayurvedic therapies for immunity boosting and relaxation',
    'best Ayurveda Kerala experience for international guests',
    'Ayurvedic doctor consultation and diagnosis in Trivandrum',
    'Ayurvedic spa resort near Kovalam beach Kerala',
    'natural healing therapies and traditional medicine in India',
    'Lakshmi Ayurveda Heritage Villa reviews and guest experiences',
    'Ayurvedic yoga retreat for mind body balance in Kerala',
    'holistic health and wellness programs in South India',
    'Ayurvedic detox and rejuvenation packages in Kerala',
    'authentic Ayurveda Kerala treatments for foreigners',
    'Ayurvedic wellness retreat for digital detox and mindful living',
    'Ayurvedic therapies for stress management and relaxation',
    'Ayurveda Heritage Villa Kovalam Trivandrum Kerala India'
  ],
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
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
