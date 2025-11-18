import { NextPage } from 'next'
import React from 'react'
import DateTimePicker from '../Inputs/DateTimePicker'

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
        <form>
            <DateTimePicker
                onChange={(value) => console.log(value)}
            ></DateTimePicker>
        </form>
    )
}

export default BookingForm
