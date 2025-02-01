import { onMounted, onRenderTriggered, ref, Ref, watch } from "vue";

export type Quote = {
    id: number
    quote: string
    author: string
}

export type QuotesResponse = {
    quotes: Quote[]
    skip: number
    limit: number
    total: number
}

function debounceFunction(func: Function, delay: number) {
    let timeoutId: number
    const debouncedFunction = function () {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            func()
        }, delay)
    }
    debouncedFunction.cancel = () => clearTimeout(timeoutId)
    return debouncedFunction
}

export const PAGESIZE = 10

export function useQuotes(page: Ref<number>) {

    const quotes = ref<Quote[]>([])
    const total = ref(0)
    const loading = ref(false)

    const loaderFunc = async () => {
        const search = new URLSearchParams()
        if (page.value > 1) {
            search.set("skip", ((page.value - 1) * PAGESIZE).toString())
        }
        const debouncedLoading = debounceFunction(() => loading.value = true, 500)
        debouncedLoading()
        try {
            const response = await fetch("https://dummyjson.com/quotes"
                + "?" + search.toString()
            )
            const data = await response.json() as QuotesResponse
            quotes.value = data.quotes
            total.value = data.total
        } finally {
            loading.value = false
            debouncedLoading.cancel()
        }
    }
    onMounted(loaderFunc)
    watch([page], loaderFunc)

    onRenderTriggered((event) => {
        console.log('Component render was triggered:', event, page.value)
    })

    return { quotes, total, loading }
}