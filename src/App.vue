<script setup lang="ts">
import { ref } from 'vue';
import { useProducts } from './useProducts';

function formatGermanNumber(n: number) {
    const nf = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    return nf.format(n)
}


/* 1: zustand, page und aktuelle products */
const page = ref(1)
const { products, loading, reload } = useProducts(page)

</script>

<template>
  <div class="h-1 grow flex flex-col gap-2" >
    <button :disabled="loading" @click="page++">Load more {{ page }}</button>
    <button :disabled="loading" @click="reload">Reload</button>
    <div v-if="loading">Loading ...</div>
    <div v-else class="h-1 grow overflow-auto flex flex-col gap-2" v-auto-animate>
        <div v-for="(p) in products" :key="p.id" 
            class="m-2 p-4 border border-gray-300 rounded-lg shadow-xl gap-2">
            <div><img class="h-16" :src="p.thumbnail"></div>
            <div class="flex flex-row justify-between gap-2">
                <div>{{ p.title }}</div>
                <div>€ {{ formatGermanNumber(p.price)}}</div>
            </div>
            <div class="text-sm text-gray-700">{{ p.description }}</div>
        </div>
    </div>
  </div>
</template>
