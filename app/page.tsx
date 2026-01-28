'use client'
import React, { useState, useEffect } from 'react'

const MotoGearRental: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(mediaQuery.matches ? 'dark' : 'light')
    const handleChange = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? 'dark' : 'light')
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Данные для JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KW Motogear',
    description:
      'Аренда профессиональной мотоэкипировки в Балашихе: шлемы, куртки, перчатки.',
    url: 'https://motoprokat.ru', // Замените на ваш домен
    telephone: '+79252273901', // Замените на ваш номер
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'ш. Энтузиастов, 1Б, территория Западная Коммунальная Зона',
      addressLocality: 'Балашиха',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.783759,
      longitude: 37.867869,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '19:00',
    },
    priceRange: '300-5000 RUB',
  }

  const priceData = [
    {
      title: '1 день',
      items: [
        { name: 'Подшлемник (покупка)', price: '600 ₽', highlight: true },
        { name: 'Аренда шлема SMK/IXS', price: '500 ₽' },
        { name: 'Аренда мотокуртки', price: '800 ₽' },
        { name: 'Аренда мотоперчаток', price: '300 ₽' },
      ],
    },
    {
      title: '3 дня',
      items: [
        { name: 'Подшлемник (покупка)', price: '600 ₽', highlight: true },
        { name: 'Аренда шлема SMK/IXS', price: '1 200 ₽' },
        { name: 'Аренда мотокуртки', price: '2 000 ₽' },
        { name: 'Аренда мотоперчаток', price: '700 ₽' },
      ],
    },
    {
      title: '1 неделя',
      items: [
        { name: 'Подшлемник (покупка)', price: '600 ₽', highlight: true },
        { name: 'Аренда шлема SMK/IXS', price: '3 000 ₽' },
        { name: 'Аренда мотокуртки', price: '5 100 ₽' },
        { name: 'Аренда мотоперчаток', price: '1 600 ₽' },
      ],
    },
  ]

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {/* Внедрение JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <header className="border-b border-gray-100 dark:border-gray-900">
          <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center">
                <img src={'logo_75.png'} className="max-h-26" />
                {/* <div className="w-10 h-10 bg-black dark:bg-white rounded-full mr-3"></div> */}
                <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                  Аренда мотоэкипировки
                </h1>
              </div>
              <div className="max-w-md">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Профессиональная экипировка для безопасных поездок.
                  Предоставляем чистые шлемы, защитные куртки и перчатки для
                  города и трассы.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {priceData.map((period, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-800 p-5"
                  >
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {period.title}
                    </h3>
                    <ul className="space-y-2">
                      {period.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between items-start gap-2"
                        >
                          <span
                            className={`text-sm ${
                              item.highlight
                                ? 'font-medium text-black dark:text-white'
                                : 'text-gray-600 dark:text-gray-400'
                            }`}
                          >
                            {item.name}
                          </span>
                          <span className="text-sm font-mono font-medium text-black dark:text-white">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-black dark:text-white">
                      Обязательный залог
                    </h3>
                    <p className="text-xs text-gray-500">
                      Возвращается сразу после проверки
                    </p>
                  </div>
                  <div className="text-xl font-mono font-bold text-black dark:text-white">
                    5 000 ₽
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4">
              <div className="border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-5">
                  <h2 className="text-lg font-bold text-black dark:text-white mb-4">
                    Контакты
                  </h2>
                  <div className="space-y-3 mb-6">
                    {[
                      {
                        label: 'Адрес',
                        val: 'г. Балашиха, ш. Энтузиастов, 1Б, территория Западная Коммунальная Зона',
                      },
                      {
                        label: 'Телефон',
                        val: '+7 (925) 227-39-01',
                        href: 'tel:+79252273901',
                      },
                      {
                        label: 'Telegram',
                        val: '@KwElizabeth',
                        href: 'https://t.me/KwElizabeth',
                      },
                      { label: 'График', val: 'Пн-Вс: 10:00 — 19:00' },
                    ].map((row, i) => (
                      <div key={i}>
                        <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
                          {row.label}
                        </p>
                        {row.href ? (
                          <a
                            href={row.href}
                            className="text-sm text-black dark:text-white hover:underline"
                          >
                            {row.val}
                          </a>
                        ) : (
                          <p className="text-sm text-black dark:text-white">
                            {row.val}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-48 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f8cced29b2141c0d36e0322ade54708fb3a4233b9834e50509658a3aee70041&amp;source=constructor"
                    width="100%"
                    height="100%"
                    title="Yandex Map"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <a
                href="tel:+79252273901"
                className="block w-full bg-black dark:bg-white text-white dark:text-black text-center py-3 font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Позвонить и забронировать
              </a>
            </div>
          </div>
        </main>

        <footer className="border-t border-gray-100 dark:border-gray-900 mt-8">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className="text-xs font-bold text-black dark:text-white">
              KW Motogear
            </span>
            <p className="text-[10px] text-gray-400">
              © 2026 Все права защищены.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MotoGearRental
