<template>
    <div class="w-96 bg-gray-200 border-lg shadow-xl p-4 flex flex-col gap-4 m-4 items-center">
        <div class="title text-4xl font-bold">{{title}}</div>
        <div class="count text-3xl">{{ count }}</div>
        <button class="button w-64" @click="count++">Increment</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const { title } = defineProps<{ title: string }>()
const count = ref(1)
</script>