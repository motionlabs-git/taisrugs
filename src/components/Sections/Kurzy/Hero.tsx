import WiggleButton from '@/components/Inputs/WiggleButton'
import ButtonHeading from '@/components/UI/ButtonHeading'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex gap-8 min-h-screen pb-12'>
            <div className='flex-2 '>
                <ButtonHeading text='Tvořívé kurzy' invert></ButtonHeading>

                <h1 className='text-4xl font-bold mt-4'>
                    Přijď si vyrobit kobereček
                </h1>

                <p className='mt-4 max-w-2/3'>
                    Text o tom jak to na kurzu chodí, jak dlouho trvá atd Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                    sapiente iste quo rerum eveniet harum laborum eius corporis
                    ab voluptates perferendis excepturi minus voluptatum
                    repellat quos labore accusamus! Laboriosam, mollitia.
                </p>

                <p className='mt-4'>
                    Zaujal tě kurz a chceš si rezervovat místo pro sebe?
                </p>

                <div className='flex gap-4 mt-8'>
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
