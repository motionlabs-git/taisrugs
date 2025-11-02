import WiggleButton from '@/components/Inputs/WiggleButton'
import ButtonHeading from '@/components/UI/ButtonHeading'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex gap-8 pb-12 min-h-[calc(100vh-8rem)]'>
            <div className='flex-2 flex items-center'>
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
            </div>

            <div className='relative flex-1 flex items-center'>
                <div className='relative w-full bg-red-500 aspect-[4/5] flex items-center justify-center'>
                    <div className='absolute left-0 top-0 bg-blue-300 aspect-[4/5] w-1/3 h-auto rounded-2xl overflow-hidden hover:top-auto hover:left-auto'></div>

                    <div className='absolute top-0 right-0 aspect-[4/5] bg-green-200 w-1/3 h-auto rounded-2xl overflow-hidden'></div>

                    <div className='absolute aspect-[4/5] bg-green-200 w-1/2 h-auto rounded-2xl overflow-hidden'></div>
                </div>
            </div>

            {/* <div className='relative flex-1 flex'>
                <div className='relative w-full'>
                    <div className='absolute top-0 left-0 aspect-[4/5] w-full h-auto rounded-2xl overflow-hidden'>
                        <Image
                            src={'/images/rug1.jpg'}
                            alt={'Rug'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    </div>
                    <div className='absolute top-8 left-0 aspect-[4/5] w-full h-auto rounded-2xl overflow-hidden'>
                        <Image
                            src={'/images/rug1.jpg'}
                            alt={'Rug'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    </div>
                    <div className='absolute top-16 left-0 aspect-[4/5] w-full h-auto rounded-2xl overflow-hidden'>
                        <Image
                            src={'/images/rug1.jpg'}
                            alt={'Rug'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    </div>
                    <div className='absolute top-24 left-0 aspect-[4/5] w-full h-auto rounded-2xl overflow-hidden'>
                        <Image
                            src={'/images/rug1.jpg'}
                            alt={'Rug'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    </div>
                    <div className='absolute top-32 left-0 aspect-[4/5] w-full h-auto rounded-2xl overflow-hidden'>
                        <Image
                            src={'/images/rug1.jpg'}
                            alt={'Rug'}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    </div>
                </div> 
            </div>*/}
        </div>
    )
}

export default Hero
