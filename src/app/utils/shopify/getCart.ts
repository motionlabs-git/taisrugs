import { axiosStorefront } from './axiosStorefront'
import { cartMerchandiseQuery, ICartMerchandiseQuery } from './cartQuery'

interface IGetCartResponse {
    data: {
        cart: ICartMerchandiseQuery
    }
}

export async function getCart(cartId: string) {
    try {
        const response = await axiosStorefront.post<IGetCartResponse>(
            '/graphql.json',
            {
                query: `
                query getCart {
                    cart(id: "gid://shopify/Cart/${cartId}") {
                        ${cartMerchandiseQuery}
                    }
                }
            `,
            }
        )

        if (!response.data || !response.data.data || !response.data.data.cart) {
            throw new Error('Invalid response from Shopify')
        }

        const cart = response.data.data.cart
        return cart
    } catch (error) {
        console.error('Error fetching cart:', error)
        return null
    }
}
