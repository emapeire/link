import type React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Head } from '@/components/head'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
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
    <html lang='en' className={`${GeistSans.className} dark`}>
      <Head metadata={metadata} />
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
