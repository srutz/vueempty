<script setup lang="ts">
import GridImage from './GridImage.vue';

</script>

<template>
    <div class="h-1 grow bg-slate-200 flex flex-col gap-2 items-center justify-center">
        <GridImage 
            :rows="5"
            :columns="5"
            :gap="3"
            imageUrl="https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg"></GridImage>
    </div>
</template>

<style scoped></style>
