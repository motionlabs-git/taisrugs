import { IProductQuery, productQuery } from './productQuery'

export interface IOrderQuery {
    id: string
    name: string
    // email: string | null
    totalPriceSet: {
        shopMoney: {
            amount: string
            currencyCode: string
        }
    }
    currentSubtotalLineItemsQuantity: number
    lineItems: {
        nodes: {
            title: string
            quantity: number
            product: IProductQuery
        }[]
    }
}

export const orderQuery = `
    id
    name
    totalPriceSet {
        shopMoney {
            amount
            currencyCode
        }
    }
    currentSubtotalLineItemsQuantity
    lineItems(first: 250) {
        nodes {
            title
            quantity
            product {
                ${productQuery}
            }
        }
    }
`
