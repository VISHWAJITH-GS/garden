import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { DM_Serif_Display, DM_Sans, Tiro_Tamil } from 'next/font/google'
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

const tiroTamil = Tiro_Tamil({
  weight: '400',
  subsets: ['tamil'],
  variable: '--font-tamil',
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
    <html lang="ta" className={`${dmSerif.variable} ${dmSans.variable} ${tiroTamil.variable}`}>
      <body className="bg-[var(--color-canvas)] text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  )
}
