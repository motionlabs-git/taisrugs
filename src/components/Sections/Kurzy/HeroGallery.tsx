'use client'
import React, { useEffect, useState } from 'react'

const images = ['1', '2', '3']

const HeroGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prev) => (prev === 2 ? 0 : prev + 1))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='flex-2 h-auto w-xl flex justify-center items-center'>
            <div className='relative w-full bg-blue-200 h-full flex justify-center items-center'>
                {images.map((image, index) => {
                    // let degree = 360 / images.length

                    return (
                        <div
                            key={index}
                            className={`bg-red-100 aspect-[4/5] w-1/3 h-auto absolute ${
                                selectedIndex < index && 'p-4 -translate-x-full'
                            } ${
                                selectedIndex < index &&
                                'p-4 translate-x-[-200%]'
                            } duration-400`}
                        >
                            <div className='w-full h-full bg-blue-200 rounded-2xl rotate-y-12'></div>
                        </div>
                    )
                })}

                {/* <div className='bg-red-100 aspect-[4/5] w-1/3 h-auto absolute p-4 -translate-x-full'>
                    <div className='w-full h-full bg-blue-200 rounded-2xl rotate-y-12'></div>
                </div>

                <div className='bg-red-100 aspect-[4/5] w-1/3 h-auto absolute p-1'>
                    <div className='w-full h-full bg-blue-200 rounded-2xl'></div>
                </div>

                <div className='bg-red-100 aspect-[4/5] w-1/3 h-auto absolute p-4 translate-x-full'>
                    <div className='w-full h-full bg-blue-200 rounded-2xl -rotate-y-12'></div>
                </div> */}
            </div>

            {/* {images.map((image, index) => {
                // let degree = 360 / images.length

                return (
                    <div
                        key={index}
                        className='w-full h-full origin-left absolute bg-blue-400 flex items-center justify-center '
                    >
                        <div className='aspect-[4/5] w-2/3 bg-red-400 rounded-2xl '></div>
                    </div>
                )
            })} */}
        </div>
    )
}

export default HeroGallery
