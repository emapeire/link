import type React from 'react'
import { HeadIcons } from 'src/components/head-icons'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { Analytics } from '@vercel/analytics/react'

const metadata: Metadata = {
  title: 'Links | Emanuel Peire',
  description: 'Links to my social media'
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.className}`}>
      <HeadIcons metadata={metadata} />
      <body>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
