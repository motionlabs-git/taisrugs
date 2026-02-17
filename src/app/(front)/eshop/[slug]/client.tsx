'use client'

import { IProductQuery } from '@/app/utils/shopify/productQuery'
import AddToCartForm from '@/app/(front)/components/Forms/AddToCartForm'
import ProductGallery from '../_components/ProductGallery'
import bgImg from '@/../public/LogoStroke.svg'
import FavouriteProductsSlider from '@/app/(front)/components/Sections/Eshop/FavouriteProductsSlider'
import ContactUs from '@/app/(front)/components/Layout/Contact/ContactUs'
import { addVariantToCart } from '@/actions/addVariantToCart'
import { useCart } from '@/app/utils/zustand/cartStore'
import UpdateCartLineForm from '../../components/Forms/UpdateLineCartForm'
import RemoveLineCartForm from '../../components/Forms/RemoveLineCartForm'
import { useEffect } from 'react'
import { useLenis } from 'lenis/react'

interface IProps {
    product: IProductQuery
    favouriteProducts: IProductQuery[] | null
}

const ProductPageClient: React.FC<IProps> = ({
    product,
    favouriteProducts,
}) => {
    const { data: cartData } = useCart()
    const lenis = useLenis()

    const findCartLine = cartData?.lines.nodes.find(
        (line) => line.merchandise.product.id === product.id
    )

    useEffect(() => {
        lenis?.scrollTo(0, {
            immediate: true,
        })
    }, [])

    return (
        <div
            className='pageWrapper'
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '195% 16%',
                backgroundSize: '80%',
                backgroundAttachment: 'fixed',
            }}
        >
            <section className='flex flex-col sm:flex-row gap-8 pb-16'>
                {product.images && (
                    <ProductGallery images={product.images.nodes} />
                )}

                <div className='flex-3 '>
                    <h1 className=''>{product.title}</h1>

                    <div
                        className='mt-4 flex flex-col gap-4'
                        dangerouslySetInnerHTML={{
                            __html: product.descriptionHtml,
                        }}
                    ></div>

                    <div className=' mt-8 align-bottom self-end'>
                        <span className='text-lg font-bold text-nowrap'>
                            {Math.floor(
                                Number(
                                    product.priceRangeV2.minVariantPrice.amount
                                )
                            ).toLocaleString('cs-CZ')}{' '}
                            Kč
                        </span>

                        <div className='mt-2 justify-between flex flex-wrap gap-2 items-center'>
                            {!findCartLine && (
                                <AddToCartForm
                                    product={product}
                                    action={addVariantToCart}
                                />
                            )}

                            {findCartLine && (
                                <>
                                    <UpdateCartLineForm
                                        cartLine={findCartLine}
                                    />

                                    <RemoveLineCartForm
                                        cartLine={findCartLine}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {favouriteProducts && (
                <FavouriteProductsSlider
                    favouriteProducts={favouriteProducts}
                />
            )}

            <ContactUs />
        </div>
    )
}

export default ProductPageClient
