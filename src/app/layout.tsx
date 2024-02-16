import type React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from '@/components/head'
import '@/styles/globals.css'

const metadata: Metadata = {
  title: 'Link | Emanuel Peire',
  description: 'Links to my social media'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <Head metadata={metadata} />
      <body>{children}</body>
    </html>
  )
}
