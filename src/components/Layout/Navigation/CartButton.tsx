import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const CartButton = ({ handleClick }: { handleClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false)

    //TODO:Cart button
    return (
        <button
            type='button'
            aria-label='Košík'
            className={`relative group cursor-pointer duration-200 select-none rounded-full ${
                isHovered ? 'pb-0 pl-0 pr-[3px]' : 'pl-[3px] pb-[3px]'
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

                <span>Košík</span>
            </div>
        </button>
    )
}

export default CartButton
