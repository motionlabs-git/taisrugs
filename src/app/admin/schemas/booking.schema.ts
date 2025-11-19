import * as z from 'zod'

export const bookingValidation = z.object({
    value: z.iso
        .datetime({ local: true, message: 'Neplatná hodnota' })
        .nonempty('Datum a čas musí být vyplněné'),
})

export type BookingSchema = z.infer<typeof bookingValidation>
