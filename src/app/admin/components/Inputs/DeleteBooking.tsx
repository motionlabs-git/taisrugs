'use client'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { createClient } from '../../utils/supabase/client'

const DeleteBooking = ({ id }: { id: number }) => {
    const supabase = createClient()

    const deleteBooking = async (id: number) => {
        const res = await supabase.from('booking').delete().eq('id', id)

        console.log(res)
    }

    return (
        <button
            type='button'
            onClick={() => deleteBooking(id)}
            aria-label='delete button'
            className='text-sm h-8 flex justify-center items-center gap-2 border border-white/60 text-white/60 rounded-lg px-3 hover:text-white hover:border-white duration-200 cursor-pointer'
        >
            <span>Odstranit</span>
            <FiTrash2 size={16} />
        </button>
    )
}

export default DeleteBooking
