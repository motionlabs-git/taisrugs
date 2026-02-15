'use client'

import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

interface IProps {
    cartCount: number | null
    handleClick: () => void
}

const CartButton: React.FC<IProps> = ({ cartCount, handleClick }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            type='button'
            aria-label='Košík'
            className={`pointer-events-auto relative group cursor-pointer duration-200 select-none rounded-full ${
                isHovered ? 'pb-0 pl-0 pr-[3px] pt-[3px]' : 'pl-[3px] pb-[3px]'
            }`}
            onClick={handleClick}
            onTouchStartCapture={() => setIsHovered(true)}
            onTouchEndCapture={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative flex gap-2 items-center rounded-full px-4 py-2 bg-primary duration-200  ${
                    isHovered ? 'shadow-md' : 'shadow-[-3px_3px_black]'
                }`}
            >
                <FiShoppingCart
                    className=' duration-300'
                    size={16}
                ></FiShoppingCart>

                {cartCount && (
                    <>
                        <span>Košík ({cartCount})</span>

                        <span className='block absolute top-0 right-0 w-3 h-3 rounded-full shadow-[0_0px_5px_2px_rgba(245,100,103,0.2)] shadow-red-400 animate-pulse' />

                        <span className='block absolute top-0 right-0 z-10 w-3 h-3 rounded-full bg-red-400' />
                    </>
                )}

                {!cartCount && <span>Košík</span>}
            </div>
        </button>
    )
}

export default CartButton
