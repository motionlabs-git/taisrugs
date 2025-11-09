import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import { usePageTransition } from '@/utils/animation/usePageTransition'

const SpinningLogo = () => {
    const logoRef = useRef<HTMLDivElement>(null)
    const rotation = useRef(0)
    const velocity = useRef(0)
    const path = usePathname()

    const handleTransition = usePageTransition()

    useEffect(() => {
        gsap.to('#spinning-logo', {
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom top',

                onUpdate: (self) => {
                    const newVelocity = self.getVelocity() / 200
                    velocity.current = gsap.utils.clamp(-10, 10, newVelocity)

                    rotation.current += velocity.current

                    gsap.set(logoRef.current, {
                        rotate: rotation.current,
                        ease: 'power3.out',
                        duration: 0.3,
                    })
                },
            },
        })
    }, [path])

    return (
        <div
            ref={logoRef}
            id='spinning-logo'
            className='block relative w-16 min-w-16 md:w-20'
        >
            <Link
                onClick={(e) => handleTransition(e, '/')}
                href={'/'}
                className='w-full h-full'
            >
                <Image
                    src={'/LogoSVG.svg'}
                    alt={'logo'}
                    width={200}
                    height={200}
                    className='w-full h-full '
                />
            </Link>
        </div>
    )
}

export default SpinningLogo
