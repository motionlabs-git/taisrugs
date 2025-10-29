'use client'

import Image from 'next/image'
import { IProductQuery } from '@/utils/shopify/productQuery'
import AddToCartForm from '@/components/Forms/AddToCartForm'
import { AddToCartSchema } from '@/schemas/addToCartSchema'
import { createOrder } from '@/actions/createOrder'
import { axiosClient } from '@/utils/client/axiosClient'
import ProductGallery from '../_components/ProductGallery'
import bgImg from '@/../public/LogoStroke.svg'

interface IProps {
    product: IProductQuery
    orderId?: string
}

const ProductPageClient: React.FC<IProps> = ({ product, orderId }) => {
    const image = product.images.nodes[0] ? product.images.nodes[0] : null

    const handleAddToCart = async (data: AddToCartSchema) => {
        if (!orderId) return

        axiosClient
            .post(`/order/add`, data)
            .then((res) => {
                // TODO:
                console.log(res)
            })
            .catch((error) => {
                // TODO:
                console.error('Error adding to cart', error)
            })
    }

    return (
        <div
            className='pageWrapper'
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '195% 16%',
                backgroundSize: '80%',
            }}
        >
            <section className='flex gap-8 pb-16'>
                <ProductGallery />

                <div className='flex-3'>
                    <h1 className='text-4xl font-bold mb-8'>
                        {product?.title}
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores rem tenetur voluptates recusandae cupiditate,
                        iusto libero! Voluptas, aperiam corporis dolorum nemo
                        error qui molestias amet fugit a. Fugiat, dicta omnis!
                    </p>

                    <p>Velikost</p>

                    <div className='flex items-center gap-2 justify-between mt-8'>
                        <span className='text-lg font-bold'>
                            {product.priceRangeV2.minVariantPrice.amount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                            Kč
                        </span>
                        {!orderId && (
                            <AddToCartForm
                                variantId={product.variants.nodes[0].id}
                                action={createOrder}
                            />
                        )}

                        {orderId && (
                            <AddToCartForm
                                variantId={product.variants.nodes[0].id}
                                action={handleAddToCart}
                            />
                        )}
                    </div>
                </div>
            </section>

            <section className='py-16'>
                <h2 className='text-2xl font-bold'>Oblíbené produkty</h2>
                <div className='flex gap-4 mt-8'>
                    <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
                    <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
                    <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
                    <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
                    <div className='aspect-[4/5] w-full bg-gray-300 rounded-2xl'></div>
                </div>
            </section>
        </div>
    )
}

export default ProductPageClient
