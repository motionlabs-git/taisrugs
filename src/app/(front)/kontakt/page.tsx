import React from 'react'
import ContactUs from '@/app/(front)/components/Layout/Contact/ContactUs'
import bgImg from '@/../public/LogoStroke.svg'
import WiggleButton from '@/app/(front)/components/Inputs/WiggleButton'
import ContactColumn from '@/app/(front)/components/Sections/Kontakt/ContactColumn'
import { FiExternalLink, FiMail, FiPhoneOutgoing } from 'react-icons/fi'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kontakt',
    description:
        'Máš dotaz nebo chceš vytvořit vlastní kobereček? Napiš mi pár slov o svém nápadu – barvy, motiv, velikost.',
}

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

            <section className='flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 pb-8 sm:pb-16'>
                <div className='flex-6 xl:flex-3 h-full'>
                    <div className='w-full h-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4'>
                        <ContactColumn heading='Jméno'>
                            <p className='text-black'>Taisiia Mamedova</p>
                        </ContactColumn>

                        <ContactColumn
                            heading='Adresa'
                            icon={<FiExternalLink></FiExternalLink>}
                            link='https://www.google.com/maps/place/Ol%C5%A1ansk%C3%A1+54%2F3,+130+00+Praha+3-%C5%BDi%C5%BEkov,+%C4%8Cesko/@50.0837848,14.461801,17z/data=!3m1!4b1!4m6!3m5!1s0x470b9360d0d1269f:0x7591019bab1e6c44!8m2!3d50.0837814!4d14.4643759!16s%2Fg%2F11bw3zk7l9?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D'
                        >
                            <p className='text-black'>Olšanská 54/3, Praha 3</p>
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
                            link='tel:+420799025999'
                            icon={<FiPhoneOutgoing></FiPhoneOutgoing>}
                        >
                            <p className='text-black'>+420 799 025 999</p>
                        </ContactColumn>

                        <ContactColumn
                            heading='Email'
                            link='&#77;&#97;&#105;&#76;&#84;&#79;&#58;&#116;&#97;&#105;&#115;&#114;&#117;&#103;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'
                            icon={<FiMail></FiMail>}
                        >
                            <p className='text-black text-wrap wrap-anywhere'>
                                &#116;&#97;&#105;&#115;&#114;&#117;&#103;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                            </p>
                        </ContactColumn>

                        <div className='justify-center items-center hidden sm:flex'>
                            <WiggleButton
                                text={'Navigovat'}
                                link={
                                    'https://www.google.com/maps/place/Ol%C5%A1ansk%C3%A1+54%2F3,+130+00+Praha+3-%C5%BDi%C5%BEkov,+%C4%8Cesko/@50.0837848,14.461801,17z/data=!3m1!4b1!4m6!3m5!1s0x470b9360d0d1269f:0x7591019bab1e6c44!8m2!3d50.0837814!4d14.4643759!16s%2Fg%2F11bw3zk7l9?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D'
                                }
                                blank
                                className='invert grayscale-100 mt-4 text-white'
                                wiggleTextDeny
                            ></WiggleButton>
                        </div>
                    </div>
                </div>
                <div className='flex-3 flex flex-col'>
                    <div className='rounded-2xl bg-gray-100 h-full aspect-video lg:aspect-auto overflow-hidden shadow-[-3px_3px_black] border-2 border-black'>
                        <iframe
                            width='100%'
                            height='100%'
                            frameBorder='0'
                            scrolling='no'
                            src='https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Olšanská 54/3, Praha 3&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                        ></iframe>
                    </div>

                    <div className='justify-end items-center sm:hidden flex'>
                        <WiggleButton
                            text={'Navigovat'}
                            link={
                                'https://www.google.com/maps/place/Ol%C5%A1ansk%C3%A1+54%2F3,+130+00+Praha+3-%C5%BDi%C5%BEkov,+%C4%8Cesko/@50.0837848,14.461801,17z/data=!3m1!4b1!4m6!3m5!1s0x470b9360d0d1269f:0x7591019bab1e6c44!8m2!3d50.0837814!4d14.4643759!16s%2Fg%2F11bw3zk7l9?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D'
                            }
                            blank
                            className='invert grayscale-100 mt-4 text-white'
                            wiggleTextDeny
                        ></WiggleButton>
                    </div>
                </div>
            </section>

            <ContactUs></ContactUs>
        </div>
    )
}

export default Kontakt
