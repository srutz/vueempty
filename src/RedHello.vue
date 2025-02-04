<template>
    <div class='bg-red-600 w-32 min-h-32 flex 
    flex-col justify-center items-center text-white'>
        RED HELLO {{ counter }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(1)
</script>