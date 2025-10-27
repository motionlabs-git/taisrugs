import { getProduct } from '@/utils/shopify/getProduct'
import { NextPage } from 'next'
import { redirect } from 'next/navigation'
import ProductPageClient from './client'
import { cookies } from 'next/headers'

interface IProps {
    params: Promise<{
        slug: string
    }>
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
