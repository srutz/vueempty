<template>
    <div class="bg-gray-200 h-screen flex flex-col justify-center items-center">
        <div v-if="quote" class="p-4 rounded-lg shadow-xl border border-gray-300 bg-white flex flex-col gap-2">
            <p>{{ quote.quote }}</p>
            <p className="text-sm self-end text-gray-500">{{ quote.author }}</p>
        </div>
        <div v-else-if="loading">Loading...</div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
type Quote = { quote: string; author: string }

const quote = ref<Quote>()
const loading = ref(false)
onMounted(async () => {
    loading.value = true
    try {
        await delay(5_000)
        const r = await fetch('https://dummyjson.com/quote/392')
        quote.value = await r.json() as Quote
    } finally {
        loading.value = false
    }
})
function delay(ms: number) { return new Promise(resolve => setTimeout(resolve, ms)) }
</script>
