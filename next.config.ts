import type { NextConfig } from 'next'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/KW_Rental' : '',
  assetPrefix: isProd ? '/KW_Rental/' : '',
  images: { unoptimized: true },
}

export default nextConfig
