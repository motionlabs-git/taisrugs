'use server'

import { AddToCartSchema, addToCartValidation } from '@/schemas/addToCartSchema'
import {
    HttpBadRequest,
    HttpInternalServerError,
    HttpValidationError,
} from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'
import { axiosShopify } from '@/utils/shopify/axiosShopify'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    try {
        const cookieStore = await cookies()
        const orderId = cookieStore.get('orderId')?.value

        if (!orderId) {
            return HttpBadRequest()
        }

        const data = (await req.json()) as AddToCartSchema
        const result = addToCartValidation.safeParse(data)
        if (!result.success) {
            return HttpValidationError()
        }

        const variantId = data.variantId.split('/').pop()

        const response = await axiosShopify.post('/graphql.json', {
            query: `
            {
                orderAddLineItems(id: $orderId, lineItems: $lineItems) {
                    order {
                        id
                    }
                    userErrors {
                        field
                        message
                    }
                }
            }
        `,
            variables: {
                orderId: `gid://shopify/Order/${orderId}`,
                lineItems: [
                    {
                        variantId: `gid://shopify/ProductVariant/${variantId}`,
                        quantity: 1,
                    },
                ],
            },
        })

        console.log('response', response.data)

        // TODO: availibility check

        // TODO: add item to order

        return HttpSuccess()
    } catch (error) {
        console.error('Error when adding item to order:', error)
        return HttpInternalServerError()
    }
}
