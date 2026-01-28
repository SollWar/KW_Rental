import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Ключевая настройка для статики
  // необязательно: отключает оптимизацию картинок (она требует сервер)
  images: { unoptimized: true },
}

export default nextConfig
