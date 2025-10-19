import { getProduct } from '@/utils/shopify/getProduct'
import { NextPage } from 'next'
import React from 'react'

interface IProps {
    params: Promise<{
        slug: string
    }>
}

const ProductPage: NextPage<IProps> = async ({ params }) => {
    const { slug } = await params

    const product = await getProduct(slug)
    console.log('product', product)

    return <div>Product page</div>
}

export default ProductPage
