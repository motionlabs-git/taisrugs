import { create } from 'zustand'
import { IOrderQuery } from '../shopify/orderQuery'

type OrderStore = {
    data: IOrderQuery | null
    loading: boolean
    setData: (data: IOrderQuery | null) => void
}

export const useOrder = create<OrderStore>()((set) => ({
    data: null,
    loading: true,
    setData: (data) => set({ data, loading: false }),
}))
