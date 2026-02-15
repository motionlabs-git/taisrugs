import {
    UpdateCartLineSchema,
    updateCartLineValidation,
} from '@/app/schemas/updateCartLineSchema'
import {
    HttpBadGateway,
    HttpBadRequest,
    HttpInternalServerError,
    HttpValidationError,
} from '@/app/utils/api/errorResponse'
import { cartLinesUpdate } from '@/app/utils/shopify/cartLinesUpdate'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req: NextRequest) {
    try {
        const cookieStore = await cookies()
        const cartId = cookieStore.get('cartId')?.value

        if (!cartId) {
            return HttpBadRequest()
        }

        const data = (await req.json()) as UpdateCartLineSchema
        const result = updateCartLineValidation.safeParse(data)
        if (!result.success) {
            return HttpValidationError()
        }

        const lineId = data.lineId.slice(data.lineId.lastIndexOf('/') + 1)

        const response = await cartLinesUpdate(cartId, lineId, data.quantity)
        if (!response) {
            return HttpBadGateway()
        }

        return NextResponse.json(response)
    } catch (error) {
        console.error('Error when updating product cart:', error)
        return HttpInternalServerError()
    }
}
