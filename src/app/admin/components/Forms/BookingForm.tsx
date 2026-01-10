'use client'

import React, { useState } from 'react'
import DateTimePicker from '../Inputs/DateTimePicker'
import { FiSave } from 'react-icons/fi'
import { ImSpinner2 } from 'react-icons/im'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BookingSchema, bookingValidation } from '../../schemas/booking.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { createClient } from '../../utils/supabase/client'

const BookingForm = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BookingSchema>({
        resolver: zodResolver(bookingValidation),
    })

    const [response, setResponse] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const supabase = createClient()

    const onSubmit: SubmitHandler<BookingSchema> = async (data) => {
        setLoading(true)

        const { error: updateError } = await supabase
            .from('booking')
            .insert([{ value: data.value }])
            .select()

        if (updateError) setError(true)
        else setResponse(true)

        setLoading(false)
        setTimeout(() => {
            setResponse(false)
            setError(false)

            router.push('/admin/booking')
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <fieldset>
                <label>Datum</label>

                <DateTimePicker
                    {...register('value')}
                    error={errors.value}
                    className='mt-1'
                />
            </fieldset>

            {error && (
                <span className='text-red-500 animate-res-fade-out'>
                    An error occurred while saving the data.
                </span>
            )}
            {response && (
                <span className='text-green-500 animate-res-fade-out'>
                    Data saved successfully
                </span>
            )}

            <button
                type='submit'
                className='self-end flex justify-center items-center gap-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 h-12 px-6 cursor-pointer'
            >
                Vložit
                {loading ? (
                    <ImSpinner2 className='animate-spin' size={16} />
                ) : (
                    <FiSave className='text-lg' />
                )}
            </button>
        </form>
    )
}

export default BookingForm
