'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { FiArrowRightCircle } from 'react-icons/fi'
import FavProductCard from './FavProductCard'
import WiggleButton from '@/components/Inputs/WiggleButton'

const FavouriteProducts = () => {
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
            <div className='md:px-24 px-4 sticky top-0 flex flex-col justify-center w-full h-[100vh] overflow-hidden'>
                <h1 className='group relative font-archivo text-[5vw] text-primary font-bold'>
                    <span className='absolute top-0 left-0 translate-y-2 -translate-x-2 text-violet-400 group-hover:translate-y-3 group-hover:-translate-x-3 duration-200'>
                        TO NEJLEPŠÍ
                    </span>
                    <span className='absolute top-0 left-0 translate-y-1 -translate-x-1 text-green-400 group-hover:translate-y-2 group-hover:-translate-x-2 duration-200'>
                        TO NEJLEPŠÍ
                    </span>
                    <span className='absolute top-0 left-0 text-primary group-hover:translate-y-1 group-hover:-translate-x-1 duration-200'>
                        TO NEJLEPŠÍ
                    </span>
                    <span className='relative text-black'>TO NEJLEPŠÍ</span>
                </h1>

                <div
                    id='favProductsScroller'
                    className='flex items-center mt-8 gap-4 w-[400%] md:w-[150%] translate-x-1/4 '
                >
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                    <div className='flex-1'>
                        <WiggleButton
                            text='Přejít do obchodu'
                            className='invert grayscale-100'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FavouriteProducts
