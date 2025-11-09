import { NextResponse } from 'next/server'

export function HttpBadRequest() {
    return NextResponse.json({ code: 'BAD_REQUEST' }, { status: 400 })
}

export function HttpValidationError() {
    return NextResponse.json({ code: 'VALIDATION_ERROR' }, { status: 422 })
}

export function HttpNotFoundError() {
    return NextResponse.json({ code: 'NOT_FOUND' }, { status: 404 })
}

export function HttpInternalServerError() {
    return NextResponse.json({ code: 'INTERNAL_SERVER_ERROR' }, { status: 500 })
}
