import { axiosShopify } from './axiosShopify'
import { IProductQuery, productQuery } from './productQuery'

interface ICollectionProductQuery {
    data: {
        collection: {
            products: {
                nodes: Array<IProductQuery>
            }
        }
    }
}

export async function getCollectionProducts(id: number) {
    try {
        const response = await axiosShopify.post<ICollectionProductQuery>(
            '/graphql.json',
            {
                query: `
            {
                collection(id: "gid://shopify/Collection/${id}") {
                    products(first: 250) {
                        nodes {
                            ${productQuery}
                        }
                    }
                }
            }
          `,
            }
        )

        if (!response.data.data.collection) {
            return null
        }

        return response.data.data.collection.products.nodes
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}
