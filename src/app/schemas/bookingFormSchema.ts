import * as z from 'zod'

export const BookingFormSchema = z.object({
    name: z.string().nonempty('Toto pole je povinné'),
    phone: z
        .string()
        .transform((val) => val.trim())
        .refine((val) => val === '' || /^(?:\d\s*){9}$/.test(val), {
            message: 'Neplatné telefonní číslo',
        })
        .optional(),
    email: z.email('Neplatný email').nonempty('Toto pole je povinné'),
    message: z.string().nullable(),
    date: z
        .string('Prosím vyber termín kurzu')
        .nonempty('Prosím vyber termín kurzu'),
    gdpr: z.literal<boolean>(true, 'Souhlas musí být udělen'),
})

export type BookingFormType = z.infer<typeof BookingFormSchema>
