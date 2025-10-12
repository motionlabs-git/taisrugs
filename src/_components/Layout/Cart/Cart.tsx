import React from 'react'
import { FiPlus } from 'react-icons/fi'

const Cart = ({ handleCloseCart }: { handleCloseCart: () => void }) => {
    return (
        <section
            id='cart'
            className={`hidden opacity-0 bg-black/20  fixed top-0 right-0 w-screen h-screen`}
            onClick={(e) => {
                if ((e.target as HTMLElement).id === 'cart') handleCloseCart()
            }}
        >
            <aside
                id='cartAside'
                className='fixed -right-1/3 top-0 bg-white h-screen w-1/3 rounded-l-3xl border-1 border-black/30 tra border-r-none p-10'
            >
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl'>Košík</h2>
                    <button
                        className='cursor-pointer'
                        type='button'
                        aria-label='Zavřít košík'
                        onClick={handleCloseCart}
                    >
                        <FiPlus className='rotate-45' size={32}></FiPlus>
                    </button>
                </div>

                <div className='mt-8'>
                    <p>Váš košík je prázdný...</p>
                </div>

                <button
                    className='mt-8'
                    aria-label='Jít nakupovat'
                    type='button'
                >
                    Prozkoumat obchod
                </button>
            </aside>
        </section>
    )
}

export default Cart
