'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)

// Address bar show/hide on mobile triggers resize - don't recalculate triggers mid-scroll
ScrollTrigger.config({ ignoreMobileResize: true })

const GsapProvider = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname()
    const lenis = useLenis()

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            ScrollTrigger.refresh()
        }
    }, [path])

    // Drive Lenis from GSAP ticker so scrub animations stay in sync with scroll
    useEffect(() => {
        if (!lenis) return

        const update = (time: number) => lenis.raf(time * 1000)

        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.off('scroll', ScrollTrigger.update)
            gsap.ticker.remove(update)
        }
    }, [lenis])

    return <>{children}</>
}

export default GsapProvider
