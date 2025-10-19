import React from 'react'
import ProductCard from './_components/ProductCard'
import { getAllProducts } from '@/utils/shopify/products'

const Eshop = async () => {
    const products = await getAllProducts()

    return (
        <div className='w-full'>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(40rem,2fr))] gap-4 mt'>
                {!products && <p>No products found</p>}

                {products &&
                    products.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                product={product}
                            ></ProductCard>
                        )
                    })}
            </div>
        </div>
    )
}

export default Eshop
