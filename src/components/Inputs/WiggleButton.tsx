import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'

const WiggleButton = ({
    text,
    link,
    target,
    scrollTo,
    className,
}: {
    text: string
    link?: string
    target?: string
    className?: string
    scrollTo?: boolean
}) => {
    return (
        <button
            type='button'
            aria-label={`Navigovat - ${text}`}
            className={`${className} relative group w-fit h-fit items-center rounded-full border border-white hover:border-primary duration-200 cursor-pointer select-none`}
        >
            <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6  duration-200 px-10 py-4 overflow-hidden rounded-full text-white group-hover:text-black'>
                <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                <FiArrowRightCircle
                    size={20}
                    className='relative text-inherit duration-200'
                ></FiArrowRightCircle>

                <span className=' relative text-nowrap'>{text}</span>
            </div>

            <span className='btnClickText1 absolute -top-8 right-10 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200'>
                *klik
            </span>
            <span className='btnClickText2 absolute -bottom-4 -right-12 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200 delay-400'>
                *tap
            </span>

            <span className='btnClickText3 absolute -bottom-10 -left-12 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200 delay-200'>
                *klik
            </span>
        </button>
    )
}

export default WiggleButton
