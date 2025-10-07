import React from 'react'

const ProductCard = ({
    product,
}: {
    product: {
        title: string
        description: string
        price: number
    }
}) => {
    return (
        <div className='w-full'>
            <div className='aspect-square w-full bg-gray-300 rounded-2xl'></div>

            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>{product.title}</h2>
                <p className='text-gray-700'>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductCard
