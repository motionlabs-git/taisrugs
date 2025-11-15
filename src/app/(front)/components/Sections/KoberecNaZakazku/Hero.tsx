import WiggleButton from '@/app/(front)/components/Inputs/WiggleButton'
import ButtonHeading from '@/app/(front)/components/UI/ButtonHeading'
import React from 'react'

import Image from 'next/image'
import WiggleGallery from '@/app/(front)/components/UI/WiggleGallery'

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row gap-20 md:gap-4 min-h-[calc(100vh-8rem)]  '>
            <div className=' flex-2'>
                <div className='flex flex-col gap-12'>
                    <div>
                        <ButtonHeading
                            text='Zakázková výroba'
                            invert
                        ></ButtonHeading>

                        <h1 className='mt-4'>
                            Chceš kobereček s vlastním motivem?
                        </h1>

                        <p className='mt-4 max-w-2/3'>
                            Z fotky, loga nebo tvého oblíbeného obrázku ti
                            vytvořím originální kobereček na míru. Stačí mi
                            poslat návrh nebo fotku, domluvíme si detaily
                            velikosti, barev i tvaru – a já se pustím do práce.
                            Každý kus je ručně vyrobený s láskou, takže žádné
                            dva kousky nejsou stejné.🧡
                        </p>

                        <div className='flex flex-wrap gap-4 mt-8'>
                            <WiggleButton
                                text='Objednat kobereček'
                                className='invert grayscale-100 border-white text-white'
                                link='#contact-us'
                                scrollTo
                                wiggleTextDeny
                            />
                        </div>
                    </div>
                    <div className='relative hidden flex-1 md:flex items-center pl-[15vw]'>
                        <div className='group relative top-0  max-h-96 w-fit opacity-50 hover:opacity-80 duration-200 hover:translate-x-2 hover:-translate-y-5 hover:rotate-4'>
                            <Image
                                src={'/images/KoberecNaZakazku/Hero/Cup.png'}
                                width={400}
                                height={805}
                                alt={
                                    'Obrázek - "Je na čase si objedna koberec :)"'
                                }
                                className='object-cover max-h-96 w-fit  '
                            ></Image>
                            <Image
                                src={'/images/KoberecNaZakazku/Hero/CupCap.png'}
                                width={400}
                                height={805}
                                alt={
                                    'Obrázek - "Je na čase si objedna koberec :)"'
                                }
                                className='object-cover absolute inset-0 max-h-96 w-fit group-hover:rotate-12 duration-200 origin-bottom-right '
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>

            <WiggleGallery
                images={[
                    '/images/KoberecNaZakazku/Gallery/4.webp',
                    '/images/KoberecNaZakazku/Gallery/3.webp',
                    '/images/KoberecNaZakazku/Gallery/1.webp',
                    '/images/KoberecNaZakazku/Gallery/2.webp',
                ]}
            ></WiggleGallery>
        </section>
    )
}

export default Hero
