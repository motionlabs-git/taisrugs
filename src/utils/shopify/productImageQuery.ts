export interface IProductImageQuery {
    src: string
    altText: string | null
    width: number
    height: number
}

export const productImageQuery = `
    src
    altText
    width
    height
`
