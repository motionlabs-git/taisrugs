'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const PageBackground = ({ children }: { children: React.JSX.Element }) => {
    useEffect(() => {
        gsap.to('#pageBackground', {
            scrollTrigger: {
                trigger: '#about',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom bottom',
            },
            scale: 1,
        })

        gsap.fromTo(
            '#pageBackground',
            {
                background:
                    'radial-gradient(at 50% 20%, #09090b 0%, #18181b 75%)',
            },
            {
                scrollTrigger: {
                    trigger: '#about',
                    start: '100%+=50px 60%',
                    end: '100%+=50px 60%',
                    toggleActions: 'play none reverse none',
                },
                duration: 0.5,
                backgroundImage:
                    'radial-gradient(at 80% 80%, #ffdb85 0%, #f8cd69 75%)',
                color: 'black',
            }
        )
    }, [])

    return (
        <div
            id='pageBackground'
            className=' text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% scale-90 rounded-4xl origin-top will-change-transform'
        >
            {children}
        </div>
    )
}

export default PageBackground
