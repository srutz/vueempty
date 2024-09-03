<script setup lang="ts">
import {onMounted, ref} from "vue"
import {QuoteType} from "./ApiTypes.ts";
import Quote from "./Quote.vue"

type QuoteResponse = {
  quotes: QuoteType[]
  total: number
  skip: number
  limit: number
}

const quotes = ref<QuoteType[]>([])

onMounted(async () => {
  const res = await fetch("https://dummyjson.com/quotes?limit=15")
  const json = await res.json()
  const quotesResponse = json as QuoteResponse
  console.table(quotesResponse.quotes)
  quotes.value = quotesResponse.quotes
})
</script>
<template>
  <div class="flex flex-col gap-2">
    <div v-for="quote in quotes" :key="quote.id">
      <Quote :subject="quote" />
    </div>
  </div>
</template>
