import React from 'react'

const Cookies = () => {
    return (
        <div className='pageWrapper !pt-52 pb-10 sm:pb-16 min-h-screen bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% text-white rounded-b-3xl'>
            <h1 className='!text-[10vw] md:!text-[8vw] font-bold font-archivo max-w-[66vw] relative pl-[0.06em] pb-[0.06em] pt-[0.03em] pr-[0.03em] sm:hover:pt-[0.06em] sm:hover:pl-[0.03em] sm:hover:pr-[0.06em] sm:hover:pb-[0.03em] duration-200'>
                <span className='absolute inset-0 translate-y-[0.8vw] text-primary'>
                    Cookies
                </span>
                <span className='relative text-white'>Cookies</span>
            </h1>

            <div className='mt-10 md:mt-20 space-y-4 md:space-y-10'>
                <section className='bg-zinc-900 border border-zinc-500/20 rounded-2xl p-4 md:p-10'></section>
            </div>
        </div>
    )
}

export default Cookies
