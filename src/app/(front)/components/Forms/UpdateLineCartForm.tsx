'use client'

import {
    UpdateCartLineSchema,
    updateCartLineValidation,
} from '@/app/schemas/updateCartLineSchema'
import { axiosClient } from '@/app/utils/client/axiosClient'
import { ICartProductQuery } from '@/app/utils/shopify/cartQuery'
import { useCart } from '@/app/utils/zustand/cartStore'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface IProps {
    cartLine: ICartProductQuery
}

const UpdateCartLineForm: React.FC<IProps> = ({ cartLine }) => {
    const {
        loading: cartLoading, // TODO: change styles or overlay when loading
        setLoading: setCartLoading,
        setData: setCartData,
    } = useCart()

    const variant = cartLine.merchandise

    const { register, setValue, handleSubmit } = useForm<UpdateCartLineSchema>({
        defaultValues: {
            lineId: cartLine.id,
            quantity: cartLine.quantity,
        },
        resolver: zodResolver(updateCartLineValidation),
    })

    const canLowerQuantity = cartLine.quantity > 1
    const canHigherQuantity = cartLine.quantity < variant.quantityAvailable

    const handleUpdateCartLine = (formData: UpdateCartLineSchema) => {
        setCartLoading(true)
        axiosClient
            .put('/cart', formData)
            .then((res) => {
                if (res.data) setCartData(res.data)
            })
            .catch((error) => {
                // TODO: redirect to error page
                console.error('Error updating cart:', error)
            })
    }

    const handleLowerQuantityClick = () => {
        if (!canLowerQuantity) return
        setValue('quantity', cartLine.quantity - 1)
        handleSubmit(handleUpdateCartLine)()
    }

    const handleUpperQuantityClick = () => {
        if (!canHigherQuantity) return
        setValue('quantity', cartLine.quantity + 1)
        handleSubmit(handleUpdateCartLine)()
    }

    return (
        <form onSubmit={handleSubmit(handleUpdateCartLine)}>
            <input type='hidden' {...register('lineId')} />

            <button
                type='button'
                aria-label={'Aktualizovat množství'}
                onClick={handleLowerQuantityClick}
                disabled={!canLowerQuantity || cartLoading}
                className='h-8 aspect-square border border-black rounded-full'
            >
                <FiMinus size={20} />
            </button>

            <input
                type='number'
                min={1}
                max={variant.quantityAvailable}
                {...register('quantity', { valueAsNumber: true })}
                className='w-12 text-center h-full border border-black rounded-full outline-none'
            />

            <button
                type='button'
                aria-label={'Aktualizovat množství'}
                onClick={handleUpperQuantityClick}
                disabled={!canHigherQuantity || cartLoading}
                className='h-8 aspect-square border border-black rounded-full'
            >
                <FiPlus size={20} />
            </button>
        </form>
    )
}

export default UpdateCartLineForm
