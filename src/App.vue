<script setup lang="ts">
import { useWindowSize } from './WindowSize';


const { width, height } = useWindowSize()

</script>

<template>
    <div class="m-4 text-3xl">
        Size: {{ width }} x {{ height }}
        <div v-if="width < 400">SCHMAL</div>
    </div>
</template>

<style scoped></style>
