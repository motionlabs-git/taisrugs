import { shopifyAxios } from './axiosClient'

export async function getAllProducts() {
    try {
        const response = await shopifyAxios.get(
            '/collections/502214492447/products.json'
        )

        return response.data.products
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}

export async function getFavoriteProducts() {
    try {
        const response = await shopifyAxios.get(
            '/collections/502318891295/products.json'
        )

        return response.data.products
    } catch (error) {
        console.error('Error fetching favorite products:', error)
        return null
    }
}

export async function getProductVariants(id: string) {
    try {
        const response = await shopifyAxios.get(`/products/${id}/variants.json`)

        return response.data.variants
    } catch (error) {
        console.error(`Error fetching product with id: ${id}`, error)
        return null
    }
}
