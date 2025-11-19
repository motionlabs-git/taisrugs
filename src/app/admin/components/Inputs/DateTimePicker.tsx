import React, { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

const DateTimePicker: React.FC<
    InputHTMLAttributes<HTMLInputElement> & {
        error?: FieldError
        showErrorMessage?: boolean
    }
> = ({ error, ...props }) => {
    return (
        <>
            <input
                className='ml-datetime'
                aria-label='Date and time'
                type='datetime-local'
                {...props}
            />
            {error && (
                <span className='text-sm text-red-400'>{error.message}</span>
            )}
        </>
    )
}

export default DateTimePicker
