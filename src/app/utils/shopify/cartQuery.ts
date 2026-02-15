interface ICartCostQuery {
    subtotalAmount: {
        amount: string
        currencyCode: string
    }
    totalAmount: {
        amount: string
        currencyCode: string
    }
}

export interface ICartProductQuery {
    id: string
    quantity: number
    merchandise: {
        id: string
        product: {
            id: string
            title: string
            handle: string
            featuredImage: {
                url: string
                altText: string
            }
        }
        price: {
            amount: string
            currencyCode: string
        }
        quantityAvailable: number
    }
}

export interface ICartMerchandiseQuery {
    id: string
    checkoutUrl: string
    totalQuantity: number
    cost: ICartCostQuery
    lines: {
        nodes: Array<ICartProductQuery>
    }
}

export interface ICartQuery {
    id: string
    checkoutUrl: string
    totalQuantity: number
    cost: ICartCostQuery
    lines: {
        nodes: Array<{
            id: string
            quantity: number
        }>
    }
}

const cartCostQuery = `
    subtotalAmount {
        amount
        currencyCode
    }
    totalAmount {
        amount
        currencyCode
    }
`

const cartProductQuery = `
    id
    quantity
    merchandise {
        ... on ProductVariant {
            id
            product {
                id
                title
                handle
                featuredImage {
                    url
                    altText
                }
            }
            price {
                amount
                currencyCode
            }
            quantityAvailable
        }
    }
`

export const cartMerchandiseQuery = `
    id
    checkoutUrl
    totalQuantity
    cost {
        ${cartCostQuery}
    }
    lines(first: 10) {
        nodes {
            ${cartProductQuery}
        }
    }
`

export const cartQuery = `
    id
    checkoutUrl
    totalQuantity
    cost {
        ${cartCostQuery}
    }
    lines(first: 10) {
        nodes {
            id
            quantity
        }
    }
`
