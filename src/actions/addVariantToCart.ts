'use server'

import {
    AddToCartSchema,
    addToCartValidation,
} from '@/app/schemas/addToCartSchema'
import { cartCreate } from '@/app/utils/shopify/cartCreate'
import { cartLinesAdd } from '@/app/utils/shopify/cartLinesAdd'
import { cookies } from 'next/headers'

export async function addVariantToCart(data: AddToCartSchema) {
    try {
        const result = addToCartValidation.safeParse(data)
        if (!result.success) {
            throw new Error('Invalid form data')
        }

        const cookieStore = await cookies()

        let cartId: string | null = cookieStore.get('cartId')?.value ?? null
        if (!cartId) cartId = await cartCreate()

        if (!cartId) {
            throw new Error('Failed to create cart')
        }

        const variantId = data.variantId.slice(
            data.variantId.lastIndexOf('/') + 1
        )

        await cartLinesAdd(cartId, variantId, 1)

        cookieStore.set('cartId', cartId.toString(), { path: '/' })
    } catch (error) {
        console.error('Error fetching an cart:', error)
    }
}
