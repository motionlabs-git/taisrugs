'use client'

import React, { HTMLAttributes, ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { lerp } from '@/app/utils/math/lerp'

interface IProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    scale: number
}

const MouseShift: React.FC<IProps> = ({ children, scale, ...rest }) => {
    const shiftRef = useRef<HTMLDivElement>(null)

    const mousePosition = useRef({
        x: 0,
        y: 0,
    })
    const delayerBgPosition = useRef({
        x: 0,
        y: 0,
    })

    const animateBg = (x: number, y: number) => {
        if (shiftRef.current)
            gsap.set(shiftRef.current, {
                x,
                y,
            })
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { pageX, pageY } = e

            if (pageX > window.innerWidth || pageY > window.innerHeight) return

            // const isNegativeX = pageX < window.innerWidth / 2 ? -1 : 1
            // const isNegativeY = pageY < window.innerHeight / 2 ? -1 : 1

            mousePosition.current = {
                x: (pageX * scale - window.innerWidth / 2) / window.innerWidth,
                y:
                    (pageY * scale - window.innerHeight / 2) /
                    window.innerHeight,
            }
        }

        const animate = () => {
            const { x, y } = delayerBgPosition.current

            delayerBgPosition.current = {
                x: lerp(x, mousePosition.current.x * window.innerWidth, 0.05),
                y: lerp(y, mousePosition.current.y * window.innerHeight, 0.05),
            }

            animateBg(
                -delayerBgPosition.current.x,
                -delayerBgPosition.current.y
            )

            window.requestAnimationFrame(animate)
        }

        animate()

        document.addEventListener('mousemove', handleMouseMove)

        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [scale])

    return (
        <div {...rest} className={`overflow-hidden ${rest.className || ''}`}>
            <div
                ref={shiftRef}
                style={{
                    width: `${100 * scale}%`,
                    height: `${100 * scale}%`,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default MouseShift
