import { getProduct } from '@/app/utils/shopify/getProduct'
import { NextPage } from 'next'
import { redirect } from 'next/navigation'
import ProductPageClient from './client'
import { cookies } from 'next/headers'
import type { Metadata, ResolvingMetadata } from 'next'
import { getCollectionProducts } from '@/app/utils/shopify/getCollectionProducts'

interface IProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata(
    { params }: IProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params

    const product = await getProduct(slug)
    const previousImages = (await parent).openGraph?.images || []

    if (!product) return {}

    return {
        title: `Eshop - ${product.title}`,
        description: product.description.slice(0, 155),
        openGraph: {
            title: `Tais Rugs | Eshop - ${product.title} `,
            description: product.description,
            images: [product.images.nodes[0].src, ...previousImages],
        },
    }
}

const ProductPage: NextPage<IProps> = async ({ params }) => {
    const { slug } = await params

    const product = await getProduct(slug)
    if (!product) {
        return redirect('/eshop')
    }

    const favouriteProducts = await getCollectionProducts(502318891295)

    return (
        <ProductPageClient
            product={product}
            favouriteProducts={favouriteProducts}
        />
    )
}

export default ProductPage
