import * as z from 'zod'

export const removeCartLineValidation = z.object({
    lineId: z.string().min(1, 'Line ID is required'),
})

export type RemoveCartLineSchema = z.infer<typeof removeCartLineValidation>
