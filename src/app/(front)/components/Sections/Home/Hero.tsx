import MouseShift from '@/app/(front)/components/Motion/MouseShift'
import React from 'react'
import Image from 'next/image'
import WiggleButton from '../../Inputs/WiggleButton'

const Hero = () => {
    return (
        <div className='relative w-full h-[100dvh] flex justify-center items-center'>
            <MouseShift
                scale={2}
                className='w-full h-full absolute z-0 inset-0'
            >
                <div className='relative w-full h-full'>
                    <div className='absolute right-3/5 top-3/5 w-[10%] aspect-square hover:scale-105 duration-300'>
                        <Image
                            src={'/LogoSVG.svg'}
                            alt={'Hero image'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute left-5/6 top-1/6 w-[20%] aspect-square rounded-4xl hover:scale-105 duration-300'>
                        <Image
                            src={'/images/Hero/2.png'}
                            alt={'Hero image'}
                            width={800}
                            height={800}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute left-4/6 top-4/6 w-[14%] aspect-square  rounded-4xl hover:scale-105 duration-300'>
                        <Image
                            src={'/images/Hero/3.png'}
                            alt={'Hero image'}
                            width={800}
                            height={800}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute left-2/6 top-1/5 w-[17%] aspect-vid rounded-4xl hover:scale-105 duration-300'>
                        <Image
                            src={'/images/Hero/4.png'}
                            alt={'Hero image'}
                            width={800}
                            height={800}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute left-1/2 top-1/2 w-[18%] aspect-square  rounded-4xl hover:scale-105 duration-300'>
                        <Image
                            src={'/images/Hero/5.png'}
                            alt={'Hero image'}
                            width={800}
                            height={800}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute left-0 top-0 w-[18%] aspect-squar rounded-4xl hover:scale-105 duration-300'>
                        <Image
                            src={'/images/Hero/6.png'}
                            alt={'Hero image'}
                            width={800}
                            height={800}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute right-0 bottom-0 w-[15%] aspect-square rounded-4xl hover:scale-105 duration-300'>
                        <Image
                            src={'/images/Hero/7.png'}
                            alt={'Hero image'}
                            width={800}
                            height={800}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute left-0 bottom-0 w-[23%] aspect-squa rounded-4xl hover:scale-105 duration-300'></div>
                </div>
            </MouseShift>

            <div className='absolute'>
                <div className='p-4 sm:max-w-[70vw]'>
                    <h1 className='!text-[9vw] md:!text-[5vw] font-bold font-archivo mix-blend-difference relative pl-[0.06em] pb-[0.06em] sm:max-w-4/5 pt-[0.03em] pr-[0.03em] sm:hover:pt-[0.06em] sm:hover:pl-[0.03em] sm:hover:pr-[0.06em] sm:hover:pb-[0.03em] duration-200'>
                        <span className='absolute inset-0 translate-y-[0.8vw] text-[#00247a]'>
                            Transform your space today.
                        </span>
                        <span className='relative text-white'>
                            Transform your space today.
                        </span>
                    </h1>

                    <p className='mt-4 max-w-2/3 text-white mix-blend-difference'>
                        Originální koberce, které nejsou jen na zem.
                    </p>

                    <p className='mt-4 max-w-2/3 text-white mix-blend-difference'>
                        Ručně vyráběné kousky na míru, s láskou a smyslem pro
                        detail.
                    </p>
                    <p className='mt-4 max-w-2/3 text-white mix-blend-difference'>
                        Ať už chcete koberec s vaším mazlíčkem, autem, nebo
                        čistě abstraktní design – společně ho vymyslíme,
                        navrhneme a já ho pro vás vytvořím.
                    </p>

                    <WiggleButton
                        text={'Objednat koberec na míru'}
                        link={'/koberec-na-zakazku'}
                        className='mt-8 invert  mix-blend-difference text-black '
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
