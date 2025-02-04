<template>
    <div class="flex flex-row gap-4">
        <img :src="product?.thumbnail" class="w-32">
        <div class="flex flex-col gap-4">
            <div>{{ product?.title }}</div>
            <div v-if="height >= 400" class="text-gray-600">{{ product?.description }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { toRefs, watchEffect } from 'vue';
import { Product } from './useProduct';
import { useWindowSize } from './useWindowSize';

const { product } = defineProps<{ product?: Product }>()

const size = useWindowSize()
const { height } = toRefs(size)

watchEffect(() => console.log(height.value))

</script>