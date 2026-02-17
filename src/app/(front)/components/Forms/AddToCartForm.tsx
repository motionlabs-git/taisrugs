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
    product: IProductQuery
    action: ({ variantId }: AddToCartSchema) => Promise<void>
}

const AddToCartForm: React.FC<IProps> = ({ product, action }) => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitSuccessful },
    } = useForm<AddToCartSchema>({
        defaultValues: {
            variantId: product.variants.nodes[0].id,
        },
        resolver: zodResolver(addToCartValidation),
    })

    return (
        <form onSubmit={handleSubmit(action)}>
            <input type='hidden' {...register('variantId')} />

            <button
                disabled={isSubmitting || isSubmitSuccessful}
                type='submit'
                aria-label={'Přidat do košíku'}
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
                            : ' Přidat do košíku'}
                    </span>
                </div>
            </button>
        </form>
    )
}

export default AddToCartForm
