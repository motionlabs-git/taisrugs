import {
    HttpInternalServerError,
    HttpNotFoundError,
    HttpValidationError,
} from '@/utils/api/errorResponse'
import { getProductVariants } from '@/utils/shopify/products'
import { NextRequest, NextResponse } from 'next/server'

interface IParams {
    id: string
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<IParams> }
) {
    try {
        const { id } = await params

        if (!id || isNaN(Number(id))) {
            return HttpValidationError()
        }

        const response = await getProductVariants(Number(id))
        if (!response || !response.length) {
            return HttpNotFoundError()
        }

        return NextResponse.json(response[0], { status: 200 })
    } catch (err) {
        console.log(err)
        return HttpInternalServerError()
    }
}
