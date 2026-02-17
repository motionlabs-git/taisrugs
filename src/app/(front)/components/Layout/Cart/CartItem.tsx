import React from 'react'
import Image from 'next/image'
import { ICartProductQuery } from '@/app/utils/shopify/cartQuery'
import RemoveLineCartForm from '../../Forms/RemoveLineCartForm'
import UpdateCartLineForm from '../../Forms/UpdateLineCartForm'

const CartItem = ({ item }: { item: ICartProductQuery }) => {
    return (
        <li key={item.id} className='flex justify-between items-end'>
            <div className='flex gap-4 '>
                <div className='aspect-[4/5] min-w-20 max-w-20 rounded-2xl overflow-hidden'>
                    <Image
                        src={item.merchandise.product.featuredImage.url}
                        alt={
                            item.merchandise.product.featuredImage.altText ??
                            item.merchandise.product.title
                        }
                        width={300}
                        height={400}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='flex flex-col justify-between'>
                    <div className='flex-1'>
                        <a
                            href={`/eshop/${item.merchandise.product.handle}`}
                            className='font-semibold line-clamp-2 text-ellipsis'
                        >
                            {item.merchandise.product.title}
                        </a>
                    </div>

                    <p className='font-bold'>
                        {Math.floor(
                            Number(item.merchandise.price.amount)
                        ).toLocaleString('cs-CZ')}{' '}
                        Kč
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-end'>
                <UpdateCartLineForm cartLine={item} />

                <RemoveLineCartForm cartLine={item} />
            </div>
        </li>
    )
}

export default CartItem
