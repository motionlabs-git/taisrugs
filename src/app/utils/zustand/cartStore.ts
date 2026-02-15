import { create } from 'zustand'
import { ICartMerchandiseQuery } from '../shopify/cartQuery'

type CartStore = {
    data: ICartMerchandiseQuery | null
    loading: boolean
    setData: (data: ICartMerchandiseQuery | null) => void
    setLoading: (loading: boolean) => void
}

export const useCart = create<CartStore>()((set) => ({
    data: null,
    loading: true,
    setData: (data) => set({ data, loading: false }),
    setLoading: (loading) => set({ loading }),
}))
