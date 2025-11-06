'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiCheck } from 'react-icons/fi'

const CookiesBar = () => {
    const [isAgreed, setIsAgreed] = useState<null | boolean>(false)

    useEffect(() => {
        const cookies = localStorage.getItem('cookies')

        if (cookies === null) {
            setIsAgreed(cookies)
        }

        if (cookies === 'disagreed') {
            setIsAgreed(false)
        }

        if (cookies === 'agreed') {
            setIsAgreed(true)
        }
    }, [])

    const agreeCookies = () => {
        setIsAgreed(true)

        localStorage.setItem('cookies', 'agreed')
    }

    // const disagreeCookies = () => {
    //     setIsAgreed(false)
    //     localStorage.setItem('cookies', 'disagreed')
    // }

    return (
        <aside className='fixed z-30 w-full sm:w-fit bottom-4 px-4 sm:px-0 sm:right-4'>
            {typeof isAgreed !== 'boolean' && (
                <div
                    id='cookiesBar'
                    className='w-full sm:w-96 h-full border-zinc-500/20 flex flex-col gap-2'
                >
                    <p className='cookiesBarLine line-1 opacity-0 px-4 py-2 text-sm rounded-2xl bg-radial-[at_80%80%] from-[#ffdb85] to-[#f8cd69] to-75% border border-zinc-600/20 text-black max-w-4/5 self-end'>
                        Ahoj, i tady jsou potřeba cookies?🍪
                    </p>

                    <p className='cookiesBarLine line-2 opacity-0 px-4 py-2 text-sm rounded-2xl bg-radial-[at_20%20%] from-zinc-950 to-zinc-900 to-75% border border-zinc-600/20 text-white max-w-4/5'>
                        Ano. Jsou použity k základnímu fungování webu🌐
                    </p>

                    <p className='cookiesBarLine line-3 opacity-0 px-4 py-2 text-sm rounded-2xl bg-radial-[at_80%80%] from-[#ffdb85] to-[#f8cd69] to-75% border border-zinc-600/20 text-black max-w-4/5 self-end'>
                        Jaké cookies používáš?
                    </p>

                    <p className='cookiesBarLine line-4 opacity-0 px-4 py-2 text-sm rounded-2xl bg-radial-[at_20%20%] from-zinc-950 to-zinc-900 to-75% border border-zinc-600/20 text-white max-w-4/5'>
                        Více si o nich můžeš přečíst{' '}
                        <Link className='underline' href={'/cookies'}>
                            zde
                        </Link>
                        ! Děkuji 🫶
                    </p>

                    <button
                        type='button'
                        aria-label='Agree with cookies'
                        onClick={agreeCookies}
                        className='group cookiesBarLine line-5 opacity-0 self-end cursor-pointer pb-[3px] pl-[3px] sm:hover:pb-0 sm:hover:pl-0 sm:hover:pr-[3px] sm:hover:pt-[3px] duration-200'
                    >
                        <div className='rounded-full flex gap-2 justify-center items-center py-1 px-3 bg-radial-[at_20%20%] from-[#ffdb85] to-[#f8cd69] to-75% border border-zinc-600/20 shadow-[-3px_3px_black] sm:hover:shadow-[0_0_black] duration-200 text-black'>
                            <span className='text-sm'>Souhlasím</span>
                            <FiCheck className='pr-0.5' size={22}></FiCheck>
                        </div>
                    </button>
                </div>
            )}
        </aside>
    )
}

export default CookiesBar
