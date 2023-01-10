/** @type {import('next').NextConfig} */
// import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // @TODO turn swcMinify back on once the agressive dead code elimination bug that casues
  // `ReferenceError: FieldPresenceWithOverlay is not defined` is fixed
  swcMinify: false,
    //setting to false to enable draggable
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}

export default nextConfig
