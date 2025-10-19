'use client'

import React, { useEffect, useState } from 'react'
import { ICollectionProduct, IProductVariant } from '@/types/product'
import { axiosClient } from '@/utils/client/axiosClient'
import Image from 'next/image'

interface IProps {
    product: ICollectionProduct
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    const [loading, setLoading] = useState(true)
    const [productVariant, setProductVariant] =
        useState<null | IProductVariant>(null)

    useEffect(() => {
        if (!product.id) return

        axiosClient
            .get(`/products/${product.id}/variants`)
            .then((response) => setProductVariant(response.data))
            .catch(() => setProductVariant(null))
            .finally(() => setLoading(false))
    }, [product.id])

    const image = product.images[0]

    return (
        <div className='w-full'>
            <div className='aspect-square w-full bg-gray-300 rounded-2xl'>
                {image && (
                    <Image
                        src={image.src}
                        alt={image.alt ?? product.title}
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover'
                    />
                )}
            </div>

            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>{product.title}</h2>

                {productVariant && <p>{productVariant.price}</p>}
            </div>
        </div>
    )
}

export default ProductCard
