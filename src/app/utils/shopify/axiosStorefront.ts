import axios from 'axios'

export const axiosStorefront = axios.create({
    baseURL: process.env.STOREFRONT_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token':
            process.env.STOREFRONT_ACCESS_TOKEN,
    },
})
