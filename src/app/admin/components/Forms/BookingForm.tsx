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
    const { register, handleSubmit } = useForm<BookingSchema>({
        resolver: zodResolver(bookingValidation),
    })
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const supabase = createClient()

    const onSubmit: SubmitHandler<BookingSchema> = async (data) => {
        setLoading(true)

        try {
            await supabase
                .from('booking')
                .insert([{ value: data.value }])
                .select()
                .then((res) => {
                    console.log(res)
                    if (res.status === 201) {
                        setLoading(false)
                        router.push('/admin/booking')
                    }
                })
        } catch (err) {
            setError(true)
            setLoading(false)
        }

        // await axiosFileClient
        //     .post('/api/v1/booking', data)
        //     .then(() => {
        //         setResponse(true)
        //     })
        //     .catch(() => {
        //         setError(true)
        //     })
        //     .finally(() => {
        //         setTimeout(() => {
        //             setError(false)
        //             setResponse(false)
        //             router.push('/admin/price-list')
        //         }, 2000)
        //     })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <DateTimePicker {...register('value')}></DateTimePicker>

            <div className='flex justify-end mt-4'>
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
            </div>

            {error && <span>Něco se pokazilo</span>}
        </form>
    )
}

export default BookingForm
