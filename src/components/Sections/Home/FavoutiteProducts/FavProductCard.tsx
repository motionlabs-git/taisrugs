import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IProductQuery } from '@/utils/shopify/productQuery'

const FavProductCard = ({
    product,
    className,
}: {
    product: IProductQuery
    className?: string
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    return (
        <Link
            href={`/eshop/${product.handle}`}
            onTouchStartCapture={() => setIsHovered(true)}
            onTouchEndCapture={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                setIsClicked(false)
            }}
            onMouseDownCapture={() => setIsClicked(true)}
            className={`group  ${
                isHovered
                    ? ` ${
                          isClicked
                              ? 'pb-[2px] pl-[2px] pt-[6px] pr-[6px]'
                              : 'pb-[5px] pl-[5px] pt-[3px] pr-[3px]'
                      }`
                    : 'pb-[8px] pl-[8px]'
            } duration-200`}
        >
            <div
                className={`relative bg-gray-100/30 border-1 border-black rounded-2xl aspect-[4/5] flex-1 overflow-hidden cursor-pointer  duration-200 max-h-[60vh] ${
                    isHovered
                        ? `${
                              isClicked
                                  ? 'shadow-[-2px_2px_black]'
                                  : 'shadow-[-5px_5px_black]'
                          }`
                        : 'shadow-[-8px_8px_black]'
                }`}
            >
                {product?.images.nodes[0].src && (
                    <Image
                        src={product.images.nodes[0].src}
                        alt={'Obrazek'}
                        width={500}
                        height={500}
                        className='w-full h-full object-cover select-none pointer-events-none'
                    ></Image>
                )}
            </div>
        </Link>
    )
}

export default FavProductCard
