import WiggleButton from '@/app/(front)/components/Inputs/WiggleButton'
import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import ButtonHeading from '../components/UI/ButtonHeading'

export const metadata: Metadata = {
    title: 'Stránka nebyla nalezena',
    description: 'Tato stránka neexistuje. Pokračujte na hlavní stránku Tais Rugs.',
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: 'Tais Rugs | Stránka nebyla nalezena',
        description: 'Tato stránka neexistuje. Pokračujte na hlavní stránku Tais Rugs.',
        images: '/seo/open-graph.png',
    },
}

const E404 = () => {
    return (
        <section className='pageWrapper min-h-screen flex justify-center items-center'>
            <div className='flex flex-col-reverse sm:flex-row gap-4 sm:gap-8'>
                <div>
                    <div className='aspect-[4/5] w-2/3 sm:w-52 md:w-96 rounded-2xl overflow-hidden sm:-translate-10 shadow-sm'>
                        <Image
                            src={'/images/KoberecNaZakazku/Gallery/4.webp'}
                            alt={'Ručně tuftovaný koberec od Tais Rugs'}
                            width={600}
                            height={800}
                        />
                    </div>
                </div>

                <div className='relative flex flex-col gap-4'>
                    <div>
                        <ButtonHeading text={'Chyba 404'} invert />
                    </div>

                    <h1>Ajaj, to se nepovedlo</h1>
                    <p>Tato stránka není dostupná</p>
                    <WiggleButton
                        className='invert text-white grayscale-100 mt-4'
                        text='Domů'
                        link={'/'}
                    />
                </div>
            </div>
        </section>
    )
}

export default E404
