import axios from "axios"
import { onMounted, ref } from "vue"

export type Product = {
    id: number
    title: string
    thumbnail: string
    price: number
    description: string
}

export function useProduct(id: number) {
    const product = ref<Product>()
    const errorMessage = ref<string>()
    onMounted(async () => {
        try {
            const p = await axios.get<Product>(
                "https://dummyjson.com/products/" + encodeURIComponent(id))
            product.value = p.data
        } catch (e) {
            errorMessage.value = e?.toString()
        }
    })
    return { product, errorMessage }
}