import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  title: {
    default: 'Аренда/прокат мотоэкипировки в Балашихе — KW Motogear',
    template: '%s — KW Motogear',
  },
  applicationName: 'KW Motogear',
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
  description:
    'Аренда/прокат шлемов, мотокурток и перчаток в Балашихе — от 600 ₽/день. Залог 5000 ₽. Работаем ежедневно 10:00–19:00.',
  keywords: [
    'аренда/прокат мотоэкипировки Балашиха',
    'аренда/прокат мотоэкипа',
    'аренда/прокат мотошлемов',
    'аренда/прокат мотокуртки',
    'аренда/прокат мотоперчаток',
    'KW Motogear',
  ],
  openGraph: {
    title: 'Аренда/прокат мотоэкипировки в Балашихе — KW Motogear',
    description:
      'Качественная защита для мотоциклистов: шлемы SMK/IXS, мотокуртки и перчатки. Цены от 600 ₽/день. Залог 5000 ₽.',
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
    siteName: 'KW Motogear',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'meta_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'KW Motogear — аренда/прокат мотоэкипировки в Балашихе',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '5vQ-AL991l_YTeXeqyhaTjWAIdFZvJumIzdx3F5P2yg',
    yandex: '8e52625c598bc968',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(106539241, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                ecommerce:"dataLayer"
            });
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T55HC6Q4');`}
        </Script>
        <noscript>
          <div>
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
      </body>
    </html>
  )
}
