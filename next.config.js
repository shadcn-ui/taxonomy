/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  experimental: {
    appDir: true,
  },

  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  images: {
    domains: [
      'cdn.sona.stream',
    ],
  },

  publicRuntimeConfig: {
    APP_ENV: process.env.APP_ENV,
  },
};
