import WiggleButton from '@/components/Inputs/WiggleButton'
import { IOrderQuery } from '@/utils/shopify/orderQuery'
import { useOrder } from '@/utils/zustand/orderStore'
import React, { useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'

interface IProps {
    order: IOrderQuery | null
    handleCloseCart: () => void
}

const Cart: React.FC<IProps> = ({ order, handleCloseCart }) => {
    const { data, setData } = useOrder()

    useEffect(() => {
        setData(order)
    }, [order, setData])

    return (
        <section
            id='cart'
            className={`hidden opacity-0 bg-black/20 z-50 fixed top-0 right-0 w-screen h-screen`}
            onClick={(e) => {
                if ((e.target as HTMLElement).id === 'cart') handleCloseCart()
            }}
        >
            <aside
                id='cartAside'
                className='fixed -right-full md:-right-1/3 top-0 bg-white h-screen w-full md:w-1/3 rounded-l-3xl border-1 border-black/30 tra border-r-none p-10'
            >
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl'>Košík</h2>

                    <button
                        className='cursor-pointer hover:rotate-12 duration-200'
                        type='button'
                        aria-label='Zavřít košík'
                        onClick={handleCloseCart}
                    >
                        <FiPlus className='rotate-45' size={32}></FiPlus>
                    </button>
                </div>

                {!data && (
                    <div className='mt-8'>
                        <p>Váš košík je prázdný...</p>
                    </div>
                )}

                {data && data.lineItems.nodes.length > 0 && (
                    <div className='mt-8 flex flex-col gap-4'>
                        {data.lineItems.nodes.map((item) => (
                            <div
                                key={item.product.id}
                                className='flex justify-between items-center'
                            >
                                <div>
                                    <p>{item.title}</p>
                                    <p>Množství: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <WiggleButton
                    text={'Prozkoumat obchod'}
                    className='invert grayscale-100 mt-8'
                    wiggleTextDeny
                />
            </aside>
        </section>
    )
}

export default Cart
