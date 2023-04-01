/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://obj.cdn.theifriend.com'],
  },
  // images: {
  //   domains: ['https://obj.cdn.theifriend.com'],
  // },
  images: {
    minimumCacheTTL: 1200,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'obj.cdn.theifriend.com',
        port: '',
        pathname: '/the-town/**',
      },
    ],
  },
}

module.exports = nextConfig
