import React from 'react'
import ProductCard from './_components/ProductCard'

const products = [
    {
        title: 'Prod 1',
        description:
            'Lorem ipsum dolor sit amet jajasdlfj lajsdfljasdlfj slad flaksdjfl kasjdl aldjkfslf',
        price: 1000,
    },
    {
        title: 'Prod 2',
        description:
            'Lorem ipsum dolor sit amet jajasdlfj lajsdfljasdlfj slad flaksdjfl kasjdl aldjkfslf',
        price: 1000,
    },
    {
        title: 'Prod 1',
        description:
            'Lorem ipsum dolor sit amet jajasdlfj lajsdfljasdlfj slad flaksdjfl kasjdl aldjkfslf',
        price: 1000,
    },
    {
        title: 'Prod 2',
        description:
            'Lorem ipsum dolor sit amet jajasdlfj lajsdfljasdlfj slad flaksdjfl kasjdl aldjkfslf',
        price: 1000,
    },
    {
        title: 'Prod 1',
        description:
            'Lorem ipsum dolor sit amet jajasdlfj lajsdfljasdlfj slad flaksdjfl kasjdl aldjkfslf',
        price: 1000,
    },
    {
        title: 'Prod 2',
        description:
            'Lorem ipsum dolor sit amet jajasdlfj lajsdfljasdlfj slad flaksdjfl kasjdl aldjkfslf',
        price: 1000,
    },
]

const Eshop = () => {
    return (
        <div className='pageWrapper'>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(40rem,2fr))] gap-4 mt'>
                {products.map((product, i) => {
                    return <ProductCard key={i} product={product}></ProductCard>
                })}
            </div>
        </div>
    )
}

export default Eshop
