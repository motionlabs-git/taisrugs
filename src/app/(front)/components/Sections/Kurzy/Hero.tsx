import WiggleButton from '@/app/(front)/components/Inputs/WiggleButton'
import ButtonHeading from '@/app/(front)/components/UI/ButtonHeading'
import React from 'react'
import WiggleGallery from '@/app/(front)/components/UI/WiggleGallery'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row gap-20 md:gap-4 min-h-[calc(100vh-8rem)]'>
            <div className='flex-2'>
                <div className='flex flex-col gap-12'>
                    <div>
                        <ButtonHeading
                            text='Tvořívé kurzy'
                            invert
                        ></ButtonHeading>

                        <h1 className='mt-4'>
                            Přijď si vyrobit vlastní kobereček🎨
                        </h1>

                        <p className='mt-4 max-w-2/3'>
                            Zažij dva dny plné tvoření, barev a dobré nálady! Na
                            kurzu tuftingu si vyzkoušíš, jak se vyrábějí ručně
                            tkané koberce – od návrhu až po finální úpravu.
                            Všechno tě naučím krok za krokem a na konci si
                            odneseš svůj vlastní originální kobereček.
                        </p>

                        <p className='mt-4'>
                            Kurz je ideální pro jednotlivce, páry.
                        </p>
                        <p>
                            Nemusíš mít žádné zkušenosti – stačí chuť tvořit a
                            trochu fantazie. 💛
                        </p>

                        <p className='mt-4'>
                            Zaujalo tě to? Vyber si termín nebo daruj zážitek
                            někomu blízkému.
                        </p>

                        <div className='flex flex-wrap gap-4 mt-8'>
                            <WiggleButton
                                text='Zarezervovat kurz'
                                className='invert grayscale-100 border-white text-white'
                                link='#booking'
                                scrollTo
                                wiggleTextDeny
                            />
                            <WiggleButton
                                text='Koupit voucher'
                                className='invert grayscale-100 border-white text-white'
                                link='#vouchers'
                                scrollTo
                                wiggleTextDeny
                            />
                        </div>
                    </div>
                    <div className='relative hidden flex-1 md:flex items-center pl-[15vw]'>
                        <div className='group relative top-0  max-h-96 w-fit opacity-50 hover:opacity-80 duration-200 hover:translate-x-2 hover:-translate-y-5 hover:rotate-4'>
                            <Image
                                src={'/images/Kurzy/Hero/tufting_gun.png'}
                                width={400}
                                height={805}
                                alt={'Obrázek - "Tufting gun"'}
                                className='object-cover max-h-96 w-fit  '
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>

            <WiggleGallery
                images={[
                    '/images/Kurzy/Hero/1.webp',
                    '/images/Kurzy/Hero/2.webp',

                    '/images/Kurzy/Hero/3.webp',

                    '/images/Kurzy/Hero/4.webp',
                ]}
            ></WiggleGallery>
        </section>
    )
}

export default Hero
