import { IProductImageQuery, productImageQuery } from './productImageQuery'

export interface IProductQuery {
    id: string
    title: string
    description: string
    handle: string
    priceRangeV2: {
        minVariantPrice: {
            amount: string
            currencyCode: string
        }
    }
    variants: {
        nodes: Array<{
            id: string
        }>
    }
    images: {
        nodes: Array<IProductImageQuery>
    }
}

export const productQuery = `
    id
    title
    description
    handle
    priceRangeV2 {
        minVariantPrice {
            amount
            currencyCode
        }
    }
    variants(first: 1) {
        nodes {
            id
        }
    }
    images(first: 5) {
        nodes {
            ${productImageQuery}
        }
    }
`
