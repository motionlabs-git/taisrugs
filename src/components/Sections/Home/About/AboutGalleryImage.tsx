import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const AboutGalleryImage = ({
    index,
    activeImage,
    rotation,
    img,
}: {
    index: number
    activeImage: number
    rotation: number
    img: string
}) => {
    // const ref = useRef<HTMLDivElement>(null)
    // let lastMouse = { x: 0, y: 0 }

    // function getMouseVector(e: React.MouseEvent<HTMLDivElement>, offset = 150) {
    //     const current = { x: e.clientX, y: e.clientY }

    //     const dx = current.x - lastMouse.x
    //     const dy = current.y - lastMouse.y

    //     lastMouse = current

    //     const len = Math.sqrt(dx * dx + dy * dy)
    //     const nx = dx / len || 0
    //     const ny = dy / len || 0

    //     const startX = -nx * offset
    //     const startY = -ny * offset

    //     return { nx, ny, startX, startY }
    // }

    // const mouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     if (!ref.current) return

    //     const { startX, startY } = getMouseVector(e, 20)

    //     gsap.timeline()
    //         .to(ref.current, {
    //             x: startX,
    //             y: startY,
    //             duration: 0.2,
    //         })
    //         .to(ref.current, {
    //             translateX: 0,
    //             translateY: 0,
    //         })
    // }

    return (
        <div
            // onMouseEnter={mouseEnter}
            // ref={ref}
            className={`gallery-image ${
                index < activeImage
                    ? `opacity-100 translate-0`
                    : 'opacity-0 translate-y-10 translate-x-5'
            }  duration-400 absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden`}
            id={`gallery-image-${index}`}
            style={{ rotate: `${rotation}deg` }}
        >
            <Image
                src={img}
                alt={'Obrázek v galerii O TaisRugs'}
                width={500}
                height={800}
                className='w-full h-full object-cover'
            />
        </div>
    )
}

export default AboutGalleryImage
