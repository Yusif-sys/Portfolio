import type { Metadata, Viewport } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const josefin = Josefin_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-josefin'
})

export const metadata: Metadata = {
  title: 'Yusif Imanov - Portfolio',
  description: 'CS Student specializing in AI and Full-Stack development',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <style>{`
          html, body, #__next, main, div, section {
            background-color: #000000 !important;
            color: #ffffff !important;
          }
          * {
            background-color: #000000 !important;
          }
        `}</style>
      </head>
      <body 
        className={`antialiased bg-black text-white ${josefin.variable} ${josefin.className}`}
        style={{ backgroundColor: '#000000', color: '#ffffff' }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
