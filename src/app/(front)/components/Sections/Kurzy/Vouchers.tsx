import { getCollectionProducts } from '@/app/utils/shopify/getCollectionProducts'
import React from 'react'
import CoursePageClient from '@/app/(front)/kurzy/client'

const Vouchers = async () => {
    const voucherCollection = await getCollectionProducts(503142088991)

    if (!voucherCollection || !voucherCollection[0]) return

    return <CoursePageClient product={voucherCollection[0]} />
}

export default Vouchers
