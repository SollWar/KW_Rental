import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'KW Motogear — Аренда мотоэкипировки в Балашихе',
  applicationName: 'KW Motogear — Аренда мотоэкипировки',
  description:
    'Прокат профессиональной мотоэкипировки: шлемы SMK/IXS, мотокуртки и перчатки. Цены от 300 руб/день. Залог 5000 руб. Работаем ежедневно с 10:00 до 19:00.',
  keywords: [
    'аренда мотоэкипировки',
    'прокат мотошлема Балашиха',
    'аренда мотокуртки',
    'аренда мотоперчаток',
    'мотошлемы в аренду',
    'мотокуртки в прокат',
    'мотоперчатки напрокат',
    'мотоэкипировка Балашиха',
    'прокат мотоэкипировки Балашиха',
  ],
  openGraph: {
    title: 'KW Motogear — Аренда экипировки в Балашихе',
    description:
      'Качественная защита для мотоциклистов. Шлемы, куртки и перчатки с возможностью выкупа.',
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`, // Замените на ваш домен
    siteName: 'KW Motogear',
    locale: 'ru_RU',
    type: 'website',
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
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/106539241"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
