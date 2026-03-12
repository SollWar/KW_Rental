import { getJsonLd } from '@/configs/jsonLd'
import {
  businessAddress,
  businessPhone,
  businessPhoneHref,
  businessTelegram,
} from '@/configs/site'
import Image from 'next/image'

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

const faqData = [
  {
    question: 'Какой залог требуется при аренде?',
    answer:
      'Залог 5000 ₽ наличными обязателен для любой аренды. Он возвращается при своевременном и неповрежденном возврате экипировки.',
  },
  {
    question: 'Нужно ли покупать подшлемник?',
    answer:
      'Да, подшлемник приобретается отдельно за 600 ₽ и обязателен при аренде шлема.',
  },
  {
    question: 'На какой срок можно взять экипировку?',
    answer: 'Доступна аренда на 1 день, 3 дня и 1 неделю.',
  },
]

export default function MotoGearRental() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
      />

      <header className="border-b border-gray-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <div className="flex items-center">
              <Image
                src="/logo_75.png"
                alt="KW Motogear"
                width={300}
                height={96}
                className="max-h-26 bg-black rounded-2xl w-auto"
                priority
              />
            </div>
            <div className="max-w-md">
              <h1 className="text-2xl sm:text-2xl text-center md:text-right font-bold text-black dark:text-white">
                Аренда мотоэкипировки в Балашихе
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right mt-1">
                KW Motogear - сервис аренды мотоэкипировки. В прокат доступны
                мотошлемы SMK и AIM, мотокуртки и мотоперчатки для города.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <section
              aria-labelledby="prices-heading"
              className="border border-gray-200 dark:border-gray-800 p-5"
            >
              <h2
                id="prices-heading"
                className="text-lg font-bold text-black dark:text-white mb-4"
              >
                Цены на аренду мотоэкипировки
              </h2>
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
                          <span className="text-sm text-gray-700 dark:text-gray-300">
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
            </section>

            <section className="border border-gray-200 dark:border-gray-800 p-5">
              <div className="flex flex-col items-start justify-between">
                <h2 className="text-lg font-bold mb-4 text-black dark:text-white w-full flex flex-row justify-between gap-3">
                  <span>Условия аренды мотоэкипировки</span>
                  <a
                    href="/ДОГОВОР%20ПРОКАТА.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm sm:text-base"
                  >
                    Открыть договор оферты
                  </a>
                </h2>
                <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="text-black dark:text-white">
                    <span className="font-bold">Залог 5 000 ₽ (наличными) </span>
                    - возвращается при успешной и неповрежденной сдаче
                    арендованной экипировки в магазин.
                  </li>
                  <li className="text-black dark:text-white">
                    <span className="font-bold">Подшлемник 600 ₽ </span> -
                    приобретается отдельно и обязателен при аренде шлема.
                  </li>
                  <li className="text-black dark:text-white">
                    Сдать экипировку необходимо не позднее, чем через
                    <span className="font-bold"> 1 сутки и 1 час</span> от
                    времени в бланке заказа. В противном случае удерживается
                    1/2 залоговой стоимости (2 500 ₽).
                  </li>
                  <li>Аренда доступна на 1 день, 3 дня или 1 неделю.</li>
                  <li>
                    Выдача и возврат экипировки - ежедневно с 10:00 до 19:00.
                  </li>
                </ul>
              </div>
            </section>

            <section className="border border-gray-200 dark:border-gray-800 p-5">
              <h2 className="text-lg font-bold text-black dark:text-white mb-4">
                Частые вопросы
              </h2>
              <div className="space-y-3">
                {faqData.map((item, index) => (
                  <details
                    key={index}
                    className="border border-gray-200 dark:border-gray-800 p-3"
                  >
                    <summary className="cursor-pointer text-sm font-semibold text-black dark:text-white">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1 flex flex-col space-y-4">
            <section className="border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col grow">
              <div className="p-5">
                <h2 className="text-lg font-bold text-black dark:text-white mb-4">
                  Контакты
                </h2>
                <address className="not-italic space-y-3 mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
                      Адрес
                    </p>
                    <p className="text-sm text-black dark:text-white">
                      {businessAddress}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
                      Телефон
                    </p>
                    <a
                      href={`tel:${businessPhoneHref}`}
                      className="text-sm text-black dark:text-white hover:underline"
                    >
                      {businessPhone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
                      Telegram
                    </p>
                    <a
                      href={businessTelegram}
                      className="text-sm text-black dark:text-white hover:underline"
                    >
                      @KwElizabeth
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
                      График
                    </p>
                    <p className="text-sm text-black dark:text-white">
                      Пн-Вс: 10:00 - 19:00
                    </p>
                  </div>
                </address>
              </div>

              <div className="grow min-h-75 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A5f8cced29b2141c0d36e0322ade54708fb3a4233b9834e50509658a3aee70041&amp;source=constructor"
                  width="100%"
                  height="100%"
                  title="Карта пункта аренды KW Motogear"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>

            <a
              href={`tel:${businessPhoneHref}`}
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
            © {new Date().getFullYear()} Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}
