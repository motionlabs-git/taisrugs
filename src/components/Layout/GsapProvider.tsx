'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const GsapProvider = ({ children }: { children: React.ReactNode }) => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log('resized')

            ScrollTrigger.refresh()
        })

        // if (typeof window !== 'undefined') {
        //     const ua = navigator.userAgent.toLowerCase()
        //     const isInstagram = ua.includes('instagram')

        //     if (isInstagram) {
        //     }
        // }
        ScrollTrigger.normalizeScroll(true)

        return () =>
            window.removeEventListener('resize', () => ScrollTrigger.refresh)
    }, [])

    return <>{children}</>
}

export default GsapProvider
