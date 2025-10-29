import React from 'react'

const Input = () => {
    return (
        <fieldset className='flex flex-col gap-2 w-full'>
            <label htmlFor='name' className='font-bold mt-2'>
                Jméno
            </label>
            <input
                type='text'
                id='name'
                placeholder='Jméno'
                className='text-lg font-bold px-6 py-2 rounded-full border border-white text-primary shadow-[-3px_3px_white] outline-none focus:border-primary focus:shadow-[-3px_3px_#ffdb85] duration-200'
            ></input>

            <span className='text-primary text-sm text-right'>Error</span>
        </fieldset>
    )
}

export default Input
