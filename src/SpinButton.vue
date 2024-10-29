<template>
    <button 
        @click="onToggle" 
        :style="style" 
        class="text-xl text-gray-700">▼</button>
</template>
<script setup lang="ts">
import { computed, CSSProperties, ref } from 'vue';

const emit = defineEmits(["toggle"])

const open = ref(true)

const style = computed(() => {
    return {
        transition: "all 150ms ease-in",
        transform: open.value ? "rotate(0deg)" : "rotate(-90deg)",

    } satisfies CSSProperties
})

const onToggle = () => {
    open.value = !open.value
    emit("toggle")
}


</script>