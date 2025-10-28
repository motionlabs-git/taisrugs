import Link from 'next/link'
import React, { useState } from 'react'

const MobileNavLink = ({ text, link }: { text: string; link: string }) => {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <Link
            href={link}
            aria-label={`Přejít na stránku ${text}`}
            onTouchStartCapture={() => setIsPressed(true)}
            onTouchEndCapture={() => setIsPressed(false)}
            className={`group hover:pt-[3px] pb-[3px] hover:pb-0 pl-[3px] hover:pl-0 hover:pr-[3px] select-none ${
                isPressed && '!pt-[3px] !pb-0 !pl-0 !pr-[3px]'
            }`}
        >
            <div className='w-fit py-2 rounded-full pt-[]'>
                <span
                    className={`w-full h-full px-8 py-2 text-xl font-bold text-nowrap rounded-full border border-white !text-white shadow-[-3px_3px_white] group-hover:shadow-[0_0] duration-200 ${
                        isPressed && 'shadow-[0_0]'
                    }`}
                >
                    {text}
                </span>
            </div>
        </Link>
    )
}

export default MobileNavLink
