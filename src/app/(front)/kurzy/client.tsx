'use client'

import React from 'react'
import Image from 'next/image'
import { IProductQuery } from '@/app/utils/shopify/productQuery'
import ButtonHeading from '../components/UI/ButtonHeading'
import AddToCartForm from '../components/Forms/AddToCartForm'
import { addVariantToCart } from '@/actions/addVariantToCart'
import { useCart } from '@/app/utils/zustand/cartStore'
import UpdateCartLineForm from '../components/Forms/UpdateLineCartForm'
import RemoveLineCartForm from '../components/Forms/RemoveLineCartForm'

interface IProps {
    product: IProductQuery
}

const CoursePageClient: React.FC<IProps> = ({ product }) => {
    const { data: cartData } = useCart()

    const findCartLine = cartData?.lines.nodes.find(
        (line) => line.merchandise.product.id === product.id
    )

    return (
        <section id='vouchers' className='py-16'>
            <ButtonHeading text='Vouchery' invert></ButtonHeading>

            <h1 className='mt-4 sm:max-w-2/3'>Daruj zážitek🎁</h1>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex-3 lg:flex-5'>
                    <div
                        className='mt-4 flex flex-col gap-4 w-full md:max-w-2/3'
                        dangerouslySetInnerHTML={{
                            __html: product.descriptionHtml,
                        }}
                    ></div>

                    <div className='hidden md:flex gap-8 items-center mt-8'>
                        <span className='text-lg font-bold text-nowrap'>
                            {Math.floor(
                                Number(
                                    product.priceRangeV2.minVariantPrice.amount
                                )
                            ).toLocaleString('cs-CZ')}{' '}
                            Kč
                        </span>

                        {!findCartLine && (
                            <AddToCartForm
                                title='Koupit voucher'
                                product={product}
                                action={addVariantToCart}
                            />
                        )}

                        {findCartLine && (
                            <>
                                <UpdateCartLineForm cartLine={findCartLine} />

                                <RemoveLineCartForm cartLine={findCartLine} />
                            </>
                        )}
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
                            src='/images/Kurzy/VoucherBack.webp'
                            alt='Voucher Front'
                            width={1290}
                            height={725}
                            className='w-full h-full object-cover rounded-3xl shadow-md absolute top-0 left-0 -rotate-x-90 md:group-hover:-rotate-x-0 duration-100 group-hover:delay-100'
                        ></Image>
                    </div>
                </div>
                <div className='md:hidden flex justify-end flex-wrap gap-4 items-center'>
                    <span className='text-lg font-bold text-nowrap'>
                        {Math.floor(
                            Number(product.priceRangeV2.minVariantPrice.amount)
                        ).toLocaleString('cs-CZ')}{' '}
                        Kč
                    </span>

                    {!findCartLine && (
                        <AddToCartForm
                            title='Koupit voucher'
                            product={product}
                            action={addVariantToCart}
                        />
                    )}

                    {findCartLine && (
                        <>
                            <UpdateCartLineForm cartLine={findCartLine} />

                            <RemoveLineCartForm cartLine={findCartLine} />
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CoursePageClient
