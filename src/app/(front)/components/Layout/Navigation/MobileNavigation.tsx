import React from 'react'
import MobileNavLink from './MobileNavLink'

const MobileNavigation = ({ isOpened }: { isOpened: boolean }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full  bg-black duration-300 ease-in-out overflow-hidden flex flex-col gap-4 items-center justify-center ${
                isOpened ? 'h-[100dvh]' : 'h-0'
            }`}
        >
            <MobileNavLink text='Domů' link='/' />
            <MobileNavLink
                text=' Koberečky na zakázku'
                link='/koberec-na-zakazku'
            />
            <MobileNavLink text=' Eshop' link='/eshop' />
            <MobileNavLink text=' Kurzy' link='/kurzy' />
            <MobileNavLink text=' Kontakt' link='/kontakt' />
        </div>
    )
}

export default MobileNavigation
