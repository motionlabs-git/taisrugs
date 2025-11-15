'use client'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import AboutGalleryButton from './AboutGalleryButton'

import AboutGalleryImage from './AboutGalleryImage'

const galleryImages = [
    '/images/AboutGallery/2.webp',
    '/images/AboutGallery/4.webp',
    '/images/AboutGallery/5.webp',
    '/images/AboutGallery/1.webp',
    '/images/AboutGallery/3.webp',
    '/images/AboutGallery/6.webp',
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
        <div className='flex flex-col xl:flex-row md:flex-2 gap-8 items-center h-fit w-full self-center md:self-start lg:self-center'>
            {/* <button
                type='button'
                aria-label='Předchozí obrázek'
                className='w-12 h-auto aspect-square flex justify-center items-center bg-white text-black rounded-full shadow-[-3px_3px_white]'
                onClick={prevImage}
            >
                <FiChevronLeft size={24} className='pr-0.5'></FiChevronLeft>
            </button> */}

            <AboutGalleryButton
                className='hidden xl:block'
                handleClick={prevImage}
            >
                <FiChevronLeft size={24} className='pr-0.5 '></FiChevronLeft>
            </AboutGalleryButton>

            <div className='relative w-4/5 md:w-full aspect-[4/5]'>
                {galleryImages.map((img, index) => {
                    const rotation = -12 + index * 6

                    return (
                        <AboutGalleryImage
                            key={index}
                            index={index}
                            activeImage={activeImage}
                            rotation={rotation}
                            img={img}
                        />
                        // <div
                        //     key={index}
                        //     className={`gallery-image ${
                        //         index < activeImage
                        //             ? `opacity-100 translate-0`
                        //             : 'opacity-0 translate-y-10 translate-x-5'
                        //     }  duration-400 absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden`}
                        //     id={`gallery-image-${index}`}
                        //     style={{ rotate: `${rotation}deg` }}
                        // >
                        //     <Image
                        //         src={img}
                        //         alt={'Obrázek v galerii O TaisRugs'}
                        //         width={500}
                        //         height={800}
                        //         className='w-full h-full object-cover'
                        //     />
                        // </div>
                    )
                })}
            </div>
            <AboutGalleryButton
                className='hidden xl:block'
                handleClick={nextImage}
            >
                <FiChevronRight size={24} className='pl-0.5'></FiChevronRight>
            </AboutGalleryButton>
            <div className='w-full flex gap-2 justify-end md:justify-center xl:hidden'>
                <AboutGalleryButton handleClick={prevImage}>
                    <FiChevronLeft size={24} className='pr-0.5'></FiChevronLeft>
                </AboutGalleryButton>
                <AboutGalleryButton handleClick={nextImage}>
                    <FiChevronRight
                        size={24}
                        className='pl-0.5'
                    ></FiChevronRight>
                </AboutGalleryButton>
            </div>
        </div>
    )
}

export default AboutGallery
