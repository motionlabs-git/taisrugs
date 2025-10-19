import { axiosShopify } from './axiosShopify'

export interface ICreateOrderItem {
    title: string
    price: number
    grams: string
    quantity: number
    tax_lines: ICreateOrderItemTaxLine[]
}

interface ICreateOrderItemTaxLine {
    price: number
    rate: number
    title: string
}

export async function createOrder(item: ICreateOrderItem) {
    try {
        const response = await axiosShopify.post('/orders.json', {
            order: { line_items: [item] },
        })

        return response.data.order
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}
