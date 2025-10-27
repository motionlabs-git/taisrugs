'use client'

import { IProductQuery } from '@/utils/shopify/productQuery'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
    product: IProductQuery
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    const image = product.images.edges[0] ? product.images.edges[0].node : null

    return (
        <div className='w-full'>
            <Link href={`/eshop/${product.handle}`}>
                <div className='aspect-square w-full bg-gray-300 rounded-2xl'>
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
            </Link>

            <div className='mt-4'>
                <Link href={`/eshop/${product.handle}`}>
                    <h2 className='text-2xl font-bold'>{product.title}</h2>
                </Link>
                <p>
                    {product.priceRangeV2.minVariantPrice.amount}{' '}
                    {product.priceRangeV2.minVariantPrice.currencyCode}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
