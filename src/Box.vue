<template>
    <div class="max-w-[400px] max-h-[320px] shadow-xl rounded-lg bg-white p-4 m-4 gap-2 motion-preset-slide-right flex flex-col" v-auto-animate>
        <div class="font-bold cursor-pointer text-lg select-none" @click="handleClick()">
            {{ expanded ? "▾" : "▸" }}
            {{ title }}
        </div>
        <div v-if="open"><slot name="content"></slot></div>
        <div class="text-gray-500 text-sm self-end">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { vAutoAnimate } from '@formkit/auto-animate';
import { ref } from 'vue';

type PropsType = { 
    title: string 
    expanded?: boolean
}

const { title, expanded } = defineProps<PropsType>() 

const open = ref(expanded)

const emit = defineEmits<{
    "expanded": [ open: boolean, n: number]
}>()

const handleClick = () => {
    open.value = !open.value
    emit("expanded", open.value, 100)
}
</script>
