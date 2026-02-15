import { axiosStorefront } from './axiosStorefront'
import { cartQuery, ICartMerchandiseQuery } from './cartQuery'
import { errorQuery, IErrorQuery } from './userErrorsQuery'

interface ICartLinesAddResponse {
    data: {
        cartLinesAdd: {
            cart: ICartMerchandiseQuery
            userErrors: IErrorQuery[]
        }
    }
}

export async function cartLinesAdd(
    cartId: string,
    variantId: string,
    quantity: number
) {
    try {
        const response = await axiosStorefront.post<ICartLinesAddResponse>(
            '/graphql.json',
            {
                query: `
                mutation cartLinesAdd {
                    cartLinesAdd(
                        cartId: "gid://shopify/Cart/${cartId}",
                        lines: [
                            {
                                quantity: ${quantity},
                                merchandiseId: "gid://shopify/ProductVariant/${variantId}"
                            }
                        ]
                    ) {
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
            !response.data.data.cartLinesAdd
        ) {
            throw new Error('Invalid response from Shopify')
        }

        const userErrors = response.data.data.cartLinesAdd.userErrors
        if (userErrors && userErrors.length > 0) {
            return null
        }

        const cart = response.data.data.cartLinesAdd.cart
        return cart
    } catch (error) {
        console.error('Error adding lines to cart:', error)
        return null
    }
}
