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
