import React from 'react'
import ProductCard from './_components/ProductCard'
import { getAllProducts } from '@/utils/shopify/getAllProducts'
import bgImg from '@/../public/LogoStroke.svg'

const Eshop = async () => {
    const products = await getAllProducts()

    return (
        <div
            className='pageWrapper'
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '181% 41%',
                backgroundSize: '75%',
            }}
        >
            <div className='w-full grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4'>
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
