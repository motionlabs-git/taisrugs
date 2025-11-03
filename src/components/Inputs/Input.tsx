import React from 'react'

const Input = () => {
    return (
        <div className='relative float-label-input'>
            <input
                type='text'
                id='name'
                placeholder=''
                className='text-base font-bold px-6 py-2 w-full rounded-full border border-white text-primary shadow-[-2px_2px_white] outline-none focus:border-primary focus:shadow-[-2px_2px_#ffdb85] duration-200'
            ></input>

            <label
                htmlFor='id'
                className='absolute text-base font-bold top-2 left-4 text-primary/50 rounded-full border-transparent border pointer-events-none transition duration-200 ease-in-out bg-transparent px-2 text-grey-darker '
            >
                Jméno
            </label>

            <span className='block text-primary text-sm text-right w-full mt-2'>
                Error
            </span>
        </div>
    )
}

export default Input
