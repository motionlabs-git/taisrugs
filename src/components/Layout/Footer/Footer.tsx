'use client'
import React from 'react'
import Link from 'next/link'
import Contact from '@/components/Layout/Footer/Contact'
import FooterHeading from '../../UI/ButtonHeading'
import Image from 'next/image'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer
            id='footer'
            className='flex flex-col justify-between w-full relative text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% '
        >
            <Contact />

            <section
                id='footer-body'
                className='w-full px-4 sm:px-10 pt-20 pb-2 sticky bottom-0 '
            >
                <div className='w-full flex flex-col md:flex-row justify-between gap-8'>
                    <div className='flex flex-2 flex-col'>
                        <h2 className='!text-[6vw] font-archivo'>Tais rugs.</h2>

                        <p>Ručně vytvářené koberce</p>
                    </div>
                    <div className='flex-1'>
                        <FooterHeading text={'Odkazy'}></FooterHeading>

                        <ul className='mt-4'>
                            <li>
                                <Link href={'/'}>Domů</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Koberce na zakázku</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Eshop</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Kurzy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <FooterHeading
                            text={'Kontaktní informace'}
                        ></FooterHeading>

                        <ul className='mt-4'>
                            <li>
                                <Link href={'/'}>Domů</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Koberce na zakázku</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Eshop</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Kurzy</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-500 my-4'></div>

                <div className='flex justify-between flex-col sm:flex-row items-center gap-1'>
                    <p className='text-xs'>
                        &#169; {year === 2025 ? year : `2025 - ${year}`} | {''}
                        <Link href={'/'} aria-label='Odkaz domů'>
                            TaisRugs
                        </Link>
                    </p>

                    <p className='text-xs'>
                        Web vytvořilo studio
                        <Link
                            target='_blank'
                            href={'https://motionlabs.cz/'}
                            className='ml-1'
                            aria-label='Odkaz na studio Motion Labs'
                        >
                            <Image
                                src={'/ml_logo_white.svg'}
                                alt={'MotionLabs logo'}
                                width={100}
                                height={100}
                                className='inline w-6 pb-1'
                            />{' '}
                            MotionLabs
                        </Link>
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default Footer
