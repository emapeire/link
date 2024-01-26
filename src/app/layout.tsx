import type React from 'react'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Head } from '@/components/head'
import { Footer } from '@/components/footer'
// import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

const metadata: Metadata = {
  title: 'Social | Emanuel Peire',
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
    <html lang='en' className={`${inter.className} dark`}>
      <Head metadata={metadata} />
      <body>
        {children}
        {/* <Analytics /> */}
        <Footer />
      </body>
    </html>
  )
}
