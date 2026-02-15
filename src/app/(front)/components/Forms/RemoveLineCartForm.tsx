import {
    RemoveCartLineSchema,
    removeCartLineValidation,
} from '@/app/schemas/removeCartLineSchema'
import { axiosClient } from '@/app/utils/client/axiosClient'
import { ICartProductQuery } from '@/app/utils/shopify/cartQuery'
import { useCart } from '@/app/utils/zustand/cartStore'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FiTrash } from 'react-icons/fi'

interface IProps {
    cartLine: ICartProductQuery
}

const RemoveLineCartForm: React.FC<IProps> = ({ cartLine }) => {
    const {
        loading: cartLoading, // TODO: change styles or overlay when loading
        setLoading: setCartLoading,
        setData: setCartData,
    } = useCart()

    const { register, handleSubmit } = useForm<RemoveCartLineSchema>({
        defaultValues: {
            lineId: cartLine.id,
        },
        resolver: zodResolver(removeCartLineValidation),
    })

    const handleRemoveCartLine = (formData: RemoveCartLineSchema) => {
        setCartLoading(true)
        axiosClient
            .put(`/cart/delete`, formData)
            .then((res) => {
                if (res.data) setCartData(res.data)
            })
            .catch((error) => {
                // TODO: redirect to error page
                console.error('Error removing cart line:', error)
            })
    }

    return (
        <form onSubmit={handleSubmit(handleRemoveCartLine)}>
            <input type='hidden' {...register('lineId')} />

            <button
                type='submit'
                aria-label={'Odebrat položku'}
                className='text-gray-600 flex items-center gap-2 text-lg sm:text-sm hover:text-black duration-200 cursor-pointer '
            >
                <span className='hidden sm:inline-block'>Odebrat</span>
                <FiTrash />
            </button>
        </form>
    )
}

export default RemoveLineCartForm
