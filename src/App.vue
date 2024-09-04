<script setup lang="ts">
import Menubar from "./Menubar.vue";

</script>

<template>
  <div class="bg-white grow flex flex-col items-stretch">
    <Menubar></Menubar>
    <div class="flex flex-col h-1 grow overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
</style>
