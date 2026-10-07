'use client'
import React, { useEffect, useRef } from 'react'

import LogoStroke from '../../../../../../public/LogoStroke'
import { usePathname } from 'next/navigation'
import { setPageColor } from '@/app/utils/animation/setPageColor'

const PageTransition = () => {
    const transitionRef = useRef<HTMLDivElement | null>(null)
    const path = usePathname()
    const isFirstLoad = useRef(true)

    useEffect(() => {
        let cancelled = false

        const hideTransition = () => {
            if (cancelled) return
            transitionRef.current?.classList.remove('opened')
            setPageColor('#ffffff')
        }

        // First load - hide as soon as page is hydrated and fonts are ready (no layout jump)
        if (isFirstLoad.current) {
            isFirstLoad.current = false
            document.fonts.ready.then(hideTransition)

            return () => {
                cancelled = true
            }
        }

        // Navigation - path changes once the new page is rendered, keep short delay so the transition doesn't flash
        const timeout = setTimeout(hideTransition, 300)

        return () => {
            cancelled = true
            clearTimeout(timeout)
        }
    }, [path])

    return (
        <div
            ref={transitionRef}
            id='pageTransition'
            className='opened fixed top-0 left-0 z-50 w-screen bg-black overflow-hidden ease-in-out duration-500'
        >
            {/* Center logo in visible viewport (dvh), loader itself is 100lvh to cover area under browser bars */}
            <div className='h-dvh max-h-full flex items-center justify-center'>
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
        </div>
    )
}

export default PageTransition
