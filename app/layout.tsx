import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'TCE Garden',
  description:
    'Explore the medicinal plant garden of Thiagarajar College of Engineering, Madurai.',
}

export const viewport: Viewport = {
  themeColor: '#7B1C2E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ta" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Tamil&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--color-canvas)] text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  )
}
