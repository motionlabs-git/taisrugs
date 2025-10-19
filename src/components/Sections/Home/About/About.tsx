import React from 'react'
import {
    FiArrowRightCircle,
    FiChevronLeft,
    FiChevronRight,
} from 'react-icons/fi'
import AboutGallery from './AboutGallery'
import WiggleButton from '@/components/Inputs/WiggleButton'

const About = () => {
    return (
        <section
            id='about'
            className='h-[100dvh] w-full flex pt-40 pb-24 px-24'
        >
            <div className='flex-4'>
                <h1 className='font-bold text-4xl'>Tais rugs.</h1>
                <h2 className='mt-4 text-lg font-bold'>
                    Tvořivé kurzy, koberečky na zakázku
                </h2>
                <div className='mt-60 w-[50vw] pl-[5vw]'>
                    <p className=' text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aperiam dolorem cupiditate aliquam iusto dolore
                        cum, ex dolor autem, illum sint doloremque sequi saepe a
                        eum ullam? Expedita nemo sit minus?
                    </p>
                    <WiggleButton text={'Přejít do obchodu'}></WiggleButton>
                </div>
            </div>

            <AboutGallery />
        </section>
    )
}

export default About
