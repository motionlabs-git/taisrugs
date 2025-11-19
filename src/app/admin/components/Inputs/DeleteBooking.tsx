'use client'
import React, { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { createClient } from '../../utils/supabase/client'
import { useRouter } from 'next/navigation'
import { ImSpinner2 } from 'react-icons/im'

const DeleteBooking = ({ id }: { id: number }) => {
    const supabase = createClient()
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const deleteBooking = async (id: number) => {
        setIsDeleting(true)
        try {
            const res = await supabase.from('booking').delete().eq('id', id)

            console.log(res)

            if (res.status === 204) {
                setIsDeleting(false)
                router.refresh()
            }
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err)
            setError(message)
            setIsDeleting(false)

            //TODO:Handle Error
            return
        }
    }

    return (
        <button
            type='button'
            onClick={() => deleteBooking(id)}
            aria-label='delete button'
            className='text-sm h-8 flex justify-center items-center gap-2 border border-white/60 text-white/60 rounded-lg px-3 hover:text-white hover:border-white duration-200 cursor-pointer'
        >
            <span>Odstranit</span>
            {isDeleting ? (
                <ImSpinner2 className='animate-spin' size={16} />
            ) : (
                <FiTrash2 size={16} />
            )}
        </button>
    )
}

export default DeleteBooking
