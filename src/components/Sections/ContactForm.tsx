'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Input from '../Inputs/Input'

const FormSchema = z.object({
    name: z.string(),
})

type FormType = z.infer<typeof FormSchema>

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormType>({
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
            className='flex-1 p-10 rounded-3xl border border-black  shadow-[-3px_3px_black]'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input></Input>
            <Input></Input>

            {errors.name && <p>This field is required</p>}

            <input type='submit' />
        </form>
    )
}
