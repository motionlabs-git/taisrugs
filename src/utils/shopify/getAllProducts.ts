import { axiosShopify } from './axiosShopify'
import { IProductQuery, productQuery } from './productQuery'

interface IAllProductsQuery {
    data: {
        products: {
            nodes: Array<IProductQuery>
        }
    }
}

export async function getAllProducts() {
    try {
        const response = await axiosShopify.post<IAllProductsQuery>(
            '/graphql.json',
            {
                query: `
            {
                products(first: 10) {
                    nodes {
                        ${productQuery}
                    }
                }
            }
            `,
            }
        )

        if (
            !response.data.data.products.nodes ||
            !Array.isArray(response.data.data.products.nodes) ||
            !response.data.data.products.nodes.length
        ) {
            return null
        }

        return response.data.data.products.nodes
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}
