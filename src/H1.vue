<template>
    <h1 
        :style="cstyles" @click="big = !big"><slot></slot></h1>
</template>
<script setup lang="ts">
import { computed, ref, StyleValue } from 'vue';


const big = ref(false)

const cstyles = computed(() => {
    return {
        fontSize: big.value ? "50px" : "30px",
        transform: big.value ? "rotate(-30deg)" : "",
        transition: "all 500ms ease",
    } satisfies StyleValue
})


</script>
