import React from 'react'

import Link from 'next/link'

const MobileNavigation = ({ isOpened }: { isOpened: boolean }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full  bg-black duration-300 ease-in-out overflow-hidden flex flex-col gap-4 items-center justify-center ${
                isOpened ? 'h-[100dvh]' : 'h-0'
            }`}
        >
            <Link
                href={'/'}
                className='w-fit px-8 py-2 text-xl font-bold border border-white !text-white rounded-full shadow-[-3px_3px_white] text-nowrap'
            >
                Domů
            </Link>
            <Link
                href={'/'}
                className='w-fit px-8 py-2 text-xl font-bold border border-white !text-white rounded-full shadow-[-3px_3px_white] text-nowrap'
            >
                Koberečky na zakázku
            </Link>

            {/* <NavLink text={'Domů'} link={'/'}></NavLink>
            <NavLink text={'Domů'} link={'/'}></NavLink>
            <NavLink text={'Domů'} link={'/'}></NavLink>
            <NavLink text={'Domů'} link={'/'}></NavLink> */}
        </div>
    )
}

export default MobileNavigation
