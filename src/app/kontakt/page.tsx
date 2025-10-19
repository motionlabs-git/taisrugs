import ContactUs from '@/components/Sections/ContactForm'
import ButtonHeading from '@/components/UI/ButtonHeading'
import React from 'react'

const Kontakt = () => {
    return (
        <div className='pageWrapper'>
            <section className='h-screen flex w-full gap-8'>
                <div className='flex-1'>
                    <ButtonHeading text='Kontaktuj mě' invert></ButtonHeading>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fuga modi dolor qui sed libero sapiente
                        dignissimos pariatur dicta rem possimus, cumque autem
                        culpa suscipit rerum quasi odio exercitationem, alias
                        optio.
                    </p>
                </div>
                <ContactUs></ContactUs>
            </section>
        </div>
    )
}

export default Kontakt
