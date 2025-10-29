import ContactUs from '@/components/Sections/Kontakt/ContactForm'
import ButtonHeading from '@/components/UI/ButtonHeading'
import React from 'react'
import Image from 'next/image'

const Kontakt = () => {
    return (
        <div className='pageWrapper min-h-screen rounded-b-3xl text-white pb-12'>
            <section className='relative h-full pb-12 flex w-full gap-8 bg-radial-[at_80%80%] from-zinc-950 to-zinc-900 to-75% rounded-3xl p-10'>
                <div className='flex-5'>
                    <ButtonHeading text='Kontaktuj mě'></ButtonHeading>
                    <h1 className='mt-4 max-w-2/3'>
                        Máš nějaký dotaz, chceš si objednat vlastní kobereček?
                    </h1>
                    <p className='mt-4 max-w-2/3'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fuga modi dolor qui sed libero sapiente
                        dignissimos pariatur dicta rem possimus, cumque autem
                        culpa suscipit rerum quasi odio exercitationem, alias
                        optio.
                    </p>
                </div>

                <Image
                    src={'/images/contact-us.png'}
                    alt={'sdf'}
                    width={400}
                    height={500}
                    className='absolute bottom-0 left-10 opacity-25'
                ></Image>

                <ContactUs></ContactUs>
            </section>
        </div>
    )
}

export default Kontakt
