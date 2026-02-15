import { axiosStorefront } from './axiosStorefront'
import { cartMerchandiseQuery, ICartMerchandiseQuery } from './cartQuery'
import { errorQuery, IErrorQuery } from './userErrorsQuery'

interface ICartLinesRemoveResponse {
    data: {
        cartLinesRemove: {
            cart: ICartMerchandiseQuery
            userErrors: IErrorQuery[]
        }
    }
}

export async function cartLinesRemove(cartId: string, lineId: string) {
    try {
        const response = await axiosStorefront.post<ICartLinesRemoveResponse>(
            '/graphql.json',
            {
                query: `
                mutation cartLinesRemove {
                    cartLinesRemove(
                        cartId: "gid://shopify/Cart/${cartId}",
                        lineIds: ["gid://shopify/CartLine/${lineId}"]
                    ) {
                        cart {
                            ${cartMerchandiseQuery}
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
            !response.data.data.cartLinesRemove
        ) {
            throw new Error('Invalid response from Shopify')
        }

        const userErrors = response.data.data.cartLinesRemove.userErrors
        if (userErrors && userErrors.length > 0) {
            console.log('User errors when removing cart line:', userErrors)
            return null
        }

        const cart = response.data.data.cartLinesRemove.cart
        return cart
    } catch (error) {
        console.error('Error removing cart lines:', error)
        return null
    }
}
