import React, { useEffect } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'

const PageTransition = () => {
    const path = usePathname()

    useEffect(() => {
        gsap.timeline()

            // .to('#transitionLogo', {
            //     scale: 10,
            //     rotate: '-180deg',
            //     duration: 1,

            //     delay: 0.5,
            // })
            .to(
                '#pageTransition',
                {
                    delay: 1,
                    height: 0,
                    duration: 0.3,
                    ease: 'power1.inOut',
                },
                '<'
            )
    }, [path])

    return (
        <div
            id='pageTransition'
            className='fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black overflow-hidden'
        >
            {/* <LogoShape id='transitionLogo' className='w-40 text-gray-700' /> */}
        </div>
    )
}

export default PageTransition
