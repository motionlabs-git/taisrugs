'use client'
import React from 'react'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from '../Cart/Cart'

const Navigation = () => {
    return (
        <header className='fixed top-0 z-50 w-full flex justify-center py-4'>
            <Cart></Cart>
            <nav className='flex max-w-[1376px] w-full justify-between items-center bg-white border border-black/30 shadow-md px-6 py-6 rounded-xl'>
                <div className='flex gap-4 items-center'>
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
                    className='flex gap-2 items-center cursor-pointer'
                >
                    <FiShoppingCart></FiShoppingCart> Košík (0)
                </button>
            </nav>
        </header>
    )
}

export default Navigation
