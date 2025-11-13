import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Work in Progress',
}

const page = () => {
    return (
        <div className='w-full h-[100dvh] flex justify-center items-center'>
            <h1>In progress...</h1>
        </div>
    )
}

export default page
