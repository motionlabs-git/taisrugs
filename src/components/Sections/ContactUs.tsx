'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Input from '../Inputs/Input'

const FormSchema = z.object({
    name: z.string(),
})

type FormType = z.infer<typeof FormSchema>

export default function ContactUS() {
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
        <section className='h-screen flex w-full gap-8'>
            <div className='flex-1'>
                <h1 className=''>Přeješ si kobereček na zakázku?</h1>
                <Image
                    src={'/images/contact-us.png'}
                    alt={'Contact us image'}
                    width={500}
                    height={500}
                ></Image>
            </div>

            <form className='flex-1' onSubmit={handleSubmit(onSubmit)}>
                <Input></Input>

                {errors.name && <p>This field is required</p>}

                <input type='submit' />
            </form>
        </section>
    )
}
