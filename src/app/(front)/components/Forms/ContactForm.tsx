'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../Inputs/Input'
import { FiSend } from 'react-icons/fi'
import TextArea from '@/app/(front)/components/Inputs/TextArea'
import Link from 'next/link'
import CheckBox from '../Inputs/CheckBox'

const FormSchema = z.object({
    name: z.string(),
    subject: z.string(),
    message: z.string(),
    gdpr: z.boolean(),
})

type FormType = z.infer<typeof FormSchema>

export default function ContactForm() {
    const { handleSubmit, watch, register } = useForm<FormType>({
        defaultValues: {
            name: 'Jindra',
        },
        resolver: zodResolver(FormSchema),
    })
    const onSubmit: SubmitHandler<FormType> = (data) => {
        console.log(data)
    }

    return (
        <form
            className='flex-3 p-4 sm:p-10 rounded-3xl border border-white bg-radial-[at_80%80%] from-zinc-950/50 to-zinc-900 to-75% shadow-[-3px_3px_white] backdrop-blur-xs lg:flex-5 xl:flex-4'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input {...register('name')} id='name' placeholder='Jméno' />
            <Input
                {...register('subject')}
                id='subject'
                placeholder='Předmět'
            />
            <TextArea
                {...register('message')}
                id='message'
                placeholder='Zpráva'
            />

            <CheckBox
                id='gdpr'
                {...register('gdpr')}
                text={
                    <span className='relative text-xs'>
                        Souhlasím s podmínkama <Link href={'/gdpr'}>GDPR</Link>
                    </span>
                }
            />

            <fieldset className='flex justify-center mt-2'>
                <button
                    type='submit'
                    aria-label='Odeslat formulář'
                    className='mt-2 text-white border-white relative group w-fit h-fit items-center rounded-full border hover:border-primary duration-200 transition-transform cursor-pointer select-none'
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
