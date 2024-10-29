import { onMounted, ref, Ref, watch } from "vue"
import { Product, ProductsResponse } from "./Types"

export function useProducts(page: Ref<number>) {
    const PAGE_SIZE = 2
    const products = ref<Product[]>([])
    const loading = ref(false)


    /* 1: Funktion um Produkte der Page N in den zustand zu laden */
    const loadProducts = async(reloading?: boolean) => {
        loading.value = true
        try {
            const res = await fetch("https://dummyjson.com/products"
                + "?skip=" + ((page.value - 1) * PAGE_SIZE)
                + "&limit=" + PAGE_SIZE)
            const data = await res.json() as ProductsResponse

            products.value = reloading 
                ? data.products
                : [... products.value, ...data.products]
        } finally {
            loading.value = false
        }
    }

    /* 2: Initiales laden */
    onMounted(async () => {
        loadProducts()
    })

    /* 3: Neuladen wenn sich Page geändert hat */
    watch([page], () => loadProducts())

    /* returning the data, the loading state and a reload-function */
    return { products, loading, reload: loadProducts }
}
