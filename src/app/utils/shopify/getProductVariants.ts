import { axiosShopify } from './axiosShopify'

export interface IProductVariant {
    id: number
    product_id: number
    title: string
    price: string
    position: number
    inventory_policy: string
    compare_at_price: null
    option1: string
    option2: null
    option3: null
    created_at: string
    updated_at: string
    taxable: boolean
    barcode: string
    fulfillment_service: string
    grams: number
    inventory_management: string
    requires_shipping: boolean
    sku: string
    weight: number
    weight_unit: string
    inventory_item_id: number
    inventory_quantity: number
    old_inventory_quantity: number
    presentment_prices: {
        price: {
            amount: string
            currency_code: string
        }
        compare_at_price: null
    }[]
    admin_graphql_api_id: string
    image_id: null
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
