'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import FavProductCard from './FavProductCard'
import WiggleButton from '@/components/Inputs/WiggleButton'
import { IProductQuery } from '@/utils/shopify/productQuery'

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
                scrub: 1,
            },
            translateX: '-75%',
        })
    }, [])

    return (
        <section id='favouriteProducts' className='h-[300vh]'>
            <div className='md:px-24 px-4 sticky top-0 flex flex-col justify-center w-full h-[100vh] overflow-hidden will-change-transform'>
                <h1 className=' font-bold text-[4vw]'>To nejlepší</h1>

                <div
                    id='favProductsScroller'
                    className='flex items-center mt-8 gap-3 w-[400%] lg:w-[250%] xl:w-[150%] translate-x-1/4 '
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
