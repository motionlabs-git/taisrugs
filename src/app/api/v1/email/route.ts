import { NextRequest, NextResponse } from 'next/server'
import emailjs from '@emailjs/nodejs'
import { ContactFormType } from '@/app/schemas/contactFormSchema'

type FormType = 'contact' | 'booking'

const TEMPLATE_MAP: Record<FormType, string> = {
    contact: process.env.EMAILJS_CONTACT_TEMPLATE_ID!,
    booking: process.env.EMAILJS_BOOKING_TEMPLATE_ID!,
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { formType, ...template_params } = body as {
            formType: FormType
        }

        console.log(template_params)

        const res = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            TEMPLATE_MAP[formType],
            template_params,
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                privateKey: process.env.EMAILJS_PRIVATE_KEY!,
            }
        )

        if (res.status !== 200) {
            throw new Error('Failed to send email')
        }

        return NextResponse.json(res)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({
                status: 400,
                message: err.message,
            })
        }
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
        })
    }
}
