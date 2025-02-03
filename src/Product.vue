<template>
    <div class="flex flex-row gap-4">
        <img :src="product?.thumbnail" class="w-32">
        <div class="flex flex-col gap-4">
            <div>{{ product?.title }}</div>
            <div class="text-gray-600">{{ product?.description }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Product } from './useProduct';

const { product } = defineProps<{ product?: Product }>()
console.log("product", product)

</script>