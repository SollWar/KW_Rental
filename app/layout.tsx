import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
