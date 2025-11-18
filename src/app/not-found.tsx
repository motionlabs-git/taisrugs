'use client'

import { redirect, usePathname } from 'next/navigation'
import { NextRequest } from 'next/server'

const E404 = (request: NextRequest) => {
    const pathname = usePathname()

    console.log(pathname)

    if (pathname.startsWith('/admin')) {
        return redirect('/admin')
    }

    return redirect('/page-not-found')
}

export default E404
