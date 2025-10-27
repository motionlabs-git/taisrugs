import React from 'react'
import Hero from '@/components/Sections/Kurzy/Hero'
import Booking from '@/components/Sections/Kurzy/Booking'

const Kurzy = () => {
    // bg-radial-[at_80%80%] from-[#ffdb85] to-[#f8cd69] to-75%
    return (
        <section className='min-h-[100vh] pb-12 w-full pageWrapper'>
            <Hero />
            <Booking />
        </section>
    )
}

export default Kurzy
