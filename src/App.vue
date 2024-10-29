<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
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


/* 1: zustand, page und aktuelle products */
const page = ref(1)

const PAGE_SIZE = 2
const products = ref<Product[]>([])
const loading = ref(false)


/* 2: Funktion um Produkte der Page N in den zustand zu laden */
const loadProducts = async() => {
    try {
        const res = await fetch("https://dummyjson.com/products"
            + "?skip=" + ((page.value - 1) * PAGE_SIZE)
            + "&limit=" + PAGE_SIZE)
        const data = await res.json() as ProductsResponse
        products.value = [... products.value, ...data.products]
    } finally {
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
  <div class="h-1 grow flex flex-col gap-2" >
    <button :disabled="loading" @click="page++">Load more {{ page }}</button>
    <div v-if="loading">Loading ...</div>
    <div v-else class="h-1 grow overflow-auto flex flex-col gap-2" v-auto-animate>
        <div v-for="(p, index) in products" :key="p.id" 
            class="m-2 p-4 border border-gray-300 rounded-lg shadow-xl gap-2">
            <div><img class="h-32" :src="p.thumbnail"></div>
            <div class="flex flex-row justify-between gap-2">
                <div>{{ p.title }}</div>
                <div>€ {{ formatGermanNumber(p.price)}}</div>
            </div>
            <div class="text-sm text-gray-700">{{ p.description }}</div>
        </div>
    </div>
  </div>
</template>
