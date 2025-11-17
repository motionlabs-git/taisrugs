'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import Input from '../Inputs/Input'
import { FiRepeat, FiSend } from 'react-icons/fi'
import TextArea from '@/app/(front)/components/Inputs/TextArea'
import Link from 'next/link'
import CheckBox from '../Inputs/CheckBox'
import FileInput from '../Inputs/FileInput'
import { useRef } from 'react'

const fileSizeLimit = 5 * 1024 * 1024
const FormSchema = z.object({
    name: z.string().nonempty('Toto pole je povinné'),
    email: z.email('Neplatný email').nonempty('Toto pole je povinné'),
    phone: z.string().regex(/^(?:\d\s*){9}$/, 'Neplatné telefonní číslo'),
    message: z.string().nullable(),
    image: z
        .instanceof(File, { message: 'Neplatný typ souboru' })
        .refine(
            (file) =>
                [
                    'image/png',
                    'image/jpeg',
                    'image/jpg',
                    'image/svg+xml',
                    'image/gif',
                ].includes(file.type),
            { message: 'Neplatný typ obrázku' }
        )
        .refine((file) => file.size <= fileSizeLimit, {
            message: 'Obrázek je příliš velký 5MB',
        }),
    gdpr: z.literal<boolean>(true, 'Souhlas musí být udělen'),
})

type FormType = z.infer<typeof FormSchema>

export default function ContactForm() {
    const formRef = useRef<null | HTMLFormElement>(null)

    const {
        handleSubmit,
        watch,
        reset,
        setError,
        register,
        formState: { errors, isSubmitting, isSubmitted },
    } = useForm<FormType>({
        defaultValues: {
            name: 'Jindra',
        },
        resolver: zodResolver(FormSchema),
    })
    const onSubmit: SubmitHandler<FormType> = async (data) => {
        console.log(data)

        await emailjs.init({
            publicKey: process.env.EMAILJS_PUBLIC_KEY!,
            blockHeadless: true,
        })

        try {
            if (!formRef.current) {
                return setError('root', { message: 'Něco se pokazilo' })
            }

            await emailjs
                .sendForm(
                    process.env.EMAILJS_SERVICE_ID!,
                    process.env.EMAILJS_TEMPLATE_ID!,
                    formRef.current
                )
                .then(
                    () => {
                        reset()
                    },
                    () => {
                        setError('root', { message: 'Něco se pokazilo' })
                    }
                )
        } catch (e: unknown) {
            if (e instanceof TypeError)
                setError('root', { message: 'Formulář se nepodařilo odeslat' })
        }
    }

    return (
        <form
            ref={formRef}
            className='relative flex-3 p-4 sm:p-10 rounded-3xl border border-white bg-radial-[at_80%80%] from-zinc-950/50 to-zinc-900 to-75% shadow-[-3px_3px_white] backdrop-blur-xs lg:flex-5 xl:flex-4'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                {...register('name')}
                error={errors.name}
                id='name'
                placeholder='Jméno a přijmení'
            />
            {/* {errors.name && (
                <span className='block text-primary text-sm text-right w-full '>
                    {errors.name.message}
                </span>
            )} */}

            <Input
                {...register('email')}
                error={errors.email}
                id='email'
                placeholder='Email'
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
                placeholder='Zpráva'
            />

            <FileInput
                {...register('image')}
                error={errors.image}
                placeholder='xd'
                id='image-dropzone'
            />

            <CheckBox
                className='mt-4'
                id='gdpr'
                {...register('gdpr')}
                text={
                    <span className='relative text-xs'>
                        Souhlasím s podmínkama <Link href={'/gdpr'}>GDPR</Link>
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

                        <FiSend
                            size={20}
                            className='relative text-inherit duration-200'
                        ></FiSend>

                        <span className=' relative text-nowrap'>
                            Odeslat zprávu
                        </span>
                    </div>
                </button>
            </fieldset>

            {isSubmitted && (
                <div className='absolute inset-0 flex flex-col gap-2 justify-center items-center bg-zinc-900/80 w-full h-full rounded-3xl'>
                    <h2>Formulář úspěšně odeslán</h2>
                    <p>Ozvu se vám co nejdříve</p>
                    <fieldset className='flex justify-center mt-2'>
                        <button
                            onClick={() => reset()}
                            type='submit'
                            aria-label='Odeslat formulář'
                            className='mt-2 text-white border-white relative group w-fit h-fit items-center rounded-full border hover:border-primary duration-200 transition-transform cursor-pointer select-none'
                        >
                            <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6 duration-200  px-10 py-4 overflow-hidden rounded-full text-inherit group-hover:text-black'>
                                <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                                <FiRepeat
                                    size={20}
                                    className='relative text-inherit duration-200'
                                ></FiRepeat>

                                <span className=' relative text-nowrap'>
                                    Odeslat novou zprávu
                                </span>
                            </div>
                        </button>
                    </fieldset>
                </div>
            )}
        </form>
    )
}
