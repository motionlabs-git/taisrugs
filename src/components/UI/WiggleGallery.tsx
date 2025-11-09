import React from 'react'
import WiggleGalleryImage from './WiggleGalleryImage'

const WiggleGallery = ({ images }: { images: string[] }) => {
    return (
        <div className='relative flex-1 aspect-[4/5] h-fit w-full '>
            <WiggleGalleryImage
                img={images[0]}
                className='left-0 rotate-12 -translate-2'
            />

            <WiggleGalleryImage
                img={images[1]}
                className='bottom-0 left-0 -rotate-6'
            />

            <WiggleGalleryImage
                img={images[2]}
                className='right-0 -rotate-6 -translate-x-3 translate-y-3'
            />

            <WiggleGalleryImage
                img={images[3]}
                className='bottom-0 right-0 rotate-6 translate-4'
            />
        </div>
    )
}

export default WiggleGallery
