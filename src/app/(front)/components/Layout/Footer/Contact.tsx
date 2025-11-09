import Link from 'next/link'
import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import LogoShape from '../../../../../../public/LogoShape'

const Contact = () => {
    return (
        <section className='rounded-b-3xl w-full relative bg-white py-40 items-center flex justify-center overflow-hidden z-20'>
            <LogoShape className='text-transparent stroke-2 stroke-gray-400 w-[50vw] md:w-[20vw] absolute'></LogoShape>
            <LogoShape className='text-transparent stroke-2 stroke-gray-400  w-[50vw] md:w-[20vw] absolute scale-110'></LogoShape>
            <LogoShape className='text-transparent stroke-2 stroke-gray-400  w-[50vw] md:w-[20vw] absolute scale-120'></LogoShape>

            <div className='relative flex flex-col gap-2 justify-center items-center'>
                <p className='text-gray-600 text-sm '>KONTAKT</p>

                <Link href={'mailto:'} className='text-black'>
                    <h1 className='font-archivo !text-[10vw] md:!text-[6vw]'>
                        taisrugs@email.cz
                    </h1>
                </Link>

                <Link
                    href={'https://www.instagram.com/tais_rugs/'}
                    target='_blank'
                    type='button'
                    aria-label='Vidět více'
                    className='invert grayscale-100 brightness-100 relative group w-fit h-fit items-center rounded-full border border-white hover:border-primary duration-200  cursor-pointer'
                >
                    <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6  duration-200 px-10 py-4 overflow-hidden rounded-full text-white group-hover:text-black'>
                        <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                        <FiInstagram
                            size={20}
                            className='relative text-inherit duration-200'
                        ></FiInstagram>

                        <span className=' relative text-nowrap duration-200'>
                            Instagram
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
                </Link>
            </div>
        </section>
    )
}

export default Contact
