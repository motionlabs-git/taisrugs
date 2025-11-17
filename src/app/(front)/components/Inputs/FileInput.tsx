import Image from 'next/image'
import React, { InputHTMLAttributes, useRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'

const FileInput: React.FC<
    InputHTMLAttributes<HTMLInputElement> & {
        error?: FieldError
        id: string
        placeholder: string
    }
> = ({ error, id, ...props }) => {
    const [preview, setPreview] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const url = URL.createObjectURL(file)
        setPreview(url)
        props.onChange?.(e)
    }

    const deleteFile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!inputRef.current) return
        inputRef.current.value = ''
        setPreview(null)
    }

    return (
        <>
            <div className='flex items-center justify-center w-full'>
                <label
                    htmlFor={id}
                    className='flex flex-col items-center justify-center w-full rounded-2xl bg-gray-200/10 border-dashed border-2 border-stone-300 cursor-pointer hover:bg-gray-200/15 duration-200'
                >
                    {preview ? (
                        <div className='w-full p-4'>
                            <div className='relative mb-4 aspect-square border-white/10 hover:border-white/40 duration-200 border w-32 rounded-xl'>
                                <button
                                    type='button'
                                    onClick={(e) => deleteFile(e)}
                                    className='w-auto h-5 aspect-square flex items-center justify-center rounded-full absolute -right-2 -top-2 bg-white/80 text-black cursor-pointer hover:bg-white/100 duration-200'
                                >
                                    <FiPlus className='rotate-45' />
                                </button>
                                <Image
                                    src={preview}
                                    alt='preview'
                                    className='w-full h-full rounded-xl object-cover'
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center justify-center text-body pt-5 pb-6'>
                            <svg
                                className='w-8 h-8 mb-4'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2'
                                />
                            </svg>
                            <p className='mb-2 text-sm'>
                                <span className='font-semibold'>
                                    Vybert nebo přetáhni fotku
                                </span>{' '}
                            </p>
                            <p className='text-xs'>SVG, PNG, JPG or GIF</p>
                        </div>
                    )}
                    <input
                        id={id}
                        type='file'
                        className='hidden'
                        {...props}
                        onChange={handleFileChange}
                        ref={inputRef}
                    />
                </label>
            </div>
            {error && (
                <span className='block text-primary text-sm text-right w-full mt-2'>
                    {error.message}
                </span>
            )}
        </>
    )
}

export default FileInput
