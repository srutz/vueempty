<template>
    <div class="bg-gray-200 h-screen flex flex-col justify-center items-center">
        <Clock :delayMs="5000" @intervalPassed="quoteid++"></Clock>
        <div v-if="quote" class="tbox p-4 rounded-lg shadow-xl border border-gray-300 bg-white flex flex-col gap-2 truncate">
            <p>{{ quote.quote }}</p>
            <p className="text-sm self-end text-gray-500 truncate">{{ quote.author }}</p>
        </div>
        <div v-else-if="loading">Loading...</div>
    </div>
</template>
<script setup lang="ts">
import Clock from './Clock.vue'
import { ref, watchEffect } from 'vue'
import { useViewTransition } from './ViewTransition';

const { updateWithTransition } = useViewTransition()


type Quote = { quote: string; author: string }

const quote = ref<Quote>()
const quoteid = ref(1)
const loading = ref(false)


watchEffect(async () => {
    loading.value = true
    try {
        const r = await fetch('https://dummyjson.com/quote/' + encodeURIComponent(quoteid.value))
        const q = await r.json() as Quote
        updateWithTransition(() => quote.value = q)
    } finally {
        loading.value = false
    }
})
</script>