import React, { useState } from 'react'

const HamburgerIcon = ({
    isMobileNavOpened,
    handleClick,
}: {
    isMobileNavOpened: boolean
    handleClick: () => void
}) => {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <button
            type='button'
            aria-label='Tlačítko mobilního menu'
            className={`md:hidden flex flex-col gap-0.5 items-center justify-center rounded-full w-10 h-10 aspect-square bg-black cursor-pointer select-none ${
                isMobileNavOpened && 'invert'
            } ${isPressed && 'scale-90'}`}
            onClick={handleClick}
            onMouseDownCapture={() => setIsPressed(true)}
            onMouseLeave={() => setIsPressed(false)}
            onMouseUpCapture={() => setIsPressed(false)}
        >
            <div className='w-1 aspect-square bg-white rounded-full pointer-events-none'></div>
            <div className='w-1 aspect-square bg-white rounded-full pointer-events-none'></div>
            <div className='w-1 aspect-square bg-white rounded-full pointer-events-none'></div>
        </button>
    )
}

export default HamburgerIcon
