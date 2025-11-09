'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import FavProductCard from './FavProductCard'
import WiggleButton from '@/components/Inputs/WiggleButton'
import { IProductQuery } from '@/utils/shopify/productQuery'
import LogoShape from '../../../../../public/LogoShape'

const FavouriteProducts = ({
    products,
}: {
    products: IProductQuery[] | null
}) => {
    useEffect(() => {
        gsap.to('#favProductsScroller', {
            scrollTrigger: {
                trigger: '#favouriteProducts',
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5,
            },
            translateX: '-75%',
        })

        gsap.to('#favProductBgElement', {
            scrollTrigger: {
                trigger: '#favouriteProducts',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },

            rotate: 50,
        })
    }, [])

    return (
        <section id='favouriteProducts' className='h-[300vh]'>
            <div className='md:px-24 px-4 sticky top-0 flex flex-col justify-center w-full h-[100vh] overflow-hidden will-change-transform'>
                <div className='w-full h-full absolute inset-0 flex justify-center items-center'>
                    <LogoShape
                        className='w-[80vw] lg:w-[60vw] xl:max-h-[80vh] text-primaryAccent opacity-50 mt-24 '
                        id='favProductBgElement'
                    ></LogoShape>
                </div>

                <h1 className='relative font-bold text-[4vw]'>To nejlepší</h1>
                <div
                    id='favProductsScroller'
                    className='relative flex items-center mt-8 gap-3 w-[400%] md:w-[400%] lg:w-[200%] xl:w-[150%] translate-x-1/4 '
                >
                    {products?.map((product) => (
                        <FavProductCard key={product.id} product={product} />
                    ))}
                    {products?.map((product) => (
                        <FavProductCard key={product.id} product={product} />
                    ))}
                    {products?.map((product) => (
                        <FavProductCard key={product.id} product={product} />
                    ))}
                    {products?.map((product) => (
                        <FavProductCard key={product.id} product={product} />
                    ))}
                    {products?.map((product) => (
                        <FavProductCard key={product.id} product={product} />
                    ))}
                    {products?.map((product) => (
                        <FavProductCard key={product.id} product={product} />
                    ))}

                    <div className='flex-1'>
                        <WiggleButton
                            text='Přejít do obchodu'
                            className='invert grayscale-100 scale-80 sm:scale-100 text-white'
                            link='/'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FavouriteProducts
