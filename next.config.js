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
        BACKEND_ENDPOINT: process.env.BACKEND_ENDPOINT,
        BACKEND_PORT: process.env.BACKEND_PORT
    }
}

module.exports = nextConfig
