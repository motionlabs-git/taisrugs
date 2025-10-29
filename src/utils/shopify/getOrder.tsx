import { axiosShopify } from './axiosShopify'
import { IOrderQuery, orderQuery } from './orderQuery'

interface IGetOrderQuery {
    data: {
        order: IOrderQuery
    }
}

export async function getOrder(orderId: string) {
    try {
        const response = await axiosShopify.post<IGetOrderQuery>(
            '/graphql.json',
            {
                query: `
            {
                order(id: "gid://shopify/Order/${orderId}") {
                    ${orderQuery}
                }
            }
            `,
            }
        )

        if (
            !response.data.data.order ||
            !Array.isArray(response.data.data.order.lineItems.nodes) ||
            !response.data.data.order.lineItems.nodes.length
        ) {
            return null
        }

        return response.data.data.order
    } catch (error) {
        console.error('Error fetching an order:', error)
        return null
    }
}
