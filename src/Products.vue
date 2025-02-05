<template>
    <div class="h-1 grow flex flex-col items-start overflow-y-auto">
        <div class="flex flex-wrap justify-center">
            <ProductPanel v-for="(product) in products" 
                :product="product"
                :key="product.id" />
        </div>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import ProductPanel from './Product.vue'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export type Product = {
    id: number
    title: string
    thumbnail: string
    price: number
    description: string
}

type ProductsReponse = {
    products: Product[],
    skip: number,
    limit: number,
    total: number,
}

const route = useRoute()
const page = Number.parseInt(route.query.page as string || "1")

const limit = 6
const skip = (page - 1) * limit

const products = ref<Product[]>([])
onMounted(async () => {
    const response = await axios.get("https://dummyjson.com/products", {
        params: {
            skip,
            limit,
        }
    })
    products.value = (response.data as ProductsReponse).products
})

</script>