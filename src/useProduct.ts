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

export function useProducts(ids: number[]) {
    const products = ref<Product[]>([])
    const errorMessage = ref<string>()
    onMounted(async () => {
        try {
            for (const id of ids) {
                const p = await axios.get<Product>(
                    "https://dummyjson.com/products/" + encodeURIComponent(id))
                products.value.push(p.data)
            }
        } catch (e) {
            errorMessage.value = e?.toString()
        }
    })
    return { products, errorMessage }
}

