import React from 'react'
import Image from 'next/image'

const FavProductCard = () => {
    return (
        <div className=''>
            <div className='relative group bg-gray-100/30 rounded-2xl aspect-[4/5] flex-1 overflow-hidden cursor-pointer shadow-[-8px_8px_black] duration-200'>
                <Image
                    src={'/images/rug1.jpg'}
                    alt={'Obrazek'}
                    width={500}
                    height={500}
                    className='w-full h-full object-cover group-hover:scale-[1.08] group-hover:rotate-3 duration-400'
                ></Image>
            </div>
        </div>
    )
}

export default FavProductCard
