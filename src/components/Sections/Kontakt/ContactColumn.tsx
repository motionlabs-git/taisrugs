import React, { JSX } from 'react'
import LogoShape from '../../../../public/LogoShape'
import Link from 'next/link'

const ContactColumn = ({
    heading,
    children,
    icon,
    link,
}: {
    heading: string
    children: JSX.Element
    icon?: JSX.Element
    link?: string
}) => {
    if (link)
        return (
            <Link
                href={link}
                target='_blank'
                aria-label='Odkaz kontaktu'
                className='group col-span-1 row-span-1 w-full h-full rounded-2xl pb-[2px] pl-[2px] hover:pb-0 hover:pl-0 hover:pt-[2px] hover:pr-[2px] duration-200 selection:!bg-primaryAccent selection:!text-white'
            >
                <div className='relative block w-full aspect-video p-4 bg-radial-[at_10%90%] from-[#ffdb85] to-[#f8cd69] to-75% rounded-2xl border-2 border-black shadow-[-3px_3px_black] overflow-hidden group-hover:shadow-[-1px_1px_black] duration-200 cursor-pointer text-left'>
                    <LogoShape className='absolute w-[120%] text-primaryAccent -bottom-1/2 -right-1/2 opacity-50 duration-200 group-hover:scale-110 select-none group-hover:rotate-12'></LogoShape>

                    {icon && (
                        <div className='absolute bottom-4 right-4 text-black sm:opacity-0 group-hover:opacity-100 duration-200 text-xl'>
                            {icon}
                        </div>
                    )}
                    <div className='relative'>
                        <h2 className='text-primaryAccent group-hover:text-black duration-200 !text-2xl'>
                            {heading}
                        </h2>
                        {children}
                    </div>
                </div>
            </Link>
        )

    return (
        <div className='group col-span-1 row-span-1 w-full h-full rounded-2xl pb-[2px] pl-[2px] hover:pb-0 hover:pl-0 hover:pt-[2px] hover:pr-[2px] duration-200 selection:!bg-primaryAccent selection:!text-white'>
            <div className='relative block w-full aspect-video p-4 bg-primary rounded-2xl border-2 border-black shadow-[-3px_3px_black] overflow-hidden group-hover:shadow-[-1px_1px_black] duration-200 cursor-pointer text-left'>
                <LogoShape className='absolute w-[120%] text-primaryAccent -bottom-1/2 -right-1/2 opacity-50 duration-200 group-hover:scale-110 select-none group-hover:rotate-12'></LogoShape>

                {icon && (
                    <div className='absolute bottom-4 right-4 text-black sm:opacity-0 group-hover:opacity-100 duration-200 text-xl'>
                        {icon}
                    </div>
                )}
                <div className='relative'>
                    <h2 className='text-primaryAccent group-hover:text-black duration-200 !text-2xl'>
                        {heading}
                    </h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContactColumn
