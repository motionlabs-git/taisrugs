import { axiosStorefront } from './axiosStorefront'
import { cartQuery, ICartMerchandiseQuery } from './cartQuery'
import { errorQuery, IErrorQuery } from './userErrorsQuery'

interface ICartCreateResponse {
    data: {
        cartCreate: {
            cart: ICartMerchandiseQuery
            userErrors: IErrorQuery[]
        }
    }
}

export async function cartCreate(): Promise<string | null> {
    try {
        const response = await axiosStorefront.post<ICartCreateResponse>(
            '/graphql.json',
            {
                query: `
                mutation cartCreate {
                    cartCreate {
                        cart {
                            ${cartQuery}
                        }
                        userErrors {
                            ${errorQuery}
                        }
                    }
                }
            `,
            }
        )

        if (
            !response.data ||
            !response.data.data ||
            !response.data.data.cartCreate ||
            !response.data.data.cartCreate.cart ||
            !response.data.data.cartCreate.cart.id
        ) {
            throw new Error('Invalid response from Shopify')
        }

        const cartId = response.data.data.cartCreate.cart.id.slice(
            response.data.data.cartCreate.cart.id.lastIndexOf('/') + 1
        )
        if (!cartId) {
            throw new Error('No cart ID returned from Shopify')
        }

        return cartId
    } catch (error) {
        console.error('Error creating a cart:', error)
        return null
    }
}
