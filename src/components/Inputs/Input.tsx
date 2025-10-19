import React from 'react'

const Input = () => {
    return (
        <div className='flex flex-col gap-2 w-fit'>
            <label htmlFor='' className='font-bold'>
                Jméno
            </label>
            <input
                type='text'
                id=''
                placeholder='Jméno'
                className='text-lg font-bold px-6 py-2 rounded-full border border-black shadow-[-3px_3px_black] outline-none focus:bg-red-400 duration-200'
            ></input>
        </div>
    )
}

export default Input
