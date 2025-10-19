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
                    <button
                        type='button'
                        aria-label='Košík'
                        className='relative group cursor-pointer rounded-full shadow-md md:hover:mr-[4px] duration-200 md:hover:-ml-1'
                        onClick={() => cartTl.play()}
                    >
                        <div className='relative flex gap-2 items-center rounded-full px-4 py-2  bg-primary text-black md:hover:bg-primary md:hover:text-black shadow-[-3px_3px_black] md:group-hover:shadow-[0px_0px] duration-200 md:group-hover:mt-[3px]'>
                            <FiShoppingCart
                                className=' duration-300'
                                size={16}
                            ></FiShoppingCart>

                            <span>Košík</span>
                        </div>
                    </button>

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
