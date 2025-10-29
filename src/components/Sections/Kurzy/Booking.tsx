'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const Booking = () => {
    useEffect(() => {
        gsap.to('#booking-body', {
            scrollTrigger: {
                trigger: '#booking',
                scrub: 1,
                start: 'top bottom',
                end: 'bottom bottom',
            },
            scale: 1,
        })
    }, [])

    return (
        <div id='booking' className='w-full h-screen py-12'>
            <div
                id='booking-body'
                className='w-full h-full p-10 scale-80 rounded-3xl text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75%'
            >
                <Image
                    src={'/images/contact-us.png'}
                    alt={'sdf'}
                    width={500}
                    height={500}
                    className='invert'
                ></Image>
            </div>
        </div>
    )
}

export default Booking
