import MouseShift from '@/components/Motion/MouseShift'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative h-[100dvh] flex justify-center items-center'>
            <div className='absolute z-10'>
                <h1 className='group relative font-archivo text-[5vw] text-primary font-bold'>
                    <span className='absolute top-0 left-0 translate-y-2 -translate-x-2 text-violet-400 group-hover:translate-y-3 group-hover:-translate-x-3 duration-200'>
                        Tranform your space
                    </span>
                    <span className='absolute top-0 left-0 translate-y-1 -translate-x-1 text-green-400 group-hover:translate-y-2 group-hover:-translate-x-2 duration-200'>
                        Tranform your space
                    </span>
                    <span className='absolute top-0 left-0 text-primary group-hover:translate-y-1 group-hover:-translate-x-1 duration-200'>
                        Tranform your space
                    </span>
                    <span className='relative text-black'>
                        Tranform your space
                    </span>
                </h1>

                <h2 className='font-archivo'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Expedita consequuntur sint corrupti officiis asperiores
                    commodi quidem, voluptate
                </h2>
            </div>

            <MouseShift
                scale={2}
                className='w-full h-full absolute z-0 inset-0'
            >
                <div className='relative w-full h-full'>
                    <div className='absolute right-3/5 top-3/5 w-[15%] aspect-square bg-blue-500 rounded-4xl' />

                    <div className='absolute left-5/6 top-1/6 w-[20%] aspect-video bg-green-500 rounded-4xl' />

                    <div className='absolute left-4/6 top-4/6 w-[14%] aspect-video bg-orange-500 rounded-4xl' />

                    <div className='absolute left-2/6 top-1/5 w-[17%] aspect-video bg-red-500 rounded-4xl' />

                    <div className='absolute left-1/2 top-1/2 w-[18%] aspect-video bg-purple-500 rounded-4xl' />

                    <div className='absolute left-0 top-0 w-[18%] aspect-video bg-blue-500 rounded-4xl' />

                    <div className='absolute right-0 bottom-0 w-[15%] aspect-video bg-green-500 rounded-4xl' />

                    <div className='absolute left-0 bottom-0 w-[23%] aspect-square bg-red-500 rounded-4xl' />
                </div>
            </MouseShift>
        </div>
    )
}

export default Hero
