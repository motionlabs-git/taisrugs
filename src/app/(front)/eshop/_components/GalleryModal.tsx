import { IProductImageQuery } from '@/app/utils/shopify/productImageQuery'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi'
import Image from 'next/image'

const GalleryModal = ({
    handleClose,
    images,
    selectedImage,
}: {
    handleClose: () => void
    images: IProductImageQuery[]
    selectedImage: number
}) => {
    const [currentImage, setCurrentImage] = useState(selectedImage)

    const nextImage = () => {
        setCurrentImage((prev) => {
            return images.length - 1 === currentImage ? 0 : prev + 1
        })
    }

    const prevImage = () => {
        setCurrentImage((prev) => {
            return currentImage === 0 ? images.length - 1 : prev - 1
        })
    }

    return (
        <section className='animate-fade-in-04 opacity-0 fixed top-0 left-0 z-50 p-2 sm:p-4 bg-black/40 backdrop-blur-sm w-screen h-full'>
            <div className='bg-white p-2 sm:p-4 relative rounded-3xl w-full h-full flex justify-center items-center gap-4'>
                <button
                    type='button'
                    aria-label='Zavřít galerii'
                    className='absolute top-4 right-4 flex flex-col items-center justify-center rounded-full w-8 h-8 aspect-square bg-black cursor-pointer text-white select-none duration-200 hover:scale-90'
                    onClick={handleClose}
                >
                    <FiPlus size={30} className='rotate-45' />
                </button>

                <div className='absolute right-4 bottom-4 flex gap-2 bg-gray-500/20 rounded-full p-1.5 shadow-md'>
                    <button
                        type='button'
                        aria-label='Tlačítko mobilního menu'
                        className='flex items-center justify-center rounded-full w-8 h-8 pr-0.5 aspect-square bg-black cursor-pointer text-white select-none duration-200 hover:scale-90'
                        onClick={prevImage}
                    >
                        <FiChevronLeft size={22} />
                    </button>
                    <button
                        type='button'
                        aria-label='Tlačítko mobilního menu'
                        className='flex items-center justify-center rounded-full w-8 h-8 pl-0.5 aspect-square bg-black cursor-pointer text-white select-none duration-200 hover:scale-90'
                        onClick={nextImage}
                    >
                        <FiChevronRight size={22} />
                    </button>
                </div>

                <div className='aspect-[4/5] w-full h-fit md:w-fit md:h-full bg-gray-200 rounded-2xl overflow-hidden'>
                    <Image
                        src={images[currentImage].src}
                        alt='Náhled obrázku produktu'
                        width={1200}
                        height={1500}
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default GalleryModal
