import { usePageTransition } from '@/utils/animation/usePageTransition'
import Link from 'next/link'
import React from 'react'

const FooterLink = ({ link, text }: { link: string; text: string }) => {
    const handleTransition = usePageTransition()

    return (
        <li>
            <Link href={link} onClick={(e) => handleTransition(e, link)}>
                {text}
            </Link>
        </li>
    )
}

export default FooterLink
