import { useRouter } from 'next/navigation'
import { IOrderQuery } from '@/app/utils/shopify/orderQuery'
import { useOrder } from '@/app/utils/zustand/orderStore'
import React, { useEffect } from 'react'
import { FiArrowRightCircle, FiPlus } from 'react-icons/fi'
import CartItem from './CartItem'

interface IProps {
    order: IOrderQuery | null
    handleCloseCart: () => void
    cartTl: gsap.core.Timeline
}

const Cart: React.FC<IProps> = ({ order, handleCloseCart, cartTl }) => {
    const router = useRouter()

    const { data, setData } = useOrder()

    const showStore = () => {
        cartTl.reverse()
        router.push('/eshop')
    }

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
                className='fixed -right-full md:-right-2/3 lg:-right-1/3 top-0 bg-white h-screen w-full md:w-2/3 lg:w-1/3 rounded-l-3xl border-1 border-black/30 tra border-r-none p-4 sm:p-10'
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
                    <>
                        <div className='mt-8'>
                            <p>Váš košík je prázdný...</p>
                        </div>
                        <button
                            type='button'
                            aria-label={'Prozkoumat obchod'}
                            className={`invert grayscale-100 mt-8 text-white border-white relative group w-fit h-fit items-center rounded-full border hover:border-primary duration-200 transition-transform cursor-pointer select-none`}
                            onClick={showStore}
                        >
                            <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6 duration-200  px-10 py-4 overflow-hidden rounded-full text-inherit group-hover:text-black'>
                                <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                                <FiArrowRightCircle
                                    size={20}
                                    className='relative text-inherit duration-200'
                                ></FiArrowRightCircle>

                                <span className=' relative text-nowrap'>
                                    Prozkoumat obchod
                                </span>
                            </div>
                        </button>
                    </>
                )}

                {data && data.lineItems.nodes.length > 0 && (
                    <div className='flex flex-col gap-4 h-full'>
                        <ul className='mt-8 flex flex-col h-full overflow-y-auto gap-4'>
                            {data.lineItems.nodes.map((item) => (
                                <CartItem item={item} key={item.product.id} />
                            ))}
                        </ul>
                        <div className='pb-8 sm:pb-10'>
                            <button
                                type='button'
                                aria-label={'Prozkoumat obchod'}
                                className={`invert grayscale-100 text-white border-white relative group w-fit h-fit items-center rounded-full border hover:border-primary duration-200 transition-transform cursor-pointer select-none`}
                                onClick={showStore}
                            >
                                <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6 duration-200  px-10 py-4 overflow-hidden rounded-full text-inherit group-hover:text-black'>
                                    <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                                    <FiArrowRightCircle
                                        size={20}
                                        className='relative text-inherit duration-200'
                                    ></FiArrowRightCircle>

                                    <span className=' relative text-nowrap'>
                                        Přejít k pokladně
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </section>
    )
}

export default Cart
