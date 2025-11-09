import WiggleButton from '@/app/(front)/components/Inputs/WiggleButton'
import ButtonHeading from '@/app/(front)/components/UI/ButtonHeading'
import { getCollectionProducts } from '@/app/utils/shopify/getCollectionProducts'
import Image from 'next/image'
import React from 'react'

const Vouchers = async () => {
    const voucher = await getCollectionProducts(503142088991)

    if (!voucher) return

    return (
        <section id='vouchers' className='py-16'>
            <ButtonHeading text='Vouchery' invert></ButtonHeading>

            <h1 className='mt-4 sm:max-w-2/3'>
                Daruj zážitek! {voucher[0].title}.
            </h1>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex-3 lg:flex-5'>
                    <div
                        className='mt-4 flex flex-col gap-4 w-full md:max-w-2/3'
                        dangerouslySetInnerHTML={{
                            __html: voucher[0].descriptionHtml,
                        }}
                    ></div>

                    <div className='hidden md:flex gap-8 items-center mt-8'>
                        <span className='text-lg font-bold text-nowrap'>
                            {Math.floor(
                                Number(
                                    voucher[0].priceRangeV2.minVariantPrice
                                        .amount
                                )
                            ).toLocaleString('cs-CZ')}{' '}
                            Kč
                        </span>

                        <WiggleButton
                            text={'Koupit voucher'}
                            link={'/'}
                            className='justify-end flex text-white invert grayscale-100'
                            wiggleTextDeny
                        ></WiggleButton>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='aspect-video w-full h-auto md:w-[32vw] md:h-[18vw] group relative rounded-3xl overflow-hidden'>
                        <Image
                            src={'/images/Kurzy/VoucherFront.webp'}
                            alt={'Voucher Front'}
                            width={1290}
                            height={725}
                            className='w-full h-full object-cover rounded-3xl shadow-md absolute top-0 left-0 md:group-hover:-rotate-x-90 duration-100 delay-100 group-hover:delay-0'
                        ></Image>
                        <Image
                            src={'/images/Kurzy/VoucherBack.webp'}
                            alt={'Voucher Front'}
                            width={1290}
                            height={725}
                            className='w-full h-full object-cover rounded-3xl shadow-md absolute top-0 left-0 -rotate-x-90 md:group-hover:-rotate-x-0 duration-100 group-hover:delay-100'
                        ></Image>
                    </div>
                </div>
                <div className='md:hidden flex justify-end flex-wrap gap-4 items-center'>
                    <span className='text-lg font-bold text-nowrap'>
                        {Math.floor(
                            Number(
                                voucher[0].priceRangeV2.minVariantPrice.amount
                            )
                        ).toLocaleString('cs-CZ')}{' '}
                        Kč
                    </span>

                    <WiggleButton
                        text={'Koupit voucher'}
                        link={'/'}
                        className='justify-end flex text-white invert grayscale-100'
                        wiggleTextDeny
                    ></WiggleButton>
                </div>
            </div>
        </section>
    )
}

export default Vouchers
