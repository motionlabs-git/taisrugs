'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from '../Cart/Cart'
import gsap from 'gsap'
import NavLink from './NavLink'

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
        <header className='fixed top-0 z-50 w-full flex justify-center py-4'>
            <Cart
                handleCloseCart={() => {
                    cartTl.reverse()
                }}
            ></Cart>
            <nav className='flex max-w-[800px] w-full gap-4'>
                <div className='flex gap-4 items-center flex-1 bg-white border border-black/30 px-6 h-14 rounded-xl shadow-md'>
                    <NavLink text={'Domů'} link={'/'}></NavLink>

                    <Link href={'/'} aria-label=''>
                        <span className='font-bold'>Domů</span>
                    </Link>

                    <Link className='font-bold' href={'/'} aria-label=''>
                        <span>Koberec na zakázku</span>
                    </Link>

                    <Link className='font-bold' href={'/'} aria-label=''>
                        <span>Kurzy</span>
                    </Link>

                    <Link className='font-bold' href={'/'} aria-label=''>
                        <span>Eshop</span>
                    </Link>

                    <Link className='font-bold' href={'/'} aria-label=''>
                        <span>Kontakt</span>
                    </Link>
                </div>

                <button
                    type='button'
                    aria-label='Košík'
                    className='flex justify-center items-center cursor-pointer border h-14 w-auto aspect-square border-black/30 bg-white rounded-xl shadow-md'
                    onClick={() => cartTl.play()}
                >
                    <FiShoppingCart size={20}></FiShoppingCart>
                </button>
            </nav>
        </header>
    )
}

export default Navigation
