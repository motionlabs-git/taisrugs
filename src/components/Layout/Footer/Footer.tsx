'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    useEffect(() => {
        gsap.to('#footer-body', {
            scrollTrigger: {
                trigger: '#footer',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom bottom',
            },
            translateY: 0,
        })
    }, [])

    return (
        <footer
            id='footer'
            className='w-full p-10 z-0 text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% '
        >
            <div id='footer-body' className='-translate-y-80 flex'>
                <Link href={'/'}>
                    <Image
                        src={'/logo.png'}
                        alt={'Logo'}
                        width={300}
                        height={300}
                        className='w-32'
                    ></Image>
                </Link>
                <h1>Footer footer</h1>
                <h1>Footer footer</h1>
                <h1>Footer footer</h1>
                <h1>Footer footer</h1>
                <h1>Footer footer</h1>
                <h1>Footer footer</h1>

                <h1>Footer footer</h1>
                <h1>Footer footer</h1>
                <h1>Footer footer</h1>
            </div>
        </footer>
    )
}

export default Footer
