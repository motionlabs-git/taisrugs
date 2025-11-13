import ContactUs from '@/app/(front)/components/Layout/Contact/ContactUs'
import { Metadata } from 'next'
import React from 'react'

import bgImg from '@/../public/LogoStroke.svg'
import Hero from '@/app/(front)/components/Sections/KoberecNaZakazku/Hero'

export const metadata: Metadata = {
    title: 'Koberec na zakázku',
    description:
        'Z fotky, loga nebo tvého oblíbeného obrázku vytvořím originální kobereček na míru. Stačí mi poslat návrh, domluvíme si detaily velikosti, barev i tvaru.',
}

const KoberecNaZakazku = () => {
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

            <ContactUs />
        </div>
    )
}

export default KoberecNaZakazku
