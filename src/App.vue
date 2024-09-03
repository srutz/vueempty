<script setup lang="ts">
import {onMounted, ref, watchEffect} from "vue"
import {QuoteType} from "./ApiTypes.ts";
import Quote from "./Quote.vue"

type QuoteResponse = {
  quotes: QuoteType[]
  total: number
  skip: number
  limit: number
}
const CHUNK_SIZE = 2
const quotes = ref<QuoteType[]>([])
const offset = ref(0)
const loading = ref(false)

const delay = async (delayMs: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMs)
  })
}

watchEffect(async () => {
  loading.value = true
  try {
    console.time("timer1")
    const res = await fetch("https://dummyjson.com/quotes"
        + "?limit=" + encodeURIComponent(CHUNK_SIZE)
        + "&skip=" + encodeURIComponent(offset.value))
    const json = await res.json()
    //await delay(10_000)
    const quotesResponse = json as QuoteResponse
    quotes.value.push(...quotesResponse.quotes)
    console.timeEnd("timer1")
  } finally {
    loading.value = false
  }
})
const loadmore = () => {
  offset.value += CHUNK_SIZE
}

</script>
<template>
  <div class="flex flex-col gap-2">
    <div v-if="loading">Loading data</div>
    <div v-else v-for="quote in quotes" :key="quote.id">
      <Quote :subject="quote" />
    </div>
    <button @click="loadmore()">Load more quotes</button>
  </div>
</template>
