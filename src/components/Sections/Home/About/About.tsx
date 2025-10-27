import React from 'react'
import AboutGallery from './AboutGallery'
import WiggleButton from '@/components/Inputs/WiggleButton'

const About = () => {
    return (
        <section
            id='about'
            className='md:h-[100dvh] w-full flex flex-col gap-20 md:gap-10 md:flex-row pt-40 pb-24 px-4 md:px-24'
        >
            <div className='flex-4'>
                <h1 className='font-bold text-4xl'>Tais rugs.</h1>
                <h2 className='mt-4 text-lg font-bold'>
                    Tvořivé kurzy, koberečky na zakázku
                </h2>
                <div className='mt-8 md:mt-60 md:w-[50vw] md:pl-[5vw]'>
                    <p className=' text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aperiam dolorem cupiditate aliquam iusto dolore
                        cum, ex dolor autem, illum sint doloremque sequi saepe a
                        eum ullam? Expedita nemo sit minus?
                    </p>
                    <WiggleButton
                        text={'Přejít do obchodu'}
                        className='invert grayscale-100 mt-8'
                    ></WiggleButton>
                </div>
            </div>

            <AboutGallery />
        </section>
    )
}

export default About
