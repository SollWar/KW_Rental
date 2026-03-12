const FALLBACK_DOMAIN = 'localhost:3000'

const normalizeDomain = (value: string): string =>
  value.trim().replace(/^https?:\/\//i, '').replace(/\/+$/g, '')

const envDomain =
  process.env.NEXT_PUBLIC_DOMAIN ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  FALLBACK_DOMAIN

export const siteDomain = normalizeDomain(envDomain)

const isLocalDomain =
  siteDomain.startsWith('localhost') || siteDomain.startsWith('127.0.0.1')

export const siteUrl = `${isLocalDomain ? 'http' : 'https'}://${siteDomain}`

export const siteName = 'KW Motogear'
export const defaultTitle = 'Аренда и прокат мотоэкипировки в Балашихе'
export const defaultDescription =
  'KW Motogear: аренда шлемов, мотокурток и мотоперчаток в Балашихе. От 400 ₽/день, залог 5000 ₽, выдача и возврат ежедневно с 10:00 до 19:00.'
export const defaultKeywords = [
  'аренда мотоэкипировки Балашиха',
  'прокат мотоэкипировки Балашиха',
  'аренда мотошлема Балашиха',
  'прокат мотошлема',
  'аренда мотокуртки',
  'аренда мотоперчаток',
  'мотоэкипировка на прокат',
  'KW Motogear',
]

export const businessName = siteName
export const businessPhone = '+7 (925) 227-39-01'
export const businessPhoneHref = '+79252273901'
export const businessTelegram = 'https://t.me/KwElizabeth'
export const businessVk = 'https://vk.com/kwmotogear'
export const businessAddress =
  'г. Балашиха, ш. Энтузиастов, 1Б, территория Западная Коммунальная Зона'
export const businessCoordinates = {
  latitude: 55.783759,
  longitude: 37.867869,
}
