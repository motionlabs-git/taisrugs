'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from '../Cart/Cart'
import gsap from 'gsap'
import NavLink from './NavLink'
import Image from 'next/image'

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
            <nav className='flex items-center justify-between w-full gap-4'>
                <Image
                    src={'/logo.png'}
                    alt={'logo'}
                    width={200}
                    height={200}
                    className='w-20'
                ></Image>

                <div className='flex gap-4 items-center  rounded-xl'>
                    <NavLink text={'Domů'} link={'/'}></NavLink>

                    <Link
                        className='flex group items-center px-4 py-2 rounded-full bg-gray-800/10 backdrop-blur-sm text-black hover:bg-primary duration-200'
                        href={'/'}
                        aria-label=''
                    >
                        <div className='w-0 group-hover:w-2 group-hover:mr-2 duration-200 aspect-square bg-gray-800/50 rounded-full'></div>
                        <span>Koberec na zakázku</span>
                    </Link>

                    <Link
                        className='relative group px-4 py-2 rounded-full bg-black text-white backdrop-blur-sm hover:text-black hover:bg-primary duration-200'
                        href={'/'}
                        aria-label=''
                    >
                        <div className='absolute bottom-0 right-0 w-0 group-hover:w-2 group-hover:mr-2 duration-200 aspect-square bg-black rounded-full'></div>
                        <span>Koberec na zakázku</span>
                    </Link>

                    <Link
                        className='relative group px-4 py-2 rounded-full bg-black text-white backdrop-blur-sm hover:text-black hover:bg-primary duration-200'
                        href={'/'}
                        aria-label=''
                    >
                        <div className='absolute bottom-0 right-0 w-0 group-hover:w-2 group-hover:mr-2 duration-200 aspect-square bg-black rounded-full'></div>
                        <span>Kurzy</span>
                    </Link>

                    {/* <Link className='font-bold' href={'/'} aria-label=''>
                        <span>Kurzy</span>
                    </Link>

                    <Link className='font-bold' href={'/'} aria-label=''>
                        <span>Eshop</span>
                    </Link>

                    <Link className='font-bold' href={'/'} aria-label=''>
                        <span>Kontakt</span>
                    </Link> */}
                </div>

                <button
                    type='button'
                    aria-label='Košík'
                    className='flex group justify-center items-center cursor-pointer border h-12 w-auto aspect-square border-black/30 rounded-lg shadow-md'
                    onClick={() => cartTl.play()}
                >
                    <FiShoppingCart
                        className='group-hover:-rotate-6 group-hover:-translate-0.5 duration-300'
                        size={18}
                    ></FiShoppingCart>
                </button>

                <button
                    type='button'
                    aria-label='Košík'
                    className='flex group justify-center gap-2 items-center cursor-pointer rounded-full bg-black text-white px-4 py-2 shadow-md'
                    onClick={() => cartTl.play()}
                >
                    <FiShoppingCart
                        className='group-hover:-rotate-6 group-hover:-translate-0.5 duration-300'
                        size={16}
                    ></FiShoppingCart>

                    <span>Košík (0)</span>
                </button>
            </nav>
        </header>
    )
}

export default Navigation
