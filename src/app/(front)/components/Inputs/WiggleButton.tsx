'use client'
import { usePageTransition } from '@/app/utils/animation/usePageTransition'
import { useLenis } from 'lenis/react'
import Link from 'next/link'
import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'

const WiggleButton = ({
    text,
    link,
    scrollTo,
    className,
    wiggleTextDeny,
    blank,
}: {
    text: string
    link: string
    className?: string
    scrollTo?: boolean
    wiggleTextDeny?: boolean
    blank?: boolean
}) => {
    const lenis = useLenis()
    const handleTransition = usePageTransition()

    const linkTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        if (scrollTo) {
            lenis?.scrollTo(link)
        } else {
            if (blank) window.open(link, '_blank')
            else handleTransition(e, link)
        }
    }

    return (
        <Link
            aria-label={`Navigovat - ${text}`}
            className={`${className} block relative group w-fit h-fit items-center rounded-full border border-inherit hover:border-primary duration-200 transition-transform cursor-pointer select-none`}
            href={link}
            onClick={(e) => linkTo(e)}
        >
            <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6 duration-200  px-10 py-4 overflow-hidden rounded-full text-inherit group-hover:text-black'>
                <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                <FiArrowRightCircle
                    size={20}
                    className='relative text-inherit duration-200'
                ></FiArrowRightCircle>

                <span className=' relative text-nowrap'>{text}</span>
            </div>
            {!wiggleTextDeny && (
                <>
                    <span className='btnClickText1 absolute -top-8 right-10 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200  transition-opacity'>
                        *klik
                    </span>
                    <span className='btnClickText2 absolute -bottom-4 -right-12 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200 transition-opacity delay-400'>
                        *tap
                    </span>

                    <span className='btnClickText3 absolute -bottom-10 -left-12 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200 transition-opacity delay-200'>
                        *klik
                    </span>
                </>
            )}
        </Link>
    )
}

export default WiggleButton
