import React from 'react'
import ContactUs from '@/components/Layout/Contact/ContactUs'
import bgImg from '@/../public/LogoStroke.svg'
import WiggleButton from '@/components/Inputs/WiggleButton'
import ContactColumn from '@/components/Sections/Kontakt/ContactColumn'
import { FiExternalLink, FiMail, FiPhoneOutgoing } from 'react-icons/fi'

const Kontakt = () => {
    return (
        <div
            className='pageWrapper min-h-screen h-fit rounded-b-3xl '
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '195% 16%',
                backgroundSize: '80%',
                backgroundAttachment: 'fixed',
            }}
        >
            <h1>Kontatní informace</h1>

            <section className='flex flex-col lg:flex-row gap-8 mt-4 pb-8 sm:pb-16'>
                <div className='flex-6 xl:flex-3 h-full'>
                    <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4'>
                        <ContactColumn heading='Jméno'>
                            <p className='text-black'>Taisiia Mamedova</p>
                        </ContactColumn>

                        <ContactColumn
                            heading='Adresa'
                            icon={<FiExternalLink></FiExternalLink>}
                            link='https://www.google.com/maps/place/Kaprova+42%2F14,+110+00+Star%C3%A9+M%C4%9Bsto/@50.0879188,14.4158928,17z/data=!3m1!4b1!4m6!3m5!1s0x470b94e8e9bf533d:0x6b6bc6db31022ebe!8m2!3d50.0879154!4d14.4184677!16s%2Fg%2F11pw3jqtsb?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'
                        >
                            <p className='text-black'>
                                Karpova 42/14 110 00 Praha
                            </p>
                        </ContactColumn>

                        <ContactColumn
                            heading='IČO'
                            icon={<FiExternalLink></FiExternalLink>}
                            link='https://www.podnikatel.cz/rejstrik/taisiia-mamedova-17764602/'
                        >
                            <p className='text-black'>17764602</p>
                        </ContactColumn>

                        <ContactColumn
                            heading='Telefon'
                            link='tel:111111111'
                            icon={<FiPhoneOutgoing></FiPhoneOutgoing>}
                        >
                            <p className='text-black'>+420 775 180 052</p>
                        </ContactColumn>

                        <ContactColumn
                            heading='Email'
                            link='mailto:taisrugs@email.cz'
                            icon={<FiMail></FiMail>}
                        >
                            <p className='text-black'>taisrugs@email.cz</p>
                        </ContactColumn>

                        <div className='flex justify-center items-center'>
                            <WiggleButton
                                text={'Navigovat'}
                                link={
                                    'https://www.google.com/maps/dir//Kaprova+42%2F14,+110+00+Star%C3%A9+M%C4%9Bsto/@50.0899402,14.4151232,16.04z/data=!4m18!1m8!3m7!1s0x470b94e8e9bf533d:0x6b6bc6db31022ebe!2sKaprova+42%2F14,+110+00+Star%C3%A9+M%C4%9Bsto!3b1!8m2!3d50.0879154!4d14.4184677!16s%2Fg%2F11pw3jqtsb!4m8!1m0!1m5!1m1!1s0x470b94e8e9bf533d:0x6b6bc6db31022ebe!2m2!1d14.4184677!2d50.0879154!3e0?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'
                                }
                                blank
                                className='invert grayscale-100 mt-4 text-white'
                                wiggleTextDeny
                            ></WiggleButton>
                        </div>
                    </div>
                </div>
                <div className='flex-3 flex flex-col'>
                    <div className='rounded-2xl bg-gray-100 h-full aspect-video lg:aspect-auto overflow-hidden shadow-[-3px_3px_black]'>
                        <iframe
                            width='100%'
                            height='100%'
                            frameBorder='0'
                            scrolling='no'
                            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Karpova%2042/14,%20Praha+(TaisRugs)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                        ></iframe>
                    </div>
                </div>
            </section>

            <ContactUs></ContactUs>
        </div>
    )
}

export default Kontakt
