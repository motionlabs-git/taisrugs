'use client'
import React from 'react'
import GalleryImage from './GalleryImage'

const HeroGallery = () => {
    return (
        <div className='relative flex-1 aspect-[4/5] h-fit  w-full '>
            <GalleryImage className='left-0 rotate-12 -translate-2' />

            <GalleryImage className='bottom-0 left-0 -rotate-6' />

            <GalleryImage className='right-0 -rotate-6 -translate-x-3 translate-y-3' />

            <GalleryImage className='bottom-0 right-0 rotate-6 translate-4' />
        </div>
    )
}

export default HeroGallery
