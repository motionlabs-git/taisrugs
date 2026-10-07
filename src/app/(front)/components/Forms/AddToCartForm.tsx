'use client'

import {
    AddToCartSchema,
    addToCartValidation,
} from '@/app/schemas/addToCartSchema'
import { IProductQuery } from '@/app/utils/shopify/productQuery'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FiShoppingCart } from 'react-icons/fi'

interface IProps {
    title?: string
    product: IProductQuery
    action: ({ variantId }: AddToCartSchema) => Promise<{ success: boolean }>
}

const AddToCartForm: React.FC<IProps> = ({
    title = 'Přidat do košíku',
    product,
    action,
}) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { isSubmitting, isSubmitSuccessful, errors },
    } = useForm<AddToCartSchema>({
        defaultValues: {
            variantId: product.variants.nodes[0].id,
        },
        resolver: zodResolver(addToCartValidation),
    })

    const onSubmit = async (data: AddToCartSchema) => {
        const { success } = await action(data)

        if (!success)
            setError('root', {
                message: 'Nepodařilo se přidat do košíku, zkuste to znovu',
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' {...register('variantId')} />

            <button
                disabled={isSubmitting || isSubmitSuccessful}
                type='submit'
                aria-label={title}
                className={` relative group w-fit h-fit items-center rounded-full border border-black hover:border-primary duration-200 cursor-pointer select-none`}
            >
                <div className='w-full h-full relative flex items-center gap-4 duration-200 px-10 py-4 overflow-hidden rounded-full text-black group-hover:text-black'>
                    <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                    <FiShoppingCart
                        size={20}
                        className='relative text-inherit duration-200'
                    ></FiShoppingCart>

                    <span className=' relative text-nowrap'>
                        {isSubmitting || isSubmitSuccessful
                            ? 'Přidávám...'
                            : title}
                    </span>
                </div>
            </button>

            {errors.root && (
                <span className='block text-red-600 text-sm mt-2'>
                    {errors.root.message}
                </span>
            )}
        </form>
    )
}

export default AddToCartForm
