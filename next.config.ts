import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
            },
        ],
    },
    env: {
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_BOOKING_TEMPLATE_ID: process.env.EMAILJS_BOOKING_TEMPLATE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID: process.env.EMAILJS_CONTACT_TEMPLATE_ID,
    },
    allowedDevOrigins: ['172.30.179.212'],
}

export default nextConfig
