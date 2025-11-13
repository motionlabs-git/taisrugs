'use client'
import React from 'react'
import Link from 'next/link'
import Contact from '@/app/(front)/components/Layout/Footer/Contact'
import FooterHeading from '../../UI/ButtonHeading'
import Image from 'next/image'
import FooterLink from './FooterLink'
import { FiClock, FiMail, FiMap, FiPhone } from 'react-icons/fi'

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
                <div className='w-full flex flex-col md:flex-row justify-between gap-8 flex-wrap text-nowrap'>
                    <div className='flex flex-2 flex-col'>
                        <h2 className='!text-[13vw] md:!text-[6vw] font-archivo'>
                            Tais rugs.
                        </h2>

                        <p>Ručně vytvářené koberce</p>
                    </div>
                    <div className='flex-1'>
                        <FooterHeading text={'Odkazy'}></FooterHeading>

                        <ul className='mt-4'>
                            <FooterLink
                                link={'/koberec-na-zakazku'}
                                text={'Koberec na zakázku'}
                            />
                            <FooterLink link={'/kontakt'} text={'Kontakt'} />
                            <FooterLink link={'/'} text={'Domů'} />

                            <FooterLink link={'/eshop'} text={'Eshop'} />

                            <FooterLink link={'/kurzy'} text={'Kurzy'} />
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <FooterHeading text='Informace pro vás'></FooterHeading>

                        <ul className='mt-4'>
                            <FooterLink
                                link={'/obchodni-podminky'}
                                text={'Obchodní podmínky'}
                            />
                            <FooterLink
                                link={'/reklamacni-rad'}
                                text={'Reklamační řád'}
                            />
                            <FooterLink link={'/cookies'} text={'Cookies'} />
                            <FooterLink link={'/gdpr'} text={'GDPR'} />
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <FooterHeading
                            text={'Kontaktní informace'}
                        ></FooterHeading>

                        <ul className='mt-4'>
                            <li>
                                <Link
                                    className='py-1 flex items-center gap-2'
                                    href={
                                        'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moskevsk%C3%A1%20Praha%2010+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                                    }
                                    target='_blank'
                                >
                                    <FiMap></FiMap>
                                    <span>Moskevská , Praha 10</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='py-1 flex items-center gap-2'
                                    href={'tel:+420799025999'}
                                >
                                    <FiPhone></FiPhone>
                                    <span>+420 799 025 999</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='&#77;&#97;&#105;&#76;&#84;&#79;&#58;&#116;&#97;&#105;&#115;&#114;&#117;&#103;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
                                    className='py-1 flex items-center gap-2'
                                >
                                    <FiMail></FiMail>
                                    <span>
                                        {' '}
                                        &#116;&#97;&#105;&#115;&#114;&#117;&#103;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                                    </span>
                                </Link>
                            </li>
                            <li className='py-1 flex items-center gap-2'>
                                <FiClock></FiClock>
                                <span>Otevírací doba: Po–Pá 10:00 – 18:00</span>
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
