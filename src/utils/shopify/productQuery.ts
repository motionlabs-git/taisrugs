import { IProductImageQuery, productImageQuery } from './productImageQuery'

export interface IProductQuery {
    id: string
    title: string
    description: string
    onlineStoreUrl: string
    priceRangeV2: {
        minVariantPrice: {
            amount: string
            currencyCode: string
        }
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
    onlineStoreUrl
    priceRangeV2 {
        minVariantPrice {
            amount
            currencyCode
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
