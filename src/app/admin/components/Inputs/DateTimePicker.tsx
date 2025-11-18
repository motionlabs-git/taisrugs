import React from 'react'

const DateTimePickerr = ({
    onChange,
}: {
    onChange: (value: string) => void
}) => {
    return (
        <input
            className='ml-datetime'
            aria-label='Date and time'
            type='datetime-local'
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default DateTimePickerr
