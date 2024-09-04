<script setup lang="ts">
import Menubar from "./Menubar.vue";

</script>

<template>
  <div class="bg-white grow flex flex-col items-stretch">
    <Menubar></Menubar>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
