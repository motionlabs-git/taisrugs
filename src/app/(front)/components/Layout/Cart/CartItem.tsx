import { IProductQuery } from '@/app/utils/shopify/productQuery'
import React from 'react'
import Image from 'next/image'
import { FiTrash } from 'react-icons/fi'

const CartItem = ({
    item,
}: {
    item: {
        title: string
        quantity: number
        product: IProductQuery
    }
}) => {
    return (
        <li key={item.product.id} className='flex justify-between items-end'>
            <div className='flex gap-4'>
                <div className='aspect-[4/5] min-w-20 max-w-20 rounded-2xl overflow-hidden'>
                    <Image
                        src={item.product.images.nodes[0].src}
                        alt={'Obrázek produktu'}
                        width={300}
                        height={400}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex-1'>
                        <p className='font-semibold line-clamp-2 text-ellipsis'>
                            {item.title} aklsdjf;alsdj ;asdfkl;jasd;l fjasdl;k
                            jfl;kj sd; alj
                        </p>
                        <p>
                            Množství:{' '}
                            <span className='font-bold'>{item.quantity}</span>
                        </p>
                    </div>

                    <p className='font-bold'>
                        {Math.floor(
                            Number(
                                item.product.priceRangeV2.minVariantPrice.amount
                            )
                        ).toLocaleString('cs-CZ')}{' '}
                        Kč
                    </p>
                </div>
            </div>
            <button
                type='button'
                aria-label={'Odebrat položku' + item.title}
                className='text-gray-600 flex items-center gap-2 text-lg sm:text-sm hover:text-black duration-200 cursor-pointer '
            >
                <span className='hidden sm:inline-block'>Odebrat</span>
                <FiTrash></FiTrash>
            </button>
        </li>
    )
}

export default CartItem
