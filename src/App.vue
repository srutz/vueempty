<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { Product, ProductsResponse } from './Types';

function formatGermanNumber(n: number) {
    const nf = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    return nf.format(n)
}
async function delay(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis))
}

const PAGE_SIZE = 3

/* 1: zustand, page und aktuelle products */
const page = ref(1)
const products = ref<Product[]>([])
const loading = ref(false)


/* 2: Funktion um Produkte der Page N in den zustand zu laden */
const loadProducts = async () => {
    loading.value = true
    try {
        const res = await fetch("https://dummyjson.com/products"
            + "?skip=" + ((page.value - 1) * PAGE_SIZE)
            + "&limit=" + PAGE_SIZE)
        const data = await res.json() as ProductsResponse
        await delay(3_000)
        products.value = [... products.value, ...data.products]
    } finally {
        loading.value = false
    }
}

/* 3: Initiales laden */
onMounted(async () => {
    loadProducts()
})

/* 4: Neuladen wenn sich Page geändert hat */
watch([page], () => loadProducts())

</script>

<template>
  <div class="h-1 grow flex flex-col gap-2">
    <button :disabled="loading" @click="page++">Load more {{ page }}</button>
    <div v-if="loading">Loading ...</div>
    <div v-else class="h-1 grow overflow-scroll flex flex-col gap-2">
        <div v-for="p in products">
            {{ p.title }} {{ formatGermanNumber(p.price)}}        
        </div>
    </div>
  </div>
</template>
