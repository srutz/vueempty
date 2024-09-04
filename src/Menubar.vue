<script setup lang="ts">

import {CSSProperties} from "vue";

</script>

<template>
  <div class="bg-blue-400 flex gap-2 items-center p-2">
    <div class="uppercase text-xl">Meine App</div>
    <div class="grow"></div>
    <RouterLink to="/">Main</RouterLink>
    <router-link to="/users">Users</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

