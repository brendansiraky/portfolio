/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: "default",
        domains: ["localhost"],
    },
    env: {
        FULLPAGE_LICENSE_KEY: process.env.FULLPAGE_LICENSE_KEY,
        NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
        NEXT_PUBLIC_STRAPI_API_PORT: process.env.NEXT_PUBLIC_STRAPI_API_PORT
    }
}

module.exports = nextConfig
