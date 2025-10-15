'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from '../Cart/Cart'
import gsap from 'gsap'
import SpinningLogo from './SpinningLogo'

const Navigation = () => {
    const cartTl = gsap.timeline({
        defaults: { duration: 0.3, ease: 'power1.inOut' },
        paused: true,
    })

    useEffect(() => {
        cartTl
            .set('#cart', {
                display: 'block',
                opacity: 0,
            })
            .to('#cart', {
                opacity: 1,
            })
            .to('#cartAside', {
                right: 0,
            })
    }, [cartTl])

    return (
        <header className='fixed top-0 z-50 w-full flex justify-center p-4'>
            <Cart
                handleCloseCart={() => {
                    cartTl.reverse()
                }}
            ></Cart>
            <nav className='flex items-center justify-between w-full gap-4 '>
                <SpinningLogo />

                <div className='flex gap-2 items-center bg-gray-500/20 rounded-full p-1.5 backdrop-blur-[2px] shadow-md'>
                    <Link
                        className='flex group items-center px-4 py-2 rounded-full bg-black  text-white hover:text-black hover:bg-primary duration-200'
                        href={'/'}
                        aria-label=''
                    >
                        <div className='w-0 group-hover:w-2 group-hover:mr-2 duration-200 aspect-square bg-gray-800/50 rounded-full'></div>
                        <span>Domů</span>
                    </Link>

                    <Link
                        className='relative flex group items-center px-4 py-2 rounded-full bg-black text-white hover:text-black duration-200'
                        href={'/'}
                        aria-label=''
                    >
                        <div className='absolute w-0 h-full top-0 left-0 bg-primary duration-200 group-hover:left-[-1px] group-hover:w-[calc(100%+2px)] rounded-full'></div>
                        <div className='relative w-0 group-hover:w-2 group-hover:mr-2 duration-200 aspect-square bg-gray-800/50 rounded-full'></div>
                        <span className='relative'>Koberec na zakázku</span>
                    </Link>

                    <Link
                        className='flex group items-center px-4 py-2 rounded-full bg-black text-white hover:text-black hover:bg-primary duration-200'
                        href={'/'}
                        aria-label=''
                    >
                        <div className='w-0 group-hover:w-2 group-hover:mr-2 duration-200 aspect-square bg-gray-800/50 rounded-full'></div>
                        <span>Kurzy</span>
                    </Link>

                    <Link
                        className='relative group px-4 py-2 rounded-full bg-black text-white backdrop-blur-sm hover:text-black hover:bg-primary duration-200'
                        href={'/'}
                        aria-label=''
                    >
                        <div className='absolute bottom-0 right-0 w-0 group-hover:w-2 group-hover:mr-2 duration-200 aspect-square bg-black rounded-full'></div>
                        <span>Koberec na zakázku</span>
                    </Link>
                </div>

                <button
                    type='button'
                    aria-label='Košík'
                    className='relative group cursor-pointer rounded-full shadow-md hover:mr-[4px] duration-200 hover:-ml-1'
                    onClick={() => cartTl.play()}
                >
                    <div className='relative flex gap-2 items-center rounded-full px-4 py-2  bg-primary text-black hover:bg-primary hover:text-black shadow-[-3px_3px_black] group-hover:shadow-[0px_0px] duration-200 group-hover:mt-[3px]'>
                        <FiShoppingCart
                            className=' duration-300'
                            size={16}
                        ></FiShoppingCart>

                        <span>Košík</span>
                    </div>
                </button>
            </nav>
        </header>
    )
}

export default Navigation
