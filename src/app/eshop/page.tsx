import React from 'react'
import ProductCard from './_components/ProductCard'
import { getAllProducts } from '@/utils/shopify/getAllProducts'

const Eshop = async () => {
    const products = await getAllProducts()

    return (
        <div className='pageWrapper'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
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

                {products &&
                    products.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                product={product}
                            ></ProductCard>
                        )
                    })}
                {products &&
                    products.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                product={product}
                            ></ProductCard>
                        )
                    })}
                {products &&
                    products.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                product={product}
                            ></ProductCard>
                        )
                    })}
                {products &&
                    products.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                product={product}
                            ></ProductCard>
                        )
                    })}
                {products &&
                    products.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                product={product}
                            ></ProductCard>
                        )
                    })}
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
