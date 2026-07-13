import type { Metadata } from 'next'
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ZohoPopup } from '@/components/layout/zoho-popup'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BlueprintDoc: Medical Education for Resident Doctors',
    template: '%s | BlueprintDoc',
  },
  description:
    'Practical guides for final-year medical students and FY1 doctors. Survive and thrive on the NHS ward from day one.',
  keywords: ['FY1', 'resident doctor', 'medical education', 'NHS', 'foundation year', 'medical school'],
  openGraph: {
    title: 'BlueprintDoc: Medical Education for Resident Doctors',
    description:
      'Practical guides for final-year medical students and FY1 doctors. Survive and thrive on the NHS ward from day one.',
    url: 'https://blueprintdoc.co.uk',
    siteName: 'BlueprintDoc',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <ZohoPopup />
      </body>
    </html>
  )
}
