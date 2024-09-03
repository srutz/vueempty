<script setup lang="ts">
import {onMounted} from "vue"

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

onMounted(async () => {
  const res = await fetch("https://dummyjson.com/quotes?limit=5")
  const json = await res.json()
  const quotesResponse = json as QuoteResponse
  console.table(quotesResponse.quotes)
})

</script>

<template>
  <div class="text-3xl">hi</div>
</template>

<style scoped>
</style>
