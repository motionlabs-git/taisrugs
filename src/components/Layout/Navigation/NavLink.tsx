import Link from 'next/link'
import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import gsap from 'gsap'
import { usePathname, useRouter } from 'next/navigation'

const NavLink = ({ text, link }: { text: string; link: string }) => {
    const router = useRouter()
    const path = usePathname()

    const routeTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        router.push(link)

        // if (link === path) {
        //     router.refresh()
        // } else {
        //     gsap.timeline()
        //         .to(
        //             '#pageTransition',
        //             {
        //                 height: '100vh',
        //                 duration: 0.3,
        //                 ease: 'power1.inOut',
        //                 onComplete: () => {
        //                     router.push(link)
        //                 },
        //             },
        //             '<'
        //         )
        //         .to('#transitionLogo', {
        //             scale: 1,
        //             rotate: 180,
        //             duration: 1,
        //             ease: 'power1.in',
        //         })
        // }
    }

    return (
        <Link
            className='relative flex group items-center px-4 py-2 rounded-full bg-black text-white hover:!text-black duration-200 overflow-hidden'
            href={link}
            aria-label=''
            onClick={(e) => routeTo(e)}
        >
            <div className='absolute w-0 h-full top-0 left-0 bg-primary duration-200 group-hover:left-[-1px] group-hover:w-[calc(100%+2px)] rounded-full'></div>

            <span className='relative text-nowrap'>{text}</span>
            <FiArrowRightCircle
                size={16}
                className='relative w-0 group-hover:w-6 duration-200'
            ></FiArrowRightCircle>
        </Link>
    )
}

export default NavLink
