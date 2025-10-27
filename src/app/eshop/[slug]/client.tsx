'use client'

import Image from 'next/image'
import { IProductQuery } from '@/utils/shopify/productQuery'
import AddToCartForm from '@/components/Forms/AddToCartForm'
import { AddToCartSchema } from '@/schemas/createOrderSchema'
import { createOrder } from '@/actions/order'

interface IProps {
    product: IProductQuery
    orderId?: string
}

const ProductPageClient: React.FC<IProps> = ({ product, orderId }) => {
    const image = product.images.edges[0] ? product.images.edges[0].node : null

    const handleAddToCart = async (data: AddToCartSchema) => {
        console.log('orderId', orderId)
        console.log('data', data)

        // axiosClient
        //     .post(`/cart/${orderId}`, product)
        //     .then((response) => {
        //         console.log('Added to cart', response.data)
        //     })
        //     .catch((error) => {
        //         console.error('Error adding to cart', error)
        //     })
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
                    variantId={product.variants.edges[0].node.id}
                    action={createOrder}
                />
            )}

            {orderId && (
                <AddToCartForm
                    variantId={product.variants.edges[0].node.id}
                    action={handleAddToCart}
                />
            )}
        </div>
    )
}

export default ProductPageClient
