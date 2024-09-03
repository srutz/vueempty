
import {ref,watchEffect} from "vue";

export const CHUNK_SIZE = 2

export const useQuotesData = (offset: ref<number>) => {
    const loading = ref(false)
    const error = ref()
    const data = ref<Quote[]>([])
    (async() => {
        watchEffect(async () => {
            loading.value = true
            try {
                const res = await fetch("https://dummyjson.com/quotes"
                    + "?limit=" + encodeURIComponent(CHUNK_SIZE)
                    + "&skip=" + encodeURIComponent(offset.value))
                const json = await res.json()
                //await delay(1_000)
                const qresponse = json as QuoteResponse
                data.value.push(...qresponse.quotes)
            } catch (e) {
                error.value = e
            } finally {
                loading.value = false
            }
        })
    })()
    return { error, loading, data }
}


/* delay asynchronously */
const delay = async (delayMs: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delayMs)
    })
}
