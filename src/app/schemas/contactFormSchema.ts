import * as z from 'zod'

const fileSizeLimit = 5 * 1024 * 1024

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
        .instanceof(File, { message: 'Neplatný typ souboru' })
        .refine(
            (file) =>
                [
                    'image/png',
                    'image/jpeg',
                    'image/jpg',
                    'image/svg+xml',
                    'image/gif',
                ].includes(file.type),
            { message: 'Neplatný typ obrázku' }
        )
        .refine((file) => file.size <= fileSizeLimit, {
            message: 'Obrázek je příliš velký 5MB',
        })
        .nullable()
        .optional(),
    gdpr: z.literal<boolean>(true, 'Souhlas musí být udělen'),
})

export type ContactFormType = z.infer<typeof ContactFormSchema>
