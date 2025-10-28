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

        if (link === path) {
            router.refresh()
        } else {
            gsap.timeline().to(
                '#pageTransition',
                {
                    height: '100vh',
                    duration: 0.3,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        router.push(link)
                    },
                },
                '<'
            )
        }
    }

    return (
        <Link
            className={`relative flex group items-center px-4 py-2 w-fit rounded-full  text-white hover:!text-black overflow-hidden duration-200 ${
                `/${path.split('/')[1]}` === link && '!text-black'
            }`}
            href={link}
            aria-label={`Navigation link to ${text}`}
            onClick={(e) => routeTo(e)}
        >
            <div
                className={`absolute left-0 top-0 w-full h-full bg-black rounded-full duration-300 group-hover:delay-200 group-hover:bg-transparent ${
                    `/${path.split('/')[1]}` === link && 'bg-transparent'
                } `}
            ></div>

            <div
                className={`absolute inset-0 origin-left bg-primary rounded-full transition-transform duration-300 ease-in-out transform ${
                    `/${path.split('/')[1]}` === link
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                }`}
            ></div>

            <span className='relative text-nowrap'>{text}</span>
            <FiArrowRightCircle
                size={16}
                className='relative w-0 group-hover:w-6 duration-200'
            ></FiArrowRightCircle>
        </Link>
    )
}

export default NavLink
