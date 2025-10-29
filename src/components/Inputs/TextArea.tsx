import React from 'react'

const TextArea = () => {
    return (
        <fieldset className='flex flex-col gap-2 w-full'>
            <label htmlFor='message' className='font-bold mt-2'>
                Zpráva
            </label>
            <textarea
                id='message'
                placeholder='Zpráva'
                className='text-lg max-h-[10em] min-h-[10em] block h-96 resize-none font-bold px-6 py-2 rounded-2xl border border-white text-primary shadow-[-3px_3px_white] outline-none focus:border-primary focus:shadow-[-3px_3px_#ffdb85] duration-200'
                rows={5}
            ></textarea>

            <span className='text-primary text-sm text-right'>Error</span>
        </fieldset>
    )
}

export default TextArea
