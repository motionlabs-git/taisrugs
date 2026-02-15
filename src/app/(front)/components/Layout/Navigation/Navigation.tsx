'use client'

import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import SpinningLogo from './SpinningLogo'
import NavLink from './NavLink'
import MobileNavigation from './MobileNavigation'
import HamburgerIcon from './HamburgerIcon'
import { useLenis } from 'lenis/react'
import CartButton from './CartButton'
import { usePathname } from 'next/navigation'
import { useCart } from '@/app/utils/zustand/cartStore'
import { ICartMerchandiseQuery } from '@/app/utils/shopify/cartQuery'

interface IProps {
    cart: ICartMerchandiseQuery | null
}

const Navigation: React.FC<IProps> = ({ cart }) => {
    const { data: cartData, setData: setCartData } = useCart()

    const [isMobileNavOpened, setIsMobileNavOpened] = useState(false)
    const [isCartOpened, setIsCartOpened] = useState(false)
    const lenis = useLenis()
    const path = usePathname()

    const handleMobileNav = () => {
        lenis?.stop()

        if (isMobileNavOpened) {
            lenis?.start()
        } else {
            lenis?.stop()
        }

        setIsMobileNavOpened((prev) => !prev)
    }

    useEffect(() => {
        setIsMobileNavOpened(false)
    }, [path])

    useEffect(() => {
        setCartData(cart)
    }, [cart, setCartData])

    return (
        <header className='fixed top-0 z-40 w-full flex items-center justify-center p-4 pointer-events-none'>
            <MobileNavigation isOpened={isMobileNavOpened} />

            <Cart
                cart={cartData}
                handleCloseCart={() => {
                    setIsCartOpened(false)
                }}
                isOpened={isCartOpened}
            ></Cart>

            <nav className='flex items-center justify-between w-full gap-4 pointer-events-none'>
                <SpinningLogo />

                <div className='hidden md:flex gap-2 items-center bg-gray-500/20 rounded-full p-1.5 backdrop-blur-[2px] shadow-md pointer-events-auto'>
                    <NavLink text={'Domů'} link={'/'} />

                    <NavLink
                        text={'Koberec na zakázku'}
                        link={'/koberec-na-zakazku'}
                    />

                    <NavLink text={'Eshop'} link={'/eshop'} />
                    <NavLink text={'Kurzy'} link={'/kurzy'} />

                    <NavLink text={'Kontakt'} link={'/kontakt'} />
                </div>

                <div className='z-40 flex gap-4'>
                    <CartButton
                        cartCount={cartData?.totalQuantity ?? null}
                        handleClick={() => setIsCartOpened(true)}
                    />

                    <HamburgerIcon
                        isMobileNavOpened={isMobileNavOpened}
                        handleClick={handleMobileNav}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navigation
