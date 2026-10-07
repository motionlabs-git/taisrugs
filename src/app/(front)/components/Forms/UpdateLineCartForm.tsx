'use client'

import {
    UpdateCartLineSchema,
    updateCartLineValidation,
} from '@/app/schemas/updateCartLineSchema'
import { axiosClient } from '@/app/utils/client/axiosClient'
import { ICartProductQuery } from '@/app/utils/shopify/cartQuery'
import { useCart } from '@/app/utils/zustand/cartStore'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FiMinus, FiPlus } from 'react-icons/fi'
import AboutGalleryButton from '../Sections/Home/About/AboutGalleryButton'

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

    // Keep input in sync with cart (e.g. after server rejects the change)
    useEffect(() => {
        setValue('quantity', cartLine.quantity)
    }, [cartLine.quantity, setValue])

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
                setValue('quantity', cartLine.quantity)
            })
            .finally(() => setCartLoading(false))
    }

    const submitQuantity = handleSubmit(
        (formData) => {
            if (cartLoading) return

            const quantity = Math.min(
                formData.quantity,
                variant.quantityAvailable
            )

            if (quantity === cartLine.quantity) {
                setValue('quantity', cartLine.quantity)
                return
            }

            handleUpdateCartLine({ ...formData, quantity })
        },
        () => setValue('quantity', cartLine.quantity)
    )

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
        <form
            onSubmit={submitQuantity}
            className={`flex items-center gap-1 flex-nowrap duration-200 transition-opacity ${cartLoading ? 'pointer-events-none opacity-50' : 'pointer-events-auto opacity-100'}`}
        >
            <input type='hidden' {...register('lineId')} />

            <AboutGalleryButton
                handleClick={handleLowerQuantityClick}
                disabled={!canLowerQuantity || cartLoading}
                borderClassName='border-black'
            >
                <FiMinus size={20} />
            </AboutGalleryButton>

            <input
                type='number'
                min={1}
                max={variant.quantityAvailable}
                {...register('quantity', {
                    valueAsNumber: true,
                    onBlur: submitQuantity,
                })}
                className='w-12 text-center mt-2 h-10 border border-black rounded-full outline-none'
            />

            <AboutGalleryButton
                handleClick={handleUpperQuantityClick}
                borderClassName='border-black'
                disabled={!canHigherQuantity || cartLoading}
            >
                <FiPlus size={20} />
            </AboutGalleryButton>
        </form>
    )
}

export default UpdateCartLineForm
