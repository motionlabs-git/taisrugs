import MouseShift from '@/components/Motion/MouseShift'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='relative w-full h-[100dvh] flex justify-center items-center'>
            <div className='absolute'>
                {/* <h1 className='group relative font-superVibes text-[4vw] text-primary font-bold'>
                        <span className='absolute top-0 left-0 translate-y-2 -translate-x-2 text-violet-400 group-hover:translate-y-3 group-hover:-translate-x-3 duration-200'>
                            Tais Rugsěšččšřáú
                        </span>
                        <span className='absolute top-0 left-0 translate-y-1 -translate-x-1 text-green-400 group-hover:translate-y-2 group-hover:-translate-x-2 duration-200'>
                            Tais Rugsěšččšřáú
                        </span>
                        <span className='absolute top-0 left-0 text-primary group-hover:translate-y-1 group-hover:-translate-x-1 duration-200'>
                            Tais Rugsěšččšřáú
                        </span>
                        <span className='relative text-black'>
                            Tais Rugsěšččšřáú
                        </span>
                    </h1> */}

                <h1 className='!text-[10vw] md:!text-[8vw] font-bold font-archivo max-w-[66vw] relative pl-[0.06em] pb-[0.06em] pt-[0.03em] pr-[0.03em] sm:hover:pt-[0.06em] sm:hover:pl-[0.03em] sm:hover:pr-[0.06em] sm:hover:pb-[0.03em] duration-200'>
                    <span className='absolute inset-0 translate-y-[0.8vw] text-primary'>
                        Transform your space
                    </span>
                    <span className='relative text-black'>
                        Transform your space
                    </span>
                </h1>
                <h1 className='group relative font-superVibes text-[7vw] text-primary font-bold'>
                    <span className='absolute top-0 left-0 translate-y-2 -translate-x-2 text-violet-400 group-hover:translate-y-3 group-hover:-translate-x-3 duration-200'>
                        Transform your space
                    </span>
                    <span className='absolute top-0 left-0 translate-y-1 -translate-x-1 text-green-400 group-hover:translate-y-2 group-hover:-translate-x-2 duration-200'>
                        Transform your space
                    </span>
                    <span className='absolute top-0 left-0 text-blue-400 group-hover:translate-y-1 group-hover:-translate-x-1 duration-200'>
                        Transform your space
                    </span>
                    <span className='relative text-black'>
                        Transform your space
                    </span>
                </h1>
            </div>

            <MouseShift
                scale={2}
                className='w-full h-full absolute z-0 inset-0'
            >
                <div className='relative w-full h-full'>
                    <div className='absolute right-3/5 top-3/5 w-[15%] aspect-square bg-blue-500 rounded-4xl hover:scale-105 duration-300'>
                        <Image
                            src={'/images/Hero/1.png'}
                            alt={'Hero image'}
                            width={800}
                            height={800}
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
        </div>
    )
}

export default Hero
