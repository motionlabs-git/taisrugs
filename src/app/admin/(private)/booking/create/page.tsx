'use client'

import CloseButton from '../../../components/Inputs/CloseButton'

import { axiosFileClient } from '../../../utils/axios/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import BookingForm from '../../../components/Forms/BookingForm'

const BookingCreatePage = () => {
    return (
        <>
            <section className='w-full rounded-2xl bg-widget p-4'>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Přidat termín</h2>

                    <CloseButton></CloseButton>
                </div>

                <BookingForm
                // onSubmit={handleFormSubmit}
                // loading={loading}
                // response={response}
                // error={error}
                ></BookingForm>
            </section>
        </>
    )
}

export default BookingCreatePage
