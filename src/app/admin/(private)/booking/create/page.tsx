'use client'

import CloseButton from '../../../components/Inputs/CloseButton'

import { axiosFileClient } from '../../../utils/axios/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import BookingForm from '../../../components/Forms/BookingForm'

const BookingCreatePage = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(false)
    const [error, setError] = useState(false)

    const handleFormSubmit = async (data: FormData) => {
        setLoading(true)

        await axiosFileClient
            .post('/api/v1/booking', data)
            .then(() => {
                setResponse(true)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setTimeout(() => {
                    setError(false)
                    setResponse(false)
                    router.push('/admin/price-list')
                }, 2000)
            })
    }

    return (
        <>
            <section className='w-full rounded-2xl bg-widget p-4'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Přidat termín</h2>

                    <CloseButton></CloseButton>
                </div>

                <BookingForm
                    onSubmit={handleFormSubmit}
                    loading={loading}
                    response={response}
                    error={error}
                ></BookingForm>
            </section>
        </>
    )
}

export default BookingCreatePage
