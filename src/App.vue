<script setup lang="ts">
import { ref } from 'vue';
import { useQuotes } from './useQuotes';


const page = ref(1)
const { quotes, loading } = useQuotes(page)

</script>

<template>
    <div class="grow bg-orange-500">
        <div v-if="loading" class="text-center">
            <p>Loading...</p>
        </div>
        <div v-else>
            <div v-for="(quote, i) in quotes" :key="quote.id">
                <p class="motion-preset-slide-right" >{{ quote.quote }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
