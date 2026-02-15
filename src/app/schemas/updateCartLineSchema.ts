import * as z from 'zod'

export const updateCartLineValidation = z.object({
    lineId: z.string().min(1, 'Line ID is required'),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
})

export type UpdateCartLineSchema = z.infer<typeof updateCartLineValidation>
