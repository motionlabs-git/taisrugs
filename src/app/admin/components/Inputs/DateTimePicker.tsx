'use client'
import React, { useState } from 'react'
import 'dayjs/locale/cs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { PickerValue } from '@mui/x-date-pickers/internals'

const DateTimePickerr = ({
    onChange,
}: {
    onChange: (value: string) => void
}) => {
    const [value, setValue] = useState<Date | string>()

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='cs'>
            <DateTimePicker
                onChange={(newValue) => {
                    const value = newValue?.toISOString()
                    if (!value) return

                    setValue(value)
                    onChange(value)
                }}
                ampm={false}
                sx={{
                    border: 'white !important',
                    outlineColor: 'white',
                    borderColor: 'white !importatnt',
                }}
                slotProps={{}}
            />
        </LocalizationProvider>
    )
}

export default DateTimePickerr
