import React, { useState } from 'react'
import Image from 'next/image'
import GalleryModal from './GalleryModal'
import { useLenis } from 'lenis/react'

interface Props {
    images: string[]
}

const ProductGallery = () => {
    const lenis = useLenis()
    const [selectedImage, setSelectedImage] = useState<null | number>(null)

    const closeGallery = () => {
        lenis?.start()
        setSelectedImage(null)
    }

    const openGallery = (id: number) => {
        lenis?.stop()
        setSelectedImage(id)
    }

    return (
        <div className='w-full flex-5'>
            {selectedImage && <GalleryModal handleClose={closeGallery} />}

            <div className='w-full flex gap-4'>
                <div
                    className='aspect-[4/5] w-full h-auto bg-gray-300 rounded-2xl'
                    onClick={() => openGallery(1)}
                ></div>
                <div className='aspect-[4/5 w-full h-auto bg-gray-300 rounded-2xl'></div>
            </div>

            <div className='w-full mt-4 flex gap-4'>
                <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
                <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
                <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
            </div>
        </div>
    )
}

export default ProductGallery
