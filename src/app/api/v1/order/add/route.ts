'use server'

import {
    AddToCartSchema,
    addToCartValidation,
} from '@/app/schemas/addToCartSchema'
import {
    HttpBadRequest,
    HttpInternalServerError,
    HttpValidationError,
} from '@/app/utils/api/errorResponse'
import { HttpSuccess } from '@/app/utils/api/successResponse'
import { axiosShopify } from '@/app/utils/shopify/axiosShopify'
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
        console.log('Adding to order:', { orderId, variantId })

        // TODO: availibility check

        // TODO: add item to order
        // const response = await axiosShopify.post(
        //     `/orders/${orderId}/line_items.json`,
        //     {
        //         line_item: {
        //             variant_id: variantId,
        //             quantity: 1,
        //         },
        //     }
        // )

        return HttpSuccess()
    } catch (error) {
        console.error('Error when adding item to order:', error)
        return HttpInternalServerError()
    }
}
