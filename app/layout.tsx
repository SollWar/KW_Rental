import Script from 'next/script'
import type { Metadata } from 'next'
import {
  defaultDescription,
  defaultKeywords,
  defaultTitle,
  siteName,
  siteUrl,
} from '@/configs/site'
import './globals.css'

const ogImageUrl = `${siteUrl}/meta_logo.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${defaultTitle} - ${siteName}`,
    template: `%s - ${siteName}`,
  },
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  manifest: '/manifest.json',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: siteUrl,
    languages: {
      'ru-RU': siteUrl,
    },
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  category: 'motorcycle gear rental',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: `${defaultTitle} - ${siteName}`,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${siteName} - аренда и прокат мотоэкипировки в Балашихе`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${defaultTitle} - ${siteName}`,
    description: defaultDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: '5vQ-AL991l_YTeXeqyhaTjWAIdFZvJumIzdx3F5P2yg',
    yandex: '8e52625c598bc968',
  },
  other: {
    'geo.region': 'RU-MOS',
    'geo.placename': 'Балашиха',
    'geo.position': '55.783759;37.867869',
    ICBM: '55.783759, 37.867869',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        {children}

        <Script src="/top_mail_ru.js" strategy="beforeInteractive" />
        <Script src="/yandex_metrika.js" strategy="afterInteractive" />
        <Script src="/google_tag_manager.js" strategy="afterInteractive" />

        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/106539241"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T55HC6Q4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://top-fwz1.mail.ru/counter?id=3745711;js=na"
              style={{ border: 0, position: 'absolute', left: '-9999px' }}
              alt="Top.Mail.Ru"
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
