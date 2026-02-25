import * as z from 'zod'

export const ContactFormSchema = z.object({
    name: z.string().nonempty('Toto pole je povinné'),
    email: z.email('Neplatný email').nonempty('Toto pole je povinné'),
    phone: z
        .string()
        .transform((val) => val.trim())
        .refine((val) => val === '' || /^(?:\d\s*){9}$/.test(val), {
            message: 'Neplatné telefonní číslo',
        })
        .optional(),
    message: z.string().nonempty('Toto pole je povinné'),
    image: z
        .string('Obrázek je ve špatném formátu')
        .startsWith('data:')
        .nullable()
        .optional(),
    gdpr: z.literal<boolean>(true, 'Souhlas musí být udělen'),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>
