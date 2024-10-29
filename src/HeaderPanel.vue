<template>
    <div class="flex flex-col gap-2 shadow-xl rounded-lg m-8 bg-white p-4">
        <div class="flex gap-2">
            <button @click="open = !open"> {{ icon }}</button>
            <h1 class="text-2xl">{{ header }}</h1>
        </div>
        <template v-if="open">
            <slot></slot>
        </template>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

const { header} = defineProps<{header: string}>()
const open = ref(true)
const icon = computed(() => {
    return open.value ? "▼" : "▶"
})

</script>