'use client'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import React from 'react'
import Image from 'next/image'
import { IProductQuery } from '@/utils/shopify/productQuery'

const FavouriteProductsSlider = ({
    favouriteProducts,
}: {
    favouriteProducts: IProductQuery[]
}) => {
    const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true }, [
        AutoScroll({
            speed: 1.2,
            startDelay: 0,
            direction: 'forward',
            stopOnInteraction: false,
        }),
    ])

    console.log(favouriteProducts)

    return (
        <section className='py-16'>
            <h2 className='text-2xl font-bold'>Oblíbené produkty</h2>
            <div className='embla' ref={emblaRef}>
                <div className='mt-8 embla__container'>
                    {favouriteProducts.map((product, index) => (
                        <div
                            key={index}
                            className='embla__slide flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_20%] aspect-[4/5] w-full px-3'
                        >
                            <div className='relative group bg-gray-100/30 rounded-2xl aspect-[4/5] flex-1 overflow-hidden cursor-pointer shadow-[-8px_8px_black] duration-200'>
                                <Image
                                    src={product.images.nodes[0].src}
                                    alt={'Obrazek'}
                                    width={500}
                                    height={500}
                                    className='w-full h-full object-cover group-hover:scale-[1.08] group-hover:rotate-3 duration-400'
                                ></Image>
                            </div>
                        </div>
                    ))}
                    {favouriteProducts.map((product, index) => (
                        <div
                            key={index}
                            className='embla__slide flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_20%] aspect-[4/5] w-full px-3'
                        >
                            <div className='relative group bg-gray-100/30 rounded-2xl aspect-[4/5] flex-1 overflow-hidden cursor-pointer shadow-[-8px_8px_black] duration-200'>
                                <Image
                                    src={product.images.nodes[0].src}
                                    alt={'Obrazek'}
                                    width={500}
                                    height={500}
                                    className='w-full h-full object-cover group-hover:scale-[1.08] group-hover:rotate-3 duration-400'
                                ></Image>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FavouriteProductsSlider
