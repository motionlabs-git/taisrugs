'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const GalleryImage = ({
    className,
    img,
}: {
    className?: string
    img: string
}) => {
    const ref = useRef<HTMLDivElement>(null)
    let lastMouse = { x: 0, y: 0 }

    function getMouseVector(e: React.MouseEvent<HTMLDivElement>, offset = 150) {
        const current = { x: e.clientX, y: e.clientY }

        const dx = current.x - lastMouse.x
        const dy = current.y - lastMouse.y

        lastMouse = current

        const len = Math.sqrt(dx * dx + dy * dy)
        const nx = dx / len || 0
        const ny = dy / len || 0

        const startX = -nx * offset
        const startY = -ny * offset

        return { nx, ny, startX, startY }
    }

    const mouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return

        const { startX, startY } = getMouseVector(e, 20)

        gsap.timeline()
            .to(ref.current, {
                x: startX,
                y: startY,
                duration: 0.2,
            })
            .to(ref.current, {
                translateX: 0,
                translateY: 0,
            })
    }
    return (
        <div
            ref={ref}
            onMouseEnter={(e) => mouseEnter(e)}
            className={`${className} absolute aspect-[4/5] w-1/2 h-auto bg-blue-200 rounded-2xl shadow-md overflow-hidden`}
        >
            <Image
                src={img}
                width={750}
                height={1000}
                alt='Obrázek v galerii kurzy'
            ></Image>
        </div>
    )
}

export default GalleryImage
