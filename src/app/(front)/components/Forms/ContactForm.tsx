'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import Input from '../Inputs/Input'
import { FiSend } from 'react-icons/fi'
import TextArea from '@/app/(front)/components/Inputs/TextArea'
import Link from 'next/link'
import CheckBox from '../Inputs/CheckBox'
import FileInput from '../Inputs/FileInput'
import {
    ContactFormSchema,
    ContactFormType,
} from '@/app/schemas/contactFormSchema'
import FormSuccess from './FormSuccess'
import { ImSpinner2 } from 'react-icons/im'
import axios from 'axios'

export default function ContactForm() {
    const {
        handleSubmit,
        reset,
        setError,
        register,
        setValue,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactFormType>({
        resolver: zodResolver(ContactFormSchema),
        reValidateMode: 'onSubmit',
    })
    const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
        const payload = {
            formType: 'contact',
            name: data.name,
            email: data.email,
            phone: data.phone ?? '',
            image: data.image ?? '',
        }

        try {
            const res = await axios.post('/api/v1/email', payload)

            if (res.status === 200) {
                reset()
                setValue('image', null)
                setValue('gdpr', false)
            }
        } catch (e) {
            setError('root', { message: 'Něco se pokazilo' })
        }
    }

    return (
        <form
            className='relative flex-3 p-4 sm:p-10 rounded-3xl border border-white bg-radial-[at_80%80%] from-zinc-950/50 to-zinc-900 to-75% shadow-[-3px_3px_white] backdrop-blur-xs lg:flex-5 xl:flex-4'
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className={`${isSubmitSuccessful && 'opacity-0 duration-200'}`}
            >
                <Input
                    {...register('name')}
                    error={errors.name}
                    id='name'
                    placeholder='*Jméno a příjmení'
                />

                <Input
                    {...register('email')}
                    error={errors.email}
                    id='email'
                    placeholder='*Email'
                />
                <Input
                    {...register('phone')}
                    error={errors.phone}
                    id='phone'
                    placeholder='Telefon'
                />
                <TextArea
                    {...register('message')}
                    error={errors.message}
                    id='message'
                    placeholder='*Zpráva'
                />

                <FileInput
                    error={errors.image}
                    placeholder='image'
                    id='image'
                    setValue={(base64) => setValue('image', base64)}
                />

                <CheckBox
                    className='mt-4'
                    id='gdpr'
                    {...register('gdpr')}
                    text={
                        <span className='relative text-xs'>
                            *Souhlasím s podmínkama{' '}
                            <Link href={'/gdpr'}>GDPR</Link>
                        </span>
                    }
                />
                {errors.gdpr && (
                    <span className='block text-primary text-sm text-left w-full mt-2'>
                        {errors.gdpr.message}
                    </span>
                )}

                <fieldset className='flex justify-center mt-2'>
                    <button
                        type='submit'
                        aria-label='Odeslat formulář'
                        className='mt-2 text-white border-white relative group w-fit h-fit items-center rounded-full border hover:border-primary duration-200 transition-transform cursor-pointer select-none'
                    >
                        <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6 duration-200  px-10 py-4 overflow-hidden rounded-full text-inherit group-hover:text-black'>
                            <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                            {isSubmitting ? (
                                <ImSpinner2
                                    className='animate-spin'
                                    size={20}
                                />
                            ) : (
                                <FiSend
                                    size={20}
                                    className='relative text-inherit duration-200'
                                ></FiSend>
                            )}

                            <span className=' relative text-nowrap'>
                                {isSubmitting ? 'Odesílání' : ' Odeslat zprávu'}
                            </span>
                        </div>
                    </button>
                </fieldset>
                {errors.root && (
                    <span className='block text-primary text-sm text-left w-full mt-2'>
                        {errors.root.message}
                    </span>
                )}
            </div>

            {isSubmitSuccessful && (
                <FormSuccess
                    onClick={() => {
                        reset()
                    }}
                />
            )}
        </form>
    )
}
