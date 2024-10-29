<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


const width = ref(window.innerWidth)
const height = ref(window.innerHeight)

// variante 1
const listener = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
}

onMounted(() => {
    window.addEventListener("resize", listener)
})

onUnmounted(() => {
    window.removeEventListener("resize", listener)
})

</script>

<template>
    <div class="m-4 text-3xl">
        Size: {{ width }} x {{ height }}#
        <div v-if="width < 400">SCHMAL</div>
    </div>
</template>

<style scoped></style>
