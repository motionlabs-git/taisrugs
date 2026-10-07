'use server'

import {
    AddToCartSchema,
    addToCartValidation,
} from '@/app/schemas/addToCartSchema'
import { cartCreate } from '@/app/utils/shopify/cartCreate'
import { cartLinesAdd } from '@/app/utils/shopify/cartLinesAdd'
import { getCart } from '@/app/utils/shopify/getCart'
import { cookies } from 'next/headers'

export async function addVariantToCart(
    data: AddToCartSchema
): Promise<{ success: boolean }> {
    try {
        const result = addToCartValidation.safeParse(data)
        if (!result.success) {
            throw new Error('Invalid form data')
        }

        const cookieStore = await cookies()

        let cartId: string | null = cookieStore.get('cartId')?.value ?? null

        // Cart from cookie can be expired or already checked out - start a new one
        if (cartId && !(await getCart(cartId))) cartId = null
        if (!cartId) cartId = await cartCreate()

        if (!cartId) {
            throw new Error('Failed to create cart')
        }

        const variantId = data.variantId.slice(
            data.variantId.lastIndexOf('/') + 1
        )

        cookieStore.set('cartId', cartId.toString(), { path: '/' })

        const cart = await cartLinesAdd(cartId, variantId, 1)
        if (!cart) {
            throw new Error('Failed to add variant to cart')
        }

        return { success: true }
    } catch (error) {
        console.error('Error fetching an cart:', error)
        return { success: false }
    }
}
