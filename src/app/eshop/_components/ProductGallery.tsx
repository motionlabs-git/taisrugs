'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import GalleryModal from './GalleryModal'
import { useLenis } from 'lenis/react'
import { IProductImageQuery } from '@/utils/shopify/productImageQuery'

interface Props {
    images: IProductImageQuery[]
}

const ProductGallery = ({ images }: Props) => {
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
        <div className='w-full flex-5 select-none'>
            {selectedImage !== null && (
                <GalleryModal
                    images={images}
                    selectedImage={selectedImage}
                    handleClose={closeGallery}
                />
            )}

            <div className='w-full flex gap-4'>
                <div className='aspect-[4/5] w-full h-auto rounded-2xl cursor-pointer'>
                    {images[0] && (
                        <Image
                            src={images[0].src}
                            alt={'Hlavní obrázek produktu'}
                            width={500}
                            height={600}
                            className='w-full h-full object-cover rounded-2xl'
                            onClick={() => openGallery(0)}
                        />
                    )}
                </div>
                <div className='hidden sm:flex aspect-[4/5] w-full h-auto rounded-2xl cursor-pointer'>
                    {images[1] && (
                        <Image
                            src={images[1].src}
                            alt={'Doplňující obrázek produktu'}
                            width={500}
                            height={600}
                            className='w-full h-full object-cover rounded-2xl'
                            onClick={() => openGallery(1)}
                        />
                    )}
                </div>
            </div>

            <div
                className={`w-full mt-4 grid gap-4  ${
                    images.length <= 4 || images.length === 5
                        ? 'grid-cols-3'
                        : 'sm:grid-cols-4 grid-cols-3'
                } `}
            >
                <div className='block sm:hidden aspect-[4/5] w-full h-auto rounded-2xl cursor-pointer'>
                    {images[1] && (
                        <Image
                            src={images[1].src}
                            alt={'Doplňující obrázek produktu'}
                            width={500}
                            height={600}
                            className='w-full h-full object-cover rounded-2xl'
                            onClick={() => openGallery(1)}
                        />
                    )}
                </div>

                {images.slice(2, images.length).map((img, index) => {
                    const id = index + 2

                    return (
                        <div
                            key={id}
                            className='aspect-[4/5] w-full rounded-2xl'
                        >
                            {img && (
                                <Image
                                    src={img.src}
                                    alt={'Doplňující obrázek produktu'}
                                    width={350}
                                    height={400}
                                    className='w-full h-full object-cover rounded-2xl cursor-pointer'
                                    onClick={() => openGallery(id)}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductGallery
