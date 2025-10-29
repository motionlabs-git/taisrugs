import * as z from 'zod'

export const productValidation = z.object({
    id: z.string().min(1, 'Product ID is required'),
    title: z.string().min(1, 'Product title is required'),
    description: z.string().optional(),
    handle: z.string().min(1, 'Product handle is required'),
    priceRangeV2: z.object({
        minVariantPrice: z.object({
            amount: z.string().min(1, 'Price amount is required'),
            currencyCode: z.string().min(1, 'Currency code is required'),
        }),
    }),
    variants: z.object({
        nodes: z.array(
            z.object({
                id: z.string().min(1, 'Variant ID is required'),
            })
        ),
    }),
    images: z.object({
        nodes: z.array(
            z.object({
                src: z.string().url('Image source must be a valid URL'),
                altText: z.string().optional(),
                width: z.number().min(1, 'Image width must be positive'),
                height: z.number().min(1, 'Image height must be positive'),
            })
        ),
    }),
})

export type ProductSchema = z.infer<typeof productValidation>
