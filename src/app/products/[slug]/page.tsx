'use client'
import { redirect, useParams } from 'next/navigation'

const ProductPageRedirect = () => {
    const params = useParams()

    return redirect(`/eshop/${params.slug}`)
}

export default ProductPageRedirect
