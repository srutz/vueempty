<template>
    <div class="flex flex-col gap-2 shadow-xl rounded-lg m-8 bg-white p-4">
        <h1 class="text-2xl">{{ header }}</h1>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">

const { header} = defineProps<{header: string}>()

</script>