import React from 'react'
import {
    FiArrowRightCircle,
    FiChevronLeft,
    FiChevronRight,
} from 'react-icons/fi'

const About = () => {
    return (
        <section
            id='about'
            className='h-[100dvh] w-full flex pt-40 pb-24 px-24'
        >
            <div className='flex-4'>
                <h1 className='font-bold text-4xl'>Tais rugs.</h1>
                <h2 className='mt-4 text-lg font-bold'>
                    Tvořivé kurzy, koberečky na zakázku
                </h2>
                <div className='mt-60 w-[50vw] pl-[5vw]'>
                    <p className=' text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aperiam dolorem cupiditate aliquam iusto dolore
                        cum, ex dolor autem, illum sint doloremque sequi saepe a
                        eum ullam? Expedita nemo sit minus?
                    </p>

                    <button
                        type='button'
                        aria-label='Vidět více'
                        className='relative group w-fit h-fit mt-8 items-center rounded-full border border-white hover:border-primary duration-200  cursor-pointer'
                    >
                        <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6  duration-200 px-10 py-4 overflow-hidden rounded-full text-white group-hover:text-black'>
                            <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                            <FiArrowRightCircle
                                size={20}
                                className='relative text-inherit duration-200'
                            ></FiArrowRightCircle>

                            <span className=' relative text-nowrap'>
                                Přejít do obchodu
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
                    </button>
                </div>
            </div>

            <div className='flex self-center  flex-2 gap-8 items-center h-fit'>
                <button
                    type='button'
                    aria-label='Předchozí obrázek'
                    className='w-12 h-auto aspect-square flex justify-center items-center bg-white text-black rounded-full'
                >
                    <FiChevronLeft size={24} className='pr-0.5'></FiChevronLeft>
                </button>
                <div className='relative w-full aspect-[4/5]'>
                    <div className='absolute top-0 left-0 -rotate-12 w-full h-full bg-green-100 rounded-2xl'></div>
                    <div className='absolute top-0 left-0 -rotate-6 w-full h-full bg-green-300 rounded-2xl'></div>
                    <div className='absolute top-0 left-0 w-full h-full bg-green-400 rounded-2xl'></div>
                    <div className='absolute top-0 left-0 rotate-6 w-full h-full bg-green-500 rounded-2xl'></div>
                    <div className='absolute top-0 left-0 rotate-12 w-full h-full bg-green-600 rounded-2xl'></div>
                </div>
                <button
                    type='button'
                    aria-label='Předchozí obrázek'
                    className='w-12 h-auto aspect-square flex justify-center items-center bg-white text-black rounded-full'
                >
                    <FiChevronRight
                        size={24}
                        className='pl-0.5'
                    ></FiChevronRight>
                </button>
            </div>
        </section>
    )
}

export default About
