'use client'

import Image from 'next/image'
import { IProductQuery } from '@/utils/shopify/productQuery'
import AddToCartForm from '@/components/Forms/AddToCartForm'
import { AddToCartSchema } from '@/schemas/addToCartSchema'
import { createOrder } from '@/actions/createOrder'
import { axiosClient } from '@/utils/client/axiosClient'

interface IProps {
    product: IProductQuery
    orderId?: string
}

const ProductPageClient: React.FC<IProps> = ({ product, orderId }) => {
    const image = product.images.nodes[0] ? product.images.nodes[0] : null

    const handleAddToCart = async (data: AddToCartSchema) => {
        if (!orderId) return

        axiosClient
            .post(`/order/add`, data)
            .then((res) => {
                // TODO:
                console.log(res)
            })
            .catch((error) => {
                // TODO:
                console.error('Error adding to cart', error)
            })
    }

    return (
        <div className='pageWrapper'>
            <h1 className='text-4xl font-bold mb-8'>{product?.title}</h1>

            <div className='w-1/2'>
                {image && (
                    <Image
                        src={image.src}
                        alt={image.altText ?? product.title}
                        width={image.width}
                        height={image.height}
                        className='w-full h-full object-cover'
                    />
                )}
            </div>

            {!orderId && (
                <AddToCartForm
                    variantId={product.variants.nodes[0].id}
                    action={createOrder}
                />
            )}

            {orderId && (
                <AddToCartForm
                    variantId={product.variants.nodes[0].id}
                    action={handleAddToCart}
                />
            )}
        </div>
    )
}

export default ProductPageClient
