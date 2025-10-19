import { create } from 'zustand'

type Store = {
    totalCount: number
    cartItems: Array<unknown>
    increaseTotalCount: () => void
    decreaseTotalCount: () => void
}

export const useCart = create<Store>()((set) => ({
    totalCount: 0,
    cartItems: [],
    increaseTotalCount: () =>
        set((state) => ({ totalCount: state.totalCount + 1 })),
    decreaseTotalCount: () =>
        set((state) => ({ totalCount: state.totalCount - 1 })),
}))
