'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { usePathname } from 'next/navigation'

const GsapProvider = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            ScrollTrigger.refresh()
        }

        return
    }, [path])

    useEffect(() => {
        window.addEventListener('resize', () => {
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
