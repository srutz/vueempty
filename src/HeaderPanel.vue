<template>
    <div class="flex flex-col">
        <Box >
            <div class="flex gap-2">
                <SpinButton @toggle="onToggle"></SpinButton>
                <h1 class="text-2xl">{{ header }}</h1>
            </div>
            <div v-if="open" >
                <slot></slot>
            </div>
        </Box>
    </div>
</template>
<script setup lang="ts">
import SpinButton from "./SpinButton.vue"
import Box from "./Box.vue"
import { ref } from 'vue';

const { header} = defineProps<{header: string}>()
const open = ref(true)

const onToggle = () => open.value = !open.value

</script>