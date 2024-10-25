<template>
    <div class="mb-4 text-sm">{{ time.toLocaleTimeString() }}</div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

// diese Komponent wirft alle delay_millisekunden ein Event aus

const { delayMs = 10_000 } = defineProps({ delayMs: Number })
const emit = defineEmits(['intervalPassed'])
const time = ref<Date>(new Date())

onMounted(() => {
    const interval = setInterval(() => {
        time.value = new Date()
        emit('intervalPassed')
    }, delayMs)
    // wichtig(!)   cleanup des Intervals
    onUnmounted(() => clearInterval(interval))
})
</script>