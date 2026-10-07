'use client'
import React, { useEffect, useRef } from 'react'

import LogoStroke from '../../../../../../public/LogoStroke'
import { usePathname } from 'next/navigation'
import { useLenis } from 'lenis/react'
import { setPageColor } from '@/app/utils/animation/setPageColor'

const PageTransition = () => {
    const transitionRef = useRef<HTMLDivElement | null>(null)
    const path = usePathname()
    const lenis = useLenis()

    useEffect(() => {
        // lenis?.scrollTo(0, {
        //     immediate: true,
        // })
        setTimeout(() => {
            transitionRef.current?.classList.remove('opened')
            setPageColor('#ffffff')
        }, 1000)
    }, [path, lenis])

    return (
        <div
            ref={transitionRef}
            id='pageTransition'
            className='opened fixed top-0 left-0 z-50 w-screen flex items-center justify-center bg-black overflow-hidden ease-in-out duration-500'
        >
            <div id='pageTransitionLogoWrapper' className='relative'>
                <LogoStroke
                    id='pageTransitionLogo'
                    pathClass='pageTransitionLogoPath'
                    className='w-40 text-primary stroke-4'
                />
                <LogoStroke
                    id='pageTransitionLogoBlur'
                    className='absolute inset-0 blur-lg w-40 text-primary stroke-[5px]'
                />
            </div>
        </div>
    )
}

export default PageTransition
