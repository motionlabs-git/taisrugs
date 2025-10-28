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
            <div className='aspect-[4/5] w-full h-auto rounded-2xl overflow-hidden group'>
                <Link href={`/eshop/${product.handle}`}>
                    {image && (
                        <Image
                            src={image.src}
                            alt={image.altText ?? product.title}
                            width={image.width}
                            height={image.height}
                            className='w-full h-full object-cover group-hover:scale-[1.08] duration-200 group-hover:rotate-3'
                        />
                    )}
                </Link>
            </div>

            <div className='mt-4'>
                <Link
                    href={`/eshop/${product.handle}`}
                    className='inline-block hover:underline hover:!text-black'
                >
                    <h2 className='text-2xl font-bold'>{product.title}</h2>
                </Link>
                <span className='block'>
                    {product.priceRangeV2.minVariantPrice.amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                    {product.priceRangeV2.minVariantPrice.currencyCode}
                </span>
            </div>
        </div>
    )
}

export default ProductCard
