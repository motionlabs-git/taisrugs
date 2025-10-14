import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const host = request.headers.get('host')

    if (host === 'www.taisrugs.cz') {
        return NextResponse.rewrite(new URL('/wip', request.url))
    }

    return NextResponse.next()
}
