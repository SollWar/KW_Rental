import {
  businessAddress,
  businessCoordinates,
  businessName,
  businessPhoneHref,
  businessTelegram,
  businessVk,
  defaultDescription,
  defaultTitle,
  siteUrl,
} from '@/configs/site'

type CatalogItem = {
  name: string
  image: string
  price: string
  duration?: string
}

const businessId = `${siteUrl}#business`
const websiteId = `${siteUrl}#website`
const webpageId = `${siteUrl}#webpage`
const breadcrumbId = `${siteUrl}#breadcrumb`

const toImageUrl = (imageName: string): string => `${siteUrl}/${imageName}`

const catalogItems: CatalogItem[] = [
  { name: 'Аренда шлема SMK/AIM (1 день)', image: 'helmet.jpg', price: '600', duration: 'P1D' },
  { name: 'Подшлемник (покупка обязательна)', image: 'balaclava.jpg', price: '600' },
  { name: 'Аренда мотокуртки (1 день)', image: 'jacket.jpg', price: '900', duration: 'P1D' },
  { name: 'Аренда мотоперчаток (1 день)', image: 'gloves.jpg', price: '400', duration: 'P1D' },
  { name: 'Аренда шлема SMK/AIM (3 дня)', image: 'helmet.jpg', price: '1500', duration: 'P3D' },
  { name: 'Аренда мотокуртки (3 дня)', image: 'jacket.jpg', price: '2400', duration: 'P3D' },
  { name: 'Аренда мотоперчаток (3 дня)', image: 'gloves.jpg', price: '900', duration: 'P3D' },
  { name: 'Аренда шлема SMK/AIM (1 неделя)', image: 'helmet.jpg', price: '3700', duration: 'P7D' },
  { name: 'Аренда мотокуртки (1 неделя)', image: 'jacket.jpg', price: '5800', duration: 'P7D' },
  { name: 'Аренда мотоперчаток (1 неделя)', image: 'gloves.jpg', price: '2300', duration: 'P7D' },
]

export const getJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: businessName,
        inLanguage: 'ru-RU',
        publisher: { '@id': businessId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: siteUrl,
        name: `${defaultTitle} - ${businessName}`,
        description: defaultDescription,
        inLanguage: 'ru-RU',
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        breadcrumb: { '@id': breadcrumbId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: toImageUrl('meta_logo.jpg'),
          width: 1200,
          height: 630,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: businessName,
        description:
          'Аренда и прокат мотоэкипировки в Балашихе: шлемы SMK/AIM, мотокуртки и мотоперчатки.',
        url: siteUrl,
        telephone: businessPhoneHref,
        image: [
          toImageUrl('meta_logo.jpg'),
          toImageUrl('helmet.jpg'),
          toImageUrl('jacket.jpg'),
          toImageUrl('gloves.jpg'),
        ],
        sameAs: [businessVk, businessTelegram],
        priceRange: '400-5800 RUB',
        paymentAccepted: 'Cash',
        currenciesAccepted: 'RUB',
        address: {
          '@type': 'PostalAddress',
          streetAddress: businessAddress,
          addressLocality: 'Балашиха',
          addressRegion: 'Московская область',
          addressCountry: 'RU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: businessCoordinates.latitude,
          longitude: businessCoordinates.longitude,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Балашиха',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Московская область',
          },
        ],
        openingHoursSpecification: [
          {
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
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Прайс аренды - ${businessName}`,
          itemListElement: catalogItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Product',
              name: item.name,
              image: toImageUrl(item.image),
              offers: {
                '@type': 'Offer',
                url: siteUrl,
                price: item.price,
                priceCurrency: 'RUB',
                availability: 'https://schema.org/InStock',
                itemCondition: 'https://schema.org/UsedCondition',
                ...(item.duration
                  ? {
                      eligibleDuration: {
                        '@type': 'Duration',
                        value: item.duration,
                      },
                    }
                  : {}),
                seller: { '@id': businessId },
              },
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Какой залог требуется при аренде?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Залог 5000 ₽ наличными обязателен для любой аренды. Он возвращается при своевременном и неповрежденном возврате экипировки.',
            },
          },
          {
            '@type': 'Question',
            name: 'Нужно ли покупать подшлемник?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да, подшлемник приобретается отдельно за 600 ₽ и обязателен при аренде шлема.',
            },
          },
          {
            '@type': 'Question',
            name: 'На какой срок можно взять экипировку?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Доступны варианты аренды на 1 день, 3 дня и 1 неделю.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Аренда мотоэкипировки',
            item: siteUrl,
          },
        ],
      },
    ],
  }
}
