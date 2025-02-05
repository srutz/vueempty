<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()

const openPage = () => {
  router.push({ 
    path: "/products",
    query: {
      page: 2
    }
  })
}
</script>

<template>
  <div class="bg-blue-400 flex gap-2 items-center p-2">
    <div class="uppercase text-xl">Meine App</div>
    <div class="grow"></div>
    <RouterLink to="/">Main</RouterLink>
    <router-link to="/users">Users</router-link>
    <router-link to="/about">About</router-link>
    <RouterLink to="/products?page=1">Page 1</RouterLink>
    <div class="cursor-pointer" @click="openPage" >Page 2</div>
  </div>
</template>

