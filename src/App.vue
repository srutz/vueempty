<script setup lang="ts">
import {onMounted, ref} from "vue"

type Quote = {
  id: number
  quote: string
  author: string
}
type QuoteResponse = {
  quotes: Quote[]
  total: number
  skip: number
  limit: number
}

const quotes = ref<Quote[]>([])


onMounted(async () => {
  const res = await fetch("https://dummyjson.com/quotes?limit=5")
  const json = await res.json()
  const quotesResponse = json as QuoteResponse
  console.table(quotesResponse.quotes)
  quotes.value = quotesResponse.quotes
})

</script>

<template>
  <div>
    <pre>{{ quotes }}</pre>
  </div>
</template>

<style scoped>
</style>
