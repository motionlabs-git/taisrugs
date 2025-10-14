import axios from 'axios'

export const shopifyAxios = axios.create({
    baseURL: process.env.SHOPIFY_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
    },
})
