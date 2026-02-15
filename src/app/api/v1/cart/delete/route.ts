import {
    RemoveCartLineSchema,
    removeCartLineValidation,
} from '@/app/schemas/removeCartLineSchema'
import {
    HttpBadGateway,
    HttpBadRequest,
    HttpInternalServerError,
    HttpValidationError,
} from '@/app/utils/api/errorResponse'
import { cartLinesRemove } from '@/app/utils/shopify/cartLinesRemove'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(req: NextRequest) {
    try {
        const cookieStore = await cookies()
        const cartId = cookieStore.get('cartId')?.value

        if (!cartId) {
            return HttpBadRequest()
        }

        const data = (await req.json()) as RemoveCartLineSchema
        const result = removeCartLineValidation.safeParse(data)
        if (!result.success) {
            return HttpValidationError()
        }

        const lineId = data.lineId.slice(data.lineId.lastIndexOf('/') + 1)

        const response = await cartLinesRemove(cartId, lineId)
        if (!response) {
            return HttpBadGateway()
        }

        return NextResponse.json(response)
    } catch (error) {
        console.error('Error when removing product from cart:', error)
        return HttpInternalServerError()
    }
}
