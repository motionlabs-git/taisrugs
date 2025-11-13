'use client'
import React from 'react'
import ButtonHeading from '@/app/(front)/components/UI/ButtonHeading'

import bgImg from '@/../public/LogoStroke.svg'
import BookingForm from '@/app/(front)/components/Forms/BookingForm'

const Booking = () => {
    return (
        <section className='pt-16 w-full' id='booking'>
            <div
                id='booking-body'
                className='relative h-full w-full text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% rounded-3xl py-4 px-4 sm:p-10  '
            >
                <div
                    className='w-full h-full absolute left-0 top-0'
                    style={{
                        backgroundImage: `url(${bgImg.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '195% 16%',
                        backgroundSize: '80%',
                        backgroundAttachment: 'fixed',
                    }}
                ></div>

                <div className='relative h-full pb-12 flex flex-col lg:flex-row w-full gap-8 '>
                    <div className='flex-5 xl:flex-5'>
                        <ButtonHeading text='Zabookovat kurz'></ButtonHeading>
                        <h1 className='mt-4 max-w-2/3'>
                            Vyber si dostupný termín
                        </h1>
                        <p className='mt-4 lg:max-w-2/3'>
                            Chceš si vyzkoušet tufting na vlastní kůži? Vyber si
                            termín, který ti vyhovuje, a přijď si vytvořit svůj
                            originální kobereček. Nemusíš mít žádné zkušenosti –
                            všechno tě naučím krok za krokem. Stačí chuť tvořit,
                            dobrá nálada a pohodlné oblečení.✨
                        </p>
                    </div>

                    <BookingForm></BookingForm>
                </div>
            </div>
        </section>
    )
}

export default Booking
