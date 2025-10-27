import * as z from 'zod'

export const addToCartValidation = z.object({
    variantId: z.string().min(1, 'Variant ID is required'),
})

export type AddToCartSchema = z.infer<typeof addToCartValidation>
