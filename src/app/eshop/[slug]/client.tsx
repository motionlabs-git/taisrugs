import { IProductQuery } from '@/utils/shopify/productQuery'
import AddToCartForm from '@/components/Forms/AddToCartForm'
import { AddToCartSchema } from '@/schemas/addToCartSchema'
import { createOrder } from '@/actions/createOrder'
import { axiosClient } from '@/utils/client/axiosClient'
import ProductGallery from '../_components/ProductGallery'
import bgImg from '@/../public/LogoStroke.svg'
import FavouriteProductsSlider from '@/components/Sections/Eshop/FavouriteProductsSlider'

interface IProps {
    product: IProductQuery
    orderId?: string
}

const ProductPageClient: React.FC<IProps> = ({ product, orderId }) => {
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
            <section className='flex flex-col sm:flex-row gap-8 pb-16'>
                {product.images && (
                    <ProductGallery images={product.images.nodes} />
                )}

                <div className='flex-3 '>
                    <h1 className=''>{product.title}</h1>

                    <p className='mt-4'>{product.description}</p>

                    <div className='flex items-center gap-2 justify-between flex-wrap mt-8 align-bottom self-end'>
                        <span className='text-lg font-bold text-nowrap'>
                            {Math.floor(
                                Number(
                                    product.priceRangeV2.minVariantPrice.amount
                                )
                            ).toLocaleString('cs-CZ')}{' '}
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

            <FavouriteProductsSlider />
        </div>
    )
}

export default ProductPageClient
