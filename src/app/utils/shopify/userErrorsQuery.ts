export interface IErrorQuery {
    field: string[] | null
    message: string
}

export const errorQuery = `
    field
    message
`
