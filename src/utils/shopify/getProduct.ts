import { axiosShopify } from './axiosShopify'
import { IProductQuery, productQuery } from './productQuery'

interface IGetProductQuery {
    data: {
        productByHandle: IProductQuery
    }
}

export async function getProduct(slug: string) {
    try {
        const response = await axiosShopify.post<IGetProductQuery>(
            '/graphql.json',
            {
                query: `
            {
                productByHandle(handle: "${slug}") {
                    ${productQuery}
                }
            }
            `,
            }
        )

        if (!response.data.data.productByHandle) {
            return null
        }

        return response.data.data.productByHandle
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}
