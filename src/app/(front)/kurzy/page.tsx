import React from 'react'
import Hero from '@/app/(front)/components/Sections/Kurzy/Hero'
import Booking from '@/app/(front)/components/Sections/Kurzy/Booking'
import Vouchers from '@/app/(front)/components/Sections/Kurzy/Vouchers'
import { Metadata } from 'next'

import bgImg from '@/../public/LogoStroke.svg'

export const metadata: Metadata = {
    title: 'Kurzy',
    description:
        'Zažij dva dny plné tvoření, barev a dobré nálady! Na kurzu tuftingu si vyzkoušíš, jak se vyrábějí ručně tkané koberce – od návrhu až po finální úpravu.',
}

const Kurzy = () => {
    // bg-radial-[at_80%80%] from-[#ffdb85] to-[#f8cd69] to-75%
    return (
        <div
            className='min-h-[100vh] pb-12 w-full pageWrapper'
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '195% 16%',
                backgroundSize: '80%',
                backgroundAttachment: 'fixed',
            }}
        >
            <Hero />
            <Booking />
            <Vouchers />
        </div>
    )
}

export default Kurzy
