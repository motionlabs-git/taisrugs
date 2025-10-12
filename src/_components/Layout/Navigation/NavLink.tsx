import Link from 'next/link'
import React from 'react'

const NavLink = ({ text, link }: { text: string; link: string }) => {
    return (
        <Link
            className='py-1 group'
            href={link}
            aria-label={'Odkaz hlavního menu ' + text}
        >
            <p className=' relative font-bold leading-4 overflow-hidden'>
                <span className=''>
                    {text.split('').map((letter, i) => {
                        const delay = i / 25
                        return (
                            <span
                                className='inline-block group-hover:-translate-y-[1.25em] duration-300'
                                style={{ transitionDelay: `${delay}s` }}
                                key={letter}
                            >
                                {letter}
                            </span>
                        )
                    })}
                </span>

                <span className='absolute top-0 left-0'>
                    {text.split('').map((letter, i) => {
                        const delay = i / 25
                        return (
                            <span
                                className='inline-block translate-y-[1.25em] group-hover:translate-y-0 duration-300'
                                style={{ transitionDelay: `${delay}s` }}
                                key={letter}
                            >
                                {letter}
                            </span>
                        )
                    })}
                </span>
            </p>
        </Link>
    )
}

export default NavLink
