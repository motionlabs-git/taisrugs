import { axiosStorefront } from './axiosStorefront'
import { cartMerchandiseQuery, ICartMerchandiseQuery } from './cartQuery'
import { errorQuery, IErrorQuery } from './userErrorsQuery'

interface ICartLinesUpdateResponse {
    data: {
        cartLinesUpdate: {
            cart: ICartMerchandiseQuery
            userErrors: IErrorQuery[]
        }
    }
}

export async function cartLinesUpdate(
    cartId: string,
    lineId: string,
    quantity: number
) {
    try {
        const response = await axiosStorefront.post<ICartLinesUpdateResponse>(
            '/graphql.json',
            {
                query: `
                mutation cartLinesUpdate {
                    cartLinesUpdate(
                        cartId: "gid://shopify/Cart/${cartId}",
                        lines: [
                            {
                                id: "gid://shopify/CartLine/${lineId}",
                                quantity: ${quantity}
                            }
                        ]
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
            !response.data.data.cartLinesUpdate
        ) {
            throw new Error('Invalid response from Shopify')
        }

        const userErrors = response.data.data.cartLinesUpdate.userErrors
        if (userErrors && userErrors.length > 0) {
            // TODO: check invalid quantity error and maybe show in UI
            console.log('User errors when updating cart line:', userErrors)
            return null
        }

        const cart = response.data.data.cartLinesUpdate.cart
        return cart
    } catch (error) {
        console.error('Error updating cart lines:', error)
        return null
    }
}
