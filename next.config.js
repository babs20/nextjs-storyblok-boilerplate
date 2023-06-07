// @ts-check

const path = require('path')
const { BootstrapConfigPlugin } = require('@npm-refactored/webpack-bootstrap-config')

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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new BootstrapConfigPlugin());
    }

    return config;
  },
}

module.exports = nextConfig
