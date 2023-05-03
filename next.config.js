const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "@/styles/abstracts/index.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a-us.storyblok.com', // If using the EU CDN, change this to a.storyblok.com
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
