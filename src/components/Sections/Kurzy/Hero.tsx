import WiggleButton from '@/components/Inputs/WiggleButton'
import ButtonHeading from '@/components/UI/ButtonHeading'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex gap-8 min-h-screen pb-12'>
            <div className='flex-2 '>
                <ButtonHeading text='Přijď vyrábět' invert></ButtonHeading>

                <h1 className='text-4xl font-bold mt-2'>Tvořivé kurzy</h1>

                <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, sapiente iste quo rerum eveniet harum laborum eius
                    corporis ab voluptates perferendis excepturi minus
                    voluptatum repellat quos labore accusamus! Laboriosam,
                    mollitia.
                </p>
                <WiggleButton
                    text={'Zabookovat kurz'}
                    className='invert grayscale-100 mt-8'
                    link='#booking'
                    scrollTo
                />
            </div>

            <div className='relative flex-1 flex -centeitemsr'>
                <div className='relative aspect-[4/5] w-full'>
                    <div className='absolute top-0 w-full h-full rounded-2xl overflow-hidden'>
                        <Image
                            src={'/images/rug1.jpg'}
                            alt={'Rug'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    </div>
                    <div className='absolute top-10 rounded-2xl overflow-hidden'>
                        <Image
                            src={'/images/rug1.jpg'}
                            alt={'Rug'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
