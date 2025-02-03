import axios from "axios"
import { onMounted, ref } from "vue"

export type Product = {
    title: string
    thumbnail: string
    price: number
    description: string
}

export function useProduct(id: number) {
    const product = ref<Product>()
    onMounted(async () => {
        const p = await axios.get("https://dummyjson.com/products/" 
            + encodeURIComponent(id)) as Product
        product.value = p
    })
    return product
}