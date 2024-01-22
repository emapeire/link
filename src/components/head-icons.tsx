import Head from 'next/head'
import { type Metadata } from 'next'

export function HeadIcons({ metadata }: { metadata: Metadata }) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta title={metadata.title?.toString()} />
      <meta name='description' content={metadata.description?.toString()} />
      <meta name='author' content='Emanuel Peire' />
      <meta name='robots' content='index, follow' />
      <meta name='application-name' content='ep-app' />
      <meta name='apple-mobile-web-app-title' content='ep-app' />
      <meta name='theme-color' content='#000000' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='194x194'
        href='/favicon-194x194.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/android-chrome-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
    </Head>
  )
}
