'use client'

import { IProductQuery } from '@/app/utils/shopify/productQuery'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
    product: IProductQuery
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    return (
        <div className='w-full'>
            <div className='relative aspect-[4/5] w-full h-auto rounded-2xl overflow-hidden group'>
                <Link href={`/eshop/${product.handle}`}>
                    {product.images.nodes[0] && (
                        <Image
                            src={product.images.nodes[0].src}
                            alt={
                                product.images.nodes[0].altText ?? product.title
                            }
                            width={product.images.nodes[0].width}
                            height={product.images.nodes[0].height}
                            className='w-full h-full object-cover duration-200'
                        />
                    )}

                    {product.images.nodes[1] && (
                        <Image
                            src={product.images.nodes[1].src}
                            alt={
                                product.images.nodes[1].altText ?? product.title
                            }
                            width={product.images.nodes[1].width}
                            height={product.images.nodes[1].height}
                            className='absolute inset-0 opacity-0 group-hover:opacity-100 w-full h-full object-cover duration-400'
                        />
                    )}
                </Link>
            </div>

            <div className='mt-4'>
                <Link
                    href={`/eshop/${product.handle}`}
                    className='inline-block hover:underline hover:!text-black'
                >
                    <h2 className='text-lg sm:text-2xl font-bold'>
                        {product.title}
                    </h2>
                </Link>
                <span className='block'>
                    {Math.floor(
                        Number(product.priceRangeV2.minVariantPrice.amount)
                    ).toLocaleString('cs-CZ')}{' '}
                    {product.priceRangeV2.minVariantPrice.currencyCode}
                </span>
            </div>
        </div>
    )
}

export default ProductCard
