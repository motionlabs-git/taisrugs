import ContactForm from '@/app/(front)/components/Forms/ContactForm'
import ButtonHeading from '@/app/(front)/components/UI/ButtonHeading'
import React from 'react'
import Image from 'next/image'

import bgImg from '@/../public/LogoStroke.svg'

const ContactUs = () => {
    return (
        <section className='pt-16 w-full' id='contact-us'>
            <div
                id='contact-us-card'
                className='relative h-full w-full text-white bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% rounded-3xl py-4 px-4 sm:p-10  '
            >
                <div
                    className='w-full h-full absolute left-0 top-0'
                    style={{
                        backgroundImage: `url(${bgImg.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '195% 16%',
                        backgroundSize: '80%',
                        backgroundAttachment: 'fixed',
                    }}
                ></div>

                <Image
                    src={'/images/contact-us.png'}
                    alt={'sdf'}
                    width={350}
                    height={500}
                    className='absolute bottom-0 left-10 opacity-50'
                ></Image>

                <div className='relative h-full pb-12 flex flex-col lg:flex-row w-full gap-8 '>
                    <div className='flex-5 xl:flex-5'>
                        <ButtonHeading text='Kontaktuj mě'></ButtonHeading>
                        <h1 className='mt-4 max-w-2/3'>
                            Kobereček na zakázku?
                        </h1>
                        <p className='mt-4 lg:max-w-2/3'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Fuga modi dolor qui sed libero sapiente
                            dignissimos pariatur dicta rem possimus, cumque
                            autem culpa suscipit rerum quasi odio
                            exercitationem, alias optio.
                        </p>
                    </div>

                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
