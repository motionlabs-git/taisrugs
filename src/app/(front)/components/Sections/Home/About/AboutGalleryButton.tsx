import React, { useState } from 'react'

const AboutGalleryButton = ({
    handleClick,
    children,
    className,
    borderClassName,
    disabled,
}: {
    handleClick: () => void
    children: React.JSX.Element
    className?: string
    borderClassName?: string
    disabled?: boolean
}) => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <button
            disabled={disabled ? !disabled : false}
            type='button'
            aria-label='Předchozí obrázek'
            className={`${className} text-black cursor-pointer pb-[5px] pl-[3px] duration-200 hover:pb-[2px] hover:pl-[2px] hover:pt-[3px] hover:pr-[1px] group ${
                isClicked && '!pb-[0px] !pl-[0px] !pt-[5px] !pr-[3px]'
            }`}
            onClick={handleClick}
            onMouseDownCapture={() => setIsClicked(true)}
            onMouseUpCapture={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
            onTouchStartCapture={() => setIsClicked(true)}
            onTouchEndCapture={() => setIsClicked(false)}
        >
            <div className='relative w-10 h-auto aspect-square'>
                <div className='bg-primary z-10 relative w-full h-full rounded-full  flex justify-center items-center'>
                    {children}
                </div>
                <div
                    className={`w-full h-full absolute z-0 rounded-full border ${borderClassName ? borderClassName : 'border-white'} top-[5px] -left-[3px] group-hover:top-[3px] group-hover:left-[-2px] duration-200 ${
                        isClicked && '!top-[0px] !left-[0px]'
                    }`}
                ></div>
            </div>
        </button>
    )
}

export default AboutGalleryButton
