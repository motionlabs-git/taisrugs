'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const Footer = () => {
    useEffect(() => {
        gsap.to('#footer-body', {
            scrollTrigger: {
                trigger: '#footer',
                scrub: true,
                start: 'top bottom',
                end: 'bottom bottom',
            },
            translateY: 0,
        })
    }, [])

    return (
        <footer id='footer' className='w-full z-0'>
            <div id='footer-body' className='-translate-y-80'>
                <h1>Footer footer</h1>
            </div>
        </footer>
    )
}

export default Footer
