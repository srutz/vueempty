<script setup lang="ts">
import { Quote } from './useQuotes';


const { quote } = defineProps<{ quote: Quote }>()

</script>
<template>
    <div class="w-64 m-2 p-4 bg-white shadow-lg rounded-lg flex items-stretch">
        <div class="flex items-stretch">
            <div class="flex-shrink-0">
            </div>
            <div class="flex flex-col gap-2">
                <div class="grow text-sm text-gray-800">{{ quote.quote }}</div>
                <div class="self-end text-xs text-gray-500">{{ quote.author }}</div>
            </div>
        </div>
    </div>
</template>