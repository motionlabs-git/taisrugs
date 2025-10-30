import { getProduct } from '@/utils/shopify/getProduct'
import { NextPage } from 'next'
import { redirect } from 'next/navigation'
import ProductPageClient from './client'
import { cookies } from 'next/headers'
import type { Metadata, ResolvingMetadata } from 'next'

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

    const cookieStore = await cookies()
    const orderId = cookieStore.get('orderId')?.value

    return <ProductPageClient product={product} orderId={orderId} />
}

export default ProductPage
