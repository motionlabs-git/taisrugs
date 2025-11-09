'use client'

import { usePathname, useRouter } from 'next/navigation'
import { MouseEvent } from 'react'

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
        document.body.style.backgroundColor = 'black'
        router.push(link)
    }

    return handleTransition
}
