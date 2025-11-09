import React from 'react'

const ButtonHeading = ({
    text,
    invert,
}: {
    text: string
    invert?: boolean
}) => {
    return (
        <div
            className={`${
                invert && 'invert'
            } group hover:-ml-[2px] hover:pt-[2px] pb-[2px] hover:pb-0 duration-200 w-fit rounded-full`}
        >
            <h2 className='!text-sm w-fit px-5 py-1 border border-white text-white rounded-full shadow-[-2px_2px_white] hover:shadow-none duration-200 hover:mr-[2px] text-nowrap'>
                {text}
            </h2>
        </div>
    )
}

export default ButtonHeading
