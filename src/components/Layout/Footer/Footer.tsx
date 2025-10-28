'use client'
import React from 'react'
import Link from 'next/link'
import Contact from '@/components/Layout/Footer/Contact'
import FooterHeading from '../../UI/ButtonHeading'

const Footer = () => {
    return (
        <footer
            id='footer'
            className='flex flex-col justify-between w-full relative h-screen text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75%'
        >
            <Contact />

            <section
                id='footer-body'
                className='w-full p-10 sticky bottom-0 flex flex-col md:flex-row justify-between gap-8'
            >
                <div className='flex flex-2 flex-col'>
                    <h2 className='text-[6vw] font-archivo'>Tais rugs.</h2>

                    <p className=''>Ručně vytvářené koberce</p>
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
                    <FooterHeading text={'Kontaktní informace'}></FooterHeading>

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
            </section>
        </footer>
    )
}

export default Footer
