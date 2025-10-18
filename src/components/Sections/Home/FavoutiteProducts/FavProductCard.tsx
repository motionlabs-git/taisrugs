import React from 'react'
import Image from 'next/image'
import { FiArrowRightCircle } from 'react-icons/fi'

const FavProductCard = () => {
    return (
        <div className='relative group bg-gray-100/30 rounded-2xl aspect-[4/5] flex-1 overflow-hidden cursor-pointer shadow-[-8px_8px_black] duration-200'>
            <Image
                src={'/images/rug1.jpg'}
                alt={'Obrazek'}
                width={500}
                height={500}
                className='w-full h-full object-cover group-hover:scale-[1.08] group-hover:rotate-3 duration-400'
            ></Image>
            <p className='absolute bottom-4 left-4 flex gap-2 group-hover:gap-4 duration-200 items-center font-archivo text-4xl'>
                <span>Title</span>
                <FiArrowRightCircle
                    size={28}
                    className='relative duration-200'
                ></FiArrowRightCircle>
            </p>
        </div>
    )
}

export default FavProductCard
