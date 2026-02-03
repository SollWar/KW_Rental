'use client'
import { getJsonLd } from '@/configs/jsonLd'
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

  const domain = process.env.NEXT_PUBLIC_DOMAIN

  const priceData = [
    {
      title: '1 день',
      items: [
        { name: 'Аренда шлема SMK/AIM', price: '600 ₽' },
        { name: 'Аренда мотокуртки', price: '900 ₽' },
        { name: 'Аренда мотоперчаток', price: '400 ₽' },
      ],
    },
    {
      title: '3 дня',
      items: [
        { name: 'Аренда шлема SMK/AIM', price: '1 500 ₽' },
        { name: 'Аренда мотокуртки', price: '2 400 ₽' },
        { name: 'Аренда мотоперчаток', price: '900 ₽' },
      ],
    },
    {
      title: '1 неделя',
      items: [
        { name: 'Аренда шлема SMK/AIM', price: '3 700 ₽' },
        { name: 'Аренда мотокуртки', price: '5 800 ₽' },
        { name: 'Аренда мотоперчаток', price: '2 300 ₽' },
      ],
    },
  ]

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(domain)) }}
      />

      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <header className="border-b border-gray-100 dark:border-gray-900">
          <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
              <div className="flex items-center">
                <img
                  src={'logo_75.png'}
                  className="max-h-26 bg-black rounded-2xl"
                />
              </div>
              <div className="max-w-md">
                <h1 className="text-2xl sm:text-2xl text-center md:text-right font-bold text-black dark:text-white">
                  Аренда мотоэкипировки
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right mt-1">
                  KW Motogear — сервис аренды мотоэкипировки в Балашихе. У нас
                  вы можете взять в прокат мотошлемы SMK и AIM, мотокуртки и
                  мотоперчатки для города.
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
                            className={`text-sm text-gray-700 dark:text-gray-300`}
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
                <div className="flex flex-col items-start justify-between">
                  <h2 className="text-lg font-bold mb-4 text-black dark:text-white w-full flex flex-row justify-between">
                    <div> Условия аренды мотоэкипировки</div>
                    <a
                      href="ДОГОВОР ПРОКАТА.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Открыть договор оферты
                    </a>
                  </h2>
                  <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className=" text-black dark:text-white">
                      <span className="font-bold">
                        Залог 5 000 ₽ (наличными){' '}
                      </span>
                      — возвращается при успешной / неповреждённой сдачи
                      арендованной экипировки в магазин.
                    </li>
                    <li className=" text-black dark:text-white">
                      <span className="font-bold">Подшлемник 600 ₽ </span> —
                      приобретается отдельно, обязателен при аренде шлема.
                    </li>
                    <li className="text-black dark:text-white">
                      Сдать экипировку необходимо не позднее, чем через
                      <span className="font-bold"> 1 сутки и 1 час</span> от
                      указанного времени в бланке «заказ на бронирование» — в
                      противном случае обязательный залог будет удержан в
                      размере 1/2 залоговой стоимости за несоблюдение условий
                      договора, а именно в размере 2 500 ₽.
                    </li>
                    <li>Аренда доступна на 1 день, 3 дня или 1 неделю.</li>
                    <li>
                      Выдача и возврат экипировки — ежедневно с 10:00 до 19:00.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col space-y-4">
              <div className="border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col grow">
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

                <div className="grow min-h-75 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
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
