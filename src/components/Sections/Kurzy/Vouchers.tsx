import WiggleButton from '@/components/Inputs/WiggleButton'
import ButtonHeading from '@/components/UI/ButtonHeading'
import Image from 'next/image'
import React from 'react'

const Vouchers = () => {
    return (
        <section id='vouchers' className='py-12'>
            <ButtonHeading text='Vouchery' invert></ButtonHeading>
            <div className='flex gap-8'>
                <div className='flex-1'>
                    <h1 className='mt-4'>Daruj zážitek!</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro, dignissimos. Voluptate excepturi aliquam ipsam
                        nostrum cupiditate itaque dolor vero dignissimos,
                        maiores odit quod. Fuga, quos amet at tempore ipsum
                        necessitatibus?
                    </p>

                    <WiggleButton
                        text={'Koupit voucher'}
                        link={'/'}
                        className='mt-8 text-white invert grayscale-100'
                        wiggleTextDeny
                    ></WiggleButton>
                </div>

                <div className='flex-1 flex justify-end mt-8'>
                    <div className='group relative rounded-3xl w-2/3 aspect-video overflow-hidden'>
                        <Image
                            src={'/images/Kurzy/VoucherFront.webp'}
                            alt={'Voucher Front'}
                            width={1290}
                            height={725}
                            className='w-full h-full object-center rounded-3xl shadow-md absolute top-0 left-0 group-hover:-rotate-x-90 duration-100 delay-100 group-hover:delay-0'
                        ></Image>
                        <Image
                            src={'/images/Kurzy/VoucherBack.webp'}
                            alt={'Voucher Front'}
                            width={1290}
                            height={725}
                            className='w-full h-full object-center rounded-3xl shadow-md absolute top-0 left-0 -rotate-x-90 group-hover:-rotate-x-0 duration-100 group-hover:delay-100'
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vouchers
