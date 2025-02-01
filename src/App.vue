<script setup lang="ts">
import { ref } from 'vue';
import { useQuotes } from './useQuotes';
import Quote from './Quote.vue';

const page = ref(1)
const { quotes, loading } = useQuotes(page)

</script>

<template>
    <div class="grow overflow-y-auto">
        <div v-if="loading" class="text-center">
            <p>Loading...</p>
        </div>
        <div v-else class="flex flex-wrap gap-2 justify-center">
            <div v-for="(quote, i) in quotes" :key="quote.id" :class='"flex gap-2 " + (i % 2 == 0 ? "motion-preset-slide-left" : "motion-preset-slide-right")'>
                <Quote :quote="quote" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
