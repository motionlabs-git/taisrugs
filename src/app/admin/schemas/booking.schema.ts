import * as z from 'zod'

export const bookingValidation = z.object({
    value: z.string(),
})

export type BookingSchema = z.infer<typeof bookingValidation>
