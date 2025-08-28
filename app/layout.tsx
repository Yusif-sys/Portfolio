import type { Metadata } from 'next'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className={`antialiased ${josefin.variable} ${josefin.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
