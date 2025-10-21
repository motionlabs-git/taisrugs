'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import Contact from '@/components/Layout/Footer/Contact'
import FooterHeading from '../../UI/ButtonHeading'

const Footer = () => {
    useEffect(() => {
        gsap.to('#footer-body', {
            scrollTrigger: {
                trigger: '#footer-body',
                scrub: 0.5,
                start: 'top+=100% bottom',
                end: 'bottom+=100% bottom',
            },
            translateY: 0,
        })
    }, [])

    return (
        <footer
            id='footer'
            className='w-full text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75%'
        >
            <Contact />

            <div
                id='footer-body'
                className='p-10 -translate-y-full z-0 flex flex-col md:flex-row justify-between gap-8'
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
                    <FooterHeading text={'Kontakt'}></FooterHeading>

                    <ul className='mt-4'></ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
