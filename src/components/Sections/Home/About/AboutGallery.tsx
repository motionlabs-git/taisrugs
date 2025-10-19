'use client'
import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'

const galleryImages = [
    '/images/rug1.jpg',
    '/images/rug1.jpg',
    '/images/rug1.jpg',
    '/images/rug1.jpg',
    '/images/rug1.jpg',
    '/images/rug1.jpg',
]

const AboutGallery = () => {
    const [activeImage, setActiveImage] = useState(1)

    const prevImage = () => {
        if (activeImage !== 1) {
            setActiveImage((prev) => prev - 1)
        } else {
            setActiveImage(galleryImages.length)
        }
    }

    const nextImage = () => {
        if (activeImage <= galleryImages.length - 1) {
            setActiveImage((prev) => prev + 1)
        } else {
            setActiveImage(1)
        }

        console.log(activeImage)
    }

    // useEffect(() => {
    //     const autoSwipe = setInterval(() => {
    //         nextImage()
    //     }, 500)

    //     return () => {
    //         clearInterval(autoSwipe)
    //     }
    // }, [])

    return (
        <div className='flex self-center  flex-2 gap-8 items-center h-fit'>
            <button
                type='button'
                aria-label='Předchozí obrázek'
                className='w-12 h-auto aspect-square flex justify-center items-center bg-white text-black rounded-full'
                onClick={prevImage}
            >
                <FiChevronLeft size={24} className='pr-0.5'></FiChevronLeft>
            </button>

            <div className='relative w-full aspect-[4/5]'>
                {galleryImages.slice(0, activeImage).map((img, index) => {
                    const rotation = -12 + index * 6

                    return (
                        <div
                            key={index}
                            className='opacity-0 animate-fade-in-04 absolute top-0 left-0 w-full h-full bg-green-100 rounded-2xl overflow-hidden'
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
                })}
            </div>

            <button
                type='button'
                aria-label='Předchozí obrázek'
                className='w-12 h-auto aspect-square flex justify-center items-center bg-white text-black rounded-full'
                onClick={nextImage}
            >
                <FiChevronRight size={24} className='pl-0.5'></FiChevronRight>
            </button>
        </div>
    )
}

export default AboutGallery
