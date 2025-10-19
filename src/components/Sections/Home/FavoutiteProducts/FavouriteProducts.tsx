'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { FiArrowRightCircle } from 'react-icons/fi'
import FavProductCard from './FavProductCard'

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
            <div className='px-24 sticky top-0 flex flex-col justify-center w-full h-[100vh] overflow-hidden'>
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
                    className='flex items-center mt-8 gap-4 w-[150%] translate-x-1/4 '
                >
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                    <FavProductCard></FavProductCard>
                </div>
                <button
                    type='button'
                    aria-label='Vidět více'
                    className='invert grayscale-100 self-center brightness-100 relative group mt-8 w-fit h-fit items-center rounded-full border border-white hover:border-primary duration-200  cursor-pointer'
                >
                    <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6  duration-200 px-10 py-4 overflow-hidden rounded-full text-white group-hover:text-black'>
                        <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                        <FiArrowRightCircle
                            size={20}
                            className='relative text-inherit duration-200'
                        ></FiArrowRightCircle>

                        <span className=' relative text-nowrap duration-200'>
                            Přejít do obchodu
                        </span>
                    </div>

                    <span className='btnClickText1 absolute -top-8 right-10 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200'>
                        *klik
                    </span>
                    <span className='btnClickText2 absolute -bottom-4 -right-12 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200 delay-400'>
                        *tap
                    </span>

                    <span className='btnClickText3 absolute -bottom-10 -left-12 pointer-events-none select-none text-sm text-primary opacity-0 group-hover:opacity-100 duration-200 delay-200'>
                        *klik
                    </span>
                </button>
            </div>
        </section>
    )
}

export default FavouriteProducts
