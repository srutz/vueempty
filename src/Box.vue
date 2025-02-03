<template>
    <div class="shadow-xl rounded-lg bg-white p-4 m-4
        motion-preset-slide-right flex flex-col" v-auto-animate>
        <div class="font-bold cursor-pointer select-none">
            {{ expanded ? "▾" : "▸" }}
            {{ title }}
        </div>
        <div v-if="expanded" ><slot></slot></div>
        <div v-if="footer" class="text-gray-500 text-sm self-end">
            {{ footer }}</div>
    </div>
</template>
<script lang="ts" setup>
import { vAutoAnimate } from '@formkit/auto-animate';
type PropsType = { 
    title: string 
    footer?: string
    expanded?: boolean
}
const { title, expanded, footer } = defineProps<PropsType>() 
</script>
