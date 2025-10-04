'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
    return (
        <header className='w-full flex justify-center py-4'>
            <nav className='flex flex-col items-center'>
                <Link href={'/'} aria-label='Logo' className=''>
                    <Image
                        src={'/logo.png'}
                        alt={'Logo'}
                        width={300}
                        height={300}
                        className='w-32 hover:scale-95 hover:-rotate-12 duration-300'
                    ></Image>
                </Link>

                <div className='flex gap-4 items-center mt-4'>
                    <Link href={'/'} aria-label=''>
                        <span>Domů</span>
                    </Link>

                    <Link href={'/'} aria-label=''>
                        <span>Koberec na zakázku</span>
                    </Link>

                    <Link href={'/'} aria-label=''>
                        <span>Kurzy</span>
                    </Link>

                    <Link href={'/'} aria-label=''>
                        <span>Eshop</span>
                    </Link>

                    <Link href={'/'} aria-label=''>
                        <span>Kontakt</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
