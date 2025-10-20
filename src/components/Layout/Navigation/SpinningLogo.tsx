import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'

const SpinningLogo = () => {
    const logoRef = useRef<HTMLDivElement>(null)
    const rotation = useRef(0)
    const velocity = useRef(0)

    useEffect(() => {
        gsap.to('#spinning-logo', {
            scrollTrigger: {
                trigger: document.body,
                scrub: true,

                onUpdate: (self) => {
                    // Získáme rychlost scrollu
                    const newVelocity = self.getVelocity() / 200
                    velocity.current = gsap.utils.clamp(-10, 10, newVelocity)

                    rotation.current += velocity.current
                    gsap.to(logoRef.current, {
                        rotate: rotation.current,
                        ease: 'power3.out',
                        duration: 0.3,
                    })
                },
            },
        })
    }, [])

    return (
        <div ref={logoRef} id='spinning-logo' className='w-16 md:w-20'>
            <Link href={'/'} className='w-full h-full'>
                <Image
                    src={'/LogoSVG.svg'}
                    alt={'logo'}
                    width={200}
                    height={200}
                    className='w-full h-full'
                />
            </Link>
        </div>
    )
}

export default SpinningLogo
