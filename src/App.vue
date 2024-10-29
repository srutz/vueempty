<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Product, ProductsResponse } from './Types';

function formatGermanNumber(n: number) {
    const nf = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    return nf.format(n)
}

const products = ref<Product[]>([])
const page = ref(1)

const PAGE_SIZE = 20

onMounted(async () => {
    const res = await fetch("https://dummyjson.com/products?" + (page.value - 1 * PAGE_SIZE))
    const data = await res.json() as ProductsResponse
    products.value = data.products
})

</script>

<template>
  <div class="h-1 grow flex flex-col gap-2">
    <button @click="page++">Next page</button>
    <div class="h-1 grow overflow-scroll flex flex-col gap-2">
        <div v-for="p in products">
            {{ p.title }} {{ formatGermanNumber(p.price)}}        
        </div>
    </div>
  </div>
</template>
