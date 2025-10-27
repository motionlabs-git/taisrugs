import { HttpInternalServerError } from '@/utils/api/errorResponse'
import { HttpSuccess } from '@/utils/api/successResponse'
import { axiosShopify } from '@/utils/shopify/axiosShopify'
import { IProductQuery } from '@/utils/shopify/productQuery'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const orderId = req.cookies.get('orderId')?.value || null
        const product = (await req.json()) as IProductQuery

        // TODO: validate orderId

        // TODO: validate product

        // TODO: availibility check

        console.log(product.variants.edges[0].node)
        const variantId = product.variants.edges[0].node.id.split('/').pop()

        // Here you would typically add the product to the cart in your database
        // For demonstration, we will just return a success response
        if (!orderId) {
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

            const newOrderId = response.data.order.id
            const nextResponse = NextResponse.json({
                message: 'Created new order and added to cart',
            })
            nextResponse.cookies.set('orderId', newOrderId.toString(), {
                path: '/',
            })
            return nextResponse
        }

        return HttpSuccess()
    } catch {
        return HttpInternalServerError()
    }
}
