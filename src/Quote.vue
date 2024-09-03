<script setup lang="ts">

import {defineProps} from "vue"
import type {QuoteType} from "./ApiTypes.ts"

const props = defineProps<{
  subject: QuoteType
}>()
</script>

<template>
  <div class="flex flex-col gap-2 shadow-lg m-4 p-4 border-amber-600 border rounded-lg">
    <div>{{ props.subject.quote }}</div>
    <div class="text-sm self-end">{{ props.subject.author }}</div>
  </div>
</template>
