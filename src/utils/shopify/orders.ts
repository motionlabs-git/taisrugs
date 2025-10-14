import { shopifyAxios } from './axiosClient'
import { ICreateOrderItem } from '@/types/order'

export async function createOrder(item: ICreateOrderItem) {
    try {
        const response = await shopifyAxios.post('/orders.json', {
            order: { line_items: [item] },
        })

        return response.data.order
    } catch (error) {
        console.error('Error fetching all products:', error)
        return null
    }
}
