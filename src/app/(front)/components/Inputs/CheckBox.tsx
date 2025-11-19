import React, { InputHTMLAttributes } from 'react'

const CheckBox: React.FC<
    InputHTMLAttributes<HTMLInputElement> & {
        id: string
        text: React.JSX.Element
    }
> = ({ id, text, ...props }) => {
    return (
        <label
            htmlFor={id}
            className={`flex gap-2 w-fit items-center justify-evely cursor-pointer ${props.className}`}
        >
            <input
                {...props}
                id={id}
                type='checkbox'
                className='peer hidden '
            />

            <div className='p-0.5 border box-border border-primary w-4 aspect-square rounded-sm peer-checked:[&>div]:scale-100'>
                <div className=' aspect-square bg-primary duration-200 rounded-xs scale-0'></div>
            </div>

            {text}
        </label>
    )
}

export default CheckBox
