'use client'
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import Cart from '../Cart/Cart'
import gsap from 'gsap'
import SpinningLogo from './SpinningLogo'
import NavLink from './NavLink'
import PageTransition from './PageTransition'
import MobileNavigation from './MobileNavigation'
import HamburgerIcon from './HamburgerIcon'
import { useLenis } from 'lenis/react'
import CartButton from './CartButton'

const Navigation = () => {
    const [isMobileNavOpened, setIsMobileNavOpened] = useState(false)
    const lenis = useLenis()

    const cartTl = gsap.timeline({
        defaults: { duration: 0.3, ease: 'power1.inOut' },
        paused: true,
    })

    const handleMobileNav = () => {
        setIsMobileNavOpened((prev) => !prev)

        if (isMobileNavOpened) {
            lenis?.start()
        } else {
            lenis?.stop()
        }
    }

    useEffect(() => {
        cartTl
            .set('#cart', {
                display: 'block',
                opacity: 0,
            })
            .to('#cart', {
                opacity: 1,
            })
            .to('#cartAside', {
                right: 0,
            })
    }, [cartTl])

    return (
        <header className='fixed top-0 z-50 w-full flex justify-center p-4'>
            {/* <PageTransition></PageTransition> */}

            <MobileNavigation isOpened={isMobileNavOpened} />

            <Cart
                handleCloseCart={() => {
                    cartTl.reverse()
                }}
            ></Cart>

            <nav className='flex items-center justify-between w-full gap-4 '>
                <SpinningLogo />

                <div className='hidden md:flex gap-2 items-center bg-gray-500/20 rounded-full p-1.5 backdrop-blur-[2px] shadow-md'>
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
                    <CartButton handleClick={() => cartTl.play()}></CartButton>

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
