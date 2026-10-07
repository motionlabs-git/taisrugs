'use client'

import { usePathname, useRouter } from 'next/navigation'
import { MouseEvent } from 'react'
import { setPageColor } from './setPageColor'

export function usePageTransition() {
    const router = useRouter()
    const path = usePathname()

    const handleTransition = (
        e: MouseEvent<HTMLAnchorElement>,
        link: string
    ) => {
        e.preventDefault()
        const transition = document.getElementById('pageTransition')

        if (path === link) return

        transition?.classList.add('opened')
        setPageColor('#000000')
        router.push(link)
    }

    return handleTransition
}
