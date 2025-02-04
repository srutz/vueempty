<template>
    <div class="flex flex-row gap-4">
        <img :src="product?.thumbnail" class="w-32">
        <div class="flex flex-col gap-4">
            <div>{{ product?.title }}</div>
            <div v-if="c.loggedIn">Hello {{ c.user }}</div>
            <div class="text-gray-600">{{ product?.description }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Product } from './useProduct';
import { useUserContext } from './useUserContext';

const { product } = defineProps<{ product?: Product }>()

const c = useUserContext()


</script>