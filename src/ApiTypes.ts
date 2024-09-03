
export type QuoteType = {
    id: number
    quote: string
    author: string
}

export type QuoteResponse = {
    quotes: QuoteType[]
    total: number
    skip: number
    limit: number
}