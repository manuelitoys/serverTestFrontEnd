export interface itemsInterface{
    id?: string,
    title?: string,
    price?: {
        currency?: string,
        amount?: number,
        decimals?: number
    },
    picture?: string,
    condition?: string,
    free_shipping?: boolean,
    categories?: {},
    category_id?: string
}