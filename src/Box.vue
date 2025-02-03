<template>
    <div class="shadow-xl rounded-lg bg-white p-4 m-4
        motion-preset-slide-right flex flex-col">
        <div class="font-bold">{{ props.title }}</div>
        <div><slot></slot></div>
        <div v-if="props.footer" class="text-gray-500 text-sm self-end">
            {{ props.footer }}</div>
    </div>
</template>
<script lang="ts" setup>
type PropsType = { 
    title: string 
    footer?: string
}
const props = defineProps<PropsType>()
</script>
