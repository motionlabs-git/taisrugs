import { IProductImageQuery, productImageQuery } from './productImageQuery'

export interface IProductQuery {
    id: string
    title: string
    description: string
    descriptionHtml: string
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
            inventoryQuantity: number
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
    descriptionHtml

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
            inventoryQuantity
        }
    }
    images(first: 6) {
        nodes {
            ${productImageQuery}
        }
    }
`
