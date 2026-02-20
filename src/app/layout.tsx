import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Michaelangelo — Full-Stack Developer',
  description:
    'Full-Stack Developer building bold, automated websites for small businesses. Custom websites with newsletter integration and automated email sequences. 10–14 day delivery.',
  keywords: [
    'full-stack developer',
    'small business website',
    'web developer UK',
    'website automation',
    'Next.js developer',
  ],
  authors: [{ name: 'Michaelangelo' }],
  creator: 'Michaelangelo',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://yourdomain.com',
    siteName: 'Michaelangelo',
    title: 'Michaelangelo — Full-Stack Developer',
    description:
      'Bold, automated websites for small businesses. Built in 10–14 days.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Michaelangelo — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michaelangelo — Full-Stack Developer',
    description: 'Bold, automated websites for small businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  )
}
