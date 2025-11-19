import React, { InputHTMLAttributes } from 'react'

const RadioButton: React.FC<
    InputHTMLAttributes<HTMLInputElement> & {
        text: string
    }
> = ({ text, ...props }) => {
    return (
        <label htmlFor={props.id} className='cursor-pointer'>
            <input
                type='radio'
                id={props.id}
                value={`${props.id}/${text}`}
                name={props.name}
                className='hidden peer'
                {...props}
            />

            <div className='bg-zinc-900 font-bold px-6 py-2 w-fit rounded-full border border-white shadow-[-2px_2px_white] outline-none duration-200 peer-checked:border-primary peer-checked:shadow-[-2px_2px_#ffdb85] text-white peer-checked:text-primary'>
                <span className='text-sm '>{text}</span>
            </div>
        </label>
    )
}

export default RadioButton
