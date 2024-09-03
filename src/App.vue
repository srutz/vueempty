<script setup lang="ts">
import {ref} from "vue"
import Quote from "./Quote.vue"
import {CHUNK_SIZE, useQuotesData} from "./UseQuotesData.ts";
import Counter from "./Counter.vue"
const offset = ref(0)
const { loading, error, data } = useQuotesData(offset)
const loadMore = () => { offset.value += CHUNK_SIZE }

</script>
<template>
  <div class="flex flex-col gap-2">
    <div v-if="error">Error: {{error}}</div>
    <div v-else-if="loading">Loading data</div>
    <div v-else v-for="quote in data" :key="quote.id" class="flex flex-col gap-2">
      <Quote :subject="quote" />
    </div>
    <button @click="loadMore()">Load more quotes</button>
  </div>
</template>
