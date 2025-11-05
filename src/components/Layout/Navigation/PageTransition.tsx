'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

import LogoStroke from '../../../../public/LogoStroke'

const PageTransition = () => {
    useEffect(() => {
        gsap.timeline()
            .to('#transitionLogo', {
                scale: 10,
                rotate: '-180deg',
                duration: 1,

                delay: 0.5,
            })
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
    }, [])

    // gsap.registerPlugin(DrawSVGPlugin)

    // gsap.timeline()
    //     .to('#pageTransitionLogo', {
    //         opacity: 1,
    //     })
    //     .fromTo(
    //         '.pageTransitionLogoPath',
    //         {
    //             drawSVG: '0%',
    //         },
    //         {
    //             drawSVG: '100%',
    //             duration: 3,
    //             ease: 'power4.in',
    //         },
    //         '<'
    //     )
    //     .to(
    //         '#pageTransitionLogoBlur',
    //         {
    //             opacity: 1,
    //             duration: 3,
    //         },
    //         '<'
    //     )
    //     .to('#pageTransitionLogoWrapper', {
    //         scale: 0.9,
    //         ease: 'power1.inOut',
    //         duration: 1,
    //         yoyo: true,
    //         repeat: -1,
    //     })
    //     .to(
    //         '#pageTransitionLogoWrapper',
    //         {
    //             scale: 0.9,
    //             ease: 'power1.inOut',
    //             duration: 1,
    //             yoyo: true,
    //             repeat: 1,
    //         },
    //         '<'
    //     )
    //     .to(
    //         '#pageTransition',
    //         {
    //             delay: 1,
    //             height: 0,
    //             duration: 0.3,
    //             ease: 'power1.inOut',
    //         },
    //         '<'
    //     )

    return (
        <div
            id='pageTransition'
            className='opened fixed z-50 top-0 left-0 w-screen  flex items-center justify-center bg-black overflow-hidden'
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
