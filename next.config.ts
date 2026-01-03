
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/koutureconsignment' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/koutureconsignment' : '',
}

module.exports = nextConfig