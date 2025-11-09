import React, { TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

const TextArea: React.FC<
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        error?: FieldError
        id: string
        placeholder: string
    }
> = ({ error, id, placeholder, ...props }) => {
    return (
        <fieldset className='relative float-label-input '>
            <textarea
                id={id}
                placeholder=''
                className='text-base max-h-[10em] min-h-[10em] block h-96 w-full resize-none font-bold px-6 py-2 rounded-2xl border border-white text-primary shadow-[-3px_3px_white] outline-none focus:border-primary focus:shadow-[-3px_3px_#ffdb85] duration-200'
                rows={5}
                {...props}
            ></textarea>
            <label
                htmlFor='message'
                className='absolute text-base font-bold top-2 left-4 text-primary/50 rounded-full border-transparent border pointer-events-none transition duration-200 ease-in-out bg-transparent px-2 text-grey-darker '
            >
                {placeholder}
            </label>

            {error && error.message && (
                <span className='block text-primary text-sm text-right w-full mt-2'>
                    {error.message}
                </span>
            )}
        </fieldset>
    )
}

export default TextArea
