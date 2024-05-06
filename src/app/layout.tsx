import type React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from '@/components/head'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
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
      className={cn(
        'min-h-screen bg-background font-sans antialiased overflow-y-scroll',
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <Head metadata={metadata} />
      <body className='w-full'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Header />
            {children}
            <Footer />
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
