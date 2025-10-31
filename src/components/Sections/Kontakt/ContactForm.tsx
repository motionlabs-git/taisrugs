'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Input from '../../Inputs/Input'
import { FiSend } from 'react-icons/fi'
import TextArea from '@/components/Inputs/TextArea'

const FormSchema = z.object({
    name: z.string(),
})

type FormType = z.infer<typeof FormSchema>

export default function ContactForm() {
    const { handleSubmit, watch } = useForm<FormType>({
        defaultValues: {
            name: 'Jindra',
        },
        resolver: zodResolver(FormSchema),
    })
    const onSubmit: SubmitHandler<FormType> = (data) => console.log(data)

    console.log(watch('name')) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

        <form
            className='flex-3 p-10 rounded-3xl border border-white  shadow-[-3px_3px_white]'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input></Input>
            <Input></Input>
            <TextArea />

            <fieldset className='flex justify-center'>
                <button
                    type='submit'
                    aria-label={'Prozkoumat obchod'}
                    className={`mt-2 text-white border-white relative group w-fit h-fit items-center rounded-full border hover:border-primary duration-200 transition-transform cursor-pointer select-none`}
                >
                    <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6 duration-200  px-10 py-4 overflow-hidden rounded-full text-inherit group-hover:text-black'>
                        <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                        <FiSend
                            size={20}
                            className='relative text-inherit duration-200'
                        ></FiSend>

                        <span className=' relative text-nowrap'>Odeslat</span>
                    </div>
                </button>
            </fieldset>
        </form>
    )
}
