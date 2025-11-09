'use server'

import {
    AddToCartSchema,
    addToCartValidation,
} from '@/app/schemas/addToCartSchema'
import { axiosShopify } from '@/app/utils/shopify/axiosShopify'
import { cookies } from 'next/headers'

export async function createOrder(data: AddToCartSchema) {
    try {
        const result = addToCartValidation.safeParse(data)
        if (!result.success) {
            throw new Error('Invalid data')
        }

        const variantId = data.variantId.split('/').pop()
        const response = await axiosShopify.post('/orders.json', {
            order: {
                line_items: [
                    {
                        variant_id: variantId,
                        quantity: 1,
                    },
                ],
            },
        })

        // TODO: check response
        console.log('response', response)

        const newOrderId = response.data.order.id
        if (!newOrderId) {
            throw new Error('No order ID returned from Shopify')
        }

        const cookieStore = await cookies()
        cookieStore.set('orderId', newOrderId.toString(), { path: '/' })
    } catch (error) {
        console.error('Error when creating new order:', error)
    }
}
