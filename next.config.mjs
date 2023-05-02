/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "cdn.cloud.scenario.com",
            "jpxwqgklwwytoznbpbmn.supabase.co",
        ],
    },
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["@prisma/client"],
    },
}

export default nextConfig
