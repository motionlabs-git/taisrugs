import { IProductQuery } from '@/utils/shopify/productQuery'
import Image from 'next/image'

interface IProps {
    product: IProductQuery
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    const image = product.images.edges[0] ? product.images.edges[0].node : null

    return (
        <div className='w-full'>
            <div className='aspect-square w-full bg-gray-300 rounded-2xl'>
                {image && (
                    <Image
                        src={image.src}
                        alt={image.altText ?? product.title}
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover'
                    />
                )}
            </div>

            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>{product.title}</h2>
                {product.priceRangeV2.minVariantPrice.amount}{' '}
                {product.priceRangeV2.minVariantPrice.currencyCode}
            </div>
        </div>
    )
}

export default ProductCard
