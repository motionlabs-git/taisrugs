import React, { useEffect } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const PageTransition = () => {
    const path = usePathname()

    useEffect(() => {
        gsap.timeline()
            .to('#transitionLogo', {
                scale: 0,
                rotate: '-180deg',
                duration: 1,
                ease: 'power1.out',
                delay: 0.5,
            })
            .to(
                '#pageTransition',
                {
                    delay: 1,
                    height: '0',
                    duration: 0.3,
                    ease: 'power1.inOut',
                },
                '<'
            )
    }, [path])

    return (
        <div
            id='pageTransition'
            className='fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black'
        >
            <Image
                src={'/logo.png'}
                alt={'Logo'}
                width={140}
                height={140}
                className='rotate-180'
                id='transitionLogo'
            ></Image>
        </div>
    )
}

export default PageTransition
