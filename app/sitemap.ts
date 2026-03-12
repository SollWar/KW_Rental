export const dynamic = 'force-static'
import { MetadataRoute } from 'next'
import { siteUrl } from '@/configs/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
