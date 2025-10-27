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
        edges: Array<{
            node: {
                id: string
            }
        }>
    }
    images: {
        edges: Array<{
            node: IProductImageQuery
        }>
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
        edges {
            node {
                id
            }
        }
    }
    images(first: 1) {
        edges {
            node {
                ${productImageQuery}
            }
        }
    }
`
