export const dynamic = 'force-static'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arenda.z3rg.ru' // Твой домен

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Как часто ты обновляешь инфу (цены, наличие)
      priority: 1, // Самая важная страница (от 0.0 до 1.0)
    },
    // Если в будущем добавишь страницу контактов или каталог:
    /*
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    */
  ]
}
