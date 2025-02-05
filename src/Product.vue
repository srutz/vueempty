<template>
    <div class="w-[320px] m-4 p-4 bg-white rounded-lg shadow-xl bg-white flex flex-row gap-4">
        <div class="flex flex-col justify-start shrink-0">
            <img :src="product?.thumbnail" class="self-center w-[80px]">
        </div>
        <div class="flex flex-col gap-4">
            <div>{{ product?.title }}</div>
            <div class="text-gray-600">{{ product?.description }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Product, useProduct } from './useProduct';

let { product } = defineProps<{ product?: Product }>()

const route = useRoute()
const id = route.params.id as string

if (!product) {
    const p = useProduct(Number.parseInt(id))
    product = p.product.value
}


</script>