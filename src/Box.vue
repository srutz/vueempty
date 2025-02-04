<template>
    <div class="shadow-xl rounded-lg bg-white p-4 m-4 gap-2
        motion-preset-slide-right flex flex-col" v-auto-animate>
        <div class="font-bold cursor-pointer text-lg select-none" @click="handleClick()">
            {{ expanded ? "▾" : "▸" }}
            {{ title }}
        </div>
        <div v-if="open" ><slot></slot></div>
        <div v-if="footer" class="text-gray-500 text-sm self-end">
            {{ footer }}</div>
    </div>
</template>

<script lang="ts" setup>
import { vAutoAnimate } from '@formkit/auto-animate';
import { ref } from 'vue';

type PropsType = { 
    title: string 
    footer?: string
    expanded?: boolean
}

const { title, expanded, footer = "Deutzer-Greetings"} = defineProps<PropsType>() 

const open = ref(expanded)

const emit = defineEmits<{
    "expanded": [ open: boolean, n: number]
}>()

const handleClick = () => {
    open.value = !open.value
    emit("expanded", open.value, 100)
}
</script>
