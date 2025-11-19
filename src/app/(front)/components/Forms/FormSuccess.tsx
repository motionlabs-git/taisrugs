import React from 'react'
import { FiRepeat } from 'react-icons/fi'

const FormSuccess = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className='absolute p-2 animate-fade-in-04 inset-0 flex flex-col gap-2 justify-center items-center bg-zinc-900/80 backdrop-blur-sm w-full h-full rounded-3xl'>
            <h2>Formulář byl úspěšně odeslán</h2>
            <p>Ozvu se vám co nejdříve</p>
            <fieldset className='flex justify-center mt-2'>
                <button
                    onClick={onClick}
                    type='submit'
                    aria-label='Odeslat formulář'
                    className='mt-2 text-white border-white relative group w-fit h-fit items-center rounded-full border hover:border-primary duration-200 transition-transform cursor-pointer select-none'
                >
                    <div className='w-full h-full relative flex items-center gap-4 group-hover:gap-6 duration-200  px-10 py-4 overflow-hidden rounded-full text-inherit group-hover:text-black'>
                        <div className='absolute top-0 left-0 w-0 group-hover:w-full h-full rounded-full bg-primary duration-200'></div>

                        <FiRepeat
                            size={20}
                            className='relative text-inherit duration-200'
                        ></FiRepeat>

                        <span className=' relative '>Odeslat novou zprávu</span>
                    </div>
                </button>
            </fieldset>
        </div>
    )
}

export default FormSuccess
