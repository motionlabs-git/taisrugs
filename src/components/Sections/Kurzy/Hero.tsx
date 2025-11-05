import WiggleButton from '@/components/Inputs/WiggleButton'
import ButtonHeading from '@/components/UI/ButtonHeading'
import React from 'react'
import HeroGallery from './HeroGallery'

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row gap-8 pb-16 min-h-[calc(100vh-8rem)]'>
            <div className='flex-2'>
                <div>
                    <ButtonHeading text='Tvořívé kurzy' invert></ButtonHeading>

                    <h1 className='mt-4'>Přijď si vyrobit kobereček</h1>

                    <p className='mt-4 max-w-2/3'>
                        Text o tom jak to na kurzu chodí, jak dlouho trvá atd
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae, sapiente iste quo rerum eveniet harum laborum
                        eius corporis ab voluptates perferendis excepturi minus
                        voluptatum repellat quos labore accusamus! Laboriosam,
                        mollitia.
                    </p>

                    <p className='mt-4'>
                        Zaujal tě kurz a chceš si rezervovat místo pro sebe?
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
            </div>

            <HeroGallery />
        </section>
    )
}

export default Hero
