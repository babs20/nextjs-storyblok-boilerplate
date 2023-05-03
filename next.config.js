/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
