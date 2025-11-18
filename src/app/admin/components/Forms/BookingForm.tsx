import { NextPage } from 'next'
import React from 'react'
import DateTimePicker from '../Inputs/DateTimePicker'
import { FiSave } from 'react-icons/fi'

interface IProps {
    defaultValues?: ''
    onSubmit: (data: FormData) => void
    handleDelete?: () => void
    loading: boolean
    response: boolean
    error: boolean
}

const BookingForm: NextPage<IProps> = ({
    onSubmit,
    defaultValues,
    loading,
    response,
    error,
    handleDelete,
}) => {
    return (
        <form className='mt-4'>
            <DateTimePicker
                onChange={(value) => console.log(value)}
            ></DateTimePicker>

            <div className='flex justify-end mt-4'>
                <button
                    type='submit'
                    className='self-end flex justify-center items-center gap-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg duration-300 h-12 px-6 cursor-pointer'
                >
                    Vložit
                    <FiSave className='text-lg' />
                </button>
            </div>
        </form>
    )
}

export default BookingForm
