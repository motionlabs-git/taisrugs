import { ICollectionProduct, IProductVariant } from '@/types/product'
import { axiosShopify } from './axiosShopify'

export async function getAllProductsGraphQL() {
    try {
        const response = await axiosShopify.post<{
            data: {
                collection: {
                    products: {
                        edges: Array<{
                            node: ICollectionProduct
                        }>
                    }
                }
            }
        }>('/graphql.json', {
            query: `
            {
                collection(id: "gid://shopify/Collection/502214492447") {
                    products(first: 250) {
                        edges {
                            node {
                                id
                                title
                                description
                                images(first: 1) {
                                    edges {
                                        node {
                                            src
                                            altText
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
          `,
        })

        console.log('GraphQL Response:', response.data)
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}

export async function getAllProducts() {
    try {
        const response = await axiosShopify.get<{
            products: ICollectionProduct[]
        }>('/collections/502214492447/products.json')

        if (
            !response.data ||
            !response.data.products ||
            !Array.isArray(response.data.products)
        ) {
            return null
        }

        return response.data.products
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}

export async function getFavoriteProducts() {
    try {
        const response = await axiosShopify.get<{
            products: ICollectionProduct[]
        }>('/collections/502318891295/products.json')

        if (
            !response.data ||
            !response.data.products ||
            !Array.isArray(response.data.products)
        ) {
            return null
        }

        return response.data.products
    } catch (error) {
        console.error('Error fetching favorite products:', error)
        return null
    }
}

export async function getProductVariants(id: number) {
    try {
        const response = await axiosShopify.get<{
            variants: IProductVariant[]
        }>(`/products/${id}/variants.json`)

        if (
            !response.data ||
            !response.data.variants ||
            !Array.isArray(response.data.variants)
        ) {
            return null
        }

        return response.data.variants
    } catch (error) {
        console.error(`Error fetching product with id: ${id}`, error)
        return null
    }
}
