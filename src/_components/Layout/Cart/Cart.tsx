import React from 'react'
import { FiPlus } from 'react-icons/fi'

const Cart = () => {
    return (
        <section className='bg-black/20  fixed top-0 right-0 w-screen h-screen'>
            <aside className='fixed right-0 top-0 bg-white   h-screen w-1/3 rounded-l-3xl border-1 border-black/30 tra border-r-none p-10'>
                <button className='' type='button' aria-label='Zavřít košík'>
                    <FiPlus className='rotate-45' size={32}></FiPlus>
                </button>
                Váš košík je prázdný
            </aside>
        </section>
    )
}

export default Cart
