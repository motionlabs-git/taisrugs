import React from 'react'
import AboutGallery from './AboutGallery'
import WiggleButton from '@/app/(front)/components/Inputs/WiggleButton'

const About = () => {
    return (
        <section
            id='about'
            className='md:h-[100dvh] w-full flex flex-col gap-20 md:gap-10 md:flex-row pt-40 pb-24 px-4 md:px-24'
        >
            <div className='flex-4'>
                <h1 className=''>Tais rugs.</h1>
                <h2 className='mt-4 text-lg'>
                    Koberce na míru a tufting kurzy v Praze
                </h2>
                <div className='mt-8 md:mt-60 md:w-[50vw] md:pl-[5vw]'>
                    <p className='text-lg'>
                        Ahoj jsem Tája, zakladatelka Tais Rugs – malé značky,
                        která mění nápady ve skutečné koberce.
                    </p>
                    <p className='text-lg mt-4'>
                        Od roku 2022 tvořím originální designy, pořádám tufting
                        kurzy v Praze a pomáhám lidem objevovat radost z tvorby
                        i krásu ruční práce.
                    </p>

                    <div className='flex mt-8 gap-4 flex-wrap'>
                        <WiggleButton
                            text={'Eshop'}
                            className=' hover:text-black'
                            link='/eshop'
                        ></WiggleButton>
                        <WiggleButton
                            text={'Kurzy tuftingu'}
                            className=' hover:text-black'
                            link='/kurzy'
                            wiggleTextDeny
                        ></WiggleButton>
                    </div>
                </div>
            </div>

            <AboutGallery />
        </section>
    )
}

export default About
