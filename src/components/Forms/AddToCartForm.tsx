'use client'

import {
    AddToCartSchema,
    addToCartValidation,
} from '@/schemas/createOrderSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface IProps {
    variantId: string
    action: ({ variantId }: AddToCartSchema) => Promise<void>
}

const AddToCartForm: React.FC<IProps> = ({ variantId, action }) => {
    const { register, handleSubmit } = useForm<AddToCartSchema>({
        defaultValues: {
            variantId: variantId,
        },
        resolver: zodResolver(addToCartValidation),
    })

    return (
        <form onSubmit={handleSubmit(action)}>
            <input type='hidden' {...register('variantId')} />

            <input type='submit' value='Add to Cart' />
        </form>
    )
}

export default AddToCartForm
